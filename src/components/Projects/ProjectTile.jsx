import React from 'react'

import ExternalLink from '../../icons/external-link.png';
import GitHub from '../../icons/github.png';

const ProjectTile = ({ title, description, pageUrl, gitUrl, imageUrl, techs }) => {
  
  return (
    <div className="project-tile grid-tile" data-nav="show">
      <img src={imageUrl} alt={`thumbnail for ${title}`} />
      <div className="tile-overlay">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="techs">
          {techs.join(" | ")}
        </div>
        <div className="tile-links">
          <a href={pageUrl}><img className="icon" src={ExternalLink} alt="external link" /></a>
          <a href={gitUrl}><img className="icon" src={GitHub} alt="github link" /></a>
        </div>
      </div>

    </div>
  )
}

export default ProjectTile