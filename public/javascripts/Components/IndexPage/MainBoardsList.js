import { MainBoardListItem } from '.';
import { getBoardsAPI } from '../../services/api/boards';

export default class MainBoardsList {
  constructor(props) {
    this.props = props;
    this.state = {
      boards: [],
      boardComponents: []
    }

    this.render = this.render.bind(this);
    this.fetchBoards = this.fetchBoards.bind(this);
    this.renderBoardListItems = this.renderBoardListItems.bind(this);
    this.bindEventListeners = this.bindEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.setupComponent = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    this.render();
    this.fetchBoards();
  }

  bindEventListeners() {
    // todo
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
      const props = {
        navigate: this.props.navigate,
        displayMessage: this.props.displayMessage,
        board: board
      };

      boardComponents.push(new MainBoardListItem(props));
    });

    this.state.boardComponents = boardComponents;
  }

  render() {
    const parent = document.getElementById('index_boards');
    const content = `
      <ul id="index_boards_list">
      </ul>
    `;

    parent.innerHTML = content;
  }
}
