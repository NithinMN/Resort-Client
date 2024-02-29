import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './ImageSlider.css'; 
import image1 from '../../Assets/slide1.jpeg';
import image2 from '../../Assets/pic2.jpg';
import image3 from '../../Assets/pexels-fabian-wiktor-994605.jpg';
import { TypeAnimation } from 'react-type-animation';


const divStyle = {
  position: 'relative', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '100vh'
};

const slideImages = [
  {
    url: image2,
    caption:  <TypeAnimation
    sequence={[
      
      'We produce food for Mice',
      1000, 
      'We produce food for Hamsters',
      1000,
      'We produce food for Guinea Pigs',
      1000,
      'We produce food for Chinchillas',
      1000
    ]}
    wrapper="span"
    speed={50}
    style={{ fontSize: '2em', display: 'inline-block' }}
    repeat={Infinity}
  />
  },
  {
    url: image3,
    caption:  <TypeAnimation
    sequence={[
      
      'We produce food for Mice',
      1000,
      'We produce food for Hamsters',
      1000,
      'We produce food for Guinea Pigs',
      1000,
      'We produce food for Chinchillas',
      1000
    ]}
    wrapper="span"
    speed={50}
    style={{ fontSize: '12', display: 'inline-block', fontStyle:'italic' }}
    repeat={Infinity}
  />
  },
  {
    url: image1,
    caption:  <TypeAnimation
    sequence={[
      
      'We produce food for Mice',
      1000,
      'We produce food for Hamsters',
      1000,
      'We produce food for Guinea Pigs',
      1000,
      'We produce food for Chinchillas',
      1000
    ]}
    wrapper="span"
    speed={50}
    style={{ fontSize: '12', display: 'inline-block', fontStyle:'italic' }}
    repeat={Infinity}
  />
  },
  
];

const ImageSlider = () => {
    return (
      
      
      <div className="slide-container">
        <Slide autoplay={true} duration={3000}>
          {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <div className="caption">{slideImage.caption}</div> {/* Caption overlay */}
              </div>
            </div>
          ))} 
        </Slide>
        
      </div>
    )
}
export default ImageSlider;
