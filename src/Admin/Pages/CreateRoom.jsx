import axios from 'axios'
import React, { useState } from 'react'

const CreateRoom = () => {

  const[roomData,setroomData]=useState('')

  let handleChange=(e)=>{
    setroomData({...roomData,[e.target.name]:e.target.value})

  }
  let handleSubmit=async(e)=>{
    e.preventDefault()

    try{
      let response=await axios.post('http://localhost:4000/insert/api/addroom',roomData)
      if(response.data){
        console.log(response);
        alert('Added Succesfully')
      }}
      catch(err){
        console.log(err);
        alert(err.response.data)
      }

  }


 

  return (
    <div>
        <form onSubmit={handleSubmit} action="">
            <div className='bg-gradient '>
            <h3 className='text-center mt-3 text-black  '>Create Room</h3>
            <div className='d-flex justify-content-center align-content-center flex-column gap-3 p-3 ' >
            
            <input type="text" className=' form-control  rounded-3 border-black  p-1 p-lg-2 ' onChange={handleChange} placeholder='description' name='description' />
            <input type="text" className=' form-control  rounded-3 border-black  p-1 p-lg-2 '  onChange={handleChange} placeholder='Rate' name='rate' />
            <input type='file' className='form-control border-black' onChange={handleChange}  name='image' />
      
            <button className='btn bg-black text-white form-control  '>Add</button>
            </div>
            </div>
        </form>
      
    </div>
  )
}

export default CreateRoom
