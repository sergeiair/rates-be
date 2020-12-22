'use strict';

import Router from 'koa-trie-router';
import {clearAll, create, getAll, getPredRateByHistory, prepareTFS, verifySingle} from './_routes';

const router = new Router();

export default () => {
  router.del(clearAll());
  router.post(create());
  router.post(getPredRateByHistory());
  router.post(prepareTFS());
  router.post(verifySingle());
  router.get(getAll());

  return router.middleware()
}
