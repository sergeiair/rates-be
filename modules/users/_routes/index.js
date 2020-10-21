'use strict';

import RatesController from "../controller";
import RatesDataService from "../data.service";

const Router = require('koa-trie-router');
const router = new Router();
const controller = new RatesController(new RatesDataService());
const middleware = async (ctx, next) => {
  ctx.type = 'json';
  await next()
};

export const register = () => {
  router.post('/register', middleware, async (ctx, next) => {
    try {
      const resp = await controller.register(ctx.request.body);

      ctx.status = resp.errorCode;
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

      ctx.status = resp.errorCode;
      ctx.body = { message: 'Done', resp };
    } catch (e) {
      ctx.status = 500;
      ctx.body = { message: e.message };
    }

    await next();
  });


  return router.middleware();
};

