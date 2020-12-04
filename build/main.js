require('source-map-support/register');
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = ({
  app: {
    name: 'Koa',
    version: '1.0.0'
  },
  server: {
    port: 3333
  },
  static_dir: {
    root: './static',
    options: {}
  }
});

/***/ }),

/***/ "./db/helpers/responseWrapper.js":
/*!***************************************!*\
  !*** ./db/helpers/responseWrapper.js ***!
  \***************************************/
/*! exports provided: ResponseWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseWrapper", function() { return ResponseWrapper; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ResponseWrapper {
  constructor() {
    _defineProperty(this, "_data", null);

    _defineProperty(this, "_error", null);

    _defineProperty(this, "_code", null);
  }

  set data(value) {
    if (this.isObject(value)) {
      this._data = _objectSpread({}, value);
    }

    this._code = 200;
  }

  get data() {
    return this._data;
  }

  set error(err) {
    this._error = err;
    this._code = 503;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  isObject(a) {
    return !!a && a.constructor === Object;
  }

}

/***/ }),

/***/ "./db/schemes/prediction.js":
/*!**********************************!*\
  !*** ./db/schemes/prediction.js ***!
  \**********************************/
/*! exports provided: PredictionSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionSchema", function() { return PredictionSchema; });
const PredictionSchema = {
  name: 'Prediction',
  primaryKey: 'id',
  properties: {
    id: 'string',
    predRate: 'double',
    realRate: 'double',
    finalRate: 'double',
    pair: 'string',
    owner: 'string',
    time: 'int',
    verifyTime: 'int',
    forecast: 'int',
    volatility: 'int'
  }
};

/***/ }),

/***/ "./db/schemes/rates.js":
/*!*****************************!*\
  !*** ./db/schemes/rates.js ***!
  \*****************************/
/*! exports provided: RateSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateSchema", function() { return RateSchema; });
const RateSchema = {
  name: 'Rate',
  primaryKey: 'id',
  properties: {
    id: 'int',
    base: {
      type: 'string',
      indexed: true
    },
    USD: 'double',
    EUR: 'double',
    NOK: 'double',
    GBP: 'double',
    RUB: 'double',
    CHF: 'double',
    PLN: 'double',
    time: 'string'
  }
};

/***/ }),

/***/ "./db/schemes/session.js":
/*!*******************************!*\
  !*** ./db/schemes/session.js ***!
  \*******************************/
/*! exports provided: SessionSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionSchema", function() { return SessionSchema; });
const SessionSchema = {
  name: 'Session',
  primaryKey: 'id',
  properties: {
    expired: 'int',
    id: 'string',
    info: 'string'
  }
};

/***/ }),

/***/ "./db/schemes/user.js":
/*!****************************!*\
  !*** ./db/schemes/user.js ***!
  \****************************/
/*! exports provided: UserSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSchema", function() { return UserSchema; });
const UserSchema = {
  name: 'User',
  primaryKey: 'email',
  properties: {
    id: 'int',
    email: {
      type: 'string',
      indexed: true
    },
    name: 'string',
    pw: 'string',
    restoreToken: {
      type: 'string',
      default: ''
    },
    active: {
      type: 'bool',
      default: true
    }
  }
};

/***/ }),

/***/ "./guards/authMiddlware.js":
/*!*********************************!*\
  !*** ./guards/authMiddlware.js ***!
  \*********************************/
/*! exports provided: authMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authMiddleware", function() { return authMiddleware; });
/* harmony import */ var _modules_users_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/users/data.service */ "./modules/users/data.service.js");
/* harmony import */ var _modules_users_sessionController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/users/sessionController */ "./modules/users/sessionController.js");
/* harmony import */ var _utils_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/session */ "./utils/session.js");
/* harmony import */ var _utils_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/network */ "./utils/network.js");




const controller = new _modules_users_sessionController__WEBPACK_IMPORTED_MODULE_1__["default"](new _modules_users_data_service__WEBPACK_IMPORTED_MODULE_0__["default"]());
const authMiddleware = async (ctx, next) => {
  if (ctx.session.isNew) {
    ctx.data = null;
    ctx.status = 401;
  } else {
    const storedSession = await controller.getSession(Object(_utils_session__WEBPACK_IMPORTED_MODULE_2__["getUserEmailFromSession"])(ctx));

    if (!storedSession || storedSession.expired <= Date.now()) {
      ctx.data = null;
      ctx.status = 401;
    }
  }

  ctx.type = 'json';
  await next();
};

/***/ }),

/***/ "./logger/AppLogger.js":
/*!*****************************!*\
  !*** ./logger/AppLogger.js ***!
  \*****************************/
/*! exports provided: AppLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLogger", function() { return AppLogger; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const fs = __webpack_require__(/*! fs */ "fs");

class AppLogger {
  static error(error) {
    try {
      if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["is"])(Object, error)) {
        if (error.stack) {
          this.logFile.write(`${error.stack.split(')')[0]} \n`);
        } else if (!error.stack) {
          this.logFile.write(`${error.message} \n`);
        } else {
          this.logFile.write(`Unknown error ${error.toString()} \n`);
        }
      } else if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["is"])(String, error)) {
        this.logFile.write(`${error} \n`);
      }
    } catch (e) {
      console.error(e.message);
    }
  }

}

_defineProperty(AppLogger, "logFile", fs.createWriteStream('./logger/files/log', {
  flags: 'a'
}));

_defineProperty(AppLogger, "logStdout", process.stdout);

/***/ }),

/***/ "./logger/index.js":
/*!*************************!*\
  !*** ./logger/index.js ***!
  \*************************/
/*! exports provided: AppLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLogger */ "./logger/AppLogger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppLogger", function() { return _AppLogger__WEBPACK_IMPORTED_MODULE_0__["AppLogger"]; });



/***/ }),

/***/ "./mailer/mailer.js":
/*!**************************!*\
  !*** ./mailer/mailer.js ***!
  \**************************/
/*! exports provided: Mailer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mailer", function() { return Mailer; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const nodemailer = __webpack_require__(/*! nodemailer */ "nodemailer");

class Mailer {
  static sendPwReset(to, html) {
    return this.emailTransporter.sendMail({
      from: '"Rates pal" <noreply@ratespal.com>',
      to,
      subject: "Reset password",
      text: "",
      html
    });
  }

}

_defineProperty(Mailer, "emailTransporter", nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  service: 'gmail',
  secure: false,
  auth: {
    user: 'ratespalmail@gmail.com',
    pass: 'rer9Ohdgmail'
  },
  debug: false,
  logger: true
}));

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./config/index.js");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middlewares */ "./middlewares.js");



const Koa = __webpack_require__(/*! koa */ "koa");

const app = new Koa();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || _config__WEBPACK_IMPORTED_MODULE_0__["default"].server.port;
Object(_middlewares__WEBPACK_IMPORTED_MODULE_1__["default"])(app);
app.listen(port, host);

/***/ }),

/***/ "./middlewares.js":
/*!************************!*\
  !*** ./middlewares.js ***!
  \************************/
/*! exports provided: sessionConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionConfig", function() { return sessionConfig; });
/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-static */ "koa-static");
/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-bodyparser */ "koa-bodyparser");
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./config/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./routes.js");
/* harmony import */ var _logger_AppLogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger/AppLogger */ "./logger/AppLogger.js");






const cors = __webpack_require__(/*! @koa/cors */ "@koa/cors");

const mount = __webpack_require__(/*! koa-mount */ "koa-mount");

const session = __webpack_require__(/*! koa-session-auth */ "koa-session-auth");

