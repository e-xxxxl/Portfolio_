import React from 'react'
import Programmer from '../../assets/Programmer.gif'
const Herosection = () => {
  return (
    <>
    
    <div id='hero' class="container col-xxl-8 px-4 py-5 ">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={Programmer} class=" developer d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
        
         
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3 mt-5">Hey,I'm Ajejohnson Emmanuel </h1>
        <p class="lead">I’m a full-stack developer passionate about building beautiful and functional user interfaces. I love working on projects that bring together front-end and back-end technologies to create smooth and enjoyable experiences for users.</p>
        {/* <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div> */}
      </div>
    </div>
  </div>

    
    </>
  )
}

export default Herosection