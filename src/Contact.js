import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import './Contact.css';


const Contact = ()=>  {
    return( <>
    <Heading />
    <section className="contact">
        <div className="content">
            <h2>Contact Us</h2>
            <p>Reach out to us at BuC Audio Publishing House for all your audio publishing needs!
            </p>
        </div>
        <div className="contain">
            <div className="contactInfo">
                <div className="boxx">
                    <div className="icon"><i class="fa-solid fa-location-dot"></i></div>
                    <div className="text">
                        <h3>Address</h3>
                        <p>  Heeraganj, Kunda, Pratapgarh</p>
                        <p>  Uttar Pradesh, India</p>
                        <p>  PIN Number:- 230204</p>
                    </div>
                </div>
                <div className="boxx">
                    <div className="icon"><i class="fa-solid fa-phone"></i></div>
                    <div className="text">
                        <h3>Phone NO.</h3>
                        <p>+91 6307372428</p>
                    </div>
                </div>
                <div className="boxx">
                    <div className="icon"><i class="fa-solid fa-envelope"></i></div>
                    <div className="text">
                        <h3>Email</h3>
                        <p>info@bucaudio.com</p>
                    </div>
                </div>
            </div>
                <div className="contactForm">
                    <form>
                        <h2> Send Message</h2>
                        <div className="inputbox">
                            <input type="text" name="" required="required"/>
                            <span>Full Name</span>
                        </div>
                        <div className="inputbox">
                            <input type="text" name="" required="required"/>
                            <span>Email</span>
                        </div>
                        <div className="inputbox">
                            <textarea required="required"></textarea>
                            <span>Type your Message....</span>
                        </div>
                        <div className="inputbox">
                            <div className="inputbox">
                                <input type="submit" name="" value="Send">

                                </input>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        
    </section>
    <div class="social-media">
        <h2>Connect with us on social media</h2>
        <div class="social-icons">
            <a href="https://www.youtube.com/@bucaudio.audiobooks"><img src="youtube.png" alt="YouTube"/></a>
            <a href="https://www.instagram.com/bucaudio/"><img src="InstagramPNG.png" alt="Instagram"/></a>
            <a href="https://www.facebook.com/people/Bucaudio/100069410423516/"><img src="Facebook-logo-blue-circle-large-transparent-png.png" alt="Facebook"/></a>
            <a href="https://www.linkedin.com/company/bucaudio"><img src="linkedin-logo-png-2026.png" alt="LinkedIn"/></a>
            <a href="https://twitter.com/BuCAudio"><img src="twitter-icon-67.png" alt="Twitter"/></a>
        </div>
    </div>

    <Footer />
    </> )

}
export default Contact;