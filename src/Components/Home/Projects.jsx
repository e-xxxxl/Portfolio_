import React from 'react'
import Budgetpng from '../../assets/bgtapp.png'
import Jokespng from '../../assets/jokes.png'
import  Love from '../../assets/lovecalculator.png'
import Weather from '../../assets/weatherapp.png'
import bookit from '../../assets/bookitimg.png'
import todo from '../../assets/todoimg.png'
const Projects = () => {
  return (
    <>
    
    
    
    <div id='projects' class="  container px-2 py-5" >
    <h2 class="pb-2 border-bottom ">My Projects</h2>

<div className='main-projects'>

<div class="projectcard">
 <div class="projectimage">
 <img class="projectimage" src={bookit} alt="" />
 </div>
  <div class="content">
    <a href="#">
      <span class="title">
            BOOKIT (A Hotel Booking Platform)   
      </span>
    </a>

    <p class="desc">
    BookIt is a hotel booking platform that lets users easily search, book, and manage hotel rooms. With filters, real-time booking, secure payments, and user accounts, BookIt provides a seamless experience for travelers and hotel owners alike.
    </p>

    <a class="action" href="https://bookit-app-topaz.vercel.app/">
      Live Preview
      <span aria-hidden="true">
        →
      </span>
    </a>
  </div>
</div>

<div class="projectcard">
 <div class="projectimage">
 <img class="projectimage" src={Jokespng} alt="" />
 </div>
  <div class="content">
    <a href="#">
      <span class="title">
            Joke App
      </span>
    </a>

    <p class="desc">
    Discover laughter at your fingertips! Our joke app delivers a wide range of hilarious jokes to brighten your day, from witty one-liners to side-splitting puns. Perfect for a quick laugh anytime, anywhere!
    </p>

    <a class="action" href="https://joke-app-e-xxxl.vercel.app/">
      Live Preview
      <span aria-hidden="true">
        →
      </span>
    </a>
  </div>
</div>

<div class="projectcard">
 <div class="projectimage">
  <img class="projectimage" src={Budgetpng} alt="" />
 </div>
  <div class="content">
    <a href="#">
      <span class="title">
            A Budget App
      </span>
    </a>

    <p class="desc">
    Take control of your finances with ease! Our budget app helps you track expenses, set savings goals, and manage your money effectively. Stay organized and achieve financial freedom, one step at a time!
    </p>

    <a class="action" href="https://budget-app-silk.vercel.app/">
      Live Preview
      <span aria-hidden="true">
        →
      </span>
    </a>
  </div>
</div>

<div class="projectcard">
 <div class="projectimage">
  <img class="projectimage" src={Weather} alt="" />
 </div>
  <div class="content">
    <a href="#">
      <span class="title">
            A Weather App (NOT RESPONSIVE)
      </span>
    </a>

    <p class="desc">
    Stay prepared with our weather app! Get real-time updates, forecasts, and alerts for your location. Whether it's sunny or stormy, plan your day with confidence!
    </p>

    <a class="action" href="https://budget-app-silk.vercel.app/">
      Live Preview
      <span aria-hidden="true">
        →
      </span>
    </a>
  </div>
</div>

<div class="projectcard">
 <div class="projectimage">
  <img class="projectimage" src={Love} alt="" />
 </div>
  <div class="content">
    <a href="#">
      <span class="title">
            A Love Calculator 
      </span>
    </a>

    <p class="desc">
    A fun platform to calculate love compatibility! Enter names, get playful scores, and enjoy lighthearted results. Perfect for couples and friends to share and smile!
    </p>

    <a class="action" href="https://love-calculator-2.vercel.app/">
      Live Preview
      <span aria-hidden="true">
        →
      </span>
    </a>
  </div>
</div>

<div class="projectcard">
 <div class="projectimage">
  <img class="projectimage" src={todo} alt="" />
 </div>
  <div class="content">
    <a href="#">
      <span class="title">
            A Todo List
      </span>
    </a>

    <p class="desc">
    A fun platform to calculate love compatibility! Enter names, get playful scores, and enjoy lighthearted results. Perfect for couples and friends to share and smile!
    </p>

    <a class="action" href="https://love-calculator-2.vercel.app/">
      Live Preview
      <span aria-hidden="true">
        →
      </span>
    </a>
  </div>
</div>







</div>



</div>


    
    
    </>
  )
}

export default Projects