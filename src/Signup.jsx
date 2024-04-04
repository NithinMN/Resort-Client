import React, { useState } from 'react';
import signupimg from '../src/Assets/undraw_welcome_re_h3d9.svg';
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';
import './Signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const Signup = () => {

  const[data,setdata]=useState('')
  const navigate=useNavigate()

  let handleChange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})

  }
  
  let handleSubmit= async(e)=>{
    e.preventDefault()
    
    console.log('data',data);
    try{
      if(data.Password !== data.confirmpassword){
        return toast.warn('Password not matching')
      }
      let response=await axios.post('http://localhost:4000/insert/Register',data)
    if(response.data){
     console.log(response ,'response');
      toast.success('register succesfully')
    // e.target.reset()
    navigate('/login')
    }
    
   
   }
   catch(err){
    console.log(err);
    toast.warn(err.response.data)
    
   }


  }

  return (

  

    // <div className='d-flex  justify-content-justify-content-evenly p-5  bg-light  '>
    //   <div className='content'>
    //     <h3>One of Us ?</h3>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
    //       officiis ipsam odio, sapiente nesciunt tempora praesentium amet beatae
    //       totam consequuntur nihil, quis eum hic possimus alias dignissimos
    //       aliquam libero eaque!
    //     </p>
    //     <a href="/Login" className="btn home-btn p-2">sign in</a>
        
        
        
    //     <br />
    //     <img src={signupimg} className='image' alt='' />
    //   </div>

    //   <div className='signup'>
    //     <form action='' onSubmit={handleSubmit} className='sign-up-form'>
    //       <h2 className='title'>Sign Up</h2>

    //       <div className='signup-field'>
    //         <input type='text' onChange={handleChange} placeholder='Name' name='Name' />
    //       </div>

    //       <div className='signup-field'>
    //         <input type='text' onChange={handleChange} placeholder='Username' name='Username' />
    //       </div>

    //       <div className='signup-field'>
    //         <input type='email' onChange={handleChange} placeholder='Email' name='Email' />
    //       </div>

    //       <div className='signup-field'>
    //         <input type='password' onChange={handleChange} placeholder='Password' name='Password' />
    //       </div>

    //       <div className='signup-field'>
    //         <input
    //           type='password'
    //           onChange={handleChange}
    //           placeholder='Confirm password'
    //           name='confirmpassword'
    //         />
    //       </div>

    //       <button className='btn home-btn ' >
    //         Sign Up
    //       </button>
    //       <p className='Signup-social-text'>Or sign in with social platforms</p>
    //       <div className='Signup-social-media'>
    //         <a href='/' className='Signup-social-icons'>
    //           <FaFacebook />
    //         </a>
    //         <a href='/' className='Signup-social-icons'>
    //           <FaGoogle />
    //         </a>
    //         <a href='/' className='Signup-social-icons'>
    //           <FaLinkedin />
    //         </a>
    //         <a href='/' className='Signup-social-icons'>
    //           <FaGithub />
    //         </a>
    //       </div>
    //     </form>
    //   </div>
    //   
    // </div>
    // <input type="text" className='booking-field' onChange={handleChange}  name="Name" placeholder='Name' />
    // <input type="email" className='booking-field' onChange={handleChange} name="Email" placeholder='Email'/>
    // <input type="tel" className='booking-field' onChange={handleChange}  name="Phone" placeholder='Phonenumber'/>
    // <input type="datetime-local" placeholder='Check-in' className='booking-field' onChange={handleChange} name="checkin" />
    // <input type="date" className='booking-field' onChange={handleChange}  name="checkout" placeholder='Check-Out-date'/>
    // <input type="number" className='booking-field' onChange={handleChange}  name="guests" min="1" placeholder='Number of Guest'/>
    // <input type="text" className='booking-field' onChange={handleChange} name='request' placeholder='Special-request' />
   

  

    <div className='container d-flex justify-content-center align-items-center min-vh-100 p-0  '>
     <div className='row rounded-5 border p-3 bg-white shadow box-area'>
    
      <div className='col-md-6 left-box rounded-5  d-flex justify-content-center align-items-center flex-column' style={{backgroundColor:''}}>
        <div className="featured-image ">
          <img src={signupimg} className='img-fluid ' alt="" />
        </div>
        <p>Already have an account?</p>
        <a href="/login"><button className='btn home-btn '>SIGNIN</button></a>
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
            <input type="text" onChange={handleChange} className='form-control form-control-lg bg-light fs-6 'placeholder='Username' name='Username' />
          </div>
          <div className='input-group mb-3 '>
            <input type="Email" onChange={handleChange} className='form-control form-control-lg bg-light fs-6 'placeholder='Email' name='Email' />
          </div>
          <div className='input-group mb-3 '>
            <input type="Password" onChange={handleChange} className='form-control form-control-lg bg-light fs-6 'placeholder='Password'  name='Password' />
          </div>
          <div className='input-group mb-3 '>
            <input type="Password" onChange={handleChange} className='form-control form-control-lg bg-light fs-6 'placeholder='Confirm Password' name='confirmpassword' />
          </div>
          <div className='input-group mb-2  '>
          <button className='btn home-btn w-50 m-lg-4   '>SIGN UP</button>
          </div>
          </form>
      </div>
      <ToastContainer/>
    </div>
    

   
      </div>
    </div>
 
 
 


  );
};

export default Signup;
