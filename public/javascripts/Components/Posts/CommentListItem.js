export default class CommentListItem {
  constructor(props) {
    this.props = props;

    this.render               = this.render.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.setupComponent       = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    this.render();
  }

  removeEventListeners() {
    // todo
  }

  render() {
    const parent = document.getElementById(this.props.parentElement).getElementsByClassName('comments_list')[0];
    const date   = new Date(this.props.comment.created_at).toUTCString();
    let child    = document.createElement('LI');
    let imageDiv;

    if (!!this.props.comment.image) {
      imageDiv = `<div class="comment_image"><img src="${this.props.comment.image}" alt="user uploaded pic"/></div>`;
    } else {
      imageDiv = '';
    }

    child.className = 'comment_list_item';
    child.innerHTML = `
      <div class="inner_comment">
        ${imageDiv}
        <div class="post_list_item_details">
          <span class="post_list_item_username">${this.props.comment.username}</span> <span class="post_list_item_date">${date}</span>
        </div>
        <p>${this.props.comment.body}</p>
      </div>
    `;

    parent.appendChild(child);
  }
}
