import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      
        <div className='m-5 '>


              
      <ul className=' icons d-flex justify-content-center align-content-center position-relative '>
        <li><a href=""><FaFacebook /></a></li>
        <li><a href=""><FaInstagram /></a></li>
        <li><a href=""><FaTwitter /></a></li>
        <li><a href=""><FaLinkedin /></a></li>
        </ul>
          
      

        <ul className='menu d-flex justify-content-center align-content-center position-relative '>
           <li><a href="/">Home</a></li>
           <li><a href="/About">About</a></li>
           <li><a href="/Services">Services</a></li>
           <li><a href="/Restaurent">Restaurent</a></li>
           <li><a href="/Contact">Contact Us</a></li>
          
        </ul>
        <p className='d-flex justify-content-center text-white  '>@2024 Online Turtorials  |  All Rights Reserved</p>
     

         
       



        <div className='wave wave1'></div>
        <div className='wave wave2'></div>
        <div className='wave wave3'></div>
        <div className='wave wave4'></div>
     
        </div>
    </footer>

   
  )
}

export default Footer
