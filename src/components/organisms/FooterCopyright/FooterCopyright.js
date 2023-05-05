import { Component } from '../../../core/Component';
import './FooterCopyright.scss';

class FooterCopyright extends Component {
  render() {
    return `
    <footer class="footer-copyright"><p> &copy; 2023 Flower Shop. Boutique Flower Shop somewhere. All Rights Reserved.</p></footer>
        `;
  }
}

customElements.define('footer-copyright', FooterCopyright);
