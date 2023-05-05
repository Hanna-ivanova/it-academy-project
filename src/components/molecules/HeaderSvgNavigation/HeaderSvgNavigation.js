import { APP_EVENTS } from '../../../constants/appEvents';
import { APP_ROUTES } from '../../../constants/appRoutes';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { Component } from '../../../core/Component';
import { eventEmitter } from '../../../core/EventEmitter';
import { storageService } from '../../../services/StorageService';
import '../../../core/Router/Link';
import { appPages } from '../../../constants/appPages';
import { ADMIN } from '../../../constants/userRoles';

class HeaderSvgNavigation extends Component {
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
    this.setState(() => {
      return {
        productsCount: count,
      };
    });
  };

  // countProducts = (data) => {
  //   return data
  //     .filter((item, index, arr) => {
  //       return arr.findIndex((indexItem) => indexItem.id === item.id) === index;
  //     })
  //     .map((item) => {
  //       return {
  //         ...item,
  //         quantity: item.quantity
  //           ? item.quantity
  //           : data.filter((filteredItem) => filteredItem.id === item.id).length,
  //       };
  //     })
  //     .reduce((acc, item) => acc + item.quantity, 0);
  // };

  // onStorage = (evt) => {
  //   const count = this.countProducts(evt.deatil.data);
  //   this.setProductsCount(count);
  // };

  // setUser(evt) {
  //   this.state((state) => {
  //     return {
  //       ...state,
  //       user: evt.detail.user,
  //     };
  //   });
  // }

  componentDidMount() {
    // eventEmitter.on(APP_EVENTS.authorizeUser, this.setUser);
    eventEmitter.on(APP_EVENTS.storage, this.onStorage);
    const items = storageService.getItem(APP_STORAGE_KEYS.cartData) ?? [];
    const count = this.countProducts(items);
    this.setProductsCount(count);
  }

  componentWillUnmount() {
    // eventEmitter.off(APP_EVENTS.authorizeUser, this.setUser);
    eventEmitter.off(APP_EVENTS.storage, this.onStorage);
  }

  getItems() {
    const user = JSON.parse(this.props.user);
    console.log(user);
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
    <nav class="header-svg-navigation" style="margin-right: 20px;">
    <a href="https://www.instagram.com">
        <svg class="header-svg">
            <use xlink:href="./assets/images/sprite.svg#facebook"></use>
        </svg> 
    </a>  
    <a href="https://www.instagram.com">
        <svg class="header-svg">
            <use xlink:href="./assets/images/sprite.svg#instagram"></use>
        </svg> 
    </a>
    <route-link to="${APP_ROUTES.cart}">
      <a href="#">
          <svg class="header-svg position-relative">
              <use xlink:href="./assets/images/sprite.svg#bag"></use>
          </svg>
          <span class="position-absolute top-5  translate-middle badge rounded-pill bg-danger" style="margin-right: 20px;">
          ${this.state.productsCount}          
        </span> 
      </a>
    </route-link>  
                                       
</nav>
        `;
  }
}

customElements.define('header-svg-navigation', HeaderSvgNavigation);
