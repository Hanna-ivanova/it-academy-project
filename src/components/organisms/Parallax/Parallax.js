import { Component } from '../../../core/Component';
import './Parallax.scss';

class ParallaxSection extends Component {
  render() {
    return `
    <section class="parallax">
    <div class="parallax-wrp">
        <h5>Experience</h5>
        <h2 class="section-title">FLOWER POWER</h2>
        <p class="parallax-text">We are more than just bright colors and unique arrangements. Our team brings unmatched skills and passion over 15 years of experience in the field.</p>
        <a href="#"><button>Learn more</button></a>
    </div>
    </section>
      
          
          `;
  }
}

customElements.define('parallax-section', ParallaxSection);
