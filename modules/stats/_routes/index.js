'use strict';

import RatesController from "../controller";
import RatesDataService from "../data.service";
import {authMiddleware} from "../../../guards/authMiddlware";
import {AppLogger} from "../../../logger";

const Router = require('koa-trie-router');
const router = new Router();
const controller = new RatesController(new RatesDataService());

export const getStats = () => {
  router.get('/whatsgoingon', authMiddleware, async (ctx, next) => {
    try {
      const data = await controller.getStats();

      ctx.body = { message: 'Done', data };
    } catch (e) {
      ctx.body = { message: e.message };
    }

    await next();
  });


  return router.middleware();
};

