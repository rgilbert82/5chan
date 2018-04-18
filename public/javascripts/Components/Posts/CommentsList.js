import { CommentListItem } from '.';
import { getCommentsAPI }  from '../../services/api/comments';

export default class CommentsList {
  constructor(props) {
    this.props = props;
    this.state = {
      comments: [],
      commentComponents: []
    }

    this.render               = this.render.bind(this);
    this.renderAllComments    = this.renderAllComments.bind(this);
    this.renderSingleComment  = this.renderSingleComment.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.fetchComments        = this.fetchComments.bind(this);
    this.setupComponent       = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    this.render();
    this.fetchComments();
  }

  removeEventListeners() {
    this.state.commentComponents.forEach((component) => {
      component.removeEventListeners();
    });
  }

  fetchComments() {
    return getCommentsAPI(this.props.post.id)
      .then((data) => {
        this.state.comments = data;
        this.renderAllComments();
      }).catch(() => {
        this.props.displayMessage('There was an error loading this page');
      });
  }

  renderSingleComment(commentData) {
    this.state.commentComponents = this.state.commentComponents.concat([ new CommentListItem({ parentElement: this.props.parentElement, comment: commentData }) ]);
  }

  renderAllComments() {
    let components = [];

    this.state.comments.forEach((comment) => {
      components.push(new CommentListItem({ parentElement: this.props.parentElement, comment: comment }));
    });

    this.state.commentComponents = components;
  }

  render() {
    const parent = document.getElementById(this.props.parentElement).getElementsByClassName('comments_list_wrapper')[0];
    const child  = `
      <ul class="comments_list">
      </ul>
    `;

    parent.innerHTML = child;
  }
}
