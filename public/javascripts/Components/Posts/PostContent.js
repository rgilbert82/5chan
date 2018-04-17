import { CommentsList } from '.';

export default class PostContent {
  constructor(props) {
    this.props = props;
    this.state = {
      children: []
    }

    this.render               = this.render.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.setupCommentsList    = this.setupCommentsList.bind(this);
    this.setupComponent       = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    this.render();
    this.setupCommentsList();
  }

  removeEventListeners() {
    this.state.children.forEach((child) => {
      child.removeEventListeners();
    });
  }

  setupCommentsList() {
    const props = {
      post: this.props.post,
      parentElement: 'post_page_content',
      navigate: this.props.navigate,
      displayMessage: this.props.displayMessage
    }

    this.state.children = this.state.children.concat([
      new CommentsList(props)
    ]);
  }

  render() {
    const parent  = document.getElementById('page_content');
    const date    = new Date(this.props.post.created_at).toUTCString();
    const content = `
      <div id="post_page_content">
        <div class="inner_post">
          <div>
            <h3><b>${this.props.post.username}</b> on <small>${date}</small></h3>
          </div>
          <p>${this.props.post.body}</p>
          <div class="comments_list_wrapper"></div>
        </div>
      </div>
    ` ;

    parent.innerHTML = content;
  }
}
