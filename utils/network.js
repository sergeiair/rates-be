export function getClientIp(req) {
    return req.headers['referer'];
}
