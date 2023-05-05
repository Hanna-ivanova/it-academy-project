import { Component } from '../../../core/Component';
import './Contacts.scss';

class Contacts extends Component {
  render() {
    return `
        <section class="contact-wrapper">
        <div class="form-contact-wrp">
            <div class="form-section">
                <h2>Drop Us A Line</h2>
                <p class="title-description">We are here for all of your flower and arrangement needs. Please let us know how we can assist you, or if you are looking for something in particular.</p>
                <form>
                    <p>Name<span class="red">*</span></p>
                    <input type="text">
                    <p>Email Address<span class="red">*</span></p>
                    <input type="email">
                    <p>Phone number<span class="red">*</span></p>
                    <input type="number">
                    <p>Your Message Here</p>
                    <textarea id="textarea" cols="30" rows="10"></textarea>
                    <label for="checkbox">
                        <input type="checkbox" id="checkbox">Sign me up for the newsletter
                        </label>
                    <button>Send</button>
                </form>
            </div>
            <div class="contact-section">
                <p><b>Address:</b> 12345 Flower Boulevard</p>
                <p>Miami, Fl 54646</p>
                <p><b>Phone:</b> (123)456-789</p>
                <p><b>Email:</b>info@flower.com</p>
                <hr>
                <p><b>Opening hours:</b></p>
                <p></p>
                <p>Mon-Sat: 10am - 7pm</p>
                <p>Sun: 11am - 6pm</p>
                <hr>
                <p><b>Stay connected</b></p>
                <a href="https://www.facebook.com/">
                    <svg class="header-svg">
                        <use xlink:href="sprite.svg#facebook"></use>
                    </svg>
                </a>
                <a href="https://www.instagram.com/">
                    <svg class="header-svg">
                        <use xlink:href="sprite.svg#instagram"></use>
                    </svg>
                </a>
            </div>        
        </div>        
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d304.58387601486453!2d31.030055383576666!3d52.358251936796385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d45dfe271d701d%3A0xa258604e1a7c4324!2z0KbQstC10YLQvtGH0L3Ri9C5INC80LDQs9Cw0LfQuNC9!5e0!3m2!1sru!2sby!4v1671364479163!5m2!1sru!2sby" width="90%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
        `;
  }
}

customElements.define('contacts-page', Contacts);
