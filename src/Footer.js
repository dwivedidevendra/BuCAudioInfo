import React from "react";
import './Footer.css';

const Footer = ()=> {
    return(
        <footer class ="bg-light text-dark pt-5 pb-4">
        <div class = "container text-center text-md-left">
            <div class ="row text-center text-md-left">
                <div class = "col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 class = " mb-4 font-weight-bold text-primary">BuCAudio</h5>
                    <hr class = "mb-4"></hr>
                    <p>Step into the World of Sound: Unleash Your Imagination with Bucaudio Pedia!</p>
                </div>
                <div class = " col-md-2 col-1g-2 col-xl-2 mx-auto mt-3">
                    <h5 class = "text-uppercase mb-4 font-weight-bold text-primary">Lets Us Help</h5>
                    <hr class = "mb-4"></hr>
                    
                    <p>
                        <a href="/" class="text-dark">Your Orders</a>
                    </p>
                    <p>
                        <a href="/" class="text-dark">Manage Your Content And Devices</a>
                    </p>
                    <p>
                        <a href="/" class="text-dark">Help</a>
                    </p>
                </div>

                <div class = " col-md-2 col-1g-2 col-xl-2 mx-auto mt-3">
                    <h5 class = "text-uppercase mb-4 font-weight-bold text-primary">Make Money</h5>
                    <hr class = "mb-4"></hr>
                    <p>
                        <a href="/" class="text-dark">Sell Your Books</a>
                    </p>
                    <p>
                        <a href="/" class="text-dark">Advertise Your Books</a>
                    </p>
                    
                    <p>
                        <a href="/" class="text-dark">Self Publish</a>
                    </p>
                </div>

                <div class = " col-md-4 col-1g-3 col-xl-3 mx-auto mt-3">
                    <h5 class = " mb-4 font-weight-bold text-primary">CONTACT</h5>
                    <hr class = "mb-4"></hr>
                    
                        <p>Address: <span><a href="https://www.google.com/maps/place/BuCAudio/@25.7633745,81.5802658,20.56z/data=!4m6!3m5!1s0x399ae91d71d601dd:0x9b5a4d37202e62ba!8m2!3d25.7635695!4d81.579833!16s%2Fg%2F11rhvywyrx?entry=ttu" class="text-dark">Heeraganj, Kunda, Pratapgarh, Uttar Pradesh 230204</a></span></p>
                    
                   
                        <p>E-Mail: <a href="mailto:info@bucaudio.com" class="text-dark">info@bucaudio.com</a></p>
                    
                    
                        <p>Phone No. +91 6307372428</p>
                </div>
            </div>
                <hr class="mb-4"></hr>
                <div class = "row d-flex justify-content-center">
                    <div>
                        <p>
                            Copyright 2023 All Rights Reserved By :
                            <a href="/" class="text-dark">
                                <strong class="text-primary">BuCAudio Pedia Pvt Ltd </strong>
                            </a>
                        </p>
                    </div>
                </div>
                <div class ="row d-flex justify-content-center">
                    <div class = "text-center">

                        <ul class = "list-unstyled list-inline">
                            <li class = "list-inline-item">
                                <a href="https://www.youtube.com/@bucaudio.audiobooks" class = "text-dark"><i class="fab fa-youtube"></i></a>
                            </li>
                            <li class = "list-inline-item">
                                <a href="https://www.facebook.com/people/Bucaudio/100069410423516/" class = "text-dark"><i class="fab fa-facebook"></i></a>
                            </li>
                            <li class = "list-inline-item">
                                <a href="https://www.linkedin.com/company/bucaudio" class = "text-dark"><i class="fab fa-linkedin-in"></i></a>
                            </li>
                            <li class = "list-inline-item">
                                <a href="https://www.instagram.com/bucaudio/" class = "text-dark"><i class="fab fa-instagram"></i></a>
                            </li>
                            <li class = "list-inline-item">
                                <a href="https://twitter.com/BuCAudio" class = "text-dark"><i class="fab fa-twitter"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        

    </footer>
    )

}
export default Footer;