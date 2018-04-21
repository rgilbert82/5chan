export default class FooterLink {
  constructor(props) {
    this.props = props;

    this.render               = this.render.bind(this);
    this.bindEventListeners   = this.bindEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.navigateToLoginPage  = this.navigateToLoginPage.bind(this);
    this.logout               = this.logout.bind(this);
    this.setupComponent       = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    this.render();
    this.bindEventListeners();
  }

  bindEventListeners() {
    const loginLink  = document.getElementById('admin_link_login');
    const logoutLink = document.getElementById('admin_link_logout');

    if (loginLink) {
      loginLink.addEventListener('click', this.navigateToLoginPage);
    }

    if (logoutLink) {
      logoutLink.addEventListener('click', this.logout);
    }
  }

  removeEventListeners() {
    const loginLink  = document.getElementById('admin_link_login');
    const logoutLink = document.getElementById('admin_link_logout');

    if (loginLink) {
      loginLink.removeEventListener('click', this.navigateToLoginPage);
    }

    if (logoutLink) {
      logoutLink.removeEventListener('click', this.logout);
    }
  }

  navigateToLoginPage(e) {
    e.preventDefault();
    this.props.navigate('/admin-login');
  }

  logout(e) {
    e.preventDefault();
    this.props.setToLoggedOut();
  }

  render() {
    const parent = document.getElementById('admin_link');
    let content;

    if (this.props.loggedIn) {
      content = `
        <div class="admin_link_inner">
          <a id="admin_link_logout" href="#">logout</a>
        </div>
      `;
    } else {
      content = `
        <div class="admin_link_inner">
          <a id="admin_link_login" href="#">Admin login</a>
        </div>
      `;
    }

    parent.innerHTML = content;
  }
}
