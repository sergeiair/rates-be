'use strict';

import Router from 'koa-trie-router';
import {login, register} from './_routes';

const router = new Router();

export default () => {
  router.post(register());
  router.post(login());

  return router.middleware()
}
