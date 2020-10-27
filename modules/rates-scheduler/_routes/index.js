'use strict';

import RatesSchedulerController from "../controller";
import RatesSchedulerDataService from "../data.service";
import {authMiddleware} from "../../../guards/authMiddlware";

const Router = require('koa-trie-router');
const router = new Router();
const controller = new RatesSchedulerController(new RatesSchedulerDataService());

export const enable = () => {
  router.post('/enable', authMiddleware, async (ctx, next) => {
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
  router.get('/status', authMiddleware, async (ctx, next) => {
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
