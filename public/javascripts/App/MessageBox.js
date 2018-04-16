export default class MessageBox {
  constructor(props) {
    this.props = props;
    this.render = this.render.bind(this);
    this.setupComponent = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    this.render();
  }

  render() {
    const parent = document.getElementById('message_box');
    const content = `
      <div>
        <h2>${this.props.message}</h2>
      </div>
    `;

    parent.innerHTML = content;
  }
}
