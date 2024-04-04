import React from 'react';
import './About.css';
import about1 from '../Assets/about1.jpg'
import about2 from '../Assets/about2.jpg'
import about3 from '../Assets/about3.jpeg'


const About = () => {
  return (
  <div>
  <section className='top'>
    <div className='About-top-image'>
       <div className='service-title text-white p-5  '>
          <h1 className='fs-1 mt-4 ' >About Us</h1>
          <p>Home &gt;&gt; <span>About Us</span> </p>
         </div>
                                  
        </div>
     </section>

     <section className='about-paragraph'>
      <div className='theme-container mt-5'>
        <h3 className='fs-1'>Our Approach towards our clients</h3>
         <div className='about-line' ><hr className=''/></div>
           <p className='fst-italic fs-4'>Hi. Our inn has been available for more than 5 years. We make the best for every one of our clients.
           </p>
            <p className='about-second-p'>Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line digital divide with additional clickthroughs from DevOps immersion along additional clickthroughs from DevOps.
            </p>
            <p className='about-second-p'>Nanotechnology immersion along the information highway will close the loop on oop on focusing solely on the bottom line digital divide with additional focusing solely on the bottom line digita.
            </p>             

        </div>
         </section>

     <section className='about-paragraph2'>
       <div className='theme-container'>
          <div className='about-title'>
            <h2>Hi. Our inn has been available for more than 20 years. We make the best for every one of our clients.</h2>
             <div className='d-flex '>
              <p className='about-second-p'>Bottom line digital divide with additional clickthroughs from DevOps immersion along additional clickthroughs from DevOps. Nano techn ology immersion along the information highway will close the loop on oop on focusing solely on the bottom line digital divide with additional focusing solely on the bottom line digita.
                </p>
                <p className='about-second-p' >Mottom line digital divide with additional clickthroughs from DevOps immersion along additional clickthroughs from DevOps. Nano techno logy immersion along the information highway will close the loop on oop on focusing solely on the bottom line digital divide with additional focusing solely on the bottom line digita.
                </p>
                </div>

                <div className="about-image-boxes mt-3  ">

                    <div className="image-box ">
                      <img src={about1} alt="Room 1" />
                    </div>

                    <div className="image-box ">
                      <img src={about2} alt="Room 1" />
                    </div>

                    <div className="image-box ">
                      <img src={about3} alt="Room 1" />
                    </div>
                    </div>
               
              </div>
            </div>
        </section>
 </div>         
  );                        
}

export default About;
