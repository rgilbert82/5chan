import { CommentsList } from '.';

export default class PostContent {
  constructor(props) {
    this.props = props;
    this.state = {
      commentsList: null
    }

    this.render               = this.render.bind(this);
    this.bindEventListeners   = this.bindEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.toggleImageSize      = this.toggleImageSize.bind(this);
    this.setupCommentsList    = this.setupCommentsList.bind(this);
    this.renderSingleComment  = this.renderSingleComment.bind(this);
    this.setupComponent       = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    this.render();
    this.bindEventListeners();
    this.setupCommentsList();
  }

  bindEventListeners() {
    const imageWrapper = document.getElementsByClassName('post_image')[0];

    if (imageWrapper) {
      imageWrapper.getElementsByTagName('img')[0].addEventListener('click', this.toggleImageSize);
    }
  }

  removeEventListeners() {
    const imageWrapper = document.getElementsByClassName('post_image')[0];

    if (this.state.commentsList) {
      this.state.commentsList.removeEventListeners();
    }
    if (imageWrapper) {
      imageWrapper.getElementsByTagName('img')[0].removeEventListener('click', this.toggleImageSize);
    }
  }

  renderSingleComment(commentData) {
    if (this.state.commentsList) {
      this.state.commentsList.renderSingleComment(commentData);
    }
  }

  toggleImageSize(e) {
    e.target.closest('div').classList.toggle('image_full_size');
  }

  setupCommentsList() {
    const props = {
      post: this.props.post,
      parentElement: 'post_page_content',
      navigate: this.props.navigate,
      displayMessage: this.props.displayMessage
    }

    this.state.commentsList = new CommentsList(props);
  }

  render() {
    const parent  = document.getElementById('page_content');
    const date    = new Date(this.props.post.created_at).toUTCString();
    let imageDiv;
    let content;

    if (!!this.props.post.image) {
      imageDiv = `<div class="post_image">
                    <img src="${this.props.post.image}" alt="user uploaded pic" />
                    <a href="${this.props.post.image}" target="_blank">${this.props.post.image.substring(this.props.post.image.lastIndexOf('/')+1)}</a>
                  </div>
      `;
    } else {
      imageDiv = '';
    }

    content = `
      <div id="post_page_content">
        <div class="inner_post">
          ${imageDiv}
          <div class="post_list_item_details">
            <span class="post_list_item_username">${this.props.post.username}</span> <span class="post_list_item_date">${date}</span>
          </div>
          <p>${this.props.post.body}</p>
          <div class="comments_list_wrapper"></div>
        </div>
      </div>
    ` ;

    parent.innerHTML = content;
  }
}
