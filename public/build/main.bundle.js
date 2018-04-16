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

/***/ "./public/javascripts/App/MessageBox.js":
/*!**********************************************!*\
  !*** ./public/javascripts/App/MessageBox.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MessageBox; });\nclass MessageBox {\n  constructor(props) {\n    this.props          = props;\n    this.render         = this.render.bind(this);\n    this.setupComponent = this.setupComponent.bind(this);\n\n    this.setupComponent();\n  }\n\n  setupComponent() {\n    this.render();\n  }\n\n  render() {\n    const parent  = document.getElementById('message_box');\n    const content = `\n      <div>\n        <h2>${this.props.message}</h2>\n      </div>\n    `;\n\n    parent.innerHTML = content;\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/App/MessageBox.js?");

/***/ }),

/***/ "./public/javascripts/App/Router.js":
/*!******************************************!*\
  !*** ./public/javascripts/App/Router.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Router; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./public/javascripts/App/index.js\");\n/* harmony import */ var _Components_Headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Headers */ \"./public/javascripts/Components/Headers/index.js\");\n/* harmony import */ var _Components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/IndexPage */ \"./public/javascripts/Components/IndexPage/index.js\");\n/* harmony import */ var _Components_BoardPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/BoardPage */ \"./public/javascripts/Components/BoardPage/index.js\");\n\n\n\n\n\nclass Router {\n  constructor() {\n    this.currentPage    = null;\n    this.headerNav      = null;\n\n    this.bindEvents      = this.bindEvents.bind(this);\n    this.loadPage        = this.loadPage.bind(this);\n    this.navigate        = this.navigate.bind(this);\n    this.displayMessage  = this.displayMessage.bind(this);\n    this.setupHeaderNav  = this.setupHeaderNav.bind(this);\n    this.removeHeaderNav = this.removeHeaderNav.bind(this);\n\n    this.bindEvents();\n  }\n\n  bindEvents() {\n    window.addEventListener(\"replacestate\", this.loadPage);\n    window.addEventListener(\"pushstate\", this.loadPage);\n    window.addEventListener(\"popstate\", this.loadPage);\n  }\n\n  displayMessage(message) {\n    new ___WEBPACK_IMPORTED_MODULE_0__[\"MessageBox\"]({ message: message });\n  }\n\n  setupHeaderNav() {\n    const pageProps = {\n      navigate: this.navigate,\n      displayMessage: this.displayMessage\n    }\n\n    if (!this.headerNav) {\n      this.headerNav = new _Components_Headers__WEBPACK_IMPORTED_MODULE_1__[\"HeaderNav\"](pageProps);\n    }\n  }\n\n  removeHeaderNav() {\n    if (this.headerNav) {\n      this.headerNav.removeEventListeners();\n      this.headerNav = null;\n      document.getElementById('header_nav').innerHTML = '';\n    }\n  }\n\n  navigate(path) {\n    history.pushState({}, path, path);\n    this.loadPage();\n  }\n\n  loadPage() {\n    const path = location.pathname;\n    const pageProps = {\n      navigate: this.navigate,\n      displayMessage: this.displayMessage\n    }\n\n    if (this.currentPage) {\n      this.currentPage.removeEventListeners();\n    }\n\n    if (path === '/') {\n      this.removeHeaderNav();\n      this.currentPage = new _Components_IndexPage__WEBPACK_IMPORTED_MODULE_2__[\"IndexMain\"](pageProps);\n    } else if (path.match(/^\\/boards\\/\\w+$/)) {\n      this.setupHeaderNav();\n      this.currentPage = new _Components_BoardPage__WEBPACK_IMPORTED_MODULE_3__[\"BoardIndex\"](pageProps);\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/App/Router.js?");

/***/ }),

/***/ "./public/javascripts/App/index.js":
/*!*****************************************!*\
  !*** ./public/javascripts/App/index.js ***!
  \*****************************************/
/*! exports provided: Router, MessageBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router.js */ \"./public/javascripts/App/Router.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Router\", function() { return _Router_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _MessageBox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageBox.js */ \"./public/javascripts/App/MessageBox.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MessageBox\", function() { return _MessageBox_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n \n\n\n//# sourceURL=webpack:///./public/javascripts/App/index.js?");

