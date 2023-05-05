import { Component } from '../../../core/Component';
import { authService } from '../../../services/Auth';

import '../../molecules/Preloader';
import { APP_EVENTS } from '../../../constants/appEvents';
import { APP_ROUTES } from '../../../constants/appRoutes';
import { storageService } from '../../../services/StorageService';
import { eventEmitter } from '../../../core/EventEmitter';

class SignOutPage extends Component {
  componentDidMount() {
    authService
      .signOut()
      .then(() => {
        eventEmitter.emit(APP_EVENTS.changeRoute, { target: APP_ROUTES.signIn });
        eventEmitter.emit(APP_EVENTS.authorizeUser, { user: null });
        storageService.removeItem('user');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return `
            <shop-preloader is-loading="${JSON.stringify(true)}">
                <h1>You are signed out...</h1>
            </shop-preloader>
        `;
  }
}

customElements.define('sign-out-page', SignOutPage);
