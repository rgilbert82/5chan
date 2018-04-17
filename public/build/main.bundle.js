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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Router; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./public/javascripts/App/index.js\");\n/* harmony import */ var _Components_Headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Headers */ \"./public/javascripts/Components/Headers/index.js\");\n/* harmony import */ var _Components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/IndexPage */ \"./public/javascripts/Components/IndexPage/index.js\");\n/* harmony import */ var _Components_BoardPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/BoardPage */ \"./public/javascripts/Components/BoardPage/index.js\");\n/* harmony import */ var _Components_Posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Posts */ \"./public/javascripts/Components/Posts/index.js\");\n\n\n\n\n\n\nclass Router {\n  constructor() {\n    this.currentPage     = null;\n    this.headerNav       = null;\n\n    this.bindEvents      = this.bindEvents.bind(this);\n    this.loadPage        = this.loadPage.bind(this);\n    this.navigate        = this.navigate.bind(this);\n    this.redirectHome    = this.redirectHome.bind(this);\n    this.displayMessage  = this.displayMessage.bind(this);\n    this.setupHeaderNav  = this.setupHeaderNav.bind(this);\n    this.removeHeaderNav = this.removeHeaderNav.bind(this);\n\n    this.bindEvents();\n  }\n\n  bindEvents() {\n    window.addEventListener(\"replacestate\", this.loadPage);\n    window.addEventListener(\"pushstate\", this.loadPage);\n    window.addEventListener(\"popstate\", this.loadPage);\n  }\n\n  displayMessage(message) {\n    new ___WEBPACK_IMPORTED_MODULE_0__[\"MessageBox\"]({ message: message });\n  }\n\n  setupHeaderNav() {\n    const pageProps = {\n      navigate: this.navigate,\n      displayMessage: this.displayMessage\n    }\n\n    if (!this.headerNav) {\n      this.headerNav = new _Components_Headers__WEBPACK_IMPORTED_MODULE_1__[\"HeaderNav\"](pageProps);\n    }\n  }\n\n  removeHeaderNav() {\n    if (this.headerNav) {\n      this.headerNav.removeEventListeners();\n      this.headerNav = null;\n      document.getElementById('header_nav').innerHTML = '';\n    }\n  }\n\n  navigate(path) {\n    history.pushState({}, path, path);\n    this.loadPage();\n  }\n\n  redirectHome() {\n    history.replaceState({}, '/', '/');\n    this.loadPage();\n  }\n\n  loadPage() {\n    const path = location.pathname;\n    const pageProps = {\n      navigate: this.navigate,\n      displayMessage: this.displayMessage\n    }\n\n    if (this.currentPage) {\n      this.currentPage.removeEventListeners();\n    }\n\n    if (path === '/') {                                         // Home\n      this.removeHeaderNav();\n      this.currentPage = new _Components_IndexPage__WEBPACK_IMPORTED_MODULE_2__[\"IndexMain\"](pageProps);\n    } else if (path.match(/^\\/boards\\/\\w+$/)) {                 // Board Page\n      this.setupHeaderNav();\n      this.currentPage = new _Components_BoardPage__WEBPACK_IMPORTED_MODULE_3__[\"BoardIndex\"](pageProps);\n    } else if (path.match(/^\\/boards\\/\\w+\\/thread\\/\\w+$/)) {    // Post Page\n      this.setupHeaderNav();\n      this.currentPage = new _Components_Posts__WEBPACK_IMPORTED_MODULE_4__[\"PostPage\"](pageProps);\n    } else {\n      this.redirectHome();\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/App/Router.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BoardContent; });\n/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Posts */ \"./public/javascripts/Components/Posts/index.js\");\n/* harmony import */ var _services_api_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api/posts */ \"./public/javascripts/services/api/posts/index.js\");\n\n\n\nclass BoardContent {\n  constructor(props) {\n    this.props = props;\n    this.state = {\n      posts: [],\n      postComponents: []\n    }\n\n    this.render               = this.render.bind(this);\n    this.renderPosts          = this.renderPosts.bind(this);\n    this.removeEventListeners = this.removeEventListeners.bind(this);\n    this.fetchPosts           = this.fetchPosts.bind(this);\n    this.nothingHere          = this.nothingHere.bind(this);\n    this.setupComponent       = this.setupComponent.bind(this);\n\n    this.setupComponent();\n  }\n\n  setupComponent() {\n    this.render();\n    this.fetchPosts();\n  }\n\n  removeEventListeners() {\n    this.state.postComponents.forEach((component) => {\n      component.removeEventListeners();\n    });\n  }\n\n  fetchPosts() {\n    return Object(_services_api_posts__WEBPACK_IMPORTED_MODULE_1__[\"getPostsAPI\"])(this.props.board.id)\n      .then((data) => {\n        if (data.length > 0) {\n          this.state.posts = data;\n          this.renderPosts();\n        } else {\n          this.nothingHere();\n        }\n      }).catch(() => {\n        this.props.displayMessage('There was an error loading this page');\n      });\n  }\n\n  nothingHere() {\n    const list    = document.getElementById('board_posts_list');\n    const content = `\n      <p class=\"nothing_here\">This board has no posts yet. Post something!</p>\n    ` ;\n\n    list.innerHTML = content;\n  }\n\n  renderPosts() {\n    let components = [];\n\n    this.state.posts.forEach((post) => {\n      const props = {\n        post: post,\n        navigate: this.props.navigate,\n        displayMessage: this.props.displayMessage\n      }\n      components.push(new _Posts__WEBPACK_IMPORTED_MODULE_0__[\"PostListItem\"](props));\n    });\n\n    this.state.postComponents = components;\n  }\n\n  render() {\n    const parent = document.getElementById('board_content');\n    const content = `\n      <div>\n        <ul id=\"board_posts_list\">\n        </ul>\n      </div>\n    `;\n\n    parent.innerHTML = content;\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/BoardPage/BoardContent.js?");