/***/ }),

/***/ "./public/javascripts/Components/BoardPage/BoardContent.js":
/*!*****************************************************************!*\
  !*** ./public/javascripts/Components/BoardPage/BoardContent.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BoardContent; });\nclass BoardContent {\n  constructor(props) {\n    this.props = props;\n\n    this.render               = this.render.bind(this);\n    this.bindEventListeners   = this.bindEventListeners.bind(this);\n    this.removeEventListeners = this.removeEventListeners.bind(this);\n    this.setupComponent       = this.setupComponent.bind(this);\n\n    this.setupComponent();\n  }\n\n  setupComponent() {\n    this.render();\n  }\n\n  bindEventListeners() {\n    // todo\n  }\n\n  removeEventListeners() {\n    // todo\n  }\n\n  render() {\n    const parent = document.getElementById('board_content');\n    const content = `\n      <div>\n        <ul>\n          <li>Temp post 1</li>\n          <li>Temp post 2</li>\n          <li>Temp post 3</li>\n        </ul>\n      </div>\n    `;\n\n    parent.innerHTML = content;\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/BoardPage/BoardContent.js?");

/***/ }),

/***/ "./public/javascripts/Components/BoardPage/BoardIndex.js":
/*!***************************************************************!*\
  !*** ./public/javascripts/Components/BoardPage/BoardIndex.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BoardIndex; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./public/javascripts/Components/BoardPage/index.js\");\n/* harmony import */ var _Headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Headers */ \"./public/javascripts/Components/Headers/index.js\");\n/* harmony import */ var _services_api_boards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/boards */ \"./public/javascripts/services/api/boards/index.js\");\n\n\n\n\nclass BoardIndex {\n  constructor(props) {\n    this.props = props;\n    this.state = {\n      children: []\n    };\n\n    this.render               = this.render.bind(this);\n    this.bindEventListeners   = this.bindEventListeners.bind(this);\n    this.removeEventListeners = this.removeEventListeners.bind(this);\n    this.fetchBoard           = this.fetchBoard.bind(this);\n    this.setupComponent       = this.setupComponent.bind(this);\n\n    this.setupComponent();\n  }\n\n  setupComponent() {\n    this.render();\n    this.fetchBoard();\n  }\n\n  bindEventListeners() {\n    // todo\n  }\n\n  removeEventListeners() {\n    this.state.children.forEach((child) => {\n      child.removeEventListeners();\n    });\n\n    this.state.children = [];\n  }\n\n  fetchBoard() {\n    const boardSlug = location.pathname.replace('/boards/', '');\n    return Object(_services_api_boards__WEBPACK_IMPORTED_MODULE_2__[\"getBoardAPI\"])(boardSlug)\n      .then((data) => {\n        const props   = {\n          board: data,\n          navigate: this.props.navigate,\n          displayMessage: this.props.displayMessage\n        }\n        const header  = new _Headers__WEBPACK_IMPORTED_MODULE_1__[\"BoardHeader\"](props);\n        const content = new ___WEBPACK_IMPORTED_MODULE_0__[\"BoardContent\"](props);\n        this.state.children = this.state.children.concat([ header, content ]);\n      }).catch((err) => {\n        this.props.displayMessage('There was an error loading this page');\n      });\n  }\n\n  render() {\n    const header = document.getElementById('page_header');\n    const main   = document.getElementById('main');\n    const headerContent = `\n      <p>Loading...</p>\n    `;\n    const mainContent = `\n      <section id=\"board_content\">\n      </section>\n    `;\n\n    header.innerHTML = headerContent;\n    main.innerHTML   = mainContent;\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/BoardPage/BoardIndex.js?");

/***/ }),

/***/ "./public/javascripts/Components/BoardPage/index.js":
/*!**********************************************************!*\
  !*** ./public/javascripts/Components/BoardPage/index.js ***!
  \**********************************************************/
/*! exports provided: BoardIndex, BoardContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BoardIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoardIndex.js */ \"./public/javascripts/Components/BoardPage/BoardIndex.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BoardIndex\", function() { return _BoardIndex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _BoardContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardContent.js */ \"./public/javascripts/Components/BoardPage/BoardContent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BoardContent\", function() { return _BoardContent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/BoardPage/index.js?");

