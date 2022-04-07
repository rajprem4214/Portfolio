import React, { useEffect, useRef } from "react";
import "./About.css";
import Aos from "aos";
import TypeWriter from "typewriter-effect";
import SocialContact from "../../common/social-contact/SocialContact";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="about">
      <section>
        <h1 data-aos="fade-up" className="Name">Prem Raj</h1>
        <p data-aos="fade-up"
          style={{
            
          }} className="tagline"
        >
          MERN Stack Developer ~ Competitive Coder
        </p>
        <p  data-aos="fade-up" style={{
            
        }} className="quote1">
        This place is nice, but not nice enough to die in.</p> 
   
        <p data-aos="fade-up" style={{
            
        }} className="quote2"> Let's win and get outta here.
        </p>
      </section>

      <div data-aos="fade-down" className="scontact">
        <SocialContact />
      </div>
    </div>
  );
};

export default About;