const sessionConfig = {
  useToken: true,

  /** (boolean) use token-session or not (default true) */
  useCookie: false,

  /** (boolean) use cookie-session or not (default true) */
  key: 'GoAway',

  /** (string) cookie and token key (default is KoaToken) */

  /** (number || 'session') maxAge in ms (default is 1 days) */

  /** 'session' will result in a cookie that expires when session/browser is closed */

  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000 * 7,
  autoCommit: true,

  /** (boolean) automatically commit headers (default true) */
  overwrite: true,

  /** (boolean) can overwrite or not (default true) */
  httpOnly: true,

  /** (boolean) httpOnly or not (default true) */
  signed: true,

  /** (boolean) signed or not (default true) */
  rolling: false,

  /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false,

  /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
  genid: ctx => _logger_AppLogger__WEBPACK_IMPORTED_MODULE_4__["AppLogger"].warn(ctx)
};
/* harmony default export */ __webpack_exports__["default"] = (app => {
  app.use(async (ctx, next) => {
    try {
      await next();

      if (ctx.status === 404) {
        ctx.throw(404);
      }

      if (ctx.status === 401) {
        ctx.throw(401);
      }

      if (ctx.status === 200) {
        ctx.body = {
          status: 200,
          data: ctx.body
        };
      }
    } catch (err) {
      _logger_AppLogger__WEBPACK_IMPORTED_MODULE_4__["AppLogger"].error(err);
      ctx.status = err.status || 500;
      ctx.type = 'json';
      ctx.body = {
        status: ctx.status,
        message: err.message
      };
      ctx.app.emit('error', err, ctx);
    }
  });

  switch ("development") {
    case 'development':
      app.use(cors());
      break;
  }

  app.keys = ['11223344qqwweerr'];
  app.use(koa_bodyparser__WEBPACK_IMPORTED_MODULE_1___default()());
  app.use(koa_static__WEBPACK_IMPORTED_MODULE_0___default()(_config__WEBPACK_IMPORTED_MODULE_2__["default"].static_dir.root));
  app.use(session(sessionConfig, app));
  app.use(mount('/api', Object(_routes__WEBPACK_IMPORTED_MODULE_3__["default"])()));
  app.on('error', err => {
    _logger_AppLogger__WEBPACK_IMPORTED_MODULE_4__["AppLogger"].error(err.message);
  });
});

/***/ }),

/***/ "./modules/analyze/_routes/index.js":
/*!******************************************!*\
  !*** ./modules/analyze/_routes/index.js ***!
  \******************************************/
/*! exports provided: getCompletedPredictions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompletedPredictions", function() { return getCompletedPredictions; });
/* harmony import */ var _guards_authMiddlware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../guards/authMiddlware */ "./guards/authMiddlware.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller */ "./modules/analyze/controller.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./modules/analyze/data.service.js");
/* harmony import */ var _utils_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/session */ "./utils/session.js");
/* harmony import */ var _tf_predictionTFService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../tf/predictionTFService */ "./tf/predictionTFService.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ramda */ "ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_5__);









const Router = __webpack_require__(/*! koa-trie-router */ "koa-trie-router");

const router = new Router();
const controller = new _controller__WEBPACK_IMPORTED_MODULE_1__["default"](new _data_service__WEBPACK_IMPORTED_MODULE_2__["default"](), new _tf_predictionTFService__WEBPACK_IMPORTED_MODULE_4__["PredictionTFService"]());
const getCompletedPredictions = () => {
  router.post('/completed', _guards_authMiddlware__WEBPACK_IMPORTED_MODULE_0__["authMiddleware"], async (ctx, next) => {
    try {
      const data = await controller.getAllCompletedPredictions(Object(_utils_session__WEBPACK_IMPORTED_MODULE_3__["getUserEmailFromSession"])(ctx), ctx.request.body);
      ctx.body = {
        message: 'Done',
        data: Object(ramda__WEBPACK_IMPORTED_MODULE_5__["map"])(Object(ramda__WEBPACK_IMPORTED_MODULE_5__["dissoc"])('owner'), data)
      };
    } catch (e) {
      ctx.body = {
        message: e.message
      };
    }

    await next();
  });
  return router.middleware();
};

/***/ }),

/***/ "./modules/analyze/controller.js":
/*!***************************************!*\
  !*** ./modules/analyze/controller.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnalyzeController; });


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class AnalyzeController {
  constructor(_dataServiceInstance, _tfsInstance) {
    _defineProperty(this, "tfsService", void 0);

    _defineProperty(this, "dataService", void 0);

    this.dataService = _dataServiceInstance;
    this.tfsService = _tfsInstance;
  }

  getAllCompletedPredictions(email, params) {
    return this.dataService.getAllCompletedPredictions(email, params);
  }

}

/***/ }),

/***/ "./modules/analyze/data.service.js":
/*!*****************************************!*\
  !*** ./modules/analyze/data.service.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnalyzeDataService; });
/* harmony import */ var realm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! realm */ "realm");
/* harmony import */ var realm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(realm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_schemes_prediction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../db/schemes/prediction */ "./db/schemes/prediction.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logger */ "./logger/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class AnalyzeDataService {
  constructor() {
    _defineProperty(this, "config", {
      schema: [_db_schemes_prediction__WEBPACK_IMPORTED_MODULE_1__["PredictionSchema"]],
      deleteRealmIfMigrationNeeded: true,
      path: './db/files/predictions/01.realm'
    });
  }

  getAllCompletedPredictions(email, params) {
    return realm__WEBPACK_IMPORTED_MODULE_0___default.a.open(this.config).then(realm => {
      return realm.objects('Prediction').filtered(`owner = "${email}" AND finalRate != ${0} AND time >= ${params.dateStart} AND time <= ${params.dateEnd}`).sorted('time', true);
    }).catch(e => {
      _logger__WEBPACK_IMPORTED_MODULE_2__["AppLogger"].error(e);
    });
  }

}

/***/ }),

/***/ "./modules/analyze/index.js":
/*!**********************************!*\
  !*** ./modules/analyze/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_trie_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-trie-router */ "koa-trie-router");
/* harmony import */ var koa_trie_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_trie_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_routes */ "./modules/analyze/_routes/index.js");




const router = new koa_trie_router__WEBPACK_IMPORTED_MODULE_0___default.a();
/* harmony default export */ __webpack_exports__["default"] = (() => {
  router.post(Object(_routes__WEBPACK_IMPORTED_MODULE_1__["getCompletedPredictions"])());
  return router.middleware();
});

/***/ }),

/***/ "./modules/predictions-scheduler/_routes/index.js":
/*!********************************************************!*\
  !*** ./modules/predictions-scheduler/_routes/index.js ***!
  \********************************************************/
/*! exports provided: enable, checkStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enable", function() { return enable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkStatus", function() { return checkStatus; });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller */ "./modules/predictions-scheduler/controller.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./modules/predictions-scheduler/data.service.js");
/* harmony import */ var _guards_authMiddlware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../guards/authMiddlware */ "./guards/authMiddlware.js");






const Router = __webpack_require__(/*! koa-trie-router */ "koa-trie-router");

const router = new Router();
const controller = new _controller__WEBPACK_IMPORTED_MODULE_0__["default"](new _data_service__WEBPACK_IMPORTED_MODULE_1__["default"]());
const enable = () => {
  router.post('/enable', _guards_authMiddlware__WEBPACK_IMPORTED_MODULE_2__["authMiddleware"], async (ctx, next) => {
    try {
      controller.enable();
      ctx.body = {
        message: 'Done',
        status: await controller.getStatus()
      };
    } catch (e) {
      ctx.body = {
        message: e.message
      };
    }

    await next();
  });
  return router.middleware();
};
const checkStatus = () => {
  router.get('/status', _guards_authMiddlware__WEBPACK_IMPORTED_MODULE_2__["authMiddleware"], async (ctx, next) => {
    try {
      const status = await controller.getStatus();
      ctx.body = {
        message: 'Done',
        status: status
      };
    } catch (e) {
      ctx.body = {
        message: e.message
      };
    }

    await next();
  });
  return router.middleware();
};

/***/ }),