/***/ }),

/***/ "./public/javascripts/Components/BoardPage/BoardIndex.js":
/*!***************************************************************!*\
  !*** ./public/javascripts/Components/BoardPage/BoardIndex.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BoardIndex; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./public/javascripts/Components/BoardPage/index.js\");\n/* harmony import */ var _Headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Headers */ \"./public/javascripts/Components/Headers/index.js\");\n/* harmony import */ var _services_api_boards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/boards */ \"./public/javascripts/services/api/boards/index.js\");\n\n\n\n\nclass BoardIndex {\n  constructor(props) {\n    this.props = props;\n    this.state = {\n      children: []\n    };\n\n    this.render               = this.render.bind(this);\n    this.removeEventListeners = this.removeEventListeners.bind(this);\n    this.fetchBoard           = this.fetchBoard.bind(this);\n    this.setupComponent       = this.setupComponent.bind(this);\n\n    this.setupComponent();\n  }\n\n  setupComponent() {\n    this.render();\n    this.fetchBoard();\n  }\n\n  removeEventListeners() {\n    this.state.children.forEach((child) => {\n      child.removeEventListeners();\n    });\n\n    this.state.children = [];\n  }\n\n  fetchBoard() {\n    const boardSlug = location.pathname.replace('/boards/', '');\n    return Object(_services_api_boards__WEBPACK_IMPORTED_MODULE_2__[\"getBoardAPI\"])(boardSlug)\n      .then((data) => {\n        const props   = {\n          board: data,\n          navigate: this.props.navigate,\n          displayMessage: this.props.displayMessage\n        }\n        const header  = new _Headers__WEBPACK_IMPORTED_MODULE_1__[\"BoardHeader\"](props);\n        const content = new ___WEBPACK_IMPORTED_MODULE_0__[\"BoardContent\"](props);\n\n        this.state.children = this.state.children.concat([ header, content ]);\n      }).catch((err) => {\n        this.props.displayMessage('There was an error loading this page');\n      });\n  }\n\n  render() {\n    const boardSlug = location.pathname.replace('/boards/', '');\n    const header    = document.getElementById('page_header');\n    const main      = document.getElementById('main');\n    const headerContent = `\n      <p>Loading...</p>\n    `;\n    const mainContent = `\n      <section id=\"board_content\">\n      </section>\n    `;\n\n    document.title   = `5chan - /${boardSlug}/`;\n    header.innerHTML = headerContent;\n    main.innerHTML   = mainContent;\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/BoardPage/BoardIndex.js?");

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

