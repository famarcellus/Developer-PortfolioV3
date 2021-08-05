import React from "react";
import "./Projects.scss";
import ProjectInfo from "./ProjectInfo";
import ProjectData from "../../data/ProjectData";

function Projects() {
    return (
        <section id="projects" className="projects-section section">
            <div className="title-container">
                <h2 className="section-title">Things I've Built</h2>
            </div>
            {/* <div className="details">
                <p>Heloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo</p>
            </div> */}
            {ProjectData.map((project, idx) => {
                console.log(project.techStack);
                return (
                    <ProjectInfo
                        title={project.title}
                        description={project.description}
                        techStack={project.techStack}
                        imageSrc={project.imageSrc}
                        liveLink={project.liveLink}
                        sourceLink={project.sourceLink}
                    />
                )
            })}
        </section>
    )
}

export default Projects;