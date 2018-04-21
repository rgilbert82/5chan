import { CommentsList }  from  '.';
import { deletePostAPI }  from '../../services/api/posts';
import { deletePhotoAPI } from '../../services/aws';

export default class PostContent {
  constructor(props) {
    this.props = props;
    this.state = {
      commentsList: null
    }

    this.render               = this.render.bind(this);
    this.bindEventListeners   = this.bindEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.deletePost           = this.deletePost.bind(this);
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
    const deleteLink   = document.getElementById('post_page_content').getElementsByClassName('delete_post_link')[0];

    if (deleteLink) {
      deleteLink.addEventListener('click', this.deletePost);
    }

    if (imageWrapper) {
      imageWrapper.getElementsByTagName('img')[0].addEventListener('click', this.toggleImageSize);
    }
  }

  removeEventListeners() {
    const imageWrapper = document.getElementsByClassName('post_image')[0];
    const deleteLink   = document.getElementById('post_page_content').getElementsByClassName('delete_post_link')[0];

    if (deleteLink) {
      deleteLink.removeEventListener('click', this.deletePost);
    }

    if (this.state.commentsList) {
      this.state.commentsList.removeEventListeners();
    }
    if (imageWrapper) {
      imageWrapper.getElementsByTagName('img')[0].removeEventListener('click', this.toggleImageSize);
    }
  }

  deletePost(e) {
    e.preventDefault();
    return deletePostAPI(this.props.post.id)
      .then(() => {
        if (!!this.props.post.image) {
          let image = this.props.post.image.replace('https://rg-5chan.s3.amazonaws.com/', '');
          deletePhotoAPI(image);
        }
        this.props.redirectToBoard(`/boards/${this.props.board.slug}`);
      }).catch(() => {
        this.props.displayMessage('There was an error deleting the post');
      });
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
      post:           this.props.post,
      loggedIn:       this.props.loggedIn,
      navigate:       this.props.navigate,
      displayMessage: this.props.displayMessage,
      parentElement:  'post_page_content'
    }

    this.state.commentsList = new CommentsList(props);
  }

  render() {
    const parent   = document.getElementById('page_content');
    const date     = new Date(this.props.post.created_at).toUTCString();
    let removeLink = '';
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

    if (!!this.props.loggedIn) {
      removeLink = `
        <a href="#" class="delete_post_link">Delete</a>
      `;
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
          ${removeLink}
        </div>
      </div>
    ` ;

    parent.innerHTML = content;
  }
}
