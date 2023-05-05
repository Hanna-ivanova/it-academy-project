import { Component } from '../../../core/Component';
import './FooterLinks.scss';

class FooterLinks extends Component {
  render() {
    return `
    <footer class="footer-links">
        <div class="footer-links-wrp">
            <h4>Contact us</h4>
            <p>1234 Boulevard Road</p>
            <p>Some city 2345</p>
            <p>(123) 456-78963</p>
            <p>info@flowershop.com</p>
        </div>
        <div class="footer-links-wrp">
            <h4>Quick shop</h4>
            <p>Fresh flowers</p>            
            <p>Dry flowers</p>
            <p>Vases</p>
            <p>Soil</p>
        </div>
        <div class="footer-links-wrp">
            <h4>Learn More</h4>
            <a href="">About</a>
            <a href="">Gallery</a>  
            <a href="">FAQ</a>  
            <a href="">Contact</a>
        </div>
        <div class="footer-links-wrp">
            <h4>Stay connected</h4>
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://www.instagram.com/">Instagram</a>
        </div>
        </footer>
    
        `;
  }
}

customElements.define('footer-links', FooterLinks);
