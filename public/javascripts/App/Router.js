import { IndexMain } from '../Components/IndexPage';

export default class Router {
  constructor() {
    this.currentPage = null;

    this.bindEvents = this.bindEvents.bind(this);
    this.loadPage = this.loadPage.bind(this);
    this.navigate = this.navigate.bind(this);

    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener("replacestate", this.loadPage);
    window.addEventListener("pushstate", this.loadPage);
    window.addEventListener("popstate", this.loadPage);
  }

  navigate(path) {
    history.pushState({}, path, path);
    this.loadPage();
  }

  loadPage() {
    if (this.currentPage) {
      this.currentPage.removeEventListeners();
    }

    switch(location.pathname) {
      case '/':
        this.currentPage = new IndexMain();
        break;
    }
  }
}
