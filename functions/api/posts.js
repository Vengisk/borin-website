import { verifyToken, json } from '../_lib/auth.js';

const BIN = (env) => `https://api.jsonbin.io/v3/b/${env.JSONBIN_BIN_ID}`;

export async function onRequestGet({ env }) {
    const res = await fetch(`${BIN(env)}/latest`, {
        headers: { 'X-Master-Key': env.JSONBIN_KEY },
    });
    if (!res.ok) return json({ posts: [] });
    const data = await res.json();
    return json({ posts: data.record?.posts || [] });
}

export async function onRequestPut({ request, env }) {
    const auth = request.headers.get('Authorization') || '';
    const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';

    if (!(await verifyToken(env.AUTH_SECRET, token))) {
        return json({ error: '未授权或登录已过期' }, 401);
    }

    let body;
    try { body = await request.json(); } catch { return json({ error: 'invalid json' }, 400); }
    if (!Array.isArray(body.posts)) return json({ error: 'posts must be an array' }, 400);
    if (body.posts.length > 500) return json({ error: 'too many posts' }, 413);

    const res = await fetch(BIN(env), {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'X-Master-Key': env.JSONBIN_KEY },
        body: JSON.stringify({ posts: body.posts }),
    });
    if (!res.ok) return json({ error: 'save failed' }, 502);
    return json({ ok: true });
}

export async function onRequest() {
    return json({ error: 'method not allowed' }, 405);
}
