import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmitter } from '../../../core/EventEmitter';
import { authService } from '../../../services/Auth';
import '../../organisms/RegisterForm';
import '../../molecules/Preloader';
import { APP_ROUTES } from '../../../constants/appRoutes';
import './SignUPPage.scss';

class SignUpPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      errorMessage: '',
    };
  }

  setIsLoading = (isLoading) => {
    this.setState((state) => {
      return {
        ...state,
        isLoading,
      };
    });
  };

  setError(error) {
    this.setState((state) => {
      return {
        ...state,
        errorMessage: error,
      };
    });
  }

  register = async ({ detail }) => {
    const { data } = detail;
    this.setIsLoading(true);
    try {
      const user = await authService.signUp(data.email, data.password);
      eventEmitter.emit(APP_EVENTS.authorizeUser, { user });
      eventEmitter.emit(APP_EVENTS.changeRoute, { target: APP_ROUTES.Shop });
    } catch (error) {
      this.setError(error.message);
    } finally {
      this.setIsLoading(false);
    }
  };

  componentDidMount() {
    eventEmitter.on(APP_EVENTS.signUp, this.register);
  }

  componentWillUnmount() {
    eventEmitter.off(APP_EVENTS.signUp, this.register);
  }

  render() {
    const message = this.state.errorMessage;
    return `
        <it-preloader is-loading="${this.state.isLoading}">

        <div class="containe ">
        <h1 class="text-center mt-5">Sign Up</h1>
            <div class="row justify-content-center">
                <div class="container">
                    <div class="">
                    <div class="invalid-feedback d-block">${message}</div>
                        <register-form></register-form>
                    </div>                    
                </div>                
            </div>            
        </div>
        </it-preloader>
    `;
  }
}

customElements.define('sign-up-page', SignUpPage);
