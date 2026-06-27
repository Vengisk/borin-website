import { timingSafeEqual, issueToken, json } from '../_lib/auth.js';

export async function onRequestPost({ request, env }) {
    let body;
    try { body = await request.json(); } catch { return json({ error: 'invalid json' }, 400); }

    const pw = body.password || '';
    if (!pw || !timingSafeEqual(pw, env.ADMIN_PASSWORD || '')) {
        return json({ error: '密码错误' }, 401);
    }
    const token = await issueToken(env.AUTH_SECRET, 3600);
    return json({ token });
}

export async function onRequest() {
    return json({ error: 'method not allowed' }, 405);
}
