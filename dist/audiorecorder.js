/*! For license information please see audiorecorder.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.AudioRecorder=e():t.AudioRecorder=e()}(self,(()=>(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}t.d(e,{default:()=>G});var i=null,a=0,s=[],c={};function u(t){a=t;var e,r=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return s=t.done,t},e:function(t){c=!0,a=t},f:function(){try{s||null==r.return||r.return()}finally{if(c)throw a}}}}(s);try{for(r.s();!(e=r.n()).done;)(0,e.value)()}catch(t){r.e(t)}finally{r.f()}s=[]}function l(t){var e;/^https?:\/\//.test(t)&&(e='importScripts("'.concat(t,'");'),t=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))),i=new Worker(t),a=1,i.onmessage=function(t){switch(t.data.message){case"ready":u(2);break;case"data":t.data.jobId in c&&c[t.data.jobId].ondataavailable(t.data.data);break;case"stopped":t.data.jobId in c&&c[t.data.jobId].onstopped()}},i.onerror=function(t){console.error("mp3worker error event",t),u(3)}}var f=function(){function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.jobId=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})),this.options=e,c[this.jobId]={ondataavailable:function(t){r.ondataavailable&&r.ondataavailable(t)},onstopped:function(){delete c[r.jobId],r.onstopped&&r.onstopped()}}}var e,r,o;return e=t,o=[{key:"preload",value:function(t){0!=a&&3!=a||l(t)}},{key:"waitForWorker",value:function(t){return 2==a?Promise.resolve():(0!=a&&3!=a||l(t),new Promise((function(t,e){s.push((function(){if(2==a)t();else{var r=new Error("MP3 worker failed");r.name="WorkerError",e(r)}}))})))}}],(r=[{key:"start",value:function(){i.postMessage({command:"start",jobId:this.jobId,options:this.options})}},{key:"sendData",value:function(t){i.postMessage({command:"data",jobId:this.jobId,buffers:t})}},{key:"stop",value:function(){i.postMessage({command:"stop",jobId:this.jobId})}}])&&n(e.prototype,r),o&&n(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){t.getTracks?t.getTracks().forEach((function(t){return t.stop()})):t.stop()}function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}var m=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.reset()}var e,r;return e=t,(r=[{key:"reset",value:function(){this.startTime=null,this.stoppedTime=null}},{key:"start",value:function(){this.startTime||(this.startTime=Date.now()),this.stoppedTime&&(this.startTime+=Date.now()-this.stoppedTime,this.stoppedTime=null)}},{key:"resetAndStart",value:function(){this.reset(),this.start()}},{key:"stop",value:function(){this.stoppedTime||(this.stoppedTime=Date.now())}},{key:"getTime",value:function(){return this.startTime?this.stoppedTime?this.stoppedTime-this.startTime:Date.now()-this.startTime:0}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function y(){y=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),s=new E(o||[]);return n(a,"_invoke",{value:j(t,r,s)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function p(){}function d(){}function h(){}var m={};c(m,i,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(N([])));b&&b!==e&&r.call(b,i)&&(m=b);var w=h.prototype=p.prototype=Object.create(m);function k(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function o(n,i,a,s){var c=l(t[n],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==v(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,s)}),(function(t){o("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,s)}))}s(c.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function j(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=O(a,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return d.prototype=h,n(w,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:d,configurable:!0}),d.displayName=c(h,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},k(S.prototype),c(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new S(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(w),c(w,s,"Generator"),c(w,i,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function g(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function b(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){g(i,n,o,a,s,"next",t)}function s(t){g(i,n,o,a,s,"throw",t)}a(void 0)}))}}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,O(n.key),n)}}function k(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?k(Object(r),!0).forEach((function(e){j(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function j(t,e,r){return(e=O(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function O(t){var e=function(t,e){if("object"!==v(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===v(e)?e:String(e)}var P=window.AudioContext||window.webkitAudioContext,x=window.AudioWorklet&&!(["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document)&&!/^((?!chrome|android).)*safari/i.test(navigator.userAgent),E={recordingGain:1,encoderBitRate:96,streaming:!1,streamBufferSize:5e4,forceScriptProcessor:!1,constraints:{channelCount:1,autoGainControl:!0,echoCancellation:!0,noiseSuppression:!0}},N={workletUrl:"./mp3worklet.js",workerUrl:"./mp3worker.js",preloadBoth:!1},T=new P,L=null,A=null,R=null;function W(){return null==A&&(A=T.audioWorklet.addModule(L.workletUrl)).catch((function(t){A=null})),A}function _(){var t;return null==R&&(t=L.workerUrl,(R=f.waitForWorker(t)).catch((function(t){R=null}))),R}function C(){var t=new Error("AudioRecorder start cancelled by call to stop");return t.name="CancelStartError",t}var G=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=S(S({},E),e),this.state=0,this.encoder=null,this.encodedData=null,this.stopPromiseResolve=null,this.stopPromiseReject=null,this.timer=new m}var e,r,n,o,i,a;return e=t,r=[{key:"reallyUseAudioWorklet",value:function(){return x&&!this.options.forceScriptProcessor}},{key:"tryLoadWorklet",value:(a=b(y().mark((function t(){var e;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.reallyUseAudioWorklet()?W:_,t.prev=1,t.next=4,e();case 4:t.next=9;break;case 6:throw t.prev=6,t.t0=t.catch(1),r=void 0,(r=new Error("Failed to load worklet or worker")).name="WorkerError",r;case 9:case"end":return t.stop()}var r}),t,this,[[1,6]])}))),function(){return a.apply(this,arguments)})},{key:"createEncoderWorklet",value:function(t){var e=this,r="channelCount"in t?t.channelCount:1;this.reallyUseAudioWorklet()?(console.log("Using AudioWorklet"),this.encoderWorkletNode=new AudioWorkletNode(T,"mp3-encoder-processor",{numberOfInputs:1,numberOfOutputs:0,processorOptions:{originalSampleRate:T.sampleRate,numberOfChannels:r,encoderBitRate:this.options.encoderBitRate,streamBufferSize:this.options.streamBufferSize}})):(console.log("Using ScriptProcessorNode"),this.encoderWorkletNode=function(t,e){var r=!1,n=!1,o=t.createScriptProcessor(4096,e.numberOfChannels,e.numberOfChannels);o.connect(t.destination);var i=new f({originalSampleRate:e.originalSampleRate,numberOfChannels:e.numberOfChannels,encoderBitRate:e.encoderBitRate,streamBufferSize:e.streamBufferSize});return o.port={onmessage:null,postMessage:function(t){switch(t.message){case"stop_encoding":i.stop(),r=!0;break;case"pause":n=!0;break;case"resume":n=!1}}},i.ondataavailable=function(t){o.port.onmessage&&o.port.onmessage({data:{message:"data",data:t}})},i.onstopped=function(){o.port.onmessage&&o.port.onmessage({data:{message:"stopped"}})},i.start(),o.onaudioprocess=function(t){if(!r&&!n){for(var e=t.inputBuffer,o=[],a=0;a<e.numberOfChannels;a++)o.push(e.getChannelData(a));i.sendData(o)}},o}(T,{originalSampleRate:T.sampleRate,numberOfChannels:r,encoderBitRate:this.options.encoderBitRate,streamBufferSize:this.options.streamBufferSize})),this.encoderWorkletNode.port.onmessage=function(t){var r=t.data;switch(r.message){case"data":e.options.streaming?e.ondataavailable&&e.ondataavailable(r.data):e.encodedData.push(r.data);break;case"stopped":e.cleanup(),e.state=0;var n=e.options.streaming?void 0:new Blob(e.encodedData,{type:"audio/mpeg"});e.onstop&&e.onstop(n),e.stopPromiseResolve(n)}}}},{key:"connectAudioNodes",value:function(){this.recordingGainNode=T.createGain(),this.setRecordingGain(this.options.recordingGain),this.recordingGainNode.connect(this.encoderWorkletNode),this.sourceNode=T.createMediaStreamSource(this.stream),this.sourceNode.connect(this.recordingGainNode)}},{key:"cleanup",value:function(){this.encoderWorkletNode&&(this.encoderWorkletNode.port.onmessage=null),this.encoderWorkletNode&&this.encoderWorkletNode.disconnect(),this.recordingGainNode&&this.recordingGainNode.disconnect(),this.sourceNode&&this.sourceNode.disconnect(),this.stream&&delete this.stream}},{key:"setRecordingGain",value:function(t){this.options.recordingGain=t,this.recordingGainNode&&this.recordingGainNode.gain.setTargetAtTime(t,T.currentTime,.01)}},{key:"time",get:function(){return this.timer.getTime()}},{key:"__start",value:(i=b(y().mark((function t(){var e,r,n,o;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0==this.state){t.next=2;break}throw new Error("Called start when not in stopped state");case 2:if(null!=L){t.next=4;break}throw new Error("preload was not called on AudioRecorder");case 4:return"suspended"==T.state&&T.resume(),this.state=3,this.encodedData=[],t.prev=7,t.next=10,this.tryLoadWorklet();case 10:if(4!=this.state){t.next=12;break}throw C();case 12:return e=!(Object.keys(this.options.constraints).length>0)||this.options.constraints,t.next=15,navigator.mediaDevices.getUserMedia({audio:e});case 15:if(r=t.sent,4!=this.state){t.next=19;break}throw p(r),C();case 19:if(!((n=r.getAudioTracks()).length<1)){t.next=22;break}throw new Error("No audio tracks in user media stream");case 22:this.createEncoderWorklet(n[0].getSettings()),this.stream=r,this.connectAudioNodes(),this.timer.resetAndStart(),this.state=1,this.onstart&&this.onstart(),t.next=37;break;case 30:throw t.prev=30,t.t0=t.catch(7),o=4==this.state,this.cleanup(),this.state=0,o&&this.stopPromiseReject(t.t0),t.t0;case 37:case"end":return t.stop()}}),t,this,[[7,30]])}))),function(){return i.apply(this,arguments)})},{key:"__stop",value:(o=b(y().mark((function t(){var e=this;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.timer.stop(),1!=this.state&&2!=this.state){t.next=8;break}return this.state=4,p(this.stream),this.encoderWorkletNode.port.postMessage({message:"stop_encoding"}),t.abrupt("return",new Promise((function(t,r){e.stopPromiseResolve=t})));case 8:if(3!=this.state){t.next=11;break}return this.state=4,t.abrupt("return",new Promise((function(t,r){e.stopPromiseReject=r})));case 11:throw new Error("Called stop when AudioRecorder was not started");case 12:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"start",value:function(){var t=this,e=this.__start();if(e.catch((function(e){"CancelStartError"!=e.name&&t.onerror&&t.onerror(e)})),!this.onerror)return e}},{key:"stop",value:function(){var t=this,e=this.__stop();if(e.catch((function(e){"CancelStartError"==e.name?t.onstop&&t.onstop(t.options.streaming?void 0:null):t.onerror&&t.onerror(e)})),!this.onerror)return e}},{key:"pause",value:function(){1==this.state&&(this.encoderWorkletNode.port.postMessage({message:"pause"}),this.state=2,this.timer.stop())}},{key:"resume",value:function(){2==this.state&&(this.encoderWorkletNode.port.postMessage({message:"resume"}),this.state=1,this.timer.start())}}],n=[{key:"isRecordingSupported",value:function(){return P&&navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia}},{key:"preload",value:function(t){!function(t){L=S(S({},N),t),t.preloadBoth?(W(),_()):x?W():_()}(t)}}],r&&w(e.prototype,r),n&&w(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();return e.default})()));