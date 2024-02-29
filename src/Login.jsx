import React from 'react'
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin} from 'react-icons/fa'
import './Login.css';
import img1 from '../src/Assets/undraw_sign_in_re_o58h (1).svg'
const Login = () => {
  return (
    <div className='formdiv mt-3'>
            <div className='signin'>
                <form action="" className='sign-in-form'>
                    <h2 className='title '>Sign in</h2>
                    

                    <div className='input-field'>
                    <input type="Email"  placeholder='Email' name='email' />
                    </div>

                    <div className='input-field'>
                    <input type="Password"  placeholder='Password' name='Password' id='Password'/>
                    </div>

                    <input type='Submit' placeholder='Login' className='main-btn' id='main-button'/>
                    <p className=' social-text'>Or sign in with social platforms</p>
                    <div className="social-media">
                        <a href="" className="social-icons"><FaFacebook/></a>
                        <a href="" className="social-icons"><FaGoogle/></a>
                        <a href="" className="social-icons"><FaLinkedin/></a>
                        <a href="" className="social-icons"><FaGithub/></a>
                    </div>


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
