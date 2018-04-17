import { NavBoardListItem } from '.';
import { getBoardsAPI }     from '../../services/api/boards';

export default class HeaderNav {
  constructor(props) {
    this.props = props;
    this.state = {
      boards: [],
      boardComponents: []
    };

    this.render               = this.render.bind(this);
    this.fetchBoards          = this.fetchBoards.bind(this);
    this.renderBoardListItems = this.renderBoardListItems.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.setupComponent       = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    this.render();
    this.fetchBoards();
  }

  removeEventListeners() {
    this.state.boardComponents.forEach((child) => {
      child.removeEventListeners();
    });
  }

  fetchBoards() {
    return getBoardsAPI()
      .then((data) => {
        this.state.boards = data;
        this.renderBoardListItems();
      }).catch((err) => {
        this.props.displayMessage('There was an error displaying this page');
      });
  }

  renderBoardListItems() {
    let boardComponents = [];

    this.state.boards.forEach((board) => {
      boardComponents.push(new NavBoardListItem({
        navigate: this.props.navigate,
        displayMessage: this.props.displayMessage,
        board: board
      }));
    });

    boardComponents.push(new NavBoardListItem({
      navigate: this.props.navigate,
      displayMessage: this.props.displayMessage,
      board: { slug: 'home', home: true }
    }));

    this.state.boardComponents = boardComponents;
  }

  render() {
    const headerNav = document.getElementById('header_nav');
    const content   = `
      <ul id="header_nav_list"></ul>
    `;

    headerNav.innerHTML = content;
  }
}
