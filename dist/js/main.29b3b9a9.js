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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackMissingModule() { throw new Error("Cannot find module \"../src/main.js\""); }());
module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Thread Loader (Worker 0)\nSyntaxError: C:/Users/yanwe/Desktop/static/vue_webpack/src/main.js: Unexpected token (8:12)\n\n   6 |     App\n   7 |   },\n>  8 |   template: <App/>\n     |             ^\n   9 | })\n  10 | \n\n    at PoolWorker.fromErrorObj (C:\\Users\\yanwe\\Desktop\\static\\vue_webpack\\node_modules\\thread-loader\\dist\\WorkerPool.js:258:12)\n    at C:\\Users\\yanwe\\Desktop\\static\\vue_webpack\\node_modules\\thread-loader\\dist\\WorkerPool.js:200:29\n    at mapSeries (C:\\Users\\yanwe\\Desktop\\static\\vue_webpack\\node_modules\\neo-async\\async.js:3625:14)\n    at PoolWorker.onWorkerMessage (C:\\Users\\yanwe\\Desktop\\static\\vue_webpack\\node_modules\\thread-loader\\dist\\WorkerPool.js:166:35)\n    at readBuffer (C:\\Users\\yanwe\\Desktop\\static\\vue_webpack\\node_modules\\thread-loader\\dist\\WorkerPool.js:148:14)\n    at Socket.onChunk (C:\\Users\\yanwe\\Desktop\\static\\vue_webpack\\node_modules\\thread-loader\\dist\\readBuffer.js:36:9)\n    at transpile (C:\\Users\\yanwe\\Desktop\\static\\vue_webpack\\node_modules\\babel-loader\\lib\\index.js:65:13)\n    at Object.module.exports (C:\\Users\\yanwe\\Desktop\\static\\vue_webpack\\node_modules\\babel-loader\\lib\\index.js:173:20)");

/***/ })
/******/ ]);