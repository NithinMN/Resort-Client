import React, { useState } from 'react'
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin} from 'react-icons/fa'
import './Login.css';
import loginimg from '../src/Assets/undraw_sign_in_re_o58h (1).svg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {

    const[data,setdata]=useState('')
    const[newdata,setnewdata]=useState('')
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
            
          if(response.data.status === 'admin'){
            localStorage.setItem('userId',response.data.id)
            localStorage.setItem('token',response.data.token)
            alert('Login admin Successfully')
            navigate('/Admin')         
          } else{
            localStorage.setItem('userId',response.data.id)
            localStorage.setItem('token',response.data.token)
            alert('Login Successfully')
            navigate('/Bookingpage')   
          }
          
         }
         catch(err){
          console.log(err);
          alert(err.response.data.message)
          
         }
    }


    
   
  return (
    // <div className='d-flex justify-content-md-around w-100 bg-light min-vh-100  position-relative '>
    //         <div className='Login '>
    //             <form action="" onSubmit={handleSubmit} className=''>
    //                 <h2 className='title '>Sign in</h2>
                    

    //                 <div className='login-field  '>
    //                 <input type="Email" onChange={handleChange}  placeholder='Email' name='Email' />
    //                 </div>

    //                 <div className='login-field'>
    //                 <input type="Password"  onChange={handleChange}  placeholder='Password' name='Password' id='Password'/>
    //                 </div>

    //                 <input type='Submit' placeholder='Login' className=' btn home-btn'/>
    //                 
    //               <p>Don't have an account? <a href="/Signup" className='text-decoration-none mt-1 '><span className='signup-p'>Signup.</span></a></p>
    //             </form>


    //         </div>


    //         <div className=' left-panel d-flex row'>
    //             <div className='content'>
    //                 <h3 className='fs-2 fst-italic '>New Here ?</h3>
    //                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis ipsam odio, sapiente nesciunt tempora praesentium amet beatae totam consequuntur nihil, quis eum hic possimus alias dignissimos aliquam libero eaque!</p>
    //                  {/* <button className='btn main-btn' id='login-btn'>sign Up</button> */}
    //                  <a href="/signup" className=' btn main-btn '>Sign Up</a>
    //                 <div> <img  src={loginimg} className='image ' alt="" /></div>
                    
    //         </div>

    //             </div >
               
    //        <ToastContainer/>
    //     </div>
    

    <div className='container d-flex justify-content-center align-items-center min-vh-100 p-0  '>
    <div className='row rounded-5 border p-3 bg-white shadow box-area'>
   
    


 

   <div className='col-md-6 right-box'>
     <div className='row align-items-center '>
       <div className='header-text mb-4 '>
         <p className='fs-4 '>Hello, Again </p>
         <p className='fs-5 '>We are happy to have you back</p>
       </div>
       
       <form action="" onSubmit={handleSubmit}>
         
         <div className='input-group mb-3 '>
           <input type="Email" onChange={handleChange} className='form-control form-control-lg bg-light fs-6 'placeholder='Email' name='Email' />
         </div>
         <div className='input-group mb-3 '>
           <input type="Password" onChange={handleChange} className='form-control form-control-lg bg-light fs-6 'placeholder='Password' name='Password' id='Password' />
         </div>
         <div className='input-group mb-1 d-flex justify-content-between  '>
          <div className='form-check '>
            <input type="checkbox" className='form-check-input ' id='form-check ' />
            <label for="formCheck" className='form-check-label text-secondary '><small>Remember me</small></label>
          </div>
          <div className='forgot'>
           <small><a href="">Forgot password?</a></small> 
            
          </div>
         </div>
       
         <div className='input-group   '>
         <button className='btn home-btn w-100 m-lg-4   '>SIGN IN</button>
         </div>

      
          <div className="login-social-media d-flex justify-content-center align-content-center ">
          <a href="" className="login-social-icons"><FaFacebook/></a>
          <a href="" className="login-social-icons"><FaGoogle/></a>
          <a href="" className="login-social-icons"><FaLinkedin/></a>
          <a href="" className="login-social-icons"><FaGithub/></a>
          </div>
                 
         </form>
     </div>
     <ToastContainer/>
   </div>
   <div className='col-md-6 left-box rounded-5  d-flex justify-content-center align-items-center flex-column' style={{backgroundColor:''}}>
       <div className="featured-image ">
         <img src={loginimg} className='img-fluid ' alt="" />
       </div>
       <p>Are You New Here?</p>
       <a href="/signup"><button className='btn home-btn '>SIGNUP</button></a>
     </div>
   

  
     </div>
   </div>

    
      
  )
}

export default Login
