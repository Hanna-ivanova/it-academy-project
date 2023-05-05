import { initializeApp } from 'firebase/app';

class CloudService {
  constructor() {
    this._config = {
      apiKey: 'AIzaSyBm0YOW6er0M_LelhQ19OEXcqmD1gRjPyI',
      authDomain: 'flower-shop-38d84.firebaseapp.com',
      projectId: 'flower-shop-38d84',
      storageBucket: 'flower-shop-38d84.appspot.com',
      messagingSenderId: '382472305011',
      appId: '1:382472305011:web:828f8af8ea0469f4d76d06',
    };
    this.app = initializeApp(this._config);
  }
}

export const cloudService = new CloudService();
