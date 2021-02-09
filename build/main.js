require("source-map-support/register"),module.exports=function(e){var t={};function r(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=17)}([function(e,t){e.exports=require("realm")},function(e,t){e.exports=require("koa-trie-router")},function(e,t){e.exports=require("ramda")},function(e,t){e.exports=require("koa-mount")},function(e,t){e.exports=require("bcrypt")},function(e,t){e.exports=require("md5")},function(e,t){e.exports=require("node-schedule")},function(e,t){e.exports=require("koa-static")},function(e,t){e.exports=require("koa-bodyparser")},function(e,t){e.exports=require("uuid")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("@tensorflow/tfjs-node")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("nodemailer")},function(e,t){e.exports=require("@koa/cors")},function(e,t){e.exports=require("koa-session-auth")},function(e,t){e.exports=require("koa")},function(e,t,r){"use strict";r.r(t);var s={port:3333},a={root:"./static",options:{}},i=r(7),n=r.n(i),o=r(8),c=r.n(o),l=r(1),u=r.n(l),d=r(3),p=r.n(d),b=r(2);function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const g=r(10);class f{static error(e){try{Object(b.is)(Object,e)?e.stack?this.logFile.write(e.stack.split(")")[0]+" \n"):e.stack?this.logFile.write(`Unknown error ${e.toString()} \n`):this.logFile.write(e.message+" \n"):Object(b.is)(String,e)&&this.logFile.write(e+" \n")}catch(e){console.error(e.message)}}}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}h(f,"logFile",g.createWriteStream("./logger/files/log",{flags:"a"})),h(f,"logStdout",process.stdout);const y=r(11);class w{constructor(e){m(this,"isRunning",!1),m(this,"model",y.sequential()),m(this,"inputTnsr",null),m(this,"labelTnsr",null),m(this,"_data",[]),this.configure(),this.init(e)}getPrediction(e,t,r,s,a){return y.tidy(()=>{const i=y.tensor2d(e,[1,e.length]).sub(r).div(t.sub(r));return this.model.predict(i.reshape([1,e.length])).mul(a.sub(s)).add(s).dataSync()})}getNormalizedValues(){return y.tidy(()=>{const e=this.inputTnsr.max(),t=this.inputTnsr.min(),r=this.labelTnsr.max(),s=this.labelTnsr.min();return{inputs:this.inputTnsr.sub(t).div(e.sub(t)),labels:this.labelTnsr.sub(s).div(r.sub(s)),inputMax:e,inputMinVal:t,labelMax:r,labelMinVal:s}})}init(e){this._data=e||[],this.initTensors()}initTensors(){y.util.shuffle(this._data),this.initInputTnsr(),this.initLabelsTnsr()}initInputTnsr(){this.inputTnsr=y.tensor(this._data.map(e=>[e.volatility,e.forecast,e.realRate,e.predRate]))}initLabelsTnsr(){this.labelTnsr=y.tensor2d(this._data.map(e=>e.finalRate),[this._data.length,1])}configure(){this.model.add(y.layers.dense({units:1,inputShape:[4]})),this.model.add(y.layers.dense({units:1,useBias:!0})),this.model.compile({loss:"meanSquaredError",optimizer:"sgd"})}destroy(){this.model.dispose()}async getResult(e){const{inputMax:t,inputMinVal:r,labelMinVal:s,labelMax:a}=this.getNormalizedValues();return this.getPrediction(e,t,r,s,a)}trainModel(e,t){const{inputs:r,labels:s}=this.getNormalizedValues();return new Promise((a,i)=>{this.isRunning||(this.isRunning=!0,this.model.fit(r,s,{batchSize:t,epochs:e}).then(()=>{this.isRunning=!1,a("trainingDone")}))})}}const v=["EUR/USD","EUR/PLN","EUR/CHF","EUR/GBP","USD/NOK","GBP/USD","USD/RUB","USD/CHF","USD/PLN","USD/JPY"];function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class j{static get latestRates(){return this._latestRates&&Object.keys(this._latestRates).length||(this._latestRates=v.reduce((e,t)=>S(S({},e),{},{[t]:0}),{})),this._latestRates}static set latestRates(e){this._latestRates=e}static updateLocalLatest(e){this.latestRates=e}static ratesHaveValue(){return!!this.latestRates&&!!Object.keys(this.latestRates).length}static isRequiredTimePassed(){return Date.now()-this.prevSet>this.requiredMsGap}static updatePrevRequestTime(){this.prevSet=Date.now()}static isNewValue(e){return Object.keys(e||{}).some(t=>e[t]!==this.latestRates[t])}}function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){U(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function U(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}P(j,"prevSet",Date.now()),P(j,"requiredMsGap",3e5),P(j,"_latestRates",{});const q={name:"Prediction",primaryKey:"id",properties:{id:"string",predRate:"double",realRate:"double",finalRate:"double",pair:"string",owner:"string",time:"int",verifyTime:"int",forecast:"int",volatility:"int"}};var T=r(0),x=r.n(T),C=r(9);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){M(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E=r(4);const _={name:"User",primaryKey:"email",properties:{id:"int",email:{type:"string",indexed:!0},name:"string",pw:"string",restoreToken:{type:"string",default:""},active:{type:"bool",default:!0}}};function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class I{constructor(){F(this,"_data",null),F(this,"_error",null),F(this,"_code",null)}set data(e){this.isObject(e)&&(this._data=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){F(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)),this._code=200}get data(){return this._data}set error(e){this._error=e,this._code=503}get code(){return this._code}set code(e){this._code=e}isObject(e){return!!e&&e.constructor===Object}}const $={name:"Session",primaryKey:"id",properties:{expired:"int",id:"string",info:"string"}};var H=r(5);function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class V{constructor(){L(this,"userConfig",{schema:[_],deleteRealmIfMigrationNeeded:!0,path:"./db/files/users/01.realm"}),L(this,"sessionConfig",{schema:[$],deleteRealmIfMigrationNeeded:!0,path:"./db/files/sessions/01.realm"})}getUserUnsafe(e){return x.a.open(this.userConfig).then(t=>t.objectForPrimaryKey("User",e)).catch(e=>f.error(e))}getSession(e){return x.a.open(this.sessionConfig).then(t=>t.objectForPrimaryKey("Session",e)).catch(e=>f.error(e))}async getUser(e){const t=new I,r=await this.getUserUnsafe(e.email);return r&&E.compareSync(e.pw||"",r.pw||"")?t.data={hashedEmail:H(r.email),email:r.email,name:r.name}:(t.error="Not found",t.code=404),t}storeSession(e,t){return x.a.open(this.sessionConfig).then(r=>{r.write(()=>{r.create("Session",{expired:Date.now()+ze.maxAge,id:e,info:t},x.a.UpdateMode.Modified)}),r.close()}).catch(e=>{f.error(e)})}destroySession(e){return x.a.open(this.sessionConfig).then(t=>{const r=t.objectForPrimaryKey("Session",e);r&&t.write(()=>{t.delete(r)}),t.close()}).catch(e=>{f.error(e)})}async getRestoreToken(e){return new Promise((t,r)=>{x.a.open(this.userConfig).then(r=>{const s=new I,a=r.objectForPrimaryKey("User",e);a&&!a.restoreToken?r.write(()=>{a.restoreToken=function(e){return E.hashSync(e+"_frvr3$R34gTgtr5_",5)}(e),s.data={token:a.restoreToken,name:a.name},t(s)}):(s.data={status:"started"},s.code=208,t(s)),r.close()}).catch(e=>{f.error(e),r(e.message)})})}registerUser(e){return x.a.open(this.userConfig).then(t=>{const{email:r,pw:s,name:a}=e,i=new I;return t.objects("User").filtered(`email = "${r}"`).isEmpty()?t.write(()=>{t.create("User",{id:t.objects("User").length+1,pw:E.hashSync(s,10),name:a||r.split("@")[0],email:r},x.a.UpdateMode.Never),i.data={email:r}}):(i.error="User already exists",i.code=200),t.close(),i}).catch(e=>{f.error(e)})}async createPw(e,t){return x.a.open(this.userConfig).then(r=>{const s=new I,a=r.objects("User").filtered(`restoreToken = "${t}" LIMIT(1)`);return a[0]?r.write(()=>{a[0].pw=E.hashSync(e,10),a[0].restoreToken="",s.data={status:"Done"}}):s.error="Failed",r.close(),s}).catch(e=>{f.error(e)})}}function B(e){return(e.session.user||"").split("$")[0]}const K=new class{constructor(e){var t,r,s;s=void 0,(r="dataService")in(t=this)?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s,this.dataService=e}getSession(e){return this.dataService.getSession(e)}}(new V),G=async(e,t)=>{if(e.session.isNew)e.data=null,e.status=401;else{const t=await K.getSession(B(e));(!t||t.expired<=Date.now())&&(e.data=null,e.status=401)}e.type="json",await t()};function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){Y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const W=new(r(1)),X=new class{constructor(e){U(this,"tfsService",void 0),U(this,"dataService",void 0),this.dataService=e}getAll(e){return this.dataService.getAll(e)}clearAll(e){return this.dataService.clearAll(e)}storeSingle(e){this.dataService.storeSingle(this.getPreparedPredData(e))}verifySingle(e,t){return this.dataService.verifySingle(e.id,t,j.latestRates)}getPreparedPredData(e){return R(R({},e),{},{volatility:this.getVolatilityByPair(e.volatility,e.pair)})}getVolatilityByPair(e,t){if(e)return e;switch(t){case"USD/CHF":case"EUR/CHF":return 1;case"GBP/USD":case"USD/EUR":case"USD/JPY":case"USD/PLN":case"EUR/PLN":return 2;case"USD/RUB":return 4;default:return 3}}async prepareTFService(e,t){const r=await this.dataService.getAllCompletedPredictions(t,e.pair);if(r&&r.length){const e=r.map(e=>({predRate:e.predRate,realRate:e.realRate,finalRate:e.finalRate,forecast:e.forecast,volatility:e.volatility}));return this.tfsService=void 0,this.tfsService=new w(e),await this.tfsService.trainModel(500,32)}return"empty"}getComputedPrediction(e){return this.tfsService.getResult([this.getVolatilityByPair(e.volatility,e.pair),e.forecast,e.realRate,e.predRate],500)}}(new class{constructor(){M(this,"config",{schema:[q],deleteRealmIfMigrationNeeded:!0,path:"./db/files/predictions/01.realm"})}getAll(e){return x.a.open(this.config).then(t=>t.objects("Prediction").filtered(`owner = "${e}"`).sorted("time",!0)).catch(e=>{f.error(e)})}clearAll(e){return x.a.open(this.config).then(t=>{const r=t.objects("Prediction").filtered(`owner = "${e}"`);t.write(()=>{t.delete(r)}),t.close()}).catch(e=>{f.error(e)})}storeSingle(e){x.a.open(this.config).then(t=>{t.write(()=>{t.create("Prediction",N(N({},e),{},{finalRate:0,verifyTime:0,id:Object(C.v1)()}),x.a.UpdateMode.Never)}),t.close()}).catch(e=>f.error(e))}verifySingle(e,t,r){return x.a.open(this.config).then(async s=>await new Promise(a=>{const i=s.objectForPrimaryKey("Prediction",e),n=i.owner===t;i&&n&&!i.finalRate?(s.write(()=>{const e=i.pair.replace("/","");i.finalRate=parseFloat(r[e]),i.verifyTime=Date.now(),a(Object(b.dissoc)("owner",i))}),s.close()):a(Object(b.dissoc)("owner",i))})).catch(e=>{f.error(e)})}getAllCompletedPredictions(e,t){return x.a.open(this.config).then(r=>r.objects("Prediction").filtered(`owner = "${e}" AND finalRate != 0 AND pair = "${t}"`)).catch(e=>{f.error(e)})}}),Z=new u.a;var Q=()=>(Z.del((W.del("/clear",G,async(e,t)=>{try{X.clearAll(B(e)),e.body={message:"Done!"}}catch(t){e.body={message:t.message}}await t()}),W.middleware())),Z.post((W.post("/",G,async(e,t)=>{try{X.storeSingle(z(z({},e.request.body),{},{owner:B(e)})),e.body={message:"Done!"}}catch(t){e.body={message:t.message}}await t()}),W.middleware())),Z.post((W.post("/compute-current",G,async(e,t)=>{try{const t=await X.getComputedPrediction(e.request.body);e.body={message:"Done!",result:t}}catch(t){e.body={message:t.message}}await t()}),W.middleware())),Z.post((W.post("/prepare-for-history",G,async(e,t)=>{try{const t=await X.prepareTFService(e.request.body,B(e));e.body={message:"Done!",status:t}}catch(t){e.body={message:t.message}}await t()}),W.middleware())),Z.post((W.post("/verify",G,async(e,t)=>{try{const t=await X.verifySingle(e.request.body,B(e));e.body={message:"Done!",data:t}}catch(t){e.body={message:t.message}}await t()}),W.middleware())),Z.get((W.get("/",G,async(e,t)=>{try{const t=await X.getAll(B(e));e.body={message:"Done fetch!",predictions:Object(b.map)(Object(b.dissoc)("owner"),t)}}catch(t){e.body={message:t.message}}await t()}),W.middleware())),Z.middleware());function ee(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const te=r(12).default,re=r(6);class se{static get requestPairs(){return v.map(e=>e.replace("/","")).join()}static start(e){this.job=this.instance.scheduleJob("*/5 * * * *",()=>this.requestData(e)),this.status=1}static stop(){this.instance.cancelJob(this.job),this.status=0}static dataFetched(e,t){}static requestData(e){j.isRequiredTimePassed()&&(j.updatePrevRequestTime(),console.log((new Date).toLocaleTimeString()),te.get(`${this.endpoint}&currency=${this.requestPairs}`).then(t=>this.dataFetched(e,t.data)).catch(console.error))}static requestDataImidiate(e){console.log((new Date).toLocaleTimeString()),te.get(`${this.endpoint}&currency=${this.requestPairs}`).then(t=>this.dataFetched(e,t.data)).catch(console.error)}}ee(se,"endpoint","https://fxmarketapi.com/apilive?api_key=WtgXjLLRpYZqNwOOXId0"),ee(se,"instance",re),ee(se,"job",null),ee(se,"status",0);const ae={name:"Rate",primaryKey:"id",properties:{id:"int",EURUSD:"double",EURPLN:"double",EURCHF:"double",EURGBP:"double",USDNOK:"double",GBPUSD:"double",USDRUB:"double",USDCHF:"double",USDPLN:"double",USDJPY:"double",time:"string"}};function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){oe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function oe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const ce=new(r(1)),le=new class{constructor(e){var t,r,s;s=void 0,(r="dataService")in(t=this)?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s,this.dataService=e,this.bindSchedulerService(),this.enable()}bindSchedulerService(){se.dataFetched=this.dataFetched.bind(this)}enable(){se.start("USD"),se.requestDataImidiate("USD")}getStatus(){return se.status}dataFetched(e,t){this.isSaveAllowed(e,t.price||{})&&this.dataService.storeSingle(t.price||{}),this.updateStaticStore(t.price||{})}updateStaticStore(e){j.updateLocalLatest(e)}isSaveAllowed(e){return j.isNewValue(e)}}(new class{constructor(){oe(this,"config",{schema:[ae],deleteRealmIfMigrationNeeded:!0,path:"./db/files/rates/01.realm"})}getStorageRatesValues(e){return Object.keys(e).reduce((t,r)=>e[r]?ne(ne({},t),{},{[r]:parseFloat(e[r])}):t,{})}storeSingle(e){x.a.open(this.config).then(t=>{t.write(()=>{t.create("Rate",ne({id:Date.now(),time:(new Date).toISOString()},this.getStorageRatesValues(e)),x.a.UpdateMode.Never)}),t.close()}).catch(e=>{f.error(e)})}}),ue=new u.a;var de=()=>(ue.post((ce.post("/enable",G,async(e,t)=>{try{le.enable(),e.body={message:"Done",status:await le.getStatus()}}catch(t){e.body={message:t.message}}await t()}),ce.middleware())),ue.get((ce.get("/status",G,async(e,t)=>{try{const t=await le.getStatus();e.body={message:"Done",status:t}}catch(t){e.body={message:t.message}}await t()}),ce.middleware())),ue.middleware());function pe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const be=r(6);class he{static start(e){this.job=this.instance.scheduleJob("*/30 * * * * *",()=>this.startPendingItemsReview(e)),this.status=1}static stop(){this.instance.cancelJob(this.job),this.status=0}static startPendingItemsReview(e){}}pe(he,"instance",be),pe(he,"job",null),pe(he,"status",0);const ge=new(r(1)),fe=new class{constructor(e){var t,r,s;s=void 0,(r="dataService")in(t=this)?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s,this.dataService=e,this.bindSchedulerService(),this.enable()}enable(){he.start("USD")}getStatus(){return he.status}bindSchedulerService(){he.startPendingItemsReview=this.fillPendingPredictions.bind(this)}fillPendingPredictions(){j.ratesHaveValue()&&this.dataService.fillPendingPredictions(j.latestRates)}}(new class{constructor(){var e,t,r;r={schema:[q],deleteRealmIfMigrationNeeded:!0,path:"./db/files/predictions/01.realm"},(t="config")in(e=this)?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}fillPendingPredictions(e){return x.a.open(this.config).then(t=>{const r=Date.now(),s=t.objects("Prediction").filtered("finalRate = 0 AND time < "+r)||[];t.write(()=>{s.forEach(t=>{const s=t.pair.replace("/","");t.finalRate=parseFloat(e[s]),t.verifyTime=r})}),t.close()}).catch(e=>{f.error(e)})}}),me=new u.a;var ye=()=>(me.post((ge.post("/enable",G,async(e,t)=>{try{fe.enable(),e.body={message:"Done",status:await fe.getStatus()}}catch(t){e.body={message:t.message}}await t()}),ge.middleware())),me.get((ge.get("/status",G,async(e,t)=>{try{const t=await fe.getStatus();e.body={message:"Done",status:t}}catch(t){e.body={message:t.message}}await t()}),ge.middleware())),me.middleware());const we=new(r(1)),ve=new class{constructor(e){var t,r,s;s=void 0,(r="dataService")in(t=this)?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s,this.dataService=e}getHistory(e){return this.dataService.getHistory(e)}}(new class{constructor(){var e,t,r;r={schema:[ae],deleteRealmIfMigrationNeeded:!0,path:"./db/files/rates/01.realm"},(t="config")in(e=this)?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}getHistory(e){return x.a.open(this.config).then(t=>t.objects("Rate").sorted("id",!0).slice(0,e)).catch(e=>{f.error(e)})}}),Oe=new u.a;var Se=()=>(Oe.get((we.get("/history",G,async(e,t)=>{try{const{limit:t}=e.request.query,r=await ve.getHistory(t);e.body={message:"Done",rates:r}}catch(t){e.body={message:t.message}}await t()}),we.middleware())),Oe.middleware());const Pe=r(13);class je{static sendPwReset(e,t){return this.emailTransporter.sendMail({from:'"Rates pal" <noreply@ratespal.com>',to:e,subject:"Reset password",text:"",html:t})}}var De,Re,Ue;De=je,Re="emailTransporter",Ue=Pe.createTransport({host:"smtp.gmail.com",port:465,service:"gmail",secure:!1,auth:{user:"ratespalmail@gmail.com",pass:"rer9Ohdgmail"},debug:!1,logger:!0}),Re in De?Object.defineProperty(De,Re,{value:Ue,enumerable:!0,configurable:!0,writable:!0}):De[Re]=Ue;const qe=new(r(1)),Te=new class{constructor(e){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(this,"dataService",void 0),this.dataService=e}register(e){return this.dataService.registerUser(e)}getUser(e){return this.dataService.getUser(e)}storeSession(e,t){return this.dataService.storeSession(e,t)}destroySession(e){return this.dataService.destroySession(e)}async initRestore(e){const t=await this.dataService.getRestoreToken(e);var r,s;return t.data.token&&je.sendPwReset(e,(r=t.data.name,s=t.data.token,`\n        Hi ${r}, <br>\n        Need to reset your password? Click on the link below to get you in.  <br>\n        <a href="http://localhost:4000/reset-password?v=${s}">Create new password</a>\n    `)),t}createPw(e,t){return this.dataService.createPw(e,t)}}(new V),xe=async(e,t)=>{e.type="json",e.set("Access-Control-Expose-Headers","GoAway"),await t()},Ce=new u.a;var ke=()=>(Ce.post((qe.post("/register",xe,async(e,t)=>{try{const t=await Te.register(e.request.body);e.status=t.code,e.body={message:"Done",resp:t}}catch(t){e.status=500,e.body={message:t.message}}await t()}),qe.middleware())),Ce.post((qe.post("/login",xe,async(e,t)=>{try{const t=await Te.getUser(e.request.body);t.data?(Te.storeSession(t.data.hashedEmail,e.request.headers.referer),e.session.user=`${t.data.hashedEmail}$${Date.now()}`,e.body={message:"Done",data:{email:t.data.email,name:t.data.name}}):e.body={message:"Not found",data:{}},e.status=t.code}catch(t){e.status=500,e.body={message:t.message}}await t()}),qe.middleware())),Ce.post((qe.post("/logout",xe,async(e,t)=>{try{Te.destroySession(B(e)),e.status=200,e.body={message:"Done"}}catch(t){e.status=500,e.body={message:t.message}}await t()}),qe.middleware())),Ce.post((qe.post("/restore",xe,async(e,t)=>{try{const t=await Te.initRestore(e.request.body.user);e.status=t.code,e.body={message:"Done"}}catch(t){e.status=500,e.body={message:t.message}}await t()}),qe.middleware())),Ce.post((qe.post("/create-pw",xe,async(e,t)=>{try{const t=await Te.createPw(e.request.body.pw,e.request.body.v);e.status=t.code,e.body={message:"Done",data:t}}catch(t){e.status=500,e.body={message:t.message}}await t()}),qe.middleware())),Ce.middleware());function Ne(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const Me=new(r(1)),Ee=new class{constructor(e,t){Ne(this,"tfsService",void 0),Ne(this,"dataService",void 0),this.dataService=e,this.tfsService=t}getAllCompletedPredictions(e,t){return this.dataService.getAllCompletedPredictions(e,t)}}(new class{constructor(){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(this,"config",{schema:[q],deleteRealmIfMigrationNeeded:!0,path:"./db/files/predictions/01.realm"})}getAllCompletedPredictions(e,t){return x.a.open(this.config).then(r=>r.objects("Prediction").filtered(`owner = "${e}" AND finalRate != 0 AND time >= ${t.dateStart} AND verifyTime <= ${t.dateEnd}`).sorted("time",!0)).catch(e=>{f.error(e)})}},new w),_e=new u.a;var Ae=()=>(_e.post((Me.post("/completed",G,async(e,t)=>{try{const t=await Ee.getAllCompletedPredictions(B(e),e.request.body);e.body={message:"Done",data:Object(b.map)(Object(b.dissoc)("owner"),t)}}catch(t){e.body={message:t.message}}await t()}),Me.middleware())),_e.middleware());function Fe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const Ie=new(r(1)),$e=new class{constructor(e){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(this,"dataService",void 0),this.dataService=e}getStats(){return Promise.all([this.dataService.getUsersCount(),this.dataService.getPredsCount(),this.dataService.getHistoryCount()])}}(new class{constructor(){Fe(this,"ratesConfig",{schema:[ae],deleteRealmIfMigrationNeeded:!0,path:"./db/files/rates/01.realm"}),Fe(this,"predsConfig",{schema:[q],deleteRealmIfMigrationNeeded:!0,path:"./db/files/predictions/01.realm"}),Fe(this,"usersConfig",{schema:[_],deleteRealmIfMigrationNeeded:!0,path:"./db/files/users/01.realm"})}getHistoryCount(){return x.a.open(this.ratesConfig).then(e=>e.objects("Rate").length).catch(e=>{f.error(e)})}getUsersCount(){return x.a.open(this.usersConfig).then(e=>e.objects("User").length).catch(e=>{f.error(e)})}getPredsCount(){return x.a.open(this.predsConfig).then(e=>e.objects("Rate").length).catch(e=>{f.error(e)})}}),He=async(e,t)=>{e.type="json",e.set("Access-Control-Expose-Headers","GoAway"),await t()},Le=new u.a;var Ve=()=>(Le.get((Ie.get("/whatsgoingon",He,async(e,t)=>{try{const t=await $e.getStats();e.body={message:"Done",data:t}}catch(t){e.body={message:t.message}}await t()}),Ie.middleware())),Le.middleware());const Be=new u.a;const Ke=r(14),Ge=r(3),Je=r(15),ze={useToken:!0,useCookie:!1,key:"GoAway",maxAge:6048e5,autoCommit:!0,overwrite:!0,httpOnly:!0,signed:!0,rolling:!1,renew:!1,genid:e=>f.warn(e)};const Ye=new(r(16)),We=process.env.HOST||"127.0.0.1",Xe=process.env.PORT||s.port;var Ze;(Ze=Ye).use(async(e,t)=>{try{await t(),404===e.status&&e.throw(404),401===e.status&&e.throw(401),200===e.status&&(e.body={status:200,data:e.body})}catch(t){f.error(t),e.status=t.status||500,e.type="json",e.body={status:e.status,message:t.message},e.app.emit("error",t,e)}}),Ze.use(Ke()),Ze.keys=["11223344qqwweerr"],Ze.use(c()()),Ze.use(n()(a.root)),Ze.use(Je(ze,Ze)),Ze.use(Ge("/api",(Be.use(p()("/predictions",Q())),Be.use(p()("/rates-scheduler",de())),Be.use(p()("/predictions-scheduler",ye())),Be.use(p()("/rates",Se())),Be.use(p()("/users",ke())),Be.use(p()("/analyze",Ae())),Be.use(p()("/stats",Ve())),Be.middleware()))),Ze.on("error",e=>{f.error(e.message)}),Ye.listen(Xe,We)}]);
//# sourceMappingURL=main.map