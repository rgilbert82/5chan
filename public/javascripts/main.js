import { Router } from './App';
import { MainTemplate } from './Containers';

export default class MainApp {
  constructor() {
    this.router = new Router();

    this.navigateToLink = this.navigateToLink.bind(this);

    this.mainTemplate = new MainTemplate();
    this.router.loadPage();
  }

  navigateToLink() {
    // todo
  }
}

const app = new MainApp();
