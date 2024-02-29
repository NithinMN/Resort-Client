import React from 'react'
import './Services.css'
import pool from '../../Assets/swimmingpool.jpg'
import photography from '../../Assets/photography.png'

const Services = () => {
  return (
    <div>
   <section className='top'>
        <div className='top-image'>
            <div className='service-title text-white p-5  '>
                <h1 className='fs-1 mt-4' >Services</h1>
                <p>Home &gt;&gt; <span>Services</span> </p>
                                  
            </div>
         </div>
         
   </section>

   <section className='Services-style'>
       <div className="image-boxes m-5 ">

          <div className="image-box ">
             <img src={pool} alt="Room 1" />
          </div>

          <div className="image-box ">
             <img src={pool} alt="Room 1" />
          </div>

          <div className="image-box ">
             <img src={pool} alt="Room 1" />
          </div>
        </div>
      </section>


    <section className='services-style1'>
      <div className='theme-container '>
        <div className='services-title'>
        <h3 className='fs-1'>What we offer to our customers</h3>
            <div className='line' ><hr className=''/></div>
            </div>
            <p className='second-p'>Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line digital divide with additional clickthroughs 
            </p>
      </div>


      <div className=' theme-container d-flex   justify-content-around gap-4'>
        
            <div class="card">
              <img src={pool} alt="" />
              <div class="card-body">
              <h5 class="card-title fs-3 ">Car Rental</h5>
              <p class="card-text">Nanotechnology immersion along the information highway will close the loop on focusing solely asskllsd.</p><br />
              </div>
          </div>

          <div class="card">
              <img src="" alt="" />
              <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               </div>
          </div>

          <div class="card">
              <img src="" alt="" />
              <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>


          <div class="card">
              <img src="" alt="" />
              <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>

          </div><br /><br />

          <div className='theme-container d-flex   justify-content-around gap-4 '>

          <div class="card">
              <img src={pool} alt="" />
              <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>

          <div class="card">
              <img src="" alt="" />
              <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>

          <div class="card">
              <img src="" alt="" />
              <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>


          <div class="card">
              <img src="" alt="" />
              <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>

        </div>
      </section>

      <section className='services-style1'>
        <div className='theme-container'>
        <h3 className='fs-1 '>Additonal Features</h3>
            <div className='line' ><hr className=''/></div>
        </div>

        <div className='theme-container d-flex justify-content-around gap-4 mt-5'>

          <div class="card  ">
              <img src={photography} alt=""  className='service-image'   />
              <div class="card-body">
              <h5 class="card-title fs-3">Photographer</h5>
              <p class="card-text">Nemo enim ipsam voluptatm quia voluptas sit aspernatur aut odit aut fugit, sed quia conseq uuntur magni dolores.
              </p>
              </div>
          </div>
          
        <div class="card1">
              <img src="" alt="" className='service-image' />
              <div class="card-body1">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
          
        <div class="card2">
              <img src="" alt="" />
              <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
        <div class="card">
              <img src="" alt="" />
              <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
          

        

      
          </div>
      </section>

    

 



     


  





      </div>
  )
}

export default Services
