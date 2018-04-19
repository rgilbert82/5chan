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
    this.navigateToPostPage   = this.navigateToPostPage.bind(this);
    this.setupCommentsList    = this.setupCommentsList.bind(this);
    this.setupComponent       = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    this.render();
    this.bindEventListeners();
    this.setupCommentsList();
  }

  bindEventListeners() {
    const replyLink = document.getElementById(`board_post_list_item_${this.props.post.id}`).getElementsByClassName('post_reply_link')[0];
    replyLink.addEventListener('click', this.navigateToPostPage);
  }

  removeEventListeners() {
    const replyLink = document.getElementById(`board_post_list_item_${this.props.post.id}`).getElementsByClassName('post_reply_link')[0];
    replyLink.removeEventListener('click', this.navigateToPostPage);

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

  navigateToPostPage(e) {
    e.preventDefault();

    const path = `${location.pathname}/thread/${this.props.post.slug}`;
    this.props.navigate(path);
  }

  render() {
    const parent = document.getElementById('board_posts_list');
    const date   = new Date(this.props.post.created_at).toUTCString();
    let child    = document.createElement('LI');
    let imageDiv;

    child.className = 'board_post_list_item';
    child.id        = `board_post_list_item_${this.props.post.id}`;

    if (!!this.props.post.image) {
      imageDiv = `<div class="post_image"><img src="${this.props.post.image}"></img></div>`;
    } else {
      imageDiv = '';
    }

    child.innerHTML = `
      <div>
        <div class="post_list_item_header_bar"></div>
        <div class="inner_post">
          ${imageDiv}
          <div class="post_list_item_details">
            <h3><b>${this.props.post.username}</b> on <small>${date}</small></h3>
            <span class="post_reply_link_wrapper">[<a class="post_reply_link" href="#">reply</a>]</span>
          </div>
          <p>${this.props.post.body}</p>
          <div class="comments_list_wrapper"></div>
        </div>
      </div>
    ` ;

    parent.insertBefore(child, parent.childNodes[0]);
  }
}
