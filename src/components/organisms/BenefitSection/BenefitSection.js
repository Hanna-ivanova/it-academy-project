import { Component } from '../../../core/Component';
import './BenefitSection.scss';

class BenefitSection extends Component {
  render() {
    return `
      <div class="benefit-section">
      <div class="benefit-card">
          <div class="benefit-svg">
              <svg>
                  <use xlink:href="./assets/images/sprite.svg#lock"></use>
              </svg>
          </div>
          <div class="benefit-text-wrapper">
              <div class="benefit-title">Secured Payment</div>
              <div class="benefit-description">All major credit cards.</div>
          </div>
      </div>
      <div class="benefit-card">
          <div class="benefit-svg">
              <svg>
                  <use xlink:href="./assets/images/sprite.svg#flower"></use>
              </svg>
          </div>
          <div class="benefit-text-wrapper">
              <div class="benefit-title">Custom Arrangements</div>
              <div class="benefit-description">Curated stem bar selection</div>
          </div>
      </div>
      <div class="benefit-card">
          <div class="benefit-svg">
              <svg>
                  <use xlink:href="./assets/images/sprite.svg#car"></use>
              </svg>
          </div>
          <div class="benefit-text-wrapper">
              <div class="benefit-title">Same day delivery</div>
              <div class="benefit-description">When ordered before 3 pm</div>
          </div>
      </div>
  </div>
          
          `;
  }
}

customElements.define('benefit-section', BenefitSection);
