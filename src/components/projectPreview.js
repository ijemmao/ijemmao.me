import React, { useState } from 'react';
import timetracker from '../images/timetracker.png';
import hamono from '../images/hamono.png';
import './projectPreview.less';

const ProjectPreview = ({
  color,
  title,
  src,
  url,
  duration,
  position,
  id
}) => {
  const [hover, setHover] = useState(false);
  
  const handleMouseEnter = (e) => setHover(true);
  const handleMouseLeave = (e) => setHover(false);


  return (
    <div
      onClick={() => window.location = url }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: `${color}` }}
      className="projectPreviewContainer"
    >
      <div className={`${hover ? 'maskHover' : ''} ${id} mask`}>
        <img
          src={src}
          alt="Project mock" />
      </div>
      <div className="headerContainer">
        <h3>{title}</h3>
          <h4>{duration}</h4>
          <h4>{position}</h4>
       </div>
    </div>
  );
};

export default ProjectPreview;
