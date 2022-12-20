!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequired7c6=a),a.register("aZhHc",(function(e,t){var n=document.querySelector('[data-action="open-modal"]'),r=document.querySelector('[data-action="close-modal"]'),i=document.querySelector(".team-backdrop");document.querySelector("body");function a(){document.body.classList.remove("show-modal"),window.removeEventListener("keydown",o),document.body.style.overflow="auto"}function o(e){"Escape"===e.code&&a()}n.addEventListener("click",(function(){window.addEventListener("keydown",o),document.body.classList.add("show-modal")})),r.addEventListener("click",a),i.addEventListener("click",(function(e){e.currentTarget===e.target&&a()}))})),a.register("469FY",(function(e,t){a("gQOBw");var n=a("ax7qk"),r=a("iGaYn"),i=document.querySelector("#signin"),o=document.querySelector("#signout"),s=document.querySelector("#googleUser"),u=new(0,r.Firebase);(0,n.v)(r.auth,(function(e){e&&(i.classList.add("signOut"),o.classList.add("signIn"),s.innerHTML='<img class="user-img" src="'.concat(e.photoURL,'">'),s.style.display="block")})),i.addEventListener("click",u.singInWithGoogle),o.addEventListener("click",u.singOutUser)})),a.register("gQOBw",(function(t,n){e(t.exports,"onAuthStateChanged",(function(){return a("ax7qk").v})),e(t.exports,"getAuth",(function(){return a("ax7qk").n})),e(t.exports,"GoogleAuthProvider",(function(){return a("ax7qk").Q})),e(t.exports,"signInWithPopup",(function(){return a("ax7qk").c})),e(t.exports,"signOut",(function(){return a("ax7qk").y})),a("eMcUM")})),a.register("eMcUM",(function(t,n){e(t.exports,"GoogleAuthProvider",(function(){return a("ax7qk").Q})),e(t.exports,"getAuth",(function(){return a("ax7qk").n})),e(t.exports,"onAuthStateChanged",(function(){return a("ax7qk").v})),e(t.exports,"signInWithPopup",(function(){return a("ax7qk").c})),e(t.exports,"signOut",(function(){return a("ax7qk").y})),a("2xDiJ"),a("MjY8E"),a("kZfxc"),a("6ExWU");a("ax7qk")})),a.register("2xDiJ",(function(r,i){e(r.exports,"base64urlEncodeWithoutPadding",(function(){return y})),e(r.exports,"base64Decode",(function(){return m})),e(r.exports,"getUA",(function(){return g})),e(r.exports,"isMobileCordova",(function(){return k})),e(r.exports,"isBrowserExtension",(function(){return w})),e(r.exports,"isReactNative",(function(){return b})),e(r.exports,"isIE",(function(){return x})),e(r.exports,"isSafari",(function(){return E})),e(r.exports,"isIndexedDBAvailable",(function(){return T})),e(r.exports,"validateIndexedDBOpenable",(function(){return I})),e(r.exports,"getDefaultEmulatorHost",(function(){return C})),e(r.exports,"getDefaultEmulatorHostnameAndPort",(function(){return A})),e(r.exports,"getDefaultAppConfig",(function(){return D})),e(r.exports,"getExperimentalSetting",(function(){return N})),e(r.exports,"Deferred",(function(){return O})),e(r.exports,"createMockUserToken",(function(){return R})),e(r.exports,"FirebaseError",(function(){return L})),e(r.exports,"ErrorFactory",(function(){return P})),e(r.exports,"isEmpty",(function(){return F})),e(r.exports,"deepEqual",(function(){return V})),e(r.exports,"querystring",(function(){return q})),e(r.exports,"querystringDecode",(function(){return B})),e(r.exports,"extractQuerystring",(function(){return K})),e(r.exports,"createSubscribe",(function(){return H})),e(r.exports,"getModularInstance",(function(){return G}));var o=a("ds8z5"),s=a("8MBJY"),u=a("a2hTj"),c=a("eYQtU"),l=a("1t1Wn"),h=(a("8nrFW"),a("4c7YB")),f=a("2MbLg"),d=a("6qd2L"),v=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},p={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,h=(3&a)<<4|s>>4,f=(15&s)<<2|c>>6,d=63&c;u||(d=64,o||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(v(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var h=s<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},y=function(e){return function(e){var t=v(e);return p.encodeByteArray(t,!0)}(e).replace(/\./g,"")},m=function(e){try{return p.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function g(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function k(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())}function w(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function b(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function x(){var e=g();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function E(){return!function(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T(){try{return"object"==typeof indexedDB}catch(e){return!1}}function I(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}
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
var _=function(){return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},S=function(){try{return _()||function(){if(void 0!==d&&void 0!==d.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&m(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},C=function(e){var t,n;return null===(n=null===(t=S())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},A=function(e){var t=C(e);if(t){var n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]}},D=function(){var e;return null===(e=S())||void 0===e?void 0:e.config},N=function(e){var t;return null===(t=S())||void 0===t?void 0:t["_".concat(e)]},O=function(){"use strict";function e(){var t=this;n(s)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return n(u)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),e}();
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
function R(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[y(JSON.stringify({alg:"none",type:"JWT"})),y(JSON.stringify(a)),""].join(".")}
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
 */var L=function(e){"use strict";n(c)(r,e);var t=n(f)(r);function r(e,i,a){var u;return n(s)(this,r),(u=t.call(this,i)).code=e,u.customData=a,u.name="FirebaseError",Object.setPrototypeOf(n(o)(u),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(n(o)(u),P.prototype.create),u}return r}(n(h)(Error)),P=function(){"use strict";function e(t,r,i){n(s)(this,e),this.service=t,this.serviceName=r,this.errors=i}return n(u)(e,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?M(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new L(a,u,i);return c}}]),e}();function M(e,t){return e.replace(U,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var U=/\{\$([^}]+)}/g;
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
 */function F(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function V(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(j(l)&&j(h)){if(!V(l,h))return!1}else if(l!==h)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var f=!0,d=!1,v=void 0;try{for(var p,y=r[Symbol.iterator]();!(f=(p=y.next()).done);f=!0){var m=p.value;if(!n.includes(m))return!1}}catch(e){d=!0,v=e}finally{try{f||null==y.return||y.return()}finally{if(d)throw v}}return!0}function j(e){return null!==e&&"object"==typeof e}
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
function q(e){var t=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(e,r){var i=n(l)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){t.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(e)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return t.length?"&"+t.join("&"):""}function B(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=n(l)(e.split("="),2),i=r[0],a=r[1];t[decodeURIComponent(i)]=decodeURIComponent(a)}})),t}function K(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function H(e,t){var n=new z(e,t);return n.subscribe.bind(n)}var z=function(){"use strict";function e(t,r){var i=this;n(s)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){t(i)})).catch((function(e){i.error(e)}))}return n(u)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=W),void 0===r.error&&(r.error=W),void 0===r.complete&&(r.complete=W);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function W(){}
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
function G(e){return e&&e._delegate?e._delegate:e}})),a.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),a.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),a.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r.default(e,t)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n}})),a.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),a.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n.default(e)||r.default(e,t)||o.default(e,t)||i.default()};var n=s(a("8slrw")),r=s(a("7AJDX")),i=s(a("ifqQW")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),a.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n.default(e)||r.default(e)||o.default(e)||i.default()};var n=s(a("kMC0W")),r=s(a("7AJDX")),i=s(a("8CtQK")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("4c7YB",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return u(e)};var n=s(a("ge8co")),r=s(a("cZGw3")),i=s(a("fVNic")),o=s(a("gD1JV"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){var t="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||!r.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,a)}function a(){return n.default(e,arguments,i.default(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),o.default(a,e)},u(e)}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=i()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),a.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=n.default();return function(){var n,a=r.default(e);if(t){var o=r.default(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return i.default(this,n)}};var n=o(a("aTHs7")),r=o(a("fVNic")),i=o(a("jmhxu"));function o(e){return e&&e.__esModule?e:{default:e}}})),a.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),a.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=i(a("ds8z5")),r=i(a("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),a.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),a.register("6qd2L",(function(e,t){var n,r,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var u,c=[],l=!1,h=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&d())}function d(){if(!l){var e=s(f);l=!0;for(var t=c.length;t;){for(u=c,c=[];++h<t;)u&&u[h].run();h=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new v(e,t)),1!==c.length||l||s(d)},v.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),a.register("MjY8E",(function(t,r){e(t.exports,"_registerComponent",(function(){return _})),e(t.exports,"_getProvider",(function(){return S})),e(t.exports,"_removeServiceInstance",(function(){return C})),e(t.exports,"SDK_VERSION",(function(){return O})),e(t.exports,"initializeApp",(function(){return R})),e(t.exports,"getApp",(function(){return L})),e(t.exports,"registerVersion",(function(){return P}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("hKHmD"),c=a("8nrFW"),l=a("2TvXO"),h=a("6ExWU"),f=a("kZfxc"),d=a("2xDiJ"),v=a("ajgRO"),p=(d=a("2xDiJ"),function(){"use strict";function e(t){n(o)(this,e),this.container=t}return n(s)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}());var y,m,g="@firebase/app",k="0.9.0",w=new(0,f.Logger)("@firebase/app"),b="[DEFAULT]",x=(y={},n(u)(y,g,"fire-core"),n(u)(y,"@firebase/app-compat","fire-core-compat"),n(u)(y,"@firebase/analytics","fire-analytics"),n(u)(y,"@firebase/analytics-compat","fire-analytics-compat"),n(u)(y,"@firebase/app-check","fire-app-check"),n(u)(y,"@firebase/app-check-compat","fire-app-check-compat"),n(u)(y,"@firebase/auth","fire-auth"),n(u)(y,"@firebase/auth-compat","fire-auth-compat"),n(u)(y,"@firebase/database","fire-rtdb"),n(u)(y,"@firebase/database-compat","fire-rtdb-compat"),n(u)(y,"@firebase/functions","fire-fn"),n(u)(y,"@firebase/functions-compat","fire-fn-compat"),n(u)(y,"@firebase/installations","fire-iid"),n(u)(y,"@firebase/installations-compat","fire-iid-compat"),n(u)(y,"@firebase/messaging","fire-fcm"),n(u)(y,"@firebase/messaging-compat","fire-fcm-compat"),n(u)(y,"@firebase/performance","fire-perf"),n(u)(y,"@firebase/performance-compat","fire-perf-compat"),n(u)(y,"@firebase/remote-config","fire-rc"),n(u)(y,"@firebase/remote-config-compat","fire-rc-compat"),n(u)(y,"@firebase/storage","fire-gcs"),n(u)(y,"@firebase/storage-compat","fire-gcs-compat"),n(u)(y,"@firebase/firestore","fire-fst"),n(u)(y,"@firebase/firestore-compat","fire-fst-compat"),n(u)(y,"fire-js","fire-js"),n(u)(y,"firebase","fire-js-all"),y),E=new Map,T=new Map;function I(e,t){try{e.container.addComponent(t)}catch(n){w.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function _(e){var t=e.name;if(T.has(t))return w.debug("There were multiple attempts to register component ".concat(t,".")),!1;T.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=E.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){I(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function S(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function C(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b;S(e,t).clearInstance(n)}
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
var A=(m={},n(u)(m,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),n(u)(m,"bad-app-name","Illegal App name: '{$appName}"),n(u)(m,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),n(u)(m,"app-deleted","Firebase App named '{$appName}' already deleted"),n(u)(m,"no-options","Need to provide options, when not being deployed to hosting via source."),n(u)(m,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),n(u)(m,"invalid-log-argument","First argument to `onLog` must be null or a function."),n(u)(m,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),n(u)(m,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),n(u)(m,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),n(u)(m,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),m),D=new(0,d.ErrorFactory)("app","Firebase",A),N=function(){"use strict";function e(t,r,i){var a=this;n(o)(this,e),this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new(0,h.Component)("app",(function(){return a}),"PUBLIC"))}return n(s)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw D.create("app-deleted",{appName:this._name})}}]),e}(),O="9.15.0";function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:b,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw D.create("bad-app-name",{appName:String(a)});if(n||(n=(0,d.getDefaultAppConfig)()),!n)throw D.create("no-options");var o=E.get(a);if(o){if((0,d.deepEqual)(n,o.options)&&(0,d.deepEqual)(i,o.config))return o;throw D.create("duplicate-app",{appName:a})}var s=new(0,h.ComponentContainer)(a),u=!0,c=!1,l=void 0;try{for(var f,v=T.values()[Symbol.iterator]();!(u=(f=v.next()).done);u=!0){var p=f.value;s.addComponent(p)}}catch(e){c=!0,l=e}finally{try{u||null==v.return||v.return()}finally{if(c)throw l}}var y=new N(n,i,s);return E.set(a,y),y}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=E.get(e);if(!t&&e===b)return R();if(!t)throw D.create("no-app",{appName:e});return t}function P(e,t,n){var r,i=null!==(r=x[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void w.warn(s.join(" "))}_(new(0,h.Component)("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
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
var M="firebase-heartbeat-store",U=null;function F(){return U||(U=(0,v.openDB)("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(M)}}).catch((function(e){throw D.create("idb-open",{originalErrorMessage:e.message})}))),U}function V(e){return j.apply(this,arguments)}function j(){return(j=n(i)(n(l).mark((function e(t){var r,i;return n(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F();case 3:return r=e.sent,e.abrupt("return",r.transaction(M).objectStore(M).get(K(t)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof d.FirebaseError?w.warn(e.t0.message):(i=D.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),w.warn(i.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function q(e,t){return B.apply(this,arguments)}function B(){return(B=n(i)(n(l).mark((function e(t,r){var i,a,o,s;return n(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F();case 3:return i=e.sent,a=i.transaction(M,"readwrite"),o=a.objectStore(M),e.next=8,o.put(r,K(t));case 8:return e.abrupt("return",a.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof d.FirebaseError?w.warn(e.t0.message):(s=D.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),w.warn(s.message));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function K(e){return"".concat(e.name,"!").concat(e.options.appId)}
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
 */var H=function(){"use strict";function e(t){var r=this;n(o)(this,e),this.container=t,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Q(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return n(s)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return n(i)(n(l).mark((function t(){var r,i,a;return n(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=z(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==a&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),t)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return n(i)(n(l).mark((function t(){var r,i,a,o,s;return n(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(r=z(),i=W(e._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=(0,d.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:a})),e._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=o,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",s);case 17:case"end":return t.stop()}}),t)})))()}}]),e}();function z(){return(new Date).toISOString().substring(0,10)}function W(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),Y(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),Y(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var G,Q=function(){"use strict";function e(t){n(o)(this,e),this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return n(s)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return n(i)(n(l).mark((function e(){return n(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,d.isIndexedDBAvailable)()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",(0,d.validateIndexedDBOpenable)().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return n(i)(n(l).mark((function t(){var r;return n(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,V(e.app);case 9:return r=t.sent,t.abrupt("return",r||{heartbeats:[]});case 11:case"end":return t.stop()}}),t)})))()}},{key:"overwrite",value:function(e){var t=this;return n(i)(n(l).mark((function r(){var i,a;return n(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,t._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,t.read();case 10:return a=n.sent,n.abrupt("return",q(t.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return n.stop()}}),r)})))()}},{key:"add",value:function(e){var t=this;return n(i)(n(l).mark((function r(){var i,a;return n(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,t._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,t.read();case 10:return a=r.sent,r.abrupt("return",q(t.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:n(c)(a.heartbeats).concat(n(c)(e.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),e}();function Y(e){return(0,d.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
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
 */G="",_(new(0,h.Component)("platform-logger",(function(e){return new p(e)}),"PRIVATE")),_(new(0,h.Component)("heartbeat",(function(e){return new H(e)}),"PRIVATE")),P(g,k,G),P(g,k,"esm2017"),P("fire-js","")})),a.register("bpxeT",(function(e,t){"use strict";function n(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(i,a){var o=e.apply(t,r);function s(e){n(o,i,a,s,u,"next",e)}function u(e){n(o,i,a,s,u,"throw",e)}s(void 0)}))}}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),a.register("2TvXO",(function(e,t){var n=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),o=new C(r||[]);return a._invoke=function(e,t,n){var r=h;return function(i,a){if(r===d)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw a;return D()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=I(o,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?v:f,u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=v,n.method="throw",n.arg=u.arg)}}}(e,n,o),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h="suspendedStart",f="suspendedYield",d="executing",v="completed",p={};function y(){}function m(){}function g(){}var k={};u(k,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(A([])));b&&b!==n&&r.call(b,a)&&(k=b);var x=g.prototype=y.prototype=Object.create(k);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function T(e,t){function n(i,a,o,s){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(h).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function I(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,I(e,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,p;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function A(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:D}}function D(){return{value:t,done:!0}}return m.prototype=g,u(x,"constructor",g),u(g,"constructor",m),m.displayName=u(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},E(T.prototype),u(T.prototype,o,(function(){return this})),e.AsyncIterator=T,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new T(c(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(x),u(x,s,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=A,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),a.register("6ExWU",(function(t,r){e(t.exports,"Component",(function(){return f})),e(t.exports,"ComponentContainer",(function(){return p}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("1t1Wn"),c=a("8nrFW"),l=a("2TvXO"),h=a("2xDiJ"),f=function(){"use strict";function e(t,r,i){n(o)(this,e),this.name=t,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return n(s)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),d="[DEFAULT]",v=function(){"use strict";function e(t,r){n(o)(this,e),this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return n(s)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new(0,h.Deferred);if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:d})}catch(e){}var t=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=n(u)(a.value,2),c=s[0],l=s[1],h=this.normalizeInstanceIdentifier(c);try{var f=this.getOrInitializeService({instanceIdentifier:h});l.resolve(f)}catch(e){}}}catch(e){r=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return n(i)(n(l).mark((function t(){var r;return n(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Array.from(e.instances.values()),t.next=3,Promise.all(n(c)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(n(c)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return t.stop()}}),t)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options,r=void 0===t?{}:t,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,c=void 0;try{for(var l,h=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(l=h.next()).done);o=!0){var f=n(u)(l.value,2),d=f[0],v=f[1],p=this.normalizeInstanceIdentifier(d);i===p&&v.resolve(a)}}catch(e){s=!0,c=e}finally{try{o||null==h.return||h.return()}finally{if(s)throw c}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===d?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.component?this.component.multipleInstances?e:d:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();var p=function(){"use strict";function e(t){n(o)(this,e),this.name=t,this.providers=new Map}return n(s)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new v(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}()})),a.register("kZfxc",(function(t,r){e(t.exports,"LogLevel",(function(){return i})),e(t.exports,"Logger",(function(){return m})),e(t.exports,"setLogLevel",(function(){return g})),e(t.exports,"setUserLogHandler",(function(){return k}));var i,o,s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("8nrFW"),h=[];(o=i||(i={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";var f,d={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},v=i.INFO,p=(f={},n(c)(f,i.DEBUG,"log"),n(c)(f,i.VERBOSE,"log"),n(c)(f,i.INFO,"info"),n(c)(f,i.WARN,"warn"),n(c)(f,i.ERROR,"error"),f),y=function(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(t<e.logLevel)){var s=(new Date).toISOString(),u=p[t];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(e.name,":")].concat(n(l)(i)))}},m=function(){"use strict";function e(t){n(s)(this,e),this.name=t,this._logLevel=v,this._logHandler=y,this._userLogHandler=null,h.push(this)}return n(u)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in i))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?d[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.DEBUG].concat(n(l)(t))),this._logHandler.apply(this,[this,i.DEBUG].concat(n(l)(t)))}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.VERBOSE].concat(n(l)(t))),this._logHandler.apply(this,[this,i.VERBOSE].concat(n(l)(t)))}},{key:"info",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.INFO].concat(n(l)(t))),this._logHandler.apply(this,[this,i.INFO].concat(n(l)(t)))}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.WARN].concat(n(l)(t))),this._logHandler.apply(this,[this,i.WARN].concat(n(l)(t)))}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.ERROR].concat(n(l)(t))),this._logHandler.apply(this,[this,i.ERROR].concat(n(l)(t)))}}]),e}();function g(e){h.forEach((function(t){t.setLogLevel(e)}))}function k(e,t){var n=!0,r=!1,a=void 0;try{for(var o,s=h[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value,c=null;t&&t.level&&(c=d[t.level]),u.userLogHandler=null===e?null:function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];var s=a.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");n>=(null!=c?c:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:a,type:t.name})}}}catch(e){r=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}}})),a.register("ajgRO",(function(t,r){e(t.exports,"openDB",(function(){return l}));var i=a("bpxeT"),o=a("dDDEV"),s=a("8nrFW"),u=a("2TvXO"),c=a("kKOTz");c=a("kKOTz");function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=(0,c.w)(s);return i&&s.addEventListener("upgradeneeded",(function(e){i((0,c.w)(s.result),e.oldVersion,e.newVersion,(0,c.w)(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var h=["get","getKey","getAll","getAllKeys","count"],f=["put","add","delete","clear"],d=new Map;function v(e,t){if(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t){if(d.get(t))return d.get(t);var r=t.replace(/FromIndex$/,""),a=t!==r,o=f.includes(r);if(r in(a?IDBIndex:IDBObjectStore).prototype&&(o||h.includes(r))){var c,l=(c=n(i)(n(u).mark((function e(t){var i,c,l,h,f,d,v=arguments;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i=v.length,c=new Array(i>1?i-1:0),l=1;l<i;l++)c[l-1]=v[l];return f=this.transaction(t,o?"readwrite":"readonly"),d=f.store,a&&(d=d.index(c.shift())),e.next=7,Promise.all([(h=d)[r].apply(h,n(s)(c)),o&&f.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)});return d.set(t,l),l}}}(0,c.r)((function(e){return n(o)({},e,{get:function(t,n,r){return v(t,n)||e.get(t,n,r)},has:function(t,n){return!!v(t,n)||e.has(t,n)}})}))})),a.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r.default(e,t,n[t])}))}return e};var n,r=(n=a("hKHmD"))&&n.__esModule?n:{default:n}})),a.register("kKOTz",(function(t,r){e(t.exports,"w",(function(){return m})),e(t.exports,"r",(function(){return v}));var i,o,s=a("8nrFW");var u=new WeakMap,c=new WeakMap,l=new WeakMap,h=new WeakMap,f=new WeakMap;var d={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return m(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function v(e){d=e(d)}function p(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(g(this),n),m(u.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return m(e.apply(g(this),n))}:function(t){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,u=(o=e).call.apply(o,[g(this),t].concat(n(s)(i)));return l.set(u,t.sort?t.sort():[t]),m(u)}}function y(e){return"function"==typeof e?p(e):(e instanceof IDBTransaction&&function(e){if(!c.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));c.set(e,t)}}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,d):e);var t}function m(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(m(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&u.set(e,t)})).catch((function(){})),f.set(n,t),n;var t,n;if(h.has(e))return h.get(e);var r=y(e);return r!==e&&(h.set(e,r),f.set(r,e)),r}var g=function(e){return f.get(e)}})),a.register("ax7qk",(function(t,r){e(t.exports,"Q",(function(){return bt})),e(t.exports,"v",(function(){return Mt})),e(t.exports,"y",(function(){return Ut})),e(t.exports,"c",(function(){return An})),e(t.exports,"n",(function(){return _r}));var i=a("ds8z5"),o=a("bpxeT"),s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("jh8P3"),h=a("fVNic"),f=a("eYQtU"),d=a("1t1Wn"),v=a("8nrFW"),p=a("2MbLg"),y=a("2TvXO"),m=a("2xDiJ"),g=a("MjY8E"),k=a("kZfxc"),w=a("4tSb9"),b=a("6ExWU");function x(){return n(c)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var E=x,T=new(0,m.ErrorFactory)("auth","Firebase",x()),I=new(0,k.Logger)("@firebase/auth");function _(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var a;I.logLevel<=k.LogLevel.ERROR&&(a=I).error.apply(a,["Auth (".concat(g.SDK_VERSION,"): ").concat(e)].concat(n(v)(r)))}
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
 */function S(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];throw N.apply(void 0,[e].concat(n(v)(r)))}function C(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return N.apply(void 0,[e].concat(n(v)(r)))}function A(e,t,r){var i=Object.assign(Object.assign({},E()),n(c)({},t,r));return new(0,m.ErrorFactory)("auth","Firebase",i).create(t,{appName:e.name})}function D(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&S(e,"argument-error"),A(e,"argument-error","Type of ".concat(t.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function N(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var a;if("string"!=typeof e){var o,s=r[0],u=n(v)(r.slice(1));return u[0]&&(u[0].appName=e.name),(o=e._errorFactory).create.apply(o,[s].concat(n(v)(u)))}return(a=T).create.apply(a,[e].concat(n(v)(r)))}function O(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!e)throw N.apply(void 0,[t].concat(n(v)(i)))}function R(e){var t="INTERNAL ASSERTION FAILED: "+e;throw _(t),new Error(t)}function L(e,t){e||R(t)}
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
 */var P=new Map;function M(e){L(e instanceof Function,"Expected a class definition");var t=P.get(e);return t?(L(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,P.set(e,t),t)}
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
 */function U(e,t){var n=(0,g._getProvider)(e,"auth");if(n.isInitialized()){var r=n.getImmediate(),i=n.getOptions();if((0,m.deepEqual)(i,null!=t?t:{}))return r;S(r,"already-initialized")}return n.initialize({options:t})}
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
function F(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function V(){return"http:"===j()||"https:"===j()}function j(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
var q=function(){"use strict";function e(t,r){n(s)(this,e),this.shortDelay=t,this.longDelay=r,L(r>t,"Short delay should be less than long delay!"),this.isMobile=(0,m.isMobileCordova)()||(0,m.isReactNative)()}return n(u)(e,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(V()||(0,m.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),e}();
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
 */function B(e,t){L(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
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
 */var K,H=function(){"use strict";function e(){n(s)(this,e)}return n(u)(e,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void R("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void R("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void R("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),z=(K={},n(c)(K,"CREDENTIAL_MISMATCH","custom-token-mismatch"),n(c)(K,"MISSING_CUSTOM_TOKEN","internal-error"),n(c)(K,"INVALID_IDENTIFIER","invalid-email"),n(c)(K,"MISSING_CONTINUE_URI","internal-error"),n(c)(K,"INVALID_PASSWORD","wrong-password"),n(c)(K,"MISSING_PASSWORD","internal-error"),n(c)(K,"EMAIL_EXISTS","email-already-in-use"),n(c)(K,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),n(c)(K,"INVALID_IDP_RESPONSE","invalid-credential"),n(c)(K,"INVALID_PENDING_TOKEN","invalid-credential"),n(c)(K,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),n(c)(K,"MISSING_REQ_TYPE","internal-error"),n(c)(K,"EMAIL_NOT_FOUND","user-not-found"),n(c)(K,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),n(c)(K,"EXPIRED_OOB_CODE","expired-action-code"),n(c)(K,"INVALID_OOB_CODE","invalid-action-code"),n(c)(K,"MISSING_OOB_CODE","internal-error"),n(c)(K,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),n(c)(K,"INVALID_ID_TOKEN","invalid-user-token"),n(c)(K,"TOKEN_EXPIRED","user-token-expired"),n(c)(K,"USER_NOT_FOUND","user-token-expired"),n(c)(K,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),n(c)(K,"INVALID_CODE","invalid-verification-code"),n(c)(K,"INVALID_SESSION_INFO","invalid-verification-id"),n(c)(K,"INVALID_TEMPORARY_PROOF","invalid-credential"),n(c)(K,"MISSING_SESSION_INFO","missing-verification-id"),n(c)(K,"SESSION_EXPIRED","code-expired"),n(c)(K,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),n(c)(K,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),n(c)(K,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),n(c)(K,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),n(c)(K,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),n(c)(K,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),n(c)(K,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),n(c)(K,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),n(c)(K,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),n(c)(K,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),n(c)(K,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),K),W=new q(3e4,6e4);function G(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function Q(e,t,n,r){return Y.apply(this,arguments)}function Y(){return Y=n(o)(n(y).mark((function e(t,r,i,a){var s,u=arguments;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=u.length>4&&void 0!==u[4]?u[4]:{},e.abrupt("return",J(t,s,n(o)(n(y).mark((function e(){var o,s,u,c;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===r?s=a:o={body:JSON.stringify(a)}),u=(0,m.querystring)(Object.assign({key:t.config.apiKey},s)).slice(1),e.next=6,t._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),e.abrupt("return",H.fetch()(ee(t,t.config.apiHost,i,u),Object.assign({method:r,headers:c,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),Y.apply(this,arguments)}function J(e,t,n){return X.apply(this,arguments)}function X(){return(X=n(o)(n(y).mark((function e(t,r,i){var a,o,s,u,c,l,h,f,v;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t._canInitEmulator=!1,a=Object.assign(Object.assign({},z),r),e.prev=2,o=new te(t),e.next=6,Promise.race([i(),o.promise]);case 6:return s=e.sent,o.clearNetworkTimeout(),e.next=10,s.json();case 10:if(!("needConfirmation"in(u=e.sent))){e.next=13;break}throw ne(t,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){e.next=17;break}return e.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=n(d)(c.split(" : "),2),h=l[0],f=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==h){e.next=23;break}throw ne(t,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==h){e.next=27;break}throw ne(t,"email-already-in-use",u);case 27:if("USER_DISABLED"!==h){e.next=29;break}throw ne(t,"user-disabled",u);case 29:if(v=a[h]||h.toLowerCase().replace(/[_\s]+/g,"-"),!f){e.next=34;break}throw A(t,v,f);case 34:S(t,v);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof m.FirebaseError)){e.next=41;break}throw e.t0;case 41:S(t,"network-request-failed");case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function $(e,t,n,r){return Z.apply(this,arguments)}function Z(){return Z=n(o)(n(y).mark((function e(t,r,i,a){var o,s,u=arguments;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,Q(t,r,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&S(t,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)}))),Z.apply(this,arguments)}function ee(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?B(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var te=function(){"use strict";function e(t){var r=this;n(s)(this,e),this.auth=t,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(C(n.auth,"network-request-failed"))}),W.get())}))}return n(u)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function ne(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=C(e,t,r);return i.customData._tokenResponse=n,i}function re(e,t){return ie.apply(this,arguments)}function ie(){return(ie=
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
n(o)(n(y).mark((function e(t,r){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(t,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(e,t){return oe.apply(this,arguments)}function oe(){return(oe=n(o)(n(y).mark((function e(t,r){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(t,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */function se(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function ue(){return ue=n(o)(n(y).mark((function e(t){var r,i,a,o,s,u,c=arguments;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]&&c[1],i=(0,m.getModularInstance)(t),e.next=4,i.getIdToken(r);case 4:return a=e.sent,O((o=le(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:se(ce(o.auth_time)),issuedAtTime:se(ce(o.iat)),expirationTime:se(ce(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),ue.apply(this,arguments)}function ce(e){return 1e3*Number(e)}function le(e){var t=n(d)(e.split("."),3),r=t[0],i=t[1],a=t[2];if(void 0===r||void 0===i||void 0===a)return _("JWT malformed, contained fewer than 3 sections"),null;try{var o=(0,m.base64Decode)(i);return o?JSON.parse(o):(_("Failed to decode base64 JWT payload"),null)}catch(e){return _("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function he(e,t){return fe.apply(this,arguments)}function fe(){return fe=
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
n(o)(n(y).mark((function e(t,r){var i=arguments;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof m.FirebaseError&&de(e.t0))){e.next=15;break}if(t.auth.currentUser!==t){e.next=15;break}return e.next=15,t.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),fe.apply(this,arguments)}function de(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */var ve=function(){"use strict";function e(t){n(s)(this,e),this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return n(u)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var t=this.getInterval(e),r=this;this.timerId=setTimeout(n(o)(n(y).mark((function e(){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),e)}))),t)}}},{key:"iteration",value:function(){var e=this;return n(o)(n(y).mark((function t(){return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.user.getIdToken(!0);case 3:t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===(null===t.t0||void 0===t.t0?void 0:t.t0.code)&&e.schedule(!0),t.abrupt("return");case 9:e.schedule();case 10:case"end":return t.stop()}}),t,null,[[0,5]])})))()}}]),e}(),pe=function(){"use strict";function e(t,r){n(s)(this,e),this.createdAt=t,this.lastLoginAt=r,this._initializeTime()}return n(u)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=se(this.lastLoginAt),this.creationTime=se(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
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
 */function ye(e){return me.apply(this,arguments)}function me(){return(me=
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
n(o)(n(y).mark((function e(t){var r,i,a,o,s,u,c,l,h,f,d;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.auth,e.next=4,t.getIdToken();case 4:return a=e.sent,e.next=7,he(t,ae(i,{idToken:a}));case 7:O(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],t._notifyReloadListener(s),u=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?we(s.providerUserInfo):[],c=ke(t.providerData,u),l=t.isAnonymous,h=!(t.email&&s.passwordHash||(null==c?void 0:c.length)),f=!!l&&h,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new pe(s.createdAt,s.lastLoginAt),isAnonymous:f},Object.assign(t,d);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(){return(ge=n(o)(n(y).mark((function e(t){var r;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,m.getModularInstance)(t),e.next=3,ye(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ke(e,t){var r=e.filter((function(e){return!t.some((function(t){return t.providerId===e.providerId}))}));return n(v)(r).concat(n(v)(t))}function we(e){return e.map((function(e){var t=e.providerId,n=(0,w.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function be(e,t){return xe.apply(this,arguments)}function xe(){return(xe=
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
n(o)(n(y).mark((function e(t,r){var i;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(t,{},n(o)(n(y).mark((function e(){var i,a,o,s,u,c;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,m.querystring)({grant_type:"refresh_token",refresh_token:r}).slice(1),a=t.config,o=a.tokenApiHost,s=a.apiKey,u=ee(t,o,"/v1/token","key=".concat(s)),e.next=5,t._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",H.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var Ee=function(){"use strict";function e(){n(s)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return n(u)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){O(e.idToken,"internal-error"),O(void 0!==e.idToken,"internal-error"),O(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,O(n=le(t),"internal-error"),O(void 0!==n.exp,"internal-error"),O(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return n(o)(n(y).mark((function i(){return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(O(!r.accessToken||r.refreshToken,e,"user-token-expired"),t||!r.accessToken||r.isExpired){n.next=3;break}return n.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){n.next=7;break}return n.next=6,r.refresh(e,r.refreshToken);case 6:return n.abrupt("return",r.accessToken);case 7:return n.abrupt("return",null);case 8:case"end":return n.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,t){var r=this;return n(o)(n(y).mark((function i(){var a,o,s,u;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,be(e,t);case 2:a=n.sent,o=a.accessToken,s=a.refreshToken,u=a.expiresIn,r.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return n.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return R("not implemented")}}],[{key:"fromJSON",value:function(t,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new e;return r&&(O("string"==typeof r,"internal-error",{appName:t}),o.refreshToken=r),i&&(O("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),a&&(O("number"==typeof a,"internal-error",{appName:t}),o.expirationTime=a),o}}]),e}();
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
 */function Te(e,t){O("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Ie=function(){"use strict";function e(t){n(s)(this,e);var r=t.uid,i=t.auth,a=t.stsTokenManager,o=(0,w.__rest)(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ve(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?n(v)(o.providerData):[],this.metadata=new pe(o.createdAt||void 0,o.lastLoginAt||void 0)}return n(u)(e,[{key:"getIdToken",value:function(e){var t=this;return n(o)(n(y).mark((function r(){var i;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,he(t,t.stsTokenManager.getToken(t.auth,e));case 2:if(O(i=n.sent,t.auth,"internal-error"),t.accessToken===i){n.next=9;break}return t.accessToken=i,n.next=8,t.auth._persistUserIfCurrent(t);case 8:t.auth._notifyListenersIfCurrent(t);case 9:return n.abrupt("return",i);case 10:case"end":return n.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return ue.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return ge.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){return new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return n(o)(n(y).mark((function i(){var a;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=!1,e.idToken&&e.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(e),a=!0),!t){n.next=5;break}return n.next=5,ye(r);case 5:return n.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return n.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return n(o)(n(y).mark((function t(){var r;return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return r=t.sent,t.next=5,he(e,re(e.auth,{idToken:r}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),t)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,n){var r,i,a,o,s,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,f=null!==(i=n.email)&&void 0!==i?i:void 0,d=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,v=null!==(o=n.photoURL)&&void 0!==o?o:void 0,p=null!==(s=n.tenantId)&&void 0!==s?s:void 0,y=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,m=null!==(c=n.createdAt)&&void 0!==c?c:void 0,g=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,k=n.uid,w=n.emailVerified,b=n.isAnonymous,x=n.providerData,E=n.stsTokenManager;O(k&&E,t,"internal-error");var T=Ee.fromJSON(this.name,E);O("string"==typeof k,t,"internal-error"),Te(h,t.name),Te(f,t.name),O("boolean"==typeof w,t,"internal-error"),O("boolean"==typeof b,t,"internal-error"),Te(d,t.name),Te(v,t.name),Te(p,t.name),Te(y,t.name),Te(m,t.name),Te(g,t.name);var I=new e({uid:k,auth:t,email:f,emailVerified:w,displayName:h,isAnonymous:b,photoURL:v,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:g});return x&&Array.isArray(x)&&(I.providerData=x.map((function(e){return Object.assign({},e)}))),y&&(I._redirectEventId=y),I}},{key:"_fromIdTokenResponse",value:function(t,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n(o)(n(y).mark((function a(){var o,s;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(o=new Ee).updateFromServerResponse(r),s=new e({uid:r.localId,auth:t,stsTokenManager:o,isAnonymous:i}),n.next=5,ye(s);case 5:return n.abrupt("return",s);case 6:case"end":return n.stop()}}),a)})))()}}]),e}(),_e=function(){"use strict";function e(){n(s)(this,e),this.type="NONE",this.storage={}}return n(u)(e,[{key:"_isAvailable",value:function(){return n(o)(n(y).mark((function e(){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,t){var r=this;return n(o)(n(y).mark((function i(){return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r.storage[e]=t;case 1:case"end":return n.stop()}}),i)})))()}},{key:"_get",value:function(e){var t=this;return n(o)(n(y).mark((function r(){var i;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t.storage[e],n.abrupt("return",void 0===i?null:i);case 2:case"end":return n.stop()}}),r)})))()}},{key:"_remove",value:function(e){var t=this;return n(o)(n(y).mark((function r(){return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:delete t.storage[e];case 1:case"end":return n.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
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
 */_e.type="NONE";var Se=_e;
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
 */function Ce(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Ae=function(){"use strict";function e(t,r,i){n(s)(this,e),this.persistence=t,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,u=a.name;this.fullUserKey=Ce(this.userKey,o.apiKey,u),this.fullPersistenceKey=Ce("persistence",o.apiKey,u),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return n(u)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return n(o)(n(y).mark((function t(){var r;return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return r=t.sent,t.abrupt("return",r?Ie._fromJSON(e.auth,r):null);case 4:case"end":return t.stop()}}),t)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var t=this;return n(o)(n(y).mark((function r(){var i;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.persistence!==e){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,t.getCurrentUser();case 4:return i=n.sent,n.next=7,t.removeCurrentUser();case 7:if(t.persistence=e,!i){n.next=10;break}return n.abrupt("return",t.setCurrentUser(i));case 10:case"end":return n.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(t,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return n(o)(n(y).mark((function a(){var s,u,c,l,h,f,d,v,p,m,g,k,w;return n(y).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.length){a.next=2;break}return a.abrupt("return",new e(M(Se),t,i));case 2:return a.next=4,Promise.all(r.map(function(){var e=n(o)(n(y).mark((function e(t){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",t);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:s=a.sent.filter((function(e){return e})),u=s[0]||M(Se),c=Ce(i,t.config.apiKey,t.name),l=null,h=!0,f=!1,d=void 0,a.prev=9,v=r[Symbol.iterator]();case 11:if(h=(p=v.next()).done){a.next=29;break}return m=p.value,a.prev=13,a.next=16,m._get(c);case 16:if(!(g=a.sent)){a.next=22;break}return k=Ie._fromJSON(t,g),m!==u&&(l=k),u=m,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:h=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),f=!0,d=a.t1;case 35:a.prev=35,a.prev=36,h||null==v.return||v.return();case 38:if(a.prev=38,!f){a.next=41;break}throw d;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(w=s.filter((function(e){return e._shouldAllowMigration})),u._shouldAllowMigration&&w.length){a.next=46;break}return a.abrupt("return",new e(u,t,i));case 46:if(u=w[0],!l){a.next=50;break}return a.next=50,u._set(c,l.toJSON());case 50:return a.next=52,Promise.all(r.map(function(){var e=n(o)(n(y).mark((function e(t){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t===u){e.next=8;break}return e.prev=1,e.next=4,t._remove(c);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return a.abrupt("return",new e(u,t,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
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
 */function De(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Le(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ne(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Me(t))return"Blackberry";if(Ue(t))return"Webos";if(Oe(t))return"Safari";if((t.includes("chrome/")||Re(t))&&!t.includes("edge/"))return"Chrome";if(Pe(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/firefox\//i.test(e)}function Oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/crios\//i.test(e)}function Le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/iemobile/i.test(e)}function Pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/android/i.test(e)}function Me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/blackberry/i.test(e)}function Ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/webos/i.test(e)}function Fe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ve(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return Fe(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function je(){return(0,m.isIE)()&&10===document.documentMode}function qe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return Fe(e)||Pe(e)||Ue(e)||Me(e)||/windows phone/i.test(e)||Le(e)}
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
function Be(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=De((0,m.getUA)());break;case"Worker":t="".concat(De((0,m.getUA)()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(g.SDK_VERSION,"/").concat(r)}
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
 */var Ke=function(){"use strict";function e(t){n(s)(this,e),this.auth=t,this.queue=[]}return n(u)(e,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var t=this;return n(o)(n(y).mark((function r(){var i,a,o,s,u,c,l,h,f,d,v,p,m;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.auth.currentUser!==e){n.next=2;break}return n.abrupt("return");case 2:i=[],n.prev=3,a=!0,o=!1,s=void 0,n.prev=5,u=t.queue[Symbol.iterator]();case 7:if(a=(c=u.next()).done){n.next=15;break}return l=c.value,n.next=11,l(e);case 11:l.onAbort&&i.push(l.onAbort);case 12:a=!0,n.next=7;break;case 15:n.next=21;break;case 17:n.prev=17,n.t0=n.catch(5),o=!0,s=n.t0;case 21:n.prev=21,n.prev=22,a||null==u.return||u.return();case 24:if(n.prev=24,!o){n.next=27;break}throw s;case 27:return n.finish(24);case 28:return n.finish(21);case 29:n.next=52;break;case 31:for(n.prev=31,n.t1=n.catch(3),i.reverse(),h=!0,f=!1,d=void 0,n.prev=35,v=i[Symbol.iterator]();!(h=(p=v.next()).done);h=!0){m=p.value;try{m()}catch(e){}}n.next=43;break;case 39:n.prev=39,n.t2=n.catch(35),f=!0,d=n.t2;case 43:n.prev=43,n.prev=44,h||null==v.return||v.return();case 46:if(n.prev=46,!f){n.next=49;break}throw d;case 49:return n.finish(46);case 50:return n.finish(43);case 51:throw t.auth._errorFactory.create("login-blocked",{originalMessage:null===n.t1||void 0===n.t1?void 0:n.t1.message});case 52:case"end":return n.stop()}}),r,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),e}(),He=function(){"use strict";function e(t,r,i){n(s)(this,e),this.app=t,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new We(this),this.idTokenSubscription=new We(this),this.beforeStateQueue=new Ke(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=T,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}return n(u)(e,[{key:"_initializeWithPersistence",value:function(e,t){t&&(this._popupRedirectResolver=M(t));var r=this;return this._initializationPromise=this.queue(n(o)(n(y).mark((function i(){var a,o;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r._deleted){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,Ae.create(r,e);case 5:if(r.persistenceManager=n.sent,!r._deleted){n.next=8;break}return n.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){n.next=16;break}return n.prev=9,n.next=12,r._popupRedirectResolver._initialize(r);case 12:n.next=16;break;case 14:n.prev=14,n.t0=n.catch(9);case 16:return n.next=18,r.initializeCurrentUser(t);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){n.next=21;break}return n.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return n.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return n(o)(n(y).mark((function t(){var r;return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(r=t.sent,e.currentUser||r){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!r||e.currentUser.uid!==r.uid){t.next=12;break}return e._currentUser._assign(r),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(r,!0);case 14:case"end":return t.stop()}}),t)})))()}},{key:"initializeCurrentUser",value:function(e){var t=this;return n(o)(n(y).mark((function r(){var i,a,o,s,u,c,l;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,t.assertedPersistence.getCurrentUser();case 3:if(a=n.sent,o=a,s=!1,!e||!t.config.authDomain){n.next=15;break}return n.next=9,t.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=t.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==o?void 0:o._redirectEventId,n.next=13,t.tryRedirectSignIn(e);case 13:l=n.sent,u&&u!==c||!(null==l?void 0:l.user)||(o=l.user,s=!0);case 15:if(o){n.next=17;break}return n.abrupt("return",t.directlySetCurrentUser(null));case 17:if(o._redirectEventId){n.next=33;break}if(!s){n.next=28;break}return n.prev=19,n.next=22,t.beforeStateQueue.runMiddleware(o);case 22:n.next=28;break;case 24:n.prev=24,n.t0=n.catch(19),o=a,t._popupRedirectResolver._overrideRedirectResult(t,(function(){return Promise.reject(n.t0)}));case 28:if(!o){n.next=32;break}return n.abrupt("return",t.reloadAndSetCurrentUserOrClear(o));case 32:return n.abrupt("return",t.directlySetCurrentUser(null));case 33:return O(t._popupRedirectResolver,t,"argument-error"),n.next=36,t.getOrInitRedirectPersistenceManager();case 36:if(!t.redirectUser||t.redirectUser._redirectEventId!==o._redirectEventId){n.next=38;break}return n.abrupt("return",t.directlySetCurrentUser(o));case 38:return n.abrupt("return",t.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return n.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var t=this;return n(o)(n(y).mark((function r(){var i;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=null,n.prev=1,n.next=4,t._popupRedirectResolver._completeRedirectFn(t,e,!0);case 4:i=n.sent,n.next=11;break;case 7:return n.prev=7,n.t0=n.catch(1),n.next=11,t._setRedirectUser(null);case 11:return n.abrupt("return",i);case 12:case"end":return n.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var t=this;return n(o)(n(y).mark((function r(){return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ye(e);case 3:n.next=9;break;case 5:if(n.prev=5,n.t0=n.catch(0),"auth/network-request-failed"===(null===n.t0||void 0===n.t0?void 0:n.t0.code)){n.next=9;break}return n.abrupt("return",t.directlySetCurrentUser(null));case 9:return n.abrupt("return",t.directlySetCurrentUser(e));case 10:case"end":return n.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return n(o)(n(y).mark((function t(){return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),t)})))()}},{key:"updateCurrentUser",value:function(e){var t=this;return n(o)(n(y).mark((function r(){var i;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=e?(0,m.getModularInstance)(e):null)&&O(i.auth.config.apiKey===t.config.apiKey,t,"invalid-user-token"),n.abrupt("return",t._updateCurrentUser(i&&i._clone(t)));case 3:case"end":return n.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return n(o)(n(y).mark((function i(){return n(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&O(r.tenantId===e.tenantId,r,"tenant-id-mismatch"),t){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",r.queue(n(o)(n(y).mark((function t(){return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.directlySetCurrentUser(e);case 2:r.notifyAuthListeners();case 3:case"end":return t.stop()}}),t)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return n(o)(n(y).mark((function t(){return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),t)})))()}},{key:"setPersistence",value:function(e){var t=this;return this.queue(n(o)(n(y).mark((function r(){return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.assertedPersistence.setPersistence(M(e));case 2:case"end":return n.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new(0,m.ErrorFactory)("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,t){var r=this;return n(o)(n(y).mark((function i(){var a;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.getOrInitRedirectPersistenceManager(t);case 2:return a=n.sent,n.abrupt("return",null===e?a.removeCurrentUser():a.setCurrentUser(e));case 4:case"end":return n.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var t=this;return n(o)(n(y).mark((function r(){var i;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.redirectPersistenceManager){n.next=9;break}return O(i=e&&M(e)||t._popupRedirectResolver,t,"argument-error"),n.next=5,Ae.create(t,[M(i._redirectPersistence)],"redirectUser");case 5:return t.redirectPersistenceManager=n.sent,n.next=8,t.redirectPersistenceManager.getCurrentUser();case 8:t.redirectUser=n.sent;case 9:return n.abrupt("return",t.redirectPersistenceManager);case 10:case"end":return n.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(e){var t=this;return n(o)(n(y).mark((function r(){var i,a;return n(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t._isInitialized){r.next=4;break}return r.next=4,t.queue(n(o)(n(y).mark((function e(){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=t._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){r.next=6;break}return r.abrupt("return",t._currentUser);case 6:if((null===(a=t.redirectUser)||void 0===a?void 0:a._redirectEventId)!==e){r.next=8;break}return r.abrupt("return",t.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(e){var t=this;return n(o)(n(y).mark((function r(){return n(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e!==t.currentUser){r.next=2;break}return r.abrupt("return",t.queue(n(o)(n(y).mark((function r(){return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.directlySetCurrentUser(e));case 1:case"end":return n.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var t=this;return n(o)(n(y).mark((function r(){return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.currentUser&&t.currentUser!==e&&t._currentUser._stopProactiveRefresh(),e&&t.isProactiveRefreshEnabled&&e._startProactiveRefresh(),t.currentUser=e,!e){n.next=8;break}return n.next=6,t.assertedPersistence.setCurrentUser(e);case 6:n.next=10;break;case 8:return n.next=10,t.assertedPersistence.removeCurrentUser();case 10:case"end":return n.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Be(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return n(o)(n(y).mark((function t(){var r,i,a;return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n(c)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),t.next=5,null===(r=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=t.sent)&&(i["X-Firebase-Client"]=a),t.abrupt("return",i);case 8:case"end":return t.stop()}}),t)})))()}}]),e}();
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
 */function ze(e){return(0,m.getModularInstance)(e)}var We=function(){"use strict";function e(t){var r=this;n(s)(this,e),this.auth=t,this.observer=null,this.addObserver=(0,m.createSubscribe)((function(e){return r.observer=e}))}return n(u)(e,[{key:"next",get:function(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();function Ge(e,t,r){var i=ze(e);O(i._canInitEmulator,i,"emulator-config-failed"),O(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");var a=!!(null==r?void 0:r.disableWarnings),o=Qe(t),s=function(e){var t=Qe(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:Ye(i.substr(o.length+1))}}var s=n(d)(i.split(":"),2);return{host:s[0],port:Ye(s[1])}}(t),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Qe(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ye(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Je=function(){"use strict";function e(t,r){n(s)(this,e),this.providerId=t,this.signInMethod=r}return n(u)(e,[{key:"toJSON",value:function(){return R("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return R("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return R("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return R("not implemented")}}]),e}();function Xe(e,t){return $e.apply(this,arguments)}function $e(){return($e=n(o)(n(y).mark((function e(t,r){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(t,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ze(e,t){return et.apply(this,arguments)}function et(){return(et=
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
n(o)(n(y).mark((function e(t,r){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(t,"POST","/v1/accounts:signInWithPassword",G(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function tt(e,t){return nt.apply(this,arguments)}function nt(){return(nt=
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
n(o)(n(y).mark((function e(t,r){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(t,"POST","/v1/accounts:signInWithEmailLink",G(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function rt(e,t){return it.apply(this,arguments)}function it(){return(it=n(o)(n(y).mark((function e(t,r){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(t,"POST","/v1/accounts:signInWithEmailLink",G(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var at=function(e){"use strict";n(f)(r,e);var t=n(p)(r);function r(e,i,a){var o,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return n(s)(this,r),(o=t.call(this,"password",a))._email=e,o._password=i,o._tenantId=u,o}return n(u)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var t=this;return n(o)(n(y).mark((function r(){return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.t0=t.signInMethod,n.next="password"===n.t0?3:"emailLink"===n.t0?4:5;break;case 3:return n.abrupt("return",Ze(e,{returnSecureToken:!0,email:t._email,password:t._password}));case 4:return n.abrupt("return",tt(e,{email:t._email,oobCode:t._password}));case 5:S(e,"internal-error");case 6:case"end":return n.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(e,t){var r=this;return n(o)(n(y).mark((function i(){return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.t0=r.signInMethod,n.next="password"===n.t0?3:"emailLink"===n.t0?4:5;break;case 3:return n.abrupt("return",Xe(e,{idToken:t,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return n.abrupt("return",rt(e,{idToken:t,email:r._email,oobCode:r._password}));case 5:S(e,"internal-error");case 6:case"end":return n.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(Je);function ot(e,t){return st.apply(this,arguments)}function st(){return(st=
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
n(o)(n(y).mark((function e(t,r){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(t,"POST","/v1/accounts:signInWithIdp",G(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var ut=function(e){"use strict";n(f)(r,e);var t=n(p)(r);function r(){var e;return n(s)(this,r),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return n(u)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return ot(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,ot(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,ot(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,m.querystring)(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):S("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=(0,w.__rest)(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(Je);function ct(e,t){return lt.apply(this,arguments)}function lt(){return(lt=
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
n(o)(n(y).mark((function e(t,r){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(t,"POST","/v1/accounts:sendVerificationCode",G(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ht(){return(ht=n(o)(n(y).mark((function e(t,r){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(t,"POST","/v1/accounts:signInWithPhoneNumber",G(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ft(){return(ft=n(o)(n(y).mark((function e(t,r){var i;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$(t,"POST","/v1/accounts:signInWithPhoneNumber",G(t,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw ne(t,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var dt=n(c)({},"USER_NOT_FOUND","user-not-found");function vt(){return(vt=n(o)(n(y).mark((function e(t,r){var i;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",$(t,"POST","/v1/accounts:signInWithPhoneNumber",G(t,i),dt));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var pt=function(e){"use strict";n(f)(r,e);var t=n(p)(r);function r(e){var i;return n(s)(this,r),(i=t.call(this,"phone","phone")).params=e,i}return n(u)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return ht.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return ft.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return vt.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(Je);
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
 */var yt=function(){"use strict";function e(t){var r,i,a,o,u,c;n(s)(this,e);var l=(0,m.querystringDecode)((0,m.extractQuerystring)(t)),h=null!==(r=l.apiKey)&&void 0!==r?r:null,f=null!==(i=l.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=l.mode)&&void 0!==a?a:null);O(h&&f&&d,"argument-error"),this.apiKey=h,this.operation=d,this.code=f,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(u=l.languageCode)&&void 0!==u?u:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return n(u)(e,null,[{key:"parseLink",value:function(t){var n=function(e){var t=(0,m.querystringDecode)((0,m.extractQuerystring)(e)).link,n=t?(0,m.querystringDecode)((0,m.extractQuerystring)(t)).deep_link_id:null,r=(0,m.querystringDecode)((0,m.extractQuerystring)(e)).deep_link_id;return(r?(0,m.querystringDecode)((0,m.extractQuerystring)(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch(e){return null}}}]),e}();
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
var mt=function(){"use strict";function e(){n(s)(this,e),this.providerId=e.PROVIDER_ID}return n(u)(e,null,[{key:"credential",value:function(e,t){return at._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=yt.parseLink(t);return O(n,"argument-error"),at._fromEmailAndCode(e,n.code,n.tenantId)}}]),e}();mt.PROVIDER_ID="password",mt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",mt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
var gt=function(){"use strict";function e(t){n(s)(this,e),this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}return n(u)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),kt=function(e){"use strict";n(f)(r,e);var t=n(p)(r);function r(){var e;return n(s)(this,r),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return n(u)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return n(v)(this.scopes)}}]),r}(gt),wt=function(e){"use strict";n(f)(r,e);var t=n(p)(r);function r(){return n(s)(this,r),t.call(this,"facebook.com")}return n(u)(r,null,[{key:"credential",value:function(e){return ut._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(kt);
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
 */wt.FACEBOOK_SIGN_IN_METHOD="facebook.com",wt.PROVIDER_ID="facebook.com";
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
var bt=function(e){"use strict";n(f)(r,e);var t=n(p)(r);function r(){var e;return n(s)(this,r),(e=t.call(this,"google.com")).addScope("profile"),e}return n(u)(r,null,[{key:"credential",value:function(e,t){return ut._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(kt);bt.GOOGLE_SIGN_IN_METHOD="google.com",bt.PROVIDER_ID="google.com";
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
var xt=function(e){"use strict";n(f)(r,e);var t=n(p)(r);function r(){return n(s)(this,r),t.call(this,"github.com")}return n(u)(r,null,[{key:"credential",value:function(e){return ut._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(kt);xt.GITHUB_SIGN_IN_METHOD="github.com",xt.PROVIDER_ID="github.com";
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
var Et=function(e){"use strict";n(f)(r,e);var t=n(p)(r);function r(){return n(s)(this,r),t.call(this,"twitter.com")}return n(u)(r,null,[{key:"credential",value:function(e,t){return ut._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(kt);Et.TWITTER_SIGN_IN_METHOD="twitter.com",Et.PROVIDER_ID="twitter.com";
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
var Tt=function(){"use strict";function e(t){n(s)(this,e),this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}return n(u)(e,null,[{key:"_fromIdTokenResponse",value:function(t,r,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return n(o)(n(y).mark((function o(){var s,u,c;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Ie._fromIdTokenResponse(t,i,a);case 2:return s=n.sent,u=It(i),c=new e({user:s,providerId:u,_tokenResponse:i,operationType:r}),n.abrupt("return",c);case 6:case"end":return n.stop()}}),o)})))()}},{key:"_forOperation",value:function(t,r,i){return n(o)(n(y).mark((function a(){var o;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t._updateTokensIfNecessary(i,!0);case 2:return o=It(i),n.abrupt("return",new e({user:t,providerId:o,_tokenResponse:i,operationType:r}));case 4:case"end":return n.stop()}}),a)})))()}}]),e}();function It(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
var _t=function(e){"use strict";n(f)(r,e);var t=n(p)(r);function r(e,a,o,u){var c,l;return n(s)(this,r),(c=t.call(this,a.code,a.message)).operationType=o,c.user=u,Object.setPrototypeOf(n(i)(c),r.prototype),c.customData={appName:e.name,tenantId:null!==(l=e.tenantId)&&void 0!==l?l:void 0,_serverResponse:a.customData._serverResponse,operationType:o},c}return n(u)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(m.FirebaseError);function St(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw _t._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */function Ct(e,t){return At.apply(this,arguments)}function At(){return At=n(o)(n(y).mark((function e(t,r){var i,a,o=arguments;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=he,e.t1=t,e.t2=r,e.t3=t.auth,e.next=7,t.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",Tt._forOperation(t,"link",a));case 14:case"end":return e.stop()}}),e)}))),At.apply(this,arguments)}function Dt(e,t){return Nt.apply(this,arguments)}function Nt(){return Nt=
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
n(o)(n(y).mark((function e(t,r){var i,a,o,s,u,c,l=arguments;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=t.auth,o="reauthenticate",e.prev=3,e.next=6,he(t,St(a,o,r,t),i);case 6:return O((s=e.sent).idToken,a,"internal-error"),O(u=le(s.idToken),a,"internal-error"),c=u.sub,O(t.uid===c,a,"user-mismatch"),e.abrupt("return",Tt._forOperation(t,o,s));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&S(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),e,null,[[3,15]])}))),Nt.apply(this,arguments)}function Ot(e,t){return Rt.apply(this,arguments)}function Rt(){return Rt=
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
n(o)(n(y).mark((function e(t,r){var i,a,o,s,u=arguments;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,St(t,a,r);case 4:return o=e.sent,e.next=7,Tt._fromIdTokenResponse(t,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,t._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))),Rt.apply(this,arguments)}function Lt(e,t,n,r){return(0,m.getModularInstance)(e).onIdTokenChanged(t,n,r)}function Pt(e,t,n){return(0,m.getModularInstance)(e).beforeAuthStateChanged(t,n)}function Mt(e,t,n,r){return(0,m.getModularInstance)(e).onAuthStateChanged(t,n,r)}function Ut(e){return(0,m.getModularInstance)(e).signOut()}
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
function Ft(e,t){return Q(e,"POST","/v2/accounts/mfaEnrollment:start",G(e,t))}new WeakMap;var Vt="__sak",jt=function(){"use strict";function e(t,r){n(s)(this,e),this.storageRetriever=t,this.type=r}return n(u)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Vt,"1"),this.storage.removeItem(Vt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
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
 */var qt=function(e){"use strict";n(f)(r,e);var t=n(p)(r);function r(){var e,i;return n(s)(this,r),(e=t.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,n){return e.onStorageEvent(t,n)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(Oe(i=(0,m.getUA)())||Fe(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=qe(),e._shouldAllowMigration=!0,e}return n(u)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);je()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,t){var i=this,a=this;return n(o)(n(y).mark((function o(){return n(y).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n(l)(n(h)(r.prototype),"_set",i).call(a,e,t);case 2:a.localCache[e]=JSON.stringify(t);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(e){var t=this,i=this;return n(o)(n(y).mark((function a(){var o;return n(y).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n(l)(n(h)(r.prototype),"_get",t).call(i,e);case 2:return o=a.sent,i.localCache[e]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(e){var t=this,i=this;return n(o)(n(y).mark((function a(){return n(y).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n(l)(n(h)(r.prototype),"_remove",t).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(jt);qt.type="LOCAL";var Bt=qt,Kt=function(e){"use strict";n(f)(r,e);var t=n(p)(r);function r(){return n(s)(this,r),t.call(this,(function(){return window.sessionStorage}),"SESSION")}return n(u)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(jt);
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
 */Kt.type="SESSION";var Ht=Kt;
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
 */function zt(e){return Promise.all(e.map((t=n(o)(n(y).mark((function e(t){var r;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return t.apply(this,arguments)})));var t}
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
 */var Wt=function(){"use strict";function e(t){n(s)(this,e),this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return n(u)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var t=this;return n(o)(n(y).mark((function r(){var i,a,s,u,c,l,h,f;return n(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=(i=e).data,s=a.eventId,u=a.eventType,c=a.data,null==(l=t.handlersMap[u])?void 0:l.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:u}),h=Array.from(l).map(function(){var e=n(o)(n(y).mark((function e(t){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t(i.origin,c));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.next=9,zt(h);case 9:f=r.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:u,response:f});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var n=this.receivers.find((function(e){return e.isListeningto(t)}));if(n)return n;var r=new e(t);return this.receivers.push(r),r}}]),e}();
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
function Gt(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */Wt.receivers=[];var Qt=function(){"use strict";function e(t){n(s)(this,e),this.target=t,this.handlers=new Set}return n(u)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return n(o)(n(y).mark((function a(){var o,s,u;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){n.next=3;break}throw new Error("connection_unavailable");case 3:return n.abrupt("return",new Promise((function(n,a){var c=Gt("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);u={messageChannel:o,onMessage:function(e){var t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),n(t.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(u),o.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:e,eventId:c,data:t},[o.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return n.stop()}}),a)})))()}}]),e}();
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
function Jt(){return void 0!==Yt().WorkerGlobalScope&&"function"==typeof Yt().importScripts}function Xt(){return $t.apply(this,arguments)}function $t(){return($t=n(o)(n(y).mark((function e(){var t;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return t=e.sent,e.abrupt("return",t.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
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
var Zt="firebaseLocalStorageDb",en="firebaseLocalStorage",tn="fbase_key",nn=function(){"use strict";function e(t){n(s)(this,e),this.request=t}return n(u)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),e}();function rn(e,t){return e.transaction([en],t?"readwrite":"readonly").objectStore(en)}function an(){var e=indexedDB.deleteDatabase(Zt);return new nn(e).toPromise()}function on(){var e=indexedDB.open(Zt,1);return new Promise((function(t,r){e.addEventListener("error",(function(){r(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(en,{keyPath:tn})}catch(e){r(e)}})),e.addEventListener("success",n(o)(n(y).mark((function r(){var i;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((i=e.result).objectStoreNames.contains(en)){n.next=12;break}return i.close(),n.next=5,an();case 5:return n.t0=t,n.next=8,on();case 8:n.t1=n.sent,(0,n.t0)(n.t1),n.next=13;break;case 12:t(i);case 13:case"end":return n.stop()}}),r)}))))}))}function sn(e,t,n){return un.apply(this,arguments)}function un(){return(un=n(o)(n(y).mark((function e(t,r,i){var a,o;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=rn(t,!0).put((a={},n(c)(a,tn,r),n(c)(a,"value",i),a)),e.abrupt("return",new nn(o).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function cn(e,t){return ln.apply(this,arguments)}function ln(){return(ln=n(o)(n(y).mark((function e(t,r){var i,a;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=rn(t,!1).get(r),e.next=3,new nn(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function hn(e,t){var n=rn(e,!0).delete(t);return new nn(n).toPromise()}var fn=function(){"use strict";function e(){n(s)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return n(u)(e,[{key:"_openDb",value:function(){var e=this;return n(o)(n(y).mark((function t(){return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,on();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),t)})))()}},{key:"_withRetries",value:function(e){var t=this;return n(o)(n(y).mark((function r(){var i,a;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=0;case 1:return n.prev=2,n.next=5,t._openDb();case 5:return a=n.sent,n.next=8,e(a);case 8:return n.abrupt("return",n.sent);case 11:if(n.prev=11,n.t0=n.catch(2),!(i++>3)){n.next=15;break}throw n.t0;case 15:t.db&&(t.db.close(),t.db=void 0);case 16:n.next=1;break;case 18:case"end":return n.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return n(o)(n(y).mark((function t(){return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Jt()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),t)})))()}},{key:"initializeReceiver",value:function(){var e=this;return n(o)(n(y).mark((function t(){return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.receiver=Wt._getInstance(Jt()?self:null),e.receiver._subscribe("keyChanged",function(){var t=n(o)(n(y).mark((function t(r,i){var a;return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return a=t.sent,t.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=n(o)(n(y).mark((function e(t,r){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})))()}},{key:"initializeSender",value:function(){var e=this;return n(o)(n(y).mark((function t(){var r,i,a;return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Xt();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new Qt(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(a=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),t)})))()}},{key:"notifyServiceWorker",value:function(e){var t=this;return n(o)(n(y).mark((function r(){return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.sender&&t.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===t.activeServiceWorker)){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,t.sender._send("keyChanged",{key:e},t.serviceWorkerReceiverAvailable?800:50);case 5:n.next=9;break;case 7:n.prev=7,n.t0=n.catch(2);case 9:case"end":return n.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return n(o)(n(y).mark((function e(){var t;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,on();case 5:return t=e.sent,e.next=8,sn(t,Vt,"1");case 8:return e.next=10,hn(t,Vt);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var t=this;return n(o)(n(y).mark((function r(){return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.pendingWrites++,n.prev=1,n.next=4,e();case 4:return n.prev=4,t.pendingWrites--,n.finish(4);case 7:case"end":return n.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,t){var r=this;return n(o)(n(y).mark((function i(){return n(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(n(o)(n(y).mark((function i(){return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r._withRetries((function(n){return sn(n,e,t)}));case 2:return r.localCache[e]=t,n.abrupt("return",r.notifyServiceWorker(e));case 4:case"end":return n.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var t=this;return n(o)(n(y).mark((function r(){var i;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t._withRetries((function(t){return cn(t,e)}));case 2:return i=n.sent,t.localCache[e]=i,n.abrupt("return",i);case 5:case"end":return n.stop()}}),r)})))()}},{key:"_remove",value:function(e){var t=this;return n(o)(n(y).mark((function r(){return n(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",t._withPendingWrite(n(o)(n(y).mark((function r(){return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t._withRetries((function(t){return hn(t,e)}));case 2:return delete t.localCache[e],n.abrupt("return",t.notifyServiceWorker(e));case 4:case"end":return n.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var e=this;return n(o)(n(y).mark((function t(){var r,i,a,o,s,u,c,l,h,f,d,v,p,m,g,k,w;return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=rn(e,!1).getAll();return new nn(t).toPromise()}));case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,u=void 0,t.prev=10,c=r[Symbol.iterator]();!(o=(l=c.next()).done);o=!0)h=l.value,f=h.fbase_key,d=h.value,a.add(f),JSON.stringify(e.localCache[f])!==JSON.stringify(d)&&(e.notifyListeners(f,d),i.push(f));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),s=!0,u=t.t0;case 18:t.prev=18,t.prev=19,o||null==c.return||c.return();case 21:if(t.prev=21,!s){t.next=24;break}throw u;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(v=!0,p=!1,m=void 0,t.prev=27,g=Object.keys(e.localCache)[Symbol.iterator]();!(v=(k=g.next()).done);v=!0)w=k.value,e.localCache[w]&&!a.has(w)&&(e.notifyListeners(w,null),i.push(w));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),p=!0,m=t.t1;case 35:t.prev=35,t.prev=36,v||null==g.return||g.return();case 38:if(t.prev=38,!p){t.next=41;break}throw m;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),t,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(n(o)(n(y).mark((function t(){return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),t)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();fn.type="LOCAL";var dn=fn;
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
 */function vn(e,t){return Q(e,"POST","/v2/accounts/mfaSignIn:start",G(e,t))}function pn(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=C("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function yn(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
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
yn("rcb"),new q(3e4,6e4);var mn="recaptcha";
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
 */function gn(e,t,n){return kn.apply(this,arguments)}function kn(){return(kn=n(o)(n(y).mark((function e(t,r,i){var a,o,s,u,c,l,h,f;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,O("string"==typeof o,t,"argument-error"),O(i.type===mn,t,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return O("enroll"===u.type,t,"internal-error"),e.next=15,Ft(t,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return O("signin"===u.type,t,"internal-error"),O(l=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,t,"missing-multi-factor-info"),e.next=24,vn(t,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:o}});case 24:return h=e.sent,e.abrupt("return",h.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,ct(t,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return f=e.sent.sessionInfo,e.abrupt("return",f);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
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
var wn=function(){"use strict";function e(t){n(s)(this,e),this.providerId=e.PROVIDER_ID,this.auth=ze(t)}return n(u)(e,[{key:"verifyPhoneNumber",value:function(e,t){return gn(this.auth,e,(0,m.getModularInstance)(t))}}],[{key:"credential",value:function(e,t){return pt._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var n=t;return e.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?pt._fromTokenResponse(n,r):null}}]),e}();
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
function bn(e,t){return t?M(t):(O(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */wn.PROVIDER_ID="phone",wn.PHONE_SIGN_IN_METHOD="phone";var xn=function(e){"use strict";n(f)(r,e);var t=n(p)(r);function r(e){var i;return n(s)(this,r),(i=t.call(this,"custom","custom")).params=e,i}return n(u)(r,[{key:"_getIdTokenResponse",value:function(e){return ot(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return ot(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return ot(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(Je);function En(e){return Ot(e.auth,new xn(e),e.bypassAuthState)}function Tn(e){var t=e.auth,n=e.user;return O(n,t,"internal-error"),Dt(n,new xn(e),e.bypassAuthState)}function In(e){return _n.apply(this,arguments)}function _n(){return(_n=n(o)(n(y).mark((function e(t){var r,i;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.auth,O(i=t.user,r,"internal-error"),e.abrupt("return",Ct(i,new xn(t),t.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var Sn=function(){"use strict";function e(t,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];n(s)(this,e),this.auth=t,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return n(u)(e,[{key:"execute",value:function(){var e,t=this;return new Promise((e=n(o)(n(y).mark((function e(r,i){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,t.resolver._initialize(t.auth);case 4:return t.eventManager=e.sent,e.next=7,t.onExecution();case 7:t.eventManager.registerConsumer(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,n){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var t=this;return n(o)(n(y).mark((function r(){var i,a,o,s,u,c,l;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=e.urlResponse,a=e.sessionId,o=e.postBody,s=e.tenantId,u=e.error,c=e.type,!u){n.next=4;break}return t.reject(u),n.abrupt("return");case 4:return l={auth:t.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:t.user,bypassAuthState:t.bypassAuthState},n.prev=5,n.t0=t,n.next=9,t.getIdpTask(c)(l);case 9:n.t1=n.sent,n.t0.resolve.call(n.t0,n.t1),n.next=16;break;case 13:n.prev=13,n.t2=n.catch(5),t.reject(n.t2);case 16:case"end":return n.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return En;case"linkViaPopup":case"linkViaRedirect":return In;case"reauthViaPopup":case"reauthViaRedirect":return Tn;default:S(this.auth,"internal-error")}}},{key:"resolve",value:function(e){L(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){L(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),Cn=new q(2e3,1e4);
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
 */function An(e,t,n){return Dn.apply(this,arguments)}function Dn(){return(Dn=n(o)(n(y).mark((function e(t,r,i){var a,o,s;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ze(t),D(t,r,gt),o=bn(a,i),s=new Nn(a,"signInViaPopup",r,o),e.abrupt("return",s.executeNotNull());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Nn=function(e){"use strict";n(f)(r,e);var t=n(p)(r);function r(e,a,o,u,c){var l;return n(s)(this,r),(l=t.call(this,e,a,u,c)).provider=o,l.authWindow=null,l.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=n(i)(l),l}return n(u)(r,[{key:"executeNotNull",value:function(){var e=this;return n(o)(n(y).mark((function t(){var r;return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return O(r=t.sent,e.auth,"internal-error"),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))()}},{key:"onExecution",value:function(){var e=this;return n(o)(n(y).mark((function t(){var r;return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return L(1===e.filter.length,"Popup operations only handle one event"),r=Gt(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],r);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=r,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(C(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),t)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(C(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(C(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,Cn.get())};t()}}]),r}(Sn);Nn.currentPopupAction=null;
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
var On=new Map,Rn=function(e){"use strict";n(f)(r,e);var t=n(p)(r);function r(e,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n(s)(this,r),(a=t.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return n(u)(r,[{key:"execute",value:function(){var e=this,t=this;return n(o)(n(y).mark((function i(){var a,o;return n(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=On.get(t.auth._key())){i.next=21;break}return i.prev=2,i.next=5,Ln(t.resolver,t.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,n(l)(n(h)(r.prototype),"execute",e).call(t);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:On.set(t.auth._key(),a);case 21:return t.bypassAuthState||On.set(t.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var t=this,i=this,a=function(){return n(l)(n(h)(r.prototype),"onAuthEvent",t)};return n(o)(n(y).mark((function t(){var r;return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",a().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(r=t.sent)){t.next=16;break}return i.user=r,t.abrupt("return",a().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),t)})))()}},{key:"onExecution",value:function(){return n(o)(n(y).mark((function e(){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),r}(Sn);function Ln(e,t){return Pn.apply(this,arguments)}function Pn(){return(Pn=n(o)(n(y).mark((function e(t,r){var i,a,o;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Fn(r),a=Un(t),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Mn(e,t){On.set(e._key(),t)}function Un(e){return M(e._redirectPersistence)}function Fn(e){return Ce("pendingRedirect",e.config.apiKey,e.name)}
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
 */function Vn(e,t){return jn.apply(this,arguments)}function jn(){return jn=n(o)(n(y).mark((function e(t,r){var i,a,o,s,u,c=arguments;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a=ze(t),o=bn(a,r),s=new Rn(a,o,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),e)}))),jn.apply(this,arguments)}
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
var qn=function(){"use strict";function e(t){n(s)(this,e),this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return n(u)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kn(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!Kn(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(C(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bn(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Bn(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function Bn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Kn(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function Hn(e){return zn.apply(this,arguments)}function zn(){return zn=
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
n(o)(n(y).mark((function e(t){var r,i=arguments;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",Q(t,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),e)}))),zn.apply(this,arguments)}
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
 */var Wn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gn=/^https?/;function Qn(){return(Qn=n(o)(n(y).mark((function e(t){var r,i,a,o,s,u,c;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Hn(t);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!Yn(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:S(t,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Yn(e){var t=F(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!Gn.test(r))return!1;if(Wn.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
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
 */var Jn=new q(3e4,6e4);function Xn(){var e=Yt().___jsl,t=!0,r=!1,i=void 0;if(null==e?void 0:e.H)try{for(var a,o=Object.keys(e.H)[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=a.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=n(v)(e.H[s].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){r=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw i}}}var $n=null;function Zn(e){return $n=$n||function(e){return new Promise((function(t,n){var r,i,a;function o(){Xn(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Xn(),n(C(e,"network-request-failed"))},timeout:Jn.get()})}if(null===(i=null===(r=Yt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=Yt().gapi)||void 0===a?void 0:a.load)){var s=yn("iframefcb");return Yt()[s]=function(){gapi.load?o():n(C(e,"network-request-failed"))},pn("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw $n=null,e}))}(e),$n}
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
 */var er=new q(5e3,15e3),tr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rr(e){var t=e.config;O(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?B(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:g.SDK_VERSION},i=nr.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat((0,m.querystring)(r).slice(1))}function ir(e){return ar.apply(this,arguments)}function ar(){return ar=n(o)(n(y).mark((function e(t){var r,i;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Zn(t);case 2:return r=e.sent,O(i=Yt().gapi,t,"internal-error"),e.abrupt("return",r.open({where:document.body,url:rr(t),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tr,dontclear:!0},(function(e){return new Promise((r=n(o)(n(y).mark((function r(i,a){var o,s,u;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u=function(){Yt().clearTimeout(s),i(e)},n.next=3,e.restyle({setHideOnLeave:!1});case 3:o=C(t,"network-request-failed"),s=Yt().setTimeout((function(){a(o)}),er.get()),e.ping(u).then(u,(function(){a(o)}));case 7:case"end":return n.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return e.stop()}}),e)}))),ar.apply(this,arguments)}
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
 */var or={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sr="_blank",ur="http://localhost",cr=function(){"use strict";function e(t){n(s)(this,e),this.window=t,this.associatedEvent=null}return n(u)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function lr(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},or),{width:i.toString(),height:a.toString(),top:o,left:s}),l=(0,m.getUA)().toLowerCase();r&&(u=Re(l)?sr:r),Ne(l)&&(t=t||ur,c.scrollbars="yes");var h=Object.entries(c).reduce((function(e,t){var r=n(d)(t,2),i=r[0],a=r[1];return"".concat(e).concat(i,"=").concat(a,",")}),"");if(Ve(l)&&"_self"!==u)return hr(t||"",u),new cr(null);var f=window.open(t||"",u,h);O(f,e,"popup-blocked");try{f.focus()}catch(e){}return new cr(f)}function hr(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */var fr="__/auth/handler",dr="emulator/auth/handler";function vr(e,t,r,i,a,o){O(e.config.authDomain,e,"auth-domain-config-required"),O(e.config.apiKey,e,"invalid-api-key");var s={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:i,v:g.SDK_VERSION,eventId:a};if(t instanceof gt){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",(0,m.isEmpty)(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var h,f=Object.entries(o||{})[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var v=n(d)(h.value,2),p=v[0],y=v[1];s[p]=y}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}}if(t instanceof kt){var k=t.getScopes().filter((function(e){return""!==e}));k.length>0&&(s.scopes=k.join(","))}e.tenantId&&(s.tid=e.tenantId);var w,b,x=s,E=!0,T=!1,I=void 0;try{for(var _,S=Object.keys(x)[Symbol.iterator]();!(E=(_=S.next()).done);E=!0){var C=_.value;void 0===x[C]&&delete x[C]}}catch(e){T=!0,I=e}finally{try{E||null==S.return||S.return()}finally{if(T)throw I}}return"".concat((w=e,b=w.config,b.emulator?B(b,dr):"https://".concat(b.authDomain,"/").concat(fr)),"?").concat((0,m.querystring)(x).slice(1))}
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
var pr="webStorageSupport",yr=function(){"use strict";function e(){n(s)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ht,this._completeRedirectFn=Vn,this._overrideRedirectResult=Mn}return n(u)(e,[{key:"_openPopup",value:function(e,t,r,i){var a=this;return n(o)(n(y).mark((function o(){var s,u;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return L(null===(s=a.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=vr(e,t,r,F(),i),n.abrupt("return",lr(e,u,Gt()));case 4:case"end":return n.stop()}}),o)})))()}},{key:"_openRedirect",value:function(e,t,r,i){var a=this;return n(o)(n(y).mark((function o(){return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a._originValidation(e);case 2:return o=vr(e,t,r,F(),i),Yt().location.href=o,n.abrupt("return",new Promise((function(){})));case 4:case"end":return n.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(L(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(e){var t=this;return n(o)(n(y).mark((function r(){var i,a;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ir(e);case 2:return i=n.sent,a=new qn(e),i.register("authEvent",(function(t){return O(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:a.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),t.eventManagers[e._key()]={manager:a},t.iframes[e._key()]=i,n.abrupt("return",a);case 8:case"end":return n.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(pr,{type:pr},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),S(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Qn.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return qe()||Oe()||Fe()}}]),e}(),mr=yr,gr=function(e){"use strict";n(f)(r,e);var t=n(p)(r);function r(e){var i;return n(s)(this,r),(i=t.call(this,"phone")).credential=e,i}return n(u)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return Q(e,"POST","/v2/accounts/mfaEnrollment:finalize",G(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return Q(e,"POST","/v2/accounts/mfaSignIn:finalize",G(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(function(){"use strict";function e(t){n(s)(this,e),this.factorId=t}return n(u)(e,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return R("unexpected MultiFactorSessionType")}}}]),e}());(function(){"use strict";function e(){n(s)(this,e)}return n(u)(e,null,[{key:"assertion",value:function(e){return gr._fromCredential(e)}}]),e}()).FACTOR_ID="phone";var kr="@firebase/auth",wr="0.21.0",br=function(){"use strict";function e(t){n(s)(this,e),this.auth=t,this.internalListeners=new Map}return n(u)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var t=this;return n(o)(n(y).mark((function r(){var i;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.assertAuthConfigured(),n.next=3,t.auth._initializationPromise;case 3:if(t.auth.currentUser){n.next=5;break}return n.abrupt("return",null);case 5:return n.next=7,t.auth.currentUser.getIdToken(e);case 7:return i=n.sent,n.abrupt("return",{accessToken:i});case 9:case"end":return n.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
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
var xr,Er=(0,m.getExperimentalSetting)("authIdTokenMaxAge")||300,Tr=null,Ir=function(e){return t=n(o)(n(y).mark((function t(r){var i,a,o;return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r,!t.t0){t.next=5;break}return t.next=4,r.getIdTokenResult();case 4:t.t0=t.sent;case 5:if(i=t.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>Er)){t.next=9;break}return t.abrupt("return");case 9:if(o=null==i?void 0:i.token,Tr!==o){t.next=12;break}return t.abrupt("return");case 12:return Tr=o,t.next=15,fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return t.stop()}}),t)}))),function(e){return t.apply(this,arguments)};var t};function _r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getApp)(),t=(0,g._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();var n=U(e,{popupRedirectResolver:mr,persistence:[dn,Bt,Ht]}),r=(0,m.getExperimentalSetting)("authTokenSyncURL");if(r){var i=Ir(r);Pt(n,i,(function(){return i(n.currentUser)})),Lt(n,(function(e){return i(e)}))}var a=(0,m.getDefaultEmulatorHost)("auth");return a&&Ge(n,"http://".concat(a)),n}xr="Browser",(0,g._registerComponent)(new(0,b.Component)("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=r.options,o=a.apiKey,s=a.authDomain;return function(e,t){O(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),O(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:xr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Be(xr)},i=new He(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(M);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),(0,g._registerComponent)(new(0,b.Component)("auth-internal",(function(e){var t=ze(e.getProvider("auth").getImmediate());return new br(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,g.registerVersion)(kr,wr,
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
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(xr)),(0,g.registerVersion)(kr,wr,"esm2017")})),a.register("jh8P3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return i(e,t,n)};var n,r=(n=a("2mz0K"))&&n.__esModule?n:{default:n};function i(e,t,n){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=r.default(e,t);if(i){var a=Object.getOwnPropertyDescriptor(i,t);return a.get?a.get.call(n||e):a.value}})(e,t,n)}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=a("fVNic"))&&n.__esModule?n:{default:n}})),a.register("4tSb9",(function(t,n){e(t.exports,"__rest",(function(){return r}));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create})),a.register("iGaYn",(function(t,r){e(t.exports,"auth",(function(){return m})),e(t.exports,"Firebase",(function(){return w}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("hKHmD"),c=a("2TvXO");a("fkNhc");var l=a("MjY8E");a("gQOBw");var h=a("ax7qk");a("6m2hf");var f=a("221Dt"),d=document.querySelector("#signin"),v=document.querySelector("#signout"),p=document.querySelector("#googleUser"),y=(0,l.initializeApp)({apiKey:"AIzaSyAulP83L0QY90_yCDYRohOctOjcPDqfmkw",authDomain:"command-project-js-demo.firebaseapp.com",projectId:"command-project-js-demo",storageBucket:"command-project-js-demo.appspot.com",messagingSenderId:"488245804301",appId:"1:488245804301:web:904f7218c509613983c444",measurementId:"G-1QM91ECZ3B"}),m=(0,h.n)(y),g=new(0,h.Q),k=(m.currentUser,(0,f.getFirestore)(y)),w=function(){"use strict";function e(){n(o)(this,e)}return n(s)(e,[{key:"singInWithGoogle",value:function(){(0,h.c)(m,g).then((function(e){var t=e.user;d.classList.add("signOut"),v.classList.add("signIn"),p.innerHTML='<img class="user-img" src="'.concat(t.photoURL,'">')})).catch((function(e){console.log(e)}))}},{key:"singOutUser",value:function(){(0,h.y)(m).then((function(){d.classList.remove("signOut"),v.classList.remove("signIn"),p.style.display="none"})).catch((function(e){console.log(e)}))}},{key:"setDoc",value:function(e){return n(i)(n(c).mark((function t(){var r,i,a,o;return n(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=document.querySelector(".movie__id"),i=r.id,a=m.currentUser.uid,o=(0,f.doc)(k,a,e),console.log(i),console.log(a),t.next=8,(0,f.setDoc)(o,n(u)({},i,i),{merge:!0});case 8:case"end":return t.stop()}}),t)})))()}},{key:"getDoc",value:function(e){return n(i)(n(c).mark((function t(){var r,i,a;return n(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=m.currentUser.uid,i=(0,f.doc)(k,r,e),t.next=4,(0,f.getDoc)(i);case 4:(a=t.sent).exists()?console.log("".concat(e,":"),a.data()):console.log("No such document!");case 6:case"end":return t.stop()}}),t)})))()}}]),e}()})),a.register("fkNhc",(function(t,n){e(t.exports,"initializeApp",(function(){return a("MjY8E").initializeApp})),e(t.exports,"registerVersion",(function(){return a("MjY8E").registerVersion}));a("MjY8E");
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
(0,a("MjY8E").registerVersion)("firebase","9.15.0","app")})),a.register("6m2hf",(function(t,n){e(t.exports,"getFirestore",(function(){return a("221Dt").getFirestore})),e(t.exports,"doc",(function(){return a("221Dt").doc})),e(t.exports,"setDoc",(function(){return a("221Dt").setDoc})),e(t.exports,"getDoc",(function(){return a("221Dt").getDoc})),a("221Dt")})),a.register("221Dt",(function(t,r){e(t.exports,"doc",(function(){return Do})),e(t.exports,"getFirestore",(function(){return Go})),e(t.exports,"getDoc",(function(){return Ts})),e(t.exports,"setDoc",(function(){return _s}));var i=a("bpxeT"),o=a("8MBJY"),s=a("ge8co"),u=a("a2hTj"),c=a("jh8P3"),l=a("fVNic"),h=a("eYQtU"),f=a("jmhxu"),d=a("1t1Wn"),v=a("8nrFW"),p=(a("l5bVx"),a("2MbLg")),y=a("2TvXO"),m=a("MjY8E"),g=a("6ExWU"),k=a("kZfxc"),w=a("2xDiJ"),b=a("6RwJk"),x=(a("6qd2L"),"@firebase/firestore"),E=function(){"use strict";function e(t){n(o)(this,e),this.uid=t}return n(u)(e,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(e){return e.uid===this.uid}}]),e}();E.UNAUTHENTICATED=new E(null),E.GOOGLE_CREDENTIALS=new E("google-credentials-uid"),E.FIRST_PARTY=new E("first-party-uid"),E.MOCK_USER=new E("mock-user");
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
var T="9.15.0",I=new(0,k.Logger)("@firebase/firestore");
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
 */function _(){return I.logLevel}function S(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];if(I.logLevel<=k.LogLevel.DEBUG){var a,o=r.map(D);(a=I).debug.apply(a,["Firestore (".concat(T,"): ").concat(e)].concat(n(v)(o)))}}function C(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];if(I.logLevel<=k.LogLevel.ERROR){var a,o=r.map(D);(a=I).error.apply(a,["Firestore (".concat(T,"): ").concat(e)].concat(n(v)(o)))}}function A(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];if(I.logLevel<=k.LogLevel.WARN){var a,o=r.map(D);(a=I).warn.apply(a,["Firestore (".concat(T,"): ").concat(e)].concat(n(v)(o)))}}function D(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */var t}
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
 */function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(T,") INTERNAL ASSERTION FAILED: ")+e;throw C(t),new Error(t)}function O(e,t){e||N()}function R(e,t){return e}
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
 */var L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},P=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e,i){var a;return n(o)(this,r),(a=t.call(this,e,i)).code=e,a.message=i,a.toString=function(){return"".concat(a.name,": [code=").concat(a.code,"]: ").concat(a.message)},n(f)(a)}return r}(w.FirebaseError),M=function e(){"use strict";var t=this;n(o)(this,e),this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))},U=function e(t,r){"use strict";n(o)(this,e),this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(t))},F=function(){"use strict";function e(){n(o)(this,e)}return n(u)(e,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(E.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),e}(),V=function(){"use strict";function e(t){n(o)(this,e),this.token=t,this.changeListener=null}return n(u)(e,[{key:"getToken",value:function(){return Promise.resolve(this.token)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){var n=this;this.changeListener=t,e.enqueueRetryable((function(){return t(n.token.user)}))}},{key:"shutdown",value:function(){this.changeListener=null}}]),e}(),j=function(){"use strict";function e(t){n(o)(this,e),this.t=t,this.currentUser=E.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}return n(u)(e,[{key:"start",value:function(e,t){var r=this,a=this.i,o=function(e){return r.i!==a?(a=r.i,t(e)):Promise.resolve()},s=new M;this.o=function(){var t=r;r.i++,r.currentUser=r.u(),s.resolve(),s=new M,e.enqueueRetryable((function(){return o(t.currentUser)}))};var u=function(){var t=s,a=r;e.enqueueRetryable(n(i)(n(y).mark((function e(){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.promise;case 2:return e.next=4,o(a.currentUser);case 4:case"end":return e.stop()}}),e)}))))},c=function(e){S("FirebaseAuthCredentialsProvider","Auth detected"),r.auth=e,r.auth.addAuthTokenListener(r.o),u()};this.t.onInit((function(e){return c(e)})),setTimeout((function(){if(!r.auth){var e=r.t.getImmediate({optional:!0});e?c(e):(S("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new M)}}),0),u()}},{key:"getToken",value:function(){var e=this,t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((function(n){return e.i!==t?(S("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),e.getToken()):n?(O("string"==typeof n.accessToken),new U(n.accessToken,e.currentUser)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.auth&&this.auth.removeAuthTokenListener(this.o)}},{key:"u",value:function(){var e=this.auth&&this.auth.getUid();return O(null===e||"string"==typeof e),new E(e)}}]),e}(),q=function(){"use strict";function e(t,r,i,a){n(o)(this,e),this.h=t,this.l=r,this.m=i,this.g=a,this.type="FirstParty",this.user=E.FIRST_PARTY,this.p=new Map}return n(u)(e,[{key:"I",value:function(){return this.g?this.g():(O(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}},{key:"headers",get:function(){this.p.set("X-Goog-AuthUser",this.l);var e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}]),e}(),B=function(){"use strict";function e(t,r,i,a){n(o)(this,e),this.h=t,this.l=r,this.m=i,this.g=a}return n(u)(e,[{key:"getToken",value:function(){return Promise.resolve(new q(this.h,this.l,this.m,this.g))}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(E.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),e}(),K=function e(t){"use strict";n(o)(this,e),this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)},H=function(){"use strict";function e(t){n(o)(this,e),this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}return n(u)(e,[{key:"start",value:function(e,t){var n=this;this.o=function(r){e.enqueueRetryable((function(){return function(e){null!=e.error&&S("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: ".concat(e.error.message));var r=e.token!==n.A;return n.A=e.token,S("FirebaseAppCheckTokenProvider","Received ".concat(r?"new":"existing"," token.")),r?t(e.token):Promise.resolve()}(r)}))};var r=function(e){S("FirebaseAppCheckTokenProvider","AppCheck detected"),n.appCheck=e,n.appCheck.addTokenListener(n.o)};this.T.onInit((function(e){return r(e)})),setTimeout((function(){if(!n.appCheck){var e=n.T.getImmediate({optional:!0});e?r(e):S("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}},{key:"getToken",value:function(){var e=this,t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((function(t){return t?(O("string"==typeof t.token),e.A=t.token,new K(t.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}]),e}();
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
function z(e){var t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(var r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */var W=function(){"use strict";function e(){n(o)(this,e)}return n(u)(e,null,[{key:"R",value:function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";n.length<20;)for(var r=z(40),i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length));return n}}]),e}();function G(e,t){return e<t?-1:e>t?1:0}function Q(e,t,n){return e.length===t.length&&e.every((function(e,r){return n(e,t[r])}))}
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
var Y=function(){"use strict";function e(t,r){if(n(o)(this,e),this.seconds=t,this.nanoseconds=r,r<0)throw new P(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new P(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(t<-62135596800)throw new P(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new P(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}return n(u)(e,[{key:"toDate",value:function(){return new Date(this.toMillis())}},{key:"toMillis",value:function(){return 1e3*this.seconds+this.nanoseconds/1e6}},{key:"_compareTo",value:function(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}},{key:"isEqual",value:function(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}},{key:"toString",value:function(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}},{key:"toJSON",value:function(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}},{key:"valueOf",value:function(){var e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}],[{key:"now",value:function(){return e.fromMillis(Date.now())}},{key:"fromDate",value:function(t){return e.fromMillis(t.getTime())}},{key:"fromMillis",value:function(t){var n=Math.floor(t/1e3);return new e(n,Math.floor(1e6*(t-1e3*n)))}}]),e}(),J=function(){"use strict";function e(t){n(o)(this,e),this.timestamp=t}return n(u)(e,[{key:"compareTo",value:function(e){return this.timestamp._compareTo(e.timestamp)}},{key:"isEqual",value:function(e){return this.timestamp.isEqual(e.timestamp)}},{key:"toMicroseconds",value:function(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}},{key:"toString",value:function(){return"SnapshotVersion("+this.timestamp.toString()+")"}},{key:"toTimestamp",value:function(){return this.timestamp}}],[{key:"fromTimestamp",value:function(t){return new e(t)}},{key:"min",value:function(){return new e(new Y(0,0))}},{key:"max",value:function(){return new e(new Y(253402300799,999999999))}}]),e}(),X=function(){"use strict";function e(t,r,i){n(o)(this,e),void 0===r?r=0:r>t.length&&N(),void 0===i?i=t.length-r:i>t.length-r&&N(),this.segments=t,this.offset=r,this.len=i}return n(u)(e,[{key:"length",get:function(){return this.len}},{key:"isEqual",value:function(t){return 0===e.comparator(this,t)}},{key:"child",value:function(t){var n=this.segments.slice(this.offset,this.limit());return t instanceof e?t.forEach((function(e){n.push(e)})):n.push(t),this.construct(n)}},{key:"limit",value:function(){return this.offset+this.length}},{key:"popFirst",value:function(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}},{key:"popLast",value:function(){return this.construct(this.segments,this.offset,this.length-1)}},{key:"firstSegment",value:function(){return this.segments[this.offset]}},{key:"lastSegment",value:function(){return this.get(this.length-1)}},{key:"get",value:function(e){return this.segments[this.offset+e]}},{key:"isEmpty",value:function(){return 0===this.length}},{key:"isPrefixOf",value:function(e){if(e.length<this.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"isImmediateParentOf",value:function(e){if(this.length+1!==e.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"forEach",value:function(e){for(var t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}},{key:"toArray",value:function(){return this.segments.slice(this.offset,this.limit())}}],[{key:"comparator",value:function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var i=e.get(r),a=t.get(r);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}]),e}(),$=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(){return n(o)(this,r),t.apply(this,arguments)}return n(u)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().join("/")}},{key:"toString",value:function(){return this.canonicalString()}}],[{key:"fromString",value:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var a=[],o=!0,s=!1,u=void 0;try{for(var c,l=t[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h,f=c.value;if(f.indexOf("//")>=0)throw new P(L.INVALID_ARGUMENT,"Invalid segment (".concat(f,"). Paths must not contain // in them."));(h=a).push.apply(h,n(v)(f.split("/").filter((function(e){return e.length>0}))))}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return new r(a)}},{key:"emptyPath",value:function(){return new r([])}}]),r}(X),Z=/^[_a-zA-Z][_a-zA-Z0-9]*$/,ee=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(){return n(o)(this,r),t.apply(this,arguments)}return n(u)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().map((function(e){return e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),r.isValidIdentifier(e)||(e="`"+e+"`"),e})).join(".")}},{key:"toString",value:function(){return this.canonicalString()}},{key:"isKeyField",value:function(){return 1===this.length&&"__name__"===this.get(0)}}],[{key:"isValidIdentifier",value:function(e){return Z.test(e)}},{key:"keyField",value:function(){return new r(["__name__"])}},{key:"fromServerFormat",value:function(e){for(var t=[],n="",i=0,a=function(){if(0===n.length)throw new P(L.INVALID_ARGUMENT,"Invalid field path (".concat(e,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));t.push(n),n=""},o=!1;i<e.length;){var s=e[i];if("\\"===s){if(i+1===e.length)throw new P(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);var u=e[i+1];if("\\"!==u&&"."!==u&&"`"!==u)throw new P(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,i+=2}else"`"===s?(o=!o,i++):"."!==s||o?(n+=s,i++):(a(),i++)}if(a(),o)throw new P(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new r(t)}},{key:"emptyPath",value:function(){return new r([])}}]),r}(X),te=function(){"use strict";function e(t){n(o)(this,e),this.path=t}return n(u)(e,[{key:"collectionGroup",get:function(){return this.path.popLast().lastSegment()}},{key:"hasCollectionId",value:function(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}},{key:"getCollectionGroup",value:function(){return this.path.get(this.path.length-2)}},{key:"getCollectionPath",value:function(){return this.path.popLast()}},{key:"isEqual",value:function(e){return null!==e&&0===$.comparator(this.path,e.path)}},{key:"toString",value:function(){return this.path.toString()}}],[{key:"fromPath",value:function(t){return new e($.fromString(t))}},{key:"fromName",value:function(t){return new e($.fromString(t).popFirst(5))}},{key:"empty",value:function(){return new e($.emptyPath())}},{key:"comparator",value:function(e,t){return $.comparator(e.path,t.path)}},{key:"isDocumentKey",value:function(e){return e.length%2==0}},{key:"fromSegments",value:function(t){return new e(new $(t.slice()))}}]),e}(),ne=function e(t,r,i,a){"use strict";n(o)(this,e),this.indexId=t,this.collectionGroup=r,this.fields=i,this.indexState=a};
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
 */ne.UNKNOWN_ID=-1;function re(e,t){var n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=J.fromTimestamp(1e9===r?new Y(n+1,0):new Y(n,r));return new ae(i,te.empty(),t)}function ie(e){return new ae(e.readTime,e.key,-1)}var ae=function(){"use strict";function e(t,r,i){n(o)(this,e),this.readTime=t,this.documentKey=r,this.largestBatchId=i}return n(u)(e,null,[{key:"min",value:function(){return new e(J.min(),te.empty(),-1)}},{key:"max",value:function(){return new e(J.max(),te.empty(),-1)}}]),e}();function oe(e,t){var n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=te.comparator(e.documentKey,t.documentKey))?n:G(e.largestBatchId,t.largestBatchId)}
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
 */var se="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",ue=function(){"use strict";function e(){n(o)(this,e),this.onCommittedListeners=[]}return n(u)(e,[{key:"addOnCommittedListener",value:function(e){this.onCommittedListeners.push(e)}},{key:"raiseOnCommittedEvent",value:function(){this.onCommittedListeners.forEach((function(e){return e()}))}}]),e}();function ce(e){return le.apply(this,arguments)}function le(){return(le=
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
n(i)(n(y).mark((function e(t){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.code===L.FAILED_PRECONDITION&&t.message===se){e.next=2;break}throw t;case 2:S("LocalStore","Unexpectedly lost primary lease");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var he=function(){"use strict";function e(t){var r=this;n(o)(this,e),this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((function(e){r.isDone=!0,r.result=e,r.nextCallback&&r.nextCallback(e)}),(function(e){r.isDone=!0,r.error=e,r.catchCallback&&r.catchCallback(e)}))}return n(u)(e,[{key:"catch",value:function(e){return this.next(void 0,e)}},{key:"next",value:function(t,n){var r=this;return this.callbackAttached&&N(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new e((function(e,i){var a=r;r.nextCallback=function(n){a.wrapSuccess(t,n).next(e,i)},r.catchCallback=function(t){a.wrapFailure(n,t).next(e,i)}}))}},{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){e.next(t,n)}))}},{key:"wrapUserFunction",value:function(t){try{var n=t();return n instanceof e?n:e.resolve(n)}catch(t){return e.reject(t)}}},{key:"wrapSuccess",value:function(t,n){return t?this.wrapUserFunction((function(){return t(n)})):e.resolve(n)}},{key:"wrapFailure",value:function(t,n){return t?this.wrapUserFunction((function(){return t(n)})):e.reject(n)}}],[{key:"resolve",value:function(t){return new e((function(e,n){e(t)}))}},{key:"reject",value:function(t){return new e((function(e,n){n(t)}))}},{key:"waitFor",value:function(t){return new e((function(e,n){var r=0,i=0,a=!1;t.forEach((function(t){++r,t.next((function(){++i,a&&i===r&&e()}),(function(e){return n(e)}))})),a=!0,i===r&&e()}))}},{key:"or",value:function(t){var n=e.resolve(!1),r=!0,i=!1,a=void 0;try{for(var o,s=function(t,r){var i=r.value;n=n.next((function(t){return t?e.resolve(t):i()}))},u=t[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n}},{key:"forEach",value:function(e,t){var n=this,r=[];return e.forEach((function(e,i){r.push(t.call(n,e,i))})),this.waitFor(r)}},{key:"mapArray",value:function(t,n){return new e((function(e,r){for(var i=function(i){var u=i;n(t[u]).next((function(t){o[u]=t,++s===a&&e(o)}),(function(e){return r(e)}))},a=t.length,o=new Array(a),s=0,u=0;u<a;u++)i(u)}))}},{key:"doWhile",value:function(t,n){return new e((function(e,r){var i=function(){!0===t()?n().next((function(){i()}),r):e()};i()}))}}]),e}();
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
 */function fe(e){return"IndexedDbTransactionError"===e.name}var de=function(){"use strict";function e(t,r){var i=this;n(o)(this,e),this.previousValue=t,r&&(r.sequenceNumberHandler=function(e){return i.ut(e)},this.ct=function(e){return r.writeSequenceNumber(e)})}return n(u)(e,[{key:"ut",value:function(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}},{key:"next",value:function(){var e=++this.previousValue;return this.ct&&this.ct(e),e}}]),e}();de.at=-1;
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
var ve=function e(t,r,i,a,s,u,c,l){"use strict";n(o)(this,e),this.databaseId=t,this.appId=r,this.persistenceKey=i,this.host=a,this.ssl=s,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.useFetchStreams=l},pe=function(){"use strict";function e(t,r){n(o)(this,e),this.projectId=t,this.database=r||"(default)"}return n(u)(e,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(t){return t instanceof e&&t.projectId===this.projectId&&t.database===this.database}}],[{key:"empty",value:function(){return new e("","")}}]),e}();
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
function ye(e){var t=0;for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function me(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ge(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */function ke(e){return null==e}function we(e){return 0===e&&1/e==-1/0}function be(e){return"number"==typeof e&&Number.isInteger(e)&&!we(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */var xe=Symbol.iterator,Ee=function(){"use strict";function e(t){n(o)(this,e),this.binaryString=t}return n(u)(e,[{key:xe,value:function(){var e=this,t=0;return{next:function(){return t<e.binaryString.length?{value:e.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var e;return e=this.binaryString,btoa(e)}},{key:"toUint8Array",value:function(){return function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(e){return G(this.binaryString,e.binaryString)}},{key:"isEqual",value:function(e){return this.binaryString===e.binaryString}}],[{key:"fromBase64String",value:function(t){return new e(atob(t))}},{key:"fromUint8Array",value:function(t){return new e(function(e){for(var t="",n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(t))}}]),e}();
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
 */Ee.EMPTY_BYTE_STRING=new Ee("");var Te=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ie(e){if(O(!!e),"string"==typeof e){var t=0,n=Te.exec(e);if(O(!!n),n[1]){var r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}var i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:_e(e.seconds),nanos:_e(e.nanos)}}function _e(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Se(e){return"string"==typeof e?Ee.fromBase64String(e):Ee.fromUint8Array(e)}
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
 */function Ce(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ae(e){var t=e.mapValue.fields.__previous_value__;return Ce(t)?Ae(t):t}function De(e){var t=Ie(e.mapValue.fields.__local_write_time__.timestampValue);return new Y(t.seconds,t.nanos)}
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
 */var Ne={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Oe(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ce(e)?4:ze(e)?9007199254740991:10:N()}function Re(e,t){if(e===t)return!0;var n,r=Oe(e);if(r!==Oe(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return De(e).isEqual(De(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;var n=Ie(e.timestampValue),r=Ie(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return n=t,Se(e.bytesValue).isEqual(Se(n.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return _e(e.geoPointValue.latitude)===_e(t.geoPointValue.latitude)&&_e(e.geoPointValue.longitude)===_e(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return _e(e.integerValue)===_e(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){var n=_e(e.doubleValue),r=_e(t.doubleValue);return n===r?we(n)===we(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Q(e.arrayValue.values||[],t.arrayValue.values||[],Re);case 10:return function(e,t){var n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ye(n)!==ye(r))return!1;for(var i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Re(n[i],r[i])))return!1;return!0}(e,t);default:return N()}}function Le(e,t){return void 0!==(e.values||[]).find((function(e){return Re(e,t)}))}function Pe(e,t){if(e===t)return 0;var n,r,i,a,o=Oe(e),s=Oe(t);if(o!==s)return G(o,s);switch(o){case 0:case 9007199254740991:return 0;case 1:return G(e.booleanValue,t.booleanValue);case 2:return r=t,i=_e((n=e).integerValue||n.doubleValue),a=_e(r.integerValue||r.doubleValue),i<a?-1:i>a?1:i===a?0:isNaN(i)?isNaN(a)?0:-1:1;case 3:return Me(e.timestampValue,t.timestampValue);case 4:return Me(De(e),De(t));case 5:return G(e.stringValue,t.stringValue);case 6:return function(e,t){var n=Se(e),r=Se(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){for(var n=e.split("/"),r=t.split("/"),i=0;i<n.length&&i<r.length;i++){var a=G(n[i],r[i]);if(0!==a)return a}return G(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){var n=G(_e(e.latitude),_e(t.latitude));return 0!==n?n:G(_e(e.longitude),_e(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){for(var n=e.values||[],r=t.values||[],i=0;i<n.length&&i<r.length;++i){var a=Pe(n[i],r[i]);if(a)return a}return G(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Ne.mapValue&&t===Ne.mapValue)return 0;if(e===Ne.mapValue)return 1;if(t===Ne.mapValue)return-1;var n=e.fields||{},r=Object.keys(n),i=t.fields||{},a=Object.keys(i);r.sort(),a.sort();for(var o=0;o<r.length&&o<a.length;++o){var s=G(r[o],a[o]);if(0!==s)return s;var u=Pe(n[r[o]],i[a[o]]);if(0!==u)return u}return G(r.length,a.length)}(e.mapValue,t.mapValue);default:throw N()}}function Me(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return G(e,t);var n=Ie(e),r=Ie(t),i=G(n.seconds,r.seconds);return 0!==i?i:G(n.nanos,r.nanos)}function Ue(e){return Fe(e)}function Fe(e){var t,n,r,i;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?(r=e.timestampValue,i=Ie(r),"time(".concat(i.seconds,",").concat(i.nanos,")")):"stringValue"in e?e.stringValue:"bytesValue"in e?Se(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,te.fromName(n).toString()):"geoPointValue"in e?"geo(".concat((t=e.geoPointValue).latitude,",").concat(t.longitude,")"):"arrayValue"in e?function(e){var t="[",n=!0,r=!0,i=!1,a=void 0;try{for(var o,s=(e.values||[])[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n?n=!1:t+=",",t+=Fe(u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return t+"]"}(e.arrayValue):"mapValue"in e?function(e){var t=Object.keys(e.fields||{}).sort(),n="{",r=!0,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r?r=!1:n+=",",n+="".concat(c,":").concat(Fe(e.fields[c]))}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return n+"}"}(e.mapValue):N()}function Ve(e){return!!e&&"integerValue"in e}function je(e){return!!e&&"arrayValue"in e}function qe(e){return!!e&&"nullValue"in e}function Be(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ke(e){return!!e&&"mapValue"in e}function He(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){var t={mapValue:{fields:{}}};return me(e.mapValue.fields,(function(e,n){return t.mapValue.fields[e]=He(n)})),t}if(e.arrayValue){for(var n={arrayValue:{values:[]}},r=0;r<(e.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=He(e.arrayValue.values[r]);return n}return Object.assign({},e)}function ze(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
var We=function e(t,r){"use strict";n(o)(this,e),this.position=t,this.inclusive=r};function Ge(e,t,n){for(var r=0,i=0;i<e.position.length;i++){var a=t[i],o=e.position[i];if(r=a.field.isKeyField()?te.comparator(te.fromName(o.referenceValue),n.key):Pe(o,n.data.field(a.field)),"desc"===a.dir&&(r*=-1),0!==r)break}return r}function Qe(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(var n=0;n<e.position.length;n++)if(!Re(e.position[n],t.position[n]))return!1;return!0}
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
 */var Ye=function e(){"use strict";n(o)(this,e)},Je=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e,i,a){var s;return n(o)(this,r),(s=t.call(this)).field=e,s.op=i,s.value=a,n(f)(s)}return n(u)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Pe(t,this.value)):null!==t&&Oe(this.value)===Oe(t)&&this.matchesComparison(Pe(t,this.value))}},{key:"matchesComparison",value:function(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return N()}}},{key:"isInequality",value:function(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}},{key:"getFlattenedFilters",value:function(){return[this]}},{key:"getFilters",value:function(){return[this]}},{key:"getFirstInequalityField",value:function(){return this.isInequality()?this.field:null}}],[{key:"create",value:function(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new it(e,t,n):"array-contains"===t?new ut(e,n):"in"===t?new ct(e,n):"not-in"===t?new lt(e,n):"array-contains-any"===t?new ht(e,n):new r(e,t,n)}},{key:"createKeyFieldInFilter",value:function(e,t,n){return"in"===t?new at(e,n):new ot(e,n)}}]),r}(Ye),Xe=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e,i){var a;return n(o)(this,r),(a=t.call(this)).filters=e,a.op=i,a.ht=null,n(f)(a)}return n(u)(r,[{key:"matches",value:function(e){return $e(this)?void 0===this.filters.find((function(t){return!t.matches(e)})):void 0!==this.filters.find((function(t){return t.matches(e)}))}},{key:"getFlattenedFilters",value:function(){return null!==this.ht||(this.ht=this.filters.reduce((function(e,t){return e.concat(t.getFlattenedFilters())}),[])),this.ht}},{key:"getFilters",value:function(){return Object.assign([],this.filters)}},{key:"getFirstInequalityField",value:function(){var e=this.lt((function(e){return e.isInequality()}));return null!==e?e.field:null}},{key:"lt",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.getFlattenedFilters()[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(e(o))return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}}],[{key:"create",value:function(e,t){return new r(e,t)}}]),r}(Ye);function $e(e){return"and"===e.op}function Ze(e){return et(e)&&$e(e)}function et(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.filters[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value instanceof Xe)return!1}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!0}function tt(e){if(e instanceof Je)return e.field.canonicalString()+e.op.toString()+Ue(e.value);var t=e.filters.map((function(e){return tt(e)})).join(",");return"".concat(e.op,"(").concat(t,")")}function nt(e,t){return e instanceof Je?(n=e,(r=t)instanceof Je&&n.op===r.op&&n.field.isEqual(r.field)&&Re(n.value,r.value)):e instanceof Xe?function(e,t){return t instanceof Xe&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((function(e,n,r){return e&&nt(n,t.filters[r])}),!0)}(e,t):void N();var n,r}function rt(e){return e instanceof Je?"".concat((t=e).field.canonicalString()," ").concat(t.op," ").concat(Ue(t.value)):e instanceof Xe?function(e){return e.op.toString()+" {"+e.getFilters().map(rt).join(" ,")+"}"}(e):"Filter";var t}var it=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e,i,a){var s;return n(o)(this,r),(s=t.call(this,e,i,a)).key=te.fromName(a.referenceValue),n(f)(s)}return n(u)(r,[{key:"matches",value:function(e){var t=te.comparator(e.key,this.key);return this.matchesComparison(t)}}]),r}(Je),at=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e,i){var a;return n(o)(this,r),(a=t.call(this,e,"in",i)).keys=st("in",i),n(f)(a)}return n(u)(r,[{key:"matches",value:function(e){return this.keys.some((function(t){return t.isEqual(e.key)}))}}]),r}(Je),ot=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e,i){var a;return n(o)(this,r),(a=t.call(this,e,"not-in",i)).keys=st("not-in",i),n(f)(a)}return n(u)(r,[{key:"matches",value:function(e){return!this.keys.some((function(t){return t.isEqual(e.key)}))}}]),r}(Je);function st(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((function(e){return te.fromName(e.referenceValue)}))}var ut=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e,i){return n(o)(this,r),t.call(this,e,"array-contains",i)}return n(u)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return je(t)&&Le(t.arrayValue,this.value)}}]),r}(Je),ct=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e,i){return n(o)(this,r),t.call(this,e,"in",i)}return n(u)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return null!==t&&Le(this.value.arrayValue,t)}}]),r}(Je),lt=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e,i){return n(o)(this,r),t.call(this,e,"not-in",i)}return n(u)(r,[{key:"matches",value:function(e){if(Le(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;var t=e.data.field(this.field);return null!==t&&!Le(this.value.arrayValue,t)}}]),r}(Je),ht=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e,i){return n(o)(this,r),t.call(this,e,"array-contains-any",i)}return n(u)(r,[{key:"matches",value:function(e){var t=this,n=e.data.field(this.field);return!(!je(n)||!n.arrayValue.values)&&n.arrayValue.values.some((function(e){return Le(t.value.arrayValue,e)}))}}]),r}(Je),ft=function e(t){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";n(o)(this,e),this.field=t,this.dir=r};function dt(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
 */var vt=function(){"use strict";function e(t,r){n(o)(this,e),this.comparator=t,this.root=r||yt.EMPTY}return n(u)(e,[{key:"insert",value:function(t,n){return new e(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,yt.BLACK,null,null))}},{key:"remove",value:function(t){return new e(this.comparator,this.root.remove(t,this.comparator).copy(null,null,yt.BLACK,null,null))}},{key:"get",value:function(e){for(var t=this.root;!t.isEmpty();){var n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}},{key:"indexOf",value:function(e){for(var t=0,n=this.root;!n.isEmpty();){var r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}},{key:"isEmpty",value:function(){return this.root.isEmpty()}},{key:"size",get:function(){return this.root.size}},{key:"minKey",value:function(){return this.root.minKey()}},{key:"maxKey",value:function(){return this.root.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root.inorderTraversal(e)}},{key:"forEach",value:function(e){this.inorderTraversal((function(t,n){return e(t,n),!1}))}},{key:"toString",value:function(){var e=[];return this.inorderTraversal((function(t,n){return e.push("".concat(t,":").concat(n)),!1})),"{".concat(e.join(", "),"}")}},{key:"reverseTraversal",value:function(e){return this.root.reverseTraversal(e)}},{key:"getIterator",value:function(){return new pt(this.root,null,this.comparator,!1)}},{key:"getIteratorFrom",value:function(e){return new pt(this.root,e,this.comparator,!1)}},{key:"getReverseIterator",value:function(){return new pt(this.root,null,this.comparator,!0)}},{key:"getReverseIteratorFrom",value:function(e){return new pt(this.root,e,this.comparator,!0)}}]),e}(),pt=function(){"use strict";function e(t,r,i,a){n(o)(this,e),this.isReverse=a,this.nodeStack=[];for(var s=1;!t.isEmpty();)if(s=r?i(t.key,r):1,r&&a&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}return n(u)(e,[{key:"getNext",value:function(){var e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}},{key:"hasNext",value:function(){return this.nodeStack.length>0}},{key:"peek",value:function(){if(0===this.nodeStack.length)return null;var e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}]),e}(),yt=function(){"use strict";function e(t,r,i,a,s){n(o)(this,e),this.key=t,this.value=r,this.color=null!=i?i:e.RED,this.left=null!=a?a:e.EMPTY,this.right=null!=s?s:e.EMPTY,this.size=this.left.size+1+this.right.size}return n(u)(e,[{key:"copy",value:function(t,n,r,i,a){return new e(null!=t?t:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return e.EMPTY;var t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(t,n){var r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(t,i.key)){if(i.right.isEmpty())return e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}},{key:"moveRedLeft",value:function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}},{key:"moveRedRight",value:function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}},{key:"rotateLeft",value:function(){var t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}},{key:"rotateRight",value:function(){var t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}},{key:"colorFlip",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth",value:function(){var e=this.check();return Math.pow(2,e)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw N();if(this.right.isRed())throw N();var e=this.left.check();if(e!==this.right.check())throw N();return e+(this.isRed()?0:1)}}]),e}();yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1,yt.EMPTY=new(function(){"use strict";function e(){n(o)(this,e),this.size=0}return n(u)(e,[{key:"key",get:function(){throw N()}},{key:"value",get:function(){throw N()}},{key:"color",get:function(){throw N()}},{key:"left",get:function(){throw N()}},{key:"right",get:function(){throw N()}},{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new yt(e,t)}},{key:"remove",value:function(e,t){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),e}());
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
var mt=function(){"use strict";function e(t){n(o)(this,e),this.comparator=t,this.data=new vt(this.comparator)}return n(u)(e,[{key:"has",value:function(e){return null!==this.data.get(e)}},{key:"first",value:function(){return this.data.minKey()}},{key:"last",value:function(){return this.data.maxKey()}},{key:"size",get:function(){return this.data.size}},{key:"indexOf",value:function(e){return this.data.indexOf(e)}},{key:"forEach",value:function(e){this.data.inorderTraversal((function(t,n){return e(t),!1}))}},{key:"forEachInRange",value:function(e,t){for(var n=this.data.getIteratorFrom(e[0]);n.hasNext();){var r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}},{key:"forEachWhile",value:function(e,t){var n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}},{key:"firstAfterOrEqual",value:function(e){var t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}},{key:"getIterator",value:function(){return new gt(this.data.getIterator())}},{key:"getIteratorFrom",value:function(e){return new gt(this.data.getIteratorFrom(e))}},{key:"add",value:function(e){return this.copy(this.data.remove(e).insert(e,!0))}},{key:"delete",value:function(e){return this.has(e)?this.copy(this.data.remove(e)):this}},{key:"isEmpty",value:function(){return this.data.isEmpty()}},{key:"unionWith",value:function(e){var t=this;return t.size<e.size&&(t=e,e=this),e.forEach((function(e){t=t.add(e)})),t}},{key:"isEqual",value:function(t){if(!(t instanceof e))return!1;if(this.size!==t.size)return!1;for(var n=this.data.getIterator(),r=t.data.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(0!==this.comparator(i,a))return!1}return!0}},{key:"toArray",value:function(){var e=[];return this.forEach((function(t){e.push(t)})),e}},{key:"toString",value:function(){var e=[];return this.forEach((function(t){return e.push(t)})),"SortedSet("+e.toString()+")"}},{key:"copy",value:function(t){var n=new e(this.comparator);return n.data=t,n}}]),e}(),gt=function(){"use strict";function e(t){n(o)(this,e),this.iter=t}return n(u)(e,[{key:"getNext",value:function(){return this.iter.getNext().key}},{key:"hasNext",value:function(){return this.iter.hasNext()}}]),e}();
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
var kt=function(){"use strict";function e(t){n(o)(this,e),this.fields=t,t.sort(ee.comparator)}return n(u)(e,[{key:"unionWith",value:function(t){var n=new mt(ee.comparator),r=!0,i=!1,a=void 0;try{for(var o,s=this.fields[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n=n.add(u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var c=!0,l=!1,h=void 0;try{for(var f,d=t[Symbol.iterator]();!(c=(f=d.next()).done);c=!0){var v=f.value;n=n.add(v)}}catch(e){l=!0,h=e}finally{try{c||null==d.return||d.return()}finally{if(l)throw h}}return new e(n.toArray())}},{key:"covers",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.fields[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.isPrefixOf(e))return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"isEqual",value:function(e){return Q(this.fields,e.fields,(function(e,t){return e.isEqual(t)}))}}],[{key:"empty",value:function(){return new e([])}}]),e}(),wt=function(){"use strict";function e(t){n(o)(this,e),this.value=t}return n(u)(e,[{key:"field",value:function(e){if(e.isEmpty())return this.value;for(var t=this.value,n=0;n<e.length-1;++n)if(!Ke(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}},{key:"set",value:function(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=He(t)}},{key:"setAll",value:function(e){var t=this,n=ee.emptyPath(),r={},i=[];e.forEach((function(e,a){if(!n.isImmediateParentOf(a)){var o=t.getFieldsMap(n);t.applyChanges(o,r,i),r={},i=[],n=a.popLast()}e?r[a.lastSegment()]=He(e):i.push(a.lastSegment())}));var a=this.getFieldsMap(n);this.applyChanges(a,r,i)}},{key:"delete",value:function(e){var t=this.field(e.popLast());Ke(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}},{key:"isEqual",value:function(e){return Re(this.value,e.value)}},{key:"getFieldsMap",value:function(e){var t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(var n=0;n<e.length;++n){var r=t.mapValue.fields[e.get(n)];Ke(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}},{key:"applyChanges",value:function(e,t,n){me(t,(function(t,n){return e[t]=n}));var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;delete e[u]}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"clone",value:function(){return new e(He(this.value))}}],[{key:"empty",value:function(){return new e({mapValue:{}})}}]),e}();
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
 */function bt(e){var t=[];return me(e.fields,(function(e,n){var r=new ee([e]);if(Ke(n)){var i=bt(n.mapValue).fields,a=!0,o=!1,s=void 0;if(0===i.length)t.push(r);else try{for(var u,c=i[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;t.push(r.child(l))}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}}else t.push(r)})),new kt(t)
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
 */}var xt=function(){"use strict";function e(t,r,i,a,s,u,c){n(o)(this,e),this.key=t,this.documentType=r,this.version=i,this.readTime=a,this.createTime=s,this.data=u,this.documentState=c}return n(u)(e,[{key:"convertToFoundDocument",value:function(e,t){return!this.createTime.isEqual(J.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}},{key:"convertToNoDocument",value:function(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}},{key:"convertToUnknownDocument",value:function(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}},{key:"setHasCommittedMutations",value:function(){return this.documentState=2,this}},{key:"setHasLocalMutations",value:function(){return this.documentState=1,this.version=J.min(),this}},{key:"setReadTime",value:function(e){return this.readTime=e,this}},{key:"hasLocalMutations",get:function(){return 1===this.documentState}},{key:"hasCommittedMutations",get:function(){return 2===this.documentState}},{key:"hasPendingWrites",get:function(){return this.hasLocalMutations||this.hasCommittedMutations}},{key:"isValidDocument",value:function(){return 0!==this.documentType}},{key:"isFoundDocument",value:function(){return 1===this.documentType}},{key:"isNoDocument",value:function(){return 2===this.documentType}},{key:"isUnknownDocument",value:function(){return 3===this.documentType}},{key:"isEqual",value:function(t){return t instanceof e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}},{key:"mutableCopy",value:function(){return new e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}},{key:"toString",value:function(){return"Document(".concat(this.key,", ").concat(this.version,", ").concat(JSON.stringify(this.data.value),", {createTime: ").concat(this.createTime,"}), {documentType: ").concat(this.documentType,"}), {documentState: ").concat(this.documentState,"})")}}],[{key:"newInvalidDocument",value:function(t){return new e(t,0,J.min(),J.min(),J.min(),wt.empty(),0)}},{key:"newFoundDocument",value:function(t,n,r,i){return new e(t,1,n,J.min(),r,i,0)}},{key:"newNoDocument",value:function(t,n){return new e(t,2,n,J.min(),J.min(),wt.empty(),0)}},{key:"newUnknownDocument",value:function(t,n){return new e(t,3,n,J.min(),J.min(),wt.empty(),2)}}]),e}(),Et=function e(t){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;n(o)(this,e),this.path=t,this.collectionGroup=r,this.orderBy=i,this.filters=a,this.limit=s,this.startAt=u,this.endAt=c,this.ft=null};
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
 */function Tt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return new Et(e,t,n,r,i,a,o)}function It(e){var t=R(e);if(null===t.ft){var n=t.path.canonicalString();null!==t.collectionGroup&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((function(e){return tt(e)})).join(","),n+="|ob:",n+=t.orderBy.map((function(e){return(t=e).field.canonicalString()+t.dir;var t})).join(","),ke(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((function(e){return Ue(e)})).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((function(e){return Ue(e)})).join(",")),t.ft=n}return t.ft}function _t(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(var n=0;n<e.orderBy.length;n++)if(!dt(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(var r=0;r<e.filters.length;r++)if(!nt(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Qe(e.startAt,t.startAt)&&Qe(e.endAt,t.endAt)}function St(e){return te.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
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
var Ct=function e(t){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"F",c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;n(o)(this,e),this.path=t,this.collectionGroup=r,this.explicitOrderBy=i,this.filters=a,this.limit=s,this.limitType=u,this.startAt=c,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt};function At(e,t,n,r,i,a,o,s){return new Ct(e,t,n,r,i,a,o,s)}function Dt(e){return new Ct(e)}function Nt(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ot(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Rt(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.filters[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value.getFirstInequalityField();if(null!==o)return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}function Lt(e){return null!==e.collectionGroup}function Pt(e){var t=R(e);if(null===t.dt){t.dt=[];var n=Rt(t),r=Ot(t);if(null!==n&&null===r)n.isKeyField()||t.dt.push(new ft(n)),t.dt.push(new ft(ee.keyField(),"asc"));else{var i=!1,a=!0,o=!1,s=void 0;try{for(var u,c=t.explicitOrderBy[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;t.dt.push(l),l.field.isKeyField()&&(i=!0)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}if(!i){var h=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new ft(ee.keyField(),h))}}}return t.dt}function Mt(e){var t=R(e);if(!t._t)if("F"===t.limitType)t._t=Tt(t.path,t.collectionGroup,Pt(t),t.filters,t.limit,t.startAt,t.endAt);else{var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=Pt(t)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c="desc"===u.dir?"asc":"desc";n.push(new ft(u.field,c))}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var l=t.endAt?new We(t.endAt.position,t.endAt.inclusive):null,h=t.startAt?new We(t.startAt.position,t.startAt.inclusive):null;t._t=Tt(t.path,t.collectionGroup,n,t.filters,t.limit,l,h)}return t._t}function Ut(e,t,n){return new Ct(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ft(e,t){return _t(Mt(e),Mt(t))&&e.limitType===t.limitType}function Vt(e){return"".concat(It(Mt(e)),"|lt:").concat(e.limitType)}function jt(e){return"Query(target=".concat((t=Mt(e),n=t.path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=", filters: [".concat(t.filters.map((function(e){return rt(e)})).join(", "),"]")),ke(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=", orderBy: [".concat(t.orderBy.map((function(e){return"".concat((t=e).field.canonicalString()," (").concat(t.dir,")");var t})).join(", "),"]")),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((function(e){return Ue(e)})).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((function(e){return Ue(e)})).join(",")),"Target(".concat(n,")")),"; limitType=").concat(e.limitType,")");var t,n}function qt(e,t){return t.isFoundDocument()&&(i=e,o=(a=t).key.path,null!==i.collectionGroup?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):te.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o))&&function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=Pt(e)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(!s.field.isKeyField()&&null===t.data.field(s.field))return!1}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}(e,t)&&function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=e.filters[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){if(!a.value.matches(t))return!1}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){var r=Ge(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,Pt(n),r)||n.endAt&&!function(e,t,n){var r=Ge(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,Pt(n),r)));var n,r,i,a,o}function Bt(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Kt(e){return function(t,n){var r=!1,i=!0,a=!1,o=void 0;try{for(var s,u=Pt(e)[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=Ht(c,t,n);if(0!==l)return l;r=r||c.field.isKeyField()}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return 0}}function Ht(e,t,n){var r,i,a,o,s=e.field.isKeyField()?te.comparator(t.key,n.key):(r=e.field,i=n,a=t.data.field(r),o=i.data.field(r),null!==a&&null!==o?Pe(a,o):N());switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return N()}}
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
 */function zt(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:we(t)?"-0":t}}function Wt(e){return{integerValue:""+e}}function Gt(e,t){return be(t)?Wt(t):zt(e,t)}
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
 */var Qt=function e(){"use strict";n(o)(this,e),this._=void 0};function Yt(e,t,n){return e instanceof $t?(i=t,a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:(r=n).seconds,nanos:r.nanoseconds}}}},i&&(a.fields.__previous_value__=i),{mapValue:a}):e instanceof Zt?en(e,t):e instanceof tn?nn(e,t):function(e,t){var n=Xt(e,t),r=an(n)+an(e.gt);return Ve(n)&&Ve(e.gt)?Wt(r):zt(e.yt,r)}(e,t);var r,i,a}function Jt(e,t,n){return e instanceof Zt?en(e,t):e instanceof tn?nn(e,t):n}function Xt(e,t){var n,r;return e instanceof rn?Ve(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null}var $t=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(){return n(o)(this,r),t.apply(this,arguments)}return r}(Qt),Zt=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e){var i;return n(o)(this,r),(i=t.call(this)).elements=e,n(f)(i)}return r}(Qt);function en(e,t){var n=on(t),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,t){var r=t.value;n.some((function(e){return Re(e,r)}))||n.push(r)},u=e.elements[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return{arrayValue:{values:n}}}var tn=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e){var i;return n(o)(this,r),(i=t.call(this)).elements=e,n(f)(i)}return r}(Qt);function nn(e,t){var n=on(t),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,t){var r=t.value;n=n.filter((function(e){return!Re(e,r)}))},u=e.elements[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return{arrayValue:{values:n}}}var rn=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e,i){var a;return n(o)(this,r),(a=t.call(this)).yt=e,a.gt=i,n(f)(a)}return r}(Qt);function an(e){return _e(e.integerValue||e.doubleValue)}function on(e){return je(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */var sn=function e(t,r){"use strict";n(o)(this,e),this.version=t,this.transformResults=r},un=function(){"use strict";function e(t,r){n(o)(this,e),this.updateTime=t,this.exists=r}return n(u)(e,[{key:"isNone",get:function(){return void 0===this.updateTime&&void 0===this.exists}},{key:"isEqual",value:function(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}],[{key:"none",value:function(){return new e}},{key:"exists",value:function(t){return new e(void 0,t)}},{key:"updateTime",value:function(t){return new e(t)}}]),e}();function cn(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}var ln=function e(){"use strict";n(o)(this,e)};function hn(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new En(e.key,un.none()):new yn(e.key,e.data,un.none());var n=e.data,r=wt.empty(),i=new mt(ee.comparator),a=!0,o=!1,s=void 0;try{for(var u,c=t.fields[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;if(!i.has(l)){var h=n.field(l);null===h&&l.length>1&&(l=l.popLast(),h=n.field(l)),null===h?r.delete(l):r.set(l,h),i=i.add(l)}}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return new mn(e.key,r,new kt(i.toArray()),un.none())}function fn(e,t,n){var r,i,a,o,s;e instanceof yn?(i=t,a=n,o=(r=e).value.clone(),s=kn(r.fieldTransforms,i,a.transformResults),o.setAll(s),i.convertToFoundDocument(a.version,o).setHasCommittedMutations()):e instanceof mn?function(e,t,n){if(cn(e.precondition,t)){var r=kn(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(gn(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}else t.convertToUnknownDocument(n.version)}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function dn(e,t,n,r){return e instanceof yn?function(e,t,n,r){if(!cn(e.precondition,t))return n;var i=e.value.clone(),a=wn(e.fieldTransforms,r,t);return i.setAll(a),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof mn?function(e,t,n,r){if(!cn(e.precondition,t))return n;var i=wn(e.fieldTransforms,r,t),a=t.data;return a.setAll(gn(e)),a.setAll(i),t.convertToFoundDocument(t.version,a).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((function(e){return e.field})))}(e,t,n,r):(i=t,a=n,cn(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):a);var i,a}function vn(e,t){var n=null,r=!0,i=!1,a=void 0;try{for(var o,s=e.fieldTransforms[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c=t.data.field(u.field),l=Xt(u.transform,c||null);null!=l&&(null===n&&(n=wt.empty()),n.set(u.field,l))}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n||null}function pn(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Q(n,r,(function(e,t){return function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Zt&&r instanceof Zt||n instanceof tn&&r instanceof tn?Q(n.elements,r.elements,Re):n instanceof rn&&r instanceof rn?Re(n.gt,r.gt):n instanceof $t&&r instanceof $t);var n,r}(e,t)}))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,r}var yn=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e,i,a){var s,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return n(o)(this,r),(s=t.call(this)).key=e,s.value=i,s.precondition=a,s.fieldTransforms=u,s.type=0,n(f)(s)}return n(u)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(ln),mn=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e,i,a,s){var u,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];return n(o)(this,r),(u=t.call(this)).key=e,u.data=i,u.fieldMask=a,u.precondition=s,u.fieldTransforms=c,u.type=1,n(f)(u)}return n(u)(r,[{key:"getFieldMask",value:function(){return this.fieldMask}}]),r}(ln);function gn(e){var t=new Map;return e.fieldMask.fields.forEach((function(n){if(!n.isEmpty()){var r=e.data.field(n);t.set(n,r)}})),t}function kn(e,t,n){var r=new Map;O(e.length===n.length);for(var i=0;i<n.length;i++){var a=e[i],o=a.transform,s=t.data.field(a.field);r.set(a.field,Jt(o,s,n[i]))}return r}function wn(e,t,n){var r=new Map,i=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=c.transform,h=n.data.field(c.field);r.set(c.field,Yt(l,h,t))}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}var bn,xn,En=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e,i){var a;return n(o)(this,r),(a=t.call(this)).key=e,a.precondition=i,a.type=2,a.fieldTransforms=[],n(f)(a)}return n(u)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(ln),Tn=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e,i){var a;return n(o)(this,r),(a=t.call(this)).key=e,a.precondition=i,a.type=3,a.fieldTransforms=[],n(f)(a)}return n(u)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(ln),In=function e(t){"use strict";n(o)(this,e),this.count=t};function _n(e){switch(e){default:return N();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function Sn(e){if(void 0===e)return C("GRPC error has no .code"),L.UNKNOWN;switch(e){case bn.OK:return L.OK;case bn.CANCELLED:return L.CANCELLED;case bn.UNKNOWN:return L.UNKNOWN;case bn.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case bn.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case bn.INTERNAL:return L.INTERNAL;case bn.UNAVAILABLE:return L.UNAVAILABLE;case bn.UNAUTHENTICATED:return L.UNAUTHENTICATED;case bn.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case bn.NOT_FOUND:return L.NOT_FOUND;case bn.ALREADY_EXISTS:return L.ALREADY_EXISTS;case bn.PERMISSION_DENIED:return L.PERMISSION_DENIED;case bn.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case bn.ABORTED:return L.ABORTED;case bn.OUT_OF_RANGE:return L.OUT_OF_RANGE;case bn.UNIMPLEMENTED:return L.UNIMPLEMENTED;case bn.DATA_LOSS:return L.DATA_LOSS;default:return N()}}(xn=bn||(bn={}))[xn.OK=0]="OK",xn[xn.CANCELLED=1]="CANCELLED",xn[xn.UNKNOWN=2]="UNKNOWN",xn[xn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xn[xn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xn[xn.NOT_FOUND=5]="NOT_FOUND",xn[xn.ALREADY_EXISTS=6]="ALREADY_EXISTS",xn[xn.PERMISSION_DENIED=7]="PERMISSION_DENIED",xn[xn.UNAUTHENTICATED=16]="UNAUTHENTICATED",xn[xn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xn[xn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xn[xn.ABORTED=10]="ABORTED",xn[xn.OUT_OF_RANGE=11]="OUT_OF_RANGE",xn[xn.UNIMPLEMENTED=12]="UNIMPLEMENTED",xn[xn.INTERNAL=13]="INTERNAL",xn[xn.UNAVAILABLE=14]="UNAVAILABLE",xn[xn.DATA_LOSS=15]="DATA_LOSS";
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
var Cn=function(){"use strict";function e(t,r){n(o)(this,e),this.mapKeyFn=t,this.equalsFn=r,this.inner={},this.innerSize=0}return n(u)(e,[{key:"get",value:function(e){var t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){var i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=n(d)(s.value,2),l=c[0],h=c[1];if(this.equalsFn(l,e))return h}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}}}},{key:"has",value:function(e){return void 0!==this.get(e)}},{key:"set",value:function(e,t){var n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(var i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}},{key:"delete",value:function(e){var t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(var r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}},{key:"forEach",value:function(e){me(this.inner,(function(t,r){var i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=n(d)(s.value,2),l=c[0],h=c[1];e(l,h)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}}))}},{key:"isEmpty",value:function(){return ge(this.inner)}},{key:"size",value:function(){return this.innerSize}}]),e}(),An=new vt(te.comparator);
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
 */function Dn(){return An}var Nn=new vt(te.comparator);function On(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=Nn,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r=r.insert(c.key,c)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}function Rn(e){var t=Nn;return e.forEach((function(e,n){return t=t.insert(e,n.overlayedDocument)})),t}function Ln(){return Mn()}function Pn(){return Mn()}function Mn(){return new Cn((function(e){return e.toString()}),(function(e,t){return e.isEqual(t)}))}var Un=new vt(te.comparator),Fn=new mt(te.comparator);function Vn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=Fn,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r=r.add(c)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}var jn=new mt(G);function qn(){return jn}
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
 */var Bn=function(){"use strict";function e(t,r,i,a,s){n(o)(this,e),this.snapshotVersion=t,this.targetChanges=r,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=s}return n(u)(e,null,[{key:"createSynthesizedRemoteEventForCurrentChange",value:function(t,n,r){var i=new Map;return i.set(t,Kn.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new e(J.min(),i,qn(),Dn(),Vn())}}]),e}(),Kn=function(){"use strict";function e(t,r,i,a,s){n(o)(this,e),this.resumeToken=t,this.current=r,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=s}return n(u)(e,null,[{key:"createSynthesizedTargetChangeForCurrentChange",value:function(t,n,r){return new e(r,n,Vn(),Vn(),Vn())}}]),e}(),Hn=function e(t,r,i,a){"use strict";n(o)(this,e),this.It=t,this.removedTargetIds=r,this.key=i,this.Tt=a},zn=function e(t,r){"use strict";n(o)(this,e),this.targetId=t,this.Et=r},Wn=function e(t,r){"use strict";var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ee.EMPTY_BYTE_STRING,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;n(o)(this,e),this.state=t,this.targetIds=r,this.resumeToken=i,this.cause=a},Gn=function(){"use strict";function e(){n(o)(this,e),this.At=0,this.Rt=Jn(),this.bt=Ee.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}return n(u)(e,[{key:"current",get:function(){return this.Pt}},{key:"resumeToken",get:function(){return this.bt}},{key:"Vt",get:function(){return 0!==this.At}},{key:"St",get:function(){return this.vt}},{key:"Dt",value:function(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}},{key:"Ct",value:function(){var e=Vn(),t=Vn(),n=Vn();return this.Rt.forEach((function(r,i){switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:N()}})),new Kn(this.bt,this.Pt,e,t,n)}},{key:"xt",value:function(){this.vt=!1,this.Rt=Jn()}},{key:"Nt",value:function(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}},{key:"kt",value:function(e){this.vt=!0,this.Rt=this.Rt.remove(e)}},{key:"Ot",value:function(){this.At+=1}},{key:"Mt",value:function(){this.At-=1}},{key:"Ft",value:function(){this.vt=!0,this.Pt=!0}}]),e}(),Qn=function(){"use strict";function e(t){n(o)(this,e),this.$t=t,this.Bt=new Map,this.Lt=Dn(),this.qt=Yn(),this.Ut=new mt(G)}return n(u)(e,[{key:"Kt",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.It[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;e.Tt&&e.Tt.isFoundDocument()?this.Gt(o,e.Tt):this.Qt(o,e.key,e.Tt)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}var s=!0,u=!1,c=void 0;try{for(var l,h=e.removedTargetIds[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;this.Qt(f,e.key,e.Tt)}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}}},{key:"jt",value:function(e){var t=this;this.forEachTarget(e,(function(n){var r=t.Wt(n);switch(e.state){case 0:t.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||t.removeTarget(n);break;case 3:t.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:t.zt(n)&&(t.Ht(n),r.Dt(e.resumeToken));break;default:N()}}))}},{key:"forEachTarget",value:function(e,t){var n=this;e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((function(e,r){n.zt(r)&&t(r)}))}},{key:"Jt",value:function(e){var t=e.targetId,n=e.Et.count,r=this.Yt(t);if(r){var i=r.target;if(St(i))if(0===n){var a=new te(i.path);this.Qt(t,a,xt.newNoDocument(a,J.min()))}else O(1===n);else this.Xt(t)!==n&&(this.Ht(t),this.Ut=this.Ut.add(t))}}},{key:"Zt",value:function(e){var t=this,n=new Map;this.Bt.forEach((function(r,i){var a=t.Yt(i);if(a){if(r.current&&St(a.target)){var o=new te(a.target.path);null!==t.Lt.get(o)||t.te(i,o)||t.Qt(i,o,xt.newNoDocument(o,e))}r.St&&(n.set(i,r.Ct()),r.xt())}}));var r=Vn();this.qt.forEach((function(e,n){var i=t,a=!0;n.forEachWhile((function(e){var t=i.Yt(e);return!t||2===t.purpose||(a=!1,!1)})),a&&(r=r.add(e))})),this.Lt.forEach((function(t,n){return n.setReadTime(e)}));var i=new Bn(e,n,this.Ut,this.Lt,r);return this.Lt=Dn(),this.qt=Yn(),this.Ut=new mt(G),i}},{key:"Gt",value:function(e,t){if(this.zt(e)){var n=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}}},{key:"Qt",value:function(e,t,n){if(this.zt(e)){var r=this.Wt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}}},{key:"removeTarget",value:function(e){this.Bt.delete(e)}},{key:"Xt",value:function(e){var t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}},{key:"Ot",value:function(e){this.Wt(e).Ot()}},{key:"Wt",value:function(e){var t=this.Bt.get(e);return t||(t=new Gn,this.Bt.set(e,t)),t}},{key:"ee",value:function(e){var t=this.qt.get(e);return t||(t=new mt(G),this.qt=this.qt.insert(e,t)),t}},{key:"zt",value:function(e){var t=null!==this.Yt(e);return t||S("WatchChangeAggregator","Detected inactive target",e),t}},{key:"Yt",value:function(e){var t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}},{key:"Ht",value:function(e){var t=this;this.Bt.set(e,new Gn),this.$t.getRemoteKeysForTarget(e).forEach((function(n){t.Qt(e,n,null)}))}},{key:"te",value:function(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}]),e}();function Yn(){return new vt(te.comparator)}function Jn(){return new vt(te.comparator)}
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
 */var Xn={asc:"ASCENDING",desc:"DESCENDING"},$n={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Zn={and:"AND",or:"OR"},er=function e(t,r){"use strict";n(o)(this,e),this.databaseId=t,this.wt=r};function tr(e,t){return e.wt?"".concat(new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z",""),".").concat(("000000000"+t.nanoseconds).slice(-9),"Z"):{seconds:""+t.seconds,nanos:t.nanoseconds}}function nr(e,t){return e.wt?t.toBase64():t.toUint8Array()}function rr(e,t){return tr(e,t.toTimestamp())}function ir(e){return O(!!e),J.fromTimestamp((t=Ie(e),new Y(t.seconds,t.nanos)));var t}function ar(e,t){return(n=e,new $(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function or(e){var t=$.fromString(e);return O(Tr(t)),t}function sr(e,t){return ar(e.databaseId,t.path)}function ur(e,t){var n=or(t);if(n.get(1)!==e.databaseId.projectId)throw new P(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new P(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new te(fr(n))}function cr(e,t){return ar(e.databaseId,t)}function lr(e){var t=or(e);return 4===t.length?$.emptyPath():fr(t)}function hr(e){return new $(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function fr(e){return O(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function dr(e,t,n){return{name:sr(e,t),fields:n.value.mapValue.fields}}function vr(e,t){var n,r,i;if(t instanceof yn)n={update:dr(e,t.key,t.value)};else if(t instanceof En)n={delete:sr(e,t.key)};else if(t instanceof mn)n={update:dr(e,t.key,t.data),updateMask:(r=t.fieldMask,i=[],r.fields.forEach((function(e){return i.push(e.canonicalString())})),{fieldPaths:i})};else{if(!(t instanceof Tn))return N();n={verify:sr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((function(e){return function(e,t){var n=t.transform;if(n instanceof $t)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Zt)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof tn)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof rn)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw N()}(0,e)}))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:rr(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:N()}(e,t.precondition)),n}function pr(e,t){return{documents:[cr(e,t.path)]}}function yr(e,t){var n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=cr(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=cr(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);var i=function(e){if(0!==e.length)return Er(Xe.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);var a=function(e){if(0!==e.length)return e.map((function(e){return{field:br((t=e).field),direction:kr(t.dir)};var t}))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);var o,s,u,c=(o=e,s=t.limit,o.wt||ke(s)?s:{value:s});return null!==c&&(n.structuredQuery.limit=c),t.startAt&&(n.structuredQuery.startAt={before:(u=t.startAt).inclusive,values:u.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function mr(e){var t=lr(e.parent),n=e.structuredQuery,r=n.from?n.from.length:0,i=null;if(r>0){O(1===r);var a=n.from[0];a.allDescendants?i=a.collectionId:t=t.child(a.collectionId)}var o,s,u=[];n.where&&(o=n.where,u=(s=gr(o))instanceof Xe&&Ze(s)?s.getFilters():[s]);var c=[];n.orderBy&&(c=n.orderBy.map((function(e){return new ft(xr((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));var l=null;n.limit&&(l=function(e){var t;return ke(t="object"==typeof e?e.value:e)?null:t}(n.limit));var h=null;n.startAt&&(h=function(e){var t=!!e.before,n=e.values||[];return new We(n,t)}(n.startAt));var f=null;return n.endAt&&(f=function(e){var t=!e.before,n=e.values||[];return new We(n,t)}(n.endAt)),At(t,i,c,u,l,"F",h,f)}function gr(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":var t=xr(e.unaryFilter.field);return Je.create(t,"==",{doubleValue:NaN});case"IS_NULL":var n=xr(e.unaryFilter.field);return Je.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":var r=xr(e.unaryFilter.field);return Je.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":var i=xr(e.unaryFilter.field);return Je.create(i,"!=",{nullValue:"NULL_VALUE"});default:return N()}}(e):void 0!==e.fieldFilter?(n=e,Je.create(xr(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return N()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,Xe.create(t.compositeFilter.filters.map((function(e){return gr(e)})),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return N()}}(t.compositeFilter.op))):N();var t,n}function kr(e){return Xn[e]}function wr(e){return $n[e]}function br(e){return{fieldPath:e.canonicalString()}}function xr(e){return ee.fromServerFormat(e.fieldPath)}function Er(e){return e instanceof Je?function(e){if("=="===e.op){if(Be(e.value))return{unaryFilter:{field:br(e.field),op:"IS_NAN"}};if(qe(e.value))return{unaryFilter:{field:br(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Be(e.value))return{unaryFilter:{field:br(e.field),op:"IS_NOT_NAN"}};if(qe(e.value))return{unaryFilter:{field:br(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:br(e.field),op:wr(e.op),value:e.value}}}(e):e instanceof Xe?(r=(t=e).getFilters().map((function(e){return Er(e)})),1===r.length?r[0]:{compositeFilter:{op:(n=t.op,Zn[n]),filters:r}}):N();var t,n,r}function Tr(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */var Ir=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],_r=(n(v)(Ir).concat(["documentOverlays"]),["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"]),Sr=_r;
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
 */n(v)(Sr).concat(["indexConfiguration","indexState","indexEntries"]);
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
var Cr=function(){"use strict";function e(t,r,i,a){n(o)(this,e),this.batchId=t,this.localWriteTime=r,this.baseMutations=i,this.mutations=a}return n(u)(e,[{key:"applyToRemoteDocument",value:function(e,t){for(var n=t.mutationResults,r=0;r<this.mutations.length;r++){var i=this.mutations[r];i.key.isEqual(e.key)&&fn(i,e,n[r])}}},{key:"applyToLocalView",value:function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=this.baseMutations[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;s.key.isEqual(e.key)&&(t=dn(s,e,t,this.localWriteTime))}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}var u=!0,c=!1,l=void 0;try{for(var h,f=this.mutations[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var d=h.value;d.key.isEqual(e.key)&&(t=dn(d,e,t,this.localWriteTime))}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}return t}},{key:"applyToLocalDocumentSet",value:function(e,t){var n=this,r=Pn();return this.mutations.forEach((function(i){var a=e.get(i.key),o=a.overlayedDocument,s=n.applyToLocalView(o,a.mutatedFields),u=hn(o,s=t.has(i.key)?null:s);null!==u&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())})),r}},{key:"keys",value:function(){return this.mutations.reduce((function(e,t){return e.add(t.key)}),Vn())}},{key:"isEqual",value:function(e){return this.batchId===e.batchId&&Q(this.mutations,e.mutations,(function(e,t){return pn(e,t)}))&&Q(this.baseMutations,e.baseMutations,(function(e,t){return pn(e,t)}))}}]),e}(),Ar=function(){"use strict";function e(t,r,i,a){n(o)(this,e),this.batch=t,this.commitVersion=r,this.mutationResults=i,this.docVersions=a}return n(u)(e,null,[{key:"from",value:function(t,n,r){O(t.mutations.length===r.length);for(var i=Un,a=t.mutations,o=0;o<a.length;o++)i=i.insert(a[o].key,r[o].version);return new e(t,n,r,i)}}]),e}(),Dr=function(){"use strict";function e(t,r){n(o)(this,e),this.largestBatchId=t,this.mutation=r}return n(u)(e,[{key:"getKey",value:function(){return this.mutation.key}},{key:"isEqual",value:function(e){return null!==e&&this.mutation===e.mutation}},{key:"toString",value:function(){return"Overlay{\n      largestBatchId: ".concat(this.largestBatchId,",\n      mutation: ").concat(this.mutation.toString(),"\n    }")}}]),e}(),Nr=function(){"use strict";function e(t,r,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:J.min(),u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:J.min(),c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:Ee.EMPTY_BYTE_STRING;n(o)(this,e),this.target=t,this.targetId=r,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c}return n(u)(e,[{key:"withSequenceNumber",value:function(t){return new e(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}},{key:"withResumeToken",value:function(t,n){return new e(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}},{key:"withLastLimboFreeSnapshotVersion",value:function(t){return new e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}]),e}(),Or=function e(t){"use strict";n(o)(this,e),this.ie=t};function Rr(e){var t=mr({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Ut(t,t.limit,"L"):t}
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
 */var Lr=function(){"use strict";function e(){n(o)(this,e)}return n(u)(e,[{key:"ue",value:function(e,t){this.ce(e,t),t.ae()}},{key:"ce",value:function(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(_e(e.integerValue));else if("doubleValue"in e){var n=_e(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),we(n)?t.le(0):t.le(n))}else if("timestampValue"in e){var r=e.timestampValue;this.he(t,20),"string"==typeof r?t.fe(r):(t.fe("".concat(r.seconds||"")),t.le(r.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(Se(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){var i=e.geoPointValue;this.he(t,45),t.le(i.latitude||0),t.le(i.longitude||0)}else"mapValue"in e?ze(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):N()}},{key:"de",value:function(e,t){this.he(t,25),this.pe(e,t)}},{key:"pe",value:function(e,t){t.fe(e)}},{key:"ge",value:function(e,t){var n=e.fields||{};this.he(t,55);var r=!0,i=!1,a=void 0;try{for(var o,s=Object.keys(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;this.de(u,t),this.ce(n[u],t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"ye",value:function(e,t){var n=e.values||[];this.he(t,50);var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;this.ce(u,t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"me",value:function(e,t){var n=this;this.he(t,37),te.fromName(e).path.forEach((function(e){n.he(t,60),n.pe(e,t)}))}},{key:"he",value:function(e,t){e.le(t)}},{key:"_e",value:function(e){e.le(2)}}]),e}();Lr.Ie=new Lr;
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
var Pr=function(){"use strict";function e(){n(o)(this,e),this.Je=new Mr}return n(u)(e,[{key:"addToCollectionParentIndex",value:function(e,t){return this.Je.add(t),he.resolve()}},{key:"getCollectionParents",value:function(e,t){return he.resolve(this.Je.getEntries(t))}},{key:"addFieldIndex",value:function(e,t){return he.resolve()}},{key:"deleteFieldIndex",value:function(e,t){return he.resolve()}},{key:"getDocumentsMatchingTarget",value:function(e,t){return he.resolve(null)}},{key:"getIndexType",value:function(e,t){return he.resolve(0)}},{key:"getFieldIndexes",value:function(e,t){return he.resolve([])}},{key:"getNextCollectionGroupToUpdate",value:function(e){return he.resolve(null)}},{key:"getMinOffset",value:function(e,t){return he.resolve(ae.min())}},{key:"getMinOffsetFromCollectionGroup",value:function(e,t){return he.resolve(ae.min())}},{key:"updateCollectionGroup",value:function(e,t,n){return he.resolve()}},{key:"updateIndexEntries",value:function(e,t){return he.resolve()}}]),e}(),Mr=function(){"use strict";function e(){n(o)(this,e),this.index={}}return n(u)(e,[{key:"add",value:function(e){var t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new mt($.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}},{key:"has",value:function(e){var t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}},{key:"getEntries",value:function(e){return(this.index[e]||new mt($.comparator)).toArray()}}]),e}();new Uint8Array(0);
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
var Ur=function(){"use strict";function e(t,r,i){n(o)(this,e),this.cacheSizeCollectionThreshold=t,this.percentileToCollect=r,this.maximumSequenceNumbersToCollect=i}return n(u)(e,null,[{key:"withCacheSize",value:function(t){return new e(t,e.DEFAULT_COLLECTION_PERCENTILE,e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}]),e}();
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
 */Ur.DEFAULT_COLLECTION_PERCENTILE=10,Ur.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ur.DEFAULT=new Ur(41943040,Ur.DEFAULT_COLLECTION_PERCENTILE,Ur.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ur.DISABLED=new Ur(-1,0,0);
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
var Fr=function(){"use strict";function e(t){n(o)(this,e),this.bn=t}return n(u)(e,[{key:"next",value:function(){return this.bn+=2,this.bn}}],[{key:"Pn",value:function(){return new e(0)}},{key:"vn",value:function(){return new e(-1)}}]),e}();
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
var Vr=function(){"use strict";function e(){n(o)(this,e),this.changes=new Cn((function(e){return e.toString()}),(function(e,t){return e.isEqual(t)})),this.changesApplied=!1}return n(u)(e,[{key:"addEntry",value:function(e){this.assertNotApplied(),this.changes.set(e.key,e)}},{key:"removeEntry",value:function(e,t){this.assertNotApplied(),this.changes.set(e,xt.newInvalidDocument(e).setReadTime(t))}},{key:"getEntry",value:function(e,t){this.assertNotApplied();var n=this.changes.get(t);return void 0!==n?he.resolve(n):this.getFromCache(e,t)}},{key:"getEntries",value:function(e,t){return this.getAllFromCache(e,t)}},{key:"apply",value:function(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}},{key:"assertNotApplied",value:function(){}}]),e}();
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
var jr=function e(t,r){"use strict";n(o)(this,e),this.overlayedDocument=t,this.mutatedFields=r},qr=function(){"use strict";function e(t,r,i,a){n(o)(this,e),this.remoteDocumentCache=t,this.mutationQueue=r,this.documentOverlayCache=i,this.indexManager=a}return n(u)(e,[{key:"getDocument",value:function(e,t){var n=this,r=null;return this.documentOverlayCache.getOverlay(e,t).next((function(i){return r=i,n.remoteDocumentCache.getEntry(e,t)})).next((function(e){return null!==r&&dn(r.mutation,e,kt.empty(),Y.now()),e}))}},{key:"getDocuments",value:function(e,t){var n=this;return this.remoteDocumentCache.getEntries(e,t).next((function(t){return n.getLocalViewOfDocuments(e,t,Vn()).next((function(){return t}))}))}},{key:"getLocalViewOfDocuments",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Vn(),r=this,i=Ln();return this.populateOverlays(e,i,t).next((function(){return r.computeViews(e,t,i,n).next((function(e){var t=On();return e.forEach((function(e,n){t=t.insert(e,n.overlayedDocument)})),t}))}))}},{key:"getOverlayedDocuments",value:function(e,t){var n=this,r=Ln();return this.populateOverlays(e,r,t).next((function(){return n.computeViews(e,t,r,Vn())}))}},{key:"populateOverlays",value:function(e,t,n){var r=[];return n.forEach((function(e){t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((function(e){e.forEach((function(e,n){t.set(e,n)}))}))}},{key:"computeViews",value:function(e,t,n,r){var i=Dn(),a=Mn(),o=Mn();return t.forEach((function(e,t){var o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof mn)?i=i.insert(t.key,t):void 0!==o&&(a.set(t.key,o.mutation.getFieldMask()),dn(o.mutation,t,o.mutation.getFieldMask(),Y.now()))})),this.recalculateAndSaveOverlays(e,i).next((function(e){return e.forEach((function(e,t){return a.set(e,t)})),t.forEach((function(e,t){var n;return o.set(e,new jr(t,null!==(n=a.get(e))&&void 0!==n?n:null))})),o}))}},{key:"recalculateAndSaveOverlays",value:function(e,t){var n=this,r=Mn(),i=new vt((function(e,t){return e-t})),a=Vn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((function(e){var n=!0,a=!1,o=void 0;try{for(var s,u=function(e,n){var a=n.value;a.keys().forEach((function(e){var n=t.get(e);if(null!==n){var o=r.get(e)||kt.empty();o=a.applyToLocalView(n,o),r.set(e,o);var s=(i.get(a.batchId)||Vn()).add(e);i=i.insert(a.batchId,s)}}))},c=e[Symbol.iterator]();!(n=(s=c.next()).done);n=!0)u(0,s)}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}})).next((function(){for(var o=[],s=i.getReverseIterator();s.hasNext();){var u=s.getNext(),c=u.key,l=u.value,h=Pn();l.forEach((function(e){if(!a.has(e)){var n=hn(t.get(e),r.get(e));null!==n&&h.set(e,n),a=a.add(e)}})),o.push(n.documentOverlayCache.saveOverlays(e,c,h))}return he.waitFor(o)})).next((function(){return r}))}},{key:"recalculateAndSaveOverlaysForDocumentKeys",value:function(e,t){var n=this;return this.remoteDocumentCache.getEntries(e,t).next((function(t){return n.recalculateAndSaveOverlays(e,t)}))}},{key:"getDocumentsMatchingQuery",value:function(e,t,n){return r=t,te.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):Lt(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var r}},{key:"getNextDocuments",value:function(e,t,n,r){var i=this;return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((function(a){var o=i,s=r-a.size>0?i.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-a.size):he.resolve(Ln()),u=-1,c=a;return s.next((function(t){return he.forEach(t,(function(t,n){return u<n.largestBatchId&&(u=n.largestBatchId),a.get(t)?he.resolve():o.remoteDocumentCache.getEntry(e,t).next((function(e){c=c.insert(t,e)}))})).next((function(){return o.populateOverlays(e,t,a)})).next((function(){return o.computeViews(e,c,t,Vn())})).next((function(e){return{batchId:u,changes:Rn(e)}}))}))}))}},{key:"getDocumentsMatchingDocumentQuery",value:function(e,t){return this.getDocument(e,new te(t)).next((function(e){var t=On();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}},{key:"getDocumentsMatchingCollectionGroupQuery",value:function(e,t,n){var r=this,i=t.collectionGroup,a=On();return this.indexManager.getCollectionParents(e,i).next((function(o){return he.forEach(o,(function(o){var s,u,c=(s=t,u=o.child(i),new Ct(u,null,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt));return r.getDocumentsMatchingCollectionQuery(e,c,n).next((function(e){e.forEach((function(e,t){a=a.insert(e,t)}))}))})).next((function(){return a}))}))}},{key:"getDocumentsMatchingCollectionQuery",value:function(e,t,n){var r,i=this;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((function(a){return r=a,i.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)})).next((function(e){e.forEach((function(e,t){var n=t.getKey();null===r.get(n)&&(r=r.insert(n,xt.newInvalidDocument(n)))}));var n=On();return r.forEach((function(r,i){var a=e.get(r);void 0!==a&&dn(a.mutation,i,kt.empty(),Y.now()),qt(t,i)&&(n=n.insert(r,i))})),n}))}}]),e}(),Br=function(){"use strict";function e(t){n(o)(this,e),this.yt=t,this.Zn=new Map,this.ts=new Map}return n(u)(e,[{key:"getBundleMetadata",value:function(e,t){return he.resolve(this.Zn.get(t))}},{key:"saveBundleMetadata",value:function(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:ir(n.createTime)}),he.resolve()}},{key:"getNamedQuery",value:function(e,t){return he.resolve(this.ts.get(t))}},{key:"saveNamedQuery",value:function(e,t){return this.ts.set(t.name,{name:(n=t).name,query:Rr(n.bundledQuery),readTime:ir(n.readTime)}),he.resolve();var n}}]),e}(),Kr=function(){"use strict";function e(){n(o)(this,e),this.overlays=new vt(te.comparator),this.es=new Map}return n(u)(e,[{key:"getOverlay",value:function(e,t){return he.resolve(this.overlays.get(t))}},{key:"getOverlays",value:function(e,t){var n=this,r=Ln();return he.forEach(t,(function(t){return n.getOverlay(e,t).next((function(e){null!==e&&r.set(t,e)}))})).next((function(){return r}))}},{key:"saveOverlays",value:function(e,t,n){var r=this;return n.forEach((function(n,i){r.oe(e,t,i)})),he.resolve()}},{key:"removeOverlaysForBatchId",value:function(e,t,n){var r=this,i=this.es.get(n);return void 0!==i&&(i.forEach((function(e){return r.overlays=r.overlays.remove(e)})),this.es.delete(n)),he.resolve()}},{key:"getOverlaysForCollection",value:function(e,t,n){for(var r=Ln(),i=t.length+1,a=new te(t.child("")),o=this.overlays.getIteratorFrom(a);o.hasNext();){var s=o.getNext().value,u=s.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&s.largestBatchId>n&&r.set(s.getKey(),s)}return he.resolve(r)}},{key:"getOverlaysForCollectionGroup",value:function(e,t,n,r){for(var i=new vt((function(e,t){return e-t})),a=this.overlays.getIterator();a.hasNext();){var o=a.getNext().value;if(o.getKey().getCollectionGroup()===t&&o.largestBatchId>n){var s=i.get(o.largestBatchId);null===s&&(s=Ln(),i=i.insert(o.largestBatchId,s)),s.set(o.getKey(),o)}}for(var u=Ln(),c=i.getIterator();c.hasNext()&&(c.getNext().value.forEach((function(e,t){return u.set(e,t)})),!(u.size()>=r)););return he.resolve(u)}},{key:"oe",value:function(e,t,n){var r=this.overlays.get(n.key);if(null!==r){var i=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,i)}this.overlays=this.overlays.insert(n.key,new Dr(t,n));var a=this.es.get(t);void 0===a&&(a=Vn(),this.es.set(t,a)),this.es.set(t,a.add(n.key))}}]),e}(),Hr=function(){"use strict";function e(){n(o)(this,e),this.ns=new mt(zr.ss),this.rs=new mt(zr.os)}return n(u)(e,[{key:"isEmpty",value:function(){return this.ns.isEmpty()}},{key:"addReference",value:function(e,t){var n=new zr(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}},{key:"us",value:function(e,t){var n=this;e.forEach((function(e){return n.addReference(e,t)}))}},{key:"removeReference",value:function(e,t){this.cs(new zr(e,t))}},{key:"hs",value:function(e,t){var n=this;e.forEach((function(e){return n.removeReference(e,t)}))}},{key:"ls",value:function(e){var t=this,n=new te(new $([])),r=new zr(n,e),i=new zr(n,e+1),a=[];return this.rs.forEachInRange([r,i],(function(e){t.cs(e),a.push(e.key)})),a}},{key:"fs",value:function(){var e=this;this.ns.forEach((function(t){return e.cs(t)}))}},{key:"cs",value:function(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}},{key:"ds",value:function(e){var t=new te(new $([])),n=new zr(t,e),r=new zr(t,e+1),i=Vn();return this.rs.forEachInRange([n,r],(function(e){i=i.add(e.key)})),i}},{key:"containsKey",value:function(e){var t=new zr(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}]),e}(),zr=function(){"use strict";function e(t,r){n(o)(this,e),this.key=t,this._s=r}return n(u)(e,null,[{key:"ss",value:function(e,t){return te.comparator(e.key,t.key)||G(e._s,t._s)}},{key:"os",value:function(e,t){return G(e._s,t._s)||te.comparator(e.key,t.key)}}]),e}(),Wr=function(){"use strict";function e(t,r){n(o)(this,e),this.indexManager=t,this.referenceDelegate=r,this.mutationQueue=[],this.ws=1,this.gs=new mt(zr.ss)}return n(u)(e,[{key:"checkEmpty",value:function(e){return he.resolve(0===this.mutationQueue.length)}},{key:"addMutationBatch",value:function(e,t,n,r){var i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];var a=new Cr(i,t,n,r);this.mutationQueue.push(a);var o=!0,s=!1,u=void 0;try{for(var c,l=r[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=c.value;this.gs=this.gs.add(new zr(h.key,i)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast())}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return he.resolve(a)}},{key:"lookupMutationBatch",value:function(e,t){return he.resolve(this.ys(t))}},{key:"getNextMutationBatchAfterBatchId",value:function(e,t){var n=t+1,r=this.ps(n),i=r<0?0:r;return he.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}},{key:"getHighestUnacknowledgedBatchId",value:function(){return he.resolve(0===this.mutationQueue.length?-1:this.ws-1)}},{key:"getAllMutationBatches",value:function(e){return he.resolve(this.mutationQueue.slice())}},{key:"getAllMutationBatchesAffectingDocumentKey",value:function(e,t){var n=this,r=new zr(t,0),i=new zr(t,Number.POSITIVE_INFINITY),a=[];return this.gs.forEachInRange([r,i],(function(e){var t=n.ys(e._s);a.push(t)})),he.resolve(a)}},{key:"getAllMutationBatchesAffectingDocumentKeys",value:function(e,t){var n=this,r=new mt(G);return t.forEach((function(e){var t=new zr(e,0),i=new zr(e,Number.POSITIVE_INFINITY);n.gs.forEachInRange([t,i],(function(e){r=r.add(e._s)}))})),he.resolve(this.Is(r))}},{key:"getAllMutationBatchesAffectingQuery",value:function(e,t){var n=t.path,r=n.length+1,i=n;te.isDocumentKey(i)||(i=i.child(""));var a=new zr(new te(i),0),o=new mt(G);return this.gs.forEachWhile((function(e){var t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e._s)),!0)}),a),he.resolve(this.Is(o))}},{key:"Is",value:function(e){var t=this,n=[];return e.forEach((function(e){var r=t.ys(e);null!==r&&n.push(r)})),n}},{key:"removeMutationBatch",value:function(e,t){var n=this;O(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();var r=this.gs;return he.forEach(t.mutations,(function(i){var a=new zr(i.key,t.batchId);return r=r.delete(a),n.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((function(){n.gs=r}))}},{key:"An",value:function(e){}},{key:"containsKey",value:function(e,t){var n=new zr(t,0),r=this.gs.firstAfterOrEqual(n);return he.resolve(t.isEqual(r&&r.key))}},{key:"performConsistencyCheck",value:function(e){return this.mutationQueue.length,he.resolve()}},{key:"Ts",value:function(e,t){return this.ps(e)}},{key:"ps",value:function(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}},{key:"ys",value:function(e){var t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}]),e}(),Gr=function(){"use strict";function e(t){n(o)(this,e),this.Es=t,this.docs=new vt(te.comparator),this.size=0}return n(u)(e,[{key:"setIndexManager",value:function(e){this.indexManager=e}},{key:"addEntry",value:function(e,t){var n=t.key,r=this.docs.get(n),i=r?r.size:0,a=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}},{key:"removeEntry",value:function(e){var t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}},{key:"getEntry",value:function(e,t){var n=this.docs.get(t);return he.resolve(n?n.document.mutableCopy():xt.newInvalidDocument(t))}},{key:"getEntries",value:function(e,t){var n=this,r=Dn();return t.forEach((function(e){var t=n.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():xt.newInvalidDocument(e))})),he.resolve(r)}},{key:"getAllFromCollection",value:function(e,t,n){for(var r=Dn(),i=new te(t.child("")),a=this.docs.getIteratorFrom(i);a.hasNext();){var o=a.getNext(),s=o.key,u=o.value.document;if(!t.isPrefixOf(s.path))break;s.path.length>t.length+1||oe(ie(u),n)<=0||(r=r.insert(u.key,u.mutableCopy()))}return he.resolve(r)}},{key:"getAllFromCollectionGroup",value:function(e,t,n,r){N()}},{key:"As",value:function(e,t){return he.forEach(this.docs,(function(e){return t(e)}))}},{key:"newChangeBuffer",value:function(e){return new Qr(this)}},{key:"getSize",value:function(e){return he.resolve(this.size)}}]),e}(),Qr=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e){var i;return n(o)(this,r),(i=t.call(this)).Yn=e,n(f)(i)}return n(u)(r,[{key:"applyChanges",value:function(e){var t=this,n=[];return this.changes.forEach((function(r,i){i.isValidDocument()?n.push(t.Yn.addEntry(e,i)):t.Yn.removeEntry(r)})),he.waitFor(n)}},{key:"getFromCache",value:function(e,t){return this.Yn.getEntry(e,t)}},{key:"getAllFromCache",value:function(e,t){return this.Yn.getEntries(e,t)}}]),r}(Vr),Yr=function(){"use strict";function e(t){n(o)(this,e),this.persistence=t,this.Rs=new Cn((function(e){return It(e)}),_t),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Hr,this.targetCount=0,this.vs=Fr.Pn()}return n(u)(e,[{key:"forEachTarget",value:function(e,t){return this.Rs.forEach((function(e,n){return t(n)})),he.resolve()}},{key:"getLastRemoteSnapshotVersion",value:function(e){return he.resolve(this.lastRemoteSnapshotVersion)}},{key:"getHighestSequenceNumber",value:function(e){return he.resolve(this.bs)}},{key:"allocateTargetId",value:function(e){return this.highestTargetId=this.vs.next(),he.resolve(this.highestTargetId)}},{key:"setTargetsMetadata",value:function(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),he.resolve()}},{key:"Dn",value:function(e){this.Rs.set(e.target,e);var t=e.targetId;t>this.highestTargetId&&(this.vs=new Fr(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}},{key:"addTargetData",value:function(e,t){return this.Dn(t),this.targetCount+=1,he.resolve()}},{key:"updateTargetData",value:function(e,t){return this.Dn(t),he.resolve()}},{key:"removeTargetData",value:function(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,he.resolve()}},{key:"removeTargets",value:function(e,t,n){var r=this,i=0,a=[];return this.Rs.forEach((function(o,s){s.sequenceNumber<=t&&null===n.get(s.targetId)&&(r.Rs.delete(o),a.push(r.removeMatchingKeysForTargetId(e,s.targetId)),i++)})),he.waitFor(a).next((function(){return i}))}},{key:"getTargetCount",value:function(e){return he.resolve(this.targetCount)}},{key:"getTargetData",value:function(e,t){var n=this.Rs.get(t)||null;return he.resolve(n)}},{key:"addMatchingKeys",value:function(e,t,n){return this.Ps.us(t,n),he.resolve()}},{key:"removeMatchingKeys",value:function(e,t,n){this.Ps.hs(t,n);var r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((function(t){i.push(r.markPotentiallyOrphaned(e,t))})),he.waitFor(i)}},{key:"removeMatchingKeysForTargetId",value:function(e,t){return this.Ps.ls(t),he.resolve()}},{key:"getMatchingKeysForTargetId",value:function(e,t){var n=this.Ps.ds(t);return he.resolve(n)}},{key:"containsKey",value:function(e,t){return he.resolve(this.Ps.containsKey(t))}}]),e}(),Jr=function(){"use strict";function e(t,r){var i=this;n(o)(this,e),this.Vs={},this.overlays={},this.Ss=new de(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Yr(this),this.indexManager=new Pr,this.remoteDocumentCache=new Gr((function(e){return i.referenceDelegate.xs(e)})),this.yt=new Or(r),this.Ns=new Br(this.yt)}return n(u)(e,[{key:"start",value:function(){return Promise.resolve()}},{key:"shutdown",value:function(){return this.Ds=!1,Promise.resolve()}},{key:"started",get:function(){return this.Ds}},{key:"setDatabaseDeletedListener",value:function(){}},{key:"setNetworkEnabled",value:function(){}},{key:"getIndexManager",value:function(e){return this.indexManager}},{key:"getDocumentOverlayCache",value:function(e){var t=this.overlays[e.toKey()];return t||(t=new Kr,this.overlays[e.toKey()]=t),t}},{key:"getMutationQueue",value:function(e,t){var n=this.Vs[e.toKey()];return n||(n=new Wr(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}},{key:"getTargetCache",value:function(){return this.Cs}},{key:"getRemoteDocumentCache",value:function(){return this.remoteDocumentCache}},{key:"getBundleCache",value:function(){return this.Ns}},{key:"runTransaction",value:function(e,t,n){var r=this;S("MemoryPersistence","Starting transaction:",e);var i=new Xr(this.Ss.next());return this.referenceDelegate.ks(),n(i).next((function(e){return r.referenceDelegate.Os(i).next((function(){return e}))})).toPromise().then((function(e){return i.raiseOnCommittedEvent(),e}))}},{key:"Ms",value:function(e,t){return he.or(Object.values(this.Vs).map((function(n){return function(){return n.containsKey(e,t)}})))}}]),e}(),Xr=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e){var i;return n(o)(this,r),(i=t.call(this)).currentSequenceNumber=e,n(f)(i)}return r}(ue),$r=function(){"use strict";function e(t){n(o)(this,e),this.persistence=t,this.Fs=new Hr,this.$s=null}return n(u)(e,[{key:"Ls",get:function(){if(this.$s)return this.$s;throw N()}},{key:"addReference",value:function(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),he.resolve()}},{key:"removeReference",value:function(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),he.resolve()}},{key:"markPotentiallyOrphaned",value:function(e,t){return this.Ls.add(t.toString()),he.resolve()}},{key:"removeTarget",value:function(e,t){var n=this;this.Fs.ls(t.targetId).forEach((function(e){return n.Ls.add(e.toString())}));var r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((function(e){var t=n;e.forEach((function(e){return t.Ls.add(e.toString())}))})).next((function(){return r.removeTargetData(e,t)}))}},{key:"ks",value:function(){this.$s=new Set}},{key:"Os",value:function(e){var t=this,n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return he.forEach(this.Ls,(function(r){var i=te.fromPath(r);return t.qs(e,i).next((function(e){e||n.removeEntry(i,J.min())}))})).next((function(){return t.$s=null,n.apply(e)}))}},{key:"updateLimboDocument",value:function(e,t){var n=this;return this.qs(e,t).next((function(e){e?n.Ls.delete(t.toString()):n.Ls.add(t.toString())}))}},{key:"xs",value:function(e){return 0}},{key:"qs",value:function(e,t){var n=this;return he.or([function(){return he.resolve(n.Fs.containsKey(t))},function(){return n.persistence.getTargetCache().containsKey(e,t)},function(){return n.persistence.Ms(e,t)}])}}],[{key:"Bs",value:function(t){return new e(t)}}]),e}();
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
var Zr=function(){"use strict";function e(t,r,i,a){n(o)(this,e),this.targetId=t,this.fromCache=r,this.Si=i,this.Di=a}return n(u)(e,null,[{key:"Ci",value:function(t,n){var r=Vn(),i=Vn(),a=!0,o=!1,s=void 0;try{for(var u,c=n.docChanges[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;switch(l.type){case 0:r=r.add(l.doc.key);break;case 1:i=i.add(l.doc.key)}}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return new e(t,n.fromCache,r,i)}}]),e}(),ei=function(){"use strict";function e(){n(o)(this,e),this.xi=!1}return n(u)(e,[{key:"initialize",value:function(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}},{key:"getDocumentsMatchingQuery",value:function(e,t,n,r){var i=this;return this.ki(e,t).next((function(a){return a||i.Oi(e,t,r,n)})).next((function(n){return n||i.Mi(e,t)}))}},{key:"ki",value:function(e,t){var r=this;if(Nt(t))return he.resolve(null);var i=Mt(t);return this.indexManager.getIndexType(e,i).next((function(a){return 0===a?null:(null!==t.limit&&1===a&&(t=Ut(t,null,"F"),i=Mt(t)),r.indexManager.getDocumentsMatchingTarget(e,i).next((function(a){var o=r,s=Vn.apply(void 0,n(v)(a));return r.Ni.getDocuments(e,s).next((function(n){return o.indexManager.getMinOffset(e,i).next((function(r){var i=o.Fi(t,n);return o.$i(t,i,s,r.readTime)?o.ki(e,Ut(t,null,"F")):o.Bi(e,i,t,r)}))}))})))}))}},{key:"Oi",value:function(e,t,n,r){var i=this;return Nt(t)||r.isEqual(J.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next((function(a){var o=i.Fi(t,a);return i.$i(t,o,n,r)?i.Mi(e,t):(_()<=k.LogLevel.DEBUG&&S("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),jt(t)),i.Bi(e,o,t,re(r,-1)))}))}},{key:"Fi",value:function(e,t){var n=new mt(Kt(e));return t.forEach((function(t,r){qt(e,r)&&(n=n.add(r))})),n}},{key:"$i",value:function(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;var i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}},{key:"Mi",value:function(e,t){return _()<=k.LogLevel.DEBUG&&S("QueryEngine","Using full collection scan to execute query:",jt(t)),this.Ni.getDocumentsMatchingQuery(e,t,ae.min())}},{key:"Bi",value:function(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next((function(e){return t.forEach((function(t){e=e.insert(t.key,t)})),e}))}}]),e}(),ti=function(){"use strict";function e(t,r,i,a){n(o)(this,e),this.persistence=t,this.Li=r,this.yt=a,this.qi=new vt(G),this.Ui=new Cn((function(e){return It(e)}),_t),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(i)}return n(u)(e,[{key:"Qi",value:function(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qr(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}},{key:"collectGarbage",value:function(e){var t=this;return this.persistence.runTransaction("Collect garbage","readwrite-primary",(function(n){return e.collect(n,t.qi)}))}}]),e}();
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
 */function ni(e,t,n,r){return new ti(e,t,n,r)}function ri(e,t){return ii.apply(this,arguments)}function ii(){return(ii=n(i)(n(y).mark((function e(t,r){var i;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=R(t),e.next=3,i.persistence.runTransaction("Handle user change","readonly",(function(e){var t;return i.mutationQueue.getAllMutationBatches(e).next((function(n){return t=n,i.Qi(r),i.mutationQueue.getAllMutationBatches(e)})).next((function(n){var r=[],a=[],o=Vn(),s=!0,u=!1,c=void 0;try{for(var l,h=t[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;r.push(f.batchId);var d=!0,v=!1,p=void 0;try{for(var y,m=f.mutations[Symbol.iterator]();!(d=(y=m.next()).done);d=!0){var g=y.value;o=o.add(g.key)}}catch(e){v=!0,p=e}finally{try{d||null==m.return||m.return()}finally{if(v)throw p}}}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}var k=!0,w=!1,b=void 0;try{for(var x,E=n[Symbol.iterator]();!(k=(x=E.next()).done);k=!0){var T=x.value;a.push(T.batchId);var I=!0,_=!1,S=void 0;try{for(var C,A=T.mutations[Symbol.iterator]();!(I=(C=A.next()).done);I=!0){var D=C.value;o=o.add(D.key)}}catch(e){_=!0,S=e}finally{try{I||null==A.return||A.return()}finally{if(_)throw S}}}}catch(e){w=!0,b=e}finally{try{k||null==E.return||E.return()}finally{if(w)throw b}}return i.localDocuments.getDocuments(e,o).next((function(e){return{ji:e,removedBatchIds:r,addedBatchIds:a}}))}))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ai(e,t){var n=R(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(function(e){var r,i,a,o,s,u,c,l=t.batch.keys(),h=n.Gi.newChangeBuffer({trackRemovals:!0});return(r=n,i=e,a=t,o=h,s=a.batch,u=s.keys(),c=he.resolve(),u.forEach((function(e){c=c.next((function(){return o.getEntry(i,e)})).next((function(t){var n=a.docVersions.get(e);O(null!==n),t.version.compareTo(n)<0&&(s.applyToRemoteDocument(t,a),t.isValidDocument()&&(t.setReadTime(a.commitVersion),o.addEntry(t)))}))})),c.next((function(){return r.mutationQueue.removeMutationBatch(i,s)}))).next((function(){return h.apply(e)})).next((function(){return n.mutationQueue.performConsistencyCheck(e)})).next((function(){return n.documentOverlayCache.removeOverlaysForBatchId(e,l,t.batch.batchId)})).next((function(){return n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){for(var t=Vn(),n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))})).next((function(){return n.localDocuments.getDocuments(e,l)}))}))}function oi(e){var t=R(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(function(e){return t.Cs.getLastRemoteSnapshotVersion(e)}))}function si(e,t){var n=R(e),r=t.snapshotVersion,i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(function(e){var a=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;var o=[];t.targetChanges.forEach((function(a,s){var u=i.get(s);if(u){o.push(n.Cs.removeMatchingKeys(e,a.removedDocuments,s).next((function(){return n.Cs.addMatchingKeys(e,a.addedDocuments,s)})));var c,l,h,f=u.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(s)?f=f.withResumeToken(Ee.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):a.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(a.resumeToken,r)),i=i.insert(s,f),l=f,h=a,(0===(c=u).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0)&&o.push(n.Cs.updateTargetData(e,f))}}));var s=Dn(),u=Vn();if(t.documentUpdates.forEach((function(r){t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(ui(e,a,t.documentUpdates).next((function(e){s=e.Wi,u=e.zi}))),!r.isEqual(J.min())){var c=n.Cs.getLastRemoteSnapshotVersion(e).next((function(t){return n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r)}));o.push(c)}return he.waitFor(o).next((function(){return a.apply(e)})).next((function(){return n.localDocuments.getLocalViewOfDocuments(e,s,u)})).next((function(){return s}))})).then((function(e){return n.qi=i,e}))}function ui(e,t,n){var r=Vn(),i=Vn();return n.forEach((function(e){return r=r.add(e)})),t.getEntries(e,r).next((function(e){var r=Dn();return n.forEach((function(n,a){var o=e.get(n);a.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),a.isNoDocument()&&a.version.isEqual(J.min())?(t.removeEntry(n,a.readTime),r=r.insert(n,a)):!o.isValidDocument()||a.version.compareTo(o.version)>0||0===a.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(a),r=r.insert(n,a)):S("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",a.version)})),{Wi:r,zi:i}}))}function ci(e,t){var n=R(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(function(e){return void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)}))}function li(e,t){var n=R(e);return n.persistence.runTransaction("Allocate target","readwrite",(function(e){var r;return n.Cs.getTargetData(e,t).next((function(i){return i?(r=i,he.resolve(r)):n.Cs.allocateTargetId(e).next((function(i){return r=new Nr(t,i,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next((function(){return r}))}))}))})).then((function(e){var r=n.qi.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(e.targetId,e),n.Ui.set(t,e.targetId)),e}))}function hi(e,t,n){return fi.apply(this,arguments)}function fi(){return(fi=n(i)(n(y).mark((function e(t,r,i){var a,o,s;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=R(t),o=a.qi.get(r),s=i?"readwrite":"readwrite-primary",e.prev=1,e.t0=i,e.t0){e.next=6;break}return e.next=6,a.persistence.runTransaction("Release target",s,(function(e){return a.persistence.referenceDelegate.removeTarget(e,o)}));case 6:e.next=13;break;case 8:if(e.prev=8,e.t1=e.catch(1),fe(e.t1)){e.next=12;break}throw e.t1;case 12:S("LocalStore","Failed to update sequence numbers for target ".concat(r,": ").concat(e.t1));case 13:a.qi=a.qi.remove(r),a.Ui.delete(o.target);case 14:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function di(e,t,n){var r=R(e),i=J.min(),a=Vn();return r.persistence.runTransaction("Execute query","readonly",(function(e){return(o=r,s=e,u=Mt(t),c=R(o),l=c.Ui.get(u),void 0!==l?he.resolve(c.qi.get(l)):c.Cs.getTargetData(s,u)).next((function(t){if(t)return i=t.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(e,t.targetId).next((function(e){a=e}))})).next((function(){return r.Li.getDocumentsMatchingQuery(e,t,n?i:J.min(),n?a:Vn())})).next((function(e){return vi(r,Bt(t),e),{documents:e,Hi:a}}));var o,s,u,c,l}))}function vi(e,t,n){var r=e.Ki.get(t)||J.min();n.forEach((function(e,t){t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ki.set(t,r)}var pi=function(){"use strict";function e(){n(o)(this,e),this.activeTargetIds=qn()}return n(u)(e,[{key:"er",value:function(e){this.activeTargetIds=this.activeTargetIds.add(e)}},{key:"nr",value:function(e){this.activeTargetIds=this.activeTargetIds.delete(e)}},{key:"tr",value:function(){var e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}]),e}(),yi=function(){"use strict";function e(){n(o)(this,e),this.Lr=new pi,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}return n(u)(e,[{key:"addPendingMutation",value:function(e){}},{key:"updateMutationState",value:function(e,t,n){}},{key:"addLocalQueryTarget",value:function(e){return this.Lr.er(e),this.qr[e]||"not-current"}},{key:"updateQueryState",value:function(e,t,n){this.qr[e]=t}},{key:"removeLocalQueryTarget",value:function(e){this.Lr.nr(e)}},{key:"isLocalQueryTarget",value:function(e){return this.Lr.activeTargetIds.has(e)}},{key:"clearQueryState",value:function(e){delete this.qr[e]}},{key:"getAllActiveQueryTargets",value:function(){return this.Lr.activeTargetIds}},{key:"isActiveQueryTarget",value:function(e){return this.Lr.activeTargetIds.has(e)}},{key:"start",value:function(){return this.Lr=new pi,Promise.resolve()}},{key:"handleUserChange",value:function(e,t,n){}},{key:"setOnlineState",value:function(e){}},{key:"shutdown",value:function(){}},{key:"writeSequenceNumber",value:function(e){}},{key:"notifyBundleLoaded",value:function(e){}}]),e}(),mi=function(){"use strict";function e(){n(o)(this,e)}return n(u)(e,[{key:"Ur",value:function(e){}},{key:"shutdown",value:function(){}}]),e}(),gi=function(){"use strict";function e(){var t=this;n(o)(this,e),this.Kr=function(){return t.Gr()},this.Qr=function(){return t.jr()},this.Wr=[],this.zr()}return n(u)(e,[{key:"Ur",value:function(e){this.Wr.push(e)}},{key:"shutdown",value:function(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}},{key:"zr",value:function(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}},{key:"Gr",value:function(){S("ConnectivityMonitor","Network connectivity changed: AVAILABLE");var e=!0,t=!1,n=void 0;try{for(var r,i=this.Wr[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){(0,r.value)(0)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}},{key:"jr",value:function(){S("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");var e=!0,t=!1,n=void 0;try{for(var r,i=this.Wr[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){(0,r.value)(1)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}}],[{key:"C",value:function(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}]),e}(),ki={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},wi=function(){"use strict";function e(t){n(o)(this,e),this.Hr=t.Hr,this.Jr=t.Jr}return n(u)(e,[{key:"Yr",value:function(e){this.Xr=e}},{key:"Zr",value:function(e){this.eo=e}},{key:"onMessage",value:function(e){this.no=e}},{key:"close",value:function(){this.Jr()}},{key:"send",value:function(e){this.Hr(e)}},{key:"so",value:function(){this.Xr()}},{key:"io",value:function(e){this.eo(e)}},{key:"ro",value:function(e){this.no(e)}}]),e}(),bi=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e){var i;return n(o)(this,r),(i=t.call(this,e)).forceLongPolling=e.forceLongPolling,i.autoDetectLongPolling=e.autoDetectLongPolling,i.useFetchStreams=e.useFetchStreams,n(f)(i)}return n(u)(r,[{key:"fo",value:function(e,t,n,r){return new Promise((function(i,a){var o=new(0,b.XhrIo);o.setWithCredentials(!0),o.listenOnce(b.EventType.COMPLETE,(function(){try{switch(o.getLastErrorCode()){case b.ErrorCode.NO_ERROR:var t=o.getResponseJson();S("Connection","XHR received:",JSON.stringify(t)),i(t);break;case b.ErrorCode.TIMEOUT:S("Connection",'RPC "'+e+'" timed out'),a(new P(L.DEADLINE_EXCEEDED,"Request time out"));break;case b.ErrorCode.HTTP_ERROR:var n=o.getStatus();if(S("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){var r=o.getResponseJson();Array.isArray(r)&&(r=r[0]);var s=null==r?void 0:r.error;if(s&&s.status&&s.message){var u=(c=s.status,l=c.toLowerCase().replace(/_/g,"-"),Object.values(L).indexOf(l)>=0?l:L.UNKNOWN);a(new P(u,s.message))}else a(new P(L.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new P(L.UNAVAILABLE,"Connection failed."));break;default:N()}}finally{S("Connection",'RPC "'+e+'" completed.')}var c,l}));var s=JSON.stringify(r);o.send(t,"POST",s,n,15)}))}},{key:"wo",value:function(e,t,n){var r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=(0,b.createWebChannelTransport)(),a=(0,b.getStatEventTarget)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/".concat(this.databaseId.projectId,"/databases/").concat(this.databaseId.database)},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new(0,b.FetchXmlHttpFactory)({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;var s=r.join("");S("Connection","Creating WebChannel: "+s,o);var u=i.createWebChannel(s,o),c=!1,l=!1,h=new wi({Hr:function(e){l?S("Connection","Not sending because WebChannel is closed:",e):(c||(S("Connection","Opening WebChannel transport."),u.open(),c=!0),S("Connection","WebChannel sending:",e),u.send(e))},Jr:function(){return u.close()}}),f=function(e,t,n){e.listen(t,(function(e){try{n(e)}catch(e){setTimeout((function(){throw e}),0)}}))};return f(u,b.WebChannel.EventType.OPEN,(function(){l||S("Connection","WebChannel transport opened.")})),f(u,b.WebChannel.EventType.CLOSE,(function(){l||(l=!0,S("Connection","WebChannel transport closed"),h.io())})),f(u,b.WebChannel.EventType.ERROR,(function(e){l||(l=!0,A("Connection","WebChannel transport errored:",e),h.io(new P(L.UNAVAILABLE,"The operation could not be completed")))})),f(u,b.WebChannel.EventType.MESSAGE,(function(e){var t;if(!l){var n=e.data[0];O(!!n);var r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){S("Connection","WebChannel received error:",i);var a=i.status,o=function(e){var t=bn[e];if(void 0!==t)return Sn(t)}(a),s=i.message;void 0===o&&(o=L.INTERNAL,s="Unknown error status: "+a+" with message "+i.message),l=!0,h.io(new P(o,s)),u.close()}else S("Connection","WebChannel received:",n),h.ro(n)}})),f(a,b.Event.STAT_EVENT,(function(e){e.stat===b.Stat.PROXY?S("Connection","Detected buffering proxy"):e.stat===b.Stat.NOPROXY&&S("Connection","Detected no buffering proxy")})),setTimeout((function(){h.so()}),0),h}}]),r}(function(){"use strict";function e(t){n(o)(this,e),this.databaseInfo=t,this.databaseId=t.databaseId;var r=t.ssl?"https":"http";this.oo=r+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}return n(u)(e,[{key:"co",get:function(){return!1}},{key:"ao",value:function(e,t,n,r,i){var a=this.ho(e,t);S("RestConnection","Sending: ",a,n);var o={};return this.lo(o,r,i),this.fo(e,a,o,n).then((function(e){return S("RestConnection","Received: ",e),e}),(function(t){throw A("RestConnection","".concat(e," failed with error: "),t,"url: ",a,"request:",n),t}))}},{key:"_o",value:function(e,t,n,r,i,a){return this.ao(e,t,n,r,i)}},{key:"lo",value:function(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+T,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((function(t,n){return e[n]=t})),n&&n.headers.forEach((function(t,n){return e[n]=t}))}},{key:"ho",value:function(e,t){var n=ki[e];return"".concat(this.oo,"/v1/").concat(t,":").concat(n)}}]),e}());function xi(){return"undefined"!=typeof document?document:null}
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
 */function Ei(e){return new er(e,!0)}var Ti=function(){"use strict";function e(t,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.5,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:6e4;n(o)(this,e),this.Hs=t,this.timerId=r,this.mo=i,this.yo=a,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}return n(u)(e,[{key:"reset",value:function(){this.Io=0}},{key:"Ao",value:function(){this.Io=this.po}},{key:"Ro",value:function(e){var t=this;this.cancel();var n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&S("ExponentialBackoff","Backing off for ".concat(i," ms (base delay: ").concat(this.Io," ms, delay with jitter: ").concat(n," ms, last attempt: ").concat(r," ms ago)")),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,(function(){return t.Eo=Date.now(),e()})),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}},{key:"Po",value:function(){null!==this.To&&(this.To.skipDelay(),this.To=null)}},{key:"cancel",value:function(){null!==this.To&&(this.To.cancel(),this.To=null)}},{key:"bo",value:function(){return(Math.random()-.5)*this.Io}}]),e}(),Ii=function(){"use strict";function e(t,r,i,a,s,u,c,l){n(o)(this,e),this.Hs=t,this.vo=i,this.Vo=a,this.connection=s,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Ti(t,r)}return n(u)(e,[{key:"No",value:function(){return 1===this.state||5===this.state||this.ko()}},{key:"ko",value:function(){return 2===this.state||3===this.state}},{key:"start",value:function(){4!==this.state?this.auth():this.Oo()}},{key:"stop",value:function(){var e=this;return n(i)(n(y).mark((function t(){return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=e.No(),!t.t0){t.next=4;break}return t.next=4,e.close(0);case 4:case"end":return t.stop()}}),t)})))()}},{key:"Mo",value:function(){this.state=0,this.xo.reset()}},{key:"Fo",value:function(){var e=this;this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(function(){return e.$o()})))}},{key:"Bo",value:function(e){this.Lo(),this.stream.send(e)}},{key:"$o",value:function(){var e=this;return n(i)(n(y).mark((function t(){return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.ko()){t.next=2;break}return t.abrupt("return",e.close(0));case 2:case"end":return t.stop()}}),t)})))()}},{key:"Lo",value:function(){this.Do&&(this.Do.cancel(),this.Do=null)}},{key:"qo",value:function(){this.Co&&(this.Co.cancel(),this.Co=null)}},{key:"close",value:function(e,t){var r=this;return n(i)(n(y).mark((function i(){return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.Lo(),r.qo(),r.xo.cancel(),r.So++,4!==e?r.xo.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(C(t.toString()),C("Using maximum backoff delay to prevent overloading the backend."),r.xo.Ao()):t&&t.code===L.UNAUTHENTICATED&&3!==r.state&&(r.authCredentialsProvider.invalidateToken(),r.appCheckCredentialsProvider.invalidateToken()),null!==r.stream&&(r.Uo(),r.stream.close(),r.stream=null),r.state=e,n.next=9,r.listener.Zr(t);case 9:case"end":return n.stop()}}),i)})))()}},{key:"Uo",value:function(){}},{key:"auth",value:function(){var e=this;this.state=1;var t=this.Ko(this.So),r=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((function(t){var i=n(d)(t,2),a=i[0],o=i[1];e.So===r&&e.Go(a,o)}),(function(n){var r=e;t((function(){var e=new P(L.UNKNOWN,"Fetching auth token failed: "+n.message);return r.Qo(e)}))}))}},{key:"Go",value:function(e,t){var n=this,r=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((function(){var e=n;r((function(){return e.state=2,e.Co=e.Hs.enqueueAfterDelay(e.Vo,1e4,(function(){return e.ko()&&(e.state=3),Promise.resolve()})),e.listener.Yr()}))})),this.stream.Zr((function(e){var t=n;r((function(){return t.Qo(e)}))})),this.stream.onMessage((function(e){var t=n;r((function(){return t.onMessage(e)}))}))}},{key:"Oo",value:function(){var e=this;this.state=5,this.xo.Ro(n(i)(n(y).mark((function t(){return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.state=0,e.start();case 1:case"end":return t.stop()}}),t)}))))}},{key:"Qo",value:function(e){return S("PersistentStream","close with error: ".concat(e)),this.stream=null,this.close(4,e)}},{key:"Ko",value:function(e){var t=this;return function(n){var r=t;t.Hs.enqueueAndForget((function(){return r.So===e?n():(S("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())}))}}}]),e}(),_i=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e,i,a,s,u,c){var l;return n(o)(this,r),(l=t.call(this,e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,a,s,c)).yt=u,n(f)(l)}return n(u)(r,[{key:"jo",value:function(e,t){return this.connection.wo("Listen",e,t)}},{key:"onMessage",value:function(e){this.xo.reset();var t=function(e,t){var n,r;if("targetChange"in t){t.targetChange;var i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:N(),a=t.targetChange.targetIds||[],o=function(e,t){return e.wt?(O(void 0===t||"string"==typeof t),Ee.fromBase64String(t||"")):(O(void 0===t||t instanceof Uint8Array),Ee.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,u=s&&function(e){var t=void 0===e.code?L.UNKNOWN:Sn(e.code);return new P(t,e.message||"")}(s);n=new Wn(i,a,o,u||null)}else if("documentChange"in t){t.documentChange;var c=t.documentChange;c.document,c.document.name,c.document.updateTime;var l=ur(e,c.document.name),h=ir(c.document.updateTime),f=c.document.createTime?ir(c.document.createTime):J.min(),d=new wt({mapValue:{fields:c.document.fields}}),v=xt.newFoundDocument(l,h,f,d),p=c.targetIds||[],y=c.removedTargetIds||[];n=new Hn(p,y,v.key,v)}else if("documentDelete"in t){t.documentDelete;var m=t.documentDelete;m.document;var g=ur(e,m.document),k=m.readTime?ir(m.readTime):J.min(),w=xt.newNoDocument(g,k),b=m.removedTargetIds||[];n=new Hn([],b,w.key,w)}else if("documentRemove"in t){t.documentRemove;var x=t.documentRemove;x.document;var E=ur(e,x.document),T=x.removedTargetIds||[];n=new Hn([],T,E,null)}else{if(!("filter"in t))return N();t.filter;var I=t.filter;I.targetId;var _=I.count||0,S=new In(_),C=I.targetId;n=new zn(C,S)}return n}(this.yt,e),n=function(e){if(!("targetChange"in e))return J.min();var t=e.targetChange;return t.targetIds&&t.targetIds.length?J.min():t.readTime?ir(t.readTime):J.min()}(e);return this.listener.Wo(t,n)}},{key:"zo",value:function(e){var t,n,r,i,a={};a.database=hr(this.yt),a.addTarget=(t=this.yt,i=(n=e).target,(r=St(i)?{documents:pr(t,i)}:{query:yr(t,i)}).targetId=n.targetId,n.resumeToken.approximateByteSize()>0?r.resumeToken=nr(t,n.resumeToken):n.snapshotVersion.compareTo(J.min())>0&&(r.readTime=tr(t,n.snapshotVersion.toTimestamp())),r);var o=function(e,t){var n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return N()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,e);o&&(a.labels=o),this.Bo(a)}},{key:"Ho",value:function(e){var t={};t.database=hr(this.yt),t.removeTarget=e,this.Bo(t)}}]),r}(Ii),Si=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e,i,a,s,u,c){var l;return n(o)(this,r),(l=t.call(this,e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,s,c)).yt=u,l.Jo=!1,n(f)(l)}return n(u)(r,[{key:"Yo",get:function(){return this.Jo}},{key:"start",value:function(){this.Jo=!1,this.lastStreamToken=void 0,n(c)(n(l)(r.prototype),"start",this).call(this)}},{key:"Uo",value:function(){this.Jo&&this.Xo([])}},{key:"jo",value:function(e,t){return this.connection.wo("Write",e,t)}},{key:"onMessage",value:function(e){if(O(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();var t=(r=e.writeResults,i=e.commitTime,r&&r.length>0?(O(void 0!==i),r.map((function(e){return n=i,(r=(t=e).updateTime?ir(t.updateTime):ir(n)).isEqual(J.min())&&(r=ir(n)),new sn(r,t.transformResults||[]);var t,n,r}))):[]),n=ir(e.commitTime);return this.listener.Zo(n,t)}var r,i;return O(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}},{key:"eu",value:function(){var e={};e.database=hr(this.yt),this.Bo(e)}},{key:"Xo",value:function(e){var t=this,n={streamToken:this.lastStreamToken,writes:e.map((function(e){return vr(t.yt,e)}))};this.Bo(n)}}]),r}(Ii),Ci=function(e){"use strict";n(h)(r,(function e(){n(o)(this,e)}));var t=n(p)(r);function r(e,i,a,s){var u;return n(o)(this,r),(u=t.call(this)).authCredentials=e,u.appCheckCredentials=i,u.connection=a,u.yt=s,u.nu=!1,n(f)(u)}return n(u)(r,[{key:"su",value:function(){if(this.nu)throw new P(L.FAILED_PRECONDITION,"The client has already been terminated.")}},{key:"ao",value:function(e,t,r){var i=this;return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(a){var o=n(d)(a,2),s=o[0],u=o[1];return i.connection.ao(e,t,r,s,u)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===L.UNAUTHENTICATED&&(i.authCredentials.invalidateToken(),i.appCheckCredentials.invalidateToken()),e):new P(L.UNKNOWN,e.toString())}))}},{key:"_o",value:function(e,t,r,i){var a=this;return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(o){var s=n(d)(o,2),u=s[0],c=s[1];return a.connection._o(e,t,r,u,c,i)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===L.UNAUTHENTICATED&&(a.authCredentials.invalidateToken(),a.appCheckCredentials.invalidateToken()),e):new P(L.UNKNOWN,e.toString())}))}},{key:"terminate",value:function(){this.nu=!0}}]),r}();
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
 */var Ai=function(){"use strict";function e(t,r){n(o)(this,e),this.asyncQueue=t,this.onlineStateHandler=r,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}return n(u)(e,[{key:"uu",value:function(){var e=this;0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(function(){return e.ru=null,e.au("Backend didn't respond within 10 seconds."),e.cu("Offline"),Promise.resolve()})))}},{key:"hu",value:function(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au("Connection failed 1 times. Most recent error: ".concat(e.toString())),this.cu("Offline")))}},{key:"set",value:function(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}},{key:"cu",value:function(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}},{key:"au",value:function(e){var t="Could not reach Cloud Firestore backend. ".concat(e,"\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.");this.ou?(C(t),this.ou=!1):S("OnlineStateTracker",t)}},{key:"lu",value:function(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}]),e}(),Di=function e(t,r,a,s,u){"use strict";var c=this;n(o)(this,e),this.localStore=t,this.datastore=r,this.asyncQueue=a,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=u,this.mu.Ur((function(e){var t=c;a.enqueueAndForget(n(i)(n(y).mark((function e(){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=qi(t),!e.t0){e.next=5;break}return S("RemoteStore","Restarting streams for network reachability change."),e.next=5,function(){var e=n(i)(n(y).mark((function e(t){var r;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=R(t))._u.add(4),e.next=4,Ri(r);case 4:return r.gu.set("Unknown"),r._u.delete(4),e.next=8,Ni(r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(t);case 5:case"end":return e.stop()}}),e)}))))})),this.gu=new Ai(a,s)};
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
 */function Ni(e){return Oi.apply(this,arguments)}function Oi(){return(Oi=n(i)(n(y).mark((function e(t){var r,i,a,o,s,u;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!0,i=!1,a=void 0,!qi(t)){e.next=25;break}e.prev=2,o=t.wu[Symbol.iterator]();case 4:if(r=(s=o.next()).done){e.next=11;break}return u=s.value,e.next=8,u(!0);case 8:r=!0,e.next=4;break;case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),i=!0,a=e.t0;case 17:e.prev=17,e.prev=18,r||null==o.return||o.return();case 20:if(e.prev=20,!i){e.next=23;break}throw a;case 23:return e.finish(20);case 24:return e.finish(17);case 25:case"end":return e.stop()}}),e,null,[[2,13,17,25],[18,,20,24]])})))).apply(this,arguments)}function Ri(e){return Li.apply(this,arguments)}function Li(){return(Li=n(i)(n(y).mark((function e(t){var r,i,a,o,s,u;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=!0,i=!1,a=void 0,e.prev=1,o=t.wu[Symbol.iterator]();case 3:if(r=(s=o.next()).done){e.next=10;break}return u=s.value,e.next=7,u(!1);case 7:r=!0,e.next=3;break;case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),i=!0,a=e.t0;case 16:e.prev=16,e.prev=17,r||null==o.return||o.return();case 19:if(e.prev=19,!i){e.next=22;break}throw a;case 22:return e.finish(19);case 23:return e.finish(16);case 24:case"end":return e.stop()}}),e,null,[[1,12,16,24],[17,,19,23]])})))).apply(this,arguments)}function Pi(e,t){var n=R(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),ji(n)?Vi(n):ya(n).ko()&&Ui(n,t))}function Mi(e,t){var n=R(e),r=ya(n);n.du.delete(t),r.ko()&&Fi(n,t),0===n.du.size&&(r.ko()?r.Fo():qi(n)&&n.gu.set("Unknown"))}function Ui(e,t){e.yu.Ot(t.targetId),ya(e).zo(t)}function Fi(e,t){e.yu.Ot(t),ya(e).Ho(t)}function Vi(e){e.yu=new Qn({getRemoteKeysForTarget:function(t){return e.remoteSyncer.getRemoteKeysForTarget(t)},ne:function(t){return e.du.get(t)||null}}),ya(e).start(),e.gu.uu()}function ji(e){return qi(e)&&!ya(e).No()&&e.du.size>0}function qi(e){return 0===R(e)._u.size}function Bi(e){e.yu=void 0}function Ki(e){return Hi.apply(this,arguments)}function Hi(){return(Hi=n(i)(n(y).mark((function e(t){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.du.forEach((function(e,n){Ui(t,e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function zi(e,t){return Wi.apply(this,arguments)}function Wi(){return(Wi=n(i)(n(y).mark((function e(t,r){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Bi(t),ji(t)?(t.gu.hu(r),Vi(t)):t.gu.set("Unknown");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Gi(e,t,n){return Qi.apply(this,arguments)}function Qi(){return Qi=n(i)(n(y).mark((function e(t,r,a){var o;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.gu.set("Online"),!(r instanceof Wn&&2===r.state&&r.cause)){e.next=13;break}return e.prev=1,e.next=4,function(){var e=n(i)(n(y).mark((function e(t,r){var i,a,o,s,u,c,l;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=r.cause,a=!0,o=!1,s=void 0,e.prev=2,u=r.targetIds[Symbol.iterator]();case 4:if(a=(c=u.next()).done){e.next=15;break}if(l=c.value,e.t0=t.du.has(l),!e.t0){e.next=12;break}return e.next=10,t.remoteSyncer.rejectListen(l,i);case 10:t.du.delete(l),t.yu.removeTarget(l);case 12:a=!0,e.next=4;break;case 15:e.next=21;break;case 17:e.prev=17,e.t1=e.catch(2),o=!0,s=e.t1;case 21:e.prev=21,e.prev=22,a||null==u.return||u.return();case 24:if(e.prev=24,!o){e.next=27;break}throw s;case 27:return e.finish(24);case 28:return e.finish(21);case 29:case"end":return e.stop()}}),e,null,[[2,17,21,29],[22,,24,28]])})));return function(t,n){return e.apply(this,arguments)}}()(t,r);case 4:e.next=11;break;case 6:return e.prev=6,e.t0=e.catch(1),S("RemoteStore","Failed to remove targets %s: %s ",r.targetIds.join(","),e.t0),e.next=11,Yi(t,e.t0);case 11:case 22:e.next=29;break;case 13:if(r instanceof Hn?t.yu.Kt(r):r instanceof zn?t.yu.Jt(r):t.yu.jt(r),a.isEqual(J.min())){e.next=29;break}return e.prev=14,e.next=17,oi(t.localStore);case 17:if(o=e.sent,e.t1=a.compareTo(o)>=0,!e.t1){e.next=22;break}return e.next=22,function(e,t){var n=e.yu.Zt(t);return n.targetChanges.forEach((function(n,r){if(n.resumeToken.approximateByteSize()>0){var i=e.du.get(r);i&&e.du.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((function(t){var n=e.du.get(t);if(n){e.du.set(t,n.withResumeToken(Ee.EMPTY_BYTE_STRING,n.snapshotVersion)),Fi(e,t);var r=new Nr(n.target,t,1,n.sequenceNumber);Ui(e,r)}})),e.remoteSyncer.applyRemoteEvent(n)}(t,a);case 24:return e.prev=24,e.t2=e.catch(14),S("RemoteStore","Failed to raise snapshot:",e.t2),e.next=29,Yi(t,e.t2);case 29:case"end":return e.stop()}}),e,null,[[1,6],[14,24]])}))),Qi.apply(this,arguments)}function Yi(e,t,n){return Ji.apply(this,arguments)}function Ji(){return(Ji=n(i)(n(y).mark((function e(t,r,a){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(fe(r)){e.next=2;break}throw r;case 2:return t._u.add(1),e.next=5,Ri(t);case 5:t.gu.set("Offline"),a||(a=function(){return oi(t.localStore)}),t.asyncQueue.enqueueRetryable(n(i)(n(y).mark((function e(){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S("RemoteStore","Retrying IndexedDB access"),e.next=3,a();case 3:return t._u.delete(1),e.next=6,Ni(t);case 6:case"end":return e.stop()}}),e)}))));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Xi(e,t){return t().catch((function(n){return Yi(e,n,t)}))}function $i(e){return Zi.apply(this,arguments)}function Zi(){return(Zi=n(i)(n(y).mark((function e(t){var r,i,a,o;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=R(t),i=ma(r),a=r.fu.length>0?r.fu[r.fu.length-1].batchId:-1;case 2:if(!ea(r)){e.next=19;break}return e.prev=3,e.next=6,ci(r.localStore,a);case 6:if(null!==(o=e.sent)){e.next=10;break}return 0===r.fu.length&&i.Fo(),e.abrupt("break",19);case 10:a=o.batchId,ta(r,o),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(3),e.next=17,Yi(r,e.t0);case 17:e.next=2;break;case 19:na(r)&&ra(r);case 20:case"end":return e.stop()}}),e,null,[[3,13]])})))).apply(this,arguments)}function ea(e){return qi(e)&&e.fu.length<10}function ta(e,t){e.fu.push(t);var n=ma(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function na(e){return qi(e)&&!ma(e).No()&&e.fu.length>0}function ra(e){ma(e).start()}function ia(e){return aa.apply(this,arguments)}function aa(){return(aa=n(i)(n(y).mark((function e(t){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ma(t).eu();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oa(e){return sa.apply(this,arguments)}function sa(){return(sa=n(i)(n(y).mark((function e(t){var r,i,a,o,s,u,c;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=ma(t),i=!0,a=!1,o=void 0,e.prev=2,s=t.fu[Symbol.iterator]();!(i=(u=s.next()).done);i=!0)c=u.value,r.Xo(c.mutations);e.next=10;break;case 6:e.prev=6,e.t0=e.catch(2),a=!0,o=e.t0;case 10:e.prev=10,e.prev=11,i||null==s.return||s.return();case 13:if(e.prev=13,!a){e.next=16;break}throw o;case 16:return e.finish(13);case 17:return e.finish(10);case 18:case"end":return e.stop()}}),e,null,[[2,6,10,18],[11,,13,17]])})))).apply(this,arguments)}function ua(e,t,n){return ca.apply(this,arguments)}function ca(){return(ca=n(i)(n(y).mark((function e(t,r,i){var a,o;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fu.shift(),o=Ar.from(a,r,i),e.next=3,Xi(t,(function(){return t.remoteSyncer.applySuccessfulWrite(o)}));case 3:return e.next=5,$i(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function la(e,t){return ha.apply(this,arguments)}function ha(){return ha=n(i)(n(y).mark((function e(t,r){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r&&ma(t).Yo,!e.t0){e.next=4;break}return e.next=4,function(){var e=n(i)(n(y).mark((function e(t,r){var i,a;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!_n(a=r.code)||a===L.ABORTED){e.next=7;break}return i=t.fu.shift(),ma(t).Mo(),e.next=5,Xi(t,(function(){return t.remoteSyncer.rejectFailedWrite(i.batchId,r)}));case 5:return e.next=7,$i(t);case 7:case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()(t,r);case 4:na(t)&&ra(t);case 5:case"end":return e.stop()}}),e)}))),ha.apply(this,arguments)}function fa(e,t){return da.apply(this,arguments)}function da(){return(da=n(i)(n(y).mark((function e(t,r){var i,a;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=R(t)).asyncQueue.verifyOperationInProgress(),S("RemoteStore","RemoteStore received new credentials"),a=qi(i),i._u.add(3),e.next=6,Ri(i);case 6:return a&&i.gu.set("Unknown"),e.next=9,i.remoteSyncer.handleCredentialChange(r);case 9:return i._u.delete(3),e.next=12,Ni(i);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function va(e,t){return pa.apply(this,arguments)}function pa(){return(pa=n(i)(n(y).mark((function e(t,r){var i;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=R(t),!r){e.next=7;break}return i._u.delete(2),e.next=5,Ni(i);case 5:e.next=13;break;case 7:if(e.t0=r,e.t0){e.next=13;break}return i._u.add(2),e.next=12,Ri(i);case 12:i.gu.set("Unknown");case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ya(e){return e.pu||(e.pu=(r=e.datastore,a=e.asyncQueue,o={Yr:Ki.bind(null,e),Zr:zi.bind(null,e),Wo:Gi.bind(null,e)},(s=R(r)).su(),new _i(a,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,o)),e.wu.push((t=n(i)(n(y).mark((function t(r){return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=4;break}e.pu.Mo(),ji(e)?Vi(e):e.gu.set("Unknown"),t.next=7;break;case 4:return t.next=6,e.pu.stop();case 6:Bi(e);case 7:case"end":return t.stop()}}),t)}))),function(e){return t.apply(this,arguments)}))),e.pu;var t,r,a,o,s}function ma(e){return e.Iu||(e.Iu=(r=e.datastore,a=e.asyncQueue,o={Yr:ia.bind(null,e),Zr:la.bind(null,e),tu:oa.bind(null,e),Zo:ua.bind(null,e)},(s=R(r)).su(),new Si(a,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,o)),e.wu.push((t=n(i)(n(y).mark((function t(r){return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=6;break}return e.Iu.Mo(),t.next=4,$i(e);case 4:t.next=9;break;case 6:return t.next=8,e.Iu.stop();case 8:e.fu.length>0&&(S("RemoteStore","Stopping write stream with ".concat(e.fu.length," pending writes")),e.fu=[]);case 9:case"end":return t.stop()}}),t)}))),function(e){return t.apply(this,arguments)}))),e.Iu
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
 */;var t,r,a,o,s}var ga=function(){"use strict";function e(t,r,i,a,s){n(o)(this,e),this.asyncQueue=t,this.timerId=r,this.targetTimeMs=i,this.op=a,this.removalCallback=s,this.deferred=new M,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((function(e){}))}return n(u)(e,[{key:"start",value:function(e){var t=this;this.timerHandle=setTimeout((function(){return t.handleDelayElapsed()}),e)}},{key:"skipDelay",value:function(){return this.handleDelayElapsed()}},{key:"cancel",value:function(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new P(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}},{key:"handleDelayElapsed",value:function(){var e=this;this.asyncQueue.enqueueAndForget((function(){return null!==e.timerHandle?(e.clearTimeout(),e.op().then((function(t){return e.deferred.resolve(t)}))):Promise.resolve()}))}},{key:"clearTimeout",value:function(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}],[{key:"createAndSchedule",value:function(t,n,r,i,a){var o=new e(t,n,Date.now()+r,i,a);return o.start(r),o}}]),e}();function ka(e,t){if(C("AsyncQueue","".concat(t,": ").concat(e)),fe(e))return new P(L.UNAVAILABLE,"".concat(t,": ").concat(e));throw e}
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
 */var wa=function(){"use strict";function e(t){n(o)(this,e),this.comparator=t?function(e,n){return t(e,n)||te.comparator(e.key,n.key)}:function(e,t){return te.comparator(e.key,t.key)},this.keyedMap=On(),this.sortedSet=new vt(this.comparator)}return n(u)(e,[{key:"has",value:function(e){return null!=this.keyedMap.get(e)}},{key:"get",value:function(e){return this.keyedMap.get(e)}},{key:"first",value:function(){return this.sortedSet.minKey()}},{key:"last",value:function(){return this.sortedSet.maxKey()}},{key:"isEmpty",value:function(){return this.sortedSet.isEmpty()}},{key:"indexOf",value:function(e){var t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}},{key:"size",get:function(){return this.sortedSet.size}},{key:"forEach",value:function(e){this.sortedSet.inorderTraversal((function(t,n){return e(t),!1}))}},{key:"add",value:function(e){var t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}},{key:"delete",value:function(e){var t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}},{key:"isEqual",value:function(t){if(!(t instanceof e))return!1;if(this.size!==t.size)return!1;for(var n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}},{key:"toString",value:function(){var e=[];return this.forEach((function(t){e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}},{key:"copy",value:function(t,n){var r=new e;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}],[{key:"emptySet",value:function(t){return new e(t.comparator)}}]),e}(),ba=function(){"use strict";function e(){n(o)(this,e),this.Tu=new vt(te.comparator)}return n(u)(e,[{key:"track",value:function(e){var t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):N():this.Tu=this.Tu.insert(t,e)}},{key:"Eu",value:function(){var e=[];return this.Tu.inorderTraversal((function(t,n){e.push(n)})),e}}]),e}(),xa=function(){"use strict";function e(t,r,i,a,s,u,c,l,h){n(o)(this,e),this.query=t,this.docs=r,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=s,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}return n(u)(e,[{key:"hasPendingWrites",get:function(){return!this.mutatedKeys.isEmpty()}},{key:"isEqual",value:function(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ft(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;var t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(var r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}],[{key:"fromInitialDocuments",value:function(t,n,r,i,a){var o=[];return n.forEach((function(e){o.push({type:0,doc:e})})),new e(t,n,wa.emptySet(n),o,r,i,!0,!1,a)}}]),e}(),Ea=function e(){"use strict";n(o)(this,e),this.Au=void 0,this.listeners=[]},Ta=function e(){"use strict";n(o)(this,e),this.queries=new Cn((function(e){return Vt(e)}),Ft),this.onlineState="Unknown",this.Ru=new Set};
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
 */function Ia(e,t){return _a.apply(this,arguments)}function _a(){return(_a=n(i)(n(y).mark((function e(t,r){var i,a,o,s,u;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=R(t),a=r.query,o=!1,(s=i.queries.get(a))||(o=!0,s=new Ea),!o){e.next=13;break}return e.prev=3,e.next=6,i.onListen(a);case 6:s.Au=e.sent,e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(3),u=ka(e.t0,"Initialization of query '".concat(jt(r.query),"' failed")),e.abrupt("return",void r.onError(u));case 13:i.queries.set(a,s),s.listeners.push(r),r.bu(i.onlineState),s.Au&&r.Pu(s.Au)&&Na(i);case 14:case"end":return e.stop()}}),e,null,[[3,9]])})))).apply(this,arguments)}function Sa(e,t){return Ca.apply(this,arguments)}function Ca(){return(Ca=n(i)(n(y).mark((function e(t,r){var i,a,o,s,u;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=R(t),a=r.query,o=!1,(s=i.queries.get(a))&&(u=s.listeners.indexOf(r))>=0&&(s.listeners.splice(u,1),o=0===s.listeners.length),!o){e.next=6;break}return e.abrupt("return",(i.queries.delete(a),i.onUnlisten(a)));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Aa(e,t){var n=R(e),r=!1,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=c.query,h=n.queries.get(l);if(h){var f=!0,d=!1,v=void 0;try{for(var p,y=h.listeners[Symbol.iterator]();!(f=(p=y.next()).done);f=!0){p.value.Pu(c)&&(r=!0)}}catch(e){d=!0,v=e}finally{try{f||null==y.return||y.return()}finally{if(d)throw v}}h.Au=c}}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}r&&Na(n)}function Da(e,t,n){var r=R(e),i=r.queries.get(t),a=!0,o=!1,s=void 0;if(i)try{for(var u,c=i.listeners[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){u.value.onError(n)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}r.queries.delete(t)}function Na(e){e.Ru.forEach((function(e){e.next()}))}var Oa=function(){"use strict";function e(t,r,i){n(o)(this,e),this.query=t,this.vu=r,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=i||{}}return n(u)(e,[{key:"Pu",value:function(e){if(!this.options.includeMetadataChanges){var t=[],n=!0,r=!1,i=void 0;try{for(var a,o=e.docChanges[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;3!==s.type&&t.push(s)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}e=new xa(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}var u=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),u=!0):this.Cu(e,this.onlineState)&&(this.xu(e),u=!0),this.Su=e,u}},{key:"onError",value:function(e){this.vu.error(e)}},{key:"bu",value:function(e){this.onlineState=e;var t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}},{key:"Cu",value:function(e,t){if(!e.fromCache)return!0;var n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}},{key:"Du",value:function(e){if(e.docChanges.length>0)return!0;var t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}},{key:"xu",value:function(e){e=xa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}]),e}();
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
var Ra=function e(t){"use strict";n(o)(this,e),this.key=t},La=function e(t){"use strict";n(o)(this,e),this.key=t},Pa=function(){"use strict";function e(t,r){n(o)(this,e),this.query=t,this.qu=r,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Vn(),this.mutatedKeys=Vn(),this.Gu=Kt(t),this.Qu=new wa(this.Gu)}return n(u)(e,[{key:"ju",get:function(){return this.qu}},{key:"Wu",value:function(e,t){var n=this,r=t?t.zu:new ba,i=t?t.Qu:this.Qu,a=t?t.mutatedKeys:this.mutatedKeys,o=i,s=!1,u="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((function(e,t){var l=i.get(e),h=qt(n.query,t)?t:null,f=!!l&&n.mutatedKeys.has(l.key),d=!!h&&(h.hasLocalMutations||n.mutatedKeys.has(h.key)&&h.hasCommittedMutations),v=!1;l&&h?l.data.isEqual(h.data)?f!==d&&(r.track({type:3,doc:h}),v=!0):n.Hu(l,h)||(r.track({type:2,doc:h}),v=!0,(u&&n.Gu(h,u)>0||c&&n.Gu(h,c)<0)&&(s=!0)):!l&&h?(r.track({type:0,doc:h}),v=!0):l&&!h&&(r.track({type:1,doc:l}),v=!0,(u||c)&&(s=!0)),v&&(h?(o=o.add(h),a=d?a.add(e):a.delete(e)):(o=o.delete(e),a=a.delete(e)))})),null!==this.query.limit)for(;o.size>this.query.limit;){var l="F"===this.query.limitType?o.last():o.first();o=o.delete(l.key),a=a.delete(l.key),r.track({type:1,doc:l})}return{Qu:o,zu:r,$i:s,mutatedKeys:a}}},{key:"Hu",value:function(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}},{key:"applyChanges",value:function(e,t,n){var r=this,i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;var a=e.zu.Eu();a.sort((function(e,t){return n=e.type,i=t.type,(a=function(e){switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return N()}})(n)-a(i)||r.Gu(e.doc,t.doc);var n,i,a})),this.Ju(n);var o=t?this.Yu():[],s=0===this.Ku.size&&this.current?1:0,u=s!==this.Uu;return this.Uu=s,0!==a.length||u?{snapshot:new xa(this.query,e.Qu,i,a,e.mutatedKeys,0===s,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}},{key:"bu",value:function(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new ba,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}},{key:"Zu",value:function(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}},{key:"Ju",value:function(e){var t=this;e&&(e.addedDocuments.forEach((function(e){return t.qu=t.qu.add(e)})),e.modifiedDocuments.forEach((function(e){})),e.removedDocuments.forEach((function(e){return t.qu=t.qu.delete(e)})),this.current=e.current)}},{key:"Yu",value:function(){var e=this;if(!this.current)return[];var t=this.Ku;this.Ku=Vn(),this.Qu.forEach((function(t){e.Zu(t.key)&&(e.Ku=e.Ku.add(t.key))}));var n=[];return t.forEach((function(t){e.Ku.has(t)||n.push(new La(t))})),this.Ku.forEach((function(e){t.has(e)||n.push(new Ra(e))})),n}},{key:"tc",value:function(e){this.qu=e.Hi,this.Ku=Vn();var t=this.Wu(e.documents);return this.applyChanges(t,!0)}},{key:"ec",value:function(){return xa.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}]),e}(),Ma=function e(t,r,i){"use strict";n(o)(this,e),this.query=t,this.targetId=r,this.view=i},Ua=function e(t){"use strict";n(o)(this,e),this.key=t,this.nc=!1},Fa=function(){"use strict";function e(t,r,i,a,s,u){n(o)(this,e),this.localStore=t,this.remoteStore=r,this.eventManager=i,this.sharedClientState=a,this.currentUser=s,this.maxConcurrentLimboResolutions=u,this.sc={},this.ic=new Cn((function(e){return Vt(e)}),Ft),this.rc=new Map,this.oc=new Set,this.uc=new vt(te.comparator),this.cc=new Map,this.ac=new Hr,this.hc={},this.lc=new Map,this.fc=Fr.vn(),this.onlineState="Unknown",this.dc=void 0}return n(u)(e,[{key:"isPrimaryClient",get:function(){return!0===this.dc}}]),e}();function Va(e,t){return ja.apply(this,arguments)}function ja(){return(ja=n(i)(n(y).mark((function e(t,r){var i,a,o,s,u,c;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=po(t),!(s=i.ic.get(r))){e.next=7;break}a=s.targetId,i.sharedClientState.addLocalQueryTarget(a),o=s.view.ec(),e.next=16;break;case 7:return e.next=9,li(i.localStore,Mt(r));case 9:return u=e.sent,i.isPrimaryClient&&Pi(i.remoteStore,u),c=i.sharedClientState.addLocalQueryTarget(u.targetId),a=u.targetId,e.next=15,qa(i,r,a,"current"===c,u.resumeToken);case 15:o=e.sent;case 16:return e.abrupt("return",o);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function qa(e,t,n,r,i){return Ba.apply(this,arguments)}function Ba(){return Ba=n(i)(n(y).mark((function e(t,r,a,o,s){var u,c,l,h,f,d;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t._c=function(e,r,a){return(o=n(i)(n(y).mark((function e(t,r,i,a){var o,s,u;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r.view.Wu(i),e.t0=o.$i,!e.t0){e.next=6;break}return e.next=5,di(t.localStore,r.query,!1).then((function(e){var t=e.documents;return r.view.Wu(t,o)}));case 5:o=e.sent;case 6:return s=a&&a.targetChanges.get(r.targetId),u=r.view.applyChanges(o,t.isPrimaryClient,s),e.abrupt("return",(oo(t,r.targetId,u.Xu),u.snapshot));case 8:case"end":return e.stop()}}),e)}))),function(e,t,n,r){return o.apply(this,arguments)})(t,e,r,a);var o},e.next=3,di(t.localStore,r,!0);case 3:return u=e.sent,c=new Pa(r,u.Hi),l=c.Wu(u.documents),h=Kn.createSynthesizedTargetChangeForCurrentChange(a,o&&"Offline"!==t.onlineState,s),f=c.applyChanges(l,t.isPrimaryClient,h),oo(t,a,f.Xu),d=new Ma(r,a,c),e.abrupt("return",(t.ic.set(r,d),t.rc.has(a)?t.rc.get(a).push(r):t.rc.set(a,[r]),f.snapshot));case 11:case"end":return e.stop()}}),e)}))),Ba.apply(this,arguments)}function Ka(e,t){return Ha.apply(this,arguments)}function Ha(){return(Ha=n(i)(n(y).mark((function e(t,r){var i,a,o;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=R(t),a=i.ic.get(r),!((o=i.rc.get(a.targetId)).length>1)){e.next=3;break}return e.abrupt("return",(i.rc.set(a.targetId,o.filter((function(e){return!Ft(e,r)}))),void i.ic.delete(r)));case 3:if(!i.isPrimaryClient){e.next=11;break}if(i.sharedClientState.removeLocalQueryTarget(a.targetId),e.t0=i.sharedClientState.isActiveQueryTarget(a.targetId),e.t0){e.next=9;break}return e.next=9,hi(i.localStore,a.targetId,!1).then((function(){i.sharedClientState.clearQueryState(a.targetId),Mi(i.remoteStore,a.targetId),io(i,a.targetId)})).catch(ce);case 9:e.next=14;break;case 11:return io(i,a.targetId),e.next=14,hi(i.localStore,a.targetId,!0);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function za(e,t,n){return Wa.apply(this,arguments)}function Wa(){return(Wa=n(i)(n(y).mark((function e(t,r,i){var a,o,s;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=yo(t),e.prev=1,e.next=4,function(e,t){var n,r,i=R(e),a=Y.now(),o=t.reduce((function(e,t){return e.add(t.key)}),Vn());return i.persistence.runTransaction("Locally write mutations","readwrite",(function(e){var s=Dn(),u=Vn();return i.Gi.getEntries(e,o).next((function(e){(s=e).forEach((function(e,t){t.isValidDocument()||(u=u.add(e))}))})).next((function(){return i.localDocuments.getOverlayedDocuments(e,s)})).next((function(r){n=r;var o=[],s=!0,u=!1,c=void 0;try{for(var l,h=t[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value,d=vn(f,n.get(f.key).overlayedDocument);null!=d&&o.push(new mn(f.key,d,bt(d.value.mapValue),un.exists(!0)))}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}return i.mutationQueue.addMutationBatch(e,a,o,t)})).next((function(t){r=t;var a=t.applyToLocalDocumentSet(n,u);return i.documentOverlayCache.saveOverlays(e,t.batchId,a)}))})).then((function(){return{batchId:r.batchId,changes:Rn(n)}}))}(a.localStore,r);case 4:return o=e.sent,a.sharedClientState.addPendingMutation(o.batchId),n=a,u=o.batchId,c=i,l=void 0,(l=n.hc[n.currentUser.toKey()])||(l=new vt(G)),l=l.insert(u,c),n.hc[n.currentUser.toKey()]=l,e.next=9,co(a,o.changes);case 9:return e.next=11,$i(a.remoteStore);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),s=ka(e.t0,"Failed to persist write"),i.reject(s);case 17:case"end":return e.stop()}var n,u,c,l}),e,null,[[1,13]])})))).apply(this,arguments)}function Ga(e,t){return Qa.apply(this,arguments)}function Qa(){return(Qa=n(i)(n(y).mark((function e(t,r){var i,a;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=R(t),e.prev=1,e.next=4,si(i.localStore,r);case 4:return a=e.sent,r.targetChanges.forEach((function(e,t){var n=i.cc.get(t);n&&(O(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?n.nc=!0:e.modifiedDocuments.size>0?O(n.nc):e.removedDocuments.size>0&&(O(n.nc),n.nc=!1))})),e.next=8,co(i,a,r);case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(1),e.next=14,ce(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function Ya(e,t,n){var r=R(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){var i=[];r.ic.forEach((function(e,n){var r=n.view.bu(t);r.snapshot&&i.push(r.snapshot)})),function(e,t){var n=R(e);n.onlineState=t;var r=!1;n.queries.forEach((function(e,n){var i=!0,a=!1,o=void 0;try{for(var s,u=n.listeners[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){s.value.bu(t)&&(r=!0)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}})),r&&Na(n)}(r.eventManager,t),i.length&&r.sc.Wo(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}function Ja(e,t,n){return Xa.apply(this,arguments)}function Xa(){return(Xa=n(i)(n(y).mark((function e(t,r,i){var a,o,s,u,c,l;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=R(t)).sharedClientState.updateQueryState(r,"rejected",i),o=a.cc.get(r),!(s=o&&o.key)){e.next=14;break}return u=(u=new vt(te.comparator)).insert(s,xt.newNoDocument(s,J.min())),c=Vn().add(s),l=new Bn(J.min(),new Map,new mt(G),u,c),e.next=9,Ga(a,l);case 9:a.uc=a.uc.remove(s),a.cc.delete(r),uo(a),e.next=16;break;case 14:return e.next=16,hi(a.localStore,r,!1).then((function(){return io(a,r,i)})).catch(ce);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $a(e,t){return Za.apply(this,arguments)}function Za(){return(Za=n(i)(n(y).mark((function e(t,r){var i,a,o;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=R(t),a=r.batch.batchId,e.prev=1,e.next=4,ai(i.localStore,r);case 4:return o=e.sent,ro(i,a,null),no(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),e.next=10,co(i,o);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,ce(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function eo(e,t,n){return to.apply(this,arguments)}function to(){return(to=n(i)(n(y).mark((function e(t,r,i){var a,o;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=R(t),e.prev=1,e.next=4,function(e,t){var n=R(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(function(e){var r;return n.mutationQueue.lookupMutationBatch(e,t).next((function(t){return O(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)})).next((function(){return n.mutationQueue.performConsistencyCheck(e)})).next((function(){return n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)})).next((function(){return n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)})).next((function(){return n.localDocuments.getDocuments(e,r)}))}))}(a.localStore,r);case 4:return o=e.sent,ro(a,r,i),no(a,r),a.sharedClientState.updateMutationState(r,"rejected",i),e.next=10,co(a,o);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,ce(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function no(e,t){(e.lc.get(t)||[]).forEach((function(e){e.resolve()})),e.lc.delete(t)}function ro(e,t,n){var r=R(e),i=r.hc[r.currentUser.toKey()];if(i){var a=i.get(t);a&&(n?a.reject(n):a.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function io(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e.sharedClientState.removeLocalQueryTarget(t);var r=!0,i=!1,a=void 0;try{for(var o,s=e.rc.get(t)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;e.ic.delete(u),n&&e.sc.wc(u,n)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach((function(t){e.ac.containsKey(t)||ao(e,t)}))}function ao(e,t){e.oc.delete(t.path.canonicalString());var n=e.uc.get(t);null!==n&&(Mi(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),uo(e))}function oo(e,t,n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;u instanceof Ra?(e.ac.addReference(u.key,t),so(e,u)):u instanceof La?(S("SyncEngine","Document no longer in limbo: "+u.key),e.ac.removeReference(u.key,t),e.ac.containsKey(u.key)||ao(e,u.key)):N()}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}function so(e,t){var n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(S("SyncEngine","New document in limbo: "+n),e.oc.add(r),uo(e))}function uo(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){var t=e.oc.values().next().value;e.oc.delete(t);var n=new te($.fromString(t)),r=e.fc.next();e.cc.set(r,new Ua(n)),e.uc=e.uc.insert(n,r),Pi(e.remoteStore,new Nr(Mt(Dt(n.path)),r,2,de.at))}}function co(e,t,n){return lo.apply(this,arguments)}function lo(){return lo=n(i)(n(y).mark((function e(t,r,a){var o,s,u,c;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=R(t),s=[],u=[],c=[],e.t0=o.ic.isEmpty(),e.t0){e.next=9;break}return o.ic.forEach((function(e,t){c.push(o._c(t,r,a).then((function(e){if((e||a)&&o.isPrimaryClient&&o.sharedClientState.updateQueryState(t.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){s.push(e);var n=Zr.Ci(t.targetId,e);u.push(n)}})))})),e.next=6,Promise.all(c);case 6:return o.sc.Wo(s),e.next=9,function(){var e=n(i)(n(y).mark((function e(t,r){var i,a,o,s,u,c,l,h,f,d,v;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=R(t),e.prev=1,e.next=4,i.persistence.runTransaction("notifyLocalViewChanges","readwrite",(function(e){return he.forEach(r,(function(t){return he.forEach(t.Si,(function(n){return i.persistence.referenceDelegate.addReference(e,t.targetId,n)})).next((function(){return he.forEach(t.Di,(function(n){return i.persistence.referenceDelegate.removeReference(e,t.targetId,n)}))}))}))}));case 4:e.next=11;break;case 6:if(e.prev=6,e.t0=e.catch(1),fe(e.t0)){e.next=10;break}throw e.t0;case 10:S("LocalStore","Failed to update sequence numbers: "+e.t0);case 11:for(a=!0,o=!1,s=void 0,e.prev=12,u=r[Symbol.iterator]();!(a=(c=u.next()).done);a=!0)l=c.value,h=l.targetId,l.fromCache||(f=i.qi.get(h),d=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(d),i.qi=i.qi.insert(h,v));e.next=20;break;case 16:e.prev=16,e.t1=e.catch(12),o=!0,s=e.t1;case 20:e.prev=20,e.prev=21,a||null==u.return||u.return();case 23:if(e.prev=23,!o){e.next=26;break}throw s;case 26:return e.finish(23);case 27:return e.finish(20);case 28:case"end":return e.stop()}}),e,null,[[1,6],[12,16,20,28],[21,,23,27]])})));return function(t,n){return e.apply(this,arguments)}}()(o.localStore,u);case 9:case"end":return e.stop()}}),e)}))),lo.apply(this,arguments)}function ho(e,t){return fo.apply(this,arguments)}function fo(){return(fo=n(i)(n(y).mark((function e(t,r){var i,a;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=R(t)).currentUser.isEqual(r)){e.next=11;break}return S("SyncEngine","User change. New user:",r.toKey()),e.next=5,ri(i.localStore,r);case 5:return a=e.sent,i.currentUser=r,(n=i).lc.forEach((function(e){e.forEach((function(e){e.reject(new P(L.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),n.lc.clear(),i.sharedClientState.handleUserChange(r,a.removedBatchIds,a.addedBatchIds),e.next=11,co(i,a.ji);case 11:case"end":return e.stop()}var n}),e)})))).apply(this,arguments)}function vo(e,t){var n=R(e),r=n.cc.get(t);if(r&&r.nc)return Vn().add(r.key);var i=Vn(),a=n.rc.get(t);if(!a)return i;var o=!0,s=!1,u=void 0;try{for(var c,l=a[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=c.value,f=n.ic.get(h);i=i.unionWith(f.view.ju)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return i}function po(e){var t=R(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ga.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=vo.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ja.bind(null,t),t.sc.Wo=Aa.bind(null,t.eventManager),t.sc.wc=Da.bind(null,t.eventManager),t}function yo(e){var t=R(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=$a.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=eo.bind(null,t),t}var mo=function(){"use strict";function e(){n(o)(this,e),this.synchronizeTabs=!1}return n(u)(e,[{key:"initialize",value:function(e){var t=this;return n(i)(n(y).mark((function r(){return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.yt=Ei(e.databaseInfo.databaseId),t.sharedClientState=t.gc(e),t.persistence=t.yc(e),n.next=5,t.persistence.start();case 5:t.localStore=t.Ic(e),t.gcScheduler=t.Tc(e,t.localStore),t.indexBackfillerScheduler=t.Ec(e,t.localStore);case 8:case"end":return n.stop()}}),r)})))()}},{key:"Tc",value:function(e,t){return null}},{key:"Ec",value:function(e,t){return null}},{key:"Ic",value:function(e){return ni(this.persistence,new ei,e.initialUser,this.yt)}},{key:"yc",value:function(e){return new Jr($r.Bs,this.yt)}},{key:"gc",value:function(e){return new yi}},{key:"terminate",value:function(){var e=this;return n(i)(n(y).mark((function t(){return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.gcScheduler&&e.gcScheduler.stop(),t.next=3,e.sharedClientState.shutdown();case 3:return t.next=5,e.persistence.shutdown();case 5:case"end":return t.stop()}}),t)})))()}}]),e}(),go=function(){"use strict";function e(){n(o)(this,e)}return n(u)(e,[{key:"initialize",value:function(e,t){var r=this;return n(i)(n(y).mark((function i(){return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=r.localStore,n.t0){n.next=12;break}return r.localStore=e.localStore,r.sharedClientState=e.sharedClientState,r.datastore=r.createDatastore(t),r.remoteStore=r.createRemoteStore(t),r.eventManager=r.createEventManager(t),r.syncEngine=r.createSyncEngine(t,!e.synchronizeTabs),r.sharedClientState.onlineStateHandler=function(e){return Ya(r.syncEngine,e,1)},r.remoteStore.remoteSyncer.handleCredentialChange=ho.bind(null,r.syncEngine),n.next=12,va(r.remoteStore,r.syncEngine.isPrimaryClient);case 12:case"end":return n.stop()}}),i)})))()}},{key:"createEventManager",value:function(e){return new Ta}},{key:"createDatastore",value:function(e){var t,n,r,i=Ei(e.databaseInfo.databaseId),a=(t=e.databaseInfo,new bi(t));return n=e.authCredentials,r=e.appCheckCredentials,new Ci(n,r,a,i)}},{key:"createRemoteStore",value:function(e){var t,n,r,i,a,o=this;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=function(e){return Ya(o.syncEngine,e,0)},a=gi.C()?new gi:new mi,new Di(t,n,r,i,a)}},{key:"createSyncEngine",value:function(e,t){return n=this.localStore,r=this.remoteStore,i=this.eventManager,a=this.sharedClientState,o=e.initialUser,s=e.maxConcurrentLimboResolutions,u=t,c=new Fa(n,r,i,a,o,s),u&&(c.dc=!0),c;var n,r,i,a,o,s,u,c}},{key:"terminate",value:function(){return(e=n(i)(n(y).mark((function e(t){var r;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=R(t),S("RemoteStore","RemoteStore shutting down."),r._u.add(5),e.next=5,Ri(r);case 5:r.mu.shutdown(),r.gu.set("Unknown");case 7:case"end":return e.stop()}}),e)}))),function(t){return e.apply(this,arguments)})(this.remoteStore);var e}}]),e}();
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
function ko(e,t,n){if(!n)throw new P(L.INVALID_ARGUMENT,"Function ".concat(e,"() cannot be called with an empty ").concat(t,"."))}function wo(e){if(!te.isDocumentKey(e))throw new P(L.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but ".concat(e," has ").concat(e.length,"."))}function bo(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e="".concat(e.substring(0,20),"...")),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";var t=(n=e).constructor?n.constructor.name:null;return t?"a custom ".concat(t," object"):"an object"}var n;return"function"==typeof e?"a function":N()}function xo(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new P(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");var n=bo(e);throw new P(L.INVALID_ARGUMENT,"Expected type '".concat(t.name,"', but it was: ").concat(n))}return e}
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
var Eo=new Map,To=function(){"use strict";function e(t){var r;if(n(o)(this,e),void 0===t.host){if(void 0!==t.ssl)throw new P(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(r=t.ssl)||void 0===r||r;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new P(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new P(L.INVALID_ARGUMENT,"".concat(e," and ").concat(n," cannot be used together."))}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}return n(u)(e,[{key:"isEqual",value:function(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}]),e}(),Io=function(){"use strict";function e(t,r,i,a){n(o)(this,e),this._authCredentials=t,this._appCheckCredentials=r,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new To({}),this._settingsFrozen=!1}return n(u)(e,[{key:"app",get:function(){if(!this._app)throw new P(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(e){if(this._settingsFrozen)throw new P(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new To(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new F;switch(e.type){case"gapi":var t=e.client;return new B(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new P(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return e=this,(t=Eo.get(e))&&(S("ComponentProvider","Removing Datastore"),Eo.delete(e),t.terminate()),Promise.resolve();var e,t}}]),e}();function _o(e,t,n){var r,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=(e=xo(e,Io))._getSettings();if("firestore.googleapis.com"!==a.host&&a.host!==t&&A("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},a),{host:"".concat(t,":").concat(n),ssl:!1})),i.mockUserToken){var o,s;if("string"==typeof i.mockUserToken)o=i.mockUserToken,s=E.MOCK_USER;else{o=(0,w.createMockUserToken)(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);var u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new P(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");s=new E(u)}e._authCredentials=new V(new U(o,s))}}
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
 */var So=function(){"use strict";function e(t,r,i){n(o)(this,e),this.converter=r,this._key=i,this.type="document",this.firestore=t}return n(u)(e,[{key:"_path",get:function(){return this._key.path}},{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"path",get:function(){return this._key.path.canonicalString()}},{key:"parent",get:function(){return new Ao(this.firestore,this.converter,this._key.path.popLast())}},{key:"withConverter",value:function(t){return new e(this.firestore,t,this._key)}}]),e}(),Co=function(){"use strict";function e(t,r,i){n(o)(this,e),this.converter=r,this._query=i,this.type="query",this.firestore=t}return n(u)(e,[{key:"withConverter",value:function(t){return new e(this.firestore,t,this._query)}}]),e}(),Ao=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e,i,a){var s;return n(o)(this,r),(s=t.call(this,e,i,Dt(a)))._path=a,s.type="collection",n(f)(s)}return n(u)(r,[{key:"id",get:function(){return this._query.path.lastSegment()}},{key:"path",get:function(){return this._query.path.canonicalString()}},{key:"parent",get:function(){var e=this._path.popLast();return e.isEmpty()?null:new So(this.firestore,null,new te(e))}},{key:"withConverter",value:function(e){return new r(this.firestore,e,this._path)}}]),r}(Co);function Do(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(e=(0,w.getModularInstance)(e),1===arguments.length&&(t=W.R()),ko("doc","path",t),e instanceof Io){var o,s=(o=$).fromString.apply(o,[t].concat(n(v)(i)));return wo(s),new So(e,null,new te(s))}var u;if(!(e instanceof So||e instanceof Ao))throw new P(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var c=e._path.child((u=$).fromString.apply(u,[t].concat(n(v)(i))));return wo(c),new So(e.firestore,e instanceof Ao?e.converter:null,new te(c))}
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
var No=function(){"use strict";function e(t){n(o)(this,e),this.observer=t,this.muted=!1}return n(u)(e,[{key:"next",value:function(e){this.observer.next&&this.Rc(this.observer.next,e)}},{key:"error",value:function(e){this.observer.error?this.Rc(this.observer.error,e):C("Uncaught Error in snapshot listener:",e.toString())}},{key:"bc",value:function(){this.muted=!0}},{key:"Rc",value:function(e,t){var n=this;this.muted||setTimeout((function(){n.muted||e(t)}),0)}}]),e}(),Oo=function(){"use strict";function e(t,r,a,s){var u=this;n(o)(this,e);var c,l=this;this.authCredentials=t,this.appCheckCredentials=r,this.asyncQueue=a,this.databaseInfo=s,this.user=E.UNAUTHENTICATED,this.clientId=W.R(),this.authCredentialListener=function(){return Promise.resolve()},this.appCheckCredentialListener=function(){return Promise.resolve()},this.authCredentials.start(a,(c=n(i)(n(y).mark((function e(t){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S("FirestoreClient","Received user=",t.uid),e.next=3,l.authCredentialListener(t);case 3:l.user=t;case 4:case"end":return e.stop()}}),e)}))),function(e){return c.apply(this,arguments)})),this.appCheckCredentials.start(a,(function(e){return S("FirestoreClient","Received new app check token=",e),u.appCheckCredentialListener(e,u.user)}))}return n(u)(e,[{key:"getConfiguration",value:function(){var e=this;return n(i)(n(y).mark((function t(){return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{asyncQueue:e.asyncQueue,databaseInfo:e.databaseInfo,clientId:e.clientId,authCredentials:e.authCredentials,appCheckCredentials:e.appCheckCredentials,initialUser:e.user,maxConcurrentLimboResolutions:100});case 1:case"end":return t.stop()}}),t)})))()}},{key:"setCredentialChangeListener",value:function(e){this.authCredentialListener=e}},{key:"setAppCheckTokenChangeListener",value:function(e){this.appCheckCredentialListener=e}},{key:"verifyNotTerminated",value:function(){if(this.asyncQueue.isShuttingDown)throw new P(L.FAILED_PRECONDITION,"The client has already been terminated.")}},{key:"terminate",value:function(){this.asyncQueue.enterRestrictedMode();var e=new M,t=this;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(n(i)(n(y).mark((function r(){var i;return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,n.t0=t.onlineComponents,!n.t0){n.next=5;break}return n.next=5,t.onlineComponents.terminate();case 5:if(n.t1=t.offlineComponents,!n.t1){n.next=9;break}return n.next=9,t.offlineComponents.terminate();case 9:t.authCredentials.shutdown(),t.appCheckCredentials.shutdown(),e.resolve(),n.next=18;break;case 14:n.prev=14,n.t2=n.catch(0),i=ka(n.t2,"Failed to shutdown persistence"),e.reject(i);case 18:case"end":return n.stop()}}),r,null,[[0,14]])})))),e.promise}}]),e}();
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
 */function Ro(e,t){return Lo.apply(this,arguments)}function Lo(){return Lo=n(i)(n(y).mark((function e(t,r){var a,o;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.asyncQueue.verifyOperationInProgress(),S("FirestoreClient","Initializing OfflineComponentProvider"),e.next=3,t.getConfiguration();case 3:return a=e.sent,e.next=6,r.initialize(a);case 6:o=a.initialUser,t.setCredentialChangeListener(function(){var e=n(i)(n(y).mark((function e(t){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=o.isEqual(t),e.t0){e.next=5;break}return e.next=4,ri(r.localStore,t);case 4:o=t;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.persistence.setDatabaseDeletedListener((function(){return t.terminate()})),t.offlineComponents=r;case 8:case"end":return e.stop()}}),e)}))),Lo.apply(this,arguments)}function Po(e,t){return Mo.apply(this,arguments)}function Mo(){return(Mo=n(i)(n(y).mark((function e(t,r){var i,a;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.asyncQueue.verifyOperationInProgress(),e.next=3,Uo(t);case 3:return i=e.sent,S("FirestoreClient","Initializing OnlineComponentProvider"),e.next=7,t.getConfiguration();case 7:return a=e.sent,e.next=10,r.initialize(i,a);case 10:t.setCredentialChangeListener((function(e){return fa(r.remoteStore,e)})),t.setAppCheckTokenChangeListener((function(e,t){return fa(r.remoteStore,t)})),t.onlineComponents=r;case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Uo(e){return Fo.apply(this,arguments)}function Fo(){return(Fo=n(i)(n(y).mark((function e(t){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t.offlineComponents,e.t0){e.next=5;break}return S("FirestoreClient","Using default OfflineComponentProvider"),e.next=5,Ro(t,new mo);case 5:return e.abrupt("return",(e.t0||e.sent,t.offlineComponents));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Vo(e){return jo.apply(this,arguments)}function jo(){return(jo=n(i)(n(y).mark((function e(t){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t.onlineComponents,e.t0){e.next=5;break}return S("FirestoreClient","Using default OnlineComponentProvider"),e.next=5,Po(t,new go);case 5:return e.abrupt("return",(e.t0||e.sent,t.onlineComponents));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function qo(e){return Vo(e).then((function(e){return e.syncEngine}))}function Bo(e){return Ko.apply(this,arguments)}function Ko(){return(Ko=n(i)(n(y).mark((function e(t){var r,i;return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Vo(t);case 2:return r=e.sent,i=r.eventManager,e.abrupt("return",(i.onListen=Va.bind(null,r.syncEngine),i.onUnlisten=Ka.bind(null,r.syncEngine),i));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ho(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=new M;return e.asyncQueue.enqueueAndForget(n(i)(n(y).mark((function i(){return n(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=function(e,t,n,r,i){var a=new No({next:function(a){t.enqueueAndForget((function(){return Sa(e,o)}));var s=a.docs.has(n);!s&&a.fromCache?i.reject(new P(L.UNAVAILABLE,"Failed to get document because the client is offline.")):s&&a.fromCache&&r&&"server"===r.source?i.reject(new P(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:function(e){return i.reject(e)}}),o=new Oa(Dt(n.path),a,{includeMetadataChanges:!0,Nu:!0});return Ia(e,o)},n.next=3,Bo(e);case 3:return n.t1=n.sent,n.t2=e.asyncQueue,n.t3=t,n.t4=r,n.t5=a,n.abrupt("return",(0,n.t0)(n.t1,n.t2,n.t3,n.t4,n.t5));case 9:case"end":return n.stop()}}),i)})))),a.promise}var zo=function(){"use strict";function e(){var t=this;n(o)(this,e),this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Ti(this,"async_queue_retry"),this.Wc=function(){var e=xi();e&&S("AsyncQueue","Visibility state changed to "+e.visibilityState),t.xo.Po()};var r=xi();r&&"function"==typeof r.addEventListener&&r.addEventListener("visibilitychange",this.Wc)}return n(u)(e,[{key:"isShuttingDown",get:function(){return this.qc}},{key:"enqueueAndForget",value:function(e){this.enqueue(e)}},{key:"enqueueAndForgetEvenWhileRestricted",value:function(e){this.zc(),this.Hc(e)}},{key:"enterRestrictedMode",value:function(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;var t=xi();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}},{key:"enqueue",value:function(e){var t=this;if(this.zc(),this.qc)return new Promise((function(){}));var n=new M;return this.Hc((function(){return t.qc&&t.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)})).then((function(){return n.promise}))}},{key:"enqueueRetryable",value:function(e){var t=this;this.enqueueAndForget((function(){return t.Lc.push(e),t.Jc()}))}},{key:"Jc",value:function(){var e=this;return n(i)(n(y).mark((function t(){return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0===e.Lc.length){t.next=14;break}return t.prev=1,t.next=4,e.Lc[0]();case 4:e.Lc.shift(),e.xo.reset(),t.next=13;break;case 8:if(t.prev=8,t.t0=t.catch(1),fe(t.t0)){t.next=12;break}throw t.t0;case 12:S("AsyncQueue","Operation failed with retryable error: "+t.t0);case 13:e.Lc.length>0&&e.xo.Ro((function(){return e.Jc()}));case 14:case"end":return t.stop()}}),t,null,[[1,8]])})))()}},{key:"Hc",value:function(e){var t=this,n=this.Bc.then((function(){return t.Gc=!0,e().catch((function(e){var n,r;throw t.Kc=e,t.Gc=!1,C("INTERNAL UNHANDLED ERROR: ",(r=(n=e).message||"",n.stack&&(r=n.stack.includes(n.message)?n.stack:n.message+"\n"+n.stack),r)),e})).then((function(e){return t.Gc=!1,e}))}));return this.Bc=n,n}},{key:"enqueueAfterDelay",value:function(e,t,n){var r=this;this.zc(),this.jc.indexOf(e)>-1&&(t=0);var i=ga.createAndSchedule(this,e,t,n,(function(e){return r.Yc(e)}));return this.Uc.push(i),i}},{key:"zc",value:function(){this.Kc&&N()}},{key:"verifyOperationInProgress",value:function(){}},{key:"Xc",value:function(){var e=this;return n(i)(n(y).mark((function t(){var r;return n(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case 1:return r=e.Bc,t.next=4,r;case 4:if(r!==e.Bc){t.next=1;break}case 5:case"end":return t.stop()}}),t)})))()}},{key:"Zc",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.Uc[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.timerId===e)return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"ta",value:function(e){var t=this;return this.Xc().then((function(){t.Uc.sort((function(e,t){return e.targetTimeMs-t.targetTimeMs}));var n=!0,r=!1,i=void 0;try{for(var a,o=t.Uc[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s.skipDelay(),"all"!==e&&s.timerId===e)break}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t.Xc()}))}},{key:"ea",value:function(e){this.jc.push(e)}},{key:"Yc",value:function(e){var t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}]),e}();var Wo=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e,i,a,s){var u;return n(o)(this,r),(u=t.call(this,e,i,a,s)).type="firestore",u._queue=new zo,u._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]",n(f)(u)}return n(u)(r,[{key:"_terminate",value:function(){return this._firestoreClient||Yo(this),this._firestoreClient.terminate()}}]),r}(Io);
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
 */function Go(e,t){var r="object"==typeof e?e:(0,m.getApp)(),i="string"==typeof e?e:t||"(default)",a=(0,m._getProvider)(r,"firestore").getImmediate({identifier:i});if(!a._initialized){var o=(0,w.getDefaultEmulatorHostnameAndPort)("firestore");o&&_o.apply(void 0,[a].concat(n(v)(o)))}return a}function Qo(e){return e._firestoreClient||Yo(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Yo(e){var t,n,r,i,a,o=e._freezeSettings(),s=(n=e._databaseId,r=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",i=e._persistenceKey,new ve(n,r,i,(a=o).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));e._firestoreClient=new Oo(e._authCredentials,e._appCheckCredentials,e._queue,s)}
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
var Jo=function(){"use strict";function e(t){n(o)(this,e),this._byteString=t}return n(u)(e,[{key:"toBase64",value:function(){return this._byteString.toBase64()}},{key:"toUint8Array",value:function(){return this._byteString.toUint8Array()}},{key:"toString",value:function(){return"Bytes(base64: "+this.toBase64()+")"}},{key:"isEqual",value:function(e){return this._byteString.isEqual(e._byteString)}}],[{key:"fromBase64String",value:function(t){try{return new e(Ee.fromBase64String(t))}catch(e){throw new P(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}},{key:"fromUint8Array",value:function(t){return new e(Ee.fromUint8Array(t))}}]),e}(),Xo=function(){"use strict";function e(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];n(o)(this,e);for(var a=0;a<r.length;++a)if(0===r[a].length)throw new P(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ee(r)}return n(u)(e,[{key:"isEqual",value:function(e){return this._internalPath.isEqual(e._internalPath)}}]),e}();
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
var $o=function e(t){"use strict";n(o)(this,e),this._methodName=t},Zo=function(){"use strict";function e(t,r){if(n(o)(this,e),!isFinite(t)||t<-90||t>90)throw new P(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(r)||r<-180||r>180)throw new P(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=t,this._long=r}return n(u)(e,[{key:"latitude",get:function(){return this._lat}},{key:"longitude",get:function(){return this._long}},{key:"isEqual",value:function(e){return this._lat===e._lat&&this._long===e._long}},{key:"toJSON",value:function(){return{latitude:this._lat,longitude:this._long}}},{key:"_compareTo",value:function(e){return G(this._lat,e._lat)||G(this._long,e._long)}}]),e}(),es=/^__.*__$/,ts=function(){"use strict";function e(t,r,i){n(o)(this,e),this.data=t,this.fieldMask=r,this.fieldTransforms=i}return n(u)(e,[{key:"toMutation",value:function(e,t){return null!==this.fieldMask?new mn(e,this.data,this.fieldMask,t,this.fieldTransforms):new yn(e,this.data,t,this.fieldTransforms)}}]),e}();
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
 */function ns(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw N()}}var rs=function(){"use strict";function e(t,r,i,a,s,u){n(o)(this,e),this.settings=t,this.databaseId=r,this.yt=i,this.ignoreUndefinedProperties=a,void 0===s&&this.na(),this.fieldTransforms=s||[],this.fieldMask=u||[]}return n(u)(e,[{key:"path",get:function(){return this.settings.path}},{key:"sa",get:function(){return this.settings.sa}},{key:"ia",value:function(t){return new e(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}},{key:"ra",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}},{key:"ca",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}},{key:"aa",value:function(e){return this.ia({path:void 0,oa:!0})}},{key:"ha",value:function(e){return vs(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}},{key:"contains",value:function(e){return void 0!==this.fieldMask.find((function(t){return e.isPrefixOf(t)}))||void 0!==this.fieldTransforms.find((function(t){return e.isPrefixOf(t.field)}))}},{key:"na",value:function(){if(this.path)for(var e=0;e<this.path.length;e++)this.ua(this.path.get(e))}},{key:"ua",value:function(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(ns(this.sa)&&es.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}]),e}(),is=function(){"use strict";function e(t,r,i){n(o)(this,e),this.databaseId=t,this.ignoreUndefinedProperties=r,this.yt=i||Ei(t)}return n(u)(e,[{key:"da",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new rs({sa:e,methodName:t,fa:n,path:ee.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}]),e}();function as(e){var t=e._freezeSettings(),n=Ei(e._databaseId);return new is(e._databaseId,!!t.ignoreUndefinedProperties,n)}function os(e,t,n,r,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=e.da(a.merge||a.mergeFields?2:0,t,n,i);ls("Data must be an object, but it was:",o,r);var s,u,c=us(r,o);if(a.merge)s=new kt(o.fieldMask),u=o.fieldTransforms;else if(a.mergeFields){var l=[],h=!0,f=!1,d=void 0;try{for(var v,p=a.mergeFields[Symbol.iterator]();!(h=(v=p.next()).done);h=!0){var y=v.value,m=hs(t,y,n);if(!o.contains(m))throw new P(L.INVALID_ARGUMENT,"Field '".concat(m,"' is specified in your field mask but missing from your input data."));ps(l,m)||l.push(m)}}catch(e){f=!0,d=e}finally{try{h||null==p.return||p.return()}finally{if(f)throw d}}s=new kt(l),u=o.fieldTransforms.filter((function(e){return s.covers(e.field)}))}else s=null,u=o.fieldTransforms;return new ts(new wt(c),s,u)}function ss(e,t){if(cs(e=(0,w.getModularInstance)(e)))return ls("Unsupported field value:",t,e),us(e,t);if(e instanceof $o)return function(e,t){if(!ns(t.sa))throw t.ha("".concat(e._methodName,"() can only be used with update() and set()"));if(!t.path)throw t.ha("".concat(e._methodName,"() is not currently supported inside arrays"));var n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){var n=[],r=0,i=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=ss(s.value,t.aa(r));null==c&&(c={nullValue:"NULL_VALUE"}),n.push(c),r++}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,w.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Gt(t.yt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){var n=Y.fromDate(e);return{timestampValue:tr(t.yt,n)}}if(e instanceof Y){var r=new Y(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:tr(t.yt,r)}}if(e instanceof Zo)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Jo)return{bytesValue:nr(t.yt,e._byteString)};if(e instanceof So){var i=t.databaseId,a=e.firestore._databaseId;if(!a.isEqual(i))throw t.ha("Document reference is for database ".concat(a.projectId,"/").concat(a.database," but should be for database ").concat(i.projectId,"/").concat(i.database));return{referenceValue:ar(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha("Unsupported field value: ".concat(bo(e)))}(e,t)}function us(e,t){var n={};return ge(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):me(e,(function(e,r){var i=ss(r,t.ra(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function cs(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Y||e instanceof Zo||e instanceof Jo||e instanceof So||e instanceof $o)}function ls(e,t,n){if(!cs(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){var r=bo(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}var i}function hs(e,t,n){if((t=(0,w.getModularInstance)(t))instanceof Xo)return t._internalPath;if("string"==typeof t)return ds(e,t);throw vs("Field path arguments must be of type string or ",e,!1,void 0,n)}var fs=new RegExp("[~\\*/\\[\\]]");function ds(e,t,r){if(t.search(fs)>=0)throw vs("Invalid field path (".concat(t,"). Paths must not contain '~', '*', '/', '[', or ']'"),e,!1,void 0,r);try{return n(s)(Xo,n(v)(t.split(".")))._internalPath}catch(n){throw vs("Invalid field path (".concat(t,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),e,!1,void 0,r)}}function vs(e,t,n,r,i){var a=r&&!r.isEmpty(),o=void 0!==i,s="Function ".concat(t,"() called with invalid data");n&&(s+=" (via `toFirestore()`)"),s+=". ";var u="";return(a||o)&&(u+=" (found",a&&(u+=" in field ".concat(r)),o&&(u+=" in document ".concat(i)),u+=")"),new P(L.INVALID_ARGUMENT,s+e+u)}function ps(e,t){return e.some((function(e){return e.isEqual(t)}))}
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
 */var ys=function(){"use strict";function e(t,r,i,a,s){n(o)(this,e),this._firestore=t,this._userDataWriter=r,this._key=i,this._document=a,this._converter=s}return n(u)(e,[{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"ref",get:function(){return new So(this._firestore,this._converter,this._key)}},{key:"exists",value:function(){return null!==this._document}},{key:"data",value:function(){if(this._document){if(this._converter){var e=new ms(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}},{key:"get",value:function(e){if(this._document){var t=this._document.data.field(gs("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}]),e}(),ms=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(){return n(o)(this,r),t.apply(this,arguments)}return n(u)(r,[{key:"data",value:function(){return n(c)(n(l)(r.prototype),"data",this).call(this)}}]),r}(ys);function gs(e,t){return"string"==typeof t?ds(e,t):t instanceof Xo?t._internalPath:t._delegate._internalPath}
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
 */var ks=function(){"use strict";function e(){n(o)(this,e)}return n(u)(e,[{key:"convertValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";switch(Oe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Se(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw N()}}},{key:"convertObject",value:function(e,t){var n=this,r={};return me(e.fields,(function(e,i){r[e]=n.convertValue(i,t)})),r}},{key:"convertGeoPoint",value:function(e){return new Zo(_e(e.latitude),_e(e.longitude))}},{key:"convertArray",value:function(e,t){var n=this;return(e.values||[]).map((function(e){return n.convertValue(e,t)}))}},{key:"convertServerTimestamp",value:function(e,t){switch(t){case"previous":var n=Ae(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(De(e));default:return null}}},{key:"convertTimestamp",value:function(e){var t=Ie(e);return new Y(t.seconds,t.nanos)}},{key:"convertDocumentKey",value:function(e,t){var n=$.fromString(e);O(Tr(n));var r=new pe(n.get(1),n.get(3)),i=new te(n.popFirst(5));return r.isEqual(t)||C("Document ".concat(i," contains a document reference within a different database (").concat(r.projectId,"/").concat(r.database,") which is not supported. It will be treated as a reference in the current database (").concat(t.projectId,"/").concat(t.database,") instead.")),i}}]),e}();
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
 */function ws(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}var bs=function(){"use strict";function e(t,r){n(o)(this,e),this.hasPendingWrites=t,this.fromCache=r}return n(u)(e,[{key:"isEqual",value:function(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}]),e}(),xs=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e,i,a,s,u,c){var l;return n(o)(this,r),(l=t.call(this,e,i,a,s,c))._firestore=e,l._firestoreImpl=e,l.metadata=u,n(f)(l)}return n(u)(r,[{key:"exists",value:function(){return n(c)(n(l)(r.prototype),"exists",this).call(this)}},{key:"data",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._document){if(this._converter){var t=new Es(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._document){var n=this._document.data.field(gs("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}]),r}(ys),Es=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(){return n(o)(this,r),t.apply(this,arguments)}return n(u)(r,[{key:"data",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n(c)(n(l)(r.prototype),"data",this).call(this,e)}}]),r}(xs);
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
function Ts(e){e=xo(e,So);var t=xo(e.firestore,Wo);return Ho(Qo(t),e._key).then((function(n){return Cs(t,e,n)}))}var Is=function(e){"use strict";n(h)(r,e);var t=n(p)(r);function r(e){var i;return n(o)(this,r),(i=t.call(this)).firestore=e,n(f)(i)}return n(u)(r,[{key:"convertBytes",value:function(e){return new Jo(e)}},{key:"convertReference",value:function(e){var t=this.convertDocumentKey(e,this.firestore._databaseId);return new So(this.firestore,null,t)}}]),r}(ks);function _s(e,t,n){e=xo(e,So);var r=xo(e.firestore,Wo),i=ws(e.converter,t,n);return Ss(r,[os(as(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,un.none())])}function Ss(e,t){return r=Qo(e),a=t,o=new M,r.asyncQueue.enqueueAndForget(n(i)(n(y).mark((function e(){return n(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=za,e.next=3,qo(r);case 3:return e.t1=e.sent,e.t2=a,e.t3=o,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3));case 7:case"end":return e.stop()}}),e)})))),o.promise;var r,a,o}function Cs(e,t,n){var r=n.docs.get(t._key),i=new Is(e);return new xs(e,i,t._key,r,new bs(n.hasPendingWrites,n.fromCache),t.converter)}
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
 */!function(e){var t,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t=m.SDK_VERSION,T=t,(0,m._registerComponent)(new(0,g.Component)("firestore",(function(e,t){var r=t.instanceIdentifier,i=t.options,a=e.getProvider("app").getImmediate(),o=new Wo(new j(e.getProvider("auth-internal")),new H(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new P(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pe(e.options.projectId,t)}(a,r),a);return i=Object.assign({useFetchStreams:n},i),o._setSettings(i),o}),"PUBLIC").setMultipleInstances(!0)),(0,m.registerVersion)(x,"3.8.0",e),(0,m.registerVersion)(x,"3.8.0","esm2017")}()})),a.register("6RwJk",(function(r,i){e(r.exports,"createWebChannelTransport",(function(){return lr})),e(r.exports,"getStatEventTarget",(function(){return hr})),e(r.exports,"ErrorCode",(function(){return fr})),e(r.exports,"EventType",(function(){return dr})),e(r.exports,"Event",(function(){return vr})),e(r.exports,"Stat",(function(){return pr})),e(r.exports,"FetchXmlHttpFactory",(function(){return yr})),e(r.exports,"WebChannel",(function(){return mr})),e(r.exports,"XhrIo",(function(){return gr}));var o,s=a("8MBJY"),u=a("a2hTj"),c=a("jh8P3"),l=a("fVNic"),h=a("eYQtU"),f=a("1t1Wn"),d=a("l5bVx"),v=a("2MbLg"),p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},y={},m=m||{},g=p||self;function k(){}function w(e){var t=void 0===e?"undefined":n(d)(e);return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function b(e){var t=void 0===e?"undefined":n(d)(e);return"object"==t&&null!=e||"function"==t}var x="closure_uid_"+(1e9*Math.random()>>>0),E=0;function T(e,t,n){return e.call.apply(e.bind,arguments)}function I(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function _(e,t,n){return(_=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?T:I).apply(null,arguments)}function S(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function C(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}function A(){this.s=this.s,this.o=this.o}A.prototype.s=!1,A.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,x)&&e[x]||(e[x]=++E))},A.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var D=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function N(e){var t=e.length;if(0<t){for(var n=Array(t),r=0;r<t;r++)n[r]=e[r];return n}return[]}function O(e,t){for(var n=1;n<arguments.length;n++){var r=arguments[n];if(w(r)){var i=e.length||0,a=r.length||0;e.length=i+a;for(var o=0;o<a;o++)e[i+o]=r[o]}else e.push(r)}}function R(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var L=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{g.addEventListener("test",k,t),g.removeEventListener("test",k,t)}catch(e){}return e}();function P(e){return/^[\s\xa0]*$/.test(e)}var M=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function U(e,t){return e<t?-1:e>t?1:0}function F(){var e=g.navigator;return e&&(e=e.userAgent)?e:""}function V(e){return-1!=F().indexOf(e)}function j(e){return j[" "](e),e}j[" "]=k;var q,B,K=V("Opera"),H=V("Trident")||V("MSIE"),z=V("Edge"),W=z||H,G=V("Gecko")&&!(-1!=F().toLowerCase().indexOf("webkit")&&!V("Edge"))&&!(V("Trident")||V("MSIE"))&&!V("Edge"),Q=-1!=F().toLowerCase().indexOf("webkit")&&!V("Edge");function Y(){var e=g.document;return e?e.documentMode:void 0}e:{var J="",X=(B=F(),G?/rv:([^\);]+)(\)|;)/.exec(B):z?/Edge\/([\d\.]+)/.exec(B):H?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(B):Q?/WebKit\/(\S+)/.exec(B):K?/(?:Version)[ \/]?(\S+)/.exec(B):void 0);if(X&&(J=X?X[1]:""),H){var $=Y();if(null!=$&&$>parseFloat(J)){q=String($);break e}}q=J}var Z,ee={};function te(){return function(e){var t=ee;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){for(var e=0,t=M(String(q)).split("."),n=M("9").split("."),r=Math.max(t.length,n.length),i=0;0==e&&i<r;i++){var a=t[i]||"",o=n[i]||"";do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==a[0].length&&0==o[0].length)break;e=U(0==a[1].length?0:parseInt(a[1],10),0==o[1].length?0:parseInt(o[1],10))||U(0==a[2].length,0==o[2].length)||U(a[2],o[2]),a=a[3],o=o[3]}while(0==e)}return 0<=e}))}if(g.document&&H){var ne=Y();Z=ne||(parseInt(q,10)||void 0)}else Z=void 0;var re=Z;function ie(e,t){if(R.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(G){e:{try{j(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:ae[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ie.X.h.call(this)}}C(ie,R);var ae={2:"touch",3:"pen",4:"mouse"};ie.prototype.h=function(){ie.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var oe="closure_listenable_"+(1e6*Math.random()|0),se=0;function ue(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++se,this.ba=this.ea=!1}function ce(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function le(e,t,n){for(var r in e)t.call(n,e[r],r,e)}function he(e){var t={};for(var n in e)t[n]=e[n];return t}var fe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function de(e,t){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])e[n]=r[n];for(var a=0;a<fe.length;a++)n=fe[a],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ve(e){this.src=e,this.g={},this.h=0}function pe(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],a=D(i,t);(r=0<=a)&&Array.prototype.splice.call(i,a,1),r&&(ce(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ye(e,t,n,r){for(var i=0;i<e.length;++i){var a=e[i];if(!a.ba&&a.listener==t&&a.capture==!!n&&a.ha==r)return i}return-1}ve.prototype.add=function(e,t,n,r,i){var a=e.toString();(e=this.g[a])||(e=this.g[a]=[],this.h++);var o=ye(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):((t=new ue(t,this.src,a,!!r,i)).ea=n,e.push(t)),t};var me="closure_lm_"+(1e6*Math.random()|0),ge={};function ke(e,t,n,r,i){if(r&&r.once)return be(e,t,n,r,i);if(Array.isArray(t)){for(var a=0;a<t.length;a++)ke(e,t[a],n,r,i);return null}return n=Ce(n),e&&e[oe]?e.N(t,n,b(r)?!!r.capture:!!r,i):we(e,t,n,!1,r,i)}function we(e,t,n,r,i,a){if(!t)throw Error("Invalid event type");var o=b(i)?!!i.capture:!!i,s=_e(e);if(s||(e[me]=s=new ve(e)),(n=s.add(t,n,r,o,a)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=Ie;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)L||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Te(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function be(e,t,n,r,i){if(Array.isArray(t)){for(var a=0;a<t.length;a++)be(e,t[a],n,r,i);return null}return n=Ce(n),e&&e[oe]?e.O(t,n,b(r)?!!r.capture:!!r,i):we(e,t,n,!0,r,i)}function xe(e,t,n,r,i){if(Array.isArray(t))for(var a=0;a<t.length;a++)xe(e,t[a],n,r,i);else r=b(r)?!!r.capture:!!r,n=Ce(n),e&&e[oe]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=ye(a=e.g[t],n,r,i))&&(ce(a[n]),Array.prototype.splice.call(a,n,1),0==a.length&&(delete e.g[t],e.h--)))):e&&(e=_e(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ye(t,n,r,i)),(n=-1<e?t[e]:null)&&Ee(n))}function Ee(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[oe])pe(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Te(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=_e(t))?(pe(n,e),0==n.h&&(n.src=null,t[me]=null)):ce(e)}}}function Te(e){return e in ge?ge[e]:ge[e]="on"+e}function Ie(e,t){if(e.ba)e=!0;else{t=new ie(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&Ee(e),e=n.call(r,t)}return e}function _e(e){return(e=e[me])instanceof ve?e:null}var Se="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ce(e){return"function"==typeof e?e:(e[Se]||(e[Se]=function(t){return e.handleEvent(t)}),e[Se])}function Ae(){A.call(this),this.i=new ve(this),this.P=this,this.I=null}function De(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new R(t,e);else if(t instanceof R)t.target=t.target||e;else{var i=t;de(t=new R(r,e),i)}if(i=!0,n)for(var a=n.length-1;0<=a;a--){var o=t.g=n[a];i=Ne(o,r,!0,t)&&i}if(i=Ne(o=t.g=e,r,!0,t)&&i,i=Ne(o,r,!1,t)&&i,n)for(a=0;a<n.length;a++)i=Ne(o=t.g=n[a],r,!1,t)&&i}function Ne(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,a=0;a<t.length;++a){var o=t[a];if(o&&!o.ba&&o.capture==n){var s=o.listener,u=o.ha||o.src;o.ea&&pe(e.i,o),i=!1!==s.call(u,r)&&i}}return i&&!r.defaultPrevented}C(Ae,A),Ae.prototype[oe]=!0,Ae.prototype.removeEventListener=function(e,t,n,r){xe(this,e,t,n,r)},Ae.prototype.M=function(){if(Ae.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ce(n[r]);delete t.g[e],t.h--}}this.I=null},Ae.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ae.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Oe=g.JSON.stringify;function Re(){var e=qe,t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Le,Pe=function(){"use strict";function e(){n(s)(this,e),this.h=this.g=null}return n(u)(e,[{key:"add",value:function(e,t){var n=Me.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}]),e}(),Me=new(function(){"use strict";function e(t,r){n(s)(this,e),this.i=t,this.j=r,this.h=0,this.g=null}return n(u)(e,[{key:"get",value:function(){var e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}]),e}())((function(){return new Ue}),(function(e){return e.reset()})),Ue=function(){"use strict";function e(){n(s)(this,e),this.next=this.g=this.h=null}return n(u)(e,[{key:"set",value:function(e,t){this.h=e,this.g=t,this.next=null}},{key:"reset",value:function(){this.next=this.g=this.h=null}}]),e}();function Fe(e){g.setTimeout((function(){throw e}),0)}function Ve(e,t){Le||function(){var e=g.Promise.resolve(void 0);Le=function(){e.then(Be)}}(),je||(Le(),je=!0),qe.add(e,t)}var je=!1,qe=new Pe;function Be(){for(var e;e=Re();){try{e.h.call(e.g)}catch(e){Fe(e)}var t=Me;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}je=!1}function Ke(e,t){Ae.call(this),this.h=e||1,this.g=t||g,this.j=_(this.lb,this),this.l=Date.now()}function He(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function ze(e,t,n){if("function"==typeof e)n&&(e=_(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=_(e.handleEvent,e)}return 2147483647<Number(t)?-1:g.setTimeout(e,t||0)}function We(e){e.g=ze((function(){e.g=null,e.i&&(e.i=!1,We(e))}),e.j);var t=e.h;e.h=null,e.m.apply(null,t)}C(Ke,Ae),(o=Ke.prototype).ca=!1,o.R=null,o.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),De(this,"tick"),this.ca&&(He(this),this.start()))}},o.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},o.M=function(){Ke.X.M.call(this),He(this),delete this.g};var Ge=function(e){"use strict";n(h)(r,e);var t=n(v)(r);function r(e,i){var a;return n(s)(this,r),(a=t.call(this)).m=e,a.j=i,a.h=null,a.i=!1,a.g=null,a}return n(u)(r,[{key:"l",value:function(e){this.h=arguments,this.g?this.i=!0:We(this)}},{key:"M",value:function(){n(c)(n(l)(r.prototype),"M",this).call(this),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}]),r}(A);function Qe(e){A.call(this),this.h=e,this.g={}}C(Qe,A);var Ye=[];function Je(e,t,n,r){Array.isArray(n)||(n&&(Ye[0]=n.toString()),n=Ye);for(var i=0;i<n.length;i++){var a=ke(t,n[i],r||e.handleEvent,!1,e.h||e);if(!a)break;e.g[a.key]=a}}function Xe(e){le(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Ee(e)}),e),e.g={}}function $e(){this.g=!0}function Ze(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var a=i[0];if("noop"!=a&&"stop"!=a&&"close"!=a)for(var o=1;o<i.length;o++)i[o]=""}}}return Oe(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Qe.prototype.M=function(){Qe.X.M.call(this),Xe(this)},Qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},$e.prototype.Aa=function(){this.g=!1},$e.prototype.info=function(){};var et={},tt=null;function nt(){return tt=tt||new Ae}function rt(e){R.call(this,et.Pa,e)}function it(e){var t=nt();De(t,new rt(t))}function at(e,t){R.call(this,et.STAT_EVENT,e),this.stat=t}function ot(e){var t=nt();De(t,new at(t,e))}function st(e,t){R.call(this,et.Qa,e),this.size=t}function ut(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return g.setTimeout((function(){e()}),t)}et.Pa="serverreachability",C(rt,R),et.STAT_EVENT="statevent",C(at,R),et.Qa="timingevent",C(st,R);var ct={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},lt={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ht(){}function ft(e){return e.h||(e.h=e.i())}function dt(){}ht.prototype.h=null;var vt,pt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function yt(){R.call(this,"d")}function mt(){R.call(this,"c")}function gt(){}function kt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Qe(this),this.O=bt,e=W?125:void 0,this.T=new Ke(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new wt}function wt(){this.i=null,this.g="",this.h=!1}C(yt,R),C(mt,R),C(gt,ht),gt.prototype.g=function(){return new XMLHttpRequest},gt.prototype.i=function(){return{}},vt=new gt;var bt=45e3,xt={},Et={};function Tt(e,t,n){e.K=1,e.v=Kt(Ft(t)),e.s=n,e.P=!0,It(e,null)}function It(e,t){e.F=Date.now(),At(e),e.A=Ft(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),nn(n.i,"t",r),e.C=0,n=e.l.H,e.h=new wt,e.g=rr(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Ge(_(e.La,e,e.g),e.N)),Je(e.S,e.g,"readystatechange",e.ib),t=e.H?he(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),it(),function(e,t,n,r,i,a){e.info((function(){if(e.g)if(a)for(var o="",s=a.split("&"),u=0;u<s.length;u++){var c=s[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=a;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function _t(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function St(e,t,n){for(var r,i=!0;!e.I&&e.C<n.length;){if((r=Ct(e,n))==Et){4==t&&(e.o=4,ot(14),i=!1),Ze(e.j,e.m,null,"[Incomplete Response]");break}if(r==xt){e.o=4,ot(15),Ze(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ze(e.j,e.m,r,null),Lt(e,r)}_t(e)&&r!=Et&&r!=xt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ot(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Yn(t),t.K=!0,ot(11))):(Ze(e.j,e.m,n,"[Invalid Chunked Response]"),Rt(e),Ot(e))}function Ct(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Et:(n=Number(t.substring(n,r)),isNaN(n)?xt:(r+=1)+n>t.length?Et:(t=t.substr(r,n),e.C=r+n,t))}function At(e){e.V=Date.now()+e.O,Dt(e,e.O)}function Dt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ut(_(e.gb,e),t)}function Nt(e){e.B&&(g.clearTimeout(e.B),e.B=null)}function Ot(e){0==e.l.G||e.I||$n(e.l,e)}function Rt(e){Nt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,He(e.T),Xe(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Lt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||ln(n.h,e)))if(!e.J&&ln(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(a){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Xn(n),qn(n)}Qn(n),ot(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=ut(_(n.cb,n),6e3));if(1>=cn(n.h)&&n.ja){try{n.ja()}catch(a){}n.ja=void 0}}else er(n,11)}else if((e.J||n.g==e)&&Xn(n),!P(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){var a=i[t];if(n.T=a[0],a=a[1],2==n.G)if("c"==a[0]){n.I=a[1],n.ka=a[2];var o=a[3];null!=o&&(n.ma=o,n.j.info("VER="+n.ma));var s=a[4];null!=s&&(n.Ca=s,n.j.info("SVER="+n.Ca));var u=a[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;var c=e.g;if(c){var l=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=r.h;h.g||-1==l.indexOf("spdy")&&-1==l.indexOf("quic")&&-1==l.indexOf("h2")||(h.j=h.l,h.g=new Set,h.h&&(hn(h,h.h),h.h=null))}if(r.D){var f=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;f&&(r.za=f,Bt(r.F,r.D,f))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var d=e;if((r=n).sa=nr(r,r.H?r.ka:null,r.V),d.J){fn(r.h,d);var v=d,p=r.J;p&&v.setTimeout(p),v.B&&(Nt(v),At(v)),r.g=d}else Gn(r);0<n.i.length&&Kn(n)}else"stop"!=a[0]&&"close"!=a[0]||er(n,7);else 3==n.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?er(n,7):jn(n):"noop"!=a[0]&&n.l&&n.l.wa(a),n.A=0)}it()}catch(a){}}function Pt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(w(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(w(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(var r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(w(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,a=0;a<i;a++)t.call(void 0,r[a],n&&n[a],e)}(o=kt.prototype).setTimeout=function(e){this.O=e},o.ib=function(e){e=e.target;var t=this.L;t&&3==Ln(e)?t.l():this.La(e)},o.La=function(e){try{if(e==this.g)e:{var t=Ln(this.g),n=this.g.Ea();this.g.aa();if(!(3>t)&&(3!=t||W||this.g&&(this.h.h||this.g.fa()||Pn(this.g)))){this.I||4!=t||7==n||it(),Nt(this);var r=this.g.aa();this.Y=r;t:if(_t(this)){var i=Pn(this.g);e="";var a=i.length,o=4==Ln(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Rt(this),Ot(this);var s="";break t}this.h.i=new g.TextDecoder}for(n=0;n<a;n++)this.h.h=!0,e+=this.h.i.decode(i[n],{stream:o&&n==a-1});i.splice(0,a),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=200==r,function(e,t,n,r,i,a,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+a+" "+o}))}(this.j,this.u,this.A,this.m,this.U,t,r),this.i){if(this.Z&&!this.J){t:{if(this.g){var u,c=this.g;if((u=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(u)){var l=u;break t}}l=null}if(!(r=l)){this.i=!1,this.o=3,ot(12),Rt(this),Ot(this);break e}Ze(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Lt(this,r)}this.P?(St(this,t,s),W&&this.i&&3==t&&(Je(this.S,this.T,"tick",this.hb),this.T.start())):(Ze(this.j,this.m,s,null),Lt(this,s)),4==t&&Rt(this),this.i&&!this.I&&(4==t?$n(this.l,this):(this.i=!1,At(this)))}else 400==r&&0<s.indexOf("Unknown SID")?(this.o=3,ot(12)):(this.o=0,ot(13)),Rt(this),Ot(this)}}}catch(t){}},o.hb=function(){if(this.g){var e=Ln(this.g),t=this.g.fa();this.C<t.length&&(Nt(this),St(this,e,t),this.i&&4!=e&&At(this))}},o.cancel=function(){this.I=!0,Rt(this)},o.gb=function(){this.B=null;var e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(it(),ot(17)),Rt(this),this.o=2,Ot(this)):Dt(this,this.V-e)};var Mt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ut(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ut){this.h=void 0!==t?t:e.h,Vt(this,e.j),this.s=e.s,this.g=e.g,jt(this,e.m),this.l=e.l,t=e.i;var n=new $t;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),qt(this,n),this.o=e.o}else e&&(n=String(e).match(Mt))?(this.h=!!t,Vt(this,n[1]||"",!0),this.s=Ht(n[2]||""),this.g=Ht(n[3]||"",!0),jt(this,n[4]),this.l=Ht(n[5]||"",!0),qt(this,n[6]||"",!0),this.o=Ht(n[7]||"")):(this.h=!!t,this.i=new $t(null,this.h))}function Ft(e){return new Ut(e)}function Vt(e,t,n){e.j=n?Ht(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function jt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function qt(e,t,n){t instanceof $t?(e.i=t,function(e,t){t&&!e.j&&(Zt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(en(this,t),nn(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=zt(t,Jt)),e.i=new $t(t,e.h))}function Bt(e,t,n){e.i.set(t,n)}function Kt(e){return Bt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ht(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function zt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Wt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Wt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ut.prototype.toString=function(){var e=[],t=this.j;t&&e.push(zt(t,Gt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(zt(t,Gt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(zt(n,"/"==n.charAt(0)?Yt:Qt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",zt(n,Xt)),e.join("")};var Gt=/[#\/\?@]/g,Qt=/[#\?:]/g,Yt=/[#\?]/g,Jt=/[#\?@]/g,Xt=/#/g;function $t(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Zt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var a=e[n].substring(0,r);i=e[n].substring(r+1)}else a=e[n];t(a,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function en(e,t){Zt(e),t=rn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tn(e,t){return Zt(e),t=rn(e,t),e.g.has(t)}function nn(e,t,n){en(e,t),0<n.length&&(e.i=null,e.g.set(rn(e,t),N(n)),e.h+=n.length)}function rn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(o=$t.prototype).add=function(e,t){Zt(this),this.i=null,e=rn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},o.forEach=function(e,t){Zt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},o.oa=function(){Zt(this);for(var e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[],r=0;r<t.length;r++)for(var i=e[r],a=0;a<i.length;a++)n.push(t[r]);return n},o.W=function(e){Zt(this);var t=[];if("string"==typeof e)tn(this,e)&&(t=t.concat(this.g.get(rn(this,e))));else{e=Array.from(this.g.values());for(var n=0;n<e.length;n++)t=t.concat(e[n])}return t},o.set=function(e,t){return Zt(this),this.i=null,tn(this,e=rn(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},o.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},o.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=Array.from(this.g.keys()),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r)),a=this.W(r);for(r=0;r<a.length;r++){var o=i;""!==a[r]&&(o+="="+encodeURIComponent(String(a[r]))),e.push(o)}}return this.i=e.join("&")};var an=function e(t,r){"use strict";n(s)(this,e),this.h=t,this.g=r};function on(e){this.l=e||sn,g.PerformanceNavigationTiming?e=0<(e=g.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(g.g&&g.g.Ga&&g.g.Ga()&&g.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sn=10;function un(e){return!!e.h||!!e.g&&e.g.size>=e.j}function cn(e){return e.h?1:e.g?e.g.size:0}function ln(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function hn(e,t){e.g?e.g.add(t):e.h=t}function fn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function dn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){var t=e.i,n=!0,r=!1,i=void 0;try{for(var a,o=e.g.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;t=t.concat(s.D)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}return N(e.i)}function vn(){}function pn(){this.g=new vn}function yn(e,t,n){var r=n||"";try{Pt(e,(function(e,n){var i=e;b(e)&&(i=Oe(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function mn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function gn(e){this.l=e.ac||null,this.j=e.jb||!1}function kn(e,t){Ae.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=wn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}on.prototype.cancel=function(){if(this.i=dn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){var e=!0,t=!1,n=void 0;try{for(var r,i=this.g.values()[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){r.value.cancel()}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}this.g.clear()}},vn.prototype.stringify=function(e){return g.JSON.stringify(e,void 0)},vn.prototype.parse=function(e){return g.JSON.parse(e,void 0)},C(gn,ht),gn.prototype.g=function(){return new kn(this.l,this.j)},gn.prototype.i=function(e){return function(){return e}}({}),C(kn,Ae);var wn=0;function bn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function xn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,En(e)}function En(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(o=kn.prototype).open=function(e,t){if(this.readyState!=wn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,En(this)},o.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||g).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},o.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((function(){})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,xn(this)),this.readyState=wn},o.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,En(this)),this.g&&(this.readyState=3,En(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==g.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;bn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},o.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?xn(this):En(this),3==this.readyState&&bn(this)}},o.Va=function(e){this.g&&(this.response=this.responseText=e,xn(this))},o.Ua=function(e){this.g&&(this.response=e,xn(this))},o.ga=function(){this.g&&xn(this)},o.setRequestHeader=function(e,t){this.v.append(e,t)},o.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},o.getAllResponseHeaders=function(){if(!this.h)return"";for(var e=[],t=this.h.entries(),n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(kn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Tn=g.JSON.parse;function In(e){Ae.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=_n,this.K=this.L=!1}C(In,Ae);var _n="",Sn=/^https?$/i,Cn=["POST","PUT"];function An(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Dn(e),On(e)}function Dn(e){e.D||(e.D=!0,De(e,"complete"),De(e,"error"))}function Nn(e){if(e.h&&void 0!==m&&(!e.C[1]||4!=Ln(e)||2!=e.aa()))if(e.v&&4==Ln(e))ze(e.Ha,0,e);else if(De(e,"readystatechange"),4==Ln(e)){e.h=!1;try{var t,n=e.aa();e:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}if(!(t=r)){var i;if(i=0===n){var a=String(e.H).match(Mt)[1]||null;if(!a&&g.self&&g.self.location){var o=g.self.location.protocol;a=o.substr(0,o.length-1)}i=!Sn.test(a?a.toLowerCase():"")}t=i}if(t)De(e,"complete"),De(e,"success");else{e.m=6;try{var s=2<Ln(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.aa()+"]",Dn(e)}}finally{On(e)}}}function On(e,t){if(e.g){Rn(e);var n=e.g,r=e.C[0]?k:null;e.g=null,e.C=null,t||De(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Rn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(g.clearTimeout(e.A),e.A=null)}function Ln(e){return e.g?e.g.readyState:0}function Pn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case _n:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Mn(e){var t="";return le(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Un(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Mn(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Bt(e,t,n))}function Fn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Vn(e){this.Ca=0,this.i=[],this.j=new $e,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Fn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Fn("baseRetryDelayMs",5e3,e),this.bb=Fn("retryDelaySeedMs",1e4,e),this.$a=Fn("forwardChannelMaxRetries",2,e),this.ta=Fn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new on(e&&e.concurrentRequestLimit),this.Fa=new pn,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function jn(e){if(Bn(e),3==e.G){var t=e.U++,n=Ft(e.F);Bt(n,"SID",e.I),Bt(n,"RID",t),Bt(n,"TYPE","terminate"),zn(e,n),(t=new kt(e,e.j,t,void 0)).K=2,t.v=Kt(Ft(n)),n=!1,g.navigator&&g.navigator.sendBeacon&&(n=g.navigator.sendBeacon(t.v.toString(),"")),!n&&g.Image&&((new Image).src=t.v,n=!0),n||(t.g=rr(t.l,null),t.g.da(t.v)),t.F=Date.now(),At(t)}tr(e)}function qn(e){e.g&&(Yn(e),e.g.cancel(),e.g=null)}function Bn(e){qn(e),e.u&&(g.clearTimeout(e.u),e.u=null),Xn(e),e.h.cancel(),e.m&&("number"==typeof e.m&&g.clearTimeout(e.m),e.m=null)}function Kn(e){un(e.h)||e.m||(e.m=!0,Ve(e.Ja,e),e.C=0)}function Hn(e,t){var n;n=t?t.m:e.U++;var r=Ft(e.F);Bt(r,"SID",e.I),Bt(r,"RID",n),Bt(r,"AID",e.T),zn(e,r),e.o&&e.s&&Un(r,e.o,e.s),n=new kt(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Wn(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),hn(e.h,n),Tt(n,r,t)}function zn(e,t){e.ia&&le(e.ia,(function(e,n){Bt(t,n,e)})),e.l&&Pt({},(function(e,n){Bt(t,n,e)}))}function Wn(e,t,n){n=Math.min(e.i.length,n);var r=e.l?_(e.l.Ra,e.l,e):null;e:for(var i=e.i,a=-1;;){var o=["count="+n];-1==a?0<n?(a=i[0].h,o.push("ofs="+a)):a=0:o.push("ofs="+a);for(var s=!0,u=0;u<n;u++){var c=i[u].h,l=i[u].g;if(0>(c-=a))a=Math.max(0,i[u].h-100),s=!1;else try{yn(l,o,"req"+c+"_")}catch(e){r&&r(l)}}if(s){r=o.join("&");break e}}return e=e.i.splice(0,n),t.D=e,r}function Gn(e){e.g||e.u||(e.Z=1,Ve(e.Ia,e),e.A=0)}function Qn(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=ut(_(e.Ia,e),Zn(e,e.A)),e.A++,!0)}function Yn(e){null!=e.B&&(g.clearTimeout(e.B),e.B=null)}function Jn(e){e.g=new kt(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=Ft(e.sa);Bt(t,"RID","rpc"),Bt(t,"SID",e.I),Bt(t,"CI",e.L?"0":"1"),Bt(t,"AID",e.T),Bt(t,"TYPE","xmlhttp"),zn(e,t),e.o&&e.s&&Un(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Kt(Ft(t)),n.s=null,n.P=!0,It(n,e)}function Xn(e){null!=e.v&&(g.clearTimeout(e.v),e.v=null)}function $n(e,t){var n=null;if(e.g==t){Xn(e),Yn(e),e.g=null;var r=2}else{if(!ln(e.h,t))return;n=t.D,fn(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;De(r=nt(),new st(r,n)),Kn(e)}else Gn(e);else if(3==(i=t.o)||0==i&&0<e.pa||!(1==r&&function(e,t){return!(cn(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.C>=(e.Za?0:e.$a)||(e.m=ut(_(e.Ja,e,t),Zn(e,e.C)),e.C++,0)))}(e,t)||2==r&&Qn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:er(e,5);break;case 4:er(e,10);break;case 3:er(e,6);break;default:er(e,2)}}function Zn(e,t){var n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function er(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=_(e.kb,e);n||(n=new Ut("//www.google.com/images/cleardot.gif"),g.location&&"http"==g.location.protocol||Vt(n,"https"),Kt(n)),function(e,t){var n=new $e;if(g.Image){var r=new Image;r.onload=S(mn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=S(mn,n,r,"TestLoadImage: error",!1,t),r.onabort=S(mn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=S(mn,n,r,"TestLoadImage: timeout",!1,t),g.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else ot(2);e.G=0,e.l&&e.l.va(t),tr(e),Bn(e)}function tr(e){if(e.G=0,e.la=[],e.l){var t=dn(e.h);0==t.length&&0==e.i.length||(O(e.la,t),O(e.la,e.i),e.h.i.length=0,N(e.i),e.i.length=0),e.l.ua()}}function nr(e,t,n){var r=n instanceof Ut?Ft(n):new Ut(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),jt(r,r.m);else{var i=g.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var a=new Ut(null,void 0);r&&Vt(a,r),t&&(a.g=t),i&&jt(a,i),n&&(a.l=n),r=a}return n=e.D,t=e.za,n&&t&&Bt(r,n,t),Bt(r,"VER",e.ma),zn(e,r),r}function rr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new In(new gn({jb:!0})):new In(e.ra)).Ka(e.H),t}function ir(){}function ar(){if(H&&!(10<=Number(re)))throw Error("Environmental error: no available transport.")}function or(e,t){Ae.call(this),this.g=new Vn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!P(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!P(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new cr(this)}function sr(e){yt.call(this);var t=e.__sm__;if(t){e:{for(var n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ur(){mt.call(this),this.status=1}function cr(e){this.g=e}(o=In.prototype).Ka=function(e){this.L=e},o.da=function(e,t,r,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():vt.g(),this.C=this.u?ft(this.u):ft(vt),this.g.onreadystatechange=_(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void An(this,e)}if(e=r||"",r=new Map(this.headers),i){var a=!0,o=!1,s=void 0;if(Object.getPrototypeOf(i)===Object.prototype)for(var u in i)r.set(u,i[u]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));try{for(var c,l=i.keys()[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var h=c.value;r.set(h,i.get(h))}}catch(e){o=!0,s=e}finally{try{a||null==l.return||l.return()}finally{if(o)throw s}}}}i=Array.from(r.keys()).find((function(e){return"content-type"==e.toLowerCase()})),u=g.FormData&&e instanceof g.FormData,!(0<=D(Cn,t))||i||u||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");var d=!0,v=!1,p=void 0;try{for(var y,m=r[Symbol.iterator]();!(d=(y=m.next()).done);d=!0){var k=n(f)(y.value,2),w=k[0],b=k[1];this.g.setRequestHeader(w,b)}}catch(e){v=!0,p=e}finally{try{d||null==m.return||m.return()}finally{if(v)throw p}}this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Rn(this),0<this.B&&((this.K=function(e){return H&&te()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_(this.qa,this)):this.A=ze(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){An(this,e)}},o.qa=function(){void 0!==m&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,De(this,"timeout"),this.abort(8))},o.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,De(this,"complete"),De(this,"abort"),On(this))},o.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),On(this,!0)),In.X.M.call(this)},o.Ha=function(){this.s||(this.F||this.v||this.l?Nn(this):this.fb())},o.fb=function(){Nn(this)},o.aa=function(){try{return 2<Ln(this)?this.g.status:-1}catch(e){return-1}},o.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},o.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Tn(t)}},o.Ea=function(){return this.m},o.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(o=Vn.prototype).ma=8,o.G=1,o.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;var t=new kt(this,this.j,e,void 0),n=this.s;if(this.S&&(n?de(n=he(n),this.S):n=this.S),null!==this.o||this.N||(t.H=n,n=null),this.O)e:{for(var r=0,i=0;i<this.i.length;i++){var a=this.i[i];if(void 0===(a="__data__"in a.g&&"string"==typeof(a=a.g.__data__)?a.length:void 0))break;if(4096<(r+=a)){r=i;break e}if(4096===r||i===this.i.length-1){r=i+1;break e}}r=1e3}else r=1e3;r=Wn(this,t,r),Bt(i=Ft(this.F),"RID",e),Bt(i,"CVER",22),this.D&&Bt(i,"X-HTTP-Session-Id",this.D),zn(this,i),n&&(this.N?r="headers="+encodeURIComponent(String(Mn(n)))+"&"+r:this.o&&Un(i,this.o,n)),hn(this.h,t),this.Ya&&Bt(i,"TYPE","init"),this.O?(Bt(i,"$req",r),Bt(i,"SID","null"),t.Z=!0,Tt(t,i,null)):Tt(t,i,r),this.G=2}}else 3==this.G&&(e?Hn(this,e):0==this.i.length||un(this.h)||Hn(this))},o.Ia=function(){if(this.u=null,Jn(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=ut(_(this.eb,this),e)}},o.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ot(10),qn(this),Jn(this))},o.cb=function(){null!=this.v&&(this.v=null,qn(this),Qn(this),ot(19))},o.kb=function(e){e?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))},(o=ir.prototype).xa=function(){},o.wa=function(){},o.va=function(){},o.ua=function(){},o.Ra=function(){},ar.prototype.g=function(e,t){return new or(e,t)},C(or,Ae),or.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;ot(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=nr(e,null,e.V),Kn(e)},or.prototype.close=function(){jn(this.g)},or.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Oe(e),e=n);t.i.push(new an(t.ab++,e)),3==t.G&&Kn(t)},or.prototype.M=function(){this.g.l=null,delete this.j,jn(this.g),delete this.g,or.X.M.call(this)},C(sr,yt),C(ur,mt),C(cr,ir),cr.prototype.xa=function(){De(this.g,"a")},cr.prototype.wa=function(e){De(this.g,new sr(e))},cr.prototype.va=function(e){De(this.g,new ur)},cr.prototype.ua=function(){De(this.g,"b")},ar.prototype.createWebChannel=ar.prototype.g,or.prototype.send=or.prototype.u,or.prototype.open=or.prototype.m,or.prototype.close=or.prototype.close,ct.NO_ERROR=0,ct.TIMEOUT=8,ct.HTTP_ERROR=6,lt.COMPLETE="complete",dt.EventType=pt,pt.OPEN="a",pt.CLOSE="b",pt.ERROR="c",pt.MESSAGE="d",Ae.prototype.listen=Ae.prototype.N,In.prototype.listenOnce=In.prototype.O,In.prototype.getLastError=In.prototype.Oa,In.prototype.getLastErrorCode=In.prototype.Ea,In.prototype.getStatus=In.prototype.aa,In.prototype.getResponseJson=In.prototype.Sa,In.prototype.getResponseText=In.prototype.fa,In.prototype.send=In.prototype.da,In.prototype.setWithCredentials=In.prototype.Ka;var lr=y.createWebChannelTransport=function(){return new ar},hr=y.getStatEventTarget=function(){return nt()},fr=y.ErrorCode=ct,dr=y.EventType=lt,vr=y.Event=et,pr=y.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},yr=y.FetchXmlHttpFactory=gn,mr=y.WebChannel=dt,gr=y.XhrIo=In})),a.register("3vKGz",(function(t,r){e(t.exports,"getRefs",(function(){return o}));var i=a("hKHmD");function o(){var e;return e={filmGallery:document.querySelector(".film__list"),movieCard:document.querySelectorAll(".film__item"),searchQuery:document.querySelector(".header__form-input"),searchBtn:document.querySelector(".header__form-button"),modalBackdrop:document.querySelector(".backdrop"),insertImgCont:document.querySelector(".img-wrap"),watchBtn:document.querySelector(".film-preview"),closeVideoBtn:document.querySelector(".film-preview-close"),movieBox:document.querySelector(".film-info-js"),modalCloseBtn:document.querySelector(".close-modal-btn"),backdrop:document.querySelector(".backdrop"),searchForm:document.querySelector(".header__form"),addToWatched:document.querySelector(".film-btn-wached"),addToQueue:document.querySelector(".film-btn-queue"),watched:document.querySelector("#watched"),queue:document.querySelector("#queue"),insertVideoCont:document.querySelector(".film-tiezer")},n(i)(e,"closeVideoBtn",document.querySelector(".film-preview-close")),n(i)(e,"watchBtn",document.querySelector(".film-preview")),n(i)(e,"videoBtnBox",document.querySelector(".film-btn-wrap")),n(i)(e,"iframeEl",document.querySelector(".iframe")),e}}))}();
//# sourceMappingURL=my-library.2169d612.js.map
