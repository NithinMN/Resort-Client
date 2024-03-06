import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const BookingViewpage = () => {

  const[Bookdata,setBookdata]=useState ([''])

  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(()=>{
    if (!token) {
      return navigate('/admin/login')
    }
    let fetchdata=async()=> {
      let response=await axios.get(`http://localhost:4000/find/booking`)
      console.log(response);
      setBookdata(response.data)
    }
    fetchdata();

  }, []);

  


  return (
   
    <div class="booking-container">
    <h1 class='text-center'>Bookings</h1>
    <table class="table mt-4 ">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Check-in</th>
          <th scope="col">Check-out</th>
          <th scope="col">Guests</th>
          <th scope="col">Room Type</th>
          <th scope="col">Special Request</th>
        </tr>
      </thead>
      <tbody>
              
        {Bookdata.map((item) => (
          <tr key={item._id}>
            <td>{item.Name}</td>
            <td>{item.Email}</td>
            <td>{item.checkin}</td>
            <td>{item.checkout}</td>
            <td>{item.guests}</td>
            <td>{item["room-type"]}</td>
            <td>{item.request}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  );
};

export default BookingViewpage;