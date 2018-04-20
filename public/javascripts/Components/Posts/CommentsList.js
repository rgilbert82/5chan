import { CommentListItem } from '.';
import { getCommentsAPI }  from '../../services/api/comments';

export default class CommentsList {
  constructor(props) {
    this.props = props;
    this.state = {
      comments: [],
      commentComponents: [],
      showThisManyComments: 8
    }

    this.render               = this.render.bind(this);
    this.rerender             = this.rerender.bind(this);
    this.renderAllComments    = this.renderAllComments.bind(this);
    this.renderSomeComments   = this.renderSomeComments.bind(this);
    this.renderSingleComment  = this.renderSingleComment.bind(this);
    this.bindEventListeners   = this.bindEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.clearCommentsList    = this.clearCommentsList.bind(this);
    this.fetchComments        = this.fetchComments.bind(this);
    this.setupComponent       = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    this.render();
    this.fetchComments();
  }

  bindEventListeners() {
    const showAllButton = document.getElementById(this.props.parentElement).getElementsByClassName('toggle_comments_list')[0];
    showAllButton.addEventListener('click', this.rerender);
  }

  removeEventListeners() {
    const showAllButton = document.getElementById(this.props.parentElement).getElementsByClassName('toggle_comments_list')[0];

    if (showAllButton) {
      showAllButton.removeEventListener('click', this.rerender);
    }

    this.state.commentComponents.forEach((component) => {
      component.removeEventListeners();
    });
  }

  fetchComments() {
    return getCommentsAPI(this.props.post.id)
      .then((data) => {
        this.state.comments = data;

        if (data.length <= this.state.showThisManyComments) {
          this.renderAllComments();
        } else {
          this.renderSomeComments();
        }
      }).catch(() => {
        this.props.displayMessage('There was an error loading this page');
      });
  }

  clearCommentsList() {
    const list    = document.getElementById(this.props.parentElement).getElementsByClassName('comments_list')[0];
    const showAll = document.getElementById(this.props.parentElement).getElementsByClassName('show_all_comments')[0];

    this.removeEventListeners();
    this.state.commentComponents = [];
    list.innerHTML    = '';
    showAll.innerHTML = '';
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

  renderSomeComments() {
    const showAllWrapper = document.getElementById(this.props.parentElement).getElementsByClassName('show_all_comments')[0];
    const showAllBar     = `
      <div class="show_all_comments_inner">
        <button class="toggle_comments_list">+</button>
        <span>Showing ${this.state.showThisManyComments} of ${this.state.comments.length} comments. Click to see all.</span>
      </div>
    `;
    let components = [];

    this.state.comments.slice(-this.state.showThisManyComments).forEach((comment) => {
      components.push(new CommentListItem({ parentElement: this.props.parentElement, comment: comment }));
    });

    showAllWrapper.innerHTML = showAllBar;
    this.bindEventListeners();
    this.state.commentComponents = components;
  }

  rerender() {
    this.clearCommentsList();
    this.renderAllComments();
  }

  render() {
    const parent = document.getElementById(this.props.parentElement).getElementsByClassName('comments_list_wrapper')[0];
    const child  = `
      <div class="show_all_comments"></div>
      <ul class="comments_list">
      </ul>
    `;

    parent.innerHTML = child;
  }
}
