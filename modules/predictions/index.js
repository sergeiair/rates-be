'use strict';

import Router from 'koa-trie-router';
import {create, getAll} from './_routes';

const router = new Router();

export default () => {
  router.post(create());
  router.get(getAll());

  return router.middleware()
}
