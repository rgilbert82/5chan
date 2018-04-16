import { MessageBox } from '.';
import { HeaderNav } from '../Components/Headers';
import { IndexMain } from '../Components/IndexPage';
import { BoardIndex } from '../Components/BoardPage';

export default class Router {
  constructor() {
    this.currentPage    = null;
    this.headerNav      = null;

    this.bindEvents      = this.bindEvents.bind(this);
    this.loadPage        = this.loadPage.bind(this);
    this.navigate        = this.navigate.bind(this);
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

  loadPage() {
    const path = location.pathname;
    const pageProps = {
      navigate: this.navigate,
      displayMessage: this.displayMessage
    }

    if (this.currentPage) {
      this.currentPage.removeEventListeners();
    }

    if (path === '/') {
      this.removeHeaderNav();
      this.currentPage = new IndexMain(pageProps);
    } else if (path.match(/^\/boards\/\w+$/)) {
      this.setupHeaderNav();
      this.currentPage = new BoardIndex(pageProps);
    }
  }
}
