import { BoardHeader, BoardContent } from '.';
import { getBoardAPI } from '../../services/api/boards';

export default class BoardIndex {
  constructor(props) {
    this.props = props;
    this.state = {
      children: []
    };

    this.render = this.render.bind(this);
    this.bindEventListeners = this.bindEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.fetchBoard = this.fetchBoard.bind(this);
    this.setupComponent = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    this.render();
    this.fetchBoard();
  }

  bindEventListeners() {
    // todo
  }

  removeEventListeners() {
    this.state.children.forEach((child) => {
      child.removeEventListeners();
    });

    this.state.children = [];
  }

  fetchBoard() {
    const boardSlug = location.pathname.replace('/boards/', '');
    return getBoardAPI(boardSlug)
      .then((data) => {
        const props   = {
          board: data,
          navigate: this.props.navigate,
          displayMessage: this.props.displayMessage
        }
        const header  = new BoardHeader(props);
        const content = new BoardContent(props);
        this.state.children = this.state.children.concat([ header, content ]);
      }).catch((err) => {
        this.props.displayMessage('There was an error loading this page');
      });
  }

  render() {
    const main = document.getElementById('main');
    const content = `
      <div>
        <div id="board_header">
          <p>Loading...</p>
        </div>
        <section id="board_content">
        </section>
      </div>
    `;

    main.innerHTML = content;
  }
}