/***/ "./modules/predictions-scheduler/controller.js":
/*!*****************************************************!*\
  !*** ./modules/predictions-scheduler/controller.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PredictionsSchedulerController; });
/* harmony import */ var _predictions_scheduler_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./predictions-scheduler.service */ "./modules/predictions-scheduler/predictions-scheduler.service.js");
/* harmony import */ var _static_rates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/rates */ "./static/rates.js");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class PredictionsSchedulerController {
  constructor(_dataServiceInstance) {
    _defineProperty(this, "dataService", void 0);

    this.dataService = _dataServiceInstance;
    this.bindSchedulerService();
    this.enable();
  }

  enable() {
    _predictions_scheduler_service__WEBPACK_IMPORTED_MODULE_0__["default"].start('USD');
  }

  getStatus() {
    return _predictions_scheduler_service__WEBPACK_IMPORTED_MODULE_0__["default"].status;
  }

  bindSchedulerService() {
    _predictions_scheduler_service__WEBPACK_IMPORTED_MODULE_0__["default"].startPendingItemsReview = this.fillPendingPredictions.bind(this);
  }

  fillPendingPredictions() {
    if (_static_rates__WEBPACK_IMPORTED_MODULE_1__["StaticRatesStore"].ratesHaveValue()) {
      this.dataService.fillPendingPredictions(_static_rates__WEBPACK_IMPORTED_MODULE_1__["StaticRatesStore"].latestRates);
    }
  }

}

/***/ }),

/***/ "./modules/predictions-scheduler/data.service.js":
/*!*******************************************************!*\
  !*** ./modules/predictions-scheduler/data.service.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PredictionsSchedulerDataService; });
/* harmony import */ var realm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! realm */ "realm");
/* harmony import */ var realm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(realm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_schemes_prediction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../db/schemes/prediction */ "./db/schemes/prediction.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logger */ "./logger/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class PredictionsSchedulerDataService {
  constructor() {
    _defineProperty(this, "config", {
      schema: [_db_schemes_prediction__WEBPACK_IMPORTED_MODULE_1__["PredictionSchema"]],
      deleteRealmIfMigrationNeeded: true,
      path: './db/files/predictions/01.realm'
    });
  }

  fillPendingPredictions(rates) {
    return realm__WEBPACK_IMPORTED_MODULE_0___default.a.open(this.config).then(realm => {
      const currentEpoch = Date.now();
      const pendingItems = realm.objects('Prediction').filtered(`finalRate = 0 AND time < ${currentEpoch}`) || [];
      realm.write(() => {
        pendingItems.forEach(item => {
          const pair = item.pair.replace('/', '');
          item.finalRate = parseFloat(rates[pair]);
          item.verifyTime = currentEpoch;
        });
      });
      realm.close();
    }).catch(e => {
      _logger__WEBPACK_IMPORTED_MODULE_2__["AppLogger"].error(e);
    });
  }

}

/***/ }),

/***/ "./modules/predictions-scheduler/index.js":
/*!************************************************!*\
  !*** ./modules/predictions-scheduler/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_trie_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-trie-router */ "koa-trie-router");
/* harmony import */ var koa_trie_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_trie_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_routes */ "./modules/predictions-scheduler/_routes/index.js");




const router = new koa_trie_router__WEBPACK_IMPORTED_MODULE_0___default.a();
/* harmony default export */ __webpack_exports__["default"] = (() => {
  router.post(Object(_routes__WEBPACK_IMPORTED_MODULE_1__["enable"])());
  router.get(Object(_routes__WEBPACK_IMPORTED_MODULE_1__["checkStatus"])());
  return router.middleware();
});

/***/ }),

/***/ "./modules/predictions-scheduler/predictions-scheduler.service.js":
/*!************************************************************************!*\
  !*** ./modules/predictions-scheduler/predictions-scheduler.service.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PredictionsSchedulerService; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const scheduler = __webpack_require__(/*! node-schedule */ "node-schedule");

class PredictionsSchedulerService {
  static start(currency) {
    this.job = this.instance.scheduleJob('*/30 * * * * *', () => this.startPendingItemsReview(currency));
    this.status = 1;
  }

  static stop() {
    this.instance.cancelJob(this.job);
    this.status = 0;
  }

  static startPendingItemsReview(currency) {}

}

_defineProperty(PredictionsSchedulerService, "instance", scheduler);

_defineProperty(PredictionsSchedulerService, "job", null);

_defineProperty(PredictionsSchedulerService, "status", 0);

/***/ }),

/***/ "./modules/predictions/_routes/index.js":
/*!**********************************************!*\
  !*** ./modules/predictions/_routes/index.js ***!
  \**********************************************/
/*! exports provided: create, getAll, prepareTFS, verifySingle, getPredRateByHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareTFS", function() { return prepareTFS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifySingle", function() { return verifySingle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPredRateByHistory", function() { return getPredRateByHistory; });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller */ "./modules/predictions/controller.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./modules/predictions/data.service.js");
/* harmony import */ var _guards_authMiddlware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../guards/authMiddlware */ "./guards/authMiddlware.js");
/* harmony import */ var _utils_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/session */ "./utils/session.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ramda */ "ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Router = __webpack_require__(/*! koa-trie-router */ "koa-trie-router");

const router = new Router();
const controller = new _controller__WEBPACK_IMPORTED_MODULE_0__["default"](new _data_service__WEBPACK_IMPORTED_MODULE_1__["default"]());
const create = () => {
  router.post('/', _guards_authMiddlware__WEBPACK_IMPORTED_MODULE_2__["authMiddleware"], async (ctx, next) => {
    try {
      controller.storeSingle(_objectSpread(_objectSpread({}, ctx.request.body), {}, {
        owner: Object(_utils_session__WEBPACK_IMPORTED_MODULE_3__["getUserEmailFromSession"])(ctx)
      }));
      ctx.body = {
        message: 'Done!'
      };
    } catch (e) {
      ctx.body = {
        message: e.message
      };
    }

    await next();
  });
  return router.middleware();
};
const getAll = () => {
  router.get('/', _guards_authMiddlware__WEBPACK_IMPORTED_MODULE_2__["authMiddleware"], async (ctx, next) => {
    try {
      const items = await controller.getAll(Object(_utils_session__WEBPACK_IMPORTED_MODULE_3__["getUserEmailFromSession"])(ctx));
      ctx.body = {
        message: 'Done fetch!',
        predictions: Object(ramda__WEBPACK_IMPORTED_MODULE_4__["map"])(Object(ramda__WEBPACK_IMPORTED_MODULE_4__["dissoc"])('owner'), items)
      };
    } catch (e) {
      ctx.body = {
        message: e.message
      };
    }

    await next();
  });
  return router.middleware();
};
const prepareTFS = () => {
  router.post('/prepare-for-history', _guards_authMiddlware__WEBPACK_IMPORTED_MODULE_2__["authMiddleware"], async (ctx, next) => {
    try {
      const status = await controller.prepareTFService(ctx.request.body, Object(_utils_session__WEBPACK_IMPORTED_MODULE_3__["getUserEmailFromSession"])(ctx));
      ctx.body = {
        message: 'Done!',
        status
      };
    } catch (e) {
      ctx.body = {
        message: e.message
      };
    }

    await next();
  });
  return router.middleware();
};
const verifySingle = () => {
  router.post('/verify', _guards_authMiddlware__WEBPACK_IMPORTED_MODULE_2__["authMiddleware"], async (ctx, next) => {
    try {
      const data = await controller.verifySingle(ctx.request.body, Object(_utils_session__WEBPACK_IMPORTED_MODULE_3__["getUserEmailFromSession"])(ctx));
      ctx.body = {
        message: 'Done!',
        data
      };
    } catch (e) {
      ctx.body = {
        message: e.message
      };
    }

    await next();
  });
  return router.middleware();
};
const getPredRateByHistory = () => {
  router.post('/compute-current', _guards_authMiddlware__WEBPACK_IMPORTED_MODULE_2__["authMiddleware"], async (ctx, next) => {
    try {
      const result = await controller.getComputedPrediction(ctx.request.body);
      ctx.body = {
        message: 'Done!',
        result
      };
    } catch (e) {
      ctx.body = {
        message: e.message
      };
    }

    await next();
  });
  return router.middleware();
};

/***/ }),

