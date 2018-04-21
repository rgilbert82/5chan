import { AdminLoginPage, MessageBox, FooterLink } from '.';
import { getAdminAPI, adminLogoutAPI } from '../../services/api/admins';
import { deleteToken, getToken } from '../../services/admins';
import { HeaderNav }  from '../Headers';
import { IndexMain }  from '../IndexPage';
import { BoardIndex } from '../BoardPage';
import { PostPage }   from '../Posts';

export default class Router {
  constructor() {
    this.state = {
      loggedIn:    false,
      currentPage: null,
      headerNav:   null,
      footerLink:  null
    };

    this.bindEvents      = this.bindEvents.bind(this);
    this.loadPage        = this.loadPage.bind(this);
    this.initialPageLoad = this.initialPageLoad.bind(this);
    this.navigate        = this.navigate.bind(this);
    this.redirectHome    = this.redirectHome.bind(this);
    this.displayMessage  = this.displayMessage.bind(this);
    this.setupHeaderNav  = this.setupHeaderNav.bind(this);
    this.removeHeaderNav = this.removeHeaderNav.bind(this);
    this.setToLoggedIn   = this.setToLoggedIn.bind(this);
    this.setToLoggedOut  = this.setToLoggedOut.bind(this);
    this.logoutSettings  = this.logoutSettings.bind(this);
    this.setupFooterLink = this.setupFooterLink.bind(this);
    this.setupRouter     = this.setupRouter.bind(this);

    this.setupRouter();
  }

  setupRouter() {
    this.bindEvents();
    this.initialPageLoad();
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

    if (!this.state.headerNav) {
      this.state.headerNav = new HeaderNav(pageProps);
    }
  }

  removeHeaderNav() {
    if (this.state.headerNav) {
      this.state.headerNav.removeEventListeners();
      this.state.headerNav = null;
      document.getElementById('header_nav').innerHTML = '';
    }
  }

  setupFooterLink() {
    if (this.state.footerLink) {
      this.state.footerLink.removeEventListeners();
    }

    this.state.footerLink = new FooterLink({
      loggedIn: this.state.loggedIn,
      navigate: this.navigate,
      setToLoggedOut: this.setToLoggedOut
    });
  }

  setToLoggedIn() {
    this.state.loggedIn = true;
    this.setupFooterLink();
  }

  setToLoggedOut() {
    return adminLogoutAPI()
      .then(() => {
        this.logoutSettings();
      }).catch((err) => {
        this.logoutSettings();
        console.log(err);
      });
  }

  logoutSettings() {
    deleteToken();
    this.state.loggedIn = false;
    this.setupFooterLink();

    if (location.pathname !== '/') {
      this.redirectHome();
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

  initialPageLoad() {
    if (!!getToken()) {
      return getAdminAPI()
        .then((data) => {
          this.setToLoggedIn();
          this.loadPage();
        }).catch((err) => {
          this.logoutSettings();
        });
    } else {
      this.setupFooterLink();
      this.loadPage();
    }
  }

  loadPage() {
    const path = location.pathname + location.search;
    const pageProps = {
      loggedIn:       this.state.loggedIn,
      navigate:       this.navigate,
      redirectHome:   this.redirectHome,
      displayMessage: this.displayMessage,
      setToLoggedIn:  this.setToLoggedIn,
      setToLoggedOut: this.setToLoggedOut
    }

    if (this.state.currentPage) {
      this.state.currentPage.removeEventListeners();
    }

    if (path === '/') {                                         // Home
      this.removeHeaderNav();
      this.state.currentPage = new IndexMain(pageProps);
    } else if (path.match(/^\/boards\/\w+(\?.+){0,}$/)) {       // Board Page
      this.setupHeaderNav();
      this.state.currentPage = new BoardIndex(pageProps);
    } else if (path.match(/^\/boards\/\w+\/thread\/\w+$/)) {    // Post Page
      this.setupHeaderNav();
      this.state.currentPage = new PostPage(pageProps);
    } else if (path.match(/^\/admin-login$/)) {                 // Admin Login page
      if (this.state.loggedIn) {
        this.redirectHome();
      } else {
        this.setupHeaderNav();
        this.state.currentPage = new AdminLoginPage(pageProps);
      }
    } else {                                                    // Redirect home for bad routes
      this.redirectHome();
    }
  }
}
