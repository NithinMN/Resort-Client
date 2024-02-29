import React from 'react'
import restaurent from '../../Assets/restaurent.jpg'
import './Restaurent.css'

const Restaurent = () => {
  return (
    <div>
         <section className='top'>
        <div className='top-image'>
            <div className='service-title text-white p-5  '>
                <h1 className='fs-1 mt-4' >Restaurent</h1>
                <p>Home &gt;&gt; <span>Restaurent</span> </p>
                                  
            </div>
         </div>
       </section>

       <section className='restaurent-paragraph mt-5 '>
        <div className='theme-container'>
          <div className='restaurent-image-box'>
          <img className='w-50 h-75 ' src={restaurent} alt="" />
          <div className='restaurent-title'>
            <h3 >Welcome to Restaurant</h3>
          </div>
          
          </div>
        </div>
       </section>

      
    </div>
  )
}

export default Restaurent