/***/ "./modules/predictions/controller.js":
/*!*******************************************!*\
  !*** ./modules/predictions/controller.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PredictionsController; });
/* harmony import */ var _tf_predictionTFService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tf/predictionTFService */ "./tf/predictionTFService.js");
/* harmony import */ var _static_rates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/rates */ "./static/rates.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class PredictionsController {
  constructor(_dataServiceInstance) {
    _defineProperty(this, "tfsService", void 0);

    _defineProperty(this, "dataService", void 0);

    this.dataService = _dataServiceInstance;
  }

  getAll(email) {
    return this.dataService.getAll(email);
  }

  storeSingle(data) {
    this.dataService.storeSingle(this.getPreparedPredData(data));
  }

  verifySingle(data, email) {
    return this.dataService.verifySingle(data.id, email, _static_rates__WEBPACK_IMPORTED_MODULE_1__["StaticRatesStore"].latestRates);
  }

  getPreparedPredData(data) {
    return _objectSpread(_objectSpread({}, data), {}, {
      volatility: this.getVolatilityByPair(data.volatility, data.pair)
    });
  }

  getVolatilityByPair(value, pair) {
    if (!!value) {
      return value;
    } else {
      switch (pair) {
        case 'USD/CHF':
          return 1;

        case 'USD/GBP':
        case 'USD/EUR':
          return 2;

        case 'USD/RUB':
          return 4;

        default:
          return 3;
      }
    }
  }

  async prepareTFService(params, email) {
    const predictions = await this.dataService.getAllCompletedPredictions(email, params.pair);

    if (!!predictions && predictions.length) {
      const data4TF = predictions.map(pred => ({
        predRate: pred.predRate,
        realRate: pred.realRate,
        finalRate: pred.finalRate,
        forecast: pred.forecast,
        volatility: pred.volatility
      }));
      this.tfsService = undefined;
      this.tfsService = new _tf_predictionTFService__WEBPACK_IMPORTED_MODULE_0__["PredictionTFService"](data4TF);
      return await this.tfsService.trainModel(500, 32);
    } else {
      return 'empty';
    }
  }

  getComputedPrediction(params) {
    return this.tfsService.getResult([this.getVolatilityByPair(params.volatility, params.pair), params.forecast, params.realRate, params.predRate], 500);
  }

}

/***/ }),

/***/ "./modules/predictions/data.service.js":
/*!*********************************************!*\
  !*** ./modules/predictions/data.service.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PredictionsDataService; });
/* harmony import */ var _db_schemes_prediction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/schemes/prediction */ "./db/schemes/prediction.js");
/* harmony import */ var realm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! realm */ "realm");
/* harmony import */ var realm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(realm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logger */ "./logger/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ramda */ "ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class PredictionsDataService {
  constructor() {
    _defineProperty(this, "config", {
      schema: [_db_schemes_prediction__WEBPACK_IMPORTED_MODULE_0__["PredictionSchema"]],
      deleteRealmIfMigrationNeeded: true,
      path: './db/files/predictions/01.realm'
    });
  }

  getAll(email) {
    return realm__WEBPACK_IMPORTED_MODULE_1___default.a.open(this.config).then(realm => {
      return realm.objects('Prediction').filtered(`owner = "${email}"`).sorted('time', true);
    }).catch(e => {
      _logger__WEBPACK_IMPORTED_MODULE_2__["AppLogger"].error(e);
    });
  }

  storeSingle(data) {
    realm__WEBPACK_IMPORTED_MODULE_1___default.a.open(this.config).then(realm => {
      realm.write(() => {
        realm.create('Prediction', _objectSpread(_objectSpread({}, data), {}, {
          finalRate: 0,
          verifyTime: 0,
          id: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v1"])()
        }), realm__WEBPACK_IMPORTED_MODULE_1___default.a.UpdateMode.Never);
      });
      realm.close();
    }).catch(e => _logger__WEBPACK_IMPORTED_MODULE_2__["AppLogger"].error(e));
  }

  verifySingle(id, email, rates) {
    return realm__WEBPACK_IMPORTED_MODULE_1___default.a.open(this.config).then(async realm => {
      return await new Promise(resolve => {
        const prediction = realm.objectForPrimaryKey('Prediction', id);

        if (!!prediction && prediction.owner === email && !prediction.finalRate) {
          realm.write(() => {
            const pair = prediction.pair.replace('/', '');
            prediction.finalRate = parseFloat(rates[pair]);
            prediction.verifyTime = Date.now();
            resolve(Object(ramda__WEBPACK_IMPORTED_MODULE_4__["dissoc"])('owner', prediction));
          });
          realm.close();
        } else {
          resolve(null);
        }
      });
    }).catch(e => {
      _logger__WEBPACK_IMPORTED_MODULE_2__["AppLogger"].error(e);
    });
  }

  getAllCompletedPredictions(email, pair) {
    return realm__WEBPACK_IMPORTED_MODULE_1___default.a.open(this.config).then(realm => {
      return realm.objects('Prediction').filtered(`owner = "${email}" AND finalRate != ${0} AND pair = "${pair}"`);
    }).catch(e => {
      _logger__WEBPACK_IMPORTED_MODULE_2__["AppLogger"].error(e);
    });
  }

}

/***/ }),

/***/ "./modules/predictions/index.js":
/*!**************************************!*\
  !*** ./modules/predictions/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_trie_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-trie-router */ "koa-trie-router");
/* harmony import */ var koa_trie_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_trie_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_routes */ "./modules/predictions/_routes/index.js");




const router = new koa_trie_router__WEBPACK_IMPORTED_MODULE_0___default.a();
/* harmony default export */ __webpack_exports__["default"] = (() => {
  router.post(Object(_routes__WEBPACK_IMPORTED_MODULE_1__["create"])());
  router.post(Object(_routes__WEBPACK_IMPORTED_MODULE_1__["getPredRateByHistory"])());
  router.post(Object(_routes__WEBPACK_IMPORTED_MODULE_1__["prepareTFS"])());
  router.post(Object(_routes__WEBPACK_IMPORTED_MODULE_1__["verifySingle"])());
  router.get(Object(_routes__WEBPACK_IMPORTED_MODULE_1__["getAll"])());
  return router.middleware();
});

/***/ }),

/***/ "./modules/rates-scheduler/_routes/index.js":
/*!**************************************************!*\
  !*** ./modules/rates-scheduler/_routes/index.js ***!
  \**************************************************/
/*! exports provided: enable, checkStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enable", function() { return enable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkStatus", function() { return checkStatus; });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller */ "./modules/rates-scheduler/controller.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./modules/rates-scheduler/data.service.js");
/* harmony import */ var _guards_authMiddlware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../guards/authMiddlware */ "./guards/authMiddlware.js");






const Router = __webpack_require__(/*! koa-trie-router */ "koa-trie-router");

const router = new Router();
const controller = new _controller__WEBPACK_IMPORTED_MODULE_0__["default"](new _data_service__WEBPACK_IMPORTED_MODULE_1__["default"]());
const enable = () => {
  router.post('/enable', _guards_authMiddlware__WEBPACK_IMPORTED_MODULE_2__["authMiddleware"], async (ctx, next) => {
    try {
      controller.enable();
      ctx.body = {
        message: 'Done',
        status: await controller.getStatus()
      };
    } catch (e) {
      ctx.body = {
        message: e.message
      };
    }

    await next();
  });
  return router.middleware();
};
const checkStatus = () => {
  router.get('/status', _guards_authMiddlware__WEBPACK_IMPORTED_MODULE_2__["authMiddleware"], async (ctx, next) => {
    try {
      const status = await controller.getStatus();
      ctx.body = {
        message: 'Done',
        status: status
      };
    } catch (e) {
      ctx.body = {
        message: e.message
      };
    }

    await next();
  });
  return router.middleware();
};

/***/ }),

/***/ "./modules/rates-scheduler/constants.js":
/*!**********************************************!*\
  !*** ./modules/rates-scheduler/constants.js ***!
  \**********************************************/
/*! exports provided: DATA_SOURCE_ENDPOINT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_SOURCE_ENDPOINT", function() { return DATA_SOURCE_ENDPOINT; });
const API_KEY = 'WtgXjLLRpYZqNwOOXId0';
const DATA_SOURCE_ENDPOINT = 'https://fxmarketapi.com/apilive?api_key=' + API_KEY;

/***/ }),

