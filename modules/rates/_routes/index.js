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

export const getRates = () => {
  router.get('/pair', middleware, async (ctx, next) => {
    try {
      const {base, second} = ctx.request.query;
      const rates = await controller.getPair(base, second);

      ctx.body = { message: 'Done', rates };
    } catch (e) {
      ctx.body = { message: e.message };
    }

    await next();
  });


  return router.middleware();
};

export const getHistory = () => {
  router.get('/history', middleware, async (ctx, next) => {
    try {
      const {base, limit} = ctx.request.query;
      const rates = await controller.getHistory(base, limit);

      ctx.body = { message: 'Done', rates };
    } catch (e) {
      ctx.body = { message: e.message };
    }

    await next();
  });


  return router.middleware();
};

