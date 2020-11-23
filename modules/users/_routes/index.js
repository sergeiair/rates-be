'use strict';

import UsersController from "../controller";
import UsersDataService from "../data.service";
import {getClientIp} from "../../../utils/network";
import {getUserEmailFromSession} from "../../../utils/session";
import * as md5 from "md5";
import {Mailer} from "../../../mailer/mailer";
import {appLogger} from "../../../logger";

const Router = require('koa-trie-router');
const router = new Router();
const controller = new UsersController(new UsersDataService());

const middleware = async (ctx, next) => {
  ctx.type = 'json';
  ctx.set('Access-Control-Expose-Headers', 'GoAway');

  await next()
};

export const register = () => {
  router.post('/register', middleware, async (ctx, next) => {
    try {
      const resp = await controller.register(ctx.request.body);

      ctx.status = resp.code;
      ctx.body = { message: 'Done', resp };
    } catch (e) {
      ctx.status = 500;
      ctx.body = { message: e.message };
    }

    await next();
  });


  return router.middleware();
};

export const login = () => {
  router.post('/login', middleware, async (ctx, next) => {

    try {
      const user = await controller.getUser(ctx.request.body);

      if (!!user.data) {
        controller.storeSession(user.data.hashedEmail, getClientIp(ctx.request));

        ctx.session.user = `${user.data.hashedEmail}$${Date.now()}`;
        ctx.body = { message: 'Done', data: {
          email: user.data.email,
          name: user.data.name
        }};
      } else {
        ctx.body = { message: 'Not found', data: {} };
      }

      ctx.status = user.code;
    } catch (e) {
      ctx.status = 500;
      ctx.body = { message: e.message };
    }

    await next();
  });


  return router.middleware();
};

export const logout = () => {
  router.post('/logout', middleware, async (ctx, next) => {

    try {
      controller.destroySession(getUserEmailFromSession(ctx));

      ctx.status = 200;
      ctx.body = { message: 'Done' };
    } catch (e) {
      ctx.status = 500;
      ctx.body = { message: e.message };
    }

    await next();
  });

  return router.middleware();
};

export const restore = () => {
  router.post('/restore', middleware, async (ctx, next) => {

    try {
      const params = await controller.initRestore(ctx.request.body.user);

      ctx.status = params.code;
      ctx.body = { message: 'Done' };
    } catch (e) {
      ctx.status = 500;
      ctx.body = { message: e.message };
    }

    await next();
  });

  return router.middleware();
};

export const createPw = () => {
  router.post('/create-pw', middleware, async (ctx, next) => {

    try {
      const params = await controller.createPw(ctx.request.body.pw, ctx.request.body.v);

      ctx.status = params.code;
      ctx.body = { message: 'Done', data: params };
    } catch (e) {
      ctx.status = 500;
      ctx.body = { message: e.message };
    }

    await next();
  });

  return router.middleware();
};