/***/ "./modules/rates-scheduler/controller.js":
/*!***********************************************!*\
  !*** ./modules/rates-scheduler/controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RatesSchedulerController; });
/* harmony import */ var _rates_scheduler_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rates-scheduler.service */ "./modules/rates-scheduler/rates-scheduler.service.js");
/* harmony import */ var _static_rates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/rates */ "./static/rates.js");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class RatesSchedulerController {
  constructor(_dataServiceInstance) {
    _defineProperty(this, "dataService", void 0);

    this.dataService = _dataServiceInstance;
    this.bindSchedulerService();
    this.enable();
  }

  bindSchedulerService() {
    _rates_scheduler_service__WEBPACK_IMPORTED_MODULE_0__["default"].dataFetched = this.dataFetched.bind(this);
  }

  enable() {
    _rates_scheduler_service__WEBPACK_IMPORTED_MODULE_0__["default"].start('USD');
    _rates_scheduler_service__WEBPACK_IMPORTED_MODULE_0__["default"].requestDataImidiate('USD');
  }

  getStatus() {
    return _rates_scheduler_service__WEBPACK_IMPORTED_MODULE_0__["default"].status;
  }

  dataFetched(currency, data) {
    if (this.isSaveAllowed(currency, data.price || {})) {
      this.dataService.storeSingle(currency, data.price || {});
    }

    this.updateStaticStore(currency, data.price || {});
  }

  updateStaticStore(currency, rates) {
    _static_rates__WEBPACK_IMPORTED_MODULE_1__["StaticRatesStore"].set(currency, rates);
  }

  isSaveAllowed(currency, rates) {
    return _static_rates__WEBPACK_IMPORTED_MODULE_1__["StaticRatesStore"].isNewValue(currency, rates);
  }

}

/***/ }),

/***/ "./modules/rates-scheduler/data.service.js":
/*!*************************************************!*\
  !*** ./modules/rates-scheduler/data.service.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RatesSchedulerDataService; });
/* harmony import */ var realm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! realm */ "realm");
/* harmony import */ var realm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(realm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_schemes_rates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../db/schemes/rates */ "./db/schemes/rates.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logger */ "./logger/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class RatesSchedulerDataService {
  constructor() {
    _defineProperty(this, "validCurrencies", ['USD', 'EUR', 'NOK', 'GBP', 'RUB', 'CHF', 'PLN']);

    _defineProperty(this, "config", {
      schema: [_db_schemes_rates__WEBPACK_IMPORTED_MODULE_1__["RateSchema"]],
      deleteRealmIfMigrationNeeded: true,
      path: './db/files/rates/01.realm'
    });
  }

  storeSingle(currency, rates) {
    realm__WEBPACK_IMPORTED_MODULE_0___default.a.open(this.config).then(realm => {
      realm.write(() => {
        realm.create('Rate', {
          id: Date.now(),
          base: currency,
          USD: 1,
          EUR: parseFloat(rates.USDEUR),
          NOK: parseFloat(rates.USDNOK),
          GBP: parseFloat(rates.USDGBP),
          RUB: parseFloat(rates.USDRUB),
          CHF: parseFloat(rates.USDCHF),
          PLN: parseFloat(rates.USDPLN),
          time: new Date().toISOString()
        }, realm__WEBPACK_IMPORTED_MODULE_0___default.a.UpdateMode.Never);
      });
      realm.close();
    }).catch(e => {
      _logger__WEBPACK_IMPORTED_MODULE_2__["AppLogger"].error(e);
    });
  }

}

/***/ }),

/***/ "./modules/rates-scheduler/index.js":
/*!******************************************!*\
  !*** ./modules/rates-scheduler/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_trie_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-trie-router */ "koa-trie-router");
/* harmony import */ var koa_trie_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_trie_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_routes */ "./modules/rates-scheduler/_routes/index.js");




const router = new koa_trie_router__WEBPACK_IMPORTED_MODULE_0___default.a();
/* harmony default export */ __webpack_exports__["default"] = (() => {
  router.post(Object(_routes__WEBPACK_IMPORTED_MODULE_1__["enable"])());
  router.get(Object(_routes__WEBPACK_IMPORTED_MODULE_1__["checkStatus"])());
  return router.middleware();
});

/***/ }),

/***/ "./modules/rates-scheduler/rates-scheduler.service.js":
/*!************************************************************!*\
  !*** ./modules/rates-scheduler/rates-scheduler.service.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RatesSchedulerService; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./modules/rates-scheduler/constants.js");
/* harmony import */ var _static_rates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/rates */ "./static/rates.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const axios = __webpack_require__(/*! axios */ "axios").default;

const scheduler = __webpack_require__(/*! node-schedule */ "node-schedule");

class RatesSchedulerService {
  static start(currency) {
    this.job = this.instance.scheduleJob('*/45 * * * *', () => this.requestData(currency));
    this.status = 1;
  }

  static stop() {
    this.instance.cancelJob(this.job);
    this.status = 0;
  }

  static dataFetched(currency, data) {}

  static requestData(currency) {
    if (_static_rates__WEBPACK_IMPORTED_MODULE_1__["StaticRatesStore"].isRequiredTimePassed()) {
      _static_rates__WEBPACK_IMPORTED_MODULE_1__["StaticRatesStore"].updatePrevRequestTime();
      console.log(new Date().toLocaleTimeString());
      axios.get(`${this.endpoint}&currency=USDEUR,USDPLN,USDNOK,USDGBP,USDCHF,USDRUB`).then(response => this.dataFetched(currency, response.data)).catch(console.error);
    }
  }

  static requestDataImidiate(currency) {
    console.log(new Date().toLocaleTimeString());
    axios.get(`${this.endpoint}&currency=USDEUR,USDPLN,USDNOK,USDGBP,USDCHF,USDRUB`).then(response => this.dataFetched(currency, response.data)).catch(console.error);
  }

}

_defineProperty(RatesSchedulerService, "endpoint", _constants__WEBPACK_IMPORTED_MODULE_0__["DATA_SOURCE_ENDPOINT"]);

_defineProperty(RatesSchedulerService, "instance", scheduler);

_defineProperty(RatesSchedulerService, "job", null);

_defineProperty(RatesSchedulerService, "status", 0);

/***/ }),

/***/ "./modules/rates/_routes/index.js":
/*!****************************************!*\
  !*** ./modules/rates/_routes/index.js ***!
  \****************************************/
/*! exports provided: getRates, getHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRates", function() { return getRates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHistory", function() { return getHistory; });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller */ "./modules/rates/controller.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./modules/rates/data.service.js");
/* harmony import */ var _guards_authMiddlware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../guards/authMiddlware */ "./guards/authMiddlware.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../logger */ "./logger/index.js");







const Router = __webpack_require__(/*! koa-trie-router */ "koa-trie-router");

const router = new Router();
const controller = new _controller__WEBPACK_IMPORTED_MODULE_0__["default"](new _data_service__WEBPACK_IMPORTED_MODULE_1__["default"]());
const getRates = () => {
  router.get('/pair', _guards_authMiddlware__WEBPACK_IMPORTED_MODULE_2__["authMiddleware"], async (ctx, next) => {
    try {
      const {
        base,
        second
      } = ctx.request.query;
      const rates = await controller.getPair(base, second);
      ctx.body = {
        message: 'Done',
        rates
      };
    } catch (e) {
      ctx.body = {
        message: e.message
      };
    }

    await next();
  });
  return router.middleware();
};
const getHistory = () => {
  router.get('/history', _guards_authMiddlware__WEBPACK_IMPORTED_MODULE_2__["authMiddleware"], async (ctx, next) => {
    try {
      const {
        base,
        limit
      } = ctx.request.query;
      const rates = await controller.getHistory(base, limit);
      ctx.body = {
        message: 'Done',
        rates
      };
    } catch (e) {
      ctx.body = {
        message: e.message
      };
    }

    await next();
  });
  return router.middleware();
};

/***/ }),

/***/ "./modules/rates/controller.js":
/*!*************************************!*\
  !*** ./modules/rates/controller.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RatesController; });


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class RatesController {
  constructor(_dataServiceInstance) {
    _defineProperty(this, "dataService", void 0);

    this.dataService = _dataServiceInstance;
  }

  getPair(base, second) {
    return this.dataService.getPair(base);
  }

  getHistory(base, number) {
    return this.dataService.getHistory(base, number);
  }

}

/***/ }),

