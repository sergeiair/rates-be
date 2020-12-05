'use strict';

import RatesController from "../controller";
import RatesDataService from "../data.service";
import {authMiddleware} from "../../../guards/authMiddlware";
import {AppLogger} from "../../../logger";

const Router = require('koa-trie-router');
const router = new Router();
const controller = new RatesController(new RatesDataService());

export const getHistory = () => {
  router.get('/history', authMiddleware, async (ctx, next) => {
    try {
      const {limit} = ctx.request.query;
      const rates = await controller.getHistory(limit);

      ctx.body = { message: 'Done', rates };
    } catch (e) {
      ctx.body = { message: e.message };
    }

    await next();
  });


  return router.middleware();
};

