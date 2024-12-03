import React from 'react'
import firstNavimg from '../../assets/Nav1.png'
import mycv from '../../assets/mycv.pdf'
import secondNavimg from '../../assets/bug.png'

const Tailwind = () => {
  return (
    <>

      <div id='home' className='Main-nav  navbar-dark bg-light fixed-top container-fluid shadow'>
        <img className='nav-img' src={firstNavimg} alt="" />

        <div className='nav-links'>


          <a href='#hero' aria-current="page">Home</a>
          <a href='#stacks'>Stacks</a>
          <a href='#projects'>Projects</a>
          <a className='cv' href={mycv}>Download CV</a>
          <a href='#contact'>Contact</a>

        </div>
        {/* <img className='bug' src={secondNavimg} alt="" /> */}
        <button class=" bug navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#hero">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#stacks">Stacks</a>
            <a class="nav-link" href="#projects">Projects</a>
            <a class="nav-link" href={mycv}>Download CV</a>
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
        {/* <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </div>

      


    </>
  )
}

export default Tailwind