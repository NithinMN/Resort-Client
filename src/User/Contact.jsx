import React, { useState } from 'react'
import './Contact.css';
import axios from 'axios';



const Contact = () => {

  const[data,setdata]=useState('')

  let handleChange=(e)=>{
       setdata({...data,[e.target.name]:e.target.value})
  }

  let handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(data);

    try {
      let response=await axios.post('http://localhost:4000/insert/contact',data)
      console.log(response,'response');
      alert('gyyytgyg')
      
    } 
    catch(err){
      console.log(err);
      alert(err.response.data)
    }
  }
  


  return (
    
    <div>
      <section className='top'>
        <div className='top-image'>
            <div className='service-title text-white p-5  '>
                <h1 className='fs-1 mt-4' >Contact Us</h1>
                <p>Home &gt;&gt; <span>Contact Us</span> </p>
                </div>                 
               </div>
            </section>

            <section>
             
            <div class="Contact-container text-center  mt-5 ">
        <h1 className='fs-1 fw-semibold '>Contact Us</h1>
        <form onSubmit={handleSubmit}  className='mt-4 '>
            <label for="name" class="form-label">Name:</label>
            <input onChange={handleChange} type="text"  name="Name" class="contact-form-input"/>
            
            <label for="email" class="form-label">Email:</label>
            <input onChange={handleChange} type="email"  name="Email" class="contact-form-input"/>
            
            <label for="message" class="form-label">Message:</label>
            <textarea onChange={handleChange}  name="Message" class="contact-form-textarea" rows="4"></textarea>
            
            <button type="submit" className="btn main-btn bg-black ">Submit</button>
        </form>
    </div>
              
            </section>
         </div>
  )
}

export default Contact
