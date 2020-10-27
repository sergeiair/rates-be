export const authMiddleware = async (ctx, next) => {
    if (ctx.session.isNew) {
        ctx.data = null;
        ctx.status = 401;
    }

    ctx.type = 'json';

    await next()
};
