import axios from 'axios'
import React, { useEffect, useState } from 'react'

const RegistersView = () => {

  const [registerData,setregisterData]=useState([])

  useEffect(()=>{
    let fetchdata=async()=>{
      let response=await axios.get(`http://localhost:4000/find/customers`)
      console.log(response);
      setregisterData(response.data)
    }
    fetchdata();

  }, []); 
  
  return (
    <div>
       <div>
      <h1>Customers View</h1>
      <ul>
        {registerData.map((message, index) => (
          <li key={index}>
            <strong>Name:</strong> {message.Name}<br />
            <strong>Email:</strong> {message.Email}<br />
            
            
            <hr />
          </li>
        ))}
      </ul>
    </div>
     
       


      
    </div>
  )
}

export default RegistersView
