'use strict';

import {authMiddleware} from "../../../guards/authMiddlware";
import AnalyzeController from "../controller";
import AnalyzeDataService from "../data.service";
import {getUserEmailFromSession} from "../../../utils/session";
import {PredictionsTFService} from "../../../tf/predictionsTFService";

const Router = require('koa-trie-router');
const router = new Router();
const controller = new AnalyzeController(
    new AnalyzeDataService(),
    new PredictionsTFService()
);

export const computeAppPredictions = () => {
  router.post('/compute-all', authMiddleware, async (ctx, next) => {
    try {
      const data = await controller.computeAllPredictions(getUserEmailFromSession(ctx));

      ctx.body = { message: 'Done', data };
    } catch (e) {
      ctx.body = { message: e.message };
    }

    await next();
  });


  return router.middleware();
};

