import { Router } from './Components/App';

export default class MainApp {
  constructor() {
    this.router   = new Router();
    this.setupApp = this.setupApp.bind(this);
    this.setupApp();
  }

  setupApp() {
    this.router.loadPage();
  }
}

const app = new MainApp();
