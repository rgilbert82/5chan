import { MessageBox } from '.';
import { IndexMain } from '../Components/IndexPage';
import { BoardIndex } from '../Components/BoardPage';

export default class Router {
  constructor() {
    this.currentPage = null;

    this.bindEvents = this.bindEvents.bind(this);
    this.loadPage = this.loadPage.bind(this);
    this.navigate = this.navigate.bind(this);
    this.displayMessage = this.displayMessage.bind(this);

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
      this.currentPage = new IndexMain(pageProps);
    } else if (path.match(/^\/boards\/\w+$/)) {
      this.currentPage = new BoardIndex(pageProps);
    }
  }
}
