import React from "react";
import './Service.css';

const Services = ()=> {
    return(
    <>
    <div class="container text-center">
            <h1>
                <span class="font-weight-bold text-black font-weight">Services </span>
                <span class="text-primary">& Packages</span>
            </h1>
    </div>        
    <div class="container">
        <div class="row">
            <div class="col-md-3 mb-4">
                <div class="card unique-card-1 d-flex flex-column">
                    <img src="ebook.jpeg" class="card-img-top" alt="Imag 1"/>
                    <div class="card-body mt-auto">
                        <h3 class="card-title font-weight">Audio Book</h3>
                        <p class="font-weight ">Recording</p>
            <p class="font-weight">E-Book Creation</p>
            <p class="font-weight">Royalty Sharing</p>
            <p class="font-weight">Book Trailer</p>
            <p class="font-weight">Plateform Distribution  (40+ Plateform)</p>
            <p class="font-weight">Social Media Promotion</p>
            <p class="font-weight">Audio File Along with Author copyright</p>
            <p class="font-weight">Author Interview</p>
            <a href="/" class ="btn 4 btn-outline-primary">Get Price</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div class="card unique-card-2 d-flex flex-column">
                    <img src="paper.jpeg" class="card-img-top" alt="Imag 2"/>
                    <div class="card-body">
                        <h3 class="card-title font-weight">Paperback</h3>  
                        
                        <p class="font-weight">ISBN</p>
                        <p class="font-weight">Cover Page</p>
                        <p class="font-weight">20 Author Copy</p>
                        <p class="font-weight">Doubt Clearing Executive at Every Stage</p>
                        <p class="font-weight"> Listing on Amazon and Flipkart</p>
                        <p class="font-weight">50% Royalty Sharing</p>
            <p class="font-weight">Social Media Ads & Promotion</p>
            <p class="font-weight">Author Interview</p>
            <a href="/" class ="btn 5 btn-outline-primary">Get Price</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div class="card unique-card-3 h-800px d-flex flex-column">
                    <img src="booktrailer.jpeg" class="card-img-top" alt="Imag 3"/>
                    <div class="card-body">
                        <h3 class="card-title font-weight">Book Trailer</h3>
                        <p class="font-weight"> Audio Visual</p>
                    <p class="font-weight">Design (60 sec)</p>
                    <a href="/" class ="btn 6 btn-outline-primary">Get Price</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div class="card unique-card-4 d-flex flex-column">
                    <img src="interview.jpeg" class="card-img-top" alt="Imag 4"/>
                    <div class="card-body">
                        <h3 class="card-title font-weight">Author Interview</h3>
                        <p class="font-weight">In Studio Interview</p>
                        <a href="/" class ="btn 7 btn-outline-primary">Get Price</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

</>
    )

}
export default Services;