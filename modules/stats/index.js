'use strict';

import Router from 'koa-trie-router';
import {getStats} from './_routes';

const router = new Router();

export default () => {
  router.get(getStats());

  return router.middleware()
}
