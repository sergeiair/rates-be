'use strict';

import Router from 'koa-trie-router';
import {createPw, login, logout, register, restore} from './_routes';

const router = new Router();

export default () => {
  router.post(register());
  router.post(login());
  router.post(logout());
  router.post(restore());
  router.post(createPw());

  return router.middleware()
}
