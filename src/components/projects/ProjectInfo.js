import React from "react";
import "./ProjectInfo.scss";
import GithubIcon from "../../assets/projects/github.svg";
import ShareIcon from "../../assets/projects/share.svg";

function ProjectInfo({ title, description, techStack, imageSrc, liveLink, sourceLink }) {
    console.log(techStack);
    return (
        <div className="project-container">
            <div className="project">
                <div className="project-content">
                    <div className="project-label">Featured Project</div>
                    <h4 className="project-title"><a href={liveLink} rel="noreferrer noopener" target="_blank">{title}</a></h4>
                    <div className="project-details">
                        <p>{description}
                        </p>
                        <ul>
                            {techStack.map((techName, idx) => {
                                return (
                                    <li>{techName}</li>
                                )
                            })}
                        </ul>
                        <a className="link-icon" href={liveLink}><img className="icon" width="40px" height="40px" src={ShareIcon}></img></a>
                        <a className="github-icon" href={sourceLink}><img className="icon" width="40px" height="40px" src={GithubIcon}></img></a>
                    </div>
                </div>
                <div className="project-img">
                    <img src={imageSrc} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProjectInfo;