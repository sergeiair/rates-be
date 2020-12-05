'use strict';

import Router from 'koa-trie-router';
import {getHistory, getRates} from './_routes';

const router = new Router();

export default () => {
  router.get(getHistory());

  return router.middleware()
}
