import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import config from "./config";
import routes from "./routes";
import {appLogger} from "./logger/appLogger";

const cors = require('@koa/cors');
const mount = require('koa-mount');
const session = require('koa-session');
const passport = require('koa-passport');

export default (app) => {
    app.use(async (ctx, next) => {
        try {
            await next();

            if (ctx.status === 404) {
                ctx.throw(404)
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

    app.keys = ['rer9Ohd7'];
    app.use(session(app));
    app.use(bodyParser());
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(serve(config.static_dir.root));
    app.use(cors());
    app.use(mount('/api', routes()));


    app.on('error', (err, ctx) => {
        appLogger.error(err.message);
    });
}
