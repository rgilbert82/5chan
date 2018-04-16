export default class BoardHeader {
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
    const parent = document.getElementById('board_header');
    const content = `
      <div>
        <h2>${this.props.board.title}</h2>
      </div>
    `

    parent.innerHTML = content;
  }
}