/***/ "./modules/rates/data.service.js":
/*!***************************************!*\
  !*** ./modules/rates/data.service.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RatesDataService; });
/* harmony import */ var realm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! realm */ "realm");
/* harmony import */ var realm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(realm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_schemes_rates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../db/schemes/rates */ "./db/schemes/rates.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logger */ "./logger/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class RatesDataService {
  constructor() {
    _defineProperty(this, "validCurrencies", ['USD', 'EUR', 'NOK', 'GBP', 'RUB', 'CHF', 'PLN']);

    _defineProperty(this, "config", {
      schema: [_db_schemes_rates__WEBPACK_IMPORTED_MODULE_1__["RateSchema"]],
      deleteRealmIfMigrationNeeded: true,
      path: './db/files/rates/01.realm'
    });
  }

  getPair(base) {
    return realm__WEBPACK_IMPORTED_MODULE_0___default.a.open(this.config).then(realm => {
      return realm.objects('Rate').filtered(`base = "${base}"`).sorted('id', true).slice(0, 1);
    }).catch(e => {
      _logger__WEBPACK_IMPORTED_MODULE_2__["AppLogger"].error(e);
    });
  }

  getHistory(base, number) {
    return realm__WEBPACK_IMPORTED_MODULE_0___default.a.open(this.config).then(realm => {
      return realm.objects('Rate').filtered(`base = "${base}"`).slice(0, number);
    }).catch(e => {
      _logger__WEBPACK_IMPORTED_MODULE_2__["AppLogger"].error(e);
    });
  }

}

/***/ }),

/***/ "./modules/rates/index.js":
/*!********************************!*\
  !*** ./modules/rates/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_trie_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-trie-router */ "koa-trie-router");
/* harmony import */ var koa_trie_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_trie_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_routes */ "./modules/rates/_routes/index.js");




const router = new koa_trie_router__WEBPACK_IMPORTED_MODULE_0___default.a();
/* harmony default export */ __webpack_exports__["default"] = (() => {
  router.get(Object(_routes__WEBPACK_IMPORTED_MODULE_1__["getRates"])());
  router.get(Object(_routes__WEBPACK_IMPORTED_MODULE_1__["getHistory"])());
  return router.middleware();
});

/***/ }),

/***/ "./modules/users/_routes/index.js":
/*!****************************************!*\
  !*** ./modules/users/_routes/index.js ***!
  \****************************************/
/*! exports provided: register, login, logout, restore, createPw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restore", function() { return restore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPw", function() { return createPw; });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller */ "./modules/users/controller.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./modules/users/data.service.js");
/* harmony import */ var _utils_network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/network */ "./utils/network.js");
/* harmony import */ var _utils_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/session */ "./utils/session.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! md5 */ "md5");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mailer_mailer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../mailer/mailer */ "./mailer/mailer.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../logger */ "./logger/index.js");










const Router = __webpack_require__(/*! koa-trie-router */ "koa-trie-router");

const router = new Router();
const controller = new _controller__WEBPACK_IMPORTED_MODULE_0__["default"](new _data_service__WEBPACK_IMPORTED_MODULE_1__["default"]());

const middleware = async (ctx, next) => {
  ctx.type = 'json';
  ctx.set('Access-Control-Expose-Headers', 'GoAway');
  await next();
};

const register = () => {
  router.post('/register', middleware, async (ctx, next) => {
    try {
      const resp = await controller.register(ctx.request.body);
      ctx.status = resp.code;
      ctx.body = {
        message: 'Done',
        resp
      };
    } catch (e) {
      ctx.status = 500;
      ctx.body = {
        message: e.message
      };
    }

    await next();
  });
  return router.middleware();
};
const login = () => {
  router.post('/login', middleware, async (ctx, next) => {
    try {
      const user = await controller.getUser(ctx.request.body);

      if (!!user.data) {
        controller.storeSession(user.data.hashedEmail, Object(_utils_network__WEBPACK_IMPORTED_MODULE_2__["getClientIp"])(ctx.request));
        ctx.session.user = `${user.data.hashedEmail}$${Date.now()}`;
        ctx.body = {
          message: 'Done',
          data: {
            email: user.data.email,
            name: user.data.name
          }
        };
      } else {
        ctx.body = {
          message: 'Not found',
          data: {}
        };
      }

      ctx.status = user.code;
    } catch (e) {
      ctx.status = 500;
      ctx.body = {
        message: e.message
      };
    }

    await next();
  });
  return router.middleware();
};
const logout = () => {
  router.post('/logout', middleware, async (ctx, next) => {
    try {
      controller.destroySession(Object(_utils_session__WEBPACK_IMPORTED_MODULE_3__["getUserEmailFromSession"])(ctx));
      ctx.status = 200;
      ctx.body = {
        message: 'Done'
      };
    } catch (e) {
      ctx.status = 500;
      ctx.body = {
        message: e.message
      };
    }

    await next();
  });
  return router.middleware();
};
const restore = () => {
  router.post('/restore', middleware, async (ctx, next) => {
    try {
      const params = await controller.initRestore(ctx.request.body.user);
      ctx.status = params.code;
      ctx.body = {
        message: 'Done'
      };
    } catch (e) {
      ctx.status = 500;
      ctx.body = {
        message: e.message
      };
    }

    await next();
  });
  return router.middleware();
};
const createPw = () => {
  router.post('/create-pw', middleware, async (ctx, next) => {
    try {
      const params = await controller.createPw(ctx.request.body.pw, ctx.request.body.v);
      ctx.status = params.code;
      ctx.body = {
        message: 'Done',
        data: params
      };
    } catch (e) {
      ctx.status = 500;
      ctx.body = {
        message: e.message
      };
    }

    await next();
  });
  return router.middleware();
};

/***/ }),

/***/ "./modules/users/controller.js":
/*!*************************************!*\
  !*** ./modules/users/controller.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UsersController; });
/* harmony import */ var _mailer_mailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mailer/mailer */ "./mailer/mailer.js");
/* harmony import */ var _utils_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/email */ "./utils/email.js");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class UsersController {
  constructor(_dataServiceInstance) {
    _defineProperty(this, "dataService", void 0);

    this.dataService = _dataServiceInstance;
  }

  register(data) {
    return this.dataService.registerUser(data);
  }

  getUser(data) {
    return this.dataService.getUser(data);
  }

  storeSession(email, ip) {
    return this.dataService.storeSession(email, ip);
  }

  destroySession(email) {
    return this.dataService.destroySession(email);
  }

  async initRestore(email) {
    const params = await this.dataService.getRestoreToken(email);

    if (params.data.token) {
      _mailer_mailer__WEBPACK_IMPORTED_MODULE_0__["Mailer"].sendPwReset(email, Object(_utils_email__WEBPACK_IMPORTED_MODULE_1__["getRestoreHTML"])(params.data.name, params.data.token));
    }

    return params;
  }

  createPw(pw, token) {
    return this.dataService.createPw(pw, token);
  }

}

/***/ }),

