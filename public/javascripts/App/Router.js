import { MessageBox } from '.';
import { HeaderNav }  from '../Components/Headers';
import { IndexMain }  from '../Components/IndexPage';
import { BoardIndex } from '../Components/BoardPage';
import { PostPage }   from '../Components/Posts';

export default class Router {
  constructor() {
    this.currentPage     = null;
    this.headerNav       = null;

    this.bindEvents      = this.bindEvents.bind(this);
    this.loadPage        = this.loadPage.bind(this);
    this.navigate        = this.navigate.bind(this);
    this.redirectHome    = this.redirectHome.bind(this);
    this.displayMessage  = this.displayMessage.bind(this);
    this.setupHeaderNav  = this.setupHeaderNav.bind(this);
    this.removeHeaderNav = this.removeHeaderNav.bind(this);

    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener("replacestate", this.loadPage);
    window.addEventListener("pushstate", this.loadPage);
    window.addEventListener("popstate", this.loadPage);
  }

  displayMessage(message) {
    new MessageBox({ message: message });
  }

  setupHeaderNav() {
    const pageProps = {
      navigate: this.navigate,
      displayMessage: this.displayMessage
    }

    if (!this.headerNav) {
      this.headerNav = new HeaderNav(pageProps);
    }
  }

  removeHeaderNav() {
    if (this.headerNav) {
      this.headerNav.removeEventListeners();
      this.headerNav = null;
      document.getElementById('header_nav').innerHTML = '';
    }
  }

  navigate(path) {
    history.pushState({}, path, path);
    this.loadPage();
  }

  redirectHome() {
    history.replaceState({}, '/', '/');
    this.loadPage();
  }

  loadPage() {
    const path = location.pathname + location.search;
    const pageProps = {
      navigate: this.navigate,
      redirectHome: this.redirectHome,
      displayMessage: this.displayMessage
    }

    if (this.currentPage) {
      this.currentPage.removeEventListeners();
    }

    if (path === '/') {                                         // Home
      this.removeHeaderNav();
      this.currentPage = new IndexMain(pageProps);
    } else if (path.match(/^\/boards\/\w+(\?.+){0,}$/)) {       // Board Page
      this.setupHeaderNav();
      this.currentPage = new BoardIndex(pageProps);
    } else if (path.match(/^\/boards\/\w+\/thread\/\w+$/)) {    // Post Page
      this.setupHeaderNav();
      this.currentPage = new PostPage(pageProps);
    } else {                                                    // Redirect home for bad routes
      this.redirectHome();
    }
  }
}
