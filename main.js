import config from "./config";
import middlewares from "./middlewares";

const Koa = require('koa');
const app = new Koa();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || config.server.port;

middlewares(app);

app.listen(port, host);
