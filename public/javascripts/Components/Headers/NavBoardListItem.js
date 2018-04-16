export default class NavBoardListItem {
  constructor(props) {
    this.props = props;
    this.state = {
      board: props.board
    }

    this.render               = this.render.bind(this);
    this.bindEventListeners   = this.bindEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.navigateToLink       = this.navigateToLink.bind(this);
    this.setupComponent       = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    if (this.state.board) {
      this.state.componentID = `header_nav_list_item_${this.state.board.slug}`;
      this.render();
      this.bindEventListeners();
    }
  }

  bindEventListeners() {
    const component = document.getElementById(this.state.componentID);
    component.addEventListener('click', this.navigateToLink);
  }

  removeEventListeners() {
    const component = document.getElementById(this.state.componentID);
    component.removeEventListener('click', this.navigateToLink);
  }

  navigateToLink(e) {
    e.preventDefault();
    if (!!this.state.board.home) {
      this.props.navigate('/');
    } else {
      let path = `/boards/${e.target.id.replace('header_nav_list_item_', '')}`;
      this.props.navigate(path);
    }
  }

  render() {
    const parent = document.getElementById('header_nav_list');
    const child  = document.createElement('LI');

    child.className = 'header_nav_list_item';
    child.innerHTML = `
      <a id="${this.state.componentID}" href="#">${this.state.board.slug}</a>
    `;

    parent.appendChild(child);
  }
}
