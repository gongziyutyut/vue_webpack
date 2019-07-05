!function(e){function r(r){for(var n,o,i=r[0],c=r[1],a=r[2],d=0,s=[];d<i.length;d++)o=i[d],k[o]&&s.push(k[o][0]),k[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(q&&q(r);s.length;)s.shift()();return A.push.apply(A,a||[]),t()}function t(){for(var e,r=0;r<A.length;r++){for(var t=A[r],n=!0,o=1;o<t.length;o++){var i=t[o];0!==k[i]&&(n=!1)}n&&(A.splice(r--,1),e=I(I.s=t[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,r){if(!j[e]||!g[e])return;for(var t in g[e]=!1,r)Object.prototype.hasOwnProperty.call(r,t)&&(m[t]=r[t]);0==--b&&0===w&&H()}(e,r),n&&n(e,r)};var o,i=!0,c="6181e9342e3384e576e8",a=1e4,d={},s=[],u=[];function p(e){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,t){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._acceptedDependencies[e[n]]=t||function(){};else r._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._declinedDependencies[e[t]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=r._disposeHandlers.indexOf(e);t>=0&&r._disposeHandlers.splice(t,1)},check:E,apply:P,status:function(e){if(!e)return f;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var r=l.indexOf(e);r>=0&&l.splice(r,1)},data:d[e]};return o=void 0,r}var l=[],f="idle";function h(e){f=e;for(var r=0;r<l.length;r++)l[r].call(null,e)}var v,m,y,b=0,w=0,_={},g={},j={};function O(e){return+e+""===e?+e:e}function E(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return i=e,h("check"),(r=a,r=r||1e4,new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var n=new XMLHttpRequest,o=I.p+""+c+".hot-update.json";n.open("GET",o,!0),n.timeout=r,n.send(null)}catch(e){return t(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)t(new Error("Manifest request to "+o+" failed."));else{try{var r=JSON.parse(n.responseText)}catch(e){return void t(e)}e(r)}}})).then(function(e){if(!e)return h("idle"),null;g={},_={},j=e.c,y=e.h,h("prepare");var r=new Promise(function(e,r){v={resolve:e,reject:r}});for(var t in m={},k)D(t);return"prepare"===f&&0===w&&0===b&&H(),r});var r}function D(e){j[e]?(g[e]=!0,b++,function(e){var r=document.createElement("script");r.charset="utf-8",r.src=I.p+""+e+"."+c+".hot-update.js",document.head.appendChild(r)}(e)):_[e]=!0}function H(){h("ready");var e=v;if(v=null,e)if(i)Promise.resolve().then(function(){return P(i)}).then(function(r){e.resolve(r)},function(r){e.reject(r)});else{var r=[];for(var t in m)Object.prototype.hasOwnProperty.call(m,t)&&r.push(O(t));e.resolve(r)}}function P(r){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var t,n,o,i,a;function u(e){for(var r=[e],t={},n=r.map(function(e){return{chain:[e],id:e}});n.length>0;){var o=n.pop(),c=o.id,a=o.chain;if((i=x[c])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:c};if(i.hot._main)return{type:"unaccepted",chain:a,moduleId:c};for(var d=0;d<i.parents.length;d++){var s=i.parents[d],u=x[s];if(u){if(u.hot._declinedDependencies[c])return{type:"declined",chain:a.concat([s]),moduleId:c,parentId:s};-1===r.indexOf(s)&&(u.hot._acceptedDependencies[c]?(t[s]||(t[s]=[]),p(t[s],[c])):(delete t[s],r.push(s),n.push({chain:a.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:t}}function p(e,r){for(var t=0;t<r.length;t++){var n=r[t];-1===e.indexOf(n)&&e.push(n)}}r=r||{};var l={},v=[],b={},w=function(){console.warn("[HMR] unexpected require("+g.moduleId+") to disposed module")};for(var _ in m)if(Object.prototype.hasOwnProperty.call(m,_)){var g;a=O(_);var E=!1,D=!1,H=!1,P="";switch((g=m[_]?u(a):{type:"disposed",moduleId:_}).chain&&(P="\nUpdate propagation: "+g.chain.join(" -> ")),g.type){case"self-declined":r.onDeclined&&r.onDeclined(g),r.ignoreDeclined||(E=new Error("Aborted because of self decline: "+g.moduleId+P));break;case"declined":r.onDeclined&&r.onDeclined(g),r.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+g.moduleId+" in "+g.parentId+P));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(g),r.ignoreUnaccepted||(E=new Error("Aborted because "+a+" is not accepted"+P));break;case"accepted":r.onAccepted&&r.onAccepted(g),D=!0;break;case"disposed":r.onDisposed&&r.onDisposed(g),H=!0;break;default:throw new Error("Unexception type "+g.type)}if(E)return h("abort"),Promise.reject(E);if(D)for(a in b[a]=m[a],p(v,g.outdatedModules),g.outdatedDependencies)Object.prototype.hasOwnProperty.call(g.outdatedDependencies,a)&&(l[a]||(l[a]=[]),p(l[a],g.outdatedDependencies[a]));H&&(p(v,[g.moduleId]),b[a]=w)}var A,M=[];for(n=0;n<v.length;n++)a=v[n],x[a]&&x[a].hot._selfAccepted&&b[a]!==w&&M.push({module:a,errorHandler:x[a].hot._selfAccepted});h("dispose"),Object.keys(j).forEach(function(e){!1===j[e]&&function(e){delete k[e]}(e)});for(var S,R,q=v.slice();q.length>0;)if(a=q.pop(),i=x[a]){var U={},T=i.hot._disposeHandlers;for(o=0;o<T.length;o++)(t=T[o])(U);for(d[a]=U,i.hot.active=!1,delete x[a],delete l[a],o=0;o<i.children.length;o++){var F=x[i.children[o]];F&&((A=F.parents.indexOf(a))>=0&&F.parents.splice(A,1))}}for(a in l)if(Object.prototype.hasOwnProperty.call(l,a)&&(i=x[a]))for(R=l[a],o=0;o<R.length;o++)S=R[o],(A=i.children.indexOf(S))>=0&&i.children.splice(A,1);for(a in h("apply"),c=y,b)Object.prototype.hasOwnProperty.call(b,a)&&(e[a]=b[a]);var L=null;for(a in l)if(Object.prototype.hasOwnProperty.call(l,a)&&(i=x[a])){R=l[a];var C=[];for(n=0;n<R.length;n++)if(S=R[n],t=i.hot._acceptedDependencies[S]){if(-1!==C.indexOf(t))continue;C.push(t)}for(n=0;n<C.length;n++){t=C[n];try{t(R)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:a,dependencyId:R[n],error:e}),r.ignoreErrored||L||(L=e)}}}for(n=0;n<M.length;n++){var J=M[n];a=J.module,s=[a];try{I(a)}catch(e){if("function"==typeof J.errorHandler)try{J.errorHandler(e)}catch(t){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:a,error:t,originalError:e}),r.ignoreErrored||L||(L=t),L||(L=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:a,error:e}),r.ignoreErrored||L||(L=e)}}return L?(h("fail"),Promise.reject(L)):(h("idle"),new Promise(function(e){e(v)}))}var x={},k={1:0},A=[];function I(r){if(x[r])return x[r].exports;var t=x[r]={i:r,l:!1,exports:{},hot:p(r),parents:(u=s,s=[],u),children:[]};return e[r].call(t.exports,t,t.exports,function(e){var r=x[e];if(!r)return I;var t=function(t){return r.hot.active?(x[t]?-1===x[t].parents.indexOf(e)&&x[t].parents.push(e):(s=[e],o=t),-1===r.children.indexOf(t)&&r.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),s=[]),I(t)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return I[e]},set:function(r){I[e]=r}}};for(var i in I)Object.prototype.hasOwnProperty.call(I,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(t,i,n(i));return t.e=function(e){return"ready"===f&&h("prepare"),w++,I.e(e).then(r,function(e){throw r(),e});function r(){w--,"prepare"===f&&(_[e]||D(e),0===w&&0===b&&H())}},t.t=function(e,r){return 1&r&&(e=t(e)),I.t(e,-2&r)},t}(r)),t.l=!0,t.exports}I.e=function(e){var r=[],t=k[e];if(0!==t)if(t)r.push(t[2]);else{var n=new Promise(function(r,n){t=k[e]=[r,n]});r.push(t[2]=n);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,I.nc&&i.setAttribute("nonce",I.nc),i.src=function(e){return I.p+"js/"+({}[e]||e)+"."+c.substr(0,8)+".js"}(e);var a=new Error;o=function(r){i.onerror=i.onload=null,clearTimeout(d);var t=k[e];if(0!==t){if(t){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",a.name="ChunkLoadError",a.type=n,a.request=o,t[1](a)}k[e]=void 0}};var d=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(r)},I.m=e,I.c=x,I.d=function(e,r,t){I.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},I.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},I.t=function(e,r){if(1&r&&(e=I(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(I.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)I.d(t,n,function(r){return e[r]}.bind(null,n));return t},I.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return I.d(r,"a",r),r},I.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},I.p="/",I.oe=function(e){throw console.error(e),e},I.h=function(){return c};var M=window.webpackJsonp=window.webpackJsonp||[],S=M.push.bind(M);M.push=r,M=M.slice();for(var R=0;R<M.length;R++)r(M[R]);var q=S;A.push(["./src/main.js",0]),t()}({"./src/app.vue":function(e,r,t){"use strict";var n=t("./src/app.vue?vue&type=template&id=5ef48958&scoped=true&"),o=t("./src/app.vue?vue&type=script&lang=js&"),i=t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),c=Object(i.a)(o.a,n.render,n.staticRenderFns,!1,null,"5ef48958",null),a=t("./node_modules/vue-hot-reload-api/dist/index.js");a.install(t("./node_modules/vue/dist/vue.runtime.esm.js")),a.compatible&&(e.hot.accept(),e.hot.data?a.reload("5ef48958",c.options):a.createRecord("5ef48958",c.options),e.hot.accept("./src/app.vue?vue&type=template&id=5ef48958&scoped=true&",function(e){n=t("./src/app.vue?vue&type=template&id=5ef48958&scoped=true&"),a.rerender("5ef48958",{render:n.render,staticRenderFns:n.staticRenderFns})}.bind(this))),c.options.__file="src/app.vue",r.a=c.exports},"./src/app.vue?vue&type=script&lang=js&":function(e,r,t){"use strict";var n={name:"App",data:()=>({})};r.a=n},"./src/app.vue?vue&type=template&id=5ef48958&scoped=true&":function(e,r,t){"use strict";t.r(r);var n=function(){var e=this.$createElement,r=this._self._c||e;return r("div",{attrs:{id:"app"}},[this._v("\n  hello FE\n  "),r("div",[r("router-link",{attrs:{to:"/Home"}},[this._v("Home")]),this._v(" "),r("router-link",{attrs:{to:"/About"}},[this._v("About")])],1),this._v(" "),r("div",[r("router-view")],1)])},o=[];n._withStripped=!0,t.d(r,"render",function(){return n}),t.d(r,"staticRenderFns",function(){return o})},"./src/main.js":function(e,r,t){"use strict";t.r(r);var n=t("./node_modules/vue/dist/vue.runtime.esm.js"),o=t("./src/app.vue"),i=t("./node_modules/vue-router/dist/vue-router.esm.js");n.default.use(i.a);var c=new i.a({mode:"hash",routes:[{path:"/",redirect:"/Home"},{path:"/Home",component:e=>t.e(3).then(function(){var r=[t("./src/view/home.vue")];e.apply(null,r)}.bind(this)).catch(t.oe)},{path:"/About",component:e=>t.e(2).then(function(){var r=[t("./src/view/about.vue")];e.apply(null,r)}.bind(this)).catch(t.oe)}]});new n.default({router:c,components:{App:o.a},render:e=>e(o.a)}).$mount("#app")}});
//# sourceMappingURL=main.6181e934.js.map