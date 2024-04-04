import React, { useEffect, useState } from 'react'
import './BookingPage.css';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import bookingimg from '../Assets/undraw_booking_re_gw4j (2).svg'




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
   navigate('/PaymentPage')



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
        navigate ('/login')
      }
      
    } catch (err) {
      console.log(err);
    }
  })
  
   
  return (
    <div className='container d-flex justify-content-center align-items-center min-vh-100 p-5  '>
    <div className='row rounded-5 border p-0 bg-white shadow box-area'>
   
     <div className='col-md-6 left-box rounded-5  d-flex justify-content-center align-items-center flex-column' style={{backgroundColor:''}}>
       <div className="featured-image ">
         <img src={bookingimg} className='img-fluid ' alt="" />
       </div>
       
     </div>


 

   <div className='col-md-6 right-box'>
     <div className='row align-items-center '>
       <div className='header-text mb-4 '>
         <p className='fs-4 '>Hello </p>
         <p className='fs-4 '>Welcome to Sign Up</p>
       </div>
       
       <form action="" onSubmit={handleSubmit}>
         <div className='input-group mb-3  '>
           <input type="text" onChange={handleChange} className='form-control form-control-lg bg-light fs-6 ' placeholder='Name' name='Name' />
         </div>
         <div className='input-group mb-3 '>
           <input type="" onChange={handleChange} className='form-control form-control-lg bg-light fs-6 'placeholder='Email'name="Email" />
         </div>
         <div className='input-group mb-3 '>
           <input type="tel" onChange={handleChange} className='form-control form-control-lg bg-light fs-6 'placeholder='Phone number' name='Phone' />
         </div>
         <div className='input-group mb-3 '>
           <input type="date" onChange={handleChange} className='form-control form-control-lg bg-light fs-6 'placeholder='Checkin date' name="checkin" />
         </div>
         <div className='input-group mb-3 '>
           <input type="date" onChange={handleChange} className='form-control form-control-lg bg-light fs-6 'placeholder='Checkout date' name="checkout" />
         </div>
         <div className='input-group mb-3 '>
           <input type="text" onChange={handleChange} className='form-control form-control-lg bg-light fs-6 'placeholder='Special request' name='request' />
         </div>
         <div className='input-group mb-2  '>
         <button className='btn home-btn w-100 m-lg-4   '>SIGN UP</button>
         </div>
         </form>
     </div>
     <ToastContainer/>
   </div>
   

  
     </div>
   </div>

  )
}

export default BookingPage
