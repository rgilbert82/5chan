import { PostForm } from '../Posts';

export default class BoardHeader {
  constructor(props) {
    this.props = props;
    this.state = {
      postForm: null
    };

    this.render               = this.render.bind(this);
    this.bindEventListeners   = this.bindEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.toggleForm           = this.toggleForm.bind(this);
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
    if (this.state.postForm) { this.state.postForm.removeEventListeners(); }
  }

  toggleForm() {
    if (this.state.postForm) { this.state.postForm.toggleForm(); }
  }

  render() {
    const parent  = document.getElementById('page_header');
    const props   = {
      navigate: this.props.navigate,
      displayMessage: this.props.displayMessage,
      createPost: this.props.createPost,
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
    this.state.postForm = new PostForm(props);
  }
}
