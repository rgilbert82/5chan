import { deleteCommentAPI } from  '../../services/api/comments';
import { deletePhotoAPI }   from '../../services/aws';

export default class CommentListItem {
  constructor(props) {
    this.props = props;

    this.render               = this.render.bind(this);
    this.bindEventListeners   = this.bindEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.deleteComment        = this.deleteComment.bind(this);
    this.setupComponent       = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    this.render();
    this.bindEventListeners();
  }

  bindEventListeners() {
    const deleteLink   = document.getElementById(`comment_list_item_${this.props.comment.id}`).getElementsByClassName('delete_comment_link')[0];

    if (deleteLink) {
      deleteLink.addEventListener('click', this.deleteComment);
    }
  }

  removeEventListeners() {
    const deleteLink   = document.getElementById(`comment_list_item_${this.props.comment.id}`).getElementsByClassName('delete_comment_link')[0];

    if (deleteLink) {
      deleteLink.removeEventListener('click', this.deleteComment);
    }
  }

  deleteComment(e) {
    e.preventDefault();

    return deleteCommentAPI(this.props.comment.id)
      .then(() => {
        if (!!this.props.comment.image) {
          let image = this.props.comment.image.replace('https://rg-5chan.s3.amazonaws.com/', '');
          deletePhotoAPI(image);
        }
        this.props.removeComment(this.props.comment.id);
      }).catch(() => {
        this.props.displayMessage('There was an error deleting the comment');
      });
  }

  render() {
    const parent   = document.getElementById(this.props.parentElement).getElementsByClassName('comments_list')[0];
    const date     = new Date(this.props.comment.created_at).toUTCString();
    let child      = document.createElement('LI');
    let removeLink = '';
    let imageDiv;

    child.id       = `comment_list_item_${this.props.comment.id}`;

    if (!!this.props.comment.image) {
      imageDiv = `<div class="comment_image"><img src="${this.props.comment.image}" alt="user uploaded pic"/></div>`;
    } else {
      imageDiv = '';
    }

    if (!!this.props.loggedIn) {
      removeLink = `
        <a href="#" class="delete_comment_link">Delete</a>
      `;
    }

    child.className = 'comment_list_item';
    child.innerHTML = `
      <div class="inner_comment">
        ${imageDiv}
        <div class="post_list_item_details">
          <span class="post_list_item_username">${this.props.comment.username}</span> <span class="post_list_item_date">${date}</span>
        </div>
        <p>${this.props.comment.body}</p>
        ${removeLink}
      </div>
    `;

    parent.appendChild(child);
  }
}
