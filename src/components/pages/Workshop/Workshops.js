import { Component } from '../../../core/Component';
import './workshop.scss';

class WorkshopsPage extends Component {
  render() {
    return `
    <div class="workshop-description">
    <div>
        <div class="workshop-row">
            <img src="https://twigsanddaisies.com/wp-content/uploads/2022/07/IMG_5957.jpg" alt="pic">
            <img src="https://twigsanddaisies.com/wp-content/uploads/2022/07/IMG_4736-2-768x768.jpg" alt="pic">
        </div>
    </div>
    <div class="workshop-text">
        <h3>Floral Arranging Workshop</h3>
        <h5>$150.00</h5>
        <p>Intro to the art of flower arranging. Learn floristry techniques that are easy and effective and that will take your flowering skills to the next level! This is a beginner-friendly, hands-on experience packed with tips and tricks. Plus you’ll leave with your creations (valued at $200!) to enjoy at home or gift to a loved one! Wine and nibbles are included. Flowers will be fresh and the best seasonal selection available.</p>
        <p>Time: 6:00pm – 8:00pm<br>Venue: Twigs and Daisies<br>7246 NE Biscayne Blvd, Miami, 33138</p>
        <p>Attendance is limited to 7 people.<br>All are welcome. Class is indoors: rain or shine. Sales are final. No refunds</p>      
      
    </div>
</div>
        
        <section class="workshop" id="workshop">
        <div class="workshop-img-wrp">
            <div class="workshop-img-text">
                <h2>Interested in a private workshop? <br> Let's do it.</h2>
                <p>We would love to host your next birthday, bachelorette, celebration, or team building/corporate event! Let’s get in touch!</p>
                <a href="contacts.html"><button id="contactBtn">Contact Us now</button></a>
            </div>
        </div>
        <div class="accordion-section">
            <h2>About Workshop</h2>
            <div class="accordion">What's included in this Workshop?</div>
            <div class="panel">
                <ul>
                    <li>Premium quality flowers</li>
                    <li>Vase</li>
                    <li>Floristy material to create with</li>
                    <li>Wine and charcuterie bites</li>
                    <li>All = value of $200</li> 
                </ul>
            </div>
            <div class="accordion">Is there parking?</div>
            <div class="panel">
                 <p>Yes. Spots are limited in our lot however there is plenty of parking on 73rd street</p>
            </div>
            <div class="accordion">What's the vibe?</div>
            <div class="panel">
                <p>Laid back, no fuss vibes. Everyone is welcome to participate. Background music, wine, flowers, good company… what more could you ask for!</p>
            </div>
        </div>
    </section>           

        `;
  }
}

const acc = document.getElementsByClassName('accordion');
var n;

for (n = 0; n < acc.length; n++) {
  acc[n].addEventListener('click', function () {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}

customElements.define('workshop-page', WorkshopsPage);
