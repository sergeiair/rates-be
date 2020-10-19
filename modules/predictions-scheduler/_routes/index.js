'use strict';

import PredictionsSchedulerController from "../controller";
import PredictionsSchedulerDataService from "../data.service";

const Router = require('koa-trie-router');
const router = new Router();
const controller = new PredictionsSchedulerController(new PredictionsSchedulerDataService());
const middleware = async (ctx, next) => {
  ctx.type = 'json';
  await next()
};

export const enable = () => {
  router.post('/enable', middleware, async (ctx, next) => {
    try {
      controller.enable();

      ctx.body = { message: 'Done', status: await controller.getStatus() };
    } catch (e) {
      ctx.body = { message: e.message };
    }

    await next();
  });

  return router.middleware();
};

export const checkStatus = () => {
  router.get('/status', middleware, async (ctx, next) => {
    try {
      const status = await controller.getStatus();

      ctx.body = { message: 'Done', status: status };
    } catch (e) {
      ctx.body = { message: e.message };
    }

    await next();
  });


  return router.middleware();
};