/***/ "./modules/users/data.service.js":
/*!***************************************!*\
  !*** ./modules/users/data.service.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UsersDataService; });
/* harmony import */ var realm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! realm */ "realm");
/* harmony import */ var realm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(realm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logger */ "./logger/index.js");
/* harmony import */ var _db_schemes_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../db/schemes/user */ "./db/schemes/user.js");
/* harmony import */ var _db_helpers_responseWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../db/helpers/responseWrapper */ "./db/helpers/responseWrapper.js");
/* harmony import */ var _db_schemes_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../db/schemes/session */ "./db/schemes/session.js");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../middlewares */ "./middlewares.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! md5 */ "md5");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_hash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/hash */ "./utils/hash.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class UsersDataService {
  constructor() {
    _defineProperty(this, "userConfig", {
      schema: [_db_schemes_user__WEBPACK_IMPORTED_MODULE_3__["UserSchema"]],
      deleteRealmIfMigrationNeeded: true,
      path: './db/files/users/01.realm'
    });

    _defineProperty(this, "sessionConfig", {
      schema: [_db_schemes_session__WEBPACK_IMPORTED_MODULE_5__["SessionSchema"]],
      deleteRealmIfMigrationNeeded: true,
      path: './db/files/sessions/01.realm'
    });
  }

  getUserUnsafe(email) {
    return realm__WEBPACK_IMPORTED_MODULE_0___default.a.open(this.userConfig).then(realm => realm.objectForPrimaryKey('User', email)).catch(e => _logger__WEBPACK_IMPORTED_MODULE_2__["AppLogger"].error(e));
  }

  getSession(email) {
    return realm__WEBPACK_IMPORTED_MODULE_0___default.a.open(this.sessionConfig).then(realm => realm.objectForPrimaryKey('Session', email)).catch(e => _logger__WEBPACK_IMPORTED_MODULE_2__["AppLogger"].error(e));
  }

  async getUser(data) {
    const response = new _db_helpers_responseWrapper__WEBPACK_IMPORTED_MODULE_4__["ResponseWrapper"]();
    const user = await this.getUserUnsafe(data.email);

    if (!!user && bcrypt__WEBPACK_IMPORTED_MODULE_1__["compareSync"](data.pw || '', user.pw || '')) {
      response.data = {
        hashedEmail: md5__WEBPACK_IMPORTED_MODULE_7__(user.email),
        email: user.email,
        name: user.name
      };
    } else {
      response.error = 'Not found';
      response.code = 404;
    }

    return response;
  }

  storeSession(email, ip) {
    return realm__WEBPACK_IMPORTED_MODULE_0___default.a.open(this.sessionConfig).then(realm => {
      realm.write(() => {
        realm.create('Session', {
          expired: Date.now() + _middlewares__WEBPACK_IMPORTED_MODULE_6__["sessionConfig"].maxAge,
          id: email,
          info: ip
        }, realm__WEBPACK_IMPORTED_MODULE_0___default.a.UpdateMode.Modified);
      });
      realm.close();
    }).catch(e => {
      _logger__WEBPACK_IMPORTED_MODULE_2__["AppLogger"].error(e);
    });
  }

  destroySession(email) {
    return realm__WEBPACK_IMPORTED_MODULE_0___default.a.open(this.sessionConfig).then(realm => {
      const session = realm.objectForPrimaryKey('Session', email);

      if (!!session) {
        realm.write(() => {
          realm.delete(session);
        });
      }

      realm.close();
    }).catch(e => {
      _logger__WEBPACK_IMPORTED_MODULE_2__["AppLogger"].error(e);
    });
  }

  async getRestoreToken(email) {
    return new Promise((resolve, reject) => {
      realm__WEBPACK_IMPORTED_MODULE_0___default.a.open(this.userConfig).then(realm => {
        const response = new _db_helpers_responseWrapper__WEBPACK_IMPORTED_MODULE_4__["ResponseWrapper"]();
        const user = realm.objectForPrimaryKey('User', email);

        if (!!user && !user.restoreToken) {
          realm.write(() => {
            user.restoreToken = Object(_utils_hash__WEBPACK_IMPORTED_MODULE_8__["emailToRestoreToken"])(email);
            response.data = {
              token: user.restoreToken,
              name: user.name
            };
            resolve(response);
          });
        } else {
          response.data = {
            status: "started"
          };
          response.code = 208;
          resolve(response);
        }

        realm.close();
      }).catch(e => {
        _logger__WEBPACK_IMPORTED_MODULE_2__["AppLogger"].error(e);
        reject(e.message);
      });
    });
  }

  registerUser(data) {
    return realm__WEBPACK_IMPORTED_MODULE_0___default.a.open(this.userConfig).then(realm => {
      const {
        email,
        pw,
        name
      } = data;
      const response = new _db_helpers_responseWrapper__WEBPACK_IMPORTED_MODULE_4__["ResponseWrapper"]();
      const userNotFound = realm.objects('User').filtered(`email = "${email}"`).isEmpty();

      if (userNotFound) {
        realm.write(() => {
          realm.create('User', {
            id: realm.objects('User').length + 1,
            pw: bcrypt__WEBPACK_IMPORTED_MODULE_1__["hashSync"](pw, 10),
            name: name || email.split('@')[0],
            email: email
          }, realm__WEBPACK_IMPORTED_MODULE_0___default.a.UpdateMode.Never);
          response.data = {
            email
          };
        });
      } else {
        response.error = 'User already exists';
        response.code = 200;
      }

      realm.close();
      return response;
    }).catch(e => {
      _logger__WEBPACK_IMPORTED_MODULE_2__["AppLogger"].error(e);
    });
  }

  async createPw(pw, token) {
    return realm__WEBPACK_IMPORTED_MODULE_0___default.a.open(this.userConfig).then(realm => {
      const response = new _db_helpers_responseWrapper__WEBPACK_IMPORTED_MODULE_4__["ResponseWrapper"]();
      const user = realm.objects('User').filtered(`restoreToken = "${token}" LIMIT(1)`);

      if (user[0]) {
        realm.write(() => {
          user[0].pw = bcrypt__WEBPACK_IMPORTED_MODULE_1__["hashSync"](pw, 10);
          user[0].restoreToken = "";
          response.data = {
            status: 'Done'
          };
        });
      } else {
        response.error = 'Failed';
      }

      realm.close();
      return response;
    }).catch(e => {
      _logger__WEBPACK_IMPORTED_MODULE_2__["AppLogger"].error(e);
    });
  }

}

/***/ }),

/***/ "./modules/users/index.js":
/*!********************************!*\
  !*** ./modules/users/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_trie_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-trie-router */ "koa-trie-router");
/* harmony import */ var koa_trie_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_trie_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_routes */ "./modules/users/_routes/index.js");




const router = new koa_trie_router__WEBPACK_IMPORTED_MODULE_0___default.a();
/* harmony default export */ __webpack_exports__["default"] = (() => {
  router.post(Object(_routes__WEBPACK_IMPORTED_MODULE_1__["register"])());
  router.post(Object(_routes__WEBPACK_IMPORTED_MODULE_1__["login"])());
  router.post(Object(_routes__WEBPACK_IMPORTED_MODULE_1__["logout"])());
  router.post(Object(_routes__WEBPACK_IMPORTED_MODULE_1__["restore"])());
  router.post(Object(_routes__WEBPACK_IMPORTED_MODULE_1__["createPw"])());
  return router.middleware();
});

/***/ }),

/***/ "./modules/users/sessionController.js":
/*!********************************************!*\
  !*** ./modules/users/sessionController.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SessionController; });


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class SessionController {
  constructor(_dataServiceInstance) {
    _defineProperty(this, "dataService", void 0);

    this.dataService = _dataServiceInstance;
  }

  getSession(email) {
    return this.dataService.getSession(email);
  }

}

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! exports provided: router, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony import */ var koa_trie_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-trie-router */ "koa-trie-router");
/* harmony import */ var koa_trie_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_trie_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koa_mount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-mount */ "koa-mount");
/* harmony import */ var koa_mount__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_mount__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var predictions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! predictions */ "./modules/predictions/index.js");
/* harmony import */ var rates_scheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rates-scheduler */ "./modules/rates-scheduler/index.js");
/* harmony import */ var predictions_scheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! predictions-scheduler */ "./modules/predictions-scheduler/index.js");
/* harmony import */ var rates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rates */ "./modules/rates/index.js");
/* harmony import */ var users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! users */ "./modules/users/index.js");
/* harmony import */ var analyze__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! analyze */ "./modules/analyze/index.js");










const router = new koa_trie_router__WEBPACK_IMPORTED_MODULE_0___default.a();
/* harmony default export */ __webpack_exports__["default"] = (() => {
  router.use(koa_mount__WEBPACK_IMPORTED_MODULE_1___default()('/predictions', Object(predictions__WEBPACK_IMPORTED_MODULE_2__["default"])()));
  router.use(koa_mount__WEBPACK_IMPORTED_MODULE_1___default()('/rates-scheduler', Object(rates_scheduler__WEBPACK_IMPORTED_MODULE_3__["default"])()));
  router.use(koa_mount__WEBPACK_IMPORTED_MODULE_1___default()('/predictions-scheduler', Object(predictions_scheduler__WEBPACK_IMPORTED_MODULE_4__["default"])()));
  router.use(koa_mount__WEBPACK_IMPORTED_MODULE_1___default()('/rates', Object(rates__WEBPACK_IMPORTED_MODULE_5__["default"])()));
  router.use(koa_mount__WEBPACK_IMPORTED_MODULE_1___default()('/users', Object(users__WEBPACK_IMPORTED_MODULE_6__["default"])()));
  router.use(koa_mount__WEBPACK_IMPORTED_MODULE_1___default()('/analyze', Object(analyze__WEBPACK_IMPORTED_MODULE_7__["default"])()));
  return router.middleware();
});

