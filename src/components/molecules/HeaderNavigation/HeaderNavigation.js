import { Component } from '../../../core/Component';
import '../../../core/Router/Link';
import './HeaderNavigation.scss';
import '../../atoms/HeaderLink';

class HeaderNavigation extends Component {
  static get observedAttributes() {
    return ['items', 'active-item'];
  }

  isActive(menuItem) {
    const item = this.props['active-item'];
    if (!item) {
      return false;
    }
    const activeItem = item ? JSON.parse(item) : {};
    return menuItem.href === activeItem.href;
  }

  render() {
    const items = JSON.parse(this.props.items);

    return `
    <nav class="header-navigation">
        ${items
          .map((item) => {
            return `
            <route-link to="${item.href}">
                <header-link class="${this.isActive(item) ? 'active' : ''}"
                href="${item.href ? item.href : ''}"
                content="${item.label}"
                ></header-link>
            </route-link>    
            `;
          })
          .join('')}
    </nav>
        `;
  }
}

customElements.define('header-navigation', HeaderNavigation);
