export default class IndexMain {
  constructor() {
    this.render = this.render.bind(this);
    this.bindEventListeners = this.bindEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);

    this.render();
    this.bindEventListeners();
  }

  bindEventListeners() {
    // todo
  }

  removeEventListeners() {
    // todo
  }

  render() {
    const main = document.getElementById('main');
    const content = `
      <h2>Index Page</h2>
      <div id="index_boards">
      </div>
    `;

    main.innerHTML = content;
  }
}