/***/ }),

/***/ "./public/javascripts/Components/Headers/BoardHeader.js":
/*!**************************************************************!*\
  !*** ./public/javascripts/Components/Headers/BoardHeader.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BoardHeader; });\nclass BoardHeader {\n  constructor(props) {\n    this.props = props;\n\n    this.render               = this.render.bind(this);\n    this.bindEventListeners   = this.bindEventListeners.bind(this);\n    this.removeEventListeners = this.removeEventListeners.bind(this);\n    this.setupComponent       = this.setupComponent.bind(this);\n\n    this.setupComponent();\n  }\n\n  setupComponent() {\n    this.render();\n  }\n\n  bindEventListeners() {\n    // todo\n  }\n\n  removeEventListeners() {\n    // todo\n  }\n\n  render() {\n    const parent  = document.getElementById('page_header');\n    const content = `\n      <div>\n        <h2>/${this.props.board.slug}/ - ${this.props.board.title}</h2>\n      </div>\n    `\n\n    parent.innerHTML = content;\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/Headers/BoardHeader.js?");

/***/ }),

/***/ "./public/javascripts/Components/Headers/HeaderNav.js":
/*!************************************************************!*\
  !*** ./public/javascripts/Components/Headers/HeaderNav.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HeaderNav; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./public/javascripts/Components/Headers/index.js\");\n/* harmony import */ var _services_api_boards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api/boards */ \"./public/javascripts/services/api/boards/index.js\");\n\n\n\nclass HeaderNav {\n  constructor(props) {\n    this.props = props;\n    this.state = {\n      boards: [],\n      boardComponents: []\n    };\n\n    this.render               = this.render.bind(this);\n    this.fetchBoards          = this.fetchBoards.bind(this);\n    this.renderBoardListItems = this.renderBoardListItems.bind(this);\n    this.removeEventListeners = this.removeEventListeners.bind(this);\n    this.setupComponent       = this.setupComponent.bind(this);\n\n    this.setupComponent();\n  }\n\n  setupComponent() {\n    this.render();\n    this.fetchBoards();\n  }\n\n  removeEventListeners() {\n    this.state.boardComponents.forEach((child) => {\n      child.removeEventListeners();\n    });\n  }\n\n  fetchBoards() {\n    return Object(_services_api_boards__WEBPACK_IMPORTED_MODULE_1__[\"getBoardsAPI\"])()\n      .then((data) => {\n        this.state.boards = data;\n        this.renderBoardListItems();\n      }).catch((err) => {\n        this.props.displayMessage('There was an error displaying this page');\n      });\n  }\n\n  renderBoardListItems() {\n    let boardComponents = [];\n\n    this.state.boards.forEach((board) => {\n      boardComponents.push(new ___WEBPACK_IMPORTED_MODULE_0__[\"NavBoardListItem\"]({\n        navigate: this.props.navigate,\n        displayMessage: this.props.displayMessage,\n        board: board\n      }));\n    });\n\n    boardComponents.push(new ___WEBPACK_IMPORTED_MODULE_0__[\"NavBoardListItem\"]({\n      navigate: this.props.navigate,\n      displayMessage: this.props.displayMessage,\n      board: { slug: 'home', home: true }\n    }));\n\n    this.state.boardComponents = boardComponents;\n  }\n\n  render() {\n    const headerNav = document.getElementById('header_nav');\n    const content   = `\n      <ul id=\"header_nav_list\"></ul>\n    `;\n\n    headerNav.innerHTML = content;\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/Headers/HeaderNav.js?");

/***/ }),

/***/ "./public/javascripts/Components/Headers/IndexHeader.js":
/*!**************************************************************!*\
  !*** ./public/javascripts/Components/Headers/IndexHeader.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IndexHeader; });\nclass IndexHeader {\n  constructor() {\n    this.render = this.render.bind(this);\n    this.removeEventListeners = this.removeEventListeners.bind(this);\n\n    this.render();\n  }\n\n  removeEventListeners() {\n    // todo\n  }\n\n  render() {\n    const headerContainer = document.getElementById('page_header');\n    const content = `\n      <div>\n        <h1>5chan</h1>\n      </div>\n    `;\n\n    headerContainer.innerHTML = content;\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/Headers/IndexHeader.js?");

/***/ }),

