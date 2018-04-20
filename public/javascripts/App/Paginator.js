export default class Paginator {
  constructor(props) {
    this.props = props;

    this.render               = this.render.bind(this);
    this.bindEventListeners   = this.bindEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.navigateToPage       = this.navigateToPage.bind(this);
    this.setupComponent       = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    if (this.props.pageCount !== 0) {
      this.render();
      this.bindEventListeners();
    }
  }

  bindEventListeners() {
    const pageLinks = document.getElementsByClassName('pagintor_list_item_links');
    for (let i = 0; i < pageLinks.length; i++) {
      pageLinks[i].addEventListener('click', this.navigateToPage);
    }
  }

  removeEventListeners() {
    const pageLinks = document.getElementsByClassName('pagintor_list_item_links');
    for (let i = 0; i < pageLinks.length; i++) {
      pageLinks[i].removeEventListener('click', this.navigateToPage);
    }
  }

  navigateToPage(e) {
    e.preventDefault();

    const pageNum = e.target.id.replace("goto_page_", "");
    const path    = `${location.pathname}?page=${pageNum}`;

    this.props.navigate(path);
  }

  render() {
    const paginator   = document.getElementById('paginator');
    const pagesList   = document.createElement('UL');
    const currentPage = Number(location.search.replace("?page=", "")) || 1;
    let html = '';

    pagesList.id = 'paginator_list';

    for (let i = 1; i <= this.props.pageCount; i++) {
      if (i === currentPage) {
        html += `
          <li class="pagintor_list_item">
            [<span>${i}</span>]
          </li>`;
      } else {
        html += `
          <li class="pagintor_list_item">
            [<a class="pagintor_list_item_links" id="goto_page_${i}" href="#">${i}</a>]
          </li>`;
      }
    }

    pagesList.innerHTML = html;
    paginator.appendChild(pagesList);
  }
}
