import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmitter } from '../../../core/EventEmitter';
import { authService } from '../../../services/Auth';
import '../../organisms/SignInForm';
import '../../molecules/Preloader';
import { APP_ROUTES } from '../../../constants/appRoutes';
import './SignInPage.scss';
// import { storageService } from '../../../services/StorageService';

class SignInPage extends Component {
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

  signIn = async ({ detail }) => {
    const { data } = detail;
    this.setIsLoading(true);
    try {
      const user = await authService.signIn(data.email, data.password);
      eventEmitter.emit(APP_EVENTS.authorizeUser, { user });
      eventEmitter.emit(APP_EVENTS.changeRoute, { target: APP_ROUTES.Shop });
    } catch (error) {
      this.setError(error.message);
    } finally {
      this.setIsLoading(false);
    }
  };

  componentDidMount() {
    eventEmitter.on(APP_EVENTS.signIn, this.signIn);
  }

  componentWillUnmount() {
    eventEmitter.off(APP_EVENTS.signIn, this.signIn);
  }

  render() {
    const message = this.state.errorMessage;
    return `
        <it-preloader class="wrapper" is-loading="${this.state.isLoading}">
        <div class="containe">
        <h1 class="text-center mt-5">Sign In</h1>
            <div class="row justify-content-center">
                <div class="container">
                    <div class="">
                    <div class="invalid-feedback d-block">${message}</div>
                        <sign-in-form></sign-in-form>
                    </div>                    
                </div>                
            </div>            
        </div>
        </it-preloader>
    `;
  }
}

customElements.define('sign-in-page', SignInPage);
