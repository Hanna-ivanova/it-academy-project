import { Component } from '../../../core/Component';
import './Feedback.scss';

class FeedbackSection extends Component {
  render() {
    return `
    <section class="feedback-section">
        <h2 class="section-title">Your Feedback</h2>
        <div class="feedback-slide-wrp">
            <button id="arrow-btn-left">
                <svg>
                    <use xlink:href="sprite.svg#arrowLeft"></use>
                </svg>
            </button>
            <div class="slides">                
                <div class ="slide visible">
                    <p class="text-feedback">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque consequatur ipsa dolores? Voluptate quam ab facere tempora, animi deserunt ad odit quidem, eaque necessitatibus temporibus quae impedit labore in assumenda dolore placeat sapiente cupiditate enim explicabo repudiandae voluptates sint!"</p>
                    <p class="author-feedback">Author Unknown</p>
                </div>
                <div class="slide">
                    <p class="text-feedback">"Thank you so much for the lovely flowers, bouquet, buttonholes and beautiful table decorations, I would have loved to have taken one of the table decorations but our guests had them and they will be very well looked after. The day was absolutely fabulous and the rooms looked beautiful, thank you once again."</p>
                    <p class="author-feedback">Someone</p>
                </div>
                <div class="slide">
                    <p class="text-feedback">"A florist shop is a retail establishment that sells cut flowers and ornamental plants. The floral trade involves activities such as flower care, flower arranging, floral design, merchandising, and often flower delivery. Florist shops are an ever popular industry and one of the most searched guides on our website."</p>
                    <p class="author-feedback">Unknown Author</p>
                </div>                
            </div>
            <button id="arrow-btn-right">
                <svg>
                    <use xlink:href="sprite.svg#arrowRight"></use>
                </svg>
            </button>
        </div>        
    </section>
    `;
  }
}
customElements.define('feedback-section', FeedbackSection);

const btnPrev = document.getElementById('arrow-btn-left');
const btnNext = document.getElementById('arrow-btn-right');
const slides = document.querySelectorAll('.slide');

let i = 0;

btnNext.addEventListener(
  'click',
  () => {
    i++;
    if (i >= slides.length) {
      slides[i - 1].classList.remove('visible');
      i = 0;
      slides[i].classList.add('visible');
    } else {
      slides[i - 1].classList.remove('visible');
      slides[i].classList.add('visible');
    }
  },
  5000,
);

btnPrev.addEventListener(
  'click',
  () => {
    if (i > 0) {
      slides[i].classList.remove('visible');
      slides[i - 1].classList.add('visible');
      i--;
    } else {
      slides[0].classList.remove('visible');
      slides[slides.length - 1].classList.add('visible');
      i = slides.length - 1;
    }
  },
  5000,
);
