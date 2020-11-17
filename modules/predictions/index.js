'use strict';

import Router from 'koa-trie-router';
import {create, getAll, getPredRateByHistory, prepareTFS} from './_routes';

const router = new Router();

export default () => {
  router.post(create());
  router.post(getPredRateByHistory());
  router.post(prepareTFS());
  router.get(getAll());

  return router.middleware()
}
