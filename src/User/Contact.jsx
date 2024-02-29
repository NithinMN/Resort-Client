import React from 'react'
import './Contact.css';



const Contact = () => {
  return (
    
    <div>
      <section className='top'>
        <div className='top-image'>
            <div className='service-title text-white p-5  '>
                <h1 className='fs-1 mt-4' >Contact</h1>
                <p>Home &gt;&gt; <span>Contact</span> </p>
                </div>                 
               </div>
            </section>

            <section>
            <div class="Contact-container text-center  mt-5 ">
        <h1 className='fs-1 fw-semibold '>Contact Us</h1>
        <form  className='mt-4 '>
            <label for="name" class="form-label">Name:</label>
            <input type="text" id="name" name="name" class="contact-form-input"/>
            
            <label for="email" class="form-label">Email:</label>
            <input type="email" id="email" name="email" class="contact-form-input"/>
            
            <label for="message" class="form-label">Message:</label>
            <textarea id="message" name="message" class="contact-form-textarea" rows="4" required></textarea>
            
            <button type="submit" className="btn main-btn">Submit</button>
        </form>
    </div>
              
            </section>
         </div>
  )
}

export default Contact
