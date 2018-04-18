import { PostForm } from '../Posts';

export default class BoardHeader {
  constructor(props) {
    this.props = props;
    this.state = {
      children: []
    };

    this.render               = this.render.bind(this);
    this.bindEventListeners   = this.bindEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.createPost           = this.createPost.bind(this);
    this.setupComponent       = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    this.render();
  }

  bindEventListeners() {
    // todo
  }

  removeEventListeners() {
    this.state.children.forEach((child) => {
      child.removeEventListeners();
    });
  }

  createPost(post) {
    // todo
  }

  render() {
    const parent  = document.getElementById('page_header');
    const props   = {
      navigate: this.props.navigate,
      displayMessage: this.props.displayMessage,
      createPost: this.createPost,
      comment: false
    };
    const content = `
      <div>
        <h2>/${this.props.board.slug}/ - ${this.props.board.title}</h2>
        <div id="form_wrapper">
        </div>
      </div>
    `

    parent.innerHTML = content;
    this.state.children = this.state.children.concat([ new PostForm(props) ]);
  }
}
