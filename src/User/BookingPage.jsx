import React, { useEffect, useState } from 'react'
import './BookingPage.css';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';




const BookingPage =()=> {
  const[Bookingdata,setBookingdata]=useState('')
  const navigate=useNavigate()
  

  const token=localStorage.getItem('token')
  // const userId=localStorage.getItem('userId')

  let handleChange = (e) => {
    setBookingdata({...Bookingdata, [e.target.name]: e.target.value});
  }
  

 let handleSubmit= async(e)=>{
    e.preventDefault()
    

  try{
    let response=await axios.post('http://localhost:4000/insertBooking',Bookingdata);
    if(response.data){
    console.log(response,'response');
    alert('Booking Successfully')


  }
}
catch(err){
  console.log(err);
  alert(err.response.data)
  
 }   
  }

  useEffect(() => {
    try {
      if (!token) {
        navigate ('/Login')
      }
    } catch (err) {
      console.log(err);
    }
  })
  
   
  return (
    <div>
        <div>
           <h1 className='text-center mt-3 '>Room Booking</h1>

    <form   onSubmit={handleSubmit} className='mt-3 form d-flex '>

      
        <input type="text" className='input-field' onChange={handleChange}  name="Name" placeholder='Name' />
        <input type="email" className='input-field' onChange={handleChange} name="Email" placeholder='Email'/>
        <input type="tel" className='input-field' onChange={handleChange}  name="Phone" placeholder='Phonenumber'/>
        <input type="date" className='input-field' onChange={handleChange} name="checkin" value='Check-in-date'/>
        <input type="date" className='input-field' onChange={handleChange}  name="checkout" placeholder='Check-Out-date'/>
        <input type="number" className='input-field' onChange={handleChange}  name="guests" min="1" placeholder='Number of Guest'/>
     
        <select id="room-type" className='input-field' onChange={handleChange} name="room-type" aria-placeholder='Room type'>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="suite">Suite</option>
        </select>
        <input type="text" className='input-field' onChange={handleChange} name='request' placeholder='Special-request' />
       
      
        <button type='submit' className='btn main-btn mt-3'>Book Now</button>
            
        <ToastContainer/>
    </form>
    </div>
   </div>
  )
}

export default BookingPage
