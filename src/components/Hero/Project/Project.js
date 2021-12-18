import React from 'react'
import Separator from '../../common/Separator/Separator';
import { ProjectData } from '../../data/projects';
import './Project.css';
import ProjectCard from './Projectcard';
function Project(){
    const Data= ProjectData;
    return <div className="ab">
       
             <label className=" numbered-heading "><p className='number '>01.&nbsp;&nbsp;&nbsp;</p> About Me</label>
             <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@300&display=swap" rel="stylesheet"/>
       
	   <p className='bout'>
		   Hello! My name is <span className='nm'>Prem Raj</span> and I love creating things on Internet.
		   <br />
		    I'm highly interested in <span className='nm'>Blockchain Technology</span> and its Development.<br />
		   I started coding since my 8th grade. My interest in <span className='nm'>Web Development</span> <br /> started in my First Year of College. 
		    I have good knowledge of HTML, CSS, Javascript.
			<br />
			Beside Development, I like to do Competitive Coding. 
			<br />
			<br />
			I build websites using <span className='nm'>MERN</span> ( MongoDB, ExpressJS, ReactJS, NodeJS ) stack.
			<br />
			I'm currently looking for an Internship in Web Developement.
             <br />
             <br />

			 Here are a few technologies I’ve been working with recently:
			 <br />
			 <ul className='tech'>
                   <li>
					   
				   ▹ Javascript
				   </li>
                   <li>
				   ▹ ReactJS
				   </li>
                   <li>
                   ▹ Tailwind CSS
				   </li>
                   <li>
				   ▹  MongoDB
				   </li>
                   <li>
				   ▹ Bootstrap
				   </li>
                   <li>
				   ▹ NodeJS
				   </li>
			 </ul>
	   </p>

    </div>
}



export default Project
