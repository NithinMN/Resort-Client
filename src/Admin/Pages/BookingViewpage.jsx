import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const BookingViewpage = () => {

  const[Bookdata,setBookdata]=useState ([''])

  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const[refresh,setrefresh]=useState(false)

  useEffect(()=>{
    if (!token) {
      navigate('/login')
    }
    
    let fetchdata=async()=> {
      let response=await axios.get(`http://localhost:4000/find/booking`)
      console.log(response);
      setBookdata(response.data)
    }
    fetchdata();

  }, [refresh]);

  let handleDelete= async (id)=>{

    try{
      console.log('resposne');
      let response=await axios.delete(`http://localhost:4000/delete/Booking/${id}`)
      console.log(response);
      alert('Delete Succesfully')
      setrefresh(!refresh)
  
    }
    catch (err){
        console.log(err);
        alert(err.response.data)
    }
  
  }
  


  return (
   
    <div class="container-fluid">
    <h1 class='text-center text-white p-3 bg-dark bg-gradient text-uppercase'>Bookings</h1>
    <div class='container-fluid mt-3 p-3'>
        <div class="table-responsive">
            <table class="table table-bordered table-hover text-center text-capitalize">
                <thead class="thead-dark">
                    <tr class='table-dark table-active text-uppercase text-white'>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Check-in</th>
                        <th scope="col">Check-out</th>
                        <th scope="col">Guests</th>
                        <th scope="col">Room Type</th>
                        <th scope="col">Special Request</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {Bookdata.map((item, index) => (
                    <tr key={index}>
                        <td>{item.Name}</td>
                        <td>{item.Email}</td>
                        <td>{item.checkin}</td>
                        <td>{item.checkout}</td>
                        <td>{item.guests}</td>
                        <td>{item.request}</td>
                        <td><button onClick={() => handleDelete(item._id)} class='btn text-white bg-black'>Delete</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
</div>

  
  );
};

export default BookingViewpage;