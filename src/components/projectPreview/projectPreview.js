import React, { useState } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import $ from 'jquery';
import timetracker from '../images/timetracker.png';
import hamono from '../images/hamono.png';
import handleNavigation from '../utils/handleNavigation';
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

  const pageTransition = () => {
    const projectDataUrl = `${window.location.origin}/page-data${url}/page-data.json`;

    handleNavigation(url, projectDataUrl, (data) => {
      const { result: { data: { markdownRemark: { html: projectData } } } } = data;
      const projectPage = $(projectData);


      // Grabs sections of old and new page
      const main = document.querySelector('main');
      const blogPostContent = document.createElement('div');
      blogPostContent.classList.add('blog-post-content');
      // Updates DOM
      $(main.firstChild).fadeOut(300, () => {
        unmountComponentAtNode(main);

        setTimeout(() => {
          $(blogPostContent).html(projectPage);
          $(main).html(blogPostContent);
          $(blogPostContent).fadeIn(500);
        }, 300);
        
      });
    });
  }

  return (
    <div
      onClick={pageTransition}
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
