import React from "react";
import { NavLink } from "react-router-dom";
import './Heading.css';


const Heading = ()=> {
    return(
        <nav class="navbar navbar-expand-lg navbar-light p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
        <img src="BuC.png" width="65" height="65" class="d-inline-block align-top" alt="logo"/>
        <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item active nav-link ">
                    <NavLink to ='/'>Discover</NavLink>
                </li>
                <li class="nav-item active nav-link ">
                    <NavLink to ='/Services&Packages'>Services and Packages</NavLink>
                </li>
                <li class="nav-item active nav-link ">
                    <NavLink to ='/Aboutus'>About Us</NavLink>
                </li>
                <li class="nav-item active nav-link ">
                    <NavLink to ='/Ourteams'>Our Team<span class="sr-only">(current)</span></NavLink>
                </li>
                <li  class="nav-item active nav-link ">
                    <NavLink to ='/Legal'> Legal</NavLink>
                </li>
                <li class="nav-item active nav-link ">
                    <NavLink to ='/Contact'> Contact Us</NavLink>
                </li>
            </ul>
            <a class="btn btn-primary" href="https://www.youtube.com/@bucaudio.audiobooks" role="button">Listen Now</a>
        </div>
    </nav>
    
    )

}
export default Heading;