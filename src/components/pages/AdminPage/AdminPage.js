import { databaseService } from '../../../services/DatabaseService';
import { Component } from '../../../core/Component';
import '../../molecules/Tabs';
import { forms, menuItems } from './constants';
import { APP_EVENTS } from '../../../constants/appEvents';
import { eventEmitter } from '../../../core/EventEmitter';
import '../../organisms/CategoryForm';
// import '../../organisms/GalleryForm';
import '../../organisms/ProductForm';
import { FIRESTORE_KEYS } from '../../../constants/firestoreKeys';
import './AdminPage.scss';
import '../../molecules/Preloader';
import { firebaseStorageService } from '../../../services/FirebaseStorageService';

class AdminPage extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: menuItems[0],
      categories: [],
      isLoading: false,
    };
  }

  setCategories(categories) {
    this.setState((state) => {
      return {
        ...state,
        categories,
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

  setActiveTab = (activeTab) => {
    this.setState((state) => {
      return {
        ...state,
        activeTab,
      };
    });
  };

  onChangeTab = ({ detail }) => {
    this.setActiveTab(detail.activeItem);
  };

  createCategory = ({ detail }) => {
    databaseService.createDocument(FIRESTORE_KEYS.categories, detail.data);
    this.getAllCategories();
  };

  createProduct = ({ detail }) => {
    this.setIsLoading(true);
    const { data } = detail;
    firebaseStorageService
      .uploadFile(data.preview, 'products')
      .then((snapshot) => {
        firebaseStorageService.downloadURL(snapshot.ref).then((url) => {
          databaseService.createDocument('products', {
            ...data,
            preview: url,
          });
        });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        this.setIsLoading(false);
      });
  };

  getAllCategories = async () => {
    this.setIsLoading(true);
    try {
      const data = await databaseService.getCollection(FIRESTORE_KEYS.categories);
      this.setCategories(data);
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading(false);
    }
  };

  componentDidMount() {
    eventEmitter.on(APP_EVENTS.changeTab, this.onChangeTab);
    eventEmitter.on(APP_EVENTS.createCategory, this.createCategory);
    eventEmitter.on(APP_EVENTS.createProduct, this.createProduct);
  }

  componentWillUnmount() {
    eventEmitter.off(APP_EVENTS.changeTab, this.onChangeTab);
    eventEmitter.off(APP_EVENTS.createCategory, this.createCategory);
    eventEmitter.off(APP_EVENTS.createProduct, this.createProduct);
  }

  render() {
    return `
    <it-preloader is-loading="${this.state.isLoading}">
      <div class="container">
      <div class="mt-5">
        <it-tabs 
                menu-items='${JSON.stringify(menuItems)}' 
                active-item='${JSON.stringify(this.state.activeTab)}'>
        </it-tabs>
            <div class="mb-3 mt-3 border-end border-bottom border-start border p-3">
                 ${forms(this.state)[this.state.activeTab.id]}
            </div>
        </div>
      </div>
    </div>
    </it-preloader>
        `;
  }
}

customElements.define('admin-page', AdminPage);
