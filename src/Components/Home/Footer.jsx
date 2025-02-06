import React from 'react'
import firstNavimg from '../../assets/Nav1.png'
import github from '../../assets/github.png'
import X from '../../assets/X.png'
import gmail from '../../assets/gmail.png'
import whatsapp from '../../assets/whatsapp.png'
const Footer = () => {
  return (
    <>
         <div id='contact' class="bg-dark text-secondary px-4 py-2 text-center">
    <div class="py-5">
     <img className='exxl' src={firstNavimg} alt="e-xxxl" />
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 mb-2 text-white">Contact Me</p>
        <div class="name_icon">
         <p>© 2024 Ajejohnson Emmanuel</p>
         <a href="https://github.com/e-xxxxl"><img src={github} alt="github icon" /></a>
         <a href="https://x.com/aje_emmanuell"><img src={X} alt="X icon" /></a>
         <a href="mailto:eajejohnson@gmail.com"><img src={gmail} alt="Gmail icon" /></a>
         <a href="https://wa.me/+2349076618975"><img src={whatsapp} alt="Whatsapp icon" /></a>
        </div>
      </div>
    </div>
  </div>   
        
        </>
  )
}

export default Footer