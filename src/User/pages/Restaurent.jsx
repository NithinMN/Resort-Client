import React, { useState } from 'react';
import restaurent from '../../Assets/restaurent.jpg';
import './Restaurent.css';
import img5 from '../../Assets/veg items.jpeg'
import img6 from '../../Assets/non veg.jpg'
import img7 from '../../Assets/snackrolll.jpg'
import img8 from '../../Assets/spacial.jpg'
import img9 from '../../Assets/restaurentbooking.jpg'
import axios from 'axios';

const Restaurent = () => {
  
  const[restaurentData,setrestaurentData]=useState('')

  let handleChange=(e)=>{
  setrestaurentData({...restaurentData,[e.target.name]:e.target.value})
  }

  let handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(restaurentData);


    try{
      let response=await axios.post('http://localhost:4000/insert/restaurent',restaurentData)
      console.log(response);
      alert("Booking Successfull")
    }
    catch(err){
      console.log(err);
      alert(err.response.data)

    }
  }



  return (
    <div>

      <section className='top'>
        <div className='Restaurent-top-img'>
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
            <div className='Restaurent-line'><hr className='' /></div>
            <h5 className='fst-italic fs-3'>Rich tradition of personal service</h5>

            <div className='d-flex flex-column flex-md-row align-items-md-center justify-content-md-between'>
              <p className='restaurent-second-p'>
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
            <div className='Restaurent-line'><hr/></div>
          </div>

          <div className='d-grid '>
          <div className=' flex-wrap row d-inline-grid  dishes-image justify-content-between gap-4 text-center mt-3  '>
            <div className='col'>
              <img src={img5} alt="" className='img-fluid ' />
              <h4 className='mt-2 '>Veg Dishes</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde vel velit fugiat aliquam, sit temporibus. Tempora suscipit deleniti voluptas veniam ducimus modi sit? Similique sunt exercitationem totam quis reprehenderit.
              </p>
            </div>

          <div className='col'>
            <img src={img6} alt="" />
            <h4 className='mt-2 '>Non-Veg Dishes</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde vel velit fugiat aliquam, sit temporibus. Tempora suscipit deleniti voluptas veniam ducimus modi sit? Similique sunt exercitationem totam quis reprehenderit.
            </p>
          </div>

          <div className='col' >
            <img src={img7} alt="" />
            <h4 className='mt-2 '>Snack-rolls</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde vel velit fugiat aliquam, sit temporibus. Tempora suscipit deleniti voluptas veniam ducimus modi sit? Similique sunt exercitationem totam quis reprehenderit.
            </p>
          </div>

          <div className='col'>
            <img src={img8} alt="" />
            <h4 className='mt-2 '>Special Dishes</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde vel velit fugiat aliquam, sit temporibus. Tempora suscipit deleniti voluptas veniam ducimus modi sit? Similique sunt exercitationem totam quis reprehenderit.
            </p>
          </div>

        </div>
        </div>
        </div>
      </section>



      <section className='restaurent-booking mt-5 '>
        <div className='restaurent-booking-paragraph'>
            <div class="restaurent-container mt-5 m-lg-2">
            <h1 className='fs-1 fw-semibold m-lg-2 text-white'>Book a Table</h1>
            
            <form onSubmit={handleSubmit}  className='mt-4 '>
                <label for="name" class="form-label text-white m-lg-2">Name:</label>
                <input onChange={handleChange} type="text"  name="Name" className="contact-form-input bg-transparent text-white"/>
                
                <label for="email" class="form-label text-white ">Email:</label>
                <input onChange={handleChange} type="email"  name="Email" className="contact-form-input bg-transparent text-white"/>
                
                <label for="date" class="form-label text-white ">Date:</label>
                <input onChange={handleChange} type="Date" placeholder='Date'  name="date" className="contact-form-input bg-transparent text-white"/>
                
                <label for="message" class="form-label text-white ">Message:</label>
                <textarea onChange={handleChange}  name="Message" className="contact-form-textarea bg-transparent text-white" rows="4"></textarea>
                
                <button type="submit" className=" main-btn bg-black w-auto ">Reserve Now</button>
            </form>
    </div>
         </div>



       
      </section>
    </div>

  );
};

export default Restaurent;