/***/ "./public/javascripts/Components/Headers/PostHeader.js":
/*!*************************************************************!*\
  !*** ./public/javascripts/Components/Headers/PostHeader.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PostHeader; });\nclass PostHeader {\n  constructor(props) {\n    this.props = props;\n\n    this.render               = this.render.bind(this);\n    this.bindEventListeners   = this.bindEventListeners.bind(this);\n    this.removeEventListeners = this.removeEventListeners.bind(this);\n    this.navigateToBoard      = this.navigateToBoard.bind(this);\n    this.setupComponent       = this.setupComponent.bind(this);\n\n    this.setupComponent();\n  }\n\n  setupComponent() {\n    this.render();\n    this.bindEventListeners();\n  }\n\n  bindEventListeners() {\n    const boardLink = document.getElementById('transition_to_board_link');\n    boardLink.addEventListener('click', this.navigateToBoard);\n  }\n\n  removeEventListeners() {\n    const boardLink = document.getElementById('transition_to_board_link');\n    boardLink.removeEventListener('click', this.navigateToBoard);\n  }\n\n  navigateToBoard(e) {\n    e.preventDefault();\n\n    const path = `/boards/${this.props.board.slug}`;\n    this.props.navigate(path);\n  }\n\n  render() {\n    const parent  = document.getElementById('page_header');\n    const content = `\n      <div>\n        <h2><a id=\"transition_to_board_link\" href=\"\">/${this.props.board.slug}/ - ${this.props.board.title}</a></h2>\n        <p>Post a Reply</p>\n      </div>\n    `\n\n    parent.innerHTML = content;\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/Headers/PostHeader.js?");

/***/ }),

/***/ "./public/javascripts/Components/Headers/index.js":
/*!********************************************************!*\
  !*** ./public/javascripts/Components/Headers/index.js ***!
  \********************************************************/
/*! exports provided: IndexHeader, BoardHeader, PostHeader, HeaderNav, NavBoardListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _IndexHeader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexHeader.js */ \"./public/javascripts/Components/Headers/IndexHeader.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"IndexHeader\", function() { return _IndexHeader_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _BoardHeader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardHeader.js */ \"./public/javascripts/Components/Headers/BoardHeader.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BoardHeader\", function() { return _BoardHeader_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _PostHeader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostHeader.js */ \"./public/javascripts/Components/Headers/PostHeader.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PostHeader\", function() { return _PostHeader_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _HeaderNav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderNav.js */ \"./public/javascripts/Components/Headers/HeaderNav.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"HeaderNav\", function() { return _HeaderNav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _NavBoardListItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavBoardListItem.js */ \"./public/javascripts/Components/Headers/NavBoardListItem.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"NavBoardListItem\", function() { return _NavBoardListItem_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/Headers/index.js?");

/***/ }),

/***/ "./public/javascripts/Components/IndexPage/IndexMain.js":
/*!**************************************************************!*\
  !*** ./public/javascripts/Components/IndexPage/IndexMain.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IndexMain; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./public/javascripts/Components/IndexPage/index.js\");\n/* harmony import */ var _Headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Headers */ \"./public/javascripts/Components/Headers/index.js\");\n\n\n\nclass IndexMain {\n  constructor(props) {\n    this.props = props;\n    this.state = {\n      childComponents: []\n    }\n\n    this.render               = this.render.bind(this);\n    this.removeEventListeners = this.removeEventListeners.bind(this);\n    this.setupPage            = this.setupPage.bind(this);\n\n    this.setupPage();\n  }\n\n  setupPage() {\n    const props = {\n      navigate: this.props.navigate,\n      displayMessage: this.props.displayMessage\n    };\n\n    this.render();\n    this.state.childComponents = this.state.childComponents.concat(\n      [ new _Headers__WEBPACK_IMPORTED_MODULE_1__[\"IndexHeader\"](), new ___WEBPACK_IMPORTED_MODULE_0__[\"MainBoardsList\"](props) ]\n    );\n  }\n\n  removeEventListeners() {\n    this.state.childComponents.forEach((child) => {\n      child.removeEventListeners();\n    });\n  }\n\n  render() {\n    const main    = document.getElementById('main');\n    const content = `\n      <h2>Index Page</h2>\n      <div id=\"index_boards\">\n      </div>\n    `;\n\n    document.title = '5chan';\n    main.innerHTML = content;\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/IndexPage/IndexMain.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainBoardsList; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./public/javascripts/Components/IndexPage/index.js\");\n/* harmony import */ var _services_api_boards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api/boards */ \"./public/javascripts/services/api/boards/index.js\");\n\n\n\nclass MainBoardsList {\n  constructor(props) {\n    this.props = props;\n    this.state = {\n      boards: [],\n      boardComponents: []\n    }\n\n    this.render               = this.render.bind(this);\n    this.fetchBoards          = this.fetchBoards.bind(this);\n    this.renderBoardListItems = this.renderBoardListItems.bind(this);\n    this.removeEventListeners = this.removeEventListeners.bind(this);\n    this.setupComponent       = this.setupComponent.bind(this);\n\n    this.setupComponent();\n  }\n\n  setupComponent() {\n    this.render();\n    this.fetchBoards();\n  }\n\n  removeEventListeners() {\n    this.state.boardComponents.forEach((child) => {\n      child.removeEventListeners();\n    });\n  }\n\n  fetchBoards() {\n    return Object(_services_api_boards__WEBPACK_IMPORTED_MODULE_1__[\"getBoardsAPI\"])()\n      .then((data) => {\n        this.state.boards = data;\n        this.renderBoardListItems();\n      }).catch((err) => {\n        this.props.displayMessage('There was an error displaying this page');\n      });\n  }\n\n  renderBoardListItems() {\n    let boardComponents = [];\n\n    this.state.boards.forEach((board) => {\n      const props = {\n        navigate: this.props.navigate,\n        displayMessage: this.props.displayMessage,\n        board: board\n      };\n\n      boardComponents.push(new ___WEBPACK_IMPORTED_MODULE_0__[\"MainBoardListItem\"](props));\n    });\n\n    this.state.boardComponents = boardComponents;\n  }\n\n  render() {\n    const parent  = document.getElementById('index_boards');\n    const content = `\n      <ul id=\"index_boards_list\">\n      </ul>\n    `;\n\n    parent.innerHTML = content;\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/IndexPage/MainBoardsList.js?");

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

