import { Component } from '../../../core/Component';
import '../../organisms/CarsList';
import '../../molecules/Card';
import './Gallery.scss';

class GalleryPage extends Component {
  render() {
    return `              
        <section class="gallery">
        <div class="gallery-row">
            <div class="example-wide">
              <img src="https://twigsanddaisies.com/wp-content/uploads/2021/01/Twigs_0024.jpg">  
            </div>  
            <div class="example-narrow">
                <div class="wrapper-narrow">
                    <img src="https://twigsanddaisies.com/wp-content/uploads/2021/10/IMG_6405.jpg">  
                </div>
            </div>          
        </div> 
        <div class="gallery-row">
            <div class="example-narrow">                
                <img src="https://twigsanddaisies.com/wp-content/uploads/2023/04/190A5F3E-B5BC-4045-8F37-1E3DC8C667AD.jpg">               
            </div>  
            <div class="example-wide">
                <img src="https://twigsanddaisies.com/wp-content/uploads/2021/01/Twigs_0059.jpg">
            </div>
            </div>
            
            <div class="gallery-row">
                <div class="example-wide">
                  <img src="https://twigsanddaisies.com/wp-content/uploads/2021/01/Twigs_0047.jpg">  
                </div>  
                <div class="example-narrow">
                    <div class="wrapper-narrow">
                        <img src="https://twigsanddaisies.com/wp-content/uploads/2021/04/You-Deserve-It-Final.jpg">  
                    </div>
                </div>          
            </div> 
            <div class="gallery-row">
                <div class="example-narrow">                
                    <img src="https://twigsanddaisies.com/wp-content/uploads/2023/04/360BFBC4-F570-4428-AEEE-92E509CD5BEF.jpg">               
                </div>  
                <div class="example-wide">
                    <img src="https://twigsanddaisies.com/wp-content/uploads/2021/01/Twigs_0059.jpg">
                </div>
                </div>
                  
            
                   
    </section>    
        `;
  }
}

customElements.define('gallery-page', GalleryPage);
