export default class PostForm {
  constructor(props) {
    this.props = props;
    this.state = {
      post: {}
    };

    this.render               = this.render.bind(this);
    this.bindEventListeners   = this.bindEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.updateSubmitButton   = this.updateSubmitButton.bind(this);
    this.submitForm           = this.submitForm.bind(this);
    this.toggleForm           = this.toggleForm.bind(this);
    this.toggleFormFromLink   = this.toggleFormFromLink.bind(this);
    this.clearForm            = this.clearForm.bind(this);
    this.setupComponent       = this.setupComponent.bind(this);

    this.setupComponent();
  }

  setupComponent() {
    this.render();
    this.bindEventListeners();
  }

  bindEventListeners() {
    const toggleLinks = document.getElementsByClassName('form_toggle');
    const formBody    = document.getElementById('form_body');
    const form        = document.getElementById('new_post_form');

    for (let i = 0; i < toggleLinks.length; i++) {
      toggleLinks[i].addEventListener('click', this.toggleFormFromLink);
    }
    formBody.addEventListener('input', this.updateSubmitButton);
    form.addEventListener('submit', this.submitForm);
  }

  removeEventListeners() {
    const toggleLinks = document.getElementsByClassName('form_toggle');
    const formBody    = document.getElementById('form_body');
    const form        = document.getElementById('new_post_form');

    for (let i = 0; i < toggleLinks.length; i++) {
      toggleLinks[i].removeEventListener('click', this.toggleFormFromLink);
    }
    formBody.removeEventListener('input', this.updateSubmitButton);
    form.removeEventListener('submit', this.submitForm);
  }

  toggleForm() {
    const openForm = document.getElementById('open_form');
    const formDiv  = document.getElementById('new_post_form');

    this.clearForm();

    if (openForm.style.display === 'none') {
      openForm.style.display = 'block';
      formDiv.style.display  = 'none';
    } else {
      openForm.style.display = 'none';
      formDiv.style.display  = 'block';
    }
  }

  toggleFormFromLink(e) {
    e.preventDefault();
    this.toggleForm();
  }

  clearForm() {
    const formName = document.getElementById('form_username');
    const formBody = document.getElementById('form_body');
    formName.value = '';
    formBody.value = '';
  }

  updateSubmitButton(e) {
    const button = document.getElementById('form_submit_button');

    if (e.target.value.length > 0) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }

  submitForm(e) {
    e.preventDefault();

    const formName = document.getElementById('form_username');
    const formBody = document.getElementById('form_body');
    const username = formName.value.length > 0 ? formName.value : 'Anonymous';
    const body     = formBody.value;

    this.clearForm();

    this.props.createPost({
      username: username,
      body: body
    });
  }

  render() {
    const postOrComment = this.props.comment ? 'Comment' : 'Post Body';
    const toggleMessage = this.props.comment ? 'Post a Reply' : 'Start a New Thread';
    const parent  = document.getElementById('form_wrapper');
    const content = `
      <div id="open_form">
        <span>[<a href="#" class="form_toggle">${toggleMessage}</a>]</span>
      </div>

      <form id="new_post_form">
        <div class="form-group">
          <label for="form_username">Name</label>
          <input id="form_username" type="text" placeholder="Anonymous" class="form-control" />
        </div>
        <div class="form-group">
          <label for="form_body">${postOrComment}</label>
          <textarea id="form_body" class="form-control"></textarea>
        </div>
        <div class="form-group">
          <label for="form_file">Image File</label>
          <input id="form_file" class="form-control" type="file" accept="image/*"/>
        </div>
        <div class="form-group form_button_box">
          <button disabled="true" id="form_submit_button" class="btn btn-light">Post</button>
          <span>[<a href="#" class="form_toggle">hide</a>]</span>
        </div>
      </form>
    ` ;

    parent.innerHTML = content;
  }
}