/***/ "./public/javascripts/Components/Posts/CommentListItem.js":
/*!****************************************************************!*\
  !*** ./public/javascripts/Components/Posts/CommentListItem.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CommentListItem; });\nclass CommentListItem {\n  constructor(props) {\n    this.props = props;\n\n    this.render         = this.render.bind(this);\n    this.setupComponent = this.setupComponent.bind(this);\n\n    this.setupComponent();\n  }\n\n  setupComponent() {\n    this.render();\n  }\n\n  render() {\n    const parent = document.getElementById(this.props.parentElement).getElementsByClassName('comments_list')[0];\n    const date   = new Date(this.props.comment.created_at).toUTCString();\n    let child    = document.createElement('LI');\n\n    child.className = 'comment_list_item';\n    child.innerHTML = `\n      <div>\n        <div class=\"comment_list_item_header_bar\"></div>\n        <div class=\"inner_comment\">\n          <h3><b>${this.props.comment.username}</b> on <small>${date}</small></h3>\n          <p>${this.props.comment.body}</p>\n        </div>\n      </div>\n    `;\n\n    parent.appendChild(child);\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/Posts/CommentListItem.js?");

/***/ }),

/***/ "./public/javascripts/Components/Posts/CommentsList.js":
/*!*************************************************************!*\
  !*** ./public/javascripts/Components/Posts/CommentsList.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CommentsList; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./public/javascripts/Components/Posts/index.js\");\n/* harmony import */ var _services_api_comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api/comments */ \"./public/javascripts/services/api/comments/index.js\");\n\n\n\nclass CommentsList {\n  constructor(props) {\n    this.props = props;\n    this.state = {\n      comments: [],\n      commentComponents: []\n    }\n\n    this.render               = this.render.bind(this);\n    this.renderComments       = this.renderComments.bind(this);\n    this.bindEventListeners   = this.bindEventListeners.bind(this);\n    this.removeEventListeners = this.removeEventListeners.bind(this);\n    this.fetchComments        = this.fetchComments.bind(this);\n    this.setupComponent       = this.setupComponent.bind(this);\n\n    this.setupComponent();\n  }\n\n  setupComponent() {\n    this.render();\n    this.fetchComments();\n  }\n\n  bindEventListeners() {\n    // todo\n  }\n\n  removeEventListeners() {\n    // todo\n  }\n\n  fetchComments() {\n    return Object(_services_api_comments__WEBPACK_IMPORTED_MODULE_1__[\"getCommentsAPI\"])(this.props.post.id)\n      .then((data) => {\n        this.state.comments = data;\n        this.renderComments();\n      }).catch(() => {\n        this.props.displayMessage('There was an error loading this page');\n      });\n  }\n\n  renderComments() {\n    let components = [];\n\n    this.state.comments.forEach((comment) => {\n      components.push(new ___WEBPACK_IMPORTED_MODULE_0__[\"CommentListItem\"]({ parentElement: this.props.parentElement, comment: comment }));\n    });\n\n    this.state.commentComponents = components;\n  }\n\n  render() {\n    const parent = document.getElementById(this.props.parentElement).getElementsByClassName('comments_list_wrapper')[0];\n    const child  = `\n      <ul class=\"comments_list\">\n      </ul>\n    `;\n\n    parent.innerHTML = child;\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/Posts/CommentsList.js?");

