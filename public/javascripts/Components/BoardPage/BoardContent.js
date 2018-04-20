import { PostListItem } from '../Posts';
import { getPostsAPI }  from '../../services/api/posts';

export default class BoardContent {
  constructor(props) {
    this.props = props;
    this.state = {
      posts: [],
      postComponents: []
    }

    this.render               = this.render.bind(this);
    this.renderSinglePost     = this.renderSinglePost.bind(this);
    this.renderAllPosts       = this.renderAllPosts.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.fetchPosts           = this.fetchPosts.bind(this);
    this.nothingHere          = this.nothingHere.bind(this);
    this.setupComponent       = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    this.render();
    this.fetchPosts();
  }

  removeEventListeners() {
    this.state.postComponents.forEach((component) => {
      component.removeEventListeners();
    });
  }

  fetchPosts() {
    return getPostsAPI(this.props.board.id)
      .then((data) => {
        if (data.length > 0) {
          this.state.posts = data.reverse();
          this.renderAllPosts();
        } else {
          this.nothingHere();
        }
      }).catch(() => {
        this.props.displayMessage('There was an error loading this page');
      });
  }

  nothingHere() {
    const list    = document.getElementById('board_posts_list');
    const content = `
      <p class="nothing_here">This board has no posts yet. Post something!</p>
    ` ;

    list.innerHTML = content;
  }

  renderSinglePost(postData) {
    const props = {
      post: postData,
      navigate: this.props.navigate,
      displayMessage: this.props.displayMessage
    }
    this.state.postComponents = [ new PostListItem(props) ].concat(this.state.postComponents);
  }

  renderAllPosts() {
    let components = [];

    this.state.posts.forEach((post) => {
      const props = {
        post: post,
        navigate: this.props.navigate,
        displayMessage: this.props.displayMessage
      }
      components.push(new PostListItem(props));
    });

    this.state.postComponents = components;
  }

  render() {
    const parent = document.getElementById('board_content');
    const content = `
      <div>
        <ul id="board_posts_list">
        </ul>
      </div>
    `;

    parent.innerHTML = content;
  }
}
