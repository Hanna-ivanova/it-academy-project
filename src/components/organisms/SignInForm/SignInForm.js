import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmitter } from '../../../core/EventEmitter';
import { getFormData } from '../../../utils/form';

class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
    };
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = getFormData(evt.target);

    if (!email) {
      this.setError('email', 'The field is required');
      return;
    }
    eventEmitter.emit(APP_EVENTS.signIn, {
      data: {
        email,
        password,
      },
    });
  };

  componentDidMount() {
    this.addEventListener('submit', this.onSubmit);
  }

  componentWillUnmount() {
    this.removeEventListener('submit', this.onSubmit);
  }

  render() {
    return `
    <div class="wrapper">
    <form class="">
    <div class="">
      <label class="wrp">
        <p>Email<p>
        <input name="email" type="emails" class="grey">
      </label>
   
    </div> 
    <div class="">
      <label class="wrp">
        <p class="">Password<p>
        <input name="password" type="password" class="grey" required>
      </label>
    </div>
    <div class="">
      <label class="wrp">
        <p>Confirm Password<p>
        <input name="confirm-password" type="password" class="grey" required>
      </label>
    </div>
    <button type="submit">Sign In</button>
  </form>
</div>
    `;
  }
}

customElements.define('sign-in-form', SignInForm);