/***/ }),

/***/ "./public/javascripts/Components/Posts/PostContent.js":
/*!************************************************************!*\
  !*** ./public/javascripts/Components/Posts/PostContent.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PostContent; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./public/javascripts/Components/Posts/index.js\");\n\n\nclass PostContent {\n  constructor(props) {\n    this.props = props;\n    this.state = {\n      children: []\n    }\n\n    this.render               = this.render.bind(this);\n    this.removeEventListeners = this.removeEventListeners.bind(this);\n    this.setupCommentsList    = this.setupCommentsList.bind(this);\n    this.setupComponent       = this.setupComponent.bind(this);\n\n    this.setupComponent();\n  }\n\n  setupComponent() {\n    this.render();\n    this.setupCommentsList();\n  }\n\n  removeEventListeners() {\n    this.state.children.forEach((child) => {\n      child.removeEventListeners();\n    });\n  }\n\n  setupCommentsList() {\n    const props = {\n      post: this.props.post,\n      parentElement: 'post_page_content',\n      navigate: this.props.navigate,\n      displayMessage: this.props.displayMessage\n    }\n\n    this.state.children = this.state.children.concat([\n      new ___WEBPACK_IMPORTED_MODULE_0__[\"CommentsList\"](props)\n    ]);\n  }\n\n  render() {\n    const parent  = document.getElementById('page_content');\n    const date    = new Date(this.props.post.created_at).toUTCString();\n    const content = `\n      <div id=\"post_page_content\">\n        <div class=\"inner_post\">\n          <div>\n            <h3><b>${this.props.post.username}</b> on <small>${date}</small></h3>\n          </div>\n          <p>${this.props.post.body}</p>\n          <div class=\"comments_list_wrapper\"></div>\n        </div>\n      </div>\n    ` ;\n\n    parent.innerHTML = content;\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/Posts/PostContent.js?");

/***/ }),

/***/ "./public/javascripts/Components/Posts/PostListItem.js":
/*!*************************************************************!*\
  !*** ./public/javascripts/Components/Posts/PostListItem.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PostListItem; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./public/javascripts/Components/Posts/index.js\");\n\n\nclass PostListItem {\n  constructor(props) {\n    this.props = props;\n    this.state = {\n      children: []\n    }\n\n    this.render               = this.render.bind(this);\n    this.bindEventListeners   = this.bindEventListeners.bind(this);\n    this.removeEventListeners = this.removeEventListeners.bind(this);\n    this.navigateToPostPage   = this.navigateToPostPage.bind(this);\n    this.setupCommentsList    = this.setupCommentsList.bind(this);\n    this.setupComponent       = this.setupComponent.bind(this);\n\n    this.setupComponent();\n  }\n\n  setupComponent() {\n    this.render();\n    this.bindEventListeners();\n    this.setupCommentsList();\n  }\n\n  bindEventListeners() {\n    const replyLink = document.getElementById(`board_post_list_item_${this.props.post.id}`).getElementsByClassName('post_reply_link')[0];\n    replyLink.addEventListener('click', this.navigateToPostPage);\n  }\n\n  removeEventListeners() {\n    const replyLink = document.getElementById(`board_post_list_item_${this.props.post.id}`).getElementsByClassName('post_reply_link')[0];\n    replyLink.removeEventListener('click', this.navigateToPostPage);\n\n    this.state.children.forEach((child) => {\n      child.removeEventListeners();\n    });\n  }\n\n  setupCommentsList() {\n    const props = {\n      post: this.props.post,\n      parentElement: `board_post_list_item_${this.props.post.id}`,\n      navigate: this.props.navigate,\n      displayMessage: this.props.displayMessage\n    }\n\n    this.state.children = this.state.children.concat([\n      new ___WEBPACK_IMPORTED_MODULE_0__[\"CommentsList\"](props)\n    ]);\n  }\n\n  navigateToPostPage(e) {\n    e.preventDefault();\n\n    const path = `${location.pathname}/thread/${this.props.post.slug}`;\n    this.props.navigate(path);\n  }\n\n  render() {\n    const parent = document.getElementById('board_posts_list');\n    const date   = new Date(this.props.post.created_at).toUTCString();\n    let child    = document.createElement('LI');\n\n    child.className = 'board_post_list_item';\n    child.id        = `board_post_list_item_${this.props.post.id}`;\n    child.innerHTML = `\n      <div>\n        <div class=\"post_list_item_header_bar\"></div>\n        <div class=\"inner_post\">\n          <div>\n            <h3><b>${this.props.post.username}</b> on <small>${date}</small></h3>\n            <span class=\"post_reply_link_wrapper\">[<a class=\"post_reply_link\" href=\"#\">reply</a>]</span>\n          </div>\n          <p>${this.props.post.body}</p>\n          <div class=\"comments_list_wrapper\"></div>\n        </div>\n      </div>\n    ` ;\n\n    parent.insertBefore(child, parent.childNodes[0]);\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/Posts/PostListItem.js?");

/***/ }),

