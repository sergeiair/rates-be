require("source-map-support/register"),module.exports=function(e){var t={};function r(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=16)}([function(e,t){e.exports=require("realm")},function(e,t){e.exports=require("koa-trie-router")},function(e,t){e.exports=require("koa-mount")},function(e,t){e.exports=require("bcrypt")},function(e,t){e.exports=require("ramda")},function(e,t){e.exports=require("md5")},function(e,t){e.exports=require("node-schedule")},function(e,t){e.exports=require("koa-static")},function(e,t){e.exports=require("koa-bodyparser")},function(e,t){e.exports=require("bunyan")},function(e,t){e.exports=require("@tensorflow/tfjs-node")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("nodemailer")},function(e,t){e.exports=require("@koa/cors")},function(e,t){e.exports=require("koa-session-auth")},function(e,t){e.exports=require("koa")},function(e,t,r){"use strict";r.r(t);var s={port:3333},a={root:"./static",options:{}},i=r(7),n=r.n(i),o=r(8),c=r.n(o),l=r(1),d=r.n(l),u=r(2),p=r.n(u);const b=r(9).createLogger({name:"app",level:"debug",path:"./log.json"});function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const h=r(10);class m{constructor(e){g(this,"isRunning",!1),g(this,"model",h.sequential()),g(this,"inputTnsr",null),g(this,"labelTnsr",null),g(this,"_data",[]),this.configure(),this.init(e)}getPrediction(e,t,r,s,a){return h.tidy(()=>{const i=h.tensor2d(e,[1,e.length]).sub(r).div(t.sub(r));return this.model.predict(i.reshape([1,e.length])).mul(a.sub(s)).add(s).dataSync()})}getNormalizedValues(){return h.tidy(()=>{const e=this.inputTnsr.max(),t=this.inputTnsr.min(),r=this.labelTnsr.max(),s=this.labelTnsr.min();return{inputs:this.inputTnsr.sub(t).div(e.sub(t)),labels:this.labelTnsr.sub(s).div(r.sub(s)),inputMax:e,inputMinVal:t,labelMax:r,labelMinVal:s}})}init(e){this._data=e||[],this.initTensors()}initTensors(){h.util.shuffle(this._data),this.initInputTnsr(),this.initLabelsTnsr()}initInputTnsr(){this.inputTnsr=h.tensor(this._data.map(e=>[e.volatility,e.forecast,e.realRate,e.predRate]))}initLabelsTnsr(){this.labelTnsr=h.tensor2d(this._data.map(e=>e.finalRate),[this._data.length,1])}configure(){this.model.add(h.layers.dense({units:1,inputShape:[4]})),this.model.add(h.layers.dense({units:1,useBias:!0})),this.model.compile({loss:"meanSquaredError",optimizer:"sgd"})}destroy(){this.model.dispose()}async getResult(e){const{inputMax:t,inputMinVal:r,labelMinVal:s,labelMax:a}=this.getNormalizedValues();return this.getPrediction(e,t,r,s,a)}trainModel(e,t){const{inputs:r,labels:s}=this.getNormalizedValues();return new Promise((a,i)=>{this.isRunning||(this.isRunning=!0,this.model.fit(r,s,{batchSize:t,epochs:e}).then(()=>{this.isRunning=!1,a("trainingDone")}))})}}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const v={name:"Prediction",primaryKey:"id",properties:{id:"int",predRate:"double",realRate:"double",finalRate:"double",pair:"string",owner:"string",time:"int",verifyTime:"int",forecast:"int",volatility:"int"}};var S=r(0),P=r.n(S);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){R(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var D=r(3);const U={name:"User",primaryKey:"email",properties:{id:"int",email:{type:"string",indexed:!0},name:"string",pw:"string",restoreToken:{type:"string",default:""},active:{type:"bool",default:!0}}};function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class N{constructor(){q(this,"_data",null),q(this,"_error",null),q(this,"_code",null)}set data(e){this.isObject(e)&&(this._data=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)),this._code=200}get data(){return this._data}set error(e){this._error=e,this._code=503}get code(){return this._code}set code(e){this._code=e}isObject(e){return!!e&&e.constructor===Object}}const x={name:"Session",primaryKey:"id",properties:{expired:"int",id:"string",info:"string"}};var C=r(5);function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class F{constructor(){k(this,"userConfig",{schema:[U],deleteRealmIfMigrationNeeded:!0,path:"./db/files/users/01.realm"}),k(this,"sessionConfig",{schema:[x],deleteRealmIfMigrationNeeded:!0,path:"./db/files/sessions/01.realm"})}getUserUnsafe(e){return P.a.open(this.userConfig).then(t=>t.objectForPrimaryKey("User",e)).catch(e=>b.error(e.message))}getSession(e){return P.a.open(this.sessionConfig).then(t=>t.objectForPrimaryKey("Session",e)).catch(e=>b.error(e.message))}async getUser(e){const t=new N,r=await this.getUserUnsafe(e.email);return r&&D.compareSync(e.pw||"",r.pw||"")?t.data={hashedEmail:C(r.email),email:r.email,name:r.name}:(t.error="Not found",t.code=404),t}storeSession(e,t){return P.a.open(this.sessionConfig).then(r=>{r.write(()=>{r.create("Session",{expired:Date.now()+Me.maxAge,id:e,info:t},P.a.UpdateMode.Modified)}),r.close()}).catch(e=>{b.error(e.message)})}destroySession(e){return P.a.open(this.sessionConfig).then(t=>{const r=t.objectForPrimaryKey("Session",e);r&&t.write(()=>{t.delete(r)}),t.close()}).catch(e=>{b.error(e.message)})}async getRestoreToken(e){return new Promise((t,r)=>{P.a.open(this.userConfig).then(r=>{const s=new N,a=r.objectForPrimaryKey("User",e);a&&!a.restoreToken?r.write(()=>{a.restoreToken=function(e){return D.hashSync(e+"_frvr3$R34gTgtr5_",5)}(e),s.data={token:a.restoreToken,name:a.name},t(s)}):(s.data={status:"started"},s.code=208,t(s)),r.close()}).catch(e=>{b.error(e.message),r(e.message)})})}registerUser(e){return P.a.open(this.userConfig).then(t=>{const{email:r,pw:s,name:a}=e,i=new N;return t.objects("User").filtered(`email = "${r}"`).isEmpty()?t.write(()=>{t.create("User",{id:t.objects("User").length+1,pw:D.hashSync(s,10),name:a||r.split("@")[0],email:r},P.a.UpdateMode.Never),i.data={email:r}}):(i.error="User already exists",i.code=200),t.close(),i}).catch(e=>{b.error(e.message)})}async createPw(e,t){return P.a.open(this.userConfig).then(r=>{const s=new N,a=r.objects("User").filtered(`restoreToken = "${t}" LIMIT(1)`);return a[0]?r.write(()=>{a[0].pw=D.hashSync(e,10),a[0].restoreToken="",s.data={status:"Done"}}):s.error="Failed",r.close(),s}).catch(e=>{b.error(e.message)})}}function M(e){return(e.session.user||"").split("$")[0]}function B(e){return e.headers.referer}const E=new class{constructor(e){var t,r,s;s=void 0,(r="dataService")in(t=this)?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s,this.dataService=e}getSession(e){return this.dataService.getSession(e)}}(new F),_=async(e,t)=>{if(e.session.isNew)e.data=null,e.status=401;else{const t=await E.getSession(M(e));if(t){const r=t.expired>Date.now()&&t.info===B(e);console.log(t.expired,Date.now()),console.log(t.info,B(e)),r||(e.data=null,e.status=401)}else e.data=null,e.status=401}e.type="json",await t()};var A=r(4);function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){$(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const I=new(r(1)),G=new class{constructor(e){w(this,"tfsService",void 0),w(this,"dataService",void 0),this.dataService=e}getAll(e){return this.dataService.getAll(e)}storeSingle(e){this.dataService.storeSingle(this.getPreparedPredData(e))}getPreparedPredData(e){return y(y({},e),{},{volatility:this.getVolatilityByPair(e.volatility,e.pair)})}getVolatilityByPair(e,t){if(e)return e;switch(t){case"USD/CHF":return 1;case"USD/GBP":case"USD/EUR":return 2;case"USD/RUB":return 4;default:return 3}}async prepareTFService(e,t){const r=await this.dataService.getAllCompletedPredictions(t,e.pair);if(r&&r.length){const e=r.map(e=>({predRate:e.predRate,realRate:e.realRate,finalRate:e.finalRate,forecast:e.forecast,volatility:e.volatility}));return this.tfsService=void 0,this.tfsService=new m(e),await this.tfsService.trainModel(500,32)}return"empty"}getComputedPrediction(e){return this.tfsService.getResult([this.getVolatilityByPair(e.volatility,e.pair),e.forecast,e.realRate,e.predRate],500)}}(new class{constructor(){R(this,"config",{schema:[v],deleteRealmIfMigrationNeeded:!0,path:"./db/files/predictions/01.realm"})}getAll(e){return P.a.open(this.config).then(t=>t.objects("Prediction").filtered(`owner = "${e}"`).sorted("time",!0)).catch(e=>{b.error(e.message)})}storeSingle(e){P.a.open(this.config).then(t=>{t.write(()=>{t.create("Prediction",j(j({},e),{},{finalRate:0,verifyTime:0,id:Date.now()}),P.a.UpdateMode.Never)}),t.close()}).catch(e=>b.error(e.message))}getAllCompletedPredictions(e,t){return P.a.open(this.config).then(r=>r.objects("Prediction").filtered(`owner = "${e}" AND finalRate != 0 AND pair = "${t}"`)).catch(e=>{b.error(e.message)})}}),L=new d.a;var V=()=>(L.post((I.post("/",_,async(e,t)=>{try{G.storeSingle(K(K({},e.request.body),{},{owner:M(e)})),e.body={message:"Done!"}}catch(t){e.body={message:t.message}}await t()}),I.middleware())),L.post((I.post("/compute-current",_,async(e,t)=>{try{const t=await G.getComputedPrediction(e.request.body);e.body={message:"Done!",result:t}}catch(t){e.body={message:t.message}}await t()}),I.middleware())),L.post((I.post("/prepare-for-history",_,async(e,t)=>{try{const t=await G.prepareTFService(e.request.body,M(e));e.body={message:"Done!",status:t}}catch(t){e.body={message:t.message}}await t()}),I.middleware())),L.get((I.get("/",_,async(e,t)=>{try{const t=await G.getAll(M(e));e.body={message:"Done fetch!",predictions:Object(A.map)(Object(A.dissoc)("owner"),t)}}catch(t){e.body={message:t.message}}await t()}),I.middleware())),L.middleware());function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class J{static set(e,t){this.latestBase=e,this.latestRates=t}static ratesHaveValue(){return!!this.latestRates&&!!Object.keys(this.latestRates).length}static isRequiredTimePassed(){return Date.now()-this.prevSet>this.requiredMsGap}static updatePrevRequestTime(){this.prevSet=Date.now()}static isNewValue(e,t){return this.latestBase!==e||this.latestRates.EUR.toString()!==t.EUR.toString()||this.latestRates.NOK.toString()!==t.NOK.toString()||this.latestRates.GBP.toString()!==t.GBP.toString()||this.latestRates.RUB.toString()!==t.RUB.toString()||this.latestRates.CHF.toString()!==t.CHF.toString()||this.latestRates.PLN.toString()!==t.PLN.toString()}}function Q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}z(J,"prevSet",Date.now()),z(J,"requiredMsGap",27e5),z(J,"latestBase",null),z(J,"latestRates",{EUR:0,NOK:0,GBP:0,RUB:0,CHF:0,PLN:0});const W=r(11).default,X=r(6);class Y{static start(e){this.job=this.instance.scheduleJob("*/45 * * * *",()=>this.requestData(e)),this.status=1}static stop(){this.instance.cancelJob(this.job),this.status=0}static dataFetched(e,t){}static requestData(e){J.isRequiredTimePassed()&&(J.updatePrevRequestTime(),console.log((new Date).toLocaleTimeString()),W.get(this.endpoint+"&symbols=EUR,USD,PLN,NOK,GBP,CHF,RUB").then(t=>this.dataFetched(e,t.data)).catch(console.error))}}Q(Y,"endpoint","https://api.currencyfreaks.com/latest?apikey=0f3d4ab831344e9c8be384209bfd867c"),Q(Y,"instance",X),Q(Y,"job",null),Q(Y,"status",0);const Z={name:"Rate",primaryKey:"id",properties:{id:"int",base:{type:"string",indexed:!0},USD:"double",EUR:"double",NOK:"double",GBP:"double",RUB:"double",CHF:"double",PLN:"double",time:"string"}};function ee(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const te=new(r(1)),re=new class{constructor(e){var t,r,s;s=void 0,(r="dataService")in(t=this)?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s,this.dataService=e,this.bindSchedulerService(),this.enable()}bindSchedulerService(){Y.dataFetched=this.dataFetched.bind(this)}enable(){Y.start("USD")}getStatus(){return Y.status}dataFetched(e,t){this.isSaveAllowed(e,t.rates||{})&&this.dataService.storeSingle(e,t.rates||{}),this.updateStaticStore(e,t.rates||{})}updateStaticStore(e,t){J.set(e,t)}isSaveAllowed(e,t){return J.isNewValue(e,t)}}(new class{constructor(){ee(this,"validCurrencies",["USD","EUR","NOK","GBP","RUB","CHF","PLN"]),ee(this,"config",{schema:[Z],deleteRealmIfMigrationNeeded:!0,path:"./db/files/rates/01.realm"})}storeSingle(e,t){P.a.open(this.config).then(r=>{r.write(()=>{r.create("Rate",{id:Date.now(),base:e,USD:parseFloat(t.USD),EUR:parseFloat(t.EUR),NOK:parseFloat(t.NOK),GBP:parseFloat(t.GBP),RUB:parseFloat(t.RUB),CHF:parseFloat(t.CHF),PLN:parseFloat(t.PLN),time:(new Date).toISOString()},P.a.UpdateMode.Never)}),r.close()}).catch(e=>{b.error(e.message)})}}),se=new d.a;var ae=()=>(se.post((te.post("/enable",_,async(e,t)=>{try{re.enable(),e.body={message:"Done",status:await re.getStatus()}}catch(t){e.body={message:t.message}}await t()}),te.middleware())),se.get((te.get("/status",_,async(e,t)=>{try{const t=await re.getStatus();e.body={message:"Done",status:t}}catch(t){e.body={message:t.message}}await t()}),te.middleware())),se.middleware());function ie(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const ne=r(6);class oe{static start(e){this.job=this.instance.scheduleJob("*/30 * * * * *",()=>this.startPendingItemsReview(e)),this.status=1}static stop(){this.instance.cancelJob(this.job),this.status=0}static startPendingItemsReview(e){}}ie(oe,"instance",ne),ie(oe,"job",null),ie(oe,"status",0);const ce=new(r(1)),le=new class{constructor(e){var t,r,s;s=void 0,(r="dataService")in(t=this)?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s,this.dataService=e,this.bindSchedulerService(),this.enable()}enable(){oe.start("USD")}getStatus(){return oe.status}bindSchedulerService(){oe.startPendingItemsReview=this.fillPendingPredictions.bind(this)}fillPendingPredictions(){J.ratesHaveValue()&&this.dataService.fillPendingPredictions(J.latestRates)}}(new class{constructor(){var e,t,r;r={schema:[v],deleteRealmIfMigrationNeeded:!0,path:"./db/files/predictions/01.realm"},(t="config")in(e=this)?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}fillPendingPredictions(e){return P.a.open(this.config).then(t=>{const r=Date.now(),s=t.objects("Prediction").filtered("finalRate = 0 AND time < "+r)||[];t.write(()=>{s.forEach(t=>{const[s,a]=t.pair.split("/");t.finalRate=parseFloat(e[a]),t.verifyTime=r})}),t.close()}).catch(e=>{b.error(e.message)})}}),de=new d.a;var ue=()=>(de.post((ce.post("/enable",_,async(e,t)=>{try{le.enable(),e.body={message:"Done",status:await le.getStatus()}}catch(t){e.body={message:t.message}}await t()}),ce.middleware())),de.get((ce.get("/status",_,async(e,t)=>{try{const t=await le.getStatus();e.body={message:"Done",status:t}}catch(t){e.body={message:t.message}}await t()}),ce.middleware())),de.middleware());function pe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const be=new(r(1)),ge=new class{constructor(e){var t,r,s;s=void 0,(r="dataService")in(t=this)?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s,this.dataService=e}getPair(e,t){return this.dataService.getPair(e)}getHistory(e,t){return this.dataService.getHistory(e,t)}}(new class{constructor(){pe(this,"validCurrencies",["USD","EUR","NOK","GBP","RUB","CHF","PLN"]),pe(this,"config",{schema:[Z],deleteRealmIfMigrationNeeded:!0,path:"./db/files/rates/01.realm"})}getPair(e){return P.a.open(this.config).then(t=>t.objects("Rate").filtered(`base = "${e}"`).sorted("id",!0).slice(0,1)).catch(e=>{b.error(e.message)})}getHistory(e,t){return P.a.open(this.config).then(r=>r.objects("Rate").filtered(`base = "${e}"`).slice(0,t)).catch(e=>{b.error(e.message)})}}),he=new d.a;var me=()=>(he.get((be.get("/pair",_,async(e,t)=>{try{const{base:t,second:r}=e.request.query,s=await ge.getPair(t,r);e.body={message:"Done",rates:s}}catch(t){e.body={message:t.message}}await t()}),be.middleware())),he.get((be.get("/history",_,async(e,t)=>{try{const{base:t,limit:r}=e.request.query,s=await ge.getHistory(t,r);e.body={message:"Done",rates:s}}catch(t){e.body={message:t.message}}await t()}),be.middleware())),he.middleware());const fe=r(12);class ye{static sendPwReset(e,t){return this.emailTransporter.sendMail({from:'"Rates pal" <noreply@ratespal.com>',to:e,subject:"Reset password",text:"",html:t})}}var we,ve,Se;we=ye,ve="emailTransporter",Se=fe.createTransport({host:"smtp.gmail.com",port:465,service:"gmail",secure:!1,auth:{user:"ratespalmail@gmail.com",pass:"rer9Ohdgmail"},debug:!1,logger:!0}),ve in we?Object.defineProperty(we,ve,{value:Se,enumerable:!0,configurable:!0,writable:!0}):we[ve]=Se;const Pe=new(r(1)),Oe=new class{constructor(e){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(this,"dataService",void 0),this.dataService=e}register(e){return this.dataService.registerUser(e)}getUser(e){return this.dataService.getUser(e)}storeSession(e,t){return this.dataService.storeSession(e,t)}destroySession(e){return this.dataService.destroySession(e)}async initRestore(e){const t=await this.dataService.getRestoreToken(e);var r,s;return t.data.token&&ye.sendPwReset(e,(r=t.data.name,s=t.data.token,`\n        Hi ${r}, <br>\n        Need to reset your password? Click on the link below to get you in.  <br>\n        <a href="http://localhost:4000/reset-password?v=${s}">Create new password</a>\n    `)),t}createPw(e,t){return this.dataService.createPw(e,t)}}(new F),je=async(e,t)=>{e.type="json",e.set("Access-Control-Expose-Headers","GoAway"),await t()},Re=new d.a;var De=()=>(Re.post((Pe.post("/register",je,async(e,t)=>{try{const t=await Oe.register(e.request.body);e.status=t.code,e.body={message:"Done",resp:t}}catch(t){e.status=500,e.body={message:t.message}}await t()}),Pe.middleware())),Re.post((Pe.post("/login",je,async(e,t)=>{try{const t=await Oe.getUser(e.request.body);t.data?(Oe.storeSession(t.data.hashedEmail,B(e.request)),e.session.user=`${t.data.hashedEmail}$${Date.now()}`,e.body={message:"Done",data:{email:t.data.email,name:t.data.name}}):e.body={message:"Not found",data:{}},e.status=t.code}catch(t){e.status=500,e.body={message:t.message}}await t()}),Pe.middleware())),Re.post((Pe.post("/logout",je,async(e,t)=>{try{Oe.destroySession(M(e)),e.status=200,e.body={message:"Done"}}catch(t){e.status=500,e.body={message:t.message}}await t()}),Pe.middleware())),Re.post((Pe.post("/restore",je,async(e,t)=>{try{const t=await Oe.initRestore(e.request.body.user);e.status=t.code,e.body={message:"Done"}}catch(t){e.status=500,e.body={message:t.message}}await t()}),Pe.middleware())),Re.post((Pe.post("/create-pw",je,async(e,t)=>{try{const t=await Oe.createPw(e.request.body.pw,e.request.body.v);e.status=t.code,e.body={message:"Done",data:t}}catch(t){e.status=500,e.body={message:t.message}}await t()}),Pe.middleware())),Re.middleware());function Ue(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const Te=new(r(1)),qe=new class{constructor(e,t){Ue(this,"tfsService",void 0),Ue(this,"dataService",void 0),this.dataService=e,this.tfsService=t}getAllCompletedPredictions(e,t){return this.dataService.getAllCompletedPredictions(e,t)}}(new class{constructor(){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(this,"config",{schema:[v],deleteRealmIfMigrationNeeded:!0,path:"./db/files/predictions/01.realm"})}getAllCompletedPredictions(e,t){return P.a.open(this.config).then(r=>r.objects("Prediction").filtered(`owner = "${e}" AND finalRate != 0 AND time >= ${t.dateStart} AND time <= ${t.dateEnd}`).sorted("time",!0)).catch(e=>{b.error(e.message)})}},new m),Ne=new d.a;var xe=()=>(Ne.post((Te.post("/completed",_,async(e,t)=>{try{const t=await qe.getAllCompletedPredictions(M(e),e.request.body);e.body={message:"Done",data:Object(A.map)(Object(A.dissoc)("owner"),t)}}catch(t){e.body={message:t.message}}await t()}),Te.middleware())),Ne.middleware());const Ce=new d.a;r(13);const ke=r(2),Fe=r(14),Me={useToken:!0,useCookie:!1,key:"GoAway",maxAge:864e5,autoCommit:!0,overwrite:!0,httpOnly:!0,signed:!0,rolling:!1,renew:!1,genid:e=>b.warn(e)};const Be=new(r(15)),Ee=process.env.HOST||"127.0.0.1",_e=process.env.PORT||s.port;var Ae;(Ae=Be).use(async(e,t)=>{try{await t(),404===e.status&&e.throw(404),401===e.status&&e.throw(401),200===e.status&&(e.body={status:200,data:e.body})}catch(t){b.error(t),e.status=t.status||500,e.type="json",e.body={status:e.status,message:t.message},e.app.emit("error",t,e)}}),Ae.keys=["11223344qqwweerr"],Ae.use(c()()),Ae.use(n()(a.root)),Ae.use(Fe(Me,Ae)),Ae.use(ke("/api",(Ce.use(p()("/predictions",V())),Ce.use(p()("/rates-scheduler",ae())),Ce.use(p()("/predictions-scheduler",ue())),Ce.use(p()("/rates",me())),Ce.use(p()("/users",De())),Ce.use(p()("/analyze",xe())),Ce.middleware()))),Ae.on("error",e=>{b.error(e.message)}),Be.listen(_e,Ee)}]);
//# sourceMappingURL=main.map