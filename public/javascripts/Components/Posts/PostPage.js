import { PostHeader }  from '../Headers';
import { PostContent } from '../Posts';
import { getPostAPI }  from '../../services/api/posts';

export default class PostPage {
  constructor(props) {
    this.props = props;
    this.state = {
      post: {},
      board: {},
      children: []
    };

    this.render               = this.render.bind(this);
    this.bindEventListeners   = this.bindEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.fetchPost            = this.fetchPost.bind(this);
    this.setupComponent       = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    this.render();
    this.fetchPost();
  }

  bindEventListeners() {
    // todo
  }

  removeEventListeners() {
    this.state.children.forEach((child) => {
      child.removeEventListeners();
    });

    this.state.children = [];
  }

  fetchPost() {
    const postSlug = location.pathname.replace(/^\/boards\/\w+\/thread\//, '');

    return getPostAPI(postSlug)
      .then((data) => {
        const props   = {
          post: data.post,
          board: data.board,
          navigate: this.props.navigate,
          displayMessage: this.props.displayMessage
        }
        const header  = new PostHeader(props);
        const content = new PostContent(props);

        this.state.post     = data.post;
        this.state.board    = data.board;
        this.state.children = this.state.children.concat([ header, content ]);
      }).catch((err) => {
        this.props.displayMessage('There was an error loading this page');
      });
  }

  render() {
    const boardSlug = location.pathname.replace(/^\/boards\//, '').replace(/\/thread\/.+/, '');;
    const postSlug  = location.pathname.replace(/^\/boards\/\w+\/thread\//, '');
    const header    = document.getElementById('page_header');
    const main      = document.getElementById('main');
    const headerContent = `
      <p>Loading...</p>
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
