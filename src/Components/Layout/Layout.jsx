import React from 'react'
import Navbar from '../Home/Navbar'
import Herosection from '../Home/Herosection'
import Stacks from '../Home/Stacks'
import Services from '../Home/Services'
import Projects from '../Home/Projects'
import ContactForm from '../Home/ContactForm'
import Footer from '../Home/Footer'
const Layout = () => {
  return (
    <>
    <div className='b' >
    <Navbar/>
    <Herosection/>
    <Stacks/>
    <Services/>
    <Projects/>
    <ContactForm/>
    <Footer/>

    </div>
        
    </>
  )
}

export default Layout