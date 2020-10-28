'use strict';

import Router from 'koa-trie-router';
import {create, getAll, getPredRateByHistory} from './_routes';

const router = new Router();

export default () => {
  router.post(create());
  router.post(getPredRateByHistory());
  router.get(getAll());

  return router.middleware()
}