/***/ "./public/javascripts/Components/Headers/NavBoardListItem.js":
/*!*******************************************************************!*\
  !*** ./public/javascripts/Components/Headers/NavBoardListItem.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NavBoardListItem; });\nclass NavBoardListItem {\n  constructor(props) {\n    this.props = props;\n    this.state = {\n      board: props.board\n    }\n\n    this.render               = this.render.bind(this);\n    this.bindEventListeners   = this.bindEventListeners.bind(this);\n    this.removeEventListeners = this.removeEventListeners.bind(this);\n    this.navigateToLink       = this.navigateToLink.bind(this);\n    this.setupComponent       = this.setupComponent.bind(this);\n\n    this.setupComponent();\n  }\n\n  setupComponent() {\n    if (this.state.board) {\n      this.state.componentID = `header_nav_list_item_${this.state.board.slug}`;\n      this.render();\n      this.bindEventListeners();\n    }\n  }\n\n  bindEventListeners() {\n    const component = document.getElementById(this.state.componentID);\n    component.addEventListener('click', this.navigateToLink);\n  }\n\n  removeEventListeners() {\n    const component = document.getElementById(this.state.componentID);\n    component.removeEventListener('click', this.navigateToLink);\n  }\n\n  navigateToLink(e) {\n    e.preventDefault();\n    if (!!this.state.board.home) {\n      this.props.navigate('/');\n    } else {\n      let path = `/boards/${e.target.id.replace('header_nav_list_item_', '')}`;\n      this.props.navigate(path);\n    }\n  }\n\n  render() {\n    const parent = document.getElementById('header_nav_list');\n    const child  = document.createElement('LI');\n\n    child.className = 'header_nav_list_item';\n    child.innerHTML = `\n      <a id=\"${this.state.componentID}\" href=\"#\">${this.state.board.slug}</a>\n    `;\n\n    parent.appendChild(child);\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/Headers/NavBoardListItem.js?");

/***/ }),

/***/ "./public/javascripts/Components/Headers/index.js":
/*!********************************************************!*\
  !*** ./public/javascripts/Components/Headers/index.js ***!
  \********************************************************/
/*! exports provided: IndexHeader, BoardHeader, HeaderNav, NavBoardListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _IndexHeader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexHeader.js */ \"./public/javascripts/Components/Headers/IndexHeader.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"IndexHeader\", function() { return _IndexHeader_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _BoardHeader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardHeader.js */ \"./public/javascripts/Components/Headers/BoardHeader.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BoardHeader\", function() { return _BoardHeader_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _HeaderNav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderNav.js */ \"./public/javascripts/Components/Headers/HeaderNav.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"HeaderNav\", function() { return _HeaderNav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _NavBoardListItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavBoardListItem.js */ \"./public/javascripts/Components/Headers/NavBoardListItem.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"NavBoardListItem\", function() { return _NavBoardListItem_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/Headers/index.js?");

/***/ }),

/***/ "./public/javascripts/Components/IndexPage/IndexMain.js":
/*!**************************************************************!*\
  !*** ./public/javascripts/Components/IndexPage/IndexMain.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IndexMain; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./public/javascripts/Components/IndexPage/index.js\");\n/* harmony import */ var _Headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Headers */ \"./public/javascripts/Components/Headers/index.js\");\n\n\n\nclass IndexMain {\n  constructor(props) {\n    this.props = props;\n    this.state = {\n      childComponents: []\n    }\n\n    this.render               = this.render.bind(this);\n    this.bindEventListeners   = this.bindEventListeners.bind(this);\n    this.removeEventListeners = this.removeEventListeners.bind(this);\n    this.setupPage            = this.setupPage.bind(this);\n\n    this.setupPage();\n  }\n\n  setupPage() {\n    const props = {\n      navigate: this.props.navigate,\n      displayMessage: this.props.displayMessage\n    };\n\n    this.render();\n    this.bindEventListeners();\n    this.state.childComponents = this.state.childComponents.concat(\n      [ new _Headers__WEBPACK_IMPORTED_MODULE_1__[\"IndexHeader\"](), new ___WEBPACK_IMPORTED_MODULE_0__[\"MainBoardsList\"](props) ]\n    );\n  }\n\n  bindEventListeners() {\n    // todo\n  }\n\n  removeEventListeners() {\n    this.state.childComponents.forEach((child) => {\n      child.removeEventListeners();\n    });\n  }\n\n  render() {\n    const main    = document.getElementById('main');\n    const content = `\n      <h2>Index Page</h2>\n      <div id=\"index_boards\">\n      </div>\n    `;\n\n    main.innerHTML = content;\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/IndexPage/IndexMain.js?");

