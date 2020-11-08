'use strict';

import {authMiddleware} from "../../../guards/authMiddlware";
import AnalyzeController from "../controller";
import AnalyzeDataService from "../data.service";
import {getUserEmailFromSession} from "../../../utils/session";
import {PredictionTFService} from "../../../tf/predictionTFService";

const Router = require('koa-trie-router');
const router = new Router();
const controller = new AnalyzeController(
    new AnalyzeDataService(),
    new PredictionTFService()
);

export const getCompletedPredictions = () => {
  router.post('/completed', authMiddleware, async (ctx, next) => {
    try {
      const data = await controller.getAllCompletedPredictions(
          getUserEmailFromSession(ctx),
          ctx.request.body
      );

      ctx.body = { message: 'Done', data };
    } catch (e) {
      ctx.body = { message: e.message };
    }

    await next();
  });


  return router.middleware();
};

