'use strict';

import RatesController from "../controller";
import RatesDataService from "../data.service";
import {authMiddleware} from "../../../guards/authMiddlware";
import {AppLogger} from "../../../logger";

const Router = require('koa-trie-router');
const router = new Router();
const controller = new RatesController(new RatesDataService());

const middleware = async (ctx, next) => {
  ctx.type = 'json';
  ctx.set('Access-Control-Expose-Headers', 'GoAway');

  await next()
};

export const getStats = () => {
  router.get('/whatsgoingon', middleware, async (ctx, next) => {
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

