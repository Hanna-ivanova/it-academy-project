import { Component } from '../../../core/Component';
import './Home.scss';
import '../../organisms/BenefitSection';
import '../../organisms/Parallax';
import '../../organisms/GalleryHome';
// import '../../organisms/Feedback';

class HomePage extends Component {
  render() {
    return `
    <div class="header-wrapper">
    <h2 class="header-title anim-items">Fresh & Unique</h2>
    <p class="header-title-description anim-items">Composed with Love</p>
    <button class="">Order now</button>
    </div>
    <benefit-section></benefit-section>
    <parallax-section></parallax-section>
    <gallery-home></gallery-home>
  
        
        `;
  }
}

customElements.define('home-page', HomePage);


