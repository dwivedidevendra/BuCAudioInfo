import React from "react";
import './Logo.css';
import logo1 from './images/logo1.jpeg';
import logo2 from './images/logo2.jpeg';
import logo3 from './images/logo3.jpeg';
import logo4 from './images/logo12.jpeg';
import logo5 from './images/logo13.jpeg';
import logo6 from './images/logo6.jpeg';
import logo7 from './images/logo7.jpeg';
import logo8 from './images/logo8.jpeg';
import logo9 from './images/logo9.jpeg';
import logo10 from './images/logo10.jpeg';
import logo11 from './images/logo11.jpeg';


const Logo = ()=>  {
    return(<>
   <div class="section-header container text-center">
    <h3>
    <span class="font-weight-bold text-black">Our </span>
    <span class="text-primary">Collabaration</span>
    </h3>
  </div>
  <div class ="slider">
    <div class = "slide-track">
      
      <div class = "slide">
        <img src= {logo1} height="100" width="100" alt = "logo"/>
      </div>

      <div class = "slide">
        <img src={logo2} height="100" width="100" alt = "logo"/>
      </div>

      <div class = "slide">
        <img src={logo3} height="100" width="100" alt = "logo"/>
      </div>

      <div class = "slide">
        <img src={logo4} height="100" width="100" alt = "logo"/>
      </div>

      <div class = "slide">
        <img src={logo5} height="100" width="100" alt = "logo"/>
      </div>

      <div class = "slide">
        <img src={logo6} height="100" width="100" alt = "logo"/>
      </div>

      <div class = "slide">
        <img src={logo7} height="100" width="100" alt = "logo"/>
      </div>

      <div class = "slide">
        <img src={logo8} height="100" width="100" alt = "logo"/>
      </div>

      <div class = "slide">
        <img src={logo9} height="100" width="100" alt = "logo"/>
      </div>

      <div class = "slide">
        <img src={logo10} height="100" width="100" alt = "logo"/>
      </div>

      <div class = "slide">
        <img src={logo11} height="100" width="100" alt = "logo"/>
      </div>
    
    </div>
  </div>
    
    </>
    )

}
export default Logo;