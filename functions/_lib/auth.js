// 共享认证工具。下划线开头的目录不会被 Pages 路由，安全用于内部代码。
const enc = new TextEncoder();

export function timingSafeEqual(a, b) {
    const ab = enc.encode(a);
    const bb = enc.encode(b);
    if (ab.length !== bb.length) return false;
    let diff = 0;
    for (let i = 0; i < ab.length; i++) diff |= ab[i] ^ bb[i];
    return diff === 0;
}

function b64url(bytes) {
    let s = btoa(String.fromCharCode(...new Uint8Array(bytes)));
    return s.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function b64urlDecode(str) {
    str = str.replace(/-/g, '+').replace(/_/g, '/');
    while (str.length % 4) str += '=';
    return Uint8Array.from(atob(str), c => c.charCodeAt(0));
}

async function hmacKey(secret) {
    return crypto.subtle.importKey(
        'raw', enc.encode(secret),
        { name: 'HMAC', hash: 'SHA-256' },
        false, ['sign', 'verify']
    );
}

export async function issueToken(secret, ttlSeconds = 3600) {
    const payload = { exp: Date.now() + ttlSeconds * 1000 };
    const payloadStr = JSON.stringify(payload);
    const key = await hmacKey(secret);
    const sig = await crypto.subtle.sign('HMAC', key, enc.encode(payloadStr));
    return b64url(enc.encode(payloadStr)) + '.' + b64url(sig);
}

export async function verifyToken(secret, token) {
    if (!token || typeof token !== 'string' || !token.includes('.')) return false;
    const [payloadPart, sigPart] = token.split('.');
    let payloadBytes, sigBytes;
    try {
        payloadBytes = b64urlDecode(payloadPart);
        sigBytes = b64urlDecode(sigPart);
    } catch {
        return false;
    }
    const key = await hmacKey(secret);
    const ok = await crypto.subtle.verify('HMAC', key, sigBytes, payloadBytes);
    if (!ok) return false;
    try {
        const payload = JSON.parse(new TextDecoder().decode(payloadBytes));
        return typeof payload.exp === 'number' && payload.exp > Date.now();
    } catch {
        return false;
    }
}

export const json = (data, status = 200) =>
    new Response(JSON.stringify(data), {
        status,
        headers: { 'Content-Type': 'application/json' },
    });
