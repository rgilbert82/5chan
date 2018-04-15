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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/javascripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/javascripts/App/Router.js":
/*!******************************************!*\
  !*** ./public/javascripts/App/Router.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Router; });\n/* harmony import */ var _Components_IndexPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/IndexPage */ \"./public/javascripts/Components/IndexPage/index.js\");\n\n\nclass Router {\n  constructor() {\n    this.currentPage = null;\n\n    this.bindEvents = this.bindEvents.bind(this);\n    this.loadPage = this.loadPage.bind(this);\n    this.navigate = this.navigate.bind(this);\n\n    this.bindEvents();\n  }\n\n  bindEvents() {\n    window.addEventListener(\"replacestate\", this.loadPage);\n    window.addEventListener(\"pushstate\", this.loadPage);\n    window.addEventListener(\"popstate\", this.loadPage);\n  }\n\n  navigate(path) {\n    history.pushState({}, path, path);\n    this.loadPage();\n  }\n\n  loadPage() {\n    if (this.currentPage) {\n      this.currentPage.removeEventListeners();\n    }\n\n    switch(location.pathname) {\n      case '/':\n        this.currentPage = new _Components_IndexPage__WEBPACK_IMPORTED_MODULE_0__[\"IndexMain\"]();\n        break;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/App/Router.js?");

/***/ }),

/***/ "./public/javascripts/App/index.js":
/*!*****************************************!*\
  !*** ./public/javascripts/App/index.js ***!
  \*****************************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router.js */ \"./public/javascripts/App/Router.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Router\", function() { return _Router_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./public/javascripts/App/index.js?");

/***/ }),

/***/ "./public/javascripts/Components/IndexPage/IndexMain.js":
/*!**************************************************************!*\
  !*** ./public/javascripts/Components/IndexPage/IndexMain.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IndexMain; });\nclass IndexMain {\n  constructor() {\n    this.render = this.render.bind(this);\n    this.bindEventListeners = this.bindEventListeners.bind(this);\n    this.removeEventListeners = this.removeEventListeners.bind(this);\n\n    this.render();\n    this.bindEventListeners();\n  }\n\n  bindEventListeners() {\n    // todo\n  }\n\n  removeEventListeners() {\n    // todo\n  }\n\n  render() {\n    const main = document.getElementById('main');\n    const content = `\n      <h2>Index Page</h2>\n      <div id=\"index_boards\">\n      </div>\n    `;\n\n    main.innerHTML = content;\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/IndexPage/IndexMain.js?");

/***/ }),

/***/ "./public/javascripts/Components/IndexPage/index.js":
/*!**********************************************************!*\
  !*** ./public/javascripts/Components/IndexPage/index.js ***!
  \**********************************************************/
/*! exports provided: IndexMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _IndexMain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexMain.js */ \"./public/javascripts/Components/IndexPage/IndexMain.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"IndexMain\", function() { return _IndexMain_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/IndexPage/index.js?");

/***/ }),

/***/ "./public/javascripts/Containers/MainTemplate.js":
/*!*******************************************************!*\
  !*** ./public/javascripts/Containers/MainTemplate.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainTemplate; });\nclass MainTemplate {\n  constructor() {\n    this.render = this.render.bind(this);\n    this.setEventHandlers = this.setEventHandlers.bind(this);\n\n    this.render();\n    this.setEventHandlers();\n  }\n\n  setEventHandlers() {\n    // todo\n  }\n\n  render() {\n    const body = document.getElementsByTagName('body')[0];\n    const content = `\n      <header>\n        <h1>5chan</h1>\n      </header>\n\n      <div id=\"main\">\n      </div>\n\n      <footer>\n      </footer>\n    `;\n\n    body.innerHTML = content;\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/Containers/MainTemplate.js?");

/***/ }),

/***/ "./public/javascripts/Containers/index.js":
/*!************************************************!*\
  !*** ./public/javascripts/Containers/index.js ***!
  \************************************************/
/*! exports provided: MainTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MainTemplate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainTemplate.js */ \"./public/javascripts/Containers/MainTemplate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MainTemplate\", function() { return _MainTemplate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./public/javascripts/Containers/index.js?");

/***/ }),

/***/ "./public/javascripts/main.js":
/*!************************************!*\
  !*** ./public/javascripts/main.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainApp; });\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./public/javascripts/App/index.js\");\n/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Containers */ \"./public/javascripts/Containers/index.js\");\n\n\n\nclass MainApp {\n  constructor() {\n    this.router = new _App__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\n\n    this.navigateToLink = this.navigateToLink.bind(this);\n\n    this.mainTemplate = new _Containers__WEBPACK_IMPORTED_MODULE_1__[\"MainTemplate\"]();\n    this.router.loadPage();\n  }\n\n  navigateToLink() {\n    // todo\n  }\n}\n\nconst app = new MainApp();\n\n\n//# sourceURL=webpack:///./public/javascripts/main.js?");

/***/ })

/******/ });