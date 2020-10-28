'use strict';

import Router from 'koa-trie-router';
import {computeAppPredictions} from "./_routes";

const router = new Router();

export default () => {
  router.post(computeAppPredictions());

  return router.middleware()
}
