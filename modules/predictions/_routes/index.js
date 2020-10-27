'use strict';

import PredictionsController from "../controller";
import PredictionsDataService from "../data.service";
import {authMiddleware} from "../../../guards/authMiddlware";

const Router = require('koa-trie-router');
const router = new Router();
const controller = new PredictionsController(new PredictionsDataService());

export const create = () => {
  router.post('/predictions', authMiddleware, async (ctx, next) => {
    try {
      controller.storeSingle(ctx.request.body);

      ctx.body = { message: 'Done!' };
    } catch (e) {
      ctx.body = { message: e.message };
    }

    await next();
  });


  return router.middleware();
};

export const getAll = () => {
  router.get('/predictions', authMiddleware, async (ctx, next) => {
    try {
      const items = await controller.getAll();

      ctx.body = { message: 'Done fetch!', predictions: items };
    } catch (e) {
      ctx.body = { message: e.message };
    }

    await next();
  });


  return router.middleware();
};
