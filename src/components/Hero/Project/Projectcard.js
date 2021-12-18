import React from 'react'
import './projectcard.css'
function ProjectCard({project}){
    return <div className="project-card">
        <div className="project-info">
    <label className="project-title">
        {project.title}
    </label>
    <p>{project.about}</p>
    <div className="project-links">
     {project.demo && (<a className="project-link" href={project.demo}> 
         <div className="link-button">
         <i class="uil uil-google-play"></i>Demo
         </div>
         </a>)}
     {project.github && (<a className="project-link" href={project.github}> 
         <div className="link-button">
         <i class="uil uil-github-alt"></i>Github
         </div>
         </a>)}
    </div>
    <br />
    <div>
        {project.tags.map((tag)=>{
            return <label className="tags">{tag} </label>
        })}
    </div>
        </div>
                <img src={project.image} className="project-photo" />
    
    </div>
}

export default ProjectCard
