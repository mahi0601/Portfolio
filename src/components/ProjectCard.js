// src/components/ProjectCard.js
import React from 'react';
import '../Projects.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-tech">Tech Stack: {project.tech}</p>
            <p className="project-views">Views: {project.views}</p>
            <a href={project.link} className="project-link">CHECK ➔</a>
        </div>
    );
};

export default ProjectCard;
