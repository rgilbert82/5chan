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
    this.toggleListItem       = this.toggleListItem.bind(this);
    this.toggleImageSize      = this.toggleImageSize.bind(this);
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
    const imageWrapper = document.getElementById(`board_post_list_item_${this.props.post.id}`).getElementsByClassName('post_image')[0];
    const replyLink    = document.getElementById(`board_post_list_item_${this.props.post.id}`).getElementsByClassName('post_reply_link')[0];
    const toggleButton = document.getElementById(`board_post_list_item_${this.props.post.id}`).getElementsByClassName('toggle_list_item_view')[0];

    if (imageWrapper) {
      imageWrapper.getElementsByTagName('img')[0].addEventListener('click', this.toggleImageSize);
    }

    replyLink.addEventListener('click', this.navigateToPostPage);
    toggleButton.addEventListener('click', this.toggleListItem);
  }

  removeEventListeners() {
    const imageWrapper = document.getElementById(`board_post_list_item_${this.props.post.id}`).getElementsByClassName('post_image')[0];
    const replyLink    = document.getElementById(`board_post_list_item_${this.props.post.id}`).getElementsByClassName('post_reply_link')[0];
    const toggleButton = document.getElementById(`board_post_list_item_${this.props.post.id}`).getElementsByClassName('toggle_list_item_view')[0];

    if (imageWrapper) {
      imageWrapper.getElementsByTagName('img')[0].removeEventListener('click', this.toggleImageSize);
    }

    replyLink.removeEventListener('click', this.navigateToPostPage);
    toggleButton.removeEventListener('click', this.toggleListItem);

    this.state.children.forEach((child) => {
      child.removeEventListeners();
    });
  }

  toggleListItem(e) {
    const parent    = document.getElementById(`board_post_list_item_${this.props.post.id}`);
    const headerBar = parent.getElementsByClassName('post_list_item_header_bar')[0];
    const innerPost = parent.getElementsByClassName('inner_post')[0];
    const spans     = headerBar.getElementsByTagName('span');

    for (let i = 0; i < spans.length; i++) {
      spans[i].classList.toggle('hidden');
    }

    innerPost.classList.toggle('hidden');
    headerBar.classList.toggle('opaque');
    e.target.innerText = (e.target.innerText === '-' ? '+' : '-');
  }

  toggleImageSize(e) {
    e.target.closest('div').classList.toggle('image_full_size');
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
    let fileName;

    child.className = 'board_post_list_item';
    child.id        = `board_post_list_item_${this.props.post.id}`;

    if (!!this.props.post.image) {
      imageDiv = `<div class="post_image"><img src="${this.props.post.image}" alt="user uploaded pic" /></div>`;
      fileName = `<a href="${this.props.post.image}" target="_blank">${this.props.post.image.substring(this.props.post.image.lastIndexOf('/')+1)}</a>`;
    } else {
      imageDiv = '';
      fileName = '<i>no file</i>';
    }

    child.innerHTML = `
      <div>
        <div class="post_list_item_header_bar">
          <button class="toggle_list_item_view">-</button>
          <span>File: ${fileName}</span>
          <span class="hidden post_list_item_username">${this.props.post.username}</span> <span class="hidden post_list_item_date">${date}</span>
        </div>
        <div class="inner_post">
          ${imageDiv}
          <div class="post_list_item_details">
            <span class="post_list_item_username">${this.props.post.username}</span> <span class="post_list_item_date">${date}</span>
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
