'use strict';

import PredictionsController from "../controller";
import PredictionsDataService from "../data.service";
import {authMiddleware} from "../../../guards/authMiddlware";
import {getUserEmailFromSession} from "../../../utils/session";
import {dissoc, map} from "ramda";

const Router = require('koa-trie-router');
const router = new Router();
const controller = new PredictionsController(
    new PredictionsDataService()
);

export const create = () => {
  router.post('/', authMiddleware, async (ctx, next) => {
    try {
      controller.storeSingle({
        ...ctx.request.body,
        owner: getUserEmailFromSession(ctx)
      });

      ctx.body = { message: 'Done!' };
    } catch (e) {
      ctx.body = { message: e.message };
    }

    await next();
  });


  return router.middleware();
};

export const getAll = () => {
  router.get('/', authMiddleware, async (ctx, next) => {
    try {
      const items = await controller.getAll(getUserEmailFromSession(ctx));

      ctx.body = { message: 'Done fetch!', predictions: map(dissoc('owner'), items) };
    } catch (e) {
      ctx.body = { message: e.message };
    }

    await next();
  });

  return router.middleware();
};

export const prepareTFS = () => {
  router.post('/prepare-for-history', authMiddleware, async (ctx, next) => {
    try {
      const status = await controller.prepareTFService(
          ctx.request.body,
          getUserEmailFromSession(ctx)
      );

      ctx.body = { message: 'Done!', status };
    } catch (e) {
      ctx.body = { message: e.message };
    }

    await next();
  });

  return router.middleware();
};

export const verifySingle = () => {
  router.post('/verify', authMiddleware, async (ctx, next) => {
    try {
      const data = await controller.verifySingle(
          ctx.request.body,
          getUserEmailFromSession(ctx)
      );

      ctx.body = { message: 'Done!', data };
    } catch (e) {
      ctx.body = { message: e.message };
    }

    await next();
  });

  return router.middleware();
};

export const getPredRateByHistory = () => {
  router.post('/compute-current', authMiddleware, async (ctx, next) => {
    try {
      const result = await controller.getComputedPrediction(
          ctx.request.body
      );

      ctx.body = { message: 'Done!', result };
    } catch (e) {
      ctx.body = { message: e.message };
    }

    await next();
  });

  return router.middleware();
};
