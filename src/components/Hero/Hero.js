import React from 'react'
import './Hero.css'
import About from './About/About'
import Project from './Project/Project'
import Skill from './Skills/Skill'
import Contact from './Contact/Contact'
import Activities from './Activities/Activities'
const Hero = () => {
    return (
        <div className="body">
            <section id='about'>
                <About />
            </section>
            <section id='about me'>
             <Project />
            </section>
            <section id='projects'>
             <Skill />
            </section>
            <section id='activities'>
             <Activities />
            </section>
            <section id='contact'>
             <Contact />
            </section>
            
         
        </div>
    )
}

export default Hero
