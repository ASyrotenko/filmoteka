function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=e.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){r[t]=e},e.parcelRequired7c6=i),i.register("bWo2c",(function(t,e){i("eyjy7");var n=i("2YDLC"),r=i("fzYh0");const s=document.querySelector("#signin"),o=document.querySelector("#signout"),a=document.querySelector("#googleUser"),u=new(0,r.Firebase);(0,n.v)(r.auth,(t=>{t&&(s.classList.add("signOut"),o.classList.add("signIn"),a.innerHTML=`<img class="user-img" src="${t.photoURL}">`,a.style.display="block")})),s.addEventListener("click",u.singInWithGoogle),o.addEventListener("click",u.singOutUser)})),i.register("eyjy7",(function(e,n){t(e.exports,"onAuthStateChanged",(function(){return i("2YDLC").v})),t(e.exports,"getAuth",(function(){return i("2YDLC").n})),t(e.exports,"GoogleAuthProvider",(function(){return i("2YDLC").Q})),t(e.exports,"signInWithPopup",(function(){return i("2YDLC").c})),t(e.exports,"signOut",(function(){return i("2YDLC").y})),i("1iO0g")})),i.register("1iO0g",(function(e,n){t(e.exports,"GoogleAuthProvider",(function(){return i("2YDLC").Q})),t(e.exports,"getAuth",(function(){return i("2YDLC").n})),t(e.exports,"onAuthStateChanged",(function(){return i("2YDLC").v})),t(e.exports,"signInWithPopup",(function(){return i("2YDLC").c})),t(e.exports,"signOut",(function(){return i("2YDLC").y})),i("ffjl9"),i("ix4Jr"),i("7vF8m"),i("4a6xH");i("2YDLC")})),i.register("ffjl9",(function(n,r){t(n.exports,"base64urlEncodeWithoutPadding",(function(){return u})),t(n.exports,"base64Decode",(function(){return c})),t(n.exports,"getUA",(function(){return h})),t(n.exports,"isMobileCordova",(function(){return l})),t(n.exports,"isBrowserExtension",(function(){return d})),t(n.exports,"isReactNative",(function(){return f})),t(n.exports,"isIE",(function(){return p})),t(n.exports,"isSafari",(function(){return g})),t(n.exports,"isIndexedDBAvailable",(function(){return m})),t(n.exports,"validateIndexedDBOpenable",(function(){return y})),t(n.exports,"getDefaultEmulatorHost",(function(){return w})),t(n.exports,"getDefaultEmulatorHostnameAndPort",(function(){return T})),t(n.exports,"getDefaultAppConfig",(function(){return b})),t(n.exports,"getExperimentalSetting",(function(){return E})),t(n.exports,"Deferred",(function(){return I})),t(n.exports,"createMockUserToken",(function(){return S})),t(n.exports,"FirebaseError",(function(){return k})),t(n.exports,"ErrorFactory",(function(){return C})),t(n.exports,"isEmpty",(function(){return D})),t(n.exports,"deepEqual",(function(){return x})),t(n.exports,"querystring",(function(){return N})),t(n.exports,"querystringDecode",(function(){return O})),t(n.exports,"extractQuerystring",(function(){return L})),t(n.exports,"createSubscribe",(function(){return M})),t(n.exports,"getModularInstance",(function(){return U}));var s=i("4TNnu");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const i=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,u=a?t[e+2]:0,c=i>>2,h=(3&i)<<4|o>>4;let l=(15&o)<<2|u>>6,d=63&u;a||(d=64,s||(l=64)),r.push(n[c],n[h],n[l],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==s||null==o||null==a)throw Error();const u=i<<2|s>>4;if(r.push(u),64!==o){const t=s<<4&240|o>>2;if(r.push(t),64!==a){const t=o<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},u=function(t){return function(t){const e=o(t);return a.encodeByteArray(e,!0)}(t).replace(/\./g,"")},c=function(t){try{return a.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function l(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())}function d(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function f(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function p(){const t=h();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g(){return!function(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function m(){try{return"object"==typeof indexedDB}catch(t){return!1}}function y(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,_=()=>{try{return v()||(()=>{if(void 0===s||void 0===s.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&c(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},w=t=>{var e,n;return null===(n=null===(e=_())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},T=t=>{const e=w(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},b=()=>{var t;return null===(t=_())||void 0===t?void 0:t.config},E=t=>{var e;return null===(e=_())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?function(t,e){return t.replace(A,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new k(r,o,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const A=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function x(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(R(n)&&R(s)){if(!x(n,s))return!1}else if(n!==s)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function R(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function O(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function L(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t,e){const n=new P(t,e);return n.subscribe.bind(n)}class P{next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=F),void 0===r.error&&(r.error=F),void 0===r.complete&&(r.complete=F);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}}function F(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(t){return t&&t._delegate?t._delegate:t}})),i.register("4TNnu",(function(t,e){var n,r,i=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(t){r=o}}();var u,c=[],h=!1,l=-1;function d(){h&&u&&(h=!1,u.length?c=u.concat(c):l=-1,c.length&&f())}function f(){if(!h){var t=a(d);h=!0;for(var e=c.length;e;){for(u=c,c=[];++l<e;)u&&u[l].run();l=-1,e=c.length}u=null,h=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function g(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new p(t,e)),1!==c.length||h||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),i.register("ix4Jr",(function(e,n){t(e.exports,"_registerComponent",(function(){return y})),t(e.exports,"_getProvider",(function(){return v})),t(e.exports,"_removeServiceInstance",(function(){return _})),t(e.exports,"SDK_VERSION",(function(){return E})),t(e.exports,"initializeApp",(function(){return I})),t(e.exports,"getApp",(function(){return S})),t(e.exports,"registerVersion",(function(){return k}));var r=i("4a6xH"),s=i("7vF8m"),o=i("ffjl9"),a=i("cCiiD");o=i("ffjl9");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const c="@firebase/app",h="0.9.0",l=new(0,s.Logger)("@firebase/app"),d="[DEFAULT]",f={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,g=new Map;function m(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function y(t){const e=t.name;if(g.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;g.set(e,t);for(const e of p.values())m(e,t);return!0}function v(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _(t,e,n="[DEFAULT]"){v(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const w={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},T=new(0,o.ErrorFactory)("app","Firebase",w);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw T.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,r.Component)("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E="9.15.0";function I(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:d,automaticDataCollectionEnabled:!1},e),s=i.name;if("string"!=typeof s||!s)throw T.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.getDefaultAppConfig)()),!n)throw T.create("no-options");const a=p.get(s);if(a){if((0,o.deepEqual)(n,a.options)&&(0,o.deepEqual)(i,a.config))return a;throw T.create("duplicate-app",{appName:s})}const u=new(0,r.ComponentContainer)(s);for(const t of g.values())u.addComponent(t);const c=new b(n,i,u);return p.set(s,c),c}function S(t="[DEFAULT]"){const e=p.get(t);if(!e&&t===d)return I();if(!e)throw T.create("no-app",{appName:t});return e}function k(t,e,n){var i;let s=null!==(i=f[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}y(new(0,r.Component)(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const C="firebase-heartbeat-store";let A=null;function D(){return A||(A=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(C)}}).catch((t=>{throw T.create("idb-open",{originalErrorMessage:t.message})}))),A}async function x(t,e){try{const n=(await D()).transaction(C,"readwrite"),r=n.objectStore(C);return await r.put(e,R(t)),n.done}catch(t){if(t instanceof o.FirebaseError)l.warn(t.message);else{const e=T.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});l.warn(e.message)}}}function R(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=O();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=O(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),M(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),M(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new L(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function O(){return(new Date).toISOString().substring(0,10)}class L{async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await D()).transaction(C).objectStore(C).get(R(t))}catch(t){if(t instanceof o.FirebaseError)l.warn(t.message);else{const e=T.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});l.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return x(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return x(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function M(t){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P;P="",y(new(0,r.Component)("platform-logger",(t=>new u(t)),"PRIVATE")),y(new(0,r.Component)("heartbeat",(t=>new N(t)),"PRIVATE")),k(c,h,P),k(c,h,"esm2017"),k("fire-js","")})),i.register("4a6xH",(function(e,n){t(e.exports,"Component",(function(){return s})),t(e.exports,"ComponentContainer",(function(){return u}));var r=i("ffjl9");class s{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new(0,r.Deferred);if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===o?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class u{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new a(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}})),i.register("7vF8m",(function(e,n){t(e.exports,"LogLevel",(function(){return i})),t(e.exports,"Logger",(function(){return h})),t(e.exports,"setLogLevel",(function(){return l})),t(e.exports,"setUserLogHandler",(function(){return d}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i,s;(s=i||(i={}))[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT";const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},a=i.INFO,u={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=u[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class h{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}constructor(t){this.name=t,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,r.push(this)}}function l(t){r.forEach((e=>{e.setLogLevel(t)}))}function d(t,e){for(const n of r){let r=null;e&&e.level&&(r=o[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map((t=>{if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}})).filter((t=>t)).join(" ");n>=(null!=r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:o,args:s,type:e.name})}}}})),i.register("cCiiD",(function(e,n){t(e.exports,"openDB",(function(){return s}));var r=i("ekHjI");r=i("ekHjI");function s(t,e,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),u=(0,r.w)(a);return i&&a.addEventListener("upgradeneeded",(t=>{i((0,r.w)(a.result),t.oldVersion,t.newVersion,(0,r.w)(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),u.then((t=>{o&&t.addEventListener("close",(()=>o())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),u}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],u=new Map;function c(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(u.get(e))return u.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=a.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!o.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return u.set(e,s),s}(0,r.r)((t=>({...t,get:(e,n,r)=>c(e,n)||t.get(e,n,r),has:(e,n)=>!!c(e,n)||t.has(e,n)})))})),i.register("ekHjI",(function(e,n){t(e.exports,"w",(function(){return p})),t(e.exports,"r",(function(){return l}));let r,i;const s=new WeakMap,o=new WeakMap,a=new WeakMap,u=new WeakMap,c=new WeakMap;let h={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return o.get(t);if("objectStoreNames"===e)return t.objectStoreNames||a.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function l(t){h=t(h)}function d(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(g(this),e),p(s.get(this))}:function(...e){return p(t.apply(g(this),e))}:function(e,...n){const r=t.call(g(this),e,...n);return a.set(r,e.sort?e.sort():[e]),p(r)}}function f(t){return"function"==typeof t?d(t):(t instanceof IDBTransaction&&function(t){if(o.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));o.set(t,e)}(t),e=t,(r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,h):t);var e}function p(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(p(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&s.set(e,t)})).catch((()=>{})),c.set(e,t),e}(t);if(u.has(t))return u.get(t);const e=f(t);return e!==t&&(u.set(t,e),c.set(e,t)),e}const g=t=>c.get(t)})),i.register("2YDLC",(function(e,n){t(e.exports,"Q",(function(){return Dt})),t(e.exports,"v",(function(){return Vt})),t(e.exports,"y",(function(){return Bt})),t(e.exports,"c",(function(){return we})),t(e.exports,"n",(function(){return en}));var r=i("ffjl9"),s=i("ix4Jr"),o=i("7vF8m"),a=i("l73V3"),u=i("4a6xH");function c(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h=c,l=new(0,r.ErrorFactory)("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),d=new(0,o.Logger)("@firebase/auth");function f(t,...e){d.logLevel<=o.LogLevel.ERROR&&d.error(`Auth (${s.SDK_VERSION}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t,...e){throw v(t,...e)}function g(t,...e){return v(t,...e)}function m(t,e,n){const i=Object.assign(Object.assign({},h()),{[e]:n});return new(0,r.ErrorFactory)("auth","Firebase",i).create(e,{appName:t.name})}function y(t,e,n){if(!(e instanceof n))throw n.name!==e.constructor.name&&p(t,"argument-error"),m(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function v(t,...e){if("string"!=typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function _(t,e,...n){if(!t)throw v(e,...n)}function w(t){const e="INTERNAL ASSERTION FAILED: "+t;throw f(e),new Error(e)}function T(t,e){t||w(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function E(t){T(t instanceof Function,"Expected a class definition");let e=b.get(t);return e?(T(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,b.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function I(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function S(){return"http:"===k()||"https:"===k()}function k(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(S()||(0,r.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(t,e){this.shortDelay=t,this.longDelay=e,T(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.isMobileCordova)()||(0,r.isReactNative)()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t,e){T(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},R=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function O(t,e,n,i,s={}){return L(t,s,(async()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=(0,r.querystring)(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),D.fetch()(P(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))}))}async function L(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},x),e);try{const e=new F(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw U(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw U(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw U(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw U(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(t,a,o);p(t,a)}}catch(e){if(e instanceof r.FirebaseError)throw e;p(t,"network-request-failed")}}async function M(t,e,n,r,i={}){const s=await O(t,e,n,r,i);return"mfaPendingCredential"in s&&p(t,"multi-factor-auth-required",{_serverResponse:s}),s}function P(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?A(t.config,i):`${t.config.apiScheme}://${i}`}class F{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(g(this.auth,"network-request-failed"))),R.get())}))}}function U(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=g(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t){return 1e3*Number(t)}function j(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.base64Decode)(n);return t?JSON.parse(t):(f("Failed to decode base64 JWT payload"),null)}catch(t){return f("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function q(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof r.FirebaseError&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class z{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{_initializeTime(){this.lastSignInTime=V(this.lastLoginAt),this.creationTime=V(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(t){var e;const n=t.auth,r=await t.getIdToken(),i=await q(t,async function(t,e){return O(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:r}));_(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=(0,a.__rest)(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const u=(c=t.providerData,h=o,[...c.filter((t=>!h.some((e=>e.providerId===t.providerId)))),...h]);var c,h;const l=t.isAnonymous,d=!(t.email&&s.passwordHash||(null==u?void 0:u.length)),f=!!l&&d,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new H(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ${get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){_(t.idToken,"internal-error"),_(void 0!==t.idToken,"internal-error"),_(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=j(t);return _(e,"internal-error"),_(void 0!==e.exp,"internal-error"),_(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return _(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){const n=await L(t,{},(async()=>{const n=(0,r.querystring)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=P(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",D.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new $;return n&&(_("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(_("string"==typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(_("number"==typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new $,this.toJSON())}_performRefresh(){return w("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t,e){_("string"==typeof t||void 0===t,"internal-error",{appName:e})}class G{async getIdToken(t){const e=await q(this,this.stsTokenManager.getToken(this.auth,t));return _(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=(0,r.getModularInstance)(t),i=await n.getIdToken(e),s=j(i);_(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:V(B(s.auth_time)),issuedAtTime:V(B(s.iat)),expirationTime:V(B(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=(0,r.getModularInstance)(t);await K(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(_(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new G(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await K(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await q(this,async function(t,e){return O(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,u,c;const h=null!==(n=e.displayName)&&void 0!==n?n:void 0,l=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(u=e.createdAt)&&void 0!==u?u:void 0,y=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:w,isAnonymous:T,providerData:b,stsTokenManager:E}=e;_(v&&E,t,"internal-error");const I=$.fromJSON(this.name,E);_("string"==typeof v,t,"internal-error"),W(h,t.name),W(l,t.name),_("boolean"==typeof w,t,"internal-error"),_("boolean"==typeof T,t,"internal-error"),W(d,t.name),W(f,t.name),W(p,t.name),W(g,t.name),W(m,t.name),W(y,t.name);const S=new G({uid:v,auth:t,email:l,emailVerified:w,displayName:h,isAnonymous:T,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:y});return b&&Array.isArray(b)&&(S.providerData=b.map((t=>Object.assign({},t)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(t,e,n=!1){const r=new $;r.updateFromServerResponse(e);const i=new G({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await K(i),i}constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=(0,a.__rest)(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new H(i.createdAt||void 0,i.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}constructor(){this.type="NONE",this.storage={}}}Q.type="NONE";const Y=Q;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t,e,n){return`firebase:${t}:${e}:${n}`}class J{setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?G._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new J(E(Y),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||E(Y);const s=X(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const r=G._fromJSON(t,e);n!==i&&(o=r),i=n;break}}catch(t){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(t){}}))),new J(i,t,n)):new J(i,t,n)}constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=X(this.userKey,r.apiKey,i),this.fullPersistenceKey=X("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(st(e))return"Blackberry";if(ot(e))return"Webos";if(et(e))return"Safari";if((e.includes("chrome/")||nt(e))&&!e.includes("edge/"))return"Chrome";if(it(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function tt(t=(0,r.getUA)()){return/firefox\//i.test(t)}function et(t=(0,r.getUA)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nt(t=(0,r.getUA)()){return/crios\//i.test(t)}function rt(t=(0,r.getUA)()){return/iemobile/i.test(t)}function it(t=(0,r.getUA)()){return/android/i.test(t)}function st(t=(0,r.getUA)()){return/blackberry/i.test(t)}function ot(t=(0,r.getUA)()){return/webos/i.test(t)}function at(t=(0,r.getUA)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ut(t=(0,r.getUA)()){return at(t)||it(t)||ot(t)||st(t)||/windows phone/i.test(t)||rt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ct(t,e=[]){let n;switch(t){case"Browser":n=Z((0,r.getUA)());break;case"Worker":n=`${Z((0,r.getUA)())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.SDK_VERSION}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{n(t(e))}catch(t){r(t)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}constructor(t){this.auth=t,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=E(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await J.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(t){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await K(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.getModularInstance)(t):null;return e&&_(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&_(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(E(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new(0,r.ErrorFactory)("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&E(t)||this._popupRedirectResolver;_(e,this,"argument-error"),this.redirectPersistenceManager=await J.create(this,[E(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return _(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ct(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ft(this),this.idTokenSubscription=new ft(this),this.beforeStateQueue=new ht(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}}function dt(t){return(0,r.getModularInstance)(t)}class ft{get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.createSubscribe)((t=>this.observer=t))}}function pt(t,e,n){const r=dt(t);_(r._canInitEmulator,r,"emulator-config-failed"),_(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=gt(e),{host:o,port:a}=function(t){const e=gt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:mt(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:mt(e)}}}(e),u=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function gt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class yt{toJSON(){return w("not implemented")}_getIdTokenResponse(t){return w("not implemented")}_linkToIdToken(t,e){return w("not implemented")}_getReauthenticationResolver(t){return w("not implemented")}constructor(t,e){this.providerId=t,this.signInMethod=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(t,e){return O(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t extends yt{static _fromEmailAndPassword(t,e){return new _t(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new _t(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return M(t,"POST","/v1/accounts:signInWithPassword",N(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",N(t,e))}(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return vt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",N(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wt(t,e){return M(t,"POST","/v1/accounts:signInWithIdp",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends yt{static _fromParams(t){const e=new Tt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=(0,a.__rest)(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Tt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){return wt(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,wt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,wt(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=(0,r.querystring)(e)}return t}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et extends yt{static _fromVerification(t,e){return new Et({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Et({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return M(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await M(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,e));if(n.temporaryProof)throw U(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return M(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),bt)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new Et({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(t){super("phone","phone"),this.params=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{static parseLink(t){const e=function(t){const e=(0,r.querystringDecode)((0,r.extractQuerystring)(t)).link,n=e?(0,r.querystringDecode)((0,r.extractQuerystring)(e)).deep_link_id:null,i=(0,r.querystringDecode)((0,r.extractQuerystring)(t)).deep_link_id;return(i?(0,r.querystringDecode)((0,r.extractQuerystring)(i)).link:null)||i||n||e||t}(t);try{return new It(e)}catch(t){return null}}constructor(t){var e,n,i,s,o,a;const u=(0,r.querystringDecode)((0,r.extractQuerystring)(t)),c=null!==(e=u.apiKey)&&void 0!==e?e:null,h=null!==(n=u.oobCode)&&void 0!==n?n:null,l=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=u.mode)&&void 0!==i?i:null);_(c&&h&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=h,this.continueUrl=null!==(s=u.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=u.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=u.tenantId)&&void 0!==a?a:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St{static credential(t,e){return _t._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=It.parseLink(e);return _(n,"argument-error"),_t._fromEmailAndCode(t,n.code,n.tenantId)}constructor(){this.providerId=St.PROVIDER_ID}}St.PROVIDER_ID="password",St.EMAIL_PASSWORD_SIGN_IN_METHOD="password",St.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt{setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends kt{addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At extends Ct{static credential(t){return Tt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return At.credentialFromTaggedObject(t)}static credentialFromError(t){return At.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return At.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("facebook.com")}}At.FACEBOOK_SIGN_IN_METHOD="facebook.com",At.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dt extends Ct{static credential(t,e){return Tt._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Dt.credentialFromTaggedObject(t)}static credentialFromError(t){return Dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Dt.credential(e,n)}catch(t){return null}}constructor(){super("google.com"),this.addScope("profile")}}Dt.GOOGLE_SIGN_IN_METHOD="google.com",Dt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt extends Ct{static credential(t){return Tt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return xt.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("github.com")}}xt.GITHUB_SIGN_IN_METHOD="github.com",xt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rt extends Ct{static credential(t,e){return Tt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Rt.credential(e,n)}catch(t){return null}}constructor(){super("twitter.com")}}Rt.TWITTER_SIGN_IN_METHOD="twitter.com",Rt.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt{static async _fromIdTokenResponse(t,e,n,r=!1){const i=await G._fromIdTokenResponse(t,n,r),s=Ot(n);return new Nt({user:i,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Ot(n);return new Nt({user:t,providerId:r,_tokenResponse:n,operationType:e})}constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}}function Ot(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lt extends r.FirebaseError{static _fromErrorAndOperation(t,e,n,r){return new Lt(t,e,n,r)}constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Lt.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}}function Mt(t,e,n,r){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Lt._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(t,e,n=!1){const r=await q(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nt._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ft(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await q(t,Mt(r,i,e,t),n);_(s.idToken,r,"internal-error");const o=j(s.idToken);_(o,r,"internal-error");const{sub:a}=o;return _(t.uid===a,r,"user-mismatch"),Nt._forOperation(t,i,s)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&p(r,"user-mismatch"),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(t,e,n=!1){const r="signIn",i=await Mt(t,r,e),s=await Nt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Vt(t,e,n,i){return(0,r.getModularInstance)(t).onAuthStateChanged(e,n,i)}function Bt(t){return(0,r.getModularInstance)(t).signOut()}new WeakMap;const jt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{_isAvailable(){try{return this.storage?(this.storage.setItem(jt,"1"),this.storage.removeItem(jt),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(t,e){this.storageRetriever=t,this.type=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends qt{forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},s=this.storage.getItem(n);(0,r.isIE)()&&10===document.documentMode&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=(0,r.getUA)();return et(t)||at(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=ut(),this._shouldAllowMigration=!0}}zt.type="LOCAL";const Ht=zt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends qt{_addListener(t,e){}_removeListener(t,e){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Kt.type="SESSION";const $t=Kt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt{static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Wt(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt.receivers=[];class Qt{removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const u=Gt("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===u)switch(e.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(t){this.target=t,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xt(){return void 0!==Yt().WorkerGlobalScope&&"function"==typeof Yt().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jt="firebaseLocalStorageDb",Zt="firebaseLocalStorage",te="fbase_key";class ee{toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}constructor(t){this.request=t}}function ne(t,e){return t.transaction([Zt],e?"readwrite":"readonly").objectStore(Zt)}function re(){const t=indexedDB.open(Jt,1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Zt,{keyPath:te})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Zt)?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(Jt);return new ee(t).toPromise()}(),e(await re()))}))}))}async function ie(t,e,n){const r=ne(t,!0).put({[te]:e,value:n});return new ee(r).toPromise()}function se(t,e){const n=ne(t,!0).delete(e);return new ee(n).toPromise()}class oe{async _openDb(){return this.db||(this.db=await re()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wt._getInstance(Xt()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Qt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await re();return await ie(t,jt,"1"),await se(t,jt),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>ie(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=ne(t,!1).get(e),r=await new ee(n).toPromise();return void 0===r?null:r.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>se(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=ne(t,!1).getAll();return new ee(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}oe.type="LOCAL";const ae=oe;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t){return new Promise(((e,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,s;r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=g("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function ce(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ce("rcb"),new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const he="recaptcha";async function le(t,e,n){var r;const i=await n.verify();try{let s;if(_("string"==typeof i,t,"argument-error"),_(n.type===he,t,"argument-error"),s="string"==typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){_("enroll"===e.type,t,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){return O(t,"POST","/v2/accounts/mfaEnrollment:start",N(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{_("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;_(n,t,"missing-multi-factor-info");const o=await function(t,e){return O(t,"POST","/v2/accounts/mfaSignIn:start",N(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return O(t,"POST","/v1/accounts:sendVerificationCode",N(t,e))}(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de{verifyPhoneNumber(t,e){return le(this.auth,t,(0,r.getModularInstance)(e))}static credential(t,e){return Et._fromVerification(t,e)}static credentialFromResult(t){const e=t;return de.credentialFromTaggedObject(e)}static credentialFromError(t){return de.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Et._fromTokenResponse(e,n):null}constructor(t){this.providerId=de.PROVIDER_ID,this.auth=dt(t)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fe(t,e){return e?E(e):(_(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */de.PROVIDER_ID="phone",de.PHONE_SIGN_IN_METHOD="phone";class pe extends yt{_getIdTokenResponse(t){return wt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return wt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return wt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}constructor(t){super("custom","custom"),this.params=t}}function ge(t){return Ut(t.auth,new pe(t),t.bypassAuthState)}function me(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),Ft(n,new pe(t),t.bypassAuthState)}async function ye(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),Pt(n,new pe(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ge;case"linkViaPopup":case"linkViaRedirect":return ye;case"reauthViaPopup":case"reauthViaRedirect":return me;default:p(this.auth,"internal-error")}}resolve(t){T(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){T(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e=new C(2e3,1e4);async function we(t,e,n){const r=dt(t);y(t,e,kt);const i=fe(r,n);return new Te(r,"signInViaPopup",e,i).executeNotNull()}class Te extends ve{async executeNotNull(){const t=await this.execute();return _(t,this.auth,"internal-error"),t}async onExecution(){T(1===this.filter.length,"Popup operations only handle one event");const t=Gt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Te.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,_e.get())};t()}constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Te.currentPopupAction&&Te.currentPopupAction.cancel(),Te.currentPopupAction=this}}Te.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const be=new Map;class Ee extends ve{async execute(){let t=be.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=ke(e),r=Se(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}be.set(this.auth._key(),t)}return this.bypassAuthState||be.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}}function Ie(t,e){be.set(t._key(),e)}function Se(t){return E(t._redirectPersistence)}function ke(t){return X("pendingRedirect",t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ce(t,e,n=!1){const r=dt(t),i=fe(r,e),s=new Ee(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}class Ae{registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xe(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!xe(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(g(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(De(t))}saveEventToCache(t){this.cachedEventUids.add(De(t)),this.lastProcessedEventTime=Date.now()}constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function De(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function xe({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Re=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ne=/^https?/;async function Oe(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return O(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Le(t))return}catch(t){}p(t,"unauthorized-domain")}function Le(t){const e=I(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Ne.test(n))return!1;if(Re.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=new C(3e4,6e4);function Pe(){const t=Yt().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let Fe=null;function Ue(t){return Fe=Fe||function(t){return new Promise(((e,n)=>{var r,i,s;function o(){Pe(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pe(),n(g(t,"network-request-failed"))},timeout:Me.get()})}if(null===(i=null===(r=Yt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Yt().gapi)||void 0===s?void 0:s.load)){const e=ce("iframefcb");return Yt()[e]=()=>{gapi.load?o():n(g(t,"network-request-failed"))},ue(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Fe=null,t}))}(t),Fe}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=new C(5e3,15e3),Be={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},je=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qe(t){const e=t.config;_(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?A(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,i={apiKey:e.apiKey,appName:t.name,v:s.SDK_VERSION},o=je.get(t.config.apiHost);o&&(i.eid=o);const a=t._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${(0,r.querystring)(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ze={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class He{close(){if(this.window)try{this.window.close()}catch(t){}}constructor(t){this.window=t,this.associatedEvent=null}}function Ke(t,e,n,i=500,s=600){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const c=Object.assign(Object.assign({},ze),{width:i.toString(),height:s.toString(),top:o,left:a}),h=(0,r.getUA)().toLowerCase();n&&(u=nt(h)?"_blank":n),tt(h)&&(e=e||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=(0,r.getUA)()){var e;return at(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(h)&&"_self"!==u)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",u),new He(null);const d=window.open(e||"",u,l);_(d,t,"popup-blocked");try{d.focus()}catch(t){}return new He(d)}const $e="emulator/auth/handler";function We(t,e,n,i,o,a){_(t.config.authDomain,t,"auth-domain-config-required"),_(t.config.apiKey,t,"invalid-api-key");const u={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:s.SDK_VERSION,eventId:o};if(e instanceof kt){e.setDefaultLanguage(t.languageCode),u.providerId=e.providerId||"",(0,r.isEmpty)(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))u[t]=e}if(e instanceof Ct){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(u.scopes=t.join(","))}t.tenantId&&(u.tid=t.tenantId);const c=u;for(const t of Object.keys(c))void 0===c[t]&&delete c[t];return`${function({config:t}){return t.emulator?A(t,$e):`https://${t.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${(0,r.querystring)(c).slice(1)}`}const Ge="webStorageSupport";const Qe=class{async _openPopup(t,e,n,r){var i;T(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Ke(t,We(t,e,n,I(),r),Gt())}async _openRedirect(t,e,n,r){var i;return await this._originValidation(t),i=We(t,e,n,I(),r),Yt().location.href=i,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(T(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await Ue(t),n=Yt().gapi;return _(n,t,"internal-error"),e.open({where:document.body,url:qe(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Be,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=g(t,"network-request-failed"),s=Yt().setTimeout((()=>{r(i)}),Ve.get());function o(){Yt().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}(t),n=new Ae(t);return e.register("authEvent",(e=>{_(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Ge,{type:Ge},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&e(!!i),p(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Oe(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return ut()||et()||at()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$t,this._completeRedirectFn=Ce,this._overrideRedirectResult=Ie}};var Ye="@firebase/auth",Xe="0.21.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je{getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(t){this.auth=t,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ze=(0,r.getExperimentalSetting)("authIdTokenMaxAge")||300;let tn=null;function en(t=(0,s.getApp)()){const e=(0,s._getProvider)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=(0,s._getProvider)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.deepEqual)(i,null!=e?e:{}))return t;p(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:Qe,persistence:[ae,Ht,$t]}),i=(0,r.getExperimentalSetting)("authTokenSyncURL");if(i){const t=(o=i,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>Ze)return;const r=null==e?void 0:e.token;tn!==r&&(tn=r,await fetch(o,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(t,e,n){(0,r.getModularInstance)(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,i){(0,r.getModularInstance)(t).onIdTokenChanged(e,n,i)}(n,(e=>t(e)))}var o;const a=(0,r.getDefaultEmulatorHost)("auth");return a&&pt(n,`http://${a}`),n}var nn;nn="Browser",(0,s._registerComponent)(new(0,u.Component)("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((t,n)=>{_(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),_(!(null==s?void 0:s.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:s,clientPlatform:nn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ct(nn)},o=new lt(t,n,r);return function(t,e){const n=(null==e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(E);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null==e?void 0:e.popupRedirectResolver)}(o,e),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),(0,s._registerComponent)(new(0,u.Component)("auth-internal",(t=>{const e=dt(t.getProvider("auth").getImmediate());return new Je(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(Ye,Xe,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(nn)),(0,s.registerVersion)(Ye,Xe,"esm2017")})),i.register("l73V3",(function(e,n){t(e.exports,"__rest",(function(){return r}));function r(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create})),i.register("fzYh0",(function(e,n){t(e.exports,"auth",(function(){return l})),t(e.exports,"Firebase",(function(){return p})),i("gKkQl");var r=i("ix4Jr");i("eyjy7");var s=i("2YDLC");i("ftYLF");var o=i("3PjDZ");const a=document.querySelector("#signin"),u=document.querySelector("#signout"),c=document.querySelector("#googleUser"),h=(0,r.initializeApp)({apiKey:"AIzaSyAulP83L0QY90_yCDYRohOctOjcPDqfmkw",authDomain:"command-project-js-demo.firebaseapp.com",projectId:"command-project-js-demo",storageBucket:"command-project-js-demo.appspot.com",messagingSenderId:"488245804301",appId:"1:488245804301:web:904f7218c509613983c444",measurementId:"G-1QM91ECZ3B"}),l=(0,s.n)(h),d=new(0,s.Q),f=(l.currentUser,(0,o.getFirestore)(h));class p{singInWithGoogle(){(0,s.c)(l,d).then((t=>{const e=t.user;a.classList.add("signOut"),u.classList.add("signIn"),c.innerHTML=`<img class="user-img" src="${e.photoURL}">`})).catch((t=>{console.log(t)}))}singOutUser(){(0,s.y)(l).then((()=>{a.classList.remove("signOut"),u.classList.remove("signIn"),c.style.display="none"})).catch((t=>{console.log(t)}))}async setDoc(t){const e=document.querySelector(".movie__id").id,n=l.currentUser.uid,r=(0,o.doc)(f,n,t);console.log(`add to ${t}: `,{userId:n,movieId:e}),await(0,o.setDoc)(r,{[e]:e},{merge:!0})}async getDoc(t){const e=l.currentUser.uid,n=(0,o.doc)(f,e,t),r=await(0,o.getDoc)(n);if(r.exists()){return Object.values(r.data())}console.log("No such document!")}async removeFilmById(t){const e=l.currentUser.uid,n=document.querySelector(".movie__id").id,r=(0,o.doc)(f,e,t);console.log(`remove from ${t}: `,{userId:e,movieId:n}),await(0,o.updateDoc)(r,{[n]:(0,o.deleteField)()})}constructor(){}}})),i.register("gKkQl",(function(e,n){t(e.exports,"initializeApp",(function(){return i("ix4Jr").initializeApp})),t(e.exports,"registerVersion",(function(){return i("ix4Jr").registerVersion}));i("ix4Jr");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i("ix4Jr").registerVersion)("firebase","9.15.0","app")})),i.register("ftYLF",(function(e,n){t(e.exports,"getFirestore",(function(){return i("3PjDZ").getFirestore})),t(e.exports,"doc",(function(){return i("3PjDZ").doc})),t(e.exports,"setDoc",(function(){return i("3PjDZ").setDoc})),t(e.exports,"getDoc",(function(){return i("3PjDZ").getDoc})),t(e.exports,"updateDoc",(function(){return i("3PjDZ").updateDoc})),t(e.exports,"deleteField",(function(){return i("3PjDZ").deleteField})),i("3PjDZ")})),i.register("3PjDZ",(function(e,n){t(e.exports,"doc",(function(){return Us})),t(e.exports,"getFirestore",(function(){return Ys})),t(e.exports,"getDoc",(function(){return No})),t(e.exports,"setDoc",(function(){return Lo})),t(e.exports,"updateDoc",(function(){return Mo})),t(e.exports,"deleteField",(function(){return Uo}));var r=i("ix4Jr"),s=i("4a6xH"),o=i("7vF8m"),a=i("ffjl9"),u=i("lW9Fu");i("4TNnu");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}h.UNAUTHENTICATED=new h(null),h.GOOGLE_CREDENTIALS=new h("google-credentials-uid"),h.FIRST_PARTY=new h("first-party-uid"),h.MOCK_USER=new h("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.15.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=new(0,o.Logger)("@firebase/firestore");function f(){return d.logLevel}function p(t,...e){if(d.logLevel<=o.LogLevel.DEBUG){const n=e.map(y);d.debug(`Firestore (${l}): ${t}`,...n)}}function g(t,...e){if(d.logLevel<=o.LogLevel.ERROR){const n=e.map(y);d.error(`Firestore (${l}): ${t}`,...n)}}function m(t,...e){if(d.logLevel<=o.LogLevel.WARN){const n=e.map(y);d.warn(`Firestore (${l}): ${t}`,...n)}}function y(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw g(e),new Error(e)}function _(t,e){t||v()}function w(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends a.FirebaseError{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(h.UNAUTHENTICATED)))}shutdown(){}}class k{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}constructor(t){this.token=t,this.changeListener=null}}class C{start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new E;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new E,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new E)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(_("string"==typeof e.accessToken),new I(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return _(null===t||"string"==typeof t),new h(t)}constructor(t){this.t=t,this.currentUser=h.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class A{I(){return this.g?this.g():(_(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r,this.type="FirstParty",this.user=h.FIRST_PARTY,this.p=new Map}}class D{getToken(){return Promise.resolve(new A(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(h.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r}}class x{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class R{start(t,e){const n=t=>{null!=t.error&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?r(t):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(_("string"==typeof t.token),this.A=t.token,new x(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=N(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function L(t,e){return t<e?-1:t>e?1:0}function M(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{static now(){return P.fromMillis(Date.now())}static fromDate(t){return P.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new P(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?L(this.nanoseconds,t.nanoseconds):L(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new b(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new b(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new b(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new b(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static fromTimestamp(t){return new F(t)}static min(){return new F(new P(0,0))}static max(){return new F(new P(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{get length(){return this.len}isEqual(t){return 0===U.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof U?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&v(),void 0===n?n=t.length-e:n>t.length-e&&v(),this.segments=t,this.offset=e,this.len=n}}class V extends U{construct(t,e,n){return new V(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new b(T.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new V(e)}static emptyPath(){return new V([])}}const B=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class j extends U{construct(t,e,n){return new j(t,e,n)}static isValidIdentifier(t){return B.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),j.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new j(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new b(T.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new b(T.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new b(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new b(T.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new j(e)}static emptyPath(){return new j([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static fromPath(t){return new q(V.fromString(t))}static fromName(t){return new q(V.fromString(t).popFirst(5))}static empty(){return new q(V.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===V.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return V.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new q(new V(t.slice()))}constructor(t){this.path=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}z.UNKNOWN_ID=-1;function H(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=F.fromTimestamp(1e9===r?new P(n+1,0):new P(n,r));return new $(i,q.empty(),e)}function K(t){return new $(t.readTime,t.key,-1)}class ${static min(){return new $(F.min(),q.empty(),-1)}static max(){return new $(F.max(),q.empty(),-1)}constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}}function W(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=q.comparator(t.documentKey,e.documentKey),0!==n?n:L(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Q{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==G)throw t;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new X(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof X?e:X.resolve(e)}catch(t){return X.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):X.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):X.reject(e)}static resolve(t){return new X(((e,n)=>{e(t)}))}static reject(t){return new X(((e,n)=>{n(t)}))}static waitFor(t){return new X(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=X.resolve(!1);for(const n of t)e=e.next((t=>t?X.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new X(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const u=a;e(t[u]).next((t=>{s[u]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new X(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z{ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}}Z.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class et{static empty(){return new et("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof et&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function rt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function it(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){return null==t}function ot(t){return 0===t&&1/t==-1/0}function at(t){return"number"==typeof t&&Number.isInteger(t)&&!ot(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ut=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{static fromBase64String(t){const e=atob(t);return new ct(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ct(e)}[ut](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return L(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}ct.EMPTY_BYTE_STRING=new ct("");const ht=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function lt(t){if(_(!!t),"string"==typeof t){let e=0;const n=ht.exec(t);if(_(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:dt(t.seconds),nanos:dt(t.nanos)}}function dt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ft(t){return"string"==typeof t?ct.fromBase64String(t):ct.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function gt(t){const e=t.mapValue.fields.__previous_value__;return pt(e)?gt(e):e}function mt(t){const e=lt(t.mapValue.fields.__local_write_time__.timestampValue);return new P(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pt(t)?4:Rt(t)?9007199254740991:10:v()}function _t(t,e){if(t===e)return!0;const n=vt(t);if(n!==vt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return mt(t).isEqual(mt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=lt(t.timestampValue),r=lt(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,ft(t.bytesValue).isEqual(ft(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return dt(t.geoPointValue.latitude)===dt(e.geoPointValue.latitude)&&dt(t.geoPointValue.longitude)===dt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return dt(t.integerValue)===dt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=dt(t.doubleValue),r=dt(e.doubleValue);return n===r?ot(n)===ot(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return M(t.arrayValue.values||[],e.arrayValue.values||[],_t);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(nt(n)!==nt(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!_t(n[t],r[t])))return!1;return!0}(t,e);default:return v()}var r}function wt(t,e){return void 0!==(t.values||[]).find((t=>_t(t,e)))}function Tt(t,e){if(t===e)return 0;const n=vt(t),r=vt(e);if(n!==r)return L(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return L(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=dt(t.integerValue||t.doubleValue),r=dt(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return bt(t.timestampValue,e.timestampValue);case 4:return bt(mt(t),mt(e));case 5:return L(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ft(t),r=ft(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=L(n[t],r[t]);if(0!==e)return e}return L(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=L(dt(t.latitude),dt(e.latitude));return 0!==n?n:L(dt(t.longitude),dt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=Tt(n[t],r[t]);if(e)return e}return L(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===yt.mapValue&&e===yt.mapValue)return 0;if(t===yt.mapValue)return 1;if(e===yt.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=L(r[t],s[t]);if(0!==e)return e;const o=Tt(n[r[t]],i[s[t]]);if(0!==o)return o}return L(r.length,s.length)}(t.mapValue,e.mapValue);default:throw v()}}function bt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return L(t,e);const n=lt(t),r=lt(e),i=L(n.seconds,r.seconds);return 0!==i?i:L(n.nanos,r.nanos)}function Et(t){return It(t)}function It(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=lt(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ft(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=It(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${It(t.fields[i])}`;return n+"}"}(t.mapValue):v()}function St(t){return!!t&&"integerValue"in t}function kt(t){return!!t&&"arrayValue"in t}function Ct(t){return!!t&&"nullValue"in t}function At(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Dt(t){return!!t&&"mapValue"in t}function xt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return rt(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=xt(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Rt(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt{constructor(t,e){this.position=t,this.inclusive=e}}function Ot(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?q.comparator(q.fromName(o.referenceValue),n.key):Tt(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Lt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_t(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{}class Pt extends Mt{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Ht(t,e,n):"array-contains"===e?new Gt(t,n):"in"===e?new Qt(t,n):"not-in"===e?new Yt(t,n):"array-contains-any"===e?new Xt(t,n):new Pt(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Kt(t,n):new $t(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Tt(e,this.value)):null!==e&&vt(this.value)===vt(e)&&this.matchesComparison(Tt(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class Ft extends Mt{static create(t,e){return new Ft(t,e)}matches(t){return Ut(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}}function Ut(t){return"and"===t.op}function Vt(t){return Bt(t)&&Ut(t)}function Bt(t){for(const e of t.filters)if(e instanceof Ft)return!1;return!0}function jt(t){if(t instanceof Pt)return t.field.canonicalString()+t.op.toString()+Et(t.value);{const e=t.filters.map((t=>jt(t))).join(",");return`${t.op}(${e})`}}function qt(t,e){return t instanceof Pt?(n=t,(r=e)instanceof Pt&&n.op===r.op&&n.field.isEqual(r.field)&&_t(n.value,r.value)):t instanceof Ft?function(t,e){return e instanceof Ft&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&qt(n,e.filters[r])),!0)}(t,e):void v();var n,r}function zt(t){return t instanceof Pt?`${(e=t).field.canonicalString()} ${e.op} ${Et(e.value)}`:t instanceof Ft?function(t){return t.op.toString()+" {"+t.getFilters().map(zt).join(" ,")+"}"}(t):"Filter";var e}class Ht extends Pt{matches(t){const e=q.comparator(t.key,this.key);return this.matchesComparison(e)}constructor(t,e,n){super(t,e,n),this.key=q.fromName(n.referenceValue)}}class Kt extends Pt{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=Wt("in",e)}}class $t extends Pt{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=Wt("not-in",e)}}function Wt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>q.fromName(t.referenceValue)))}class Gt extends Pt{matches(t){const e=t.data.field(this.field);return kt(e)&&wt(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class Qt extends Pt{matches(t){const e=t.data.field(this.field);return null!==e&&wt(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class Yt extends Pt{matches(t){if(wt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!wt(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class Xt extends Pt{matches(t){const e=t.data.field(this.field);return!(!kt(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>wt(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Zt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{insert(t,e){return new te(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ne.BLACK,null,null))}remove(t){return new te(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ne.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ee(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ee(this.root,t,this.comparator,!1)}getReverseIterator(){return new ee(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ee(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||ne.EMPTY}}class ee{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class ne{copy(t,e,n,r,i){return new ne(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ne.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return ne.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:ne.RED,this.left=null!=r?r:ne.EMPTY,this.right=null!=i?i:ne.EMPTY,this.size=this.left.size+1+this.right.size}}ne.EMPTY=null,ne.RED=!0,ne.BLACK=!1,ne.EMPTY=new class{get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class re{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ie(this.data.getIterator())}getIteratorFrom(t){return new ie(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof re))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new re(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new te(this.comparator)}}class ie{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class se{static empty(){return new se([])}unionWith(t){let e=new re(j.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new se(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return M(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(j.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{static empty(){return new oe({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Dt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=xt(e)}setAll(t){let e=j.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=xt(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Dt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return _t(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Dt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){rt(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new oe(xt(this.value))}constructor(t){this.value=t}}function ae(t){const e=[];return rt(t.fields,((t,n)=>{const r=new j([t]);if(Dt(n)){const t=ae(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new se(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ue{static newInvalidDocument(t){return new ue(t,0,F.min(),F.min(),F.min(),oe.empty(),0)}static newFoundDocument(t,e,n,r){return new ue(t,1,e,F.min(),n,r,0)}static newNoDocument(t,e){return new ue(t,2,e,F.min(),F.min(),oe.empty(),0)}static newUnknownDocument(t,e){return new ue(t,3,e,F.min(),F.min(),oe.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=oe.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ue&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function he(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ce(t,e,n,r,i,s,o)}function le(t){const e=w(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>jt(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),st(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Et(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Et(t))).join(",")),e.ft=t}return e.ft}function de(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Zt(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qt(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Lt(t.startAt,e.startAt)&&Lt(t.endAt,e.endAt)}function fe(t){return q.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function ge(t,e,n,r,i,s,o,a){return new pe(t,e,n,r,i,s,o,a)}function me(t){return new pe(t)}function ye(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function ve(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function _e(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function we(t){return null!==t.collectionGroup}function Te(t){const e=w(t);if(null===e.dt){e.dt=[];const t=_e(e),n=ve(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new Jt(t)),e.dt.push(new Jt(j.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Jt(j.keyField(),t))}}}return e.dt}function be(t){const e=w(t);if(!e._t)if("F"===e.limitType)e._t=he(e.path,e.collectionGroup,Te(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Te(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Jt(n.field,e))}const n=e.endAt?new Nt(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Nt(e.startAt.position,e.startAt.inclusive):null;e._t=he(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e._t}function Ee(t,e,n){return new pe(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ie(t,e){return de(be(t),be(e))&&t.limitType===e.limitType}function Se(t){return`${le(be(t))}|lt:${t.limitType}`}function ke(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>zt(t))).join(", ")}]`),st(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Et(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Et(t))).join(",")),`Target(${e})`}(be(t))}; limitType=${t.limitType})`}function Ce(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):q.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Te(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(r=e,!((n=t).startAt&&!function(t,e,n){const r=Ot(t,e,n);return t.inclusive?r<=0:r<0}(n.startAt,Te(n),r)||n.endAt&&!function(t,e,n){const r=Ot(t,e,n);return t.inclusive?r>=0:r>0}(n.endAt,Te(n),r)));var n,r}function Ae(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function De(t){return(e,n)=>{let r=!1;for(const i of Te(t)){const t=xe(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function xe(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Tt(r,i):v()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ot(e)?"-0":e}}function Ne(t){return{integerValue:""+t}}function Oe(t,e){return at(e)?Ne(e):Re(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(){this._=void 0}}function Me(t,e,n){return t instanceof Ue?Ve(t,e):t instanceof Be?je(t,e):n}function Pe(t,e){var n,r;return t instanceof qe?St(n=e)||(r=n)&&"doubleValue"in r?e:{integerValue:0}:null}class Fe extends Le{}class Ue extends Le{constructor(t){super(),this.elements=t}}function Ve(t,e){const n=He(e);for(const e of t.elements)n.some((t=>_t(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Be extends Le{constructor(t){super(),this.elements=t}}function je(t,e){let n=He(e);for(const e of t.elements)n=n.filter((t=>!_t(t,e)));return{arrayValue:{values:n}}}class qe extends Le{constructor(t,e){super(),this.yt=t,this.gt=e}}function ze(t){return dt(t.integerValue||t.doubleValue)}function He(t){return kt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t,e){this.version=t,this.transformResults=e}}class $e{static none(){return new $e}static exists(t){return new $e(void 0,t)}static updateTime(t){return new $e(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function We(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ge{}function Qe(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new on(t.key,$e.none()):new tn(t.key,t.data,$e.none());{const n=t.data,r=oe.empty();let i=new re(j.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new en(t.key,r,new se(i.toArray()),$e.none())}}function Ye(t,e,n){var r;t instanceof tn?function(t,e,n){const r=t.value.clone(),i=rn(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof en?function(t,e,n){if(!We(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=rn(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(nn(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):(r=n,e.convertToNoDocument(r.version).setHasCommittedMutations())}function Xe(t,e,n,r){return t instanceof tn?function(t,e,n,r){if(!We(t.precondition,e))return n;const i=t.value.clone(),s=sn(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof en?function(t,e,n,r){if(!We(t.precondition,e))return n;const i=sn(t.fieldTransforms,r,e),s=e.data;return s.setAll(nn(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):(i=e,s=n,We(t.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function Je(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Pe(r.transform,t||null);null!=i&&(null===n&&(n=oe.empty()),n.set(r.field,i))}return n||null}function Ze(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&M(n,r,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,r=e.transform,n instanceof Ue&&r instanceof Ue||n instanceof Be&&r instanceof Be?M(n.elements,r.elements,_t):n instanceof qe&&r instanceof qe?_t(n.gt,r.gt):n instanceof Fe&&r instanceof Fe);var n,r}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,r}class tn extends Ge{getFieldMask(){return null}constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class en extends Ge{getFieldMask(){return this.fieldMask}constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function nn(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function rn(t,e,n){const r=new Map;_(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Me(o,a,n[i]))}return r}function sn(t,e,n){const r=new Map;for(const a of t){const t=a.transform,u=n.data.field(a.field);r.set(a.field,(s=u,o=e,(i=t)instanceof Fe?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,s):i instanceof Ue?Ve(i,s):i instanceof Be?je(i,s):function(t,e){const n=Pe(t,e),r=ze(n)+ze(t.gt);return St(n)&&St(t.gt)?Ne(r):Re(t.yt,r)}(i,s)))}var i,s,o;return r}class on extends Ge{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class an extends Ge{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cn,hn;function ln(t){switch(t){default:return v();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function dn(t){if(void 0===t)return g("GRPC error has no .code"),T.UNKNOWN;switch(t){case cn.OK:return T.OK;case cn.CANCELLED:return T.CANCELLED;case cn.UNKNOWN:return T.UNKNOWN;case cn.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case cn.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case cn.INTERNAL:return T.INTERNAL;case cn.UNAVAILABLE:return T.UNAVAILABLE;case cn.UNAUTHENTICATED:return T.UNAUTHENTICATED;case cn.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case cn.NOT_FOUND:return T.NOT_FOUND;case cn.ALREADY_EXISTS:return T.ALREADY_EXISTS;case cn.PERMISSION_DENIED:return T.PERMISSION_DENIED;case cn.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case cn.ABORTED:return T.ABORTED;case cn.OUT_OF_RANGE:return T.OUT_OF_RANGE;case cn.UNIMPLEMENTED:return T.UNIMPLEMENTED;case cn.DATA_LOSS:return T.DATA_LOSS;default:return v()}}(hn=cn||(cn={}))[hn.OK=0]="OK",hn[hn.CANCELLED=1]="CANCELLED",hn[hn.UNKNOWN=2]="UNKNOWN",hn[hn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",hn[hn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",hn[hn.NOT_FOUND=5]="NOT_FOUND",hn[hn.ALREADY_EXISTS=6]="ALREADY_EXISTS",hn[hn.PERMISSION_DENIED=7]="PERMISSION_DENIED",hn[hn.UNAUTHENTICATED=16]="UNAUTHENTICATED",hn[hn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",hn[hn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",hn[hn.ABORTED=10]="ABORTED",hn[hn.OUT_OF_RANGE=11]="OUT_OF_RANGE",hn[hn.UNIMPLEMENTED=12]="UNIMPLEMENTED",hn[hn.INTERNAL=13]="INTERNAL",hn[hn.UNAVAILABLE=14]="UNAVAILABLE",hn[hn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fn{get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){rt(this.inner,((e,n)=>{for(const[e,r]of n)t(e,r)}))}isEmpty(){return it(this.inner)}size(){return this.innerSize}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new te(q.comparator);function gn(){return pn}const mn=new te(q.comparator);function yn(...t){let e=mn;for(const n of t)e=e.insert(n.key,n);return e}function vn(t){let e=mn;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function _n(){return Tn()}function wn(){return Tn()}function Tn(){return new fn((t=>t.toString()),((t,e)=>t.isEqual(e)))}const bn=new te(q.comparator),En=new re(q.comparator);function In(...t){let e=En;for(const n of t)e=e.add(n);return e}const Sn=new re(L);function kn(){return Sn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,An.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Cn(F.min(),r,kn(),gn(),In())}constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}}class An{static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new An(n,e,In(),In(),In())}constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(t,e,n,r){this.It=t,this.removedTargetIds=e,this.key=n,this.Tt=r}}class xn{constructor(t,e){this.targetId=t,this.Et=e}}class Rn{constructor(t,e,n=ct.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Nn{get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=In(),e=In(),n=In();return this.Rt.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:v()}})),new An(this.bt,this.Pt,t,e,n)}xt(){this.vt=!1,this.Rt=Mn()}Nt(t,e){this.vt=!0,this.Rt=this.Rt.insert(t,e)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}constructor(){this.At=0,this.Rt=Mn(),this.bt=ct.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}}class On{Kt(t){for(const e of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(e,t.Tt):this.Qt(e,t.key,t.Tt);for(const e of t.removedTargetIds)this.Qt(e,t.key,t.Tt)}jt(t){this.forEachTarget(t,(e=>{const n=this.Wt(e);switch(t.state){case 0:this.zt(e)&&n.Dt(t.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(t.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(e);break;case 3:this.zt(e)&&(n.Ft(),n.Dt(t.resumeToken));break;case 4:this.zt(e)&&(this.Ht(e),n.Dt(t.resumeToken));break;default:v()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Bt.forEach(((t,n)=>{this.zt(n)&&e(n)}))}Jt(t){const e=t.targetId,n=t.Et.count,r=this.Yt(e);if(r){const t=r.target;if(fe(t))if(0===n){const n=new q(t.path);this.Qt(e,n,ue.newNoDocument(n,F.min()))}else _(1===n);else this.Xt(e)!==n&&(this.Ht(e),this.Ut=this.Ut.add(e))}}Zt(t){const e=new Map;this.Bt.forEach(((n,r)=>{const i=this.Yt(r);if(i){if(n.current&&fe(i.target)){const e=new q(i.target.path);null!==this.Lt.get(e)||this.te(r,e)||this.Qt(r,e,ue.newNoDocument(e,t))}n.St&&(e.set(r,n.Ct()),n.xt())}}));let n=In();this.qt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Yt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.Lt.forEach(((e,n)=>n.setReadTime(t)));const r=new Cn(t,e,this.Ut,this.Lt,n);return this.Lt=gn(),this.qt=Ln(),this.Ut=new re(L),r}Gt(t,e){if(!this.zt(t))return;const n=this.te(t,e.key)?2:0;this.Wt(t).Nt(e.key,n),this.Lt=this.Lt.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ee(e.key).add(t))}Qt(t,e,n){if(!this.zt(t))return;const r=this.Wt(t);this.te(t,e)?r.Nt(e,1):r.kt(e),this.qt=this.qt.insert(e,this.ee(e).delete(t)),n&&(this.Lt=this.Lt.insert(e,n))}removeTarget(t){this.Bt.delete(t)}Xt(t){const e=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let e=this.Bt.get(t);return e||(e=new Nn,this.Bt.set(t,e)),e}ee(t){let e=this.qt.get(t);return e||(e=new re(L),this.qt=this.qt.insert(t,e)),e}zt(t){const e=null!==this.Yt(t);return e||p("WatchChangeAggregator","Detected inactive target",t),e}Yt(t){const e=this.Bt.get(t);return e&&e.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new Nn),this.$t.getRemoteKeysForTarget(t).forEach((e=>{this.Qt(t,e,null)}))}te(t,e){return this.$t.getRemoteKeysForTarget(t).has(e)}constructor(t){this.$t=t,this.Bt=new Map,this.Lt=gn(),this.qt=Ln(),this.Ut=new re(L)}}function Ln(){return new te(q.comparator)}function Mn(){return new te(q.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn={asc:"ASCENDING",desc:"DESCENDING"},Fn={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Un={and:"AND",or:"OR"};class Vn{constructor(t,e){this.databaseId=t,this.wt=e}}function Bn(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jn(t,e){return t.wt?e.toBase64():e.toUint8Array()}function qn(t,e){return Bn(t,e.toTimestamp())}function zn(t){return _(!!t),F.fromTimestamp(function(t){const e=lt(t);return new P(e.seconds,e.nanos)}(t))}function Hn(t,e){return(n=t,new V(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function Kn(t){const e=V.fromString(t);return _(hr(e)),e}function $n(t,e){return Hn(t.databaseId,e.path)}function Wn(t,e){const n=Kn(e);if(n.get(1)!==t.databaseId.projectId)throw new b(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new b(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Xn(n))}function Gn(t,e){return Hn(t.databaseId,e)}function Qn(t){const e=Kn(t);return 4===e.length?V.emptyPath():Xn(e)}function Yn(t){return new V(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Xn(t){return _(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Jn(t,e,n){return{name:$n(t,e),fields:n.value.mapValue.fields}}function Zn(t,e){let n;if(e instanceof tn)n={update:Jn(t,e.key,e.value)};else if(e instanceof on)n={delete:$n(t,e.key)};else if(e instanceof en)n={update:Jn(t,e.key,e.data),updateMask:cr(e.fieldMask)};else{if(!(e instanceof an))return v();n={verify:$n(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Fe)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ue)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Be)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof qe)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw v()}(0,t)))),e.precondition.isNone||(n.currentDocument=(r=t,void 0!==(i=e.precondition).updateTime?{updateTime:qn(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:v())),n;var r,i}function tr(t,e){return{documents:[Gn(t,e.path)]}}function er(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Gn(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Gn(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return ur(Ft.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>{return{field:or((e=t).field),direction:ir(e.dir)};var e}))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=(a=t,u=e.limit,a.wt||st(u)?u:{value:u});var a,u,c;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(c=e.startAt).inclusive,values:c.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function nr(t){let e=Qn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){_(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=rr(t);return e instanceof Ft&&Vt(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new Jt(ar((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,st(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new Nt(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new Nt(n,e)}(n.endAt)),ge(e,i,o,s,a,"F",u,c)}function rr(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ar(t.unaryFilter.field);return Pt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ar(t.unaryFilter.field);return Pt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ar(t.unaryFilter.field);return Pt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ar(t.unaryFilter.field);return Pt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(t):void 0!==t.fieldFilter?(n=t,Pt.create(ar(n.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==t.compositeFilter?(e=t,Ft.create(e.compositeFilter.filters.map((t=>rr(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return v()}}(e.compositeFilter.op))):v();var e,n}function ir(t){return Pn[t]}function sr(t){return Fn[t]}function or(t){return{fieldPath:t.canonicalString()}}function ar(t){return j.fromServerFormat(t.fieldPath)}function ur(t){return t instanceof Pt?function(t){if("=="===t.op){if(At(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NAN"}};if(Ct(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(At(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NOT_NAN"}};if(Ct(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:or(t.field),op:sr(t.op),value:t.value}}}(t):t instanceof Ft?function(t){const e=t.getFilters().map((t=>ur(t)));return 1===e.length?e[0]:{compositeFilter:{op:(n=t.op,Un[n]),filters:e}};var n}(t):v()}function cr(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function hr(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],dr=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],fr=dr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pr{applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&Ye(r,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Xe(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Xe(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=wn();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=Qe(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(F.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),In())}isEqual(t){return this.batchId===t.batchId&&M(this.mutations,t.mutations,((t,e)=>Ze(t,e)))&&M(this.baseMutations,t.baseMutations,((t,e)=>Ze(t,e)))}constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}}class gr{static from(t,e,n){_(t.mutations.length===n.length);let r=bn;const i=t.mutations;for(let t=0;t<i.length;t++)r=r.insert(i[t].key,n[t].version);return new gr(t,e,n,r)}constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{withSequenceNumber(t){return new yr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}constructor(t,e,n,r,i=F.min(),s=F.min(),o=ct.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t){this.ie=t}}function _r(t){const e=nr({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ee(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{ue(t,e){this.ce(t,e),e.ae()}ce(t,e){if("nullValue"in t)this.he(e,5);else if("booleanValue"in t)this.he(e,10),e.le(t.booleanValue?1:0);else if("integerValue"in t)this.he(e,15),e.le(dt(t.integerValue));else if("doubleValue"in t){const n=dt(t.doubleValue);isNaN(n)?this.he(e,13):(this.he(e,15),ot(n)?e.le(0):e.le(n))}else if("timestampValue"in t){const n=t.timestampValue;this.he(e,20),"string"==typeof n?e.fe(n):(e.fe(`${n.seconds||""}`),e.le(n.nanos||0))}else if("stringValue"in t)this.de(t.stringValue,e),this._e(e);else if("bytesValue"in t)this.he(e,30),e.we(ft(t.bytesValue)),this._e(e);else if("referenceValue"in t)this.me(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.he(e,45),e.le(n.latitude||0),e.le(n.longitude||0)}else"mapValue"in t?Rt(t)?this.he(e,Number.MAX_SAFE_INTEGER):(this.ge(t.mapValue,e),this._e(e)):"arrayValue"in t?(this.ye(t.arrayValue,e),this._e(e)):v()}de(t,e){this.he(e,25),this.pe(t,e)}pe(t,e){e.fe(t)}ge(t,e){const n=t.fields||{};this.he(e,55);for(const t of Object.keys(n))this.de(t,e),this.ce(n[t],e)}ye(t,e){const n=t.values||[];this.he(e,50);for(const t of n)this.ce(t,e)}me(t,e){this.he(e,37),q.fromName(t).path.forEach((t=>{this.he(e,60),this.pe(t,e)}))}he(t,e){t.le(e)}_e(t){t.le(2)}constructor(){}}wr.Ie=new wr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tr{addToCollectionParentIndex(t,e){return this.Je.add(e),X.resolve()}getCollectionParents(t,e){return X.resolve(this.Je.getEntries(e))}addFieldIndex(t,e){return X.resolve()}deleteFieldIndex(t,e){return X.resolve()}getDocumentsMatchingTarget(t,e){return X.resolve(null)}getIndexType(t,e){return X.resolve(0)}getFieldIndexes(t,e){return X.resolve([])}getNextCollectionGroupToUpdate(t){return X.resolve(null)}getMinOffset(t,e){return X.resolve($.min())}getMinOffsetFromCollectionGroup(t,e){return X.resolve($.min())}updateCollectionGroup(t,e,n){return X.resolve()}updateIndexEntries(t,e){return X.resolve()}constructor(){this.Je=new br}}class br{add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new re(V.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new re(V.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Er{static withCacheSize(t){return new Er(t,Er.DEFAULT_COLLECTION_PERCENTILE,Er.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Er.DEFAULT_COLLECTION_PERCENTILE=10,Er.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Er.DEFAULT=new Er(41943040,Er.DEFAULT_COLLECTION_PERCENTILE,Er.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Er.DISABLED=new Er(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ir{next(){return this.bn+=2,this.bn}static Pn(){return new Ir(0)}static vn(){return new Ir(-1)}constructor(t){this.bn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sr{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ue.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?X.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new fn((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kr{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Xe(n.mutation,t,se.empty(),P.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,In()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=In()){const r=_n();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=yn();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=_n();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,In())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=gn();const s=Tn(),o=Tn();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof en)?i=i.insert(e.key,e):void 0!==o&&(s.set(e.key,o.mutation.getFieldMask()),Xe(o.mutation,e,o.mutation.getFieldMask(),P.now()))})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new kr(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Tn();let r=new te(((t,e)=>t-e)),i=In();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||se.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||In()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,u=r.value,c=wn();u.forEach((t=>{if(!i.has(t)){const r=Qe(e.get(t),n.get(t));null!==r&&c.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,c))}return X.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return r=e,q.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):we(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n);var r}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):X.resolve(_n());let o=-1,a=i;return s.next((e=>X.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?X.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,In()))).next((t=>({batchId:o,changes:vn(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new q(e)).next((t=>{let e=yn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=yn();return this.indexManager.getCollectionParents(t,r).next((s=>X.forEach(s,(s=>{const o=(a=e,u=s.child(r),new pe(u,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,u;return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,ue.newInvalidDocument(n)))}));let n=yn();return r.forEach(((r,i)=>{const s=t.get(r);void 0!==s&&Xe(s.mutation,i,se.empty(),P.now()),Ce(e,i)&&(n=n.insert(r,i))})),n}))}constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{getBundleMetadata(t,e){return X.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:zn(n.createTime)}),X.resolve()}getNamedQuery(t,e){return X.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,{name:(n=e).name,query:_r(n.bundledQuery),readTime:zn(n.readTime)}),X.resolve();var n}constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{getOverlay(t,e){return X.resolve(this.overlays.get(e))}getOverlays(t,e){const n=_n();return X.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.oe(t,e,r)})),X.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),X.resolve()}getOverlaysForCollection(t,e,n){const r=_n(),i=e.length+1,s=new q(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return X.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new te(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=_n(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=_n(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=r)););return X.resolve(o)}oe(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new mr(e,n));let i=this.es.get(e);void 0===i&&(i=In(),this.es.set(e,i)),this.es.set(e,i.add(n.key))}constructor(){this.overlays=new te(q.comparator),this.es=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Rr(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new Rr(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new q(new V([])),n=new Rr(e,t),r=new Rr(e,t+1),i=[];return this.rs.forEachInRange([n,r],(t=>{this.cs(t),i.push(t.key)})),i}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new q(new V([])),n=new Rr(e,t),r=new Rr(e,t+1);let i=In();return this.rs.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Rr(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}constructor(){this.ns=new re(Rr.ss),this.rs=new re(Rr.os)}}class Rr{static ss(t,e){return q.comparator(t.key,e.key)||L(t._s,e._s)}static os(t,e){return L(t._s,e._s)||q.comparator(t.key,e.key)}constructor(t,e){this.key=t,this._s=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{checkEmpty(t){return X.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new pr(i,e,n,r);this.mutationQueue.push(s);for(const e of r)this.gs=this.gs.add(new Rr(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return X.resolve(s)}lookupMutationBatch(t,e){return X.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ps(n),i=r<0?0:r;return X.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Rr(e,0),r=new Rr(e,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],(t=>{const e=this.ys(t._s);i.push(e)})),X.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new re(L);return e.forEach((t=>{const e=new Rr(t,0),r=new Rr(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,r],(t=>{n=n.add(t._s)}))})),X.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;q.isDocumentKey(i)||(i=i.child(""));const s=new Rr(new q(i),0);let o=new re(L);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t._s)),!0)}),s),X.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){_(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return X.forEach(e.mutations,(r=>{const i=new Rr(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new Rr(e,0),r=this.gs.firstAfterOrEqual(n);return X.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,X.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new re(Rr.ss)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return X.resolve(n?n.document.mutableCopy():ue.newInvalidDocument(e))}getEntries(t,e){let n=gn();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ue.newInvalidDocument(t))})),X.resolve(n)}getAllFromCollection(t,e,n){let r=gn();const i=new q(e.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i}}=s.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||W(K(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return X.resolve(r)}getAllFromCollectionGroup(t,e,n,r){v()}As(t,e){return X.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Lr(this)}getSize(t){return X.resolve(this.size)}constructor(t){this.Es=t,this.docs=new te(q.comparator),this.size=0}}class Lr extends Sr{applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(n)})),X.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}constructor(t){super(),this.Yn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),X.resolve()}getLastRemoteSnapshotVersion(t){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return X.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),X.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Ir(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,X.resolve()}updateTargetData(t,e){return this.Dn(e),X.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,X.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Rs.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),X.waitFor(i).next((()=>r))}getTargetCount(t){return X.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return X.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),X.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),X.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),X.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return X.resolve(n)}containsKey(t,e){return X.resolve(this.Ps.containsKey(e))}constructor(t){this.persistence=t,this.Rs=new fn((t=>le(t)),de),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.bs=0,this.Ps=new xr,this.targetCount=0,this.vs=Ir.Pn()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Dr,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Nr(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){p("MemoryPersistence","Starting transaction:",t);const r=new Fr(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((t=>this.referenceDelegate.Os(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ms(t,e){return X.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}constructor(t,e){this.Vs={},this.overlays={},this.Ss=new Z(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Mr(this),this.indexManager=new Tr,this.remoteDocumentCache=new Or((t=>this.referenceDelegate.xs(t))),this.yt=new vr(e),this.Ns=new Ar(this.yt)}}class Fr extends Q{constructor(t){super(),this.currentSequenceNumber=t}}class Ur{static Bs(t){return new Ur(t)}get Ls(){if(this.$s)return this.$s;throw v()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),X.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),X.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),X.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.Ls,(n=>{const r=q.fromPath(n);return this.qs(t,r).next((t=>{t||e.removeEntry(r,F.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.qs(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}qs(t,e){return X.or([()=>X.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}constructor(t){this.persistence=t,this.Fs=new xr,this.$s=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vr{static Ci(t,e){let n=In(),r=In();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new Vr(t,e.fromCache,n,r)}constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.ki(t,e).next((i=>i||this.Oi(t,e,r,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if(ye(e))return X.resolve(null);let n=be(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Ee(e,null,"F"),n=be(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=In(...r);return this.Ni.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Fi(e,r);return this.$i(e,s,i,n.readTime)?this.ki(t,Ee(e,null,"F")):this.Bi(t,s,e,n)}))))})))))}Oi(t,e,n,r){return ye(e)||r.isEqual(F.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((i=>{const s=this.Fi(e,i);return this.$i(e,s,n,r)?this.Mi(t,e):(f()<=o.LogLevel.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ke(e)),this.Bi(t,s,e,H(r,-1)))}))}Fi(t,e){let n=new re(De(t));return e.forEach(((e,r)=>{Ce(t,r)&&(n=n.add(r))})),n}$i(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(t,e){return f()<=o.LogLevel.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",ke(e)),this.Ni.getDocumentsMatchingQuery(t,e,$.min())}Bi(t,e,n,r){return this.Ni.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}constructor(){this.xi=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Cr(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.qi)))}constructor(t,e,n,r){this.persistence=t,this.Li=e,this.yt=r,this.qi=new te(L),this.Ui=new fn((t=>le(t)),de),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}}function qr(t,e,n,r){return new jr(t,e,n,r)}async function zr(t,e){const n=w(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=In();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function Hr(t){const e=w(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function Kr(t,e,n){let r=In(),i=In();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=gn();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(F.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Wi:r,zi:i}}))}function $r(t,e){const n=w(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Wr(t,e){const n=w(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Cs.getTargetData(t,e).next((i=>i?(r=i,X.resolve(r)):n.Cs.allocateTargetId(t).next((i=>(r=new yr(e,i,0,t.currentSequenceNumber),n.Cs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.qi.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(t.targetId,t),n.Ui.set(e,t.targetId)),t}))}async function Gr(t,e,n){const r=w(t),i=r.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!J(t))throw t;p("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function Qr(t,e,n){const r=w(t);let i=F.min(),s=In();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=w(t),i=r.Ui.get(n);return void 0!==i?X.resolve(r.qi.get(i)):r.Cs.getTargetData(e,n)}(r,t,be(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Li.getDocumentsMatchingQuery(t,e,n?i:F.min(),n?s:In()))).next((t=>(Yr(r,Ae(e),t),{documents:t,Hi:s})))))}function Yr(t,e,n){let r=t.Ki.get(e)||F.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Ki.set(e,r)}class Xr{er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=kn()}}class Jr{addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,e,n){this.qr[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Xr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}constructor(){this.Lr=new Xr,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{Ur(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends class{get co(){return!1}ao(t,e,n,r,i){const s=this.ho(t,e);p("RestConnection","Sending: ",s,n);const o={};return this.lo(o,r,i),this.fo(t,s,o,n).then((t=>(p("RestConnection","Received: ",t),t)),(e=>{throw m("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e}))}_o(t,e,n,r,i,s){return this.ao(t,e,n,r,i)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=ei[t];return`${this.oo}/v1/${e}:${n}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{fo(t,e,n,r){return new Promise(((i,s)=>{const o=new(0,u.XhrIo);o.setWithCredentials(!0),o.listenOnce(u.EventType.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case u.ErrorCode.NO_ERROR:const e=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(e)),i(e);break;case u.ErrorCode.TIMEOUT:p("Connection",'RPC "'+t+'" timed out'),s(new b(T.DEADLINE_EXCEEDED,"Request time out"));break;case u.ErrorCode.HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(e)>=0?e:T.UNKNOWN}(e.status);s(new b(t,e.message))}else s(new b(T.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new b(T.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}wo(t,e,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=(0,u.createWebChannelTransport)(),s=(0,u.getStatEventTarget)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new(0,u.FetchXmlHttpFactory)({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=r.join("");p("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let h=!1,l=!1;const d=new ni({Hr:t=>{l?p("Connection","Not sending because WebChannel is closed:",t):(h||(p("Connection","Opening WebChannel transport."),c.open(),h=!0),p("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(c,u.WebChannel.EventType.OPEN,(()=>{l||p("Connection","WebChannel transport opened.")})),f(c,u.WebChannel.EventType.CLOSE,(()=>{l||(l=!0,p("Connection","WebChannel transport closed"),d.io())})),f(c,u.WebChannel.EventType.ERROR,(t=>{l||(l=!0,m("Connection","WebChannel transport errored:",t),d.io(new b(T.UNAVAILABLE,"The operation could not be completed")))})),f(c,u.WebChannel.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];_(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){p("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=cn[t];if(void 0!==e)return dn(e)}(t),n=i.message;void 0===e&&(e=T.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),l=!0,d.io(new b(e,n)),c.close()}else p("Connection","WebChannel received:",n),d.ro(n)}})),f(s,u.Event.STAT_EVENT,(t=>{t.stat===u.Stat.PROXY?p("Connection","Detected buffering proxy"):t.stat===u.Stat.NOPROXY&&p("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.so()}),0),d}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t){return new Vn(t,!0)}class oi{reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,e-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}constructor(t,e,n=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===T.RESOURCE_EXHAUSTED?(g(e.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):e&&e.code===T.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new b(T.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(t){return p("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,n,r,i,s,o,a){this.Hs=t,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new oi(t,e)}}class ui extends ai{jo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.xo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i="NO_CHANGE"===(r=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:v(),s=e.targetChange.targetIds||[],o=function(t,e){return t.wt?(_(void 0===e||"string"==typeof e),ct.fromBase64String(e||"")):(_(void 0===e||e instanceof Uint8Array),ct.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(t){const e=void 0===t.code?T.UNKNOWN:dn(t.code);return new b(e,t.message||"")}(a);n=new Rn(i,s,o,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wn(t,r.document.name),s=zn(r.document.updateTime),o=r.document.createTime?zn(r.document.createTime):F.min(),a=new oe({mapValue:{fields:r.document.fields}}),u=ue.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Dn(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Wn(t,r.document),s=r.readTime?zn(r.readTime):F.min(),o=ue.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Dn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Wn(t,r.document),s=r.removedTargetIds||[];n=new Dn([],s,i,null)}else{if(!("filter"in e))return v();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new un(r),s=t.targetId;n=new xn(s,i)}}var r;return n}(this.yt,t),n=function(t){if(!("targetChange"in t))return F.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?F.min():e.readTime?zn(e.readTime):F.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=Yn(this.yt),e.addTarget=function(t,e){let n;const r=e.target;return n=fe(r)?{documents:tr(t,r)}:{query:er(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=jn(t,e.resumeToken):e.snapshotVersion.compareTo(F.min())>0&&(n.readTime=Bn(t,e.snapshotVersion.toTimestamp())),n}(this.yt,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=Yn(this.yt),e.removeTarget=t,this.Bo(e)}constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.yt=i}}class ci extends ai{get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(_(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const r=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(_(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?zn(t.updateTime):zn(e);return n.isEqual(F.min())&&(n=zn(e)),new Ke(n,t.transformResults||[])}(t,n)))):[]),i=zn(t.commitTime);return this.listener.Zo(i,r)}var e,n;return _(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=Yn(this.yt),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Zn(this.yt,t)))};this.Bo(e)}constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.yt=i,this.Jo=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends class{}{su(){if(this.nu)throw new b(T.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.ao(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new b(T.UNKNOWN,t.toString())}))}_o(t,e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection._o(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new b(T.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.yt=r,this.nu=!1}}class li{uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(g(e),this.ou=!1):p("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur((t=>{n.enqueueAndForget((async()=>{Ti(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=w(t);e._u.add(4),await pi(e),e.gu.set("Unknown"),e._u.delete(4),await fi(e)}(this))}))})),this.gu=new li(n,r)}}async function fi(t){if(Ti(t))for(const e of t.wu)await e(!0)}async function pi(t){for(const e of t.wu)await e(!1)}function gi(t,e){const n=w(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),wi(n)?_i(n):Vi(n).ko()&&yi(n,e))}function mi(t,e){const n=w(t),r=Vi(n);n.du.delete(e),r.ko()&&vi(n,e),0===n.du.size&&(r.ko()?r.Fo():Ti(n)&&n.gu.set("Unknown"))}function yi(t,e){t.yu.Ot(e.targetId),Vi(t).zo(e)}function vi(t,e){t.yu.Ot(e),Vi(t).Ho(e)}function _i(t){t.yu=new On({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Vi(t).start(),t.gu.uu()}function wi(t){return Ti(t)&&!Vi(t).No()&&t.du.size>0}function Ti(t){return 0===w(t)._u.size}function bi(t){t.yu=void 0}async function Ei(t){t.du.forEach(((e,n)=>{yi(t,e)}))}async function Ii(t,e){bi(t),wi(t)?(t.gu.hu(e),_i(t)):t.gu.set("Unknown")}async function Si(t,e,n){if(t.gu.set("Online"),e instanceof Rn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.du.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.du.delete(r),t.yu.removeTarget(r))}(t,e)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ki(t,n)}else if(e instanceof Dn?t.yu.Kt(e):e instanceof xn?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(F.min()))try{const e=await Hr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.Zt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.du.get(r);i&&t.du.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(ct.EMPTY_BYTE_STRING,n.snapshotVersion)),vi(t,e);const r=new yr(n.target,e,1,n.sequenceNumber);yi(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){p("RemoteStore","Failed to raise snapshot:",e),await ki(t,e)}}async function ki(t,e,n){if(!J(e))throw e;t._u.add(1),await pi(t),t.gu.set("Offline"),n||(n=()=>Hr(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await fi(t)}))}function Ci(t,e){return e().catch((n=>ki(t,n,e)))}async function Ai(t){const e=w(t),n=Bi(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Di(e);)try{const t=await $r(e.localStore,r);if(null===t){0===e.fu.length&&n.Fo();break}r=t.batchId,xi(e,t)}catch(t){await ki(e,t)}Ri(e)&&Ni(e)}function Di(t){return Ti(t)&&t.fu.length<10}function xi(t,e){t.fu.push(e);const n=Bi(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Ri(t){return Ti(t)&&!Bi(t).No()&&t.fu.length>0}function Ni(t){Bi(t).start()}async function Oi(t){Bi(t).eu()}async function Li(t){const e=Bi(t);for(const n of t.fu)e.Xo(n.mutations)}async function Mi(t,e,n){const r=t.fu.shift(),i=gr.from(r,e,n);await Ci(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Ai(t)}async function Pi(t,e){e&&Bi(t).Yo&&await async function(t,e){if(ln(n=e.code)&&n!==T.ABORTED){const n=t.fu.shift();Bi(t).Mo(),await Ci(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Ai(t)}var n}(t,e),Ri(t)&&Ni(t)}async function Fi(t,e){const n=w(t);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=Ti(n);n._u.add(3),await pi(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await fi(n)}async function Ui(t,e){const n=w(t);e?(n._u.delete(2),await fi(n)):e||(n._u.add(2),await pi(n),n.gu.set("Unknown"))}function Vi(t){return t.pu||(t.pu=function(t,e,n){const r=w(t);return r.su(),new ui(e,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)}(t.datastore,t.asyncQueue,{Yr:Ei.bind(null,t),Zr:Ii.bind(null,t),Wo:Si.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Mo(),wi(t)?_i(t):t.gu.set("Unknown")):(await t.pu.stop(),bi(t))}))),t.pu}function Bi(t){return t.Iu||(t.Iu=function(t,e,n){const r=w(t);return r.su(),new ci(e,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)}(t.datastore,t.asyncQueue,{Yr:Oi.bind(null,t),Zr:Pi.bind(null,t),tu:Li.bind(null,t),Zo:Mi.bind(null,t)}),t.wu.push((async e=>{e?(t.Iu.Mo(),await Ai(t)):(await t.Iu.stop(),t.fu.length>0&&(p("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))}))),t.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ji{static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new ji(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new b(T.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new E,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function qi(t,e){if(g("AsyncQueue",`${e}: ${t}`),J(t))return new b(T.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{static emptySet(t){return new zi(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof zi))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new zi;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}constructor(t){this.comparator=t?(e,n)=>t(e,n)||q.comparator(e.key,n.key):(t,e)=>q.comparator(t.key,e.key),this.keyedMap=yn(),this.sortedSet=new te(this.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):v():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}constructor(){this.Tu=new te(q.comparator)}}class Ki{static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Ki(t,e,zi.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ie(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}constructor(t,e,n,r,i,s,o,a,u){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(){this.Au=void 0,this.listeners=[]}}class Wi{constructor(){this.queries=new fn((t=>Se(t)),Ie),this.onlineState="Unknown",this.Ru=new Set}}async function Gi(t,e){const n=w(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new $i),i)try{s.Au=await n.onListen(r)}catch(t){const n=qi(t,`Initialization of query '${ke(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Ji(n)}async function Qi(t,e){const n=w(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Yi(t,e){const n=w(t);let r=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.Pu(t)&&(r=!0);i.Au=t}}r&&Ji(n)}function Xi(t,e,n){const r=w(t),i=r.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);r.queries.delete(e)}function Ji(t){t.Ru.forEach((t=>{t.next()}))}class Zi{Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Ki(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=Ki.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ts{constructor(t){this.key=t}}class es{constructor(t){this.key=t}}class ns{get ju(){return this.qu}Wu(t,e){const n=e?e.zu:new Hi,r=e?e.Qu:this.Qu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const c=r.get(t),h=Ce(this.query,e)?e:null,l=!!c&&this.mutatedKeys.has(c.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;c&&h?c.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Hu(c,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Gu(h,a)>0||u&&this.Gu(h,u)<0)&&(o=!0)):!c&&h?(n.track({type:0,doc:h}),f=!0):c&&!h&&(n.track({type:1,doc:c}),f=!0,(a||u)&&(o=!0)),f&&(h?(s=s.add(h),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Qu:s,zu:n,$i:o,mutatedKeys:i}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Eu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(t)-n(e)}(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const s=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==i.length||a?{snapshot:new Ki(this.query,t.Qu,r,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Hi,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.qu=this.qu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.qu=this.qu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=In(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new es(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new ts(n))})),e}tc(t){this.qu=t.Hi,this.Ku=In();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return Ki.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}constructor(t,e){this.query=t,this.qu=e,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=In(),this.mutatedKeys=In(),this.Gu=De(t),this.Qu=new zi(this.Gu)}}class rs{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class is{constructor(t){this.key=t,this.nc=!1}}class ss{get isPrimaryClient(){return!0===this.dc}constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new fn((t=>Se(t)),Ie),this.rc=new Map,this.oc=new Set,this.uc=new te(q.comparator),this.cc=new Map,this.ac=new xr,this.hc={},this.lc=new Map,this.fc=Ir.vn(),this.onlineState="Unknown",this.dc=void 0}}async function os(t,e){const n=Is(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const t=await Wr(n.localStore,be(e));n.isPrimaryClient&&gi(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await as(n,e,r,"current"===s,t.resumeToken)}return i}async function as(t,e,n,r,i){t._c=(e,n,r)=>async function(t,e,n,r){let i=e.view.Wu(n);i.$i&&(i=await Qr(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return vs(t,e.targetId,o.Xu),o.snapshot}(t,e,n,r);const s=await Qr(t.localStore,e,!0),o=new ns(e,s.Hi),a=o.Wu(s.documents),u=An.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),c=o.applyChanges(a,t.isPrimaryClient,u);vs(t,n,c.Xu);const h=new rs(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function us(t,e){const n=w(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter((t=>!Ie(t,e)))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Gr(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),mi(n.remoteStore,r.targetId),ms(n,r.targetId)})).catch(Y)):(ms(n,r.targetId),await Gr(n.localStore,r.targetId,!0))}async function cs(t,e){const n=w(t);try{const t=await function(t,e){const n=w(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const o=[];e.targetChanges.forEach(((s,a)=>{const u=i.get(a);if(!u)return;o.push(n.Cs.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,s.addedDocuments,a))));let c=u.withSequenceNumber(t.currentSequenceNumber);var h,l,d;e.targetMismatches.has(a)?c=c.withResumeToken(ct.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),i=i.insert(a,c),l=c,d=s,(0===(h=u).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-h.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Cs.updateTargetData(t,c))}));let a=gn(),u=In();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(Kr(t,s,e.documentUpdates).next((t=>{a=t.Wi,u=t.zi}))),!r.isEqual(F.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return X.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,u))).next((()=>a))})).then((t=>(n.qi=i,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.cc.get(e);r&&(_(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.nc=!0:t.modifiedDocuments.size>0?_(r.nc):t.removedDocuments.size>0&&(_(r.nc),r.nc=!1))})),await Ts(n,t,e)}catch(t){await Y(t)}}function hs(t,e,n){const r=w(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ic.forEach(((n,r)=>{const i=r.view.bu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=w(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.bu(e)&&(r=!0)})),r&&Ji(n)}(r.eventManager,e),t.length&&r.sc.Wo(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ls(t,e,n){const r=w(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let t=new te(q.comparator);t=t.insert(s,ue.newNoDocument(s,F.min()));const n=In().add(s),i=new Cn(F.min(),new Map,new re(L),t,n);await cs(r,i),r.uc=r.uc.remove(s),r.cc.delete(e),ws(r)}else await Gr(r.localStore,e,!1).then((()=>ms(r,e,n))).catch(Y)}async function ds(t,e){const n=w(t),r=e.batch.batchId;try{const t=await function(t,e){const n=w(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=X.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);_(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=In();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(n.localStore,e);gs(n,r,null),ps(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ts(n,t)}catch(t){await Y(t)}}async function fs(t,e,n){const r=w(t);try{const t=await function(t,e){const n=w(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(_(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);gs(r,e,n),ps(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ts(r,t)}catch(t){await Y(t)}}function ps(t,e){(t.lc.get(e)||[]).forEach((t=>{t.resolve()})),t.lc.delete(e)}function gs(t,e,n){const r=w(t);let i=r.hc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function ms(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach((e=>{t.ac.containsKey(e)||ys(t,e)}))}function ys(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(mi(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),ws(t))}function vs(t,e,n){for(const r of n)r instanceof ts?(t.ac.addReference(r.key,e),_s(t,r)):r instanceof es?(p("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||ys(t,r.key)):v()}function _s(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(p("SyncEngine","New document in limbo: "+n),t.oc.add(r),ws(t))}function ws(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new q(V.fromString(e)),r=t.fc.next();t.cc.set(r,new is(n)),t.uc=t.uc.insert(n,r),gi(t.remoteStore,new yr(be(me(n.path)),r,2,Z.at))}}async function Ts(t,e,n){const r=w(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach(((t,a)=>{o.push(r._c(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=Vr.Ci(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.sc.Wo(i),await async function(t,e){const n=w(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>X.forEach(e,(e=>X.forEach(e.Si,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>X.forEach(e.Di,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!J(t))throw t;p("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.qi.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.qi=n.qi.insert(e,i)}}}(r.localStore,s))}async function bs(t,e){const n=w(t);if(!n.currentUser.isEqual(e)){p("SyncEngine","User change. New user:",e.toKey());const t=await zr(n.localStore,e);n.currentUser=e,(r=n).lc.forEach((t=>{t.forEach((t=>{t.reject(new b(T.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.lc.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Ts(n,t.ji)}var r}function Es(t,e){const n=w(t),r=n.cc.get(e);if(r&&r.nc)return In().add(r.key);{let t=In();const r=n.rc.get(e);if(!r)return t;for(const e of r){const r=n.ic.get(e);t=t.unionWith(r.view.ju)}return t}}function Is(t){const e=w(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cs.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Es.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ls.bind(null,e),e.sc.Wo=Yi.bind(null,e.eventManager),e.sc.wc=Xi.bind(null,e.eventManager),e}function Ss(t){const e=w(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ds.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fs.bind(null,e),e}class ks{async initialize(t){this.yt=si(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return qr(this.persistence,new Br,t.initialUser,this.yt)}yc(t){return new Pr(Ur.Bs,this.yt)}gc(t){return new Jr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class Cs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>hs(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=bs.bind(null,this.syncEngine),await Ui(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Wi}createDatastore(t){const e=si(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new ri(r));var r,i,s;return i=t.authCredentials,s=t.appCheckCredentials,new hi(i,s,n,e)}createRemoteStore(t){var e,n,r,i,s;return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>hs(this.syncEngine,t,0),s=ti.C()?new ti:new Zr,new di(e,n,r,i,s)}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new ss(t,e,n,r,i,s);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=w(t);p("RemoteStore","RemoteStore shutting down."),e._u.add(5),await pi(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t,e,n){if(!n)throw new b(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ds(t){if(!q.isDocumentKey(t))throw new b(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xs(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":v()}function Rs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new b(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xs(t);throw new b(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ns=new Map;class Os{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new b(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new b(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new b(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{get app(){if(!this._app)throw new b(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new b(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Os(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new S;switch(t.type){case"gapi":const e=t.client;return new D(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new b(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ns.get(t);e&&(p("ComponentProvider","Removing Datastore"),Ns.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Os({}),this._settingsFrozen=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ms{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fs(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ms(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class Ps{withConverter(t){return new Ps(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class Fs extends Ps{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ms(this.firestore,null,new q(t))}withConverter(t){return new Fs(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,me(n)),this._path=n,this.type="collection"}}function Us(t,e,...n){if(t=(0,a.getModularInstance)(t),1===arguments.length&&(e=O.R()),As("doc","path",e),t instanceof Ls){const r=V.fromString(e,...n);return Ds(r),new Ms(t,null,new q(r))}{if(!(t instanceof Ms||t instanceof Fs))throw new b(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(V.fromString(e,...n));return Ds(r),new Ms(t.firestore,t instanceof Fs?t.converter:null,new q(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vs{next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):g("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}constructor(t){this.observer=t,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bs{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new E;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=qi(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=h.UNAUTHENTICATED,this.clientId=O.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{p("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(p("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function js(t,e){t.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await zr(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function qs(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zs(t);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>Fi(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Fi(e.remoteStore,n))),t.onlineComponents=e}async function zs(t){return t.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await js(t,new ks)),t.offlineComponents}async function Hs(t){return t.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await qs(t,new Cs)),t.onlineComponents}function Ks(t){return Hs(t).then((t=>t.syncEngine))}async function $s(t){const e=await Hs(t),n=e.eventManager;return n.onListen=os.bind(null,e.syncEngine),n.onUnlisten=us.bind(null,e.syncEngine),n}function Ws(t,e,n={}){const r=new E;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new Vs({next:s=>{e.enqueueAndForget((()=>Qi(t,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new b(T.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new b(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new Zi(me(n.path),s,{includeMetadataChanges:!0,Nu:!0});return Gi(t,o)}(await $s(t),t.asyncQueue,e,n,r))),r.promise}class Gs{get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const e=ii();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise((()=>{}));const e=new E;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!J(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;throw g("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const r=ji.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.Uc.push(r),r}zc(){this.Kc&&v()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new oi(this,"async_queue_retry"),this.Wc=()=>{const t=ii();t&&p("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=ii();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}}class Qs extends Ls{_terminate(){return this._firestoreClient||Js(this),this._firestoreClient.terminate()}constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Gs,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}}function Ys(t,e){const n="object"==typeof t?t:(0,r.getApp)(),i="string"==typeof t?t:e||"(default)",s=(0,r._getProvider)(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const t=(0,a.getDefaultEmulatorHostnameAndPort)("firestore");t&&function(t,e,n,r={}){var i;const s=(t=Rs(t,Ls))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&m("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=h.MOCK_USER;else{e=(0,a.createMockUserToken)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new b(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new h(s)}t._authCredentials=new k(new I(e,n))}}(s,...t)}return s}function Xs(t){return t._firestoreClient||Js(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Js(t){var e;const n=t._freezeSettings(),r=(i=t._databaseId,s=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new tt(i,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var i,s,o,a;t._firestoreClient=new Bs(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zs{static fromBase64String(t){try{return new Zs(ct.fromBase64String(t))}catch(t){throw new b(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Zs(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new b(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new j(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eo{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return L(this._lat,t._lat)||L(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new b(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new b(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=/^__.*__$/;class io{toMutation(t,e){return null!==this.fieldMask?new en(t,this.data,this.fieldMask,e,this.fieldTransforms):new tn(t,this.data,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}class so{toMutation(t,e){return new en(t,this.data,this.fieldMask,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function oo(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class ao{get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new ao(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.ua(t),r}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.na(),r}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return bo(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(oo(this.sa)&&ro.test(t))throw this.ha('Document fields cannot begin and end with "__"')}constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.yt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=s||[]}}class uo{da(t,e,n,r=!1){return new ao({sa:t,methodName:e,fa:n,path:j.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.yt=n||si(t)}}function co(t){const e=t._freezeSettings(),n=si(t._databaseId);return new uo(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ho(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);vo("Data must be an object, but it was:",o,r);const a=mo(r,o);let u,c;if(s.merge)u=new se(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=_o(e,r,n);if(!o.contains(i))throw new b(T.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Eo(t,i)||t.push(i)}u=new se(t),c=o.fieldTransforms.filter((t=>u.covers(t.field)))}else u=null,c=o.fieldTransforms;return new io(new oe(a),u,c)}class lo extends eo{_toFieldTransform(t){if(2!==t.sa)throw 1===t.sa?t.ha(`${this._methodName}() can only appear at the top level of your update data`):t.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof lo}}function fo(t,e,n,r){const i=t.da(1,e,n);vo("Data must be an object, but it was:",i,r);const s=[],o=oe.empty();rt(r,((t,r)=>{const u=To(e,t,n);r=(0,a.getModularInstance)(r);const c=i.ca(u);if(r instanceof lo)s.push(u);else{const t=go(r,c);null!=t&&(s.push(u),o.set(u,t))}}));const u=new se(s);return new so(o,u,i.fieldTransforms)}function po(t,e,n,r,i,s){const o=t.da(1,e,n),u=[_o(e,r,n)],c=[i];if(s.length%2!=0)throw new b(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<s.length;t+=2)u.push(_o(e,s[t])),c.push(s[t+1]);const h=[],l=oe.empty();for(let t=u.length-1;t>=0;--t)if(!Eo(h,u[t])){const e=u[t];let n=c[t];n=(0,a.getModularInstance)(n);const r=o.ca(e);if(n instanceof lo)h.push(e);else{const t=go(n,r);null!=t&&(h.push(e),l.set(e,t))}}const d=new se(h);return new so(l,d,o.fieldTransforms)}function go(t,e){if(yo(t=(0,a.getModularInstance)(t)))return vo("Unsupported field value:",e,t),mo(t,e);if(t instanceof eo)return function(t,e){if(!oo(e.sa))throw e.ha(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ha(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=go(i,e.aa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.getModularInstance)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Oe(e.yt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=P.fromDate(t);return{timestampValue:Bn(e.yt,n)}}if(t instanceof P){const n=new P(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Bn(e.yt,n)}}if(t instanceof no)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Zs)return{bytesValue:jn(e.yt,t._byteString)};if(t instanceof Ms){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Hn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha(`Unsupported field value: ${xs(t)}`)}(t,e)}function mo(t,e){const n={};return it(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rt(t,((t,r)=>{const i=go(r,e.ra(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function yo(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof P||t instanceof no||t instanceof Zs||t instanceof Ms||t instanceof eo)}function vo(t,e,n){if(!yo(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=xs(n);throw"an object"===r?e.ha(t+" a custom object"):e.ha(t+" "+r)}var r}function _o(t,e,n){if((e=(0,a.getModularInstance)(e))instanceof to)return e._internalPath;if("string"==typeof e)return To(t,e);throw bo("Field path arguments must be of type string or ",t,!1,void 0,n)}const wo=new RegExp("[~\\*/\\[\\]]");function To(t,e,n){if(e.search(wo)>=0)throw bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new to(...e.split("."))._internalPath}catch(r){throw bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bo(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new b(T.INVALID_ARGUMENT,a+t+u)}function Eo(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{get id(){return this._key.path.lastSegment()}get ref(){return new Ms(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new So(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ko("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}}class So extends Io{data(){return super.data()}}function ko(t,e){return"string"==typeof e?To(t,e):e instanceof to?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{convertValue(t,e="none"){switch(vt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return dt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ft(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){const n={};return rt(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new no(dt(t.latitude),dt(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=gt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(mt(t));default:return null}}convertTimestamp(t){const e=lt(t);return new P(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=V.fromString(t);_(hr(n));const r=new et(n.get(1),n.get(3)),i=new q(n.popFirst(5));return r.isEqual(e)||g(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Do{isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}}class xo extends Io{exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ro(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ko("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}}class Ro extends xo{data(t={}){return super.data(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function No(t){t=Rs(t,Ms);const e=Rs(t.firestore,Qs);return Ws(Xs(e),t._key).then((n=>Fo(e,t,n)))}class Oo extends Co{convertBytes(t){return new Zs(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ms(this.firestore,null,e)}constructor(t){super(),this.firestore=t}}function Lo(t,e,n){t=Rs(t,Ms);const r=Rs(t.firestore,Qs),i=Ao(t.converter,e,n);return Po(r,[ho(co(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,$e.none())])}function Mo(t,e,n,...r){t=Rs(t,Ms);const i=Rs(t.firestore,Qs),s=co(i);let o;return o="string"==typeof(e=(0,a.getModularInstance)(e))||e instanceof to?po(s,"updateDoc",t._key,e,n,r):fo(s,"updateDoc",t._key,e),Po(i,[o.toMutation(t._key,$e.exists(!0))])}function Po(t,e){return function(t,e){const n=new E;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const r=Ss(t);try{const t=await function(t,e){const n=w(t),r=P.now(),i=e.reduce(((t,e)=>t.add(e.key)),In());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=gn(),u=In();return n.Gi.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(u=u.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=Je(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new en(t.key,e,ae(e.value.mapValue),$e.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,u);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:vn(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.hc[t.currentUser.toKey()];r||(r=new te(L)),r=r.insert(e,n),t.hc[t.currentUser.toKey()]=r}(r,t.batchId,n),await Ts(r,t.changes),await Ai(r.remoteStore)}catch(t){const e=qi(t,"Failed to persist write");n.reject(e)}}(await Ks(t),e,n))),n.promise}(Xs(t),e)}function Fo(t,e,n){const r=n.docs.get(e._key),i=new Oo(t);return new xo(t,i,e._key,r,new Do(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Uo(){return new lo("deleteField")}!function(t,e=!0){var n;n=r.SDK_VERSION,l=n,(0,r._registerComponent)(new(0,s.Component)("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new Qs(new C(t.getProvider("auth-internal")),new R(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new b(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new et(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,r.registerVersion)(c,"3.8.0",t),(0,r.registerVersion)(c,"3.8.0","esm2017")}()})),i.register("lW9Fu",(function(n,r){t(n.exports,"createWebChannelTransport",(function(){return Jn})),t(n.exports,"getStatEventTarget",(function(){return Zn})),t(n.exports,"ErrorCode",(function(){return tr})),t(n.exports,"EventType",(function(){return er})),t(n.exports,"Event",(function(){return nr})),t(n.exports,"Stat",(function(){return rr})),t(n.exports,"FetchXmlHttpFactory",(function(){return ir})),t(n.exports,"WebChannel",(function(){return sr})),t(n.exports,"XhrIo",(function(){return or}));var i,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},o={},a=a||{},u=s||self;function c(){}function h(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return(m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g).apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function _(){this.s=this.s,this.o=this.o}_.prototype.s=!1,_.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f))},_.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const w=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function T(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function b(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(h(n)){const e=t.length||0,r=n.length||0;t.length=e+r;for(let i=0;i<r;i++)t[e+i]=n[i]}else t.push(n)}}function E(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{u.addEventListener("test",c,e),u.removeEventListener("test",c,e)}catch(t){}return t}();function S(t){return/^[\s\xa0]*$/.test(t)}var k=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function C(t,e){return t<e?-1:t>e?1:0}function A(){var t=u.navigator;return t&&(t=t.userAgent)?t:""}function D(t){return-1!=A().indexOf(t)}function x(t){return x[" "](t),t}x[" "]=c;var R,N,O=D("Opera"),L=D("Trident")||D("MSIE"),M=D("Edge"),P=M||L,F=D("Gecko")&&!(-1!=A().toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),U=-1!=A().toLowerCase().indexOf("webkit")&&!D("Edge");function V(){var t=u.document;return t?t.documentMode:void 0}t:{var B="",j=(N=A(),F?/rv:([^\);]+)(\)|;)/.exec(N):M?/Edge\/([\d\.]+)/.exec(N):L?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(N):U?/WebKit\/(\S+)/.exec(N):O?/(?:Version)[ \/]?(\S+)/.exec(N):void 0);if(j&&(B=j?j[1]:""),L){var q=V();if(null!=q&&q>parseFloat(B)){R=String(q);break t}}R=B}var z,H={};function K(){return function(t){var e=H;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=k(String(R)).split("."),n=k("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=C(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||C(0==i[2].length,0==s[2].length)||C(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(u.document&&L){var $=V();z=$||(parseInt(R,10)||void 0)}else z=void 0;var W=z;function G(t,e){if(E.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(F){t:{try{x(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Q[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&G.X.h.call(this)}}v(G,E);var Q={2:"touch",3:"pen",4:"mouse"};G.prototype.h=function(){G.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Y="closure_listenable_"+(1e6*Math.random()|0),X=0;function J(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++X,this.ba=this.ea=!1}function Z(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function tt(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function et(t){const e={};for(const n in t)e[n]=t[n];return e}const nt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rt(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e],r)t[n]=r[n];for(let e=0;e<nt.length;e++)n=nt[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function it(t){this.src=t,this.g={},this.h=0}function st(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=w(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Z(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ot(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}it.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=ot(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new J(e,this.src,s,!!r,i)).ea=n,t.push(e)),e};var at="closure_lm_"+(1e6*Math.random()|0),ut={};function ct(t,e,n,r,i){if(r&&r.once)return lt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ct(t,e[s],n,r,i);return null}return n=vt(n),t&&t[Y]?t.N(e,n,l(r)?!!r.capture:!!r,i):ht(t,e,n,!1,r,i)}function ht(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=mt(t);if(a||(t[at]=a=new it(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}const e=gt;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)I||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(pt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function lt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)lt(t,e[s],n,r,i);return null}return n=vt(n),t&&t[Y]?t.O(e,n,l(r)?!!r.capture:!!r,i):ht(t,e,n,!0,r,i)}function dt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)dt(t,e[s],n,r,i);else r=l(r)?!!r.capture:!!r,n=vt(n),t&&t[Y]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=ot(s=t.g[e],n,r,i))&&(Z(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=mt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ot(e,n,r,i)),(n=-1<t?e[t]:null)&&ft(n))}function ft(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[Y])st(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(pt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=mt(e))?(st(n,t),0==n.h&&(n.src=null,e[at]=null)):Z(t)}}}function pt(t){return t in ut?ut[t]:ut[t]="on"+t}function gt(t,e){if(t.ba)t=!0;else{e=new G(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&ft(t),t=n.call(r,e)}return t}function mt(t){return(t=t[at])instanceof it?t:null}var yt="__closure_events_fn_"+(1e9*Math.random()>>>0);function vt(t){return"function"==typeof t?t:(t[yt]||(t[yt]=function(e){return t.handleEvent(e)}),t[yt])}function _t(){_.call(this),this.i=new it(this),this.P=this,this.I=null}function wt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new E(e,t);else if(e instanceof E)e.target=e.target||t;else{var i=e;rt(e=new E(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Tt(o,r,!0,e)&&i}if(i=Tt(o=e.g=t,r,!0,e)&&i,i=Tt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=Tt(o=e.g=n[s],r,!1,e)&&i}function Tt(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&st(t.i,o),i=!1!==a.call(u,r)&&i}}return i&&!r.defaultPrevented}v(_t,_),_t.prototype[Y]=!0,_t.prototype.removeEventListener=function(t,e,n,r){dt(this,t,e,n,r)},_t.prototype.M=function(){if(_t.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Z(n[r]);delete e.g[t],e.h--}}this.I=null},_t.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},_t.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var bt=u.JSON.stringify;function Et(){var t=xt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var It,St=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new kt),(t=>t.reset()));class kt{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function Ct(t){u.setTimeout((()=>{throw t}),0)}function At(t,e){It||function(){var t=u.Promise.resolve(void 0);It=function(){t.then(Rt)}}(),Dt||(It(),Dt=!0),xt.add(t,e)}var Dt=!1,xt=new class{add(t,e){const n=St.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function Rt(){for(var t;t=Et();){try{t.h.call(t.g)}catch(t){Ct(t)}var e=St;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Dt=!1}function Nt(t,e){_t.call(this),this.h=t||1,this.g=e||u,this.j=m(this.lb,this),this.l=Date.now()}function Ot(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Lt(t,e,n){if("function"==typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:u.setTimeout(t,e||0)}function Mt(t){t.g=Lt((()=>{t.g=null,t.i&&(t.i=!1,Mt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(Nt,_t),(i=Nt.prototype).ca=!1,i.R=null,i.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),wt(this,"tick"),this.ca&&(Ot(this),this.start()))}},i.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){Nt.X.M.call(this),Ot(this),delete this.g};class Pt extends _{l(t){this.h=arguments,this.g?this.i=!0:Mt(this)}M(){super.M(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function Ft(t){_.call(this),this.h=t,this.g={}}v(Ft,_);var Ut=[];function Vt(t,e,n,r){Array.isArray(n)||(n&&(Ut[0]=n.toString()),n=Ut);for(var i=0;i<n.length;i++){var s=ct(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Bt(t){tt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ft(t)}),t),t.g={}}function jt(){this.g=!0}function qt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return bt(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}Ft.prototype.M=function(){Ft.X.M.call(this),Bt(this)},Ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},jt.prototype.Aa=function(){this.g=!1},jt.prototype.info=function(){};var zt={},Ht=null;function Kt(){return Ht=Ht||new _t}function $t(t){E.call(this,zt.Pa,t)}function Wt(t){const e=Kt();wt(e,new $t(e))}function Gt(t,e){E.call(this,zt.STAT_EVENT,t),this.stat=e}function Qt(t){const e=Kt();wt(e,new Gt(e,t))}function Yt(t,e){E.call(this,zt.Qa,t),this.size=e}function Xt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return u.setTimeout((function(){t()}),e)}zt.Pa="serverreachability",v($t,E),zt.STAT_EVENT="statevent",v(Gt,E),zt.Qa="timingevent",v(Yt,E);var Jt={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Zt={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function te(){}function ee(t){return t.h||(t.h=t.i())}function ne(){}te.prototype.h=null;var re,ie={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function se(){E.call(this,"d")}function oe(){E.call(this,"c")}function ae(){}function ue(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Ft(this),this.O=he,t=P?125:void 0,this.T=new Nt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ce}function ce(){this.i=null,this.g="",this.h=!1}v(se,E),v(oe,E),v(ae,te),ae.prototype.g=function(){return new XMLHttpRequest},ae.prototype.i=function(){return{}},re=new ae;var he=45e3,le={},de={};function fe(t,e,n){t.K=1,t.v=Ne(Ce(e)),t.s=n,t.P=!0,pe(t,null)}function pe(t,e){t.F=Date.now(),ve(t),t.A=Ce(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),Ke(n.i,"t",r),t.C=0,n=t.l.H,t.h=new ce,t.g=Kn(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Pt(m(t.La,t,t.g),t.N)),Vt(t.S,t.g,"readystatechange",t.ib),e=t.H?et(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Wt(),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+c+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function ge(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function me(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=ye(t,n),r==de){4==e&&(t.o=4,Qt(14),i=!1),qt(t.j,t.m,null,"[Incomplete Response]");break}if(r==le){t.o=4,Qt(15),qt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}qt(t.j,t.m,r,null),Ee(t,r)}ge(t)&&r!=de&&r!=le&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Qt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fn(e),e.K=!0,Qt(11))):(qt(t.j,t.m,n,"[Invalid Chunked Response]"),be(t),Te(t))}function ye(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?de:(n=Number(e.substring(n,r)),isNaN(n)?le:(r+=1)+n>e.length?de:(e=e.substr(r,n),t.C=r+n,e))}function ve(t){t.V=Date.now()+t.O,_e(t,t.O)}function _e(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Xt(m(t.gb,t),e)}function we(t){t.B&&(u.clearTimeout(t.B),t.B=null)}function Te(t){0==t.l.G||t.I||Bn(t.l,t)}function be(t){we(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Ot(t.T),Bt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ee(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Xe(n.h,t)))if(!t.J&&Xe(n.h,t)&&3==n.G){try{var r=n.Fa.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Vn(n),Dn(n)}Pn(n),Qt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=Xt(m(n.cb,n),6e3));if(1>=Ye(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else qn(n,11)}else if((t.J||n.g==t)&&Vn(n),!S(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const e=c[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=c[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const h=c[5];null!=h&&"number"==typeof h&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Je(s,s.h),s.h=null))}if(r.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.za=t,Re(r.F,r.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((r=n).sa=Hn(r,r.H?r.ka:null,r.V),o.J){Ze(r.h,o);var a=o,u=r.J;u&&a.setTimeout(u),a.B&&(we(a),ve(a)),r.g=o}else Mn(r);0<n.i.length&&Rn(n)}else"stop"!=c[0]&&"close"!=c[0]||qn(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?qn(n,7):An(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}Wt()}catch(t){}}function Ie(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(h(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(h(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}(t),r=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(h(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}(i=ue.prototype).setTimeout=function(t){this.O=t},i.ib=function(t){t=t.target;const e=this.L;e&&3==bn(t)?e.l():this.La(t)},i.La=function(t){try{if(t==this.g)t:{const l=bn(this.g);var e=this.g.Ea();this.g.aa();if(!(3>l)&&(3!=l||P||this.g&&(this.h.h||this.g.fa()||En(this.g)))){this.I||4!=l||7==e||Wt(),we(this);var n=this.g.aa();this.Y=n;e:if(ge(this)){var r=En(this.g);t="";var i=r.length,s=4==bn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){be(this),Te(this);var o="";break e}this.h.i=new u.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(a)){var h=a;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,Qt(12),be(this),Te(this);break t}qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ee(this,n)}this.P?(me(this,l,o),P&&this.i&&3==l&&(Vt(this.S,this.T,"tick",this.hb),this.T.start())):(qt(this.j,this.m,o,null),Ee(this,o)),4==l&&be(this),this.i&&!this.I&&(4==l?Bn(this.l,this):(this.i=!1,ve(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Qt(12)):(this.o=0,Qt(13)),be(this),Te(this)}}}catch(t){}},i.hb=function(){if(this.g){var t=bn(this.g),e=this.g.fa();this.C<e.length&&(we(this),me(this,t,e),this.i&&4!=t&&ve(this))}},i.cancel=function(){this.I=!0,be(this)},i.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Wt(),Qt(17)),be(this),this.o=2,Te(this)):_e(this,this.V-t)};var Se=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ke(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ke){this.h=void 0!==e?e:t.h,Ae(this,t.j),this.s=t.s,this.g=t.g,De(this,t.m),this.l=t.l,e=t.i;var n=new je;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),xe(this,n),this.o=t.o}else t&&(n=String(t).match(Se))?(this.h=!!e,Ae(this,n[1]||"",!0),this.s=Oe(n[2]||""),this.g=Oe(n[3]||"",!0),De(this,n[4]),this.l=Oe(n[5]||"",!0),xe(this,n[6]||"",!0),this.o=Oe(n[7]||"")):(this.h=!!e,this.i=new je(null,this.h))}function Ce(t){return new ke(t)}function Ae(t,e,n){t.j=n?Oe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function De(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function xe(t,e,n){e instanceof je?(t.i=e,function(t,e){e&&!t.j&&(qe(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ze(this,e),Ke(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Le(e,Ve)),t.i=new je(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function Ne(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Oe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Le(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Me),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Me(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ke.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Le(e,Pe,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Le(e,Pe,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Le(n,"/"==n.charAt(0)?Ue:Fe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Le(n,Be)),t.join("")};var Pe=/[#\/\?@]/g,Fe=/[#\?:]/g,Ue=/[#\?]/g,Ve=/[#\?@]/g,Be=/#/g;function je(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function qe(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ze(t,e){qe(t),e=$e(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function He(t,e){return qe(t),e=$e(t,e),t.g.has(e)}function Ke(t,e,n){ze(t,e),0<n.length&&(t.i=null,t.g.set($e(t,e),T(n)),t.h+=n.length)}function $e(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(i=je.prototype).add=function(t,e){qe(this),this.i=null,t=$e(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){qe(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},i.oa=function(){qe(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},i.W=function(t){qe(this);let e=[];if("string"==typeof t)He(this,t)&&(e=e.concat(this.g.get($e(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},i.set=function(t,e){return qe(this),this.i=null,He(this,t=$e(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function We(t){this.l=t||Ge,u.PerformanceNavigationTiming?t=0<(t=u.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(u.g&&u.g.Ga&&u.g.Ga()&&u.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ge=10;function Qe(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Ye(t){return t.h?1:t.g?t.g.size:0}function Xe(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Je(t,e){t.g?t.g.add(e):t.h=e}function Ze(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function tn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return T(t.i)}function en(){}function nn(){this.g=new en}function rn(t,e,n){const r=n||"";try{Ie(t,(function(t,n){let i=t;l(t)&&(i=bt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function sn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function on(t){this.l=t.ac||null,this.j=t.jb||!1}function an(t,e){_t.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=un,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}We.prototype.cancel=function(){if(this.i=tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},en.prototype.stringify=function(t){return u.JSON.stringify(t,void 0)},en.prototype.parse=function(t){return u.JSON.parse(t,void 0)},v(on,te),on.prototype.g=function(){return new an(this.l,this.j)},on.prototype.i=function(t){return function(){return t}}({}),v(an,_t);var un=0;function cn(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function hn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ln(t)}function ln(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(i=an.prototype).open=function(t,e){if(this.readyState!=un)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ln(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||u).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,hn(this)),this.readyState=un},i.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ln(this)),this.g&&(this.readyState=3,ln(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==u.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cn(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},i.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?hn(this):ln(this),3==this.readyState&&cn(this)}},i.Va=function(t){this.g&&(this.response=this.responseText=t,hn(this))},i.Ua=function(t){this.g&&(this.response=t,hn(this))},i.ga=function(){this.g&&hn(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(an.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var dn=u.JSON.parse;function fn(t){_t.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=pn,this.K=this.L=!1}v(fn,_t);var pn="",gn=/^https?$/i,mn=["POST","PUT"];function yn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,vn(t),wn(t)}function vn(t){t.D||(t.D=!0,wt(t,"complete"),wt(t,"error"))}function _n(t){if(t.h&&void 0!==a&&(!t.C[1]||4!=bn(t)||2!=t.aa()))if(t.v&&4==bn(t))Lt(t.Ha,0,t);else if(wt(t,"readystatechange"),4==bn(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var i=String(t.H).match(Se)[1]||null;if(!i&&u.self&&u.self.location){var s=u.self.location.protocol;i=s.substr(0,s.length-1)}r=!gn.test(i?i.toLowerCase():"")}n=r}if(n)wt(t,"complete"),wt(t,"success");else{t.m=6;try{var o=2<bn(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",vn(t)}}finally{wn(t)}}}function wn(t,e){if(t.g){Tn(t);const n=t.g,r=t.C[0]?c:null;t.g=null,t.C=null,e||wt(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function Tn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(u.clearTimeout(t.A),t.A=null)}function bn(t){return t.g?t.g.readyState:0}function En(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case pn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function In(t){let e="";return tt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Sn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=In(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Re(t,e,n))}function kn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Cn(t){this.Ca=0,this.i=[],this.j=new jt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=kn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=kn("baseRetryDelayMs",5e3,t),this.bb=kn("retryDelaySeedMs",1e4,t),this.$a=kn("forwardChannelMaxRetries",2,t),this.ta=kn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new We(t&&t.concurrentRequestLimit),this.Fa=new nn,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function An(t){if(xn(t),3==t.G){var e=t.U++,n=Ce(t.F);Re(n,"SID",t.I),Re(n,"RID",e),Re(n,"TYPE","terminate"),On(t,n),(e=new ue(t,t.j,e,void 0)).K=2,e.v=Ne(Ce(n)),n=!1,u.navigator&&u.navigator.sendBeacon&&(n=u.navigator.sendBeacon(e.v.toString(),"")),!n&&u.Image&&((new Image).src=e.v,n=!0),n||(e.g=Kn(e.l,null),e.g.da(e.v)),e.F=Date.now(),ve(e)}zn(t)}function Dn(t){t.g&&(Fn(t),t.g.cancel(),t.g=null)}function xn(t){Dn(t),t.u&&(u.clearTimeout(t.u),t.u=null),Vn(t),t.h.cancel(),t.m&&("number"==typeof t.m&&u.clearTimeout(t.m),t.m=null)}function Rn(t){Qe(t.h)||t.m||(t.m=!0,At(t.Ja,t),t.C=0)}function Nn(t,e){var n;n=e?e.m:t.U++;const r=Ce(t.F);Re(r,"SID",t.I),Re(r,"RID",n),Re(r,"AID",t.T),On(t,r),t.o&&t.s&&Sn(r,t.o,t.s),n=new ue(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Ln(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Je(t.h,n),fe(n,r,e)}function On(t,e){t.ia&&tt(t.ia,(function(t,n){Re(e,n,t)})),t.l&&Ie({},(function(t,n){Re(e,n,t)}))}function Ln(t,e,n){n=Math.min(t.i.length,n);var r=t.l?m(t.l.Ra,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),s=!1;else try{rn(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function Mn(t){t.g||t.u||(t.Z=1,At(t.Ia,t),t.A=0)}function Pn(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=Xt(m(t.Ia,t),jn(t,t.A)),t.A++,!0)}function Fn(t){null!=t.B&&(u.clearTimeout(t.B),t.B=null)}function Un(t){t.g=new ue(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Ce(t.sa);Re(e,"RID","rpc"),Re(e,"SID",t.I),Re(e,"CI",t.L?"0":"1"),Re(e,"AID",t.T),Re(e,"TYPE","xmlhttp"),On(t,e),t.o&&t.s&&Sn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ne(Ce(e)),n.s=null,n.P=!0,pe(n,t)}function Vn(t){null!=t.v&&(u.clearTimeout(t.v),t.v=null)}function Bn(t,e){var n=null;if(t.g==e){Vn(t),Fn(t),t.g=null;var r=2}else{if(!Xe(t.h,e))return;n=e.D,Ze(t.h,e),r=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;wt(r=Kt(),new Yt(r,n)),Rn(t)}else Mn(t);else if(3==(i=e.o)||0==i&&0<t.pa||!(1==r&&function(t,e){return!(Ye(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=Xt(m(t.Ja,t,e),jn(t,t.C)),t.C++,0)))}(t,e)||2==r&&Pn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:qn(t,5);break;case 4:qn(t,10);break;case 3:qn(t,6);break;default:qn(t,2)}}function jn(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function qn(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=m(t.kb,t);n||(n=new ke("//www.google.com/images/cleardot.gif"),u.location&&"http"==u.location.protocol||Ae(n,"https"),Ne(n)),function(t,e){const n=new jt;if(u.Image){const r=new Image;r.onload=y(sn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=y(sn,n,r,"TestLoadImage: error",!1,e),r.onabort=y(sn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=y(sn,n,r,"TestLoadImage: timeout",!1,e),u.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else Qt(2);t.G=0,t.l&&t.l.va(e),zn(t),xn(t)}function zn(t){if(t.G=0,t.la=[],t.l){const e=tn(t.h);0==e.length&&0==t.i.length||(b(t.la,e),b(t.la,t.i),t.h.i.length=0,T(t.i),t.i.length=0),t.l.ua()}}function Hn(t,e,n){var r=n instanceof ke?Ce(n):new ke(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),De(r,r.m);else{var i=u.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ke(null,void 0);r&&Ae(s,r),e&&(s.g=e),i&&De(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Re(r,n,e),Re(r,"VER",t.ma),On(t,r),r}function Kn(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new fn(new on({jb:!0})):new fn(t.ra)).Ka(t.H),e}function $n(){}function Wn(){if(L&&!(10<=Number(W)))throw Error("Environmental error: no available transport.")}function Gn(t,e){_t.call(this),this.g=new Cn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!S(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!S(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Xn(this)}function Qn(t){se.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Yn(){oe.call(this),this.status=1}function Xn(t){this.g=t}(i=fn.prototype).Ka=function(t){this.L=t},i.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():re.g(),this.C=this.u?ee(this.u):ee(re),this.g.onreadystatechange=m(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void yn(this,t)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=u.FormData&&t instanceof u.FormData,!(0<=w(mn,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Tn(this),0<this.B&&((this.K=function(t){return L&&K()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.qa,this)):this.A=Lt(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){yn(this,t)}},i.qa=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,wt(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,wt(this,"complete"),wt(this,"abort"),wn(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wn(this,!0)),fn.X.M.call(this)},i.Ha=function(){this.s||(this.F||this.v||this.l?_n(this):this.fb())},i.fb=function(){_n(this)},i.aa=function(){try{return 2<bn(this)?this.g.status:-1}catch(t){return-1}},i.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),dn(e)}},i.Ea=function(){return this.m},i.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(i=Cn.prototype).ma=8,i.G=1,i.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ue(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=et(s),rt(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Ln(this,i,e),Re(n=Ce(this.F),"RID",t),Re(n,"CVER",22),this.D&&Re(n,"X-HTTP-Session-Id",this.D),On(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(In(s)))+"&"+e:this.o&&Sn(n,this.o,s)),Je(this.h,i),this.Ya&&Re(n,"TYPE","init"),this.O?(Re(n,"$req",e),Re(n,"SID","null"),i.Z=!0,fe(i,n,null)):fe(i,n,e),this.G=2}}else 3==this.G&&(t?Nn(this,t):0==this.i.length||Qe(this.h)||Nn(this))},i.Ia=function(){if(this.u=null,Un(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Xt(m(this.eb,this),t)}},i.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Qt(10),Dn(this),Un(this))},i.cb=function(){null!=this.v&&(this.v=null,Dn(this),Pn(this),Qt(19))},i.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Qt(2)):(this.j.info("Failed to ping google.com"),Qt(1))},(i=$n.prototype).xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Ra=function(){},Wn.prototype.g=function(t,e){return new Gn(t,e)},v(Gn,_t),Gn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Qt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Hn(t,null,t.V),Rn(t)},Gn.prototype.close=function(){An(this.g)},Gn.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=bt(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&Rn(e)},Gn.prototype.M=function(){this.g.l=null,delete this.j,An(this.g),delete this.g,Gn.X.M.call(this)},v(Qn,se),v(Yn,oe),v(Xn,$n),Xn.prototype.xa=function(){wt(this.g,"a")},Xn.prototype.wa=function(t){wt(this.g,new Qn(t))},Xn.prototype.va=function(t){wt(this.g,new Yn)},Xn.prototype.ua=function(){wt(this.g,"b")},Wn.prototype.createWebChannel=Wn.prototype.g,Gn.prototype.send=Gn.prototype.u,Gn.prototype.open=Gn.prototype.m,Gn.prototype.close=Gn.prototype.close,Jt.NO_ERROR=0,Jt.TIMEOUT=8,Jt.HTTP_ERROR=6,Zt.COMPLETE="complete",ne.EventType=ie,ie.OPEN="a",ie.CLOSE="b",ie.ERROR="c",ie.MESSAGE="d",_t.prototype.listen=_t.prototype.N,fn.prototype.listenOnce=fn.prototype.O,fn.prototype.getLastError=fn.prototype.Oa,fn.prototype.getLastErrorCode=fn.prototype.Ea,fn.prototype.getStatus=fn.prototype.aa,fn.prototype.getResponseJson=fn.prototype.Sa,fn.prototype.getResponseText=fn.prototype.fa,fn.prototype.send=fn.prototype.da,fn.prototype.setWithCredentials=fn.prototype.Ka;var Jn=o.createWebChannelTransport=function(){return new Wn},Zn=o.getStatEventTarget=function(){return Kt()},tr=o.ErrorCode=Jt,er=o.EventType=Zt,nr=o.Event=zt,rr=o.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ir=o.FetchXmlHttpFactory=on,sr=o.WebChannel=ne,or=o.XhrIo=fn})),i.register("lpPzL",(function(e,n){function r(){return{filmGallery:document.querySelector(".film__list"),movieCard:document.querySelectorAll(".film__item"),searchQuery:document.querySelector(".header__form-input"),searchBtn:document.querySelector(".header__form-button"),modalBackdrop:document.querySelector(".backdrop"),insertImgCont:document.querySelector(".img-wrap"),watchBtn:document.querySelector(".film-preview"),closeVideoBtn:document.querySelector(".film-preview-close"),movieBox:document.querySelector(".film-info-js"),modalCloseBtn:document.querySelector(".close-modal-btn"),backdrop:document.querySelector(".backdrop"),searchForm:document.querySelector(".header__form"),addToWatched:document.querySelector(".film-btn-watched"),addToQueue:document.querySelector(".film-btn-queue"),watched:document.querySelector("#watched"),queue:document.querySelector("#queue"),insertVideoCont:document.querySelector(".film-tiezer"),closeVideoBtn:document.querySelector(".film-preview-close"),watchBtn:document.querySelector(".film-preview"),videoBtnBox:document.querySelector(".film-btn-wrap"),iframeEl:document.querySelector(".iframe"),trailerOverlay:document.querySelector(".trailer__overlay"),trailerBox:document.querySelector(".trailer-box")}}t(e.exports,"getRefs",(function(){return r}))})),i.register("97fqm",(function(t,e){var n=i("h9NR5");let r=!1;document.querySelector("#btn").addEventListener("mouseup",(function(){const t=n.default.timeline();r=!r;let e=0,i="#827D96",s="120px";r&&(e=40,i="#FFFFFF",s="120px"),t.to(".knob",{x:e,duration:1},"up"),t.to(".top",{backgroundColor:i,duration:1},"up"),t.to(".light",{width:s,height:s,duration:1},"up")}));const s=document.querySelector("#btn"),o=document.querySelector("body"),a=document.querySelector(".btnContainer");let u=localStorage.getItem("ui-theme");window.addEventListener("load",(function(){"dark"===u&&(o.classList.add("body-theme"),a.setAttribute("checked",!0))})),s.addEventListener("click",(function(){if(u=localStorage.getItem("ui-theme"),"dark"===u)return o.classList.remove("body-theme"),void localStorage.setItem("ui-theme","light");o.classList.add("body-theme"),localStorage.setItem("ui-theme","dark")}))})),i.register("h9NR5",(function(e,n){t(e.exports,"default",(function(){return o}));var r=i("gMDMw"),s=i("cEVdW"),o=r.gsap.registerPlugin(s.CSSPlugin)||r.gsap;o.core.Tween})),i.register("gMDMw",(function(e,n){function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}
/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/t(e.exports,"_config",(function(){return M})),t(e.exports,"_isString",(function(){return K})),t(e.exports,"_isUndefined",(function(){return G})),t(e.exports,"_numExp",(function(){return nt})),t(e.exports,"_numWithUnitExp",(function(){return rt})),t(e.exports,"_relExp",(function(){return st})),t(e.exports,"gsap",(function(){return Vn})),t(e.exports,"_missingPlugin",(function(){return lt})),t(e.exports,"_plugins",(function(){return Tt})),t(e.exports,"GSCache",(function(){return Ze})),t(e.exports,"_getCache",(function(){return Ct})),t(e.exports,"_getProperty",(function(){return At})),t(e.exports,"_forEachName",(function(){return Dt})),t(e.exports,"_round",(function(){return xt})),t(e.exports,"_parseRelative",(function(){return Nt})),t(e.exports,"_ticker",(function(){return Be})),t(e.exports,"getUnit",(function(){return pe})),t(e.exports,"_replaceRandom",(function(){return Se})),t(e.exports,"_getSetter",(function(){return vn})),t(e.exports,"PropTween",(function(){return Cn})),t(e.exports,"_colorExp",(function(){return Fe})),t(e.exports,"_colorStringFilter",(function(){return Ve})),t(e.exports,"_renderComplexString",(function(){return Tn})),t(e.exports,"_checkPlugin",(function(){return an})),t(e.exports,"_sortPropTweensByPriority",(function(){return kn}));var s,o,a,u,c,h,l,d,f,p,g,m,y,v,_,w,T,b,E,I,S,k,C,A,D,x,R,N,O,L,M={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},P={duration:.5,overwrite:!1,delay:0},F=1e8,U=1e-8,V=2*Math.PI,B=V/4,j=0,q=Math.sqrt,z=Math.cos,H=Math.sin,K=function(t){return"string"==typeof t},$=function(t){return"function"==typeof t},W=function(t){return"number"==typeof t},G=function(t){return void 0===t},Q=function(t){return"object"==typeof t},Y=function(t){return!1!==t},X=function(){return"undefined"!=typeof window},J=function(t){return $(t)||K(t)},Z="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},tt=Array.isArray,et=/(?:-?\.?\d|\.)+/gi,nt=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,st=/[+-]=-?[.\d]+/,ot=/[^,'"\[\]\s]+/gi,at=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ut={},ct={},ht=function(t){return(ct=Vt(t,ut))&&Vn},lt=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},dt=function(t,e){return!e&&console.warn(t)},ft=function(t,e){return t&&(ut[t]=e)&&ct&&(ct[t]=e)||ut},pt=function(){return 0},gt={suppressEvents:!0,isStart:!0,kill:!1},mt={suppressEvents:!0,kill:!1},yt={suppressEvents:!0},vt={},_t=[],wt={},Tt={},bt={},Et=30,It=[],St="",kt=function(t){var e,n,r=t[0];if(Q(r)||$(r)||(t=[t]),!(e=(r._gsap||{}).harness)){for(n=It.length;n--&&!It[n].targetTest(r););e=It[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new Ze(t[n],e)))||t.splice(n,1);return t},Ct=function(t){return t._gsap||kt(ye(t))[0]._gsap},At=function(t,e,n){return(n=t[e])&&$(n)?t[e]():G(n)&&t.getAttribute&&t.getAttribute(e)||n},Dt=function(t,e){return(t=t.split(",")).forEach(e)||t},xt=function(t){return Math.round(1e5*t)/1e5||0},Rt=function(t){return Math.round(1e7*t)/1e7||0},Nt=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),"+"===n?t+r:"-"===n?t-r:"*"===n?t*r:t/r},Ot=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},Lt=function(){var t,e,n=_t.length,r=_t.slice(0);for(wt={},_t.length=0,t=0;t<n;t++)(e=r[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)},Mt=function(t,e,n,r){_t.length&&Lt(),t.render(e,n,r||o&&e<0&&(t._initted||t._startAt)),_t.length&&Lt()},Pt=function(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(ot).length<2?e:K(t)?t.trim():t},Ft=function(t){return t},Ut=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Vt=function(t,e){for(var n in e)t[n]=e[n];return t},Bt=function t(e,n){for(var r in n)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(e[r]=Q(n[r])?t(e[r]||(e[r]={}),n[r]):n[r]);return e},jt=function(t,e){var n,r={};for(n in t)n in e||(r[n]=t[n]);return r},qt=function(t){var e,n=t.parent||u,r=t.keyframes?(e=tt(t.keyframes),function(t,n){for(var r in n)r in t||"duration"===r&&e||"ease"===r||(t[r]=n[r])}):Ut;if(Y(t.inherit))for(;n;)r(t,n.vars.defaults),n=n.parent||n._dp;return t},zt=function(t,e,n,r,i){void 0===n&&(n="_first"),void 0===r&&(r="_last");var s,o=t[r];if(i)for(s=e[i];o&&o[i]>s;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},Ht=function(t,e,n,r){void 0===n&&(n="_first"),void 0===r&&(r="_last");var i=e._prev,s=e._next;i?i._next=s:t[n]===e&&(t[n]=s),s?s._prev=i:t[r]===e&&(t[r]=i),e._next=e._prev=e.parent=null},Kt=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},$t=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Wt=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Gt=function(t,e,n,r){return t._startAt&&(o?t._startAt.revert(mt):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},Qt=function t(e){return!e||e._ts&&t(e.parent)},Yt=function(t){return t._repeat?Xt(t._tTime,t=t.duration()+t._rDelay)*t:0},Xt=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Jt=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Zt=function(t){return t._end=Rt(t._start+(t._tDur/Math.abs(t._ts||t._rts||U)||0))},te=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Rt(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Zt(t),n._dirty||$t(n,t)),t},ee=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=Jt(t.rawTime(),e),(!e._dur||fe(0,e.totalDuration(),n)-e._tTime>U)&&e.render(n,!0)),$t(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-1e-8}},ne=function(t,e,n,r){return e.parent&&Kt(e),e._start=Rt((W(n)?n:n||t!==u?he(t,n,e):t._time)+e._delay),e._end=Rt(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),zt(t,e,"_first","_last",t._sort?"_start":0),oe(e)||(t._recent=e),r||ee(t,e),t._ts<0&&te(t,t._tTime),t},re=function(t,e){return(ut.ScrollTrigger||lt("scrollTrigger",e))&&ut.ScrollTrigger.create(e,t)},ie=function(t,e,n,r,i){return un(t,e,i),t._initted?!n&&t._pt&&!o&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==Be.frame?(_t.push(t),t._lazy=[i,r],1):void 0:1},se=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},oe=function(t){var e=t.data;return"isFromStart"===e||"isStart"===e},ae=function(t,e,n,r){var i=t._repeat,s=Rt(e)||0,o=t._tTime/t._tDur;return o&&!r&&(t._time*=s/t._dur),t._dur=s,t._tDur=i?i<0?1e10:Rt(s*(i+1)+t._rDelay*i):s,o>0&&!r&&te(t,t._tTime=t._tDur*o),t.parent&&Zt(t),n||$t(t.parent,t),t},ue=function(t){return t instanceof en?$t(t):ae(t,t._dur)},ce={_start:0,endTime:pt,totalDuration:pt},he=function t(e,n,r){var i,s,o,a=e.labels,u=e._recent||ce,c=e.duration()>=F?u.endTime(!1):e._dur;return K(n)&&(isNaN(n)||n in a)?(s=n.charAt(0),o="%"===n.substr(-1),i=n.indexOf("="),"<"===s||">"===s?(i>=0&&(n=n.replace(/=/,"")),("<"===s?u._start:u.endTime(u._repeat>=0))+(parseFloat(n.substr(1))||0)*(o?(i<0?u:r).totalDuration()/100:1)):i<0?(n in a||(a[n]=c),a[n]):(s=parseFloat(n.charAt(i-1)+n.substr(i+1)),o&&r&&(s=s/100*(tt(r)?r[0]:r).totalDuration()),i>1?t(e,n.substr(0,i-1),r)+s:c+s)):null==n?c:+n},le=function(t,e,n){var r,i,s=W(e[1]),o=(s?2:1)+(t<2?0:1),a=e[o];if(s&&(a.duration=e[1]),a.parent=n,t){for(r=a,i=n;i&&!("immediateRender"in r);)r=i.vars.defaults||{},i=Y(i.vars.inherit)&&i.parent;a.immediateRender=Y(r.immediateRender),t<2?a.runBackwards=1:a.startAt=e[o-1]}return new fn(e[0],a,e[o+1])},de=function(t,e){return t||0===t?e(t):e},fe=function(t,e,n){return n<t?t:n>e?e:n},pe=function(t,e){return K(t)&&(e=at.exec(t))?e[1]:""},ge=[].slice,me=function(t,e){return t&&Q(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Q(t[0]))&&!t.nodeType&&t!==c},ye=function(t,e,n){return a&&!e&&a.selector?a.selector(t):!K(t)||n||!h&&je()?tt(t)?function(t,e,n){return void 0===n&&(n=[]),t.forEach((function(t){var r;return K(t)&&!e||me(t,1)?(r=n).push.apply(r,ye(t)):n.push(t)}))||n}(t,n):me(t)?ge.call(t,0):t?[t]:[]:ge.call((e||l).querySelectorAll(t),0)},ve=function(t){return t=ye(t)[0]||dt("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ye(e,n.querySelectorAll?n:n===t?dt("Invalid scope")||l.createElement("div"):t)}},_e=function(t){return t.sort((function(){return.5-Math.random()}))},we=function(t){if($(t))return t;var e=Q(t)?t:{each:t},n=Ge(e.ease),r=e.from||0,i=parseFloat(e.base)||0,s={},o=r>0&&r<1,a=isNaN(r)||o,u=e.axis,c=r,h=r;return K(r)?c=h={center:.5,edges:.5,end:1}[r]||0:!o&&a&&(c=r[0],h=r[1]),function(t,o,l){var d,f,p,g,m,y,v,_,w,T=(l||e).length,b=s[T];if(!b){if(!(w="auto"===e.grid?0:(e.grid||[1,F])[1])){for(v=-1e8;v<(v=l[w++].getBoundingClientRect().left)&&w<T;);w--}for(b=s[T]=[],d=a?Math.min(w,T)*c-.5:r%w,f=w===F?0:a?T*h/w-.5:r/w|0,v=0,_=F,y=0;y<T;y++)p=y%w-d,g=f-(y/w|0),b[y]=m=u?Math.abs("y"===u?g:p):q(p*p+g*g),m>v&&(v=m),m<_&&(_=m);"random"===r&&_e(b),b.max=v-_,b.min=_,b.v=T=(parseFloat(e.amount)||parseFloat(e.each)*(w>T?T-1:u?"y"===u?T/w:w:Math.max(w,T/w))||0)*("edges"===r?-1:1),b.b=T<0?i-T:i,b.u=pe(e.amount||e.each)||0,n=n&&T<0?$e(n):n}return T=(b[t]-b.min)/b.max||0,Rt(b.b+(n?n(T):T)*b.v)+b.u}},Te=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=Rt(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(W(n)?0:pe(n))}},be=function(t,e){var n,r,i=tt(t);return!i&&Q(t)&&(n=i=t.radius||F,t.values?(t=ye(t.values),(r=!W(t[0]))&&(n*=n)):t=Te(t.increment)),de(e,i?$(t)?function(e){return r=t(e),Math.abs(r-e)<=n?r:e}:function(e){for(var i,s,o=parseFloat(r?e.x:e),a=parseFloat(r?e.y:0),u=F,c=0,h=t.length;h--;)(i=r?(i=t[h].x-o)*i+(s=t[h].y-a)*s:Math.abs(t[h]-o))<u&&(u=i,c=h);return c=!n||u<=n?t[c]:e,r||c===e||W(e)?c:c+pe(e)}:Te(t))},Ee=function(t,e,n,r){return de(tt(t)?!e:!0===n?(n=0,!1):!r,(function(){return tt(t)?t[~~(Math.random()*t.length)]:(r=(n=n||1e-5)<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+.99*n))/n)*n*r)/r}))},Ie=function(t,e,n){return de(n,(function(n){return t[~~e(n)]}))},Se=function(t){for(var e,n,r,i,s=0,o="";~(e=t.indexOf("random(",s));)r=t.indexOf(")",e),i="["===t.charAt(e+7),n=t.substr(e+7,r-e-7).match(i?ot:et),o+=t.substr(s,e-s)+Ee(i?n:+n[0],i?0:+n[1],+n[2]||1e-5),s=r+1;return o+t.substr(s,t.length-s)},ke=function(t,e,n,r,i){var s=e-t,o=r-n;return de(i,(function(e){return n+((e-t)/s*o||0)}))},Ce=function(t,e,n){var r,i,s,o=t.labels,a=F;for(r in o)(i=o[r]-e)<0==!!n&&i&&a>(i=Math.abs(i))&&(s=r,a=i);return s},Ae=function(t,e,n){var r,i,s,o=t.vars,u=o[e],c=a,h=t._ctx;if(u)return r=o[e+"Params"],i=o.callbackScope||t,n&&_t.length&&Lt(),h&&(a=h),s=r?u.apply(i,r):u.call(i),a=c,s},De=function(t){return Kt(t),t.scrollTrigger&&t.scrollTrigger.kill(!!o),t.progress()<1&&Ae(t,"onInterrupt"),t},xe=function(t){var e=(t=!t.name&&t.default||t).name,n=$(t),r=e&&!n&&t.init?function(){this._props=[]}:t,i={init:pt,render:bn,add:on,kill:In,modifier:En,rawVars:0},s={targetTest:0,get:0,getSetter:vn,aliases:{},register:0};if(je(),t!==r){if(Tt[e])return;Ut(r,Ut(jt(t,i),s)),Vt(r.prototype,Vt(i,jt(t,s))),Tt[r.prop=e]=r,t.targetTest&&(It.push(r),vt[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}ft(e,r),t.register&&t.register(Vn,r,Cn)},Re=255,Ne={aqua:[0,Re,Re],lime:[0,Re,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Re],navy:[0,0,128],white:[Re,Re,Re],olive:[128,128,0],yellow:[Re,Re,0],orange:[Re,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Re,0,0],pink:[Re,192,203],cyan:[0,Re,Re],transparent:[Re,Re,Re,0]},Oe=function(t,e,n){return(6*(t+=t<0?1:t>1?-1:0)<1?e+(n-e)*t*6:t<.5?n:3*t<2?e+(n-e)*(2/3-t)*6:e)*Re+.5|0},Le=function(t,e,n){var r,i,s,o,a,u,c,h,l,d,f=t?W(t)?[t>>16,t>>8&Re,t&Re]:0:Ne.black;if(!f){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),Ne[t])f=Ne[t];else if("#"===t.charAt(0)){if(t.length<6&&(r=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+r+r+i+i+s+s+(5===t.length?t.charAt(4)+t.charAt(4):"")),9===t.length)return[(f=parseInt(t.substr(1,6),16))>>16,f>>8&Re,f&Re,parseInt(t.substr(7),16)/255];f=[(t=parseInt(t.substr(1),16))>>16,t>>8&Re,t&Re]}else if("hsl"===t.substr(0,3))if(f=d=t.match(et),e){if(~t.indexOf("="))return f=t.match(nt),n&&f.length<4&&(f[3]=1),f}else o=+f[0]%360/360,a=+f[1]/100,r=2*(u=+f[2]/100)-(i=u<=.5?u*(a+1):u+a-u*a),f.length>3&&(f[3]*=1),f[0]=Oe(o+1/3,r,i),f[1]=Oe(o,r,i),f[2]=Oe(o-1/3,r,i);else f=t.match(et)||Ne.transparent;f=f.map(Number)}return e&&!d&&(r=f[0]/Re,i=f[1]/Re,s=f[2]/Re,u=((c=Math.max(r,i,s))+(h=Math.min(r,i,s)))/2,c===h?o=a=0:(l=c-h,a=u>.5?l/(2-c-h):l/(c+h),o=c===r?(i-s)/l+(i<s?6:0):c===i?(s-r)/l+2:(r-i)/l+4,o*=60),f[0]=~~(o+.5),f[1]=~~(100*a+.5),f[2]=~~(100*u+.5)),n&&f.length<4&&(f[3]=1),f},Me=function(t){var e=[],n=[],r=-1;return t.split(Fe).forEach((function(t){var i=t.match(rt)||[];e.push.apply(e,i),n.push(r+=i.length+1)})),e.c=n,e},Pe=function(t,e,n){var r,i,s,o,a="",u=(t+a).match(Fe),c=e?"hsla(":"rgba(",h=0;if(!u)return t;if(u=u.map((function(t){return(t=Le(t,e,1))&&c+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"})),n&&(s=Me(t),(r=n.c).join(a)!==s.c.join(a)))for(o=(i=t.replace(Fe,"1").split(rt)).length-1;h<o;h++)a+=i[h]+(~r.indexOf(h)?u.shift()||c+"0,0,0,0)":(s.length?s:u.length?u:n).shift());if(!i)for(o=(i=t.split(Fe)).length-1;h<o;h++)a+=i[h]+u[h];return a+i[o]},Fe=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in Ne)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Ue=/hsl[a]?\(/,Ve=function(t){var e,n=t.join(" ");if(Fe.lastIndex=0,Fe.test(n))return e=Ue.test(n),t[1]=Pe(t[1],e),t[0]=Pe(t[0],e,Me(t[1])),!0},Be=(b=Date.now,E=500,I=33,S=b(),k=S,A=C=1e3/240,x=function t(e){var n,r,i,s,o=b()-k,a=!0===e;if(o>E&&(S+=o-I),((n=(i=(k+=o)-S)-A)>0||a)&&(s=++_.frame,w=i-1e3*_.time,_.time=i/=1e3,A+=n+(n>=C?4:C-n),r=1),a||(m=y(t)),r)for(T=0;T<D.length;T++)D[T](i,w,s,e)},_={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(t){return w/(1e3/(t||60))},wake:function(){d&&(!h&&X()&&(c=h=window,l=c.document||{},ut.gsap=Vn,(c.gsapVersions||(c.gsapVersions=[])).push(Vn.version),ht(ct||c.GreenSockGlobals||!c.gsap&&c||{}),v=c.requestAnimationFrame),m&&_.sleep(),y=v||function(t){return setTimeout(t,A-1e3*_.time+1|0)},g=1,x(2))},sleep:function(){(v?c.cancelAnimationFrame:clearTimeout)(m),g=0,y=pt},lagSmoothing:function(t,e){E=t||1e8,I=Math.min(e,E,0)},fps:function(t){C=1e3/(t||240),A=1e3*_.time+C},add:function(t,e,n){var r=e?function(e,n,i,s){t(e,n,i,s),_.remove(r)}:t;return _.remove(t),D[n?"unshift":"push"](r),je(),r},remove:function(t,e){~(e=D.indexOf(t))&&D.splice(e,1)&&T>=e&&T--},_listeners:D=[]}),je=function(){return!g&&Be.wake()},qe={},ze=/^[\d.\-M][\d.\-,\s]/,He=/["']/g,Ke=function(t){for(var e,n,r,i={},s=t.substr(1,t.length-3).split(":"),o=s[0],a=1,u=s.length;a<u;a++)n=s[a],e=a!==u-1?n.lastIndexOf(","):n.length,r=n.substr(0,e),i[o]=isNaN(r)?r.replace(He,"").trim():+r,o=n.substr(e+1).trim();return i},$e=function(t){return function(e){return 1-t(1-e)}},We=function t(e,n){for(var r,i=e._first;i;)i instanceof en?t(i,n):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===n||(i.timeline?t(i.timeline,n):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=n)),i=i._next},Ge=function(t,e){return t&&($(t)?t:qe[t]||function(t){var e,n,r,i,s=(t+"").split("("),o=qe[s[0]];return o&&s.length>1&&o.config?o.config.apply(null,~t.indexOf("{")?[Ke(s[1])]:(e=t,n=e.indexOf("(")+1,r=e.indexOf(")"),i=e.indexOf("(",n),e.substring(n,~i&&i<r?e.indexOf(")",r+1):r)).split(",").map(Pt)):qe._CE&&ze.test(t)?qe._CE("",t):o}(t))||e},Qe=function(t,e,n,r){void 0===n&&(n=function(t){return 1-e(1-t)}),void 0===r&&(r=function(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var i,s={easeIn:e,easeOut:n,easeInOut:r};return Dt(t,(function(t){for(var e in qe[t]=ut[t]=s,qe[i=t.toLowerCase()]=n,s)qe[i+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=qe[t+"."+e]=s[e]})),s},Ye=function(t){return function(e){return e<.5?(1-t(1-2*e))/2:.5+t(2*(e-.5))/2}},Xe=function t(e,n,r){var i=n>=1?n:1,s=(r||(e?.3:.45))/(n<1?n:1),o=s/V*(Math.asin(1/i)||0),a=function(t){return 1===t?1:i*Math.pow(2,-10*t)*H((t-o)*s)+1},u="out"===e?a:"in"===e?function(t){return 1-a(1-t)}:Ye(a);return s=V/s,u.config=function(n,r){return t(e,n,r)},u},Je=function t(e,n){void 0===n&&(n=1.70158);var r=function(t){return t?--t*t*((n+1)*t+n)+1:0},i="out"===e?r:"in"===e?function(t){return 1-r(1-t)}:Ye(r);return i.config=function(n){return t(e,n)},i};Dt("Linear,Quad,Cubic,Quart,Quint,Strong",(function(t,e){var n=e<5?e+1:e;Qe(t+",Power"+(n-1),e?function(t){return Math.pow(t,n)}:function(t){return t},(function(t){return 1-Math.pow(1-t,n)}),(function(t){return t<.5?Math.pow(2*t,n)/2:1-Math.pow(2*(1-t),n)/2}))})),qe.Linear.easeNone=qe.none=qe.Linear.easeIn,Qe("Elastic",Xe("in"),Xe("out"),Xe()),R=7.5625,O=1/(N=2.75),Qe("Bounce",(function(t){return 1-L(1-t)}),L=function(t){return t<O?R*t*t:t<.7272727272727273?R*Math.pow(t-1.5/N,2)+.75:t<.9090909090909092?R*(t-=2.25/N)*t+.9375:R*Math.pow(t-2.625/N,2)+.984375}),Qe("Expo",(function(t){return t?Math.pow(2,10*(t-1)):0})),Qe("Circ",(function(t){return-(q(1-t*t)-1)})),Qe("Sine",(function(t){return 1===t?1:1-z(t*B)})),Qe("Back",Je("in"),Je("out"),Je()),qe.SteppedEase=qe.steps=ut.SteppedEase={config:function(t,e){void 0===t&&(t=1);var n=1/t,r=t+(e?0:1),i=e?1:0;return function(t){return((r*fe(0,.99999999,t)|0)+i)*n}}},P.ease=qe["quad.out"],Dt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",(function(t){return St+=t+","+t+"Params,"}));var Ze=function(t,e){this.id=j++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:At,this.set=e?e.getSetter:vn},tn=function(){function t(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ae(this,+t.duration,1,1),this.data=t.data,a&&(this._ctx=a,a.data.push(this)),g||Be.wake()}var e=t.prototype;return e.delay=function(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,ae(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,e){if(je(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(te(this,t),!n._dp||n.parent||ee(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&ne(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===U||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),Mt(this,t,e)),this},e.time=function(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Yt(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},e.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+Yt(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(t,e){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*n,e):this._repeat?Xt(this._tTime,n)+1:1},e.timeScale=function(t){if(!arguments.length)return-1e-8===this._rts?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?Jt(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||-1e-8===t?0:this._rts,this.totalTime(fe(-this._delay,this._tDur,e),!0),Zt(this),Wt(this)},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(je(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==U&&(this._tTime-=U)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return e&&(e._sort||!this.parent)&&ne(e,this,t-this._delay),this}return this._start},e.endTime=function(t){return this._start+(Y(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Jt(e.rawTime(t),this):this._tTime:this._tTime},e.revert=function(t){void 0===t&&(t=yt);var e=o;return o=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),"nested"!==this.data&&!1!==t.kill&&this.kill(),o=e,this},e.globalTime=function(t){for(var e=this,n=arguments.length?t:e.rawTime();e;)n=e._start+n/(e._ts||1),e=e._dp;return!this.parent&&this.vars.immediateRender?-1:n},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,ue(this)):-2===this._repeat?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var e=this._time;return this._rDelay=t,ue(this),e?this.time(e):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,e){return this.totalTime(he(this,t),Y(e))},e.restart=function(t,e){return this.play().totalTime(t?-this._delay:0,Y(e))},e.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},e.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},e.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var t,e=this.parent||this._dp,n=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=n&&t<this.endTime(!0)-U))},e.eventCallback=function(t,e,n){var r=this.vars;return arguments.length>1?(e?(r[t]=e,n&&(r[t+"Params"]=n),"onUpdate"===t&&(this._onUpdate=e)):delete r[t],this):r[t]},e.then=function(t){var e=this;return new Promise((function(n){var r=$(t)?t:Ft,i=function(){var t=e.then;e.then=null,$(r)&&(r=r(e))&&(r.then||r===e)&&(e.then=t),n(r),e.then=t};e._initted&&1===e.totalProgress()&&e._ts>=0||!e._tTime&&e._ts<0?i():e._prom=i}))},e.kill=function(){De(this)},t}();Ut(tn.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var en=function(t){function e(e,n){var i;return void 0===e&&(e={}),(i=t.call(this,e)||this).labels={},i.smoothChildTiming=!!e.smoothChildTiming,i.autoRemoveChildren=!!e.autoRemoveChildren,i._sort=Y(e.sortChildren),u&&ne(e.parent||u,r(i),n),e.reversed&&i.reverse(),e.paused&&i.paused(!0),e.scrollTrigger&&re(r(i),e.scrollTrigger),i}i(e,t);var n=e.prototype;return n.to=function(t,e,n){return le(0,arguments,this),this},n.from=function(t,e,n){return le(1,arguments,this),this},n.fromTo=function(t,e,n,r){return le(2,arguments,this),this},n.set=function(t,e,n){return e.duration=0,e.parent=this,qt(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new fn(t,e,he(this,n),1),this},n.call=function(t,e,n){return ne(this,fn.delayedCall(0,t,e),n)},n.staggerTo=function(t,e,n,r,i,s,o){return n.duration=e,n.stagger=n.stagger||r,n.onComplete=s,n.onCompleteParams=o,n.parent=this,new fn(t,n,he(this,i)),this},n.staggerFrom=function(t,e,n,r,i,s,o){return n.runBackwards=1,qt(n).immediateRender=Y(n.immediateRender),this.staggerTo(t,e,n,r,i,s,o)},n.staggerFromTo=function(t,e,n,r,i,s,o,a){return r.startAt=n,qt(r).immediateRender=Y(r.immediateRender),this.staggerTo(t,e,r,i,s,o,a)},n.render=function(t,e,n){var r,i,s,a,c,h,l,d,f,p,g,m,y=this._time,v=this._dirty?this.totalDuration():this._tDur,_=this._dur,w=t<=0?0:Rt(t),T=this._zTime<0!=t<0&&(this._initted||!_);if(this!==u&&w>v&&t>=0&&(w=v),w!==this._tTime||n||T){if(y!==this._time&&_&&(w+=this._time-y,t+=this._time-y),r=w,f=this._start,h=!(d=this._ts),T&&(_||(y=this._zTime),(t||!e)&&(this._zTime=t)),this._repeat){if(g=this._yoyo,c=_+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*c+t,e,n);if(r=Rt(w%c),w===v?(a=this._repeat,r=_):((a=~~(w/c))&&a===w/c&&(r=_,a--),r>_&&(r=_)),p=Xt(this._tTime,c),!y&&this._tTime&&p!==a&&(p=a),g&&1&a&&(r=_-r,m=1),a!==p&&!this._lock){var b=g&&1&p,E=b===(g&&1&a);if(a<p&&(b=!b),y=b?0:_,this._lock=1,this.render(y||(m?0:Rt(a*c)),e,!_)._lock=0,this._tTime=w,!e&&this.parent&&Ae(this,"onRepeat"),this.vars.repeatRefresh&&!m&&(this.invalidate()._lock=1),y&&y!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(_=this._dur,v=this._tDur,E&&(this._lock=2,y=b?_:-1e-4,this.render(y,!0),this.vars.repeatRefresh&&!m&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;We(this,m)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(l=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if("isPause"===r.data&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if("isPause"===r.data&&r._start<e)return r;r=r._prev}}(this,Rt(y),Rt(r)),l&&(w-=r-(r=l._start))),this._tTime=w,this._time=r,this._act=!d,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,y=0),!y&&r&&!e&&(Ae(this,"onStart"),this._tTime!==w))return this;if(r>=y&&t>=0)for(i=this._first;i;){if(s=i._next,(i._act||r>=i._start)&&i._ts&&l!==i){if(i.parent!==this)return this.render(t,e,n);if(i.render(i._ts>0?(r-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(r-i._start)*i._ts,e,n),r!==this._time||!this._ts&&!h){l=0,s&&(w+=this._zTime=-1e-8);break}}i=s}else{i=this._last;for(var I=t<0?t:r;i;){if(s=i._prev,(i._act||I<=i._end)&&i._ts&&l!==i){if(i.parent!==this)return this.render(t,e,n);if(i.render(i._ts>0?(I-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(I-i._start)*i._ts,e,n||o&&(i._initted||i._startAt)),r!==this._time||!this._ts&&!h){l=0,s&&(w+=this._zTime=I?-1e-8:U);break}}i=s}}if(l&&!e&&(this.pause(),l.render(r>=y?0:-1e-8)._zTime=r>=y?1:-1,this._ts))return this._start=f,Zt(this),this.render(t,e,n);this._onUpdate&&!e&&Ae(this,"onUpdate",!0),(w===v&&this._tTime>=this.totalDuration()||!w&&y)&&(f!==this._start&&Math.abs(d)===Math.abs(this._ts)||this._lock||((t||!_)&&(w===v&&this._ts>0||!w&&this._ts<0)&&Kt(this,1),e||t<0&&!y||!w&&!y&&v||(Ae(this,w===v&&t>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(w<v&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(t,e){var n=this;if(W(e)||(e=he(this,e,t)),!(t instanceof tn)){if(tt(t))return t.forEach((function(t){return n.add(t,e)})),this;if(K(t))return this.addLabel(t,e);if(!$(t))return this;t=fn.delayedCall(0,t)}return this!==t?ne(this,t,e):this},n.getChildren=function(t,e,n,r){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===n&&(n=!0),void 0===r&&(r=-1e8);for(var i=[],s=this._first;s;)s._start>=r&&(s instanceof fn?e&&i.push(s):(n&&i.push(s),t&&i.push.apply(i,s.getChildren(!0,e,n)))),s=s._next;return i},n.getById=function(t){for(var e=this.getChildren(1,1,1),n=e.length;n--;)if(e[n].vars.id===t)return e[n]},n.remove=function(t){return K(t)?this.removeLabel(t):$(t)?this.killTweensOf(t):(Ht(this,t),t===this._recent&&(this._recent=this._last),$t(this))},n.totalTime=function(e,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Rt(Be.time-(this._ts>0?e/this._ts:(this.totalDuration()-e)/-this._ts))),t.prototype.totalTime.call(this,e,n),this._forcing=0,this):this._tTime},n.addLabel=function(t,e){return this.labels[t]=he(this,e),this},n.removeLabel=function(t){return delete this.labels[t],this},n.addPause=function(t,e,n){var r=fn.delayedCall(0,e||pt,n);return r.data="isPause",this._hasPause=1,ne(this,r,he(this,t))},n.removePause=function(t){var e=this._first;for(t=he(this,t);e;)e._start===t&&"isPause"===e.data&&Kt(e),e=e._next},n.killTweensOf=function(t,e,n){for(var r=this.getTweensOf(t,n),i=r.length;i--;)nn!==r[i]&&r[i].kill(t,e);return this},n.getTweensOf=function(t,e){for(var n,r=[],i=ye(t),s=this._first,o=W(e);s;)s instanceof fn?Ot(s._targets,i)&&(o?(!nn||s._initted&&s._ts)&&s.globalTime(0)<=e&&s.globalTime(s.totalDuration())>e:!e||s.isActive())&&r.push(s):(n=s.getTweensOf(i,e)).length&&r.push.apply(r,n),s=s._next;return r},n.tweenTo=function(t,e){e=e||{};var n,r=this,i=he(r,t),s=e,o=s.startAt,a=s.onStart,u=s.onStartParams,c=s.immediateRender,h=fn.to(r,Ut({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:i,overwrite:"auto",duration:e.duration||Math.abs((i-(o&&"time"in o?o.time:r._time))/r.timeScale())||U,onStart:function(){if(r.pause(),!n){var t=e.duration||Math.abs((i-(o&&"time"in o?o.time:r._time))/r.timeScale());h._dur!==t&&ae(h,t,0,1).render(h._time,!0,!0),n=1}a&&a.apply(h,u||[])}},e));return c?h.render(0):h},n.tweenFromTo=function(t,e,n){return this.tweenTo(e,Ut({startAt:{time:he(this,t)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(t){return void 0===t&&(t=this._time),Ce(this,he(this,t))},n.previousLabel=function(t){return void 0===t&&(t=this._time),Ce(this,he(this,t),1)},n.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+U)},n.shiftChildren=function(t,e,n){void 0===n&&(n=0);for(var r,i=this._first,s=this.labels;i;)i._start>=n&&(i._start+=t,i._end+=t),i=i._next;if(e)for(r in s)s[r]>=n&&(s[r]+=t);return $t(this)},n.invalidate=function(e){var n=this._first;for(this._lock=0;n;)n.invalidate(e),n=n._next;return t.prototype.invalidate.call(this,e)},n.clear=function(t){void 0===t&&(t=!0);for(var e,n=this._first;n;)e=n._next,this.remove(n),n=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),$t(this)},n.totalDuration=function(t){var e,n,r,i=0,s=this,o=s._last,a=F;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-t:t));if(s._dirty){for(r=s.parent;o;)e=o._prev,o._dirty&&o.totalDuration(),(n=o._start)>a&&s._sort&&o._ts&&!s._lock?(s._lock=1,ne(s,o,n-o._delay,1)._lock=0):a=n,n<0&&o._ts&&(i-=n,(!r&&!s._dp||r&&r.smoothChildTiming)&&(s._start+=n/s._ts,s._time-=n,s._tTime-=n),s.shiftChildren(-n,!1,-1/0),a=0),o._end>i&&o._ts&&(i=o._end),o=e;ae(s,s===u&&s._time>i?s._time:i,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(t){if(u._ts&&(Mt(u,Jt(t,u)),f=Be.frame),Be.frame>=Et){Et+=M.autoSleep||120;var e=u._first;if((!e||!e._ts)&&M.autoSleep&&Be._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Be.sleep()}}},e}(tn);Ut(en.prototype,{_lock:0,_hasPause:0,_forcing:0});var nn,rn,sn=function(t,e,n,r,i,s,o){var a,u,c,h,l,d,f,p,g=new Cn(this._pt,t,e,0,1,Tn,null,i),m=0,y=0;for(g.b=n,g.e=r,n+="",(f=~(r+="").indexOf("random("))&&(r=Se(r)),s&&(s(p=[n,r],t,e),n=p[0],r=p[1]),u=n.match(it)||[];a=it.exec(r);)h=a[0],l=r.substring(m,a.index),c?c=(c+1)%5:"rgba("===l.substr(-5)&&(c=1),h!==u[y++]&&(d=parseFloat(u[y-1])||0,g._pt={_next:g._pt,p:l||1===y?l:",",s:d,c:"="===h.charAt(1)?Nt(d,h)-d:parseFloat(h)-d,m:c&&c<4?Math.round:0},m=it.lastIndex);return g.c=m<r.length?r.substring(m,r.length):"",g.fp=o,(st.test(r)||f)&&(g.e=0),this._pt=g,g},on=function(t,e,n,r,i,s,o,a,u,c){$(r)&&(r=r(i||0,t,s));var h,l=t[e],d="get"!==n?n:$(l)?u?t[e.indexOf("set")||!$(t["get"+e.substr(3)])?e:"get"+e.substr(3)](u):t[e]():l,f=$(l)?u?mn:gn:pn;if(K(r)&&(~r.indexOf("random(")&&(r=Se(r)),"="===r.charAt(1)&&((h=Nt(d,r)+(pe(d)||0))||0===h)&&(r=h)),!c||d!==r||rn)return isNaN(d*r)||""===r?(!l&&!(e in t)&&lt(e,r),sn.call(this,t,e,d,r,f,a||M.stringFilter,u)):(h=new Cn(this._pt,t,e,+d||0,r-(d||0),"boolean"==typeof l?wn:_n,0,f),u&&(h.fp=u),o&&h.modifier(o,this,t),this._pt=h)},an=function(t,e,n,r,i,s){var o,a,u,c;if(Tt[t]&&!1!==(o=new Tt[t]).init(i,o.rawVars?e[t]:function(t,e,n,r,i){if($(t)&&(t=hn(t,i,e,n,r)),!Q(t)||t.style&&t.nodeType||tt(t)||Z(t))return K(t)?hn(t,i,e,n,r):t;var s,o={};for(s in t)o[s]=hn(t[s],i,e,n,r);return o}(e[t],r,i,s,n),n,r,s)&&(n._pt=a=new Cn(n._pt,i,t,0,1,o.render,o,0,o.priority),n!==p))for(u=n._ptLookup[n._targets.indexOf(i)],c=o._props.length;c--;)u[o._props[c]]=a;return o},un=function t(e,n,r){var i,a,c,h,l,d,f,p,g,m,y,v,_,w=e.vars,T=w.ease,b=w.startAt,E=w.immediateRender,I=w.lazy,S=w.onUpdate,k=w.onUpdateParams,C=w.callbackScope,A=w.runBackwards,D=w.yoyoEase,x=w.keyframes,R=w.autoRevert,N=e._dur,O=e._startAt,L=e._targets,M=e.parent,V=M&&"nested"===M.data?M.vars.targets:L,B="auto"===e._overwrite&&!s,j=e.timeline;if(j&&(!x||!T)&&(T="none"),e._ease=Ge(T,P.ease),e._yEase=D?$e(Ge(!0===D?T:D,P.ease)):0,D&&e._yoyo&&!e._repeat&&(D=e._yEase,e._yEase=e._ease,e._ease=D),e._from=!j&&!!w.runBackwards,!j||x&&!w.stagger){if(v=(p=L[0]?Ct(L[0]).harness:0)&&w[p.prop],i=jt(w,vt),O&&(O._zTime<0&&O.progress(1),n<0&&A&&E&&!R?O.render(-1,!0):O.revert(A&&N?mt:gt),O._lazy=0),b){if(Kt(e._startAt=fn.set(L,Ut({data:"isStart",overwrite:!1,parent:M,immediateRender:!0,lazy:Y(I),startAt:null,delay:0,onUpdate:S,onUpdateParams:k,callbackScope:C,stagger:0},b))),e._startAt._dp=0,n<0&&(o||!E&&!R)&&e._startAt.revert(mt),E&&N&&n<=0&&r<=0)return void(n&&(e._zTime=n))}else if(A&&N&&!O)if(n&&(E=!1),c=Ut({overwrite:!1,data:"isFromStart",lazy:E&&Y(I),immediateRender:E,stagger:0,parent:M},i),v&&(c[p.prop]=v),Kt(e._startAt=fn.set(L,c)),e._startAt._dp=0,n<0&&(o?e._startAt.revert(mt):e._startAt.render(-1,!0)),e._zTime=n,E){if(!n)return}else t(e._startAt,U,U);for(e._pt=e._ptCache=0,I=N&&Y(I)||I&&!N,a=0;a<L.length;a++){if(f=(l=L[a])._gsap||kt(L)[a]._gsap,e._ptLookup[a]=m={},wt[f.id]&&_t.length&&Lt(),y=V===L?a:V.indexOf(l),p&&!1!==(g=new p).init(l,v||i,e,y,V)&&(e._pt=h=new Cn(e._pt,l,g.name,0,1,g.render,g,0,g.priority),g._props.forEach((function(t){m[t]=h})),g.priority&&(d=1)),!p||v)for(c in i)Tt[c]&&(g=an(c,i,e,y,l,V))?g.priority&&(d=1):m[c]=h=on.call(e,l,c,"get",i[c],y,V,0,w.stringFilter);e._op&&e._op[a]&&e.kill(l,e._op[a]),B&&e._pt&&(nn=e,u.killTweensOf(l,m,e.globalTime(n)),_=!e.parent,nn=0),e._pt&&I&&(wt[f.id]=1)}d&&kn(e),e._onInit&&e._onInit(e)}e._onUpdate=S,e._initted=(!e._op||e._pt)&&!_,x&&n<=0&&j.render(F,!0,!0)},cn=function(t,e,n,r){var i,s,o=e.ease||r||"power1.inOut";if(tt(e))s=n[t]||(n[t]=[]),e.forEach((function(t,n){return s.push({t:n/(e.length-1)*100,v:t,e:o})}));else for(i in e)s=n[i]||(n[i]=[]),"ease"===i||s.push({t:parseFloat(t),v:e[i],e:o})},hn=function(t,e,n,r,i){return $(t)?t.call(e,n,r,i):K(t)&&~t.indexOf("random(")?Se(t):t},ln=St+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",dn={};Dt(ln+",id,stagger,delay,duration,paused,scrollTrigger",(function(t){return dn[t]=1}));var fn=function(t){function e(e,n,i,o){var a;"number"==typeof n&&(i.duration=n,n=i,i=null);var c,h,l,d,f,p,g,m,y=(a=t.call(this,o?n:qt(n))||this).vars,v=y.duration,_=y.delay,w=y.immediateRender,T=y.stagger,b=y.overwrite,E=y.keyframes,I=y.defaults,S=y.scrollTrigger,k=y.yoyoEase,C=n.parent||u,A=(tt(e)||Z(e)?W(e[0]):"length"in n)?[e]:ye(e);if(a._targets=A.length?kt(A):dt("GSAP target "+e+" not found. https://greensock.com",!M.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=b,E||T||J(v)||J(_)){if(n=a.vars,(c=a.timeline=new en({data:"nested",defaults:I||{},targets:C&&"nested"===C.data?C.vars.targets:A})).kill(),c.parent=c._dp=r(a),c._start=0,T||J(v)||J(_)){if(d=A.length,g=T&&we(T),Q(T))for(f in T)~ln.indexOf(f)&&(m||(m={}),m[f]=T[f]);for(h=0;h<d;h++)(l=jt(n,dn)).stagger=0,k&&(l.yoyoEase=k),m&&Vt(l,m),p=A[h],l.duration=+hn(v,r(a),h,p,A),l.delay=(+hn(_,r(a),h,p,A)||0)-a._delay,!T&&1===d&&l.delay&&(a._delay=_=l.delay,a._start+=_,l.delay=0),c.to(p,l,g?g(h,p,A):0),c._ease=qe.none;c.duration()?v=_=0:a.timeline=0}else if(E){qt(Ut(c.vars.defaults,{ease:"none"})),c._ease=Ge(E.ease||n.ease||"none");var D,x,R,N=0;if(tt(E))E.forEach((function(t){return c.to(A,t,">")})),c.duration();else{for(f in l={},E)"ease"===f||"easeEach"===f||cn(f,E[f],l,E.easeEach);for(f in l)for(D=l[f].sort((function(t,e){return t.t-e.t})),N=0,h=0;h<D.length;h++)(R={ease:(x=D[h]).e,duration:(x.t-(h?D[h-1].t:0))/100*v})[f]=x.v,c.to(A,R,N),N+=R.duration;c.duration()<v&&c.to({},{duration:v-c.duration()})}}v||a.duration(v=c.duration())}else a.timeline=0;return!0!==b||s||(nn=r(a),u.killTweensOf(A),nn=0),ne(C,r(a),i),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(w||!v&&!E&&a._start===Rt(C._time)&&Y(w)&&Qt(r(a))&&"nested"!==C.data)&&(a._tTime=-1e-8,a.render(Math.max(0,-_)||0)),S&&re(r(a),S),a}i(e,t);var n=e.prototype;return n.render=function(t,e,n){var r,i,s,a,u,c,h,l,d,f=this._time,p=this._tDur,g=this._dur,m=t<0,y=t>p-U&&!m?p:t<U?0:t;if(g){if(y!==this._tTime||!t||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m){if(r=y,l=this.timeline,this._repeat){if(a=g+this._rDelay,this._repeat<-1&&m)return this.totalTime(100*a+t,e,n);if(r=Rt(y%a),y===p?(s=this._repeat,r=g):((s=~~(y/a))&&s===y/a&&(r=g,s--),r>g&&(r=g)),(c=this._yoyo&&1&s)&&(d=this._yEase,r=g-r),u=Xt(this._tTime,a),r===f&&!n&&this._initted)return this._tTime=y,this;s!==u&&(l&&this._yEase&&We(l,c),!this.vars.repeatRefresh||c||this._lock||(this._lock=n=1,this.render(Rt(a*s),!0).invalidate()._lock=0))}if(!this._initted){if(ie(this,m?t:r,n,e,y))return this._tTime=0,this;if(f!==this._time)return this;if(g!==this._dur)return this.render(t,e,n)}if(this._tTime=y,this._time=r,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(d||this._ease)(r/g),this._from&&(this.ratio=h=1-h),r&&!f&&!e&&(Ae(this,"onStart"),this._tTime!==y))return this;for(i=this._pt;i;)i.r(h,i.d),i=i._next;l&&l.render(t<0?t:!r&&c?-1e-8:l._dur*l._ease(r/this._dur),e,n)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(m&&Gt(this,t,0,n),Ae(this,"onUpdate")),this._repeat&&s!==u&&this.vars.onRepeat&&!e&&this.parent&&Ae(this,"onRepeat"),y!==this._tDur&&y||this._tTime!==y||(m&&!this._onUpdate&&Gt(this,t,0,!0),(t||!g)&&(y===this._tDur&&this._ts>0||!y&&this._ts<0)&&Kt(this,1),e||m&&!f||!(y||f||c)||(Ae(this,y===p?"onComplete":"onReverseComplete",!0),this._prom&&!(y<p&&this.timeScale()>0)&&this._prom()))}}else!function(t,e,n,r){var i,s,a,u=t.ratio,c=e<0||!e&&(!t._start&&se(t)&&(t._initted||!oe(t))||(t._ts<0||t._dp._ts<0)&&!oe(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=fe(0,t._tDur,e),s=Xt(l,h),t._yoyo&&1&s&&(c=1-c),s!==Xt(t._tTime,h)&&(u=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==u||o||r||t._zTime===U||!e&&t._zTime){if(!t._initted&&ie(t,e,r,n,l))return;for(a=t._zTime,t._zTime=e||(n?U:0),n||(n=e&&!a),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=l,i=t._pt;i;)i.r(c,i.d),i=i._next;e<0&&Gt(t,e,0,!0),t._onUpdate&&!n&&Ae(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Ae(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===c&&(c&&Kt(t,1),n||o||(Ae(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,n);return this},n.targets=function(){return this._targets},n.invalidate=function(e){return(!e||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(e),t.prototype.invalidate.call(this,e)},n.resetTo=function(t,e,n,r){g||Be.wake(),this._ts||this.play();var i=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return this._initted||un(this,i),function(t,e,n,r,i,s,o){var a,u,c,h,l=(t._pt&&t._ptCache||(t._ptCache={}))[e];if(!l)for(l=t._ptCache[e]=[],c=t._ptLookup,h=t._targets.length;h--;){if((a=c[h][e])&&a.d&&a.d._pt)for(a=a.d._pt;a&&a.p!==e&&a.fp!==e;)a=a._next;if(!a)return rn=1,t.vars[e]="+=0",un(t,o),rn=0,1;l.push(a)}for(h=l.length;h--;)(a=(u=l[h])._pt||u).s=!r&&0!==r||i?a.s+(r||0)+s*a.c:r,a.c=n-a.s,u.e&&(u.e=xt(n)+pe(u.e)),u.b&&(u.b=a.s+pe(u.b))}(this,t,e,n,r,this._ease(i/this._dur),i)?this.resetTo(t,e,n,r):(te(this,0),this.parent||zt(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?De(this):this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,nn&&!0!==nn.vars.overwrite)._first||De(this),this.parent&&n!==this.timeline.totalDuration()&&ae(this,this._dur*this.timeline._tDur/n,0,1),this}var r,i,s,o,a,u,c,h=this._targets,l=t?ye(t):h,d=this._ptLookup,f=this._pt;if((!e||"all"===e)&&function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0}(h,l))return"all"===e&&(this._pt=0),De(this);for(r=this._op=this._op||[],"all"!==e&&(K(e)&&(a={},Dt(e,(function(t){return a[t]=1})),e=a),e=function(t,e){var n,r,i,s,o=t[0]?Ct(t[0]).harness:0,a=o&&o.aliases;if(!a)return e;for(r in n=Vt({},e),a)if(r in n)for(i=(s=a[r].split(",")).length;i--;)n[s[i]]=n[r];return n}(h,e)),c=h.length;c--;)if(~l.indexOf(h[c]))for(a in i=d[c],"all"===e?(r[c]=e,o=i,s={}):(s=r[c]=r[c]||{},o=e),o)(u=i&&i[a])&&("kill"in u.d&&!0!==u.d.kill(a)||Ht(this,u,"_pt"),delete i[a]),"all"!==s&&(s[a]=1);return this._initted&&!this._pt&&f&&De(this),this},e.to=function(t,n){return new e(t,n,arguments[2])},e.from=function(t,e){return le(1,arguments)},e.delayedCall=function(t,n,r,i){return new e(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},e.fromTo=function(t,e,n){return le(2,arguments)},e.set=function(t,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new e(t,n)},e.killTweensOf=function(t,e,n){return u.killTweensOf(t,e,n)},e}(tn);Ut(fn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Dt("staggerTo,staggerFrom,staggerFromTo",(function(t){fn[t]=function(){var e=new en,n=ge.call(arguments,0);return n.splice("staggerFromTo"===t?5:4,0,0),e[t].apply(e,n)}}));var pn=function(t,e,n){return t[e]=n},gn=function(t,e,n){return t[e](n)},mn=function(t,e,n,r){return t[e](r.fp,n)},yn=function(t,e,n){return t.setAttribute(e,n)},vn=function(t,e){return $(t[e])?gn:G(t[e])&&t.setAttribute?yn:pn},_n=function(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},wn=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Tn=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(1===t&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round(1e4*(n.s+n.c*t))/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},bn=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},En=function(t,e,n,r){for(var i,s=this._pt;s;)i=s._next,s.p===r&&s.modifier(t,e,n),s=i},In=function(t){for(var e,n,r=this._pt;r;)n=r._next,r.p===t&&!r.op||r.op===t?Ht(this,r,"_pt"):r.dep||(e=1),r=n;return!e},Sn=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},kn=function(t){for(var e,n,r,i,s=t._pt;s;){for(e=s._next,n=r;n&&n.pr>s.pr;)n=n._next;(s._prev=n?n._prev:i)?s._prev._next=s:r=s,(s._next=n)?n._prev=s:i=s,s=e}t._pt=r},Cn=function(){function t(t,e,n,r,i,s,o,a,u){this.t=e,this.s=r,this.c=i,this.p=n,this.r=s||_n,this.d=o||this,this.set=a||pn,this.pr=u||0,this._next=t,t&&(t._prev=this)}return t.prototype.modifier=function(t,e,n){this.mSet=this.mSet||this.set,this.set=Sn,this.m=t,this.mt=n,this.tween=e},t}();Dt(St+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",(function(t){return vt[t]=1})),ut.TweenMax=ut.TweenLite=fn,ut.TimelineLite=ut.TimelineMax=en,u=new en({sortChildren:!1,defaults:P,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),M.stringFilter=Ve;var An=[],Dn={},xn=[],Rn=0,Nn=function(t){return(Dn[t]||xn).map((function(t){return t()}))},On=function(){var t=Date.now(),e=[];t-Rn>2&&(Nn("matchMediaInit"),An.forEach((function(t){var n,r,i,s,o=t.queries,a=t.conditions;for(r in o)(n=c.matchMedia(o[r]).matches)&&(i=1),n!==a[r]&&(a[r]=n,s=1);s&&(t.revert(),i&&e.push(t))})),Nn("matchMediaRevert"),e.forEach((function(t){return t.onMatch(t)})),Rn=t,Nn("matchMedia"))},Ln=function(){function t(t,e){this.selector=e&&ve(e),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=t.prototype;return e.add=function(t,e,n){$(t)&&(n=e,e=t,t=$);var r=this,i=function(){var t,i=a,s=r.selector;return i&&i!==r&&i.data.push(r),n&&(r.selector=ve(n)),a=r,t=e.apply(r,arguments),$(t)&&r._r.push(t),a=i,r.selector=s,r.isReverted=!1,t};return r.last=i,t===$?i(r):t?r[t]=i:i},e.ignore=function(t){var e=a;a=null,t(this),a=e},e.getTweens=function(){var e=[];return this.data.forEach((function(n){return n instanceof t?e.push.apply(e,n.getTweens()):n instanceof fn&&!(n.parent&&"nested"===n.parent.data)&&e.push(n)})),e},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,e){var n=this;if(t){var r=this.getTweens();this.data.forEach((function(t){"isFlip"===t.data&&(t.revert(),t.getChildren(!0,!0,!1).forEach((function(t){return r.splice(r.indexOf(t),1)})))})),r.map((function(t){return{g:t.globalTime(0),t:t}})).sort((function(t,e){return e.g-t.g||-1})).forEach((function(e){return e.t.revert(t)})),this.data.forEach((function(e){return!(e instanceof tn)&&e.revert&&e.revert(t)})),this._r.forEach((function(e){return e(t,n)})),this.isReverted=!0}else this.data.forEach((function(t){return t.kill&&t.kill()}));if(this.clear(),e){var i=An.indexOf(this);~i&&An.splice(i,1)}},e.revert=function(t){this.kill(t||{})},t}(),Mn=function(){function t(t){this.contexts=[],this.scope=t}var e=t.prototype;return e.add=function(t,e,n){Q(t)||(t={matches:t});var r,i,s,o=new Ln(0,n||this.scope),a=o.conditions={};for(i in this.contexts.push(o),e=o.add("onMatch",e),o.queries=t,t)"all"===i?s=1:(r=c.matchMedia(t[i]))&&(An.indexOf(o)<0&&An.push(o),(a[i]=r.matches)&&(s=1),r.addListener?r.addListener(On):r.addEventListener("change",On));return s&&e(o),this},e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach((function(e){return e.kill(t,!0)}))},t}(),Pn={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach((function(t){return xe(t)}))},timeline:function(t){return new en(t)},getTweensOf:function(t,e){return u.getTweensOf(t,e)},getProperty:function(t,e,n,r){K(t)&&(t=ye(t)[0]);var i=Ct(t||{}).get,s=n?Ft:Pt;return"native"===n&&(n=""),t?e?s((Tt[e]&&Tt[e].get||i)(t,e,n,r)):function(e,n,r){return s((Tt[e]&&Tt[e].get||i)(t,e,n,r))}:t},quickSetter:function(t,e,n){if((t=ye(t)).length>1){var r=t.map((function(t){return Vn.quickSetter(t,e,n)})),i=r.length;return function(t){for(var e=i;e--;)r[e](t)}}t=t[0]||{};var s=Tt[e],o=Ct(t),a=o.harness&&(o.harness.aliases||{})[e]||e,u=s?function(e){var r=new s;p._pt=0,r.init(t,n?e+n:e,p,0,[t]),r.render(1,r),p._pt&&bn(1,p)}:o.set(t,a);return s?u:function(e){return u(t,a,n?e+n:e,o,1)}},quickTo:function(t,e,n){var r,i=Vn.to(t,Vt(((r={})[e]="+=0.1",r.paused=!0,r),n||{})),s=function(t,n,r){return i.resetTo(e,t,n,r)};return s.tween=i,s},isTweening:function(t){return u.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ge(t.ease,P.ease)),Bt(P,t||{})},config:function(t){return Bt(M,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,i=t.defaults,s=t.extendTimeline;(r||"").split(",").forEach((function(t){return t&&!Tt[t]&&!ut[t]&&dt(e+" effect requires "+t+" plugin.")})),bt[e]=function(t,e,r){return n(ye(t),Ut(e||{},i),r)},s&&(en.prototype[e]=function(t,n,r){return this.add(bt[e](t,Q(n)?n:(r=n)&&{},this),r)})},registerEase:function(t,e){qe[t]=Ge(e)},parseEase:function(t,e){return arguments.length?Ge(t,e):qe},getById:function(t){return u.getById(t)},exportRoot:function(t,e){void 0===t&&(t={});var n,r,i=new en(t);for(i.smoothChildTiming=Y(t.smoothChildTiming),u.remove(i),i._dp=0,i._time=i._tTime=u._time,n=u._first;n;)r=n._next,!e&&!n._dur&&n instanceof fn&&n.vars.onComplete===n._targets[0]||ne(i,n,n._start-n._delay),n=r;return ne(u,i,0),i},context:function(t,e){return t?new Ln(t,e):a},matchMedia:function(t){return new Mn(t)},matchMediaRefresh:function(){return An.forEach((function(t){var e,n,r=t.conditions;for(n in r)r[n]&&(r[n]=!1,e=1);e&&t.revert()}))||On()},addEventListener:function(t,e){var n=Dn[t]||(Dn[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Dn[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:function t(e,n,r){var i=n-e;return tt(e)?Ie(e,t(0,e.length),n):de(r,(function(t){return(i+(t-e)%i)%i+e}))},wrapYoyo:function t(e,n,r){var i=n-e,s=2*i;return tt(e)?Ie(e,t(0,e.length-1),n):de(r,(function(t){return e+((t=(s+(t-e)%s)%s||0)>i?s-t:t)}))},distribute:we,random:Ee,snap:be,normalize:function(t,e,n){return ke(t,e,0,1,n)},getUnit:pe,clamp:function(t,e,n){return de(n,(function(n){return fe(t,e,n)}))},splitColor:Le,toArray:ye,selector:ve,mapRange:ke,pipe:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduce((function(t,e){return e(t)}),t)}},unitize:function(t,e){return function(n){return t(parseFloat(n))+(e||pe(n))}},interpolate:function t(e,n,r,i){var s=isNaN(e+n)?0:function(t){return(1-t)*e+t*n};if(!s){var o,a,u,c,h,l=K(e),d={};if(!0===r&&(i=1)&&(r=null),l)e={p:e},n={p:n};else if(tt(e)&&!tt(n)){for(u=[],c=e.length,h=c-2,a=1;a<c;a++)u.push(t(e[a-1],e[a]));c--,s=function(t){t*=c;var e=Math.min(h,~~t);return u[e](t-e)},r=n}else i||(e=Vt(tt(e)?[]:{},e));if(!u){for(o in n)on.call(d,e,o,"get",n[o]);s=function(t){return bn(t,d)||(l?e.p:e)}}}return de(r,s)},shuffle:_e},install:ht,effects:bt,ticker:Be,updateRoot:en.updateRoot,plugins:Tt,globalTimeline:u,core:{PropTween:Cn,globals:ft,Tween:fn,Timeline:en,Animation:tn,getCache:Ct,_removeLinkedListItem:Ht,reverting:function(){return o},context:function(t){return t&&a&&(a.data.push(t),t._ctx=a),a},suppressOverwrites:function(t){return s=t}}};Dt("to,from,fromTo,delayedCall,set,killTweensOf",(function(t){return Pn[t]=fn[t]})),Be.add(en.updateRoot),p=Pn.to({},{duration:0});var Fn=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Un=function(t,e){return{name:t,rawVars:1,init:function(t,n,r){r._onInit=function(t){var r,i;if(K(n)&&(r={},Dt(n,(function(t){return r[t]=1})),n=r),e){for(i in r={},n)r[i]=e(n[i]);n=r}!function(t,e){var n,r,i,s=t._targets;for(n in e)for(r=s.length;r--;)(i=t._ptLookup[r][n])&&(i=i.d)&&(i._pt&&(i=Fn(i,n)),i&&i.modifier&&i.modifier(e[n],t,s[r],n))}(t,n)}}}},Vn=Pn.registerPlugin({name:"attr",init:function(t,e,n,r,i){var s,o,a;for(s in this.tween=n,e)a=t.getAttribute(s)||"",(o=this.add(t,"setAttribute",(a||0)+"",e[s],r,i,0,0,s)).op=s,o.b=a,this._props.push(s)},render:function(t,e){for(var n=e._pt;n;)o?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Un("roundProps",Te),Un("modifiers"),Un("snap",be))||Pn;fn.version=en.version=Vn.version="3.11.3",d=1,X()&&je();qe.Power0,qe.Power1,qe.Power2,qe.Power3,qe.Power4,qe.Linear,qe.Quad,qe.Cubic,qe.Quart,qe.Quint,qe.Strong,qe.Elastic,qe.Back,qe.SteppedEase,qe.Bounce,qe.Sine,qe.Expo,qe.Circ})),i.register("cEVdW",(function(e,n){t(e.exports,"CSSPlugin",(function(){return St}));var r,s,o,a,u,c,h,l,d=i("gMDMw"),f={},p=180/Math.PI,g=Math.PI/180,m=Math.atan2,y=/([A-Z])/g,v=/(left|right|width|margin|padding|x)/i,_=/[\s,\(]\S/,w={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},T=function(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)},b=function(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)},E=function(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)},I=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},S=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},k=function(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)},C=function(t,e,n){return t.style[e]=n},A=function(t,e,n){return t.style.setProperty(e,n)},D=function(t,e,n){return t._gsap[e]=n},x=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},R=function(t,e,n,r,i){var s=t._gsap;s.scaleX=s.scaleY=n,s.renderTransform(i,s)},N=function(t,e,n,r,i){var s=t._gsap;s[e]=n,s.renderTransform(i,s)},O="transform",L=O+"Origin",M=function(t,e){var n=this,r=this.target,i=r.style;if(t in f){if(this.tfm=this.tfm||{},"transform"!==t&&(~(t=w[t]||t).indexOf(",")?t.split(",").forEach((function(t){return n.tfm[t]=Z(r,t)})):this.tfm[t]=r._gsap.x?r._gsap[t]:Z(r,t)),this.props.indexOf(O)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(L,e,"")),t=O}(i||e)&&this.props.push(t,e,i[t])},P=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},F=function(){var t,e,n=this.props,r=this.target,i=r.style,s=r._gsap;for(t=0;t<n.length;t+=3)n[t+1]?r[n[t]]=n[t+2]:n[t+2]?i[n[t]]=n[t+2]:i.removeProperty(n[t].replace(y,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)s[e]=this.tfm[e];s.svg&&(s.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),!(t=h())||t.isStart||i[O]||(P(i),s.uncache=1)}},U=function(t,e){var n={target:t,props:[],revert:F,save:M};return e&&e.split(",").forEach((function(t){return n.save(t)})),n},V=function(t,e){var n=s.createElementNS?s.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):s.createElement(t);return n.style?n:s.createElement(t)},B=function t(e,n,r){var i=getComputedStyle(e);return i[n]||i.getPropertyValue(n.replace(y,"-$1").toLowerCase())||i.getPropertyValue(n)||!r&&t(e,q(n)||n,1)||""},j="O,Moz,ms,Ms,Webkit".split(","),q=function(t,e,n){var r=(e||u).style,i=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);i--&&!(j[i]+t in r););return i<0?null:(3===i?"ms":i>=0?j[i]:"")+t},z=function(){"undefined"!=typeof window&&window.document&&(r=window,s=r.document,o=s.documentElement,u=V("div")||{style:{}},V("div"),O=q(O),L=O+"Origin",u.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",l=!!q("perspective"),h=d.gsap.core.reverting,a=1)},H=function t(e){var n,r=V("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,s=this.nextSibling,a=this.style.cssText;if(o.appendChild(r),r.appendChild(this),this.style.display="block",e)try{n=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=t}catch(t){}else this._gsapBBox&&(n=this._gsapBBox());return i&&(s?i.insertBefore(this,s):i.appendChild(this)),o.removeChild(r),this.style.cssText=a,n},K=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},$=function(t){var e;try{e=t.getBBox()}catch(n){e=H.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===H||(e=H.call(t,!0)),!e||e.width||e.x||e.y?e:{x:+K(t,["x","cx","x1"])||0,y:+K(t,["y","cy","y1"])||0,width:0,height:0}},W=function(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!$(t))},G=function(t,e){if(e){var n=t.style;e in f&&e!==L&&(e=O),n.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),n.removeProperty(e.replace(y,"-$1").toLowerCase())):n.removeAttribute(e)}},Q=function(t,e,n,r,i,s){var o=new(0,d.PropTween)(t._pt,e,n,0,1,s?k:S);return t._pt=o,o.b=r,o.e=i,t._props.push(n),o},Y={deg:1,rad:1,turn:1},X={grid:1,flex:1},J=function t(e,n,r,i){var o,a,c,h,l=parseFloat(r)||0,p=(r+"").trim().substr((l+"").length)||"px",g=u.style,m=v.test(n),y="svg"===e.tagName.toLowerCase(),_=(y?"client":"offset")+(m?"Width":"Height"),w=100,T="px"===i,b="%"===i;return i===p||!l||Y[i]||Y[p]?l:("px"!==p&&!T&&(l=t(e,n,r,"px")),h=e.getCTM&&W(e),!b&&"%"!==p||!f[n]&&!~n.indexOf("adius")?(g[m?"width":"height"]=w+(T?p:i),a=~n.indexOf("adius")||"em"===i&&e.appendChild&&!y?e:e.parentNode,h&&(a=(e.ownerSVGElement||{}).parentNode),a&&a!==s&&a.appendChild||(a=s.body),(c=a._gsap)&&b&&c.width&&m&&c.time===d._ticker.time&&!c.uncache?(0,d._round)(l/c.width*w):((b||"%"===p)&&!X[B(a,"display")]&&(g.position=B(e,"position")),a===e&&(g.position="static"),a.appendChild(u),o=u[_],a.removeChild(u),g.position="absolute",m&&b&&((c=(0,d._getCache)(a)).time=d._ticker.time,c.width=a[_]),(0,d._round)(T?o*l/w:o&&l?w/o*l:0))):(o=h?e.getBBox()[m?"width":"height"]:e[_],(0,d._round)(b?l/o*w:l/100*o)))},Z=function(t,e,n,r){var i;return a||z(),e in w&&"transform"!==e&&~(e=w[e]).indexOf(",")&&(e=e.split(",")[0]),f[e]&&"transform"!==e?(i=ht(t,r),i="transformOrigin"!==e?i[e]:i.svg?i.origin:lt(B(t,L))+" "+i.zOrigin+"px"):(!(i=t.style[e])||"auto"===i||r||~(i+"").indexOf("calc("))&&(i=rt[e]&&rt[e](t,e,n)||B(t,e)||(0,d._getProperty)(t,e)||("opacity"===e?1:0)),n&&!~(i+"").trim().indexOf(" ")?J(t,e,i,n)+n:i},tt=function(t,e,n,r){if(!n||"none"===n){var i=q(e,t,1),s=i&&B(t,i,1);s&&s!==n?(e=i,n=s):"borderColor"===e&&(n=B(t,"borderTopColor"))}var o,a,u,c,h,l,f,p,g,m,y,v=new(0,d.PropTween)(this._pt,t.style,e,0,1,d._renderComplexString),_=0,w=0;if(v.b=n,v.e=r,n+="","auto"===(r+="")&&(t.style[e]=r,r=B(t,e)||r,t.style[e]=n),o=[n,r],(0,d._colorStringFilter)(o),r=o[1],u=(n=o[0]).match(d._numWithUnitExp)||[],(r.match(d._numWithUnitExp)||[]).length){for(;a=d._numWithUnitExp.exec(r);)f=a[0],g=r.substring(_,a.index),h?h=(h+1)%5:"rgba("!==g.substr(-5)&&"hsla("!==g.substr(-5)||(h=1),f!==(l=u[w++]||"")&&(c=parseFloat(l)||0,y=l.substr((c+"").length),"="===f.charAt(1)&&(f=(0,d._parseRelative)(c,f)+y),p=parseFloat(f),m=f.substr((p+"").length),_=d._numWithUnitExp.lastIndex-m.length,m||(m=m||d._config.units[e]||y,_===r.length&&(r+=m,v.e+=m)),y!==m&&(c=J(t,e,l,m)||0),v._pt={_next:v._pt,p:g||1===w?g:",",s:c,c:p-c,m:h&&h<4||"zIndex"===e?Math.round:0});v.c=_<r.length?r.substring(_,r.length):""}else v.r="display"===e&&"none"===r?k:S;return d._relExp.test(r)&&(v.e=0),this._pt=v,v},et={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},nt=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n,r,i,s=e.t,o=s.style,a=e.u,u=s._gsap;if("all"===a||!0===a)o.cssText="",r=1;else for(i=(a=a.split(",")).length;--i>-1;)n=a[i],f[n]&&(r=1,n="transformOrigin"===n?L:O),G(s,n);r&&(G(s,O),u&&(u.svg&&s.removeAttribute("transform"),ht(s,1),u.uncache=1,P(o)))}},rt={clearProps:function(t,e,n,r,i){if("isFromStart"!==i.data){var s=t._pt=new(0,d.PropTween)(t._pt,e,n,0,0,nt);return s.u=r,s.pr=-10,s.tween=i,t._props.push(n),1}}},it=[1,0,0,1,0,0],st={},ot=function(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t},at=function(t){var e=B(t,O);return ot(e)?it:e.substr(7).match(d._numExp).map(d._round)},ut=function(t,e){var n,r,i,s,a=t._gsap||(0,d._getCache)(t),u=t.style,c=at(t);return a.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(c=[(i=t.transform.baseVal.consolidate().matrix).a,i.b,i.c,i.d,i.e,i.f]).join(",")?it:c:(c!==it||t.offsetParent||t===o||a.svg||(i=u.display,u.display="block",(n=t.parentNode)&&t.offsetParent||(s=1,r=t.nextElementSibling,o.appendChild(t)),c=at(t),i?u.display=i:G(t,"display"),s&&(r?n.insertBefore(t,r):n?n.appendChild(t):o.removeChild(t))),e&&c.length>6?[c[0],c[1],c[4],c[5],c[12],c[13]]:c)},ct=function(t,e,n,r,i,s){var o,a,u,c=t._gsap,h=i||ut(t,!0),l=c.xOrigin||0,d=c.yOrigin||0,f=c.xOffset||0,p=c.yOffset||0,g=h[0],m=h[1],y=h[2],v=h[3],_=h[4],w=h[5],T=e.split(" "),b=parseFloat(T[0])||0,E=parseFloat(T[1])||0;n?h!==it&&(a=g*v-m*y)&&(u=b*(-m/a)+E*(g/a)-(g*w-m*_)/a,b=b*(v/a)+E*(-y/a)+(y*w-v*_)/a,E=u):(b=(o=$(t)).x+(~T[0].indexOf("%")?b/100*o.width:b),E=o.y+(~(T[1]||T[0]).indexOf("%")?E/100*o.height:E)),r||!1!==r&&c.smooth?(_=b-l,w=E-d,c.xOffset=f+(_*g+w*y)-_,c.yOffset=p+(_*m+w*v)-w):c.xOffset=c.yOffset=0,c.xOrigin=b,c.yOrigin=E,c.smooth=!!r,c.origin=e,c.originIsAbsolute=!!n,t.style[L]="0px 0px",s&&(Q(s,c,"xOrigin",l,b),Q(s,c,"yOrigin",d,E),Q(s,c,"xOffset",f,c.xOffset),Q(s,c,"yOffset",p,c.yOffset)),t.setAttribute("data-svg-origin",b+" "+E)},ht=function(t,e){var n=t._gsap||new(0,d.GSCache)(t);if("x"in n&&!e&&!n.uncache)return n;var r,i,s,o,a,u,c,h,f,y,v,_,w,T,b,E,I,S,k,C,A,D,x,R,N,M,P,F,U,V,j,q,z=t.style,H=n.scaleX<0,K="px",$="deg",G=getComputedStyle(t),Q=B(t,L)||"0";return r=i=s=u=c=h=f=y=v=0,o=a=1,n.svg=!(!t.getCTM||!W(t)),G.translate&&("none"===G.translate&&"none"===G.scale&&"none"===G.rotate||(z[O]=("none"!==G.translate?"translate3d("+(G.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==G.rotate?"rotate("+G.rotate+") ":"")+("none"!==G.scale?"scale("+G.scale.split(" ").join(",")+") ":"")+("none"!==G[O]?G[O]:"")),z.scale=z.rotate=z.translate="none"),T=ut(t,n.svg),n.svg&&(n.uncache?(N=t.getBBox(),Q=n.xOrigin-N.x+"px "+(n.yOrigin-N.y)+"px",R=""):R=!e&&t.getAttribute("data-svg-origin"),ct(t,R||Q,!!R||n.originIsAbsolute,!1!==n.smooth,T)),_=n.xOrigin||0,w=n.yOrigin||0,T!==it&&(S=T[0],k=T[1],C=T[2],A=T[3],r=D=T[4],i=x=T[5],6===T.length?(o=Math.sqrt(S*S+k*k),a=Math.sqrt(A*A+C*C),u=S||k?m(k,S)*p:0,(f=C||A?m(C,A)*p+u:0)&&(a*=Math.abs(Math.cos(f*g))),n.svg&&(r-=_-(_*S+w*C),i-=w-(_*k+w*A))):(q=T[6],V=T[7],P=T[8],F=T[9],U=T[10],j=T[11],r=T[12],i=T[13],s=T[14],c=(b=m(q,U))*p,b&&(R=D*(E=Math.cos(-b))+P*(I=Math.sin(-b)),N=x*E+F*I,M=q*E+U*I,P=D*-I+P*E,F=x*-I+F*E,U=q*-I+U*E,j=V*-I+j*E,D=R,x=N,q=M),h=(b=m(-C,U))*p,b&&(E=Math.cos(-b),j=A*(I=Math.sin(-b))+j*E,S=R=S*E-P*I,k=N=k*E-F*I,C=M=C*E-U*I),u=(b=m(k,S))*p,b&&(R=S*(E=Math.cos(b))+k*(I=Math.sin(b)),N=D*E+x*I,k=k*E-S*I,x=x*E-D*I,S=R,D=N),c&&Math.abs(c)+Math.abs(u)>359.9&&(c=u=0,h=180-h),o=(0,d._round)(Math.sqrt(S*S+k*k+C*C)),a=(0,d._round)(Math.sqrt(x*x+q*q)),b=m(D,x),f=Math.abs(b)>2e-4?b*p:0,v=j?1/(j<0?-j:j):0),n.svg&&(R=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!ot(B(t,O)),R&&t.setAttribute("transform",R))),Math.abs(f)>90&&Math.abs(f)<270&&(H?(o*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(a*=-1,f+=f<=0?180:-180)),e=e||n.uncache,n.x=r-((n.xPercent=r&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-r)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+K,n.y=i-((n.yPercent=i&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-i)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+K,n.z=s+K,n.scaleX=(0,d._round)(o),n.scaleY=(0,d._round)(a),n.rotation=(0,d._round)(u)+$,n.rotationX=(0,d._round)(c)+$,n.rotationY=(0,d._round)(h)+$,n.skewX=f+$,n.skewY=y+$,n.transformPerspective=v+K,(n.zOrigin=parseFloat(Q.split(" ")[2])||0)&&(z[L]=lt(Q)),n.xOffset=n.yOffset=0,n.force3D=d._config.force3D,n.renderTransform=n.svg?vt:l?yt:ft,n.uncache=0,n},lt=function(t){return(t=t.split(" "))[0]+" "+t[1]},dt=function(t,e,n){var r=(0,d.getUnit)(e);return(0,d._round)(parseFloat(e)+parseFloat(J(t,"x",n+"px",r)))+r},ft=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,yt(t,e)},pt="0deg",gt="0px",mt=") ",yt=function(t,e){var n=e||this,r=n.xPercent,i=n.yPercent,s=n.x,o=n.y,a=n.z,u=n.rotation,c=n.rotationY,h=n.rotationX,l=n.skewX,d=n.skewY,f=n.scaleX,p=n.scaleY,m=n.transformPerspective,y=n.force3D,v=n.target,_=n.zOrigin,w="",T="auto"===y&&t&&1!==t||!0===y;if(_&&(h!==pt||c!==pt)){var b,E=parseFloat(c)*g,I=Math.sin(E),S=Math.cos(E);E=parseFloat(h)*g,b=Math.cos(E),s=dt(v,s,I*b*-_),o=dt(v,o,-Math.sin(E)*-_),a=dt(v,a,S*b*-_+_)}m!==gt&&(w+="perspective("+m+mt),(r||i)&&(w+="translate("+r+"%, "+i+"%) "),(T||s!==gt||o!==gt||a!==gt)&&(w+=a!==gt||T?"translate3d("+s+", "+o+", "+a+") ":"translate("+s+", "+o+mt),u!==pt&&(w+="rotate("+u+mt),c!==pt&&(w+="rotateY("+c+mt),h!==pt&&(w+="rotateX("+h+mt),l===pt&&d===pt||(w+="skew("+l+", "+d+mt),1===f&&1===p||(w+="scale("+f+", "+p+mt),v.style[O]=w||"translate(0, 0)"},vt=function(t,e){var n,r,i,s,o,a=e||this,u=a.xPercent,c=a.yPercent,h=a.x,l=a.y,f=a.rotation,p=a.skewX,m=a.skewY,y=a.scaleX,v=a.scaleY,_=a.target,w=a.xOrigin,T=a.yOrigin,b=a.xOffset,E=a.yOffset,I=a.forceCSS,S=parseFloat(h),k=parseFloat(l);f=parseFloat(f),p=parseFloat(p),(m=parseFloat(m))&&(p+=m=parseFloat(m),f+=m),f||p?(f*=g,p*=g,n=Math.cos(f)*y,r=Math.sin(f)*y,i=Math.sin(f-p)*-v,s=Math.cos(f-p)*v,p&&(m*=g,o=Math.tan(p-m),i*=o=Math.sqrt(1+o*o),s*=o,m&&(o=Math.tan(m),n*=o=Math.sqrt(1+o*o),r*=o)),n=(0,d._round)(n),r=(0,d._round)(r),i=(0,d._round)(i),s=(0,d._round)(s)):(n=y,s=v,r=i=0),(S&&!~(h+"").indexOf("px")||k&&!~(l+"").indexOf("px"))&&(S=J(_,"x",h,"px"),k=J(_,"y",l,"px")),(w||T||b||E)&&(S=(0,d._round)(S+w-(w*n+T*i)+b),k=(0,d._round)(k+T-(w*r+T*s)+E)),(u||c)&&(o=_.getBBox(),S=(0,d._round)(S+u/100*o.width),k=(0,d._round)(k+c/100*o.height)),o="matrix("+n+","+r+","+i+","+s+","+S+","+k+")",_.setAttribute("transform",o),I&&(_.style[O]=o)},_t=function(t,e,n,r,i){var s,o,a=360,u=(0,d._isString)(i),c=parseFloat(i)*(u&&~i.indexOf("rad")?p:1)-r,h=r+c+"deg";return u&&("short"===(s=i.split("_")[1])&&(c%=a)!==c%180&&(c+=c<0?a:-360),"cw"===s&&c<0?c=(c+36e9)%a-~~(c/a)*a:"ccw"===s&&c>0&&(c=(c-36e9)%a-~~(c/a)*a)),t._pt=o=new(0,d.PropTween)(t._pt,e,n,r,c,b),o.e=h,o.u="deg",t._props.push(n),o},wt=function(t,e){for(var n in e)t[n]=e[n];return t},Tt=function(t,e,n){var r,i,s,o,a,u,c,h=wt({},n._gsap),l=n.style;for(i in h.svg?(s=n.getAttribute("transform"),n.setAttribute("transform",""),l[O]=e,r=ht(n,1),G(n,O),n.setAttribute("transform",s)):(s=getComputedStyle(n)[O],l[O]=e,r=ht(n,1),l[O]=s),f)(s=h[i])!==(o=r[i])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(i)<0&&(a=(0,d.getUnit)(s)!==(c=(0,d.getUnit)(o))?J(n,i,s,c):parseFloat(s),u=parseFloat(o),t._pt=new(0,d.PropTween)(t._pt,r,i,a,u-a,T),t._pt.u=c||0,t._props.push(i));wt(r,h)};(0,d._forEachName)("padding,margin,Width,Radius",(function(t,e){var n="Top",r="Right",i="Bottom",s="Left",o=(e<3?[n,r,i,s]:[n+s,n+r,i+r,i+s]).map((function(n){return e<2?t+n:"border"+n+t}));rt[e>1?"border"+t:t]=function(t,e,n,r,i){var s,a;if(arguments.length<4)return s=o.map((function(e){return Z(t,e,n)})),5===(a=s.join(" ")).split(s[0]).length?s[0]:a;s=(r+"").split(" "),a={},o.forEach((function(t,e){return a[t]=s[e]=s[e]||s[(e-1)/2|0]})),t.init(e,a,i)}}));var bt,Et,It,St={name:"css",register:z,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,i){var s,o,u,c,h,l,p,g,m,y,v,b,S,k,C,A,D,x,R,N,M=this._props,P=t.style,F=n.vars.startAt;for(p in a||z(),this.styles=this.styles||U(t),A=this.styles.props,this.tween=n,e)if("autoRound"!==p&&(o=e[p],!d._plugins[p]||!(0,d._checkPlugin)(p,e,n,r,t,i)))if(h=typeof o,l=rt[p],"function"===h&&(h=typeof(o=o.call(n,r,t,i))),"string"===h&&~o.indexOf("random(")&&(o=(0,d._replaceRandom)(o)),l)l(this,t,p,o,n)&&(C=1);else if("--"===p.substr(0,2))s=(getComputedStyle(t).getPropertyValue(p)+"").trim(),o+="",d._colorExp.lastIndex=0,d._colorExp.test(s)||(g=(0,d.getUnit)(s),m=(0,d.getUnit)(o)),m?g!==m&&(s=J(t,p,s,m)+m):g&&(o+=g),this.add(P,"setProperty",s,o,r,i,0,0,p),M.push(p),A.push(p,0,P[p]);else if("undefined"!==h){if(F&&p in F?(s="function"==typeof F[p]?F[p].call(n,r,t,i):F[p],(0,d._isString)(s)&&~s.indexOf("random(")&&(s=(0,d._replaceRandom)(s)),(0,d.getUnit)(s+"")||(s+=d._config.units[p]||(0,d.getUnit)(Z(t,p))||""),"="===(s+"").charAt(1)&&(s=Z(t,p))):s=Z(t,p),c=parseFloat(s),(y="string"===h&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),u=parseFloat(o),p in w&&("autoAlpha"===p&&(1===c&&"hidden"===Z(t,"visibility")&&u&&(c=0),A.push("visibility",0,P.visibility),Q(this,P,"visibility",c?"inherit":"hidden",u?"inherit":"hidden",!u)),"scale"!==p&&"transform"!==p&&~(p=w[p]).indexOf(",")&&(p=p.split(",")[0])),v=p in f)if(this.styles.save(p),b||((S=t._gsap).renderTransform&&!e.parseTransform||ht(t,e.parseTransform),k=!1!==e.smoothOrigin&&S.smooth,(b=this._pt=new(0,d.PropTween)(this._pt,P,O,0,1,S.renderTransform,S,0,-1)).dep=1),"scale"===p)this._pt=new(0,d.PropTween)(this._pt,S,"scaleY",c,(y?(0,d._parseRelative)(c,y+u):u)-c||0,T),this._pt.u=0,M.push("scaleY",p),p+="X";else{if("transformOrigin"===p){A.push(L,0,P[L]),x=void 0,R=void 0,N=void 0,x=(D=o).split(" "),R=x[0],N=x[1]||"50%","top"!==R&&"bottom"!==R&&"left"!==N&&"right"!==N||(D=R,R=N,N=D),x[0]=et[R]||R,x[1]=et[N]||N,o=x.join(" "),S.svg?ct(t,o,0,k,0,this):((m=parseFloat(o.split(" ")[2])||0)!==S.zOrigin&&Q(this,S,"zOrigin",S.zOrigin,m),Q(this,P,p,lt(s),lt(o)));continue}if("svgOrigin"===p){ct(t,o,1,k,0,this);continue}if(p in st){_t(this,S,p,c,y?(0,d._parseRelative)(c,y+o):o);continue}if("smoothOrigin"===p){Q(this,S,"smooth",S.smooth,o);continue}if("force3D"===p){S[p]=o;continue}if("transform"===p){Tt(this,o,t);continue}}else p in P||(p=q(p)||p);if(v||(u||0===u)&&(c||0===c)&&!_.test(o)&&p in P)u||(u=0),(g=(s+"").substr((c+"").length))!==(m=(0,d.getUnit)(o)||(p in d._config.units?d._config.units[p]:g))&&(c=J(t,p,s,m)),this._pt=new(0,d.PropTween)(this._pt,v?S:P,p,c,(y?(0,d._parseRelative)(c,y+u):u)-c,v||"px"!==m&&"zIndex"!==p||!1===e.autoRound?T:I),this._pt.u=m||0,g!==m&&"%"!==m&&(this._pt.b=s,this._pt.r=E);else if(p in P)tt.call(this,t,p,s,y?y+o:o);else{if(!(p in t)){(0,d._missingPlugin)(p,o);continue}this.add(t,p,s||t[p],y?y+o:o,r,i)}v||(p in P?A.push(p,0,P[p]):A.push(p,1,s||t[p])),M.push(p)}C&&(0,d._sortPropTweensByPriority)(this)},render:function(t,e){if(e.tween._time||!h())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Z,aliases:w,getSetter:function(t,e,n){var r=w[e];return r&&r.indexOf(",")<0&&(e=r),e in f&&e!==L&&(t._gsap.x||Z(t,"x"))?n&&c===n?"scale"===e?x:D:(c=n||{},"scale"===e?R:N):t.style&&!(0,d._isUndefined)(t.style[e])?C:~e.indexOf("-")?A:(0,d._getSetter)(t,e)},core:{_removeProperty:G,_getMatrix:ut}};d.gsap.utils.checkPrefix=q,d.gsap.core.getStyleSaver=U,bt="x,y,z,scale,scaleX,scaleY,xPercent,yPercent",Et="rotation,rotationX,rotationY,skewX,skewY",It=(0,d._forEachName)(bt+","+Et+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",(function(t){f[t]=1})),(0,d._forEachName)(Et,(function(t){d._config.units[t]="deg",st[t]=1})),w[It[13]]=bt+","+Et,(0,d._forEachName)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",(function(t){var e=t.split(":");w[e[1]]=It[e[0]]})),(0,d._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",(function(t){d._config.units[t]="px"})),d.gsap.registerPlugin(St)})),i.register("7bYU0",(function(t,e){const n=document.querySelector('[data-action="open-modal"]'),r=document.querySelector('[data-action="close-modal"]'),i=document.querySelector(".team-backdrop");document.querySelector("body");function s(){document.body.classList.remove("show-modal"),window.removeEventListener("keydown",o),document.body.style.overflow="auto"}function o(t){"Escape"===t.code&&s()}n.addEventListener("click",(function(){window.addEventListener("keydown",o),document.body.classList.add("show-modal")})),r.addEventListener("click",s),i.addEventListener("click",(function(t){t.currentTarget===t.target&&s()}))}));
//# sourceMappingURL=my-library.4a4d7faa.js.map
