import React from  "react";


const Video = ()=> {
    return(
        <>
       <div class="container text-center">
    <h1>
        <span class="font-weight-bold text-black font-weight">India's Most Affordable </span>
        <span class="text-primary"> Publishing House</span>
    </h1>
</div>
<div class="video-background-holder">
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src="Buctrailer.mp4" type="video/mp4" />
        </video>
        <div class="button-container">
            <a href="/" class="btn btn-primary">Get Quote</a>
        </div>
    </div>


</> 

    )
}


export default Video;