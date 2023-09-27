import React from 'react'
import './Slide.css';

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
      <img src="slideimg1.jpeg" alt="pic1"/>
    </div>
    <div class="img img-2">
      <img src="slideimg2.jpeg" alt="pic2"/>
    </div>
    <div class="img img-3">
      <img src="slideimg3.jpeg" alt="pic3"/>
    </div>
    <div class="img img-4">
      <img src="slideimg4.jpeg" alt="pic4"/>
    </div>
    <div class="img img-5">
      <img src="slideimg5.jpeg" alt="pic5"/>
    </div>
    <div class="img img-6">
      <img src="slideimg6.jpeg" alt="pic6"/>
    </div>
    <div class="img img-7">
      <img src="slideimg7.jpeg" alt="pic7"/>
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
