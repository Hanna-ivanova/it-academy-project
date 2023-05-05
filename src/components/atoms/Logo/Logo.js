import { Component } from '../../../core/Component';
import './logo.scss';

class Logo extends Component {
  render() {
    return `
        <div class="logo">Flower shop</div>
        `;
  }
}

customElements.define('header-logo', Logo);
