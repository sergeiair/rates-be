'use strict';

import Router from 'koa-trie-router';
import {enable, checkStatus} from './_routes';

const router = new Router();

export default () => {
  router.post(enable());
  router.get(checkStatus());

  return router.middleware()
}
