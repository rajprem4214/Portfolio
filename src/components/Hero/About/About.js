import React, { useEffect, useRef } from 'react'
import './About.css'

import TypeWriter from "typewriter-effect"
import SocialContact from '../../common/social-contact/SocialContact'

const About = () => {
     

   
    return (
        <div className="about ">
            <div className="about-top">
                 <div className="about-info">
                     <div className="">
                         <div className=''>

                         </div>
                      <p className="name">Hi, I'm Prem.</p> 
                      <div className="twr type ">
                       A Blockchain Enthusiast,
                      </div>
                          <span className="twr tag">
                          and a   &nbsp;
                         
                    <span className='type '>
                       MERN Stack Developer.

                    </span>
                         
                            <br />
                            <p className='text-lg clr'>

                       I'm currently pursuing Information Technology from
                            </p>
                       
                       <p className='text-lg clr'>

                        Nitte Meenakshi Institute Of Technology,Bangalore.
                       </p>
                           
                        </span>
                
                  
                     </div>
                     <div className='button-64'><a href="#" download target="_blank">Resume</a>

                     </div>
                 </div>
                 <div className="about-photo gradient-border picture">
                    <img src={require("../../../assets/prem.jpg").default} className="" />
                 </div>
            </div>
            <div className="about-bottom">
      <SocialContact />
            </div>
          
  
            
        </div>
    )
}

export default About
