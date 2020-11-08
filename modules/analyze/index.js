'use strict';

import Router from 'koa-trie-router';
import {getCompletedPredictions} from "./_routes";

const router = new Router();

export default () => {
  router.post(getCompletedPredictions());

  return router.middleware()
}
