import React from 'react'
import frontend from '../../assets/front-end.png'
import backend from '../../assets/back-end.png'
import seo from '../../assets/seo.png'

const Services = () => {
  return (
    <>
  <div class="container px-2 py-5" >
    <h2 class="pb-2 border-bottom ">Service Offers</h2>


      <div className='services-cont'>
         <div className='CARD'>
            <img className='cardimg1' src={frontend} alt="" />
            <h4>Front-end Development</h4>
            <p>I offer frontend development services to create beautiful, responsive, and user-friendly web interfaces using HTML, CSS, JavaScript, and React. My focus is on delivering seamless, engaging, and accessible experiences across all devices.</p>
         </div>
         <div className='CARD'>
            <img className='cardimg1' src={backend} alt="" />
            <h4>Back-end Development</h4>
            <p>I offer backend development services to build robust, scalable, and secure server-side solutions. Using technologies like Node.js, Express, and MongoDB, I create APIs, databases, and authentication systems that power seamless web applications and ensure smooth data flow and security.</p>
         </div>
         <div className='CARD'>
            <img className='cardimg1' src={seo} alt="" />
            <h4>Seo optimization</h4>
            <p>I offer SEO optimization services to improve your website’s visibility and ranking on search engines. By optimizing content, metadata, site structure, and performance, I help drive organic traffic and enhance user experience, ensuring your site stands out and reaches the right audience.</p>
         </div>
      </div>

        
  </div>
    
    
    </>
  )
}

export default Services