/***/ }),

/***/ "./static/rates.js":
/*!*************************!*\
  !*** ./static/rates.js ***!
  \*************************/
/*! exports provided: StaticRatesStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRatesStore", function() { return StaticRatesStore; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class StaticRatesStore {
  static set(base, rates) {
    this.latestBase = base;
    this.latestRates = rates;
  }

  static ratesHaveValue() {
    return !!this.latestRates && !!Object.keys(this.latestRates).length;
  }

  static isRequiredTimePassed() {
    return Date.now() - this.prevSet > this.requiredMsGap;
  }

  static updatePrevRequestTime() {
    this.prevSet = Date.now();
  }

  static isNewValue(base, rates) {
    return this.latestBase !== base || this.latestRates.USDEUR.toString() !== rates.USDEUR.toString() || this.latestRates.USDNOK.toString() !== rates.USDNOK.toString() || this.latestRates.USDGBP.toString() !== rates.USDGBP.toString() || this.latestRates.USDRUB.toString() !== rates.USDRUB.toString() || this.latestRates.USDCHF.toString() !== rates.USDCHF.toString() || this.latestRates.USDPLN.toString() !== rates.USDPLN.toString();
  }

}

_defineProperty(StaticRatesStore, "prevSet", Date.now());

_defineProperty(StaticRatesStore, "requiredMsGap", 45 * 60 * 1000);

_defineProperty(StaticRatesStore, "latestBase", null);

_defineProperty(StaticRatesStore, "latestRates", {
  USDEUR: 0,
  USDNOK: 0,
  USDGBP: 0,
  USDRUB: 0,
  USDCHF: 0,
  USDPLN: 0
});

/***/ }),

/***/ "./tf/predictionTFService.js":
/*!***********************************!*\
  !*** ./tf/predictionTFService.js ***!
  \***********************************/
/*! exports provided: PredictionTFService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionTFService", function() { return PredictionTFService; });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logger */ "./logger/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const tf = __webpack_require__(/*! @tensorflow/tfjs-node */ "@tensorflow/tfjs-node");

class PredictionTFService {
  constructor(data) {
    _defineProperty(this, "isRunning", false);

    _defineProperty(this, "model", tf.sequential());

    _defineProperty(this, "inputTnsr", null);

    _defineProperty(this, "labelTnsr", null);

    _defineProperty(this, "_data", []);

    this.configure();
    this.init(data);
  }

  getPrediction(params, inputMax, inputMinVal, labelMinVal, labelMax) {
    return tf.tidy(() => {
      const normalizedPredTnsr = tf.tensor2d(params, [1, params.length]);
      const normalizedPredVals = normalizedPredTnsr.sub(inputMinVal).div(inputMax.sub(inputMinVal));
      const predResult = this.model.predict(normalizedPredVals.reshape([1, params.length]));
      const readablePred = predResult.mul(labelMax.sub(labelMinVal)).add(labelMinVal);
      return readablePred.dataSync();
    });
  }

  getNormalizedValues() {
    return tf.tidy(() => {
      const inputMax = this.inputTnsr.max();
      const inputMinVal = this.inputTnsr.min();
      const labelMax = this.labelTnsr.max();
      const labelMinVal = this.labelTnsr.min();
      return {
        inputs: this.inputTnsr.sub(inputMinVal).div(inputMax.sub(inputMinVal)),
        labels: this.labelTnsr.sub(labelMinVal).div(labelMax.sub(labelMinVal)),
        inputMax,
        inputMinVal,
        labelMax,
        labelMinVal
      };
    });
  }

  init(items) {
    this._data = items || [];
    this.initTensors();
  }

  initTensors() {
    tf.util.shuffle(this._data);
    this.initInputTnsr();
    this.initLabelsTnsr();
  }

  initInputTnsr() {
    this.inputTnsr = tf.tensor(this._data.map(item => [item.volatility, item.forecast, item.realRate, item.predRate]));
  }

  initLabelsTnsr() {
    this.labelTnsr = tf.tensor2d(this._data.map(item => item.finalRate), [this._data.length, 1]);
  }

  configure() {
    this.model.add(tf.layers.dense({
      units: 1,
      inputShape: [4]
    }));
    this.model.add(tf.layers.dense({
      units: 1,
      useBias: true
    }));
    this.model.compile({
      loss: 'meanSquaredError',
      optimizer: 'sgd'
    });
  }

  destroy() {
    this.model.dispose();
  }

  async getResult(params) {
    const {
      inputMax,
      inputMinVal,
      labelMinVal,
      labelMax
    } = this.getNormalizedValues();
    return this.getPrediction(params, inputMax, inputMinVal, labelMinVal, labelMax);
  }

  trainModel(epochs, batchSize) {
    const {
      inputs,
      labels
    } = this.getNormalizedValues();
    return new Promise((resolve, reject) => {
      if (!this.isRunning) {
        this.isRunning = true;
        this.model.fit(inputs, labels, {
          batchSize,
          epochs
        }).then(() => {
          this.isRunning = false;
          resolve('trainingDone');
        });
      }
    });
  }

}

/***/ }),

/***/ "./utils/email.js":
/*!************************!*\
  !*** ./utils/email.js ***!
  \************************/
/*! exports provided: getRestoreHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRestoreHTML", function() { return getRestoreHTML; });
function getRestoreHTML(name, token) {
  return `
        Hi ${name}, <br>
        Need to reset your password? Click on the link below to get you in.  <br>
        <a href="http://localhost:4000/reset-password?v=${token}">Create new password</a>
    `;
}

/***/ }),

/***/ "./utils/hash.js":
/*!***********************!*\
  !*** ./utils/hash.js ***!
  \***********************/
/*! exports provided: emailToRestoreToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailToRestoreToken", function() { return emailToRestoreToken; });
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);

function emailToRestoreToken(email) {
  return bcrypt__WEBPACK_IMPORTED_MODULE_0__["hashSync"](email + "_frvr3$R34gTgtr5_", 5);
}

/***/ }),

/***/ "./utils/network.js":
/*!**************************!*\
  !*** ./utils/network.js ***!
  \**************************/
/*! exports provided: getClientIp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientIp", function() { return getClientIp; });
function getClientIp(req) {
  return req.headers['referer'];
}

/***/ }),

/***/ "./utils/session.js":
/*!**************************!*\
  !*** ./utils/session.js ***!
  \**************************/
/*! exports provided: getUserEmailFromSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserEmailFromSession", function() { return getUserEmailFromSession; });
function getUserEmailFromSession(ctx) {
  return (ctx.session.user || '').split('$')[0];
}

/***/ }),

/***/ "@koa/cors":
/*!****************************!*\
  !*** external "@koa/cors" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@koa/cors");

/***/ }),

/***/ "@tensorflow/tfjs-node":
/*!****************************************!*\
  !*** external "@tensorflow/tfjs-node" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@tensorflow/tfjs-node");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),

/***/ "koa-mount":
/*!****************************!*\
  !*** external "koa-mount" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-mount");

/***/ }),

/***/ "koa-session-auth":
/*!***********************************!*\
  !*** external "koa-session-auth" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-session-auth");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),

/***/ "koa-trie-router":
/*!**********************************!*\
  !*** external "koa-trie-router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-trie-router");

/***/ }),

/***/ "md5":
/*!**********************!*\
  !*** external "md5" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("md5");

/***/ }),

/***/ "node-schedule":
/*!********************************!*\
  !*** external "node-schedule" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-schedule");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),

/***/ "ramda":
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),

/***/ "realm":
/*!************************!*\
  !*** external "realm" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("realm");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=main.map