export default class CommentListItem {
  constructor(props) {
    this.props = props;

    this.render         = this.render.bind(this);
    this.setupComponent = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    this.render();
  }

  render() {
    const parent = document.getElementById(this.props.parentElement).getElementsByClassName('comments_list')[0];
    const date   = new Date(this.props.comment.created_at).toUTCString();
    let child    = document.createElement('LI');

    child.className = 'comment_list_item';
    child.innerHTML = `
      <div>
        <div class="comment_list_item_header_bar"></div>
        <div class="inner_comment">
          <h3><b>${this.props.comment.username}</b> on <small>${date}</small></h3>
          <p>${this.props.comment.body}</p>
        </div>
      </div>
    `;

    parent.appendChild(child);
  }
}
