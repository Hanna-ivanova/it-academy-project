import { Component } from '../../../core/Component';
import '../../molecules/Accordion';

import { accordionItems } from './constants';
import './Accordion.scss';

class FAQPage extends Component {
  render() {
    return `
    <section class="faq-wrapper">    
      <div class="accordion-title">Flower Care, Payment & Returns</div>
      <div class="mt-5">
        <it-accordion accordion-items='${JSON.stringify(accordionItems)}'></it-accordion>
      </div>
  
    `;
  }
}

customElements.define('faq-page', FAQPage);
