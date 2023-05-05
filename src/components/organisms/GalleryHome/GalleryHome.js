import { Component } from '../../../core/Component';
import './GalleryHome.scss';

class GalleryHome extends Component {
  render() {
    return `
    
        <div class="gallery-home1">
            <img src="../../../../src/components/organisms/GalleryHome/images/gallery8.jpg" alt="flower1" title="flower1">
            <img src="../../../../src/components/organisms/GalleryHome/images/gallery2.jpg" alt="flower2" title="flower2">
            <img src="../../../../src/components/organisms/GalleryHome/images/gallery3.jpg" title="flower3">
            <img src="../../../../src/components/organisms/GalleryHome/images/gallery4.jpg" alt="flower4" title="flower4">
            <img src="../../../../src/components/organisms/GalleryHome/images/gallery5.jpg" alt="flower5" title="flower5">       
        </div>
   


            
            `;
  }
}

customElements.define('gallery-home', GalleryHome);
