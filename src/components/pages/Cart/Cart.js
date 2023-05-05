import { APP_EVENTS } from '../../../constants/appEvents';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { Component } from '../../../core/Component';
import { eventEmitter } from '../../../core/EventEmitter';
import { storageService } from '../../../services/StorageService';

import './Cart.scss';
class CartPage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  setProducts = (products) => {
    const mapProducts = products
      .filter((item, index, arr) => {
        return arr.findIndex((findItem) => findItem.id === item.id) === index;
      })
      .map((item) => {
        return {
          ...item,
          quantity: item.quantity
            ? item.quantity
            : products.filter((filterItem) => filterItem.id === item.id).length,
        };
      });

    this.setState((state) => {
      return {
        ...state,
        products: mapProducts,
      };
    });
  };

  onDeleteItem = (evt) => {
    if (evt.target.closest('.delete-btn')) {
      const id = evt.target.dataset.id;
      const items = this.state.products;
      const filteredItems = items
        .map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        })
        .filter((item) => Boolean(item.quantity));
      storageService.setItem(APP_STORAGE_KEYS.cartData, filteredItems);
    }
  };

  onStorage = (evt) => {
    this.setProducts(evt.detail.data);
  };

  sum(products) {
    return products.reduce((acc, item) => {
      return (acc += item.quantity ? item.price * item.quantity : item.price);
    }, 0);
  }

  componentDidMount() {
    const products = storageService.getItem(APP_STORAGE_KEYS.cartData);
    this.setProducts(products ?? []);
    this.addEventListener('click', this.onDeleteItem);
    eventEmitter.on(APP_EVENTS.storage, this.onStorage);
  }

  componentWillUnmount() {
    eventEmitter.off(APP_EVENTS.storage, this.onStorage);
    this.removeEventListener('click', this.onDeleteItem);
  }

  render() {
    return `
        <div class="wrapper">
        <div class="cart-title">Your Cart</div>
        <div class="containe mt-5 p-5 ">
        <table class="table mt-3 ">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Title</th>
              <th scope="col">Preview</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
          ${this.state.products
            .map((item) => {
              const sumPrice = item.price * item.quantity;
              return `
                <tr>
              

            </tr>    
                `;
            })
            .join('')}        
          </tbody>
        </table>
        <div class="text-end col-12 fs-5">Total: 0$</div>
      </div>
      </div>
        `;
  }
}

customElements.define('cart-page', CartPage);





{/* <td>${item.title}</td>
<td>
      <img class="image-fit" src='${item.image}' alt="image" />
</td>
<td>${item.description}</td>
<td>${item.quantity}</td>
<td>${item.price}</td>

<td>${sumPrice}</td>
<td>
  <button class='delete-btn' data-id="${item.id}">Delete</button>
</td> */}