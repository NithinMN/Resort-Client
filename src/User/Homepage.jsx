import React from 'react';
import './Homepage.css';
import ImageSlider from './components/ImageSlider';
import img1 from '../Assets/single.jpg'
import img2 from '../Assets/doubleroom.jpg'
import img3 from '../Assets/deluxe.jpg'
import { Link } from 'react-router-dom';


const Homepage = () => {
  return (
    <div>
      <section>
        <ImageSlider />
        <div className='container-home m-5 '>
          <div className='heading-container'>
            <h3 className='fs-1'>Welcome to our Resort</h3>
            <hr />
            <span className="homedivider"></span>
            <p className='fst-italic fs-4'>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>
            <p className='second-p'>Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line digital divide with additional clickthroughs from DevOps immersion along. additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line digita.</p>
            <p className='fst-italic fs-4 fw-bolder '>Contact us for any query at contact <span className='span-p'>@Resort.com</span></p>
            <a href="#"><button className='home-btn m-2 '>more about us</button></a>
          </div>
        </div>
      </section>

      <section className='room-style'>
        <div className='theme-container'>

          <h3 className='fs-1 '>Rooms & Rates</h3>
          <div className='line' ><hr className=''/></div>
          </div>
                   
          <div className="image-boxes m-5 ">

            <div className="image-box ">
              <img src={img1} alt="Room 1" />
              <h2>Single Room</h2>
              <p></p>
              <a href="/login" className="home-btn m-2 text-decoration-none p-2 ">Book Now</a>
            </div>

            <div className="image-box">
              <img src={img2} alt="Room 2" />
              <h2>Double Room</h2>
              <p></p>
              <a href="/login" className="home-btn m-2 text-decoration-none p-2 ">Book Now</a>
            </div>

            <div className="image-box">
              <img src={img3} alt="Room 2" />
              <h2>Deluxe</h2>
              <p></p>
              <a href="/login" className="home-btn m-2 text-decoration-none p-2  ">Book Now</a>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Homepage;
