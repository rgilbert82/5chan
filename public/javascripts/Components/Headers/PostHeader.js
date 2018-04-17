export default class PostHeader {
  constructor(props) {
    this.props = props;

    this.render               = this.render.bind(this);
    this.bindEventListeners   = this.bindEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
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
  }

  navigateToBoard(e) {
    e.preventDefault();

    const path = `/boards/${this.props.board.slug}`;
    this.props.navigate(path);
  }

  render() {
    const parent  = document.getElementById('page_header');
    const content = `
      <div>
        <h2><a id="transition_to_board_link" href="">/${this.props.board.slug}/ - ${this.props.board.title}</a></h2>
        <p>Post a Reply</p>
      </div>
    `

    parent.innerHTML = content;
  }
}
