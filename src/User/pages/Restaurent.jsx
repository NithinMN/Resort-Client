import React from 'react';
import restaurent from '../../Assets/restaurent.jpg';
import './Restaurent.css';

const Restaurent = () => {
  return (
    <div>
      <section className='top'>
        <div className='top-image'>
          <div className='service-title text-white p-5'>
            <h1 className='fs-1 mt-4'>Restaurent</h1>
            <p>Home &gt;&gt; <span>Restaurent</span></p>
          </div>
        </div>
      </section>

      <section className='restaurent-paragraph mt-5'>
        <div className='theme-container'>
          <div className='restaurent-title'>
            <h3 className='fs-1'>Welcome to Restaurant</h3>
            <div className='line'><hr className='' /></div>
            <h5 className='fst-italic fs-3'>Rich tradition of personal service</h5>

            <div className='d-flex flex-column flex-md-row align-items-md-center justify-content-md-between'>
              <p className='second-p'>
                Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line digital divide with additional clickthroughs from DevOps immersion along additional clickthroughs from DevOps.
                <br /><br /><br /><br />
                <span className='fst-italic fs-3 text-black'>To reserve our Restaurant<br />please call +1800 456 7890<br /><br />Or Make It Online</span>
              </p>
              <div className='d-flex justify-content-center mb-5'><img src={restaurent} alt="" className='img-fluid' /></div>
            </div>
          </div>
        </div>
      </section>

      <section className='restaurent-dishes m-5'>
        <div className='theme-container'>
          <div className='dish-title'>
            <h3 className='fs-1'>Our Dishes</h3>
            <div className='line'><hr className='' /></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurent;
