'use strict';

import Router from 'koa-trie-router';
import mount from 'koa-mount';

import predictions from 'predictions';
import ratesScheduler from 'rates-scheduler';
import predictionsScheduler from 'predictions-scheduler';
import rates from 'rates';

export const router = new Router();

export default () => {
    router.use(mount('/', predictions()));
    router.use(mount('/rates-scheduler', ratesScheduler()));
    router.use(mount('/predictions-scheduler', predictionsScheduler()));
    router.use(mount('/rates', rates()));

    return router.middleware()
}
