import { MainBoardsList } from '.';
import { IndexHeader }    from '../Headers';

export default class IndexMain {
  constructor(props) {
    this.props = props;
    this.state = {
      childComponents: []
    }

    this.render               = this.render.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.setupPage            = this.setupPage.bind(this);

    this.setupPage();
  }

  setupPage() {
    const props = {
      navigate: this.props.navigate,
      displayMessage: this.props.displayMessage
    };

    this.render();
    this.state.childComponents = this.state.childComponents.concat(
      [ new IndexHeader(), new MainBoardsList(props) ]
    );
  }

  removeEventListeners() {
    this.state.childComponents.forEach((child) => {
      child.removeEventListeners();
    });
    this.state.childComponents = [];
  }

  render() {
    const main    = document.getElementById('main');
    const content = `
      <div id="main_index_page">
        <div id="main_index_page_description">
          <h2>What is 5chan?</h2>
          <p>5chan is a SPA clone of the infamous 4chan. It is a simple image-based bulletin board where anyone can post comments and share images. There are boards dedicated to a variety of topics. Users do not need to register an account before participating in the community. Feel free to click on a board below that interests you and jump right in!</p>
        </div>
        <div id="index_boards"></div>
      </div>
    `;

    document.title = '5chan';
    main.innerHTML = content;
  }
}
