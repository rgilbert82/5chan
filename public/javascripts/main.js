import { Router } from './Components/App';

export default class MainApp {
  constructor() {
    this.router = new Router();
  }
}

const app = new MainApp();