/***/ "./public/javascripts/Components/Posts/PostPage.js":
/*!*********************************************************!*\
  !*** ./public/javascripts/Components/Posts/PostPage.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PostPage; });\n/* harmony import */ var _Headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Headers */ \"./public/javascripts/Components/Headers/index.js\");\n/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Posts */ \"./public/javascripts/Components/Posts/index.js\");\n/* harmony import */ var _services_api_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/posts */ \"./public/javascripts/services/api/posts/index.js\");\n\n\n\n\nclass PostPage {\n  constructor(props) {\n    this.props = props;\n    this.state = {\n      post: {},\n      board: {},\n      children: []\n    };\n\n    this.render               = this.render.bind(this);\n    this.bindEventListeners   = this.bindEventListeners.bind(this);\n    this.removeEventListeners = this.removeEventListeners.bind(this);\n    this.fetchPost            = this.fetchPost.bind(this);\n    this.setupComponent       = this.setupComponent.bind(this);\n\n    this.setupComponent();\n  }\n\n  setupComponent() {\n    this.render();\n    this.fetchPost();\n  }\n\n  bindEventListeners() {\n    // todo\n  }\n\n  removeEventListeners() {\n    this.state.children.forEach((child) => {\n      child.removeEventListeners();\n    });\n\n    this.state.children = [];\n  }\n\n  fetchPost() {\n    const postSlug = location.pathname.replace(/^\\/boards\\/\\w+\\/thread\\//, '');\n\n    return Object(_services_api_posts__WEBPACK_IMPORTED_MODULE_2__[\"getPostAPI\"])(postSlug)\n      .then((data) => {\n        const props   = {\n          post: data.post,\n          board: data.board,\n          navigate: this.props.navigate,\n          displayMessage: this.props.displayMessage\n        }\n        const header  = new _Headers__WEBPACK_IMPORTED_MODULE_0__[\"PostHeader\"](props);\n        const content = new _Posts__WEBPACK_IMPORTED_MODULE_1__[\"PostContent\"](props);\n\n        this.state.post     = data.post;\n        this.state.board    = data.board;\n        this.state.children = this.state.children.concat([ header, content ]);\n      }).catch((err) => {\n        this.props.displayMessage('There was an error loading this page');\n      });\n  }\n\n  render() {\n    const boardSlug = location.pathname.replace(/^\\/boards\\//, '').replace(/\\/thread\\/.+/, '');;\n    const postSlug  = location.pathname.replace(/^\\/boards\\/\\w+\\/thread\\//, '');\n    const header    = document.getElementById('page_header');\n    const main      = document.getElementById('main');\n    const headerContent = `\n      <p>Loading...</p>\n    `;\n    const mainContent = `\n      <section id=\"page_content\">\n      </section>\n    `;\n\n    document.title   = `/${boardSlug}/ - /${postSlug}/`;\n    header.innerHTML = headerContent;\n    main.innerHTML   = mainContent;\n  }\n}\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/Posts/PostPage.js?");

/***/ }),

/***/ "./public/javascripts/Components/Posts/index.js":
/*!******************************************************!*\
  !*** ./public/javascripts/Components/Posts/index.js ***!
  \******************************************************/
