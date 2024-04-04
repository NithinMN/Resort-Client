import React from 'react'
import pool from '../../Assets/swimmingpool.jpg'
import Candlelight from '../../Assets/candlelight.jpg'
import Cycleride from '../../Assets/cycleride2.jpg'
import familyfun from '../../Assets/familyfun3.jpg'

import './Activities.css'

const Activities = () => {
  return (
    <div>
    <section className='top'>
  <div className='Acitivity-top-image'>
    <div className='service-title text-white p-5'>
      <h1 className='fs-1 mt-4'>Activities</h1>
      <p>Home &gt;&gt; <span>Activities</span> </p>
    </div>
  </div>
</section>

<section className='activities-content m-5'>
  <div className='container'>
    <div className='row'>
      <div className='col'>
        <div className='theme-container'>
          <h3 className='fs-1'>You will have lots of fun in our place</h3>
          <div className='Activity-line'><hr className=''/></div>
          <p className='Activity-second-p'>Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line digital divide with additional clickthroughs from DevOps immersion along additional clickthroughs.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


    <section className='activities-paragraph'>
  <div className='theme-container'>
    <h3 className='fs-1'>Swimming pool fun</h3>
    <div className='Activity-line'><hr className=''/></div>
    <div className='row'>
      <div className='col-md-6'>
        <p className='Activity-second-p'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
        Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination.
        </p>
      </div>
      <div className='col-md-6'>
        <img src={pool} alt="" className='img-fluid' />
      </div>
    </div>
  </div>
</section>


   <section className='activities-paragraph'>
      <div className='theme-container' >
         <h3 className='fs-1'>Candle light dinner</h3>
         <div className='Activity-line' ><hr className=''/></div>
            <div className='row '>
               <div className='col-md-6 '>
               <p className='Activity-second-p '>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                  Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination.
                  </p>
                  </div>
                  <div className='col-md-6' >
                  <img src={Candlelight} alt="" className='img-fluid ' />
                  </div>
                 </div>
                  </div>
    </section>

   <section className='activities-paragraph'>
      <div className='theme-container' >
         <h3 className='fs-1'>Cycling ride fun</h3>
         <div className='Activity-line' ><hr className=''/></div>
         <div className='row '>
               <div className='col-md-6 '>
               <p className='Activity-second-p '>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                  Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination.
                  </p>
                  </div>
                  <div className='col-md-6' >
                  <img src={Cycleride} alt="" className='img-fluid ' />
                  </div>
                 </div>
                  </div>
    </section>

   <section className='activities-paragraph'>
      <div className='theme-container' >
         <h3 className='fs-1'>Family fun</h3>
         <div className='Activity-line' ><hr className=''/></div>
         <div className='row '>
               <div className='col-md-6 '>
               <p className='Activity-second-p '>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                  Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination.
                  </p>
                  </div>
                  <div className='col-md-6' >
                  <img src={familyfun} alt="" className='img-fluid ' />
                  </div>
                 </div>
                  </div>
    </section>




    </div>
 


      
 
  )
}

export default Activities
