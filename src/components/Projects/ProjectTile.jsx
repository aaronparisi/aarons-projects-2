import React from "react";
import { Tooltip } from "@mui/material";

import ExternalLink from "../../icons/external-link.png";
import GitHub from "../../icons/github.png";
import Construction from "../../icons/construction.png";

const ProjectTile = ({
  title,
  description,
  pageUrl,
  gitUrl,
  imageUrl,
  techs,
  underConstruction = false,
}) => {
  return (
    <div className="project-tile grid-tile" data-nav="show">
      <img src={imageUrl} alt={`thumbnail for ${title}`} />
      <div className="tile-overlay">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="techs">{techs.join(" | ")}</div>
        <div className="tile-links">
          {underConstruction && (
            <Tooltip title="Under construction, please be kind!">
              <img
                className="icon construction-icon"
                src={Construction}
                alt="construction icon"
              />
            </Tooltip>
          )}
          <a target="_blank" rel="noreferrer" href={pageUrl}>
            <img className="icon" src={ExternalLink} alt="external link" />
          </a>
          <a target="_blank" rel="noreferrer" href={gitUrl}>
            <img className="icon" src={GitHub} alt="github link" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;

