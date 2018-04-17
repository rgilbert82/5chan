import { CommentsList } from '.';

export default class PostListItem {
  constructor(props) {
    this.props = props;
    this.state = {
      children: []
    }

    this.render               = this.render.bind(this);
    this.bindEventListeners   = this.bindEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.setupCommentsList    = this.setupCommentsList.bind(this);
    this.setupComponent       = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    this.render();
    this.setupCommentsList();
  }

  bindEventListeners() {
    // todo
  }

  removeEventListeners() {
    this.state.children.forEach((child) => {
      child.removeEventListeners();
    });
  }

  setupCommentsList() {
    const props = {
      post: this.props.post,
      parentElement: `board_post_list_item_${this.props.post.id}`,
      navigate: this.props.navigate,
      displayMessage: this.props.displayMessage
    }

    this.state.children = this.state.children.concat([
      new CommentsList(props)
    ]);
  }

  render() {
    const parent = document.getElementById('board_posts_list');
    const date   = new Date(this.props.post.created_at).toUTCString();
    let child    = document.createElement('LI');

    child.className = 'board_post_list_item';
    child.id        = `board_post_list_item_${this.props.post.id}`;
    child.innerHTML = `
      <div>
        <div class="post_list_item_header_bar"></div>
        <div class="inner_post">
          <h3><b>${this.props.post.username}</b> on <small>${date}</small></h3>
          <p>${this.props.post.body}</p>
          <div class="comments_list_wrapper"></div>
        </div>
      </div>
    ` ;

    parent.insertBefore(child, parent.childNodes[0]);
  }
}
