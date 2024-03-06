import axios from 'axios'
import React, { useState } from 'react'

const CustomersView = () => {

  const [registerData,setregisterData]=useState('')

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
     
       


      
    </div>
  )
}

export default CustomersView
