import { adminLoginAPI } from '../../services/api/admins';
import { setToken }      from '../../services/admins';

export default class AdminLoginPage {
  constructor(props) {
    this.props = props;

    this.render               = this.render.bind(this);
    this.bindEventListeners   = this.bindEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.clearForm            = this.clearForm.bind(this);
    this.submitForm           = this.submitForm.bind(this);
    this.setupComponent       = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    if (this.props.loggedIn) {
      this.props.redirectHome();
    } else {
      this.render();
      this.bindEventListeners();
    }
  }

  bindEventListeners() {
    const form = document.getElementById('admin_login_form');
    form.addEventListener('submit', this.submitForm);
  }

  removeEventListeners() {
    const form = document.getElementById('admin_login_form');
    form.removeEventListener('submit', this.submitForm);
  }

  clearForm() {
    const formName     = document.getElementById('form_username');
    const formPassword = document.getElementById('form_password');
    formName.value     = '';
    formPassword.value = '';
  }

  submitForm(e) {
    e.preventDefault();

    const username = document.getElementById('form_username').value;
    const password = document.getElementById('form_password').value;
    const adminObj = {
      username: username,
      password: password
    }

    this.clearForm();
    return adminLoginAPI(adminObj)
      .then((data) => {
        setToken(data.token);
        this.props.setToLoggedIn();
        this.props.redirectHome();
      }).catch((err) => {
        this.props.displayMessage('Wrong username or password');
      });
  }

  render() {
    const pageHeader    = document.getElementById('page_header');
    const main          = document.getElementById('main');
    const headerContent = `
      <div id="board_header">
        <div id="board_header_logo_box">Admin Login</div>
      </div>
    `
    const content = `
      <div id="admin_login_page">
        <form id="admin_login_form">
          <div class="form-group">
            <label for="form_username">Admin Name</label>
            <input id="form_username" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="form_password">Password</label>
            <input id="form_password" type="password" class="form-control" />
          </div>
          <div class="form-group form_button_box">
            <button id="form_submit_button" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    `;

    document.title       = '5chan';
    pageHeader.innerHTML = headerContent;
    main.innerHTML       = content;
  }
}