/***/ }),

/***/ "./public/javascripts/Components/IndexPage/MainBoardListItem.js":
/*!**********************************************************************!*\
  !*** ./public/javascripts/Components/IndexPage/MainBoardListItem.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainBoardListItem; });\nclass MainBoardListItem {\n  constructor(props) {\n    this.props = props;\n    this.state = {\n      board: props.board\n    }\n\n    this.render               = this.render.bind(this);\n    this.bindEventListeners   = this.bindEventListeners.bind(this);\n    this.removeEventListeners = this.removeEventListeners.bind(this);\n    this.navigateToLink       = this.navigateToLink.bind(this);\n    this.setupComponent       = this.setupComponent.bind(this);\n\n    this.setupComponent();\n  }\n\n  setupComponent() {\n    if (this.state.board) {\n      this.state.componentID = `main_board_list_item_${this.state.board.slug}`;\n      this.render();\n      this.bindEventListeners();\n    }\n  }\n\n  bindEventListeners() {\n    const component = document.getElementById(this.state.componentID);\n    component.addEventListener('click', this.navigateToLink);\n  }\n\n  removeEventListeners() {\n    const component = document.getElementById(this.state.componentID);\n    component.removeEventListener('click', this.navigateToLink);\n  }\n\n  navigateToLink(e) {\n    e.preventDefault();\n    let path = `/boards/${e.target.id.replace('main_board_list_item_', '')}`;\n    this.props.navigate(path);\n  }\n\n  render() {\n    const parent = document.getElementById('index_boards_list');\n    const child  = document.createElement('LI');\n\n    child.className = 'main_board_list_item';\n    child.innerHTML = `\n      <a id=\"${this.state.componentID}\" href=\"#\">${this.state.board.title}</a>\n    `;\n\n    parent.appendChild(child);\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/IndexPage/MainBoardListItem.js?");

/***/ }),

/***/ "./public/javascripts/Components/IndexPage/MainBoardsList.js":
/*!*******************************************************************!*\
  !*** ./public/javascripts/Components/IndexPage/MainBoardsList.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainBoardsList; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./public/javascripts/Components/IndexPage/index.js\");\n/* harmony import */ var _services_api_boards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api/boards */ \"./public/javascripts/services/api/boards/index.js\");\n\n\n\nclass MainBoardsList {\n  constructor(props) {\n    this.props = props;\n    this.state = {\n      boards: [],\n      boardComponents: []\n    }\n\n    this.render               = this.render.bind(this);\n    this.fetchBoards          = this.fetchBoards.bind(this);\n    this.renderBoardListItems = this.renderBoardListItems.bind(this);\n    this.bindEventListeners   = this.bindEventListeners.bind(this);\n    this.removeEventListeners = this.removeEventListeners.bind(this);\n    this.setupComponent       = this.setupComponent.bind(this);\n\n    this.setupComponent();\n  }\n\n  setupComponent() {\n    this.render();\n    this.fetchBoards();\n  }\n\n  bindEventListeners() {\n    // todo\n  }\n\n  removeEventListeners() {\n    this.state.boardComponents.forEach((child) => {\n      child.removeEventListeners();\n    });\n  }\n\n  fetchBoards() {\n    return Object(_services_api_boards__WEBPACK_IMPORTED_MODULE_1__[\"getBoardsAPI\"])()\n      .then((data) => {\n        this.state.boards = data;\n        this.renderBoardListItems();\n      }).catch((err) => {\n        this.props.displayMessage('There was an error displaying this page');\n      });\n  }\n\n  renderBoardListItems() {\n    let boardComponents = [];\n\n    this.state.boards.forEach((board) => {\n      const props = {\n        navigate: this.props.navigate,\n        displayMessage: this.props.displayMessage,\n        board: board\n      };\n\n      boardComponents.push(new ___WEBPACK_IMPORTED_MODULE_0__[\"MainBoardListItem\"](props));\n    });\n\n    this.state.boardComponents = boardComponents;\n  }\n\n  render() {\n    const parent  = document.getElementById('index_boards');\n    const content = `\n      <ul id=\"index_boards_list\">\n      </ul>\n    `;\n\n    parent.innerHTML = content;\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/IndexPage/MainBoardsList.js?");

