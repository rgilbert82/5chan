import { MainBoardsList } from '.';
import { IndexHeader } from '../Headers';

export default class IndexMain {
  constructor(props) {
    this.props = props;
    this.state = {
      childComponents: []
    }

    this.render               = this.render.bind(this);
    this.bindEventListeners   = this.bindEventListeners.bind(this);
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
    this.bindEventListeners();
    this.state.childComponents = this.state.childComponents.concat(
      [ new IndexHeader(), new MainBoardsList(props) ]
    );
  }

  bindEventListeners() {
    // todo
  }

  removeEventListeners() {
    this.state.childComponents.forEach((child) => {
      child.removeEventListeners();
    });
  }

  render() {
    const main    = document.getElementById('main');
    const content = `
      <h2>Index Page</h2>
      <div id="index_boards">
      </div>
    `;

    main.innerHTML = content;
  }
}
