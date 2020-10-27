
export function getUserEmailFromSession(ctx) {
    return (ctx.session.user || '').split('$')[0];
}
