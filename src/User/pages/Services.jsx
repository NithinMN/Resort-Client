import React from 'react'
import './Services.css'
import pool from '../../Assets/swimmingpool.jpg'
import pool1 from '../../Assets/swimming-pool.png'
import spa from '../../Assets/restaurent.jpg'
import cycle from '../../Assets/cycleride2.jpg'
import car from '../../Assets/car.png'
import wifi from '../../Assets/wi-fi.png'
import beds from '../../Assets/double-bed.png'
import Laundry from '../../Assets/washing-machine.png'
import drink from '../../Assets/welcome-drink.png'
import Smoking from '../../Assets/smoking.png'
import guide from '../../Assets/tour-guide.png'
import Photographer from '../../Assets/photographer.png'
import driver from '../../Assets/driver.png'
import laundry from '../../Assets/laundry-machine.png'
import cofee from '../../Assets/coffee-machine.png'


const Services = () => {
  return (
    <div>
   <section className='top'>
        <div className='services-top-image'>
            <div className='service-title text-white p-5  '>
                <h1 className='fs-1 mt-4' >Services</h1>
                <p>Home &gt;&gt; <span>Services</span> </p>
                                  
            </div>
         </div>
         
   </section>

   <section className='Services-style'>
       <div className="image-boxes m-5  ">

          <div className="image-box ">
             <img src={pool}  alt="Room 1" />
             
          </div>

          <div className="image-box ">
             <img src={spa} alt="Room 1" />
          </div>

          <div className="image-box ">
             <img src={cycle} alt="Room 1" />
          </div>
        </div>
      </section>


    <section className='services-style1'>
      <div className='theme-container  '>
        <div className='services-title '>
        <h3 className='fs-1 text-center '>What we offer to our customers</h3>
            <div className='services-line' ><hr className=''/></div>
            </div> 
            <p className='services-second-p text-center mt-3 '>Some quick example text to build on the card title and make up the bulk of the card's content
            </p>
      </div>


      <div className=' theme-container d-flex flex-wrap   justify-content-around gap-1'>
        
      <div className="card col-sm-6 col-md-4 col-lg-3">
        <img  src={car} alt="" className="mx-auto " />
        <div className="card-body">
          <h5 className="card-title">Car Rental</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>


          <div class="card col-sm-6 col-md-4 col-lg-3 ">
              <img src={pool1} alt=""  className="mx-auto "/>
              <div class="card-body ">
              <h5 class="card-title">Swimming Pool</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               </div>
          </div>

          <div class="card col-sm-6 col-md-4 col-lg-3">
              <img src={wifi} alt=""  className="mx-auto " />
              <div class="card-body">
              <h5 class="card-title">Free Wifi</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>


          <div class="card col-sm-6 col-md-4 col-lg-3">
              <img src={beds} alt=""  className="mx-auto " />
              <div class="card-body">
              <h5 class="card-title">King Beds</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>

          </div><br /><br />

          <div className='theme-container d-flex flex-wrap  justify-content-around gap-4  '>

          <div class="card col-sm-6 col-md-4 col-lg-3">
              <img src={Laundry} alt=""  className="mx-auto " />
              <div class="card-body">
              <h5 class="card-title">Laundry Service</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>

          <div class="card col-sm-6 col-md-4 col-lg-3">
              <img src={Smoking} alt="" className='mx-auto ' />
              <div class="card-body">
              <h5 class="card-title">Welcome Drinks</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>

          <div class="card col-sm-6 col-md-4 col-lg-3">
              <img src={drink} alt="" className="mx-auto " />
              <div class="card-body">
              <h5 class="card-title">Smoking Free</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>


          <div class="card col-sm-6 col-md-4 col-lg-3">
              <img src={guide} alt=""  className="mx-auto  " />
              <div class="card-body">
              <h5 class="card-title">Tour Guide</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
        </div>
      </section>



      <section className='services-style1'>
        <div className='theme-container '>
        <h3 className='fs-1 text-center   '>Additonal Features</h3>
            <div className='services-line' ><hr className=''/></div>
        </div>

        <div className='theme-container d-flex flex-wrap  justify-content-around gap-4 mt-5'>

          <div class="card col-sm-6 col-md-4 col-lg-3  ">
              <img src={Photographer} alt=""  className='service-image mx-auto mb-auto '   />
              <div class="card-body">
              <h5 class="card-title fs-3">Photographer</h5>
              <p class="card-text">Nemo enim ipsam voluptatm quia voluptas sit aspernatur aut odit aut fugit, sed quia conseq uuntur magni dolores.
              </p>
              </div>
          </div>
          
        <div class="card col-sm-6 col-md-4 col-lg-3">
              <img src={driver} alt="" className='service-image mx-auto mb-auto ' />
              <div class="card-body">
              <h5 class="card-title fs-3 ">Driver</h5>
              <p class="card-text">Nemo enim ipsam voluptatm quia voluptas sit aspernatur aut odit aut fugit, sed quia conseq uuntur magni dolores.
              </p>
              </div>
          </div>
          
        <div class="card col-sm-6 col-md-4 col-lg-3">
              <img src={laundry} alt="" className='service-image mx-auto' />
              <div class="card-body">
              <h5 class="card-title fs-3 ">Cloth Cleaning</h5>
              <p class="card-text">Nemo enim ipsam voluptatm quia voluptas sit aspernatur aut odit aut fugit, sed quia conseq uuntur magni dolores.
              </p>
              </div>
          </div>
        <div class="card col-sm-6 col-md-4 col-lg-3 ">
              <img src={cofee} alt="" className='service-image mx-auto mb-auto' />
              <div class="card-body  ">
              <h5 class="card-title fs-3 ">Cofee Maker</h5>
              <p class="card-text">Nemo enim ipsam voluptatm quia voluptas sit aspernatur aut odit aut fugit, sed quia conseq uuntur magni dolores.</p>
              </div>
          </div>  
        </div>
      </section>

    

 



     


  





      </div>
  )
}

export default Services
