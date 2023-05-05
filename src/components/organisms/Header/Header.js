import { Component } from '../../../core/Component';
import '../../molecules/HeaderNavigation/HeaderNavigation';
import '../../atoms/Logo';
import '../../molecules/HeaderSvgNavigation';
import { appPages } from '../../../constants/appPages';
import './header.scss';
import { APP_EVENTS } from '../../../constants/appEvents';
import { eventEmitter } from '../../../core/EventEmitter';
import { storageService } from '../../../services/StorageService';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { ADMIN } from '../../../constants/userRoles';
import { APP_ROUTES } from '../../../constants/appRoutes';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      productsCount: 0,
    };
  }

  static get observedAttributes() {
    return ['user'];
  }

  setProductsCount = (count) => {
    this.setState((state) => {
      return {
        ...state,
        productsCount: count,
      };
    });
  };

  countProducts = (data) => {
    return data
      .filter((item, index, arr) => {
        return arr.findIndex((indexItem) => indexItem.id === item.id) === index;
      })
      .map((item) => {
        return {
          ...item,
          quantity: item.quantity
            ? item.quantity
            : data.filter((filteredItem) => filteredItem.id === item.id).length,
        };
      })
      .reduce((acc, item) => acc + item.quantity, 0);
  };

  onStorage = (evt) => {
    const count = this.countProducts(evt.detail.data);
    this.setProductsCount(count);
  };

  componentDidMount() {
    eventEmitter.on(APP_EVENTS.storage, this.onStorage);
    const items = storageService.getItem(APP_STORAGE_KEYS.cartData) ?? [];
    const count = this.countProducts(items);
    this.setProductsCount(count);
  }

  componentWillUnmount() {
    eventEmitter.off(APP_EVENTS.storage, this.onStorage);
  }

  getItems() {
    const user = JSON.parse(this.props.user);
    if (user) {
      if (user.email === ADMIN) {
        return appPages.filter((menuItem) => {
          return [APP_ROUTES.signUp, APP_ROUTES.signIn].every((item) => item !== menuItem.href);
        });
      } else {
        return appPages.filter((menuItem) => {
          return [APP_ROUTES.signUp, APP_ROUTES.signIn, APP_ROUTES.admin].every(
            (item) => item !== menuItem.href,
          );
        });
      }
    } else {
      return appPages.filter((menuItem) => {
        return [APP_ROUTES.signOut, APP_ROUTES.admin].every((item) => item !== menuItem.href);
      });
    }
  }

  render() {
    return `    
    <header class="header">
        <div class="big-header-wrapper">
            <nav id="navigationWrapper">
                <header-logo></header-logo>
                <header-navigation 
                items='${JSON.stringify(this.getItems())}'

                >
                </header-navigation>                
                <header-svg-navigation></header-svg-navigation>
            </nav>
        </div>
    </header> `;
  }
}

customElements.define('it-header', Header);

// import { Component } from '../../../core/Component';
// import '../../molecules/HeaderNavigation/HeaderNavigation';
// import '../../atoms/Logo';
// import '../../molecules/HeaderSvgNavigation';
// import { appPages } from '../../../constants/appPages';
// import './header.scss';

// class Header extends Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return `
//     <header class="header">
//         <div class="big-header-wrapper">
//             <nav id="navigationWrapper">
//                 <header-logo></header-logo>
//                 <header-navigation
//                 items='${JSON.stringify(appPages)}'

//                 >
//                 </header-navigation>
//                 <header-svg-navigation></header-svg-navigation>
//             </nav>
//         </div>
//     </header> `;
//   }
// }

// customElements.define('it-header', Header);
