import React from "react";
import './About.css';
import buc from './images/BuC.png';


const About = ()=> {
    return(<>
        <div class="Whole bg-white">
        <div class="container text-center">
            <h1>
                <span class="font-weight-bold text-black font-weight">About </span>
                <span class="text-primary">Us</span>
            </h1>
            <div class="row align-items-center">
                <div class="col-md-6">
                    <img src = {buc} alt="BuC Audio" class="img-fluid"/>
                </div>
                <div class="col-md-6">
                    <p class="font-weight">
                        Introducing BuCAudio, your ultimate destination for immersive studying, learning, and storytelling through audiobooks. BuCAudio is a groundbreaking new startup that aims to revolutionize the way you experience studies, stories, and literature by bringing captivating narratives to life through the power of audio. With a vast library of titles spanning various genres, BuCAudio offers an unmatched selection for book lovers and audio enthusiasts alike. Also, we're emphasizing on designing and creating a complete organized syllabus for the students at all the standards.
                    </p>
                    <p class="font-weight">
                        At BuCAudio, we understand the importance of great learning and a great narrator, and that's why we handpick talented voices and subject matter experts to breathe life into every story. From award-winning actors to seasoned voice artists, our narrators skillfully transport you into the heart of the narrative, creating a truly immersive listening experience at the most affordable pricing across the globe.
                    </p>
                </div>
            </div>
        </div>
    </div>
  </>  

)
};
export default About;