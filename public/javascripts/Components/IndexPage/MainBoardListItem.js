export default class MainBoardListItem {
  constructor(props) {
    this.props = props;
    this.state = {
      board: props.board
    }

    this.render = this.render.bind(this);
    this.bindEventListeners = this.bindEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.navigateToLink = this.navigateToLink.bind(this);
    this.setupComponent = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    if (this.state.board) {
      this.state.componentID = `main_board_list_item_${this.state.board.slug}`;
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
    let path = `/boards/${e.target.id.replace('main_board_list_item_', '')}`;
    this.props.navigate(path);
  }

  render() {
    const parent = document.getElementById('index_boards_list');
    const child  = document.createElement('LI');

    child.className = 'main_board_list_item';
    child.innerHTML = `
      <li class="main_board_list_item">
        <a id="${this.state.componentID}" href="#">${this.state.board.title}</a>
      </li>
    `;

    parent.appendChild(child);
  }
}
