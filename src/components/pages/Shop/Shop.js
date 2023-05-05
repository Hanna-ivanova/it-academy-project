import { Component } from '../../../core/Component';
import '../../molecules/CategoryItems';
import { appCategories } from '../../../constants/appCategories';
import './Shop.scss';
import './images/IMG_1236-1024x1024.jpg';
import '../../organisms/CarsList';
// import { PRODUCTS } from '../../../constants/products';
import { eventEmitter } from '../../../core/EventEmitter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { databaseService } from '../../../services/DatabaseService';
import { FIRESTORE_KEYS } from '../../../constants/firestoreKeys';

class ShopPage extends Component {
  //   static get observedAttributes() {
  //     return ['categories'];
  //   }

  constructor() {
    super();
    this.state = {
      products: [],
      categories: [],
    };
  }

  onFilterProductsByCategory = async (evt) => {
    const { selectedCategory } = evt.detail;
    const products = await databaseService.getCollection(FIRESTORE_KEYS.products);
    const filtered =
      selectedCategory.name === 'All Products'
        ? products
        : products.filter((item) => item.category === selectedCategory.id);
    this.setState((state) => {
      return {
        ...state,
        products: filtered,
        currentPage: 1,
      };
    });
  };

  setProducts(products) {
    this.setState((state) => {
      return {
        ...state,
        products,
      };
    });
  }

  getProducts = async () => {
    try {
      const products = await databaseService.getCollection(FIRESTORE_KEYS.products);
      this.setProducts(products);
    } catch (error) {
      console.log(error);
    }
  };

  getAllCategories = async () => {
    try {
      const data = await databaseService.getCollection(FIRESTORE_KEYS.categories);
      this.setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  setCategories(categories) {
    this.setState((state) => {
      return {
        ...state,
        categories,
      };
    });
  }

  componentDidMount() {
    this.getProducts();

    this.getAllCategories();
    eventEmitter.on(APP_EVENTS.setCategory, this.onFilterProductsByCategory);
  }

  componentWillUnmount() {
    eventEmitter.off(APP_EVENTS.setCategory, this.onFilterProductsByCategory);
  }

  render() {
    return `
    <category-items items='${JSON.stringify(appCategories)}'></category-items>
    <section class="shop">
        <h2 class="section-title">SHOP OUR FAVOURITES</h2>
        <h5>Sure to spark Joy</h5>
        <card-list products='${JSON.stringify(this.state.products)}'></card-list>
              
    </section>




    <div class="bouqet-cards">

        <div class="shop-bouqet-wrp">
          <img class="shop-bouqet-img" src="https://twigsanddaisies.com/wp-content/uploads/2021/04/Petite-Final.jpg">
          <p class="shop-bouqet-title">Le petite Bouquet</p>
          <p class="shop-price">$60.00-$600.00</p>
        </div>
        <div class="shop-bouqet-wrp">
            <img class="shop-bouqet-img" src="https://twigsanddaisies.com/wp-content/uploads/2021/04/Medium-1.jpg">
            <p class="shop-bouqet-title">Medium Bouquet</p>
            <p class="shop-price">$60.00-$600.00</p>
        </div>
        <div class="shop-bouqet-wrp">
            <img class="shop-bouqet-img" src="https://twigsanddaisies.com/wp-content/uploads/2021/04/Large-768x768.jpg">
            <p class="shop-bouqet-title">Large Bouquet</p>
            <p class="shop-price">$25.00-$75.00</p>
        </div>
        <div class="shop-bouqet-wrp">
            <img class="shop-bouqet-img" src="https://twigsanddaisies.com/wp-content/uploads/2021/10/IMG_1831-1-768x768.jpg">
            <p class="shop-bouqet-title">Show Stopper</p>
            <p class="shop-price">$200.00</p>
        </div>
    </div>

    <div class="bouqet-cards">

    <div class="shop-bouqet-wrp">
      <img class="shop-bouqet-img" src="https://twigsanddaisies.com/wp-content/uploads/2021/11/IMG_1236-768x768.jpg">
      <p class="shop-bouqet-title">Dried Flower Bouquet</p>
      <p class="shop-price">$25.00-$75.00</p>
    </div>
    <div class="shop-bouqet-wrp">
        <img class="shop-bouqet-img" src="https://twigsanddaisies.com/wp-content/uploads/2022/02/dome-1-350x350.jpg">
        <p class="shop-bouqet-title">Enchanted Dome Gold</p>
        <p class="shop-price">$75.00-150.00</p>
    </div>
    <div class="shop-bouqet-wrp">
        <img class="shop-bouqet-img" src="https://twigsanddaisies.com/wp-content/uploads/2021/04/Designer-3-350x350.jpg">
        <p class="shop-bouqet-title">Designer's Choice</p>
        <p class="shop-price">$75.00-$600.00</p>
    </div>
    <div class="shop-bouqet-wrp">
        <img class="shop-bouqet-img" src="https://twigsanddaisies.com/wp-content/uploads/2021/11/img_3660-1-350x350.jpeg">
        <p class="shop-bouqet-title">Boho Bud</p>
        <p class="shop-price">$35.00</p>
    </div class="mb-5">
</div>
 
        `;
  }
}

customElements.define('shop-page', ShopPage);
