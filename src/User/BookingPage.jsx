import React from 'react'
import './BookingPage.css'

const BookingPage = () => {
  return (
    <div className='r'>
        <div>
            <h1 className='text-center mt-3 '>Room Booking</h1>

        <form action="" className='mt-3 '>

      <div className='form'>
        <input type="text" id="name" name="name" placeholder='Name' />
        <input type="email" id="email" name="email" placeholder='Email'/>
        <input type="tel" id="phone" name="phone" placeholder='Phonenumber'/>
        <input type="date" id="checkin" name="checkin" placeholder='Check-in-date'/>
        <input type="date" id="checkout" name="checkout" placeholder='Checko-ut-date'/>
        <input type="number" id="guests" name="guests" min="1" placeholder='Number of Guest'/>
     
        <select id="room-type" name="room-type" aria-placeholder='Room type'>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="suite">Suite</option>
        </select>
        <input type="text" placeholder='Special-request' />
        </div>
      
        <a href="/" className="btn  main-btn btn-outline-success mt-3">Book Now</a>
    </form>

        

      
    </div>
    </div>
  )
}

export default BookingPage
