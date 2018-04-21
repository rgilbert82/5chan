export default class MessageBox {
  constructor(props) {
    this.props = props;

    this.render               = this.render.bind(this);
    this.bindEventListeners   = this.bindEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.closeMessageWindow   = this.closeMessageWindow.bind(this);
    this.setupComponent       = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    this.render();
    this.bindEventListeners();
  }

  bindEventListeners() {
    const closeMessage = document.getElementById('close_message');
    closeMessage.addEventListener('click', this.closeMessageWindow);
  }

  removeEventListeners() {
    const closeMessage = document.getElementById('close_message');
    closeMessage.removeEventListener('click', this.closeMessageWindow);
  }

  closeMessageWindow(e) {
    e.preventDefault();

    this.removeEventListeners();
    document.getElementById('message_box').innerHTML = '';
  }

  render() {
    const parent  = document.getElementById('message_box');
    const content = `
      <div id="message_wrapper">
        <div id="message">
          <a id="close_message" href="#">&#xd7;</a>
          <p>${this.props.message}</p>
        </div>
      </div>
    `;

    parent.innerHTML = content;
  }
}
