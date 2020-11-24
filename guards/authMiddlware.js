import UsersDataService from "../modules/users/data.service";
import SessionController from "../modules/users/sessionController";
import {getUserEmailFromSession} from "../utils/session";
import {getClientIp} from "../utils/network";

const controller = new SessionController(new UsersDataService());

export const authMiddleware = async (ctx, next) => {
    if (ctx.session.isNew) {
        ctx.data = null;
        ctx.status = 401;
    } else {
        const storedSession = await controller.getSession(getUserEmailFromSession(ctx));

        if (!storedSession) {
            ctx.data = null;
            ctx.status = 401;
        } else {
            const validSession = storedSession.expired > Date.now() && storedSession.info === getClientIp(ctx);

            console.log(storedSession.expired, Date.now());
            console.log(storedSession.info , getClientIp(ctx));

            if (!validSession) {
                ctx.data = null;
                ctx.status = 401;
            }
        }
    }

    ctx.type = 'json';
    await next()
};