/***/ }),

/***/ "./public/javascripts/Components/IndexPage/index.js":
/*!**********************************************************!*\
  !*** ./public/javascripts/Components/IndexPage/index.js ***!
  \**********************************************************/
/*! exports provided: IndexMain, MainBoardsList, MainBoardListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _IndexMain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexMain.js */ \"./public/javascripts/Components/IndexPage/IndexMain.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"IndexMain\", function() { return _IndexMain_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _MainBoardsList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainBoardsList.js */ \"./public/javascripts/Components/IndexPage/MainBoardsList.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MainBoardsList\", function() { return _MainBoardsList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _MainBoardListItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainBoardListItem.js */ \"./public/javascripts/Components/IndexPage/MainBoardListItem.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MainBoardListItem\", function() { return _MainBoardListItem_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/IndexPage/index.js?");

/***/ }),

/***/ "./public/javascripts/main.js":
/*!************************************!*\
  !*** ./public/javascripts/main.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainApp; });\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./public/javascripts/App/index.js\");\n\n\nclass MainApp {\n  constructor() {\n    this.router   = new _App__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\n    this.setupApp = this.setupApp.bind(this);\n    this.setupApp();\n  }\n\n  setupApp() {\n    this.router.loadPage();\n  }\n}\n\nconst app = new MainApp();\n\n\n//# sourceURL=webpack:///./public/javascripts/main.js?");

/***/ }),

/***/ "./public/javascripts/services/api/boards/getBoardAPI.js":
/*!***************************************************************!*\
  !*** ./public/javascripts/services/api/boards/getBoardAPI.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((boardSlug) => {\n  return new Promise((resolve, reject) => {\n    const path = `/api/boards/${boardSlug}`;\n    let request = new XMLHttpRequest();\n\n    request.onreadystatechange = () => {\n      if (request.readyState === XMLHttpRequest.DONE) {\n        if (request.status === 200) {\n          resolve(JSON.parse(request.responseText));\n        } else {\n          reject(request.responseText);\n        }\n      }\n    }\n\n    request.open('GET', path);\n    request.send();\n  });\n});\n\n\n//# sourceURL=webpack:///./public/javascripts/services/api/boards/getBoardAPI.js?");

/***/ }),

/***/ "./public/javascripts/services/api/boards/getBoardsAPI.js":
/*!****************************************************************!*\
  !*** ./public/javascripts/services/api/boards/getBoardsAPI.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  return new Promise((resolve, reject) => {\n    const path = \"/api/boards\";\n    let request = new XMLHttpRequest();\n\n    request.onreadystatechange = () => {\n      if (request.readyState === XMLHttpRequest.DONE) {\n        if (request.status === 200) {\n          resolve(JSON.parse(request.responseText));\n        } else {\n          reject(request.responseText);\n        }\n      }\n    }\n\n    request.open('GET', path);\n    request.send();\n  });\n});\n\n\n//# sourceURL=webpack:///./public/javascripts/services/api/boards/getBoardsAPI.js?");

/***/ }),

/***/ "./public/javascripts/services/api/boards/index.js":
/*!*********************************************************!*\
  !*** ./public/javascripts/services/api/boards/index.js ***!
  \*********************************************************/
/*! exports provided: getBoardsAPI, getBoardAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getBoardsAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoardsAPI.js */ \"./public/javascripts/services/api/boards/getBoardsAPI.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getBoardsAPI\", function() { return _getBoardsAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _getBoardAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBoardAPI.js */ \"./public/javascripts/services/api/boards/getBoardAPI.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getBoardAPI\", function() { return _getBoardAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./public/javascripts/services/api/boards/index.js?");

/***/ })

/******/ });