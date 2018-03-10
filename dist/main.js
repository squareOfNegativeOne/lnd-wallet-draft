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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _electron = __webpack_require__(/*! electron */ \"electron\");\n\nlet mainWindow;\nfunction onReady() {\n    mainWindow = new _electron.BrowserWindow({\n        height: 600,\n        width: 800\n    });\n    const fileName = `file://${__dirname}/index.html`;\n    console.log('filename - ' + fileName);\n    mainWindow.loadURL(fileName);\n    mainWindow.on('close', () => _electron.app.quit());\n}\n_electron.app.on('ready', () => onReady());\n_electron.app.on('window-all-closed', () => _electron.app.quit());\nconsole.log(`Electron Version ${_electron.app.getVersion()}`);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLnRzP2I3NjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwLCBCcm93c2VyV2luZG93IH0gZnJvbSAnZWxlY3Ryb24nXG5cbi8qIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGUgKi9cblxuZGVjbGFyZSB2YXIgX19kaXJuYW1lOiBzdHJpbmdcbmxldCBtYWluV2luZG93OiBFbGVjdHJvbi5Ccm93c2VyV2luZG93XG5cbmZ1bmN0aW9uIG9uUmVhZHkoKSB7XG4gIG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7XG4gICAgaGVpZ2h0OiA2MDAsXG4gICAgd2lkdGg6IDgwMCxcbiAgfSlcblxuICBjb25zdCBmaWxlTmFtZSA9IGBmaWxlOi8vJHtfX2Rpcm5hbWV9L2luZGV4Lmh0bWxgXG4gIGNvbnNvbGUubG9nKCdmaWxlbmFtZSAtICcgKyBmaWxlTmFtZSlcbiAgbWFpbldpbmRvdy5sb2FkVVJMKGZpbGVOYW1lKVxuICBtYWluV2luZG93Lm9uKCdjbG9zZScsICgpID0+IGFwcC5xdWl0KCkpXG59XG5cbmFwcC5vbigncmVhZHknLCAoKSA9PiBvblJlYWR5KCkpXG5hcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgKCkgPT4gYXBwLnF1aXQoKSlcbmNvbnNvbGUubG9nKGBFbGVjdHJvbiBWZXJzaW9uICR7YXBwLmdldFZlcnNpb24oKX1gKVxuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.ts\n");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"electron\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbGVjdHJvblwiPzA0ZjMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///electron\n");

/***/ })

/******/ });