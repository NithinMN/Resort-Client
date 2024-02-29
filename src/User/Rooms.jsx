import React from 'react'
import './Rooms.css'
import room1 from '../Assets/rooom1.jpg'
import room2 from '../Assets/doubleroom.jpg'
import room3 from '../Assets/familyroom.jpg'
import room4 from '../Assets/deluxe.jpg'

const Rooms = () => {
  return (
    <div>
      <section className='top'>
        <div className='top-image'>
            <div className='service-title text-white p-5  '>
                <h1 className='fs-1 mt-4 ' >Rooms</h1>
                <p>Home &gt;&gt; <span>Rooms</span> </p>
            </div>           
            </div>
            </section>

            <section className='Room-image mt-5 '>
              <div className='theme-container'>
              <div className=' theme-container d-flex justify-content-around gap-4  '>
        
                <div class="card room-card d-flex ">
                  <img src={room1} alt="" />
                  <h5 class="card-title fs-3 "></h5>
                  <div class="card-body">
                  <p class="card-text">Nanotechnology immersion along the information highway will close the loop on focusing solely asskllsd.</p><br />
                  </div>
              </div>

              
              </div>
              </div>
            </section>
         </div>
  )
}

export default Rooms
