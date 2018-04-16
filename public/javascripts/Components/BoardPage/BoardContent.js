export default class BoardContent {
  constructor(props) {
    this.props = props;

    this.render = this.render.bind(this);
    this.bindEventListeners = this.bindEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.setupComponent = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    this.render();
  }

  bindEventListeners() {
    // todo
  }

  removeEventListeners() {
    // todo
  }

  render() {
    const parent = document.getElementById('board_content');
    const content = `
      <div>
        <ul>
          <li>Temp post 1</li>
          <li>Temp post 2</li>
          <li>Temp post 3</li>
        </ul>
      </div>
    `;

    parent.innerHTML = content;
  }
}
