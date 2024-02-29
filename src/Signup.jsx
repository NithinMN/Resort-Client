import React, { useState } from 'react';
import signupimg from '../src/Assets/undraw_welcome_re_h3d9.svg';
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';
import './Login.css';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { Toast } from 'bootstrap';


const Signup = () => {


  const[data,setdata]=useState()

  let handleChange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})

  }
  console.log(data);

  let handleSubmit= async(e)=>{
   e.preventDefault()
   

   try{
    let response=await axios.post('http://localhost:4000/insert',data)
    console.log(response ,'response');
   
   }
   catch(err){
    console.log(err);
   
   }


  }

  return (

  

    <div className='d-flex justify-content-justify-content-evenly p-5  '>
      <div className='content'>
        <h3>One of Us ?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          officiis ipsam odio, sapiente nesciunt tempora praesentium amet beatae
          totam consequuntur nihil, quis eum hic possimus alias dignissimos
          aliquam libero eaque!
        </p>
        <a href="/Login" className="btn  main-btn btn-outline-success">sign in</a>
        
        
        
        <br />
        <img src={signupimg} className='image' alt='' />
      </div>

      <div className='signup'>
        <form action='' onSubmit={handleSubmit} className='sign-up-form'>
          <h2 className='title'>Sign Up</h2>

          <div className='input-field'>
            <input type='text' onChange={handleChange} placeholder='Name' name='Name' />
          </div>

          <div className='input-field'>
            <input type='text' onChange={handleChange} placeholder='Username' name='Username' />
          </div>

          <div className='input-field'>
            <input type='email' onChange={handleChange} placeholder='Email' name='Email' />
          </div>

          <div className='input-field'>
            <input type='password' onChange={handleChange} placeholder='Password' name='Password' />
          </div>

          <div className='input-field'>
            <input
              type='password'
              onChange={handleChange}
              placeholder='Confirm password'
              name='Password'
            />
          </div>

          <button className='btn main-btn ' id='main-btn'>
            Sign Up
          </button>
          <p className='social-text'>Or sign in with social platforms</p>
          <div className='social-media'>
            <a href='/' className='social-icons'>
              <FaFacebook />
            </a>
            <a href='/' className='social-icons'>
              <FaGoogle />
            </a>
            <a href='/' className='social-icons'>
              <FaLinkedin />
            </a>
            <a href='/' className='social-icons'>
              <FaGithub />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
