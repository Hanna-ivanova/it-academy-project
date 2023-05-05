import { Component } from './core/Component';
import './core/Router/Router';
import './components/organisms/Header';
import { routes } from './constants/routes';
import './components/pages/Home';
import './components/pages/AdminPage';
import './components/pages/Cart';
// import './components/templates/Footer';
import './components/pages/Contacts';
import './components/pages/Gallery';
import './components/pages/Shop';
import './components/pages/Workshop';
// import './components/pages/About';
import './components/pages/FAQ';
import './components/organisms/FooterCopyright';
import './components/organisms/FooterLinks';
import './components/pages/SignUpPage';
import './components/pages/SignInPage';
import './components/pages/SignOutPage';
import { authService } from './services/Auth';
import './components/molecules/Preloader';
import { eventEmitter } from './core/EventEmitter';
import { APP_EVENTS } from './constants/appEvents';
// import { storageService } from './services/StorageService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      user: null,
    };
  }

  setUser(user) {
    this.setState((state) => {
      return {
        ...state,
        user,
      };
    });
  }

  setIsLoading = (isLoading) => {
    this.setState((state) => {
      return {
        ...state,
        isLoading,
      };
    });
  };

  async authorizeUser() {
    this.setIsLoading(true);
    try {
      const user = await authService.authorizeUser();
      eventEmitter.emit(APP_EVENTS.authorizeUser, { user });
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading(false);
    }
  }

  onAuthorizeUser = ({ detail }) => {
    this.setUser(detail.user);
  };

  componentDidMount() {
    this.authorizeUser();
    eventEmitter.on(APP_EVENTS.authorizeUser, this.onAuthorizeUser);
  }

  componentWillUnmount() {
    eventEmitter.off(APP_EVENTS.authorizeUser, this.onAuthorizeUser);
  }

  render() {
    return `
    <it-preloader is-loading="${this.state.isLoading}">
      <div class="main-layout">
         <it-header user='${JSON.stringify(this.state.user)}'></it-header>
         <main>
          <app-router>
              <app-route 
                user='${JSON.stringify(this.state.user)}'
                path="${routes.Home.href}" 
                title="Home" 
                component="${routes.Home.component}">
              </app-route>

              <app-route 
                path="${routes.Shop.href}" 
                title="Shop" 
                component="${routes.Shop.component}">
              </app-route>     

           
              <app-route 
                path="${routes.FAQ.href}" 
                title="FAQ" 
                component="${routes.FAQ.component}">
              </app-route> 
          
            <app-route 
              path="${routes.Gallery.href}" 
              title="Gallery" 
              component="${routes.Gallery.component}">
            </app-route>
                    
            <app-route 
              path="${routes.Contacts.href}" 
              title="Contacts" 
              component="${routes.Contacts.component}">
            </app-route>   

            <app-route 
              path="${routes.Cart.href}" 
              title="Cart" 
              component="${routes.Cart.component}">
            </app-route>

            <app-route 
              path="${routes.Workshops.href}" 
              title="Workshops" 
              component="${routes.Workshops.component}">
            </app-route>

            <app-route 
            path="${routes.Admin.href}" 
            title="Admin" 
            component="${routes.Admin.component}">
          </app-route>

          <app-route 
          path="${routes.signUp.href}" 
          title="Sign Up" 
          component="${routes.signUp.component}">
          </app-route>

          <app-route 
          path="${routes.signIn.href}" 
          title="Sign In" 
          component="${routes.signIn.component}">
          </app-route>

          <app-route 
          path="${routes.signOut.href}" 
          title="Sign Out" 
          component="${routes.signOut.component}">
          </app-route>

            <app-route 
            path="${routes.Error.href}" 
            title="Error" 
            component="${routes.Error.component}">
          </app-route>       

        <app-outlet></app-outlet>
        </app-router>

         
        
         </main>
        <footer-links></footer-links>
        <hr class="footer-hr"></hr>
        <footer-copyright></footer-copyright>
      <div class="main-layout">
      </it-preloader>  
         `;
  }
}

window.onscroll = function () {
  document.getElementById('navigationWrapper').classList.add('header-scroll');
  if (window.pageYOffset == 0)
    document.getElementById('navigationWrapper').classList.remove('header-scroll');
};

// const acc = document.getElementsByClassName('accordion');
// var n;

// for (n = 0; n < acc.length; n++) {
//   acc[n].addEventListener('click', function () {
//     this.classList.toggle('active');
//     var panel = this.nextElementSibling;
//     if (panel.style.display === 'block') {
//       panel.style.display = 'none';
//     } else {
//       panel.style.display = 'block';
//     }
//   });
// }



customElements.define('it-app', App);
