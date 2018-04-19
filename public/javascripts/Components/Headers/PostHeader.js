import { PostForm } from '../Posts';

export default class PostHeader {
  constructor(props) {
    this.props = props;
    this.state = {
      postForm: null
    }

    this.render               = this.render.bind(this);
    this.bindEventListeners   = this.bindEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.toggleForm           = this.toggleForm.bind(this);
    this.navigateToBoard      = this.navigateToBoard.bind(this);
    this.setupComponent       = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    this.render();
    this.bindEventListeners();
  }

  bindEventListeners() {
    const boardLink = document.getElementById('transition_to_board_link');
    boardLink.addEventListener('click', this.navigateToBoard);
  }

  removeEventListeners() {
    const boardLink = document.getElementById('transition_to_board_link');

    boardLink.removeEventListener('click', this.navigateToBoard);
    if (this.state.postForm) { this.state.postForm.removeEventListeners(); }
  }

  toggleForm() {
    if (this.state.postForm) { this.state.postForm.toggleForm(); }
  }

  navigateToBoard(e) {
    e.preventDefault();

    const path = `/boards/${this.props.board.slug}`;
    this.props.navigate(path);
  }

  render() {
    const parent  = document.getElementById('page_header');
    const props   = {
      navigate: this.props.navigate,
      displayMessage: this.props.displayMessage,
      createPost: this.props.createPost,
      comment: true
    };
    const content = `
      <div id="board_header">
        <div id="board_header_logo_box">5chan</div>
        <h2><a id="transition_to_board_link" href="">/${this.props.board.slug}/ - ${this.props.board.title}</a></h2>
        <div id="form_wrapper">
        </div>
      </div>
    `

    parent.innerHTML    = content;
    this.state.postForm = new PostForm(props);
  }
}