/*! exports provided: PostPage, PostContent, PostListItem, CommentsList, CommentListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PostPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostPage.js */ \"./public/javascripts/Components/Posts/PostPage.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PostPage\", function() { return _PostPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _PostContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostContent.js */ \"./public/javascripts/Components/Posts/PostContent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PostContent\", function() { return _PostContent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _PostListItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostListItem.js */ \"./public/javascripts/Components/Posts/PostListItem.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PostListItem\", function() { return _PostListItem_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _CommentsList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentsList.js */ \"./public/javascripts/Components/Posts/CommentsList.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CommentsList\", function() { return _CommentsList_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _CommentListItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentListItem.js */ \"./public/javascripts/Components/Posts/CommentListItem.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CommentListItem\", function() { return _CommentListItem_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./public/javascripts/Components/Posts/index.js?");

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

/***/ }),

/***/ "./public/javascripts/services/api/comments/getCommentsAPI.js":
/*!********************************************************************!*\
  !*** ./public/javascripts/services/api/comments/getCommentsAPI.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((postID) => {\n  return new Promise((resolve, reject) => {\n    const path  = `/api/posts/${postID}/comments`;\n    let request = new XMLHttpRequest();\n\n    request.onreadystatechange = () => {\n      if (request.readyState === XMLHttpRequest.DONE) {\n        if (request.status === 200) {\n          resolve(JSON.parse(request.responseText));\n        } else {\n          reject(request.responseText);\n        }\n      }\n    }\n\n    request.open('GET', path);\n    request.send();\n  });\n});\n\n\n//# sourceURL=webpack:///./public/javascripts/services/api/comments/getCommentsAPI.js?");

/***/ }),

/***/ "./public/javascripts/services/api/comments/index.js":
/*!***********************************************************!*\
  !*** ./public/javascripts/services/api/comments/index.js ***!
  \***********************************************************/
/*! exports provided: getCommentsAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getCommentsAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCommentsAPI.js */ \"./public/javascripts/services/api/comments/getCommentsAPI.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getCommentsAPI\", function() { return _getCommentsAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./public/javascripts/services/api/comments/index.js?");

/***/ }),

/***/ "./public/javascripts/services/api/posts/getPostAPI.js":
/*!*************************************************************!*\
  !*** ./public/javascripts/services/api/posts/getPostAPI.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((postSlug) => {\n  return new Promise((resolve, reject) => {\n    const path  = `/api/posts/${postSlug}`;\n    let request = new XMLHttpRequest();\n\n    request.onreadystatechange = () => {\n      if (request.readyState === XMLHttpRequest.DONE) {\n        if (request.status === 200) {\n          resolve(JSON.parse(request.responseText));\n        } else {\n          reject(request.responseText);\n        }\n      }\n    }\n\n    request.open('GET', path);\n    request.send();\n  });\n});\n\n\n//# sourceURL=webpack:///./public/javascripts/services/api/posts/getPostAPI.js?");

/***/ }),

/***/ "./public/javascripts/services/api/posts/getPostsAPI.js":
/*!**************************************************************!*\
  !*** ./public/javascripts/services/api/posts/getPostsAPI.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((boardID) => {\n  return new Promise((resolve, reject) => {\n    const path  = `/api/boards/${boardID}/posts`;\n    let request = new XMLHttpRequest();\n\n    request.onreadystatechange = () => {\n      if (request.readyState === XMLHttpRequest.DONE) {\n        if (request.status === 200) {\n          resolve(JSON.parse(request.responseText));\n        } else {\n          reject(request.responseText);\n        }\n      }\n    }\n\n    request.open('GET', path);\n    request.send();\n  });\n});\n\n\n//# sourceURL=webpack:///./public/javascripts/services/api/posts/getPostsAPI.js?");

/***/ }),

/***/ "./public/javascripts/services/api/posts/index.js":
/*!********************************************************!*\
  !*** ./public/javascripts/services/api/posts/index.js ***!
  \********************************************************/
/*! exports provided: getPostsAPI, getPostAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getPostsAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPostsAPI.js */ \"./public/javascripts/services/api/posts/getPostsAPI.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getPostsAPI\", function() { return _getPostsAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _getPostAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPostAPI.js */ \"./public/javascripts/services/api/posts/getPostAPI.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getPostAPI\", function() { return _getPostAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./public/javascripts/services/api/posts/index.js?");

/***/ })

/******/ });