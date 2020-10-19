const bunyan = require('bunyan');

const loggerInstance = bunyan.createLogger({name: 'app', level: 'debug', path: './log.json'});

export const appLogger = loggerInstance;
