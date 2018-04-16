export default class IndexHeader {
  constructor() {
    this.render = this.render.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);

    this.render();
  }

  removeEventListeners() {
    // todo
  }

  render() {
    const headerContainer = document.getElementById('page_header');
    const content = `
      <div>
        <h1>5chan</h1>
      </div>
    `;

    headerContainer.innerHTML = content;
  }
}
