import React from 'react'
import './Slide.css';
import slide1 from './images/slideimg1.jpeg';
import slide2 from './images/slideimg2.jpeg';
import slide3 from './images/slideimg3.jpeg';
import slide4 from './images/slideimg4.jpeg';
import slide5 from './images/slideimg5.jpeg';
import slide6 from './images/slideimg6.jpeg';
import slide7 from './images/slideimg7.jpeg';

const Slide = () => {
  return (
    <>
    <div class="container text-center">
            <h1>
                <span class="font-weight-bold text-black font-weight">Happy </span>
                <span class="text-primary">Writers & Publishers</span>
            </h1>
     </div>    
     <div className='jai'>   
      <div class="wrapper">
    <input type="radio" name="slide" id="one" checked/>
    <input type="radio" name="slide" id="two" checked/>
    <input type="radio" name="slide" id="three" checked/>
    <input type="radio" name="slide" id="four" checked/>
    <input type="radio" name="slide" id="five" checked/>
    <input type="radio" name="slide" id="six" checked/>
    <input type="radio" name="slide" id="seven" checked/>
    <div class="img img-1">
      <img src={slide1} alt=""/>
    </div>
    <div class="img img-2">
      <img src={slide2} alt="pic2"/>
    </div>
    <div class="img img-3">
      <img src={slide3} alt="pic3"/>
    </div>
    <div class="img img-4">
      <img src={slide4} alt="pic4"/>
    </div>
    <div class="img img-5">
      <img src={slide5} alt="pic5"/>
    </div>
    <div class="img img-6">
      <img src={slide6} alt="pic6"/>
    </div>
    <div class="img img-7">
      <img src={slide7} alt="pic7"/>
    </div>
    <div class="sliders">
      <label for="one" class="one"></label>
      <label for="two" class="two"></label>    
        <label for="three" class="three"></label>
        <label for="four" class="four"></label>
        <label for="five" class="five"></label>
        <label for="six" class="six"></label>
        <label for="seven" class="seven"></label>
    </div>
   </div>
   </div>
    </>
  )
}

export default Slide
