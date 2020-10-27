'use strict';

import UsersController from "../controller";
import UsersDataService from "../data.service";
import {getClientIp} from "../../../utils/network";
import {getUserEmailFromSession} from "../../../utils/session";
import * as md5 from "md5";

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
      const resp = await controller.getUser(ctx.request.body);
      controller.storeSession(resp.data.hashedEmail, getClientIp(ctx.request));

      ctx.status = resp.code;
      ctx.session.user = `${resp.data.hashedEmail}$${Date.now()}`;
      ctx.body = { message: 'Done', data: {
        email: resp.data.email,
        name: resp.data.name
      }};
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

