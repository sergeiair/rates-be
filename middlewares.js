import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import config from "./config";
import routes from "./routes";
import {appLogger} from "./logger/appLogger";

const cors = require('@koa/cors');
const mount = require('koa-mount');
const session = require('koa-session-auth');

const sessionConfig = {
    useToken: true, /** (boolean) use token-session or not (default true) */
    useCookie: false, /** (boolean) use cookie-session or not (default true) */
    key: 'GoAway', /** (string) cookie and token key (default is KoaToken) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    autoCommit: true, /** (boolean) automatically commit headers (default true) */
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
    genid: (ctx) => appLogger.warn(ctx)
};

export default (app) => {
    app.use(async (ctx, next) => {
        try {
            await next();

            if (ctx.status === 404) {
                ctx.throw(404)
            }

            if (ctx.status === 401) {
                ctx.throw(401)
            }

            if (ctx.status === 200) {
                ctx.body = {
                    status: 200,
                    data: ctx.body
                }
            }

        } catch (err) {
            ctx.status = err.status || 500;
            ctx.type = 'json';
            ctx.body = {
                status: ctx.status,
                message: err.message
            };

            ctx.app.emit('error', err, ctx)
        }
    });

    app.keys = ['11223344qqwweerr'];

    app.use(bodyParser());
    app.use(serve(config.static_dir.root));
    app.use(cors( ));
    app.use(session(sessionConfig, app));
    app.use(mount('/api', routes()));

    app.on('error', (err) => {
        appLogger.error(err.message);
    });
}


