import { PostContent }      from '../Posts';
import { PostHeader }       from '../Headers';
import { uploadPhotoAPI }   from '../../services/aws';
import { getPostAPI }       from '../../services/api/posts';
import { createCommentAPI } from '../../services/api/comments';

export default class PostPage {
  constructor(props) {
    this.props = props;
    this.state = {
      post: {},
      board: {},
      postHeader:  null,
      postContent: null
    };

    this.render               = this.render.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.fetchPost            = this.fetchPost.bind(this);
    this.createComment        = this.createComment.bind(this);
    this.uploadPhoto          = this.uploadPhoto.bind(this);
    this.addCommentToPost     = this.addCommentToPost.bind(this);
    this.setupComponent       = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    this.render();
    this.fetchPost();
  }

  removeEventListeners() {
    if (this.state.postHeader)  { this.state.postHeader.removeEventListeners(); }
    if (this.state.postContent) { this.state.postContent.removeEventListeners(); }
  }

  fetchPost() {
    const postSlug = location.pathname.replace(/^\/boards\/\w+\/thread\//, '');

    return getPostAPI(postSlug)
      .then((data) => {
        const props   = {
          post: data.post,
          board: data.board,
          navigate:       this.props.navigate,
          displayMessage: this.props.displayMessage,
          createPost:     this.uploadPhoto
        }

        this.state.postHeader  = new PostHeader(props);
        this.state.postContent = new PostContent(props);
        this.state.post     = data.post;
        this.state.board    = data.board;
      }).catch((err) => {
        document.getElementById('page_header').innerHTML = '';
        this.props.displayMessage('Oops! There seems to be nothing here.');
      });
  }

  createComment(commentData) {
    return createCommentAPI(commentData)
      .then((data) => {
        this.state.postHeader.toggleForm();
        this.addCommentToPost(data);
      }).catch((err) => {
        this.props.displayMessage('There was an error creating your comment');
      });
  }

  uploadPhoto(commentData) {
    return uploadPhotoAPI()
      .then((photoPath) => {
        commentData.image   = photoPath;
        commentData.post_id = this.state.post.id;
        this.createComment(commentData);
      }).catch((err) => {
        this.props.displayMessage('There was an error uploading your image');
      });
  }

  addCommentToPost(commentData) {
    if (this.state.postContent) {
      this.state.postContent.renderSingleComment(commentData);
    }
  }

  render() {
    const boardSlug = location.pathname.replace(/^\/boards\//, '').replace(/\/thread\/.+/, '');;
    const postSlug  = location.pathname.replace(/^\/boards\/\w+\/thread\//, '');
    const header    = document.getElementById('page_header');
    const main      = document.getElementById('main');
    const headerContent = `
      <p class="page_loading">Loading...</p>
    `;
    const mainContent = `
      <section id="page_content">
      </section>
    `;

    document.title   = `/${boardSlug}/ - /${postSlug}/`;
    header.innerHTML = headerContent;
    main.innerHTML   = mainContent;
  }
}
