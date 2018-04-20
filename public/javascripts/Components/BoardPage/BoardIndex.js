import { BoardContent }             from '.';
import { BoardHeader, ForumHeader } from '../Headers';
import { Paginator }                from '../../App';
import { uploadPhotoAPI }           from '../../services/aws';
import { createPostAPI }            from '../../services/api/posts';
import { getBoardAPI }              from '../../services/api/boards';

export default class BoardIndex {
  constructor(props) {
    this.props = props;
    this.state = {
      boardHeader:  null,
      boardContent: null,
      paginator:    null,
      board:        {}
    };

    this.render               = this.render.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.fetchBoard           = this.fetchBoard.bind(this);
    this.createPost           = this.createPost.bind(this);
    this.uploadPhoto          = this.uploadPhoto.bind(this);
    this.addPostToBoard       = this.addPostToBoard.bind(this);
    this.setupComponent       = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    this.render();
    this.fetchBoard();
  }

  removeEventListeners() {
    if (this.state.boardHeader)  { this.state.boardHeader.removeEventListeners(); }
    if (this.state.boardContent) { this.state.boardContent.removeEventListeners(); }
    if (this.state.paginator)    { this.state.paginator.removeEventListeners(); }
  }

  fetchBoard() {
    const boardSlug = location.pathname.replace('/boards/', '');
    return getBoardAPI(boardSlug)
      .then((data) => {
        const props   = {
          board:          data,
          pageCount:      Math.ceil(data.post_count / 10),
          navigate:       this.props.navigate,
          displayMessage: this.props.displayMessage,
          createPost:     this.uploadPhoto
        }

        this.state.board        = data;
        this.state.boardHeader  = new BoardHeader(props);
        this.state.boardContent = new BoardContent(props);
        this.state.paginator    = new Paginator(props);
      }).catch((err) => {
        console.log(err);
        this.props.displayMessage('There was an error loading this page');
      });
  }

  createPost(postData) {
    return createPostAPI(postData)
      .then((data) => {
        this.state.boardHeader.toggleForm();
        this.addPostToBoard(data);
      }).catch((err) => {
        this.props.displayMessage('There was an error creating your post');
      });
  }

  uploadPhoto(postData) {
    return uploadPhotoAPI()
      .then((photoPath) => {
        postData.image    = photoPath;
        postData.board_id = this.state.board.id;
        this.createPost(postData);
      }).catch((err) => {
        this.props.displayMessage('There was an error uploading your image');
      });
  }

  addPostToBoard(postData) {
    if (this.state.boardContent) {
      this.state.boardContent.renderSinglePost(postData);
    }
  }

  render() {
    const boardSlug = location.pathname.replace('/boards/', '');
    const header    = document.getElementById('page_header');
    const main      = document.getElementById('main');
    const headerContent = `
      <p class="page_loading">Loading...</p>
    `;
    const mainContent = `
      <section id="board_content">
      </section>
      <div id="paginator">
      </div>
    `;

    document.title   = `5chan - /${boardSlug}/`;
    header.innerHTML = headerContent;
    main.innerHTML   = mainContent;
  }
}
