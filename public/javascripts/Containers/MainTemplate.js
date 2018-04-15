export default class MainTemplate {
  constructor() {
    this.render = this.render.bind(this);
    this.setEventHandlers = this.setEventHandlers.bind(this);

    this.render();
    this.setEventHandlers();
  }

  setEventHandlers() {
    // todo
  }

  render() {
    const body = document.getElementsByTagName('body')[0];
    const content = `
      <header>
        <h1>5chan</h1>
      </header>

      <div id="main">
      </div>

      <footer>
      </footer>
    `;

    body.innerHTML = content;
  }
}
