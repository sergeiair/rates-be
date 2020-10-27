'use strict';

import Router from 'koa-trie-router';
import {login, logout, register} from './_routes';

const router = new Router();

export default () => {
  router.post(register());
  router.post(login());
  router.post(logout());

  return router.middleware()
}
