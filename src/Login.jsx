import React, { useState } from 'react'
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin} from 'react-icons/fa'
import './Login.css';
import img1 from '../src/Assets/undraw_sign_in_re_o58h (1).svg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const[data,setdata]=useState('')
    const navigate=useNavigate()

    let handleChange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})

    }
    
    let handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(data);

        try{
           
            let response=await axios.post('http://localhost:4000/login',data)
            console.log(response ,'response');
            
          if(response.data){
            localStorage.setItem('userId',response.data.id)
            localStorage.setItem('token',response.data.token)

          
          alert('Welcome')
          navigate('/BookingPage')
          
        
          
      
          }
          
         
         }
         catch(err){
          console.log(err);
          alert(err.response.data)
          
         }
    }


    
   
  return (
    <div className='formdiv mt-3'>
            <div className='signin'>
                <form action="" onSubmit={handleSubmit} className='sign-in-form'>
                    <h2 className='title '>Sign in</h2>
                    

                    <div className='input-field'>
                    <input type="Email" onChange={handleChange}  placeholder='Email' name='Email' />
                    </div>

                    <div className='input-field'>
                    <input type="Password"  onChange={handleChange}  placeholder='Password' name='Password' id='Password'/>
                    </div>

                    <input type='Submit' placeholder='Login' className='main-btn' id='main-button'/>
                    <p className=' social-text'>Or sign in with social platforms</p>
                    <div className="social-media">
                        <a href="" className="social-icons"><FaFacebook/></a>
                        <a href="" className="social-icons"><FaGoogle/></a>
                        <a href="" className="social-icons"><FaLinkedin/></a>
                        <a href="" className="social-icons"><FaGithub/></a>
                    </div>
                  <p>Don't have an account? <a href="/Signup" className='text-decoration-none mt-1 '><span className='signup-p'>Signup.</span></a></p>
                </form>


            </div>


            <div className=' left-panel'>
                <div className='content'>
                    <h3 className='fs-2 fst-italic '>New Here ?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis ipsam odio, sapiente nesciunt tempora praesentium amet beatae totam consequuntur nihil, quis eum hic possimus alias dignissimos aliquam libero eaque!</p>
                     {/* <button className='btn main-btn' id='login-btn'>sign Up</button> */}
                     <a href="/signup" className=' btn main-btn '>Sign Up</a>

                </div>
                <img src={img1} className='image' alt="" />
            </div>
        </div>
      
  )
}

export default Login
