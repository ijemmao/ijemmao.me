import React, { useEffect } from 'react';
import $ from 'jquery';
import ProjectPreview from '../components/projectPreview';
import { map } from 'lodash';
import { projects } from '../utils/constants/projects';

const ProjectsContainer = () => {
  useEffect(() => {
    $('.projectPreviewContainer').fadeIn(300);
    $('.projectPreviewContainer').css({ top: '0px' });
  }, []);
  
  const renderProjectPreviews = () => (
    map(projects, (project) => (
      <ProjectPreview
        key={project.title}
        {...project}
      />
    ))
  )
  return (
      <div style={{ marginTop: '10vh' }}>
        {renderProjectPreviews()}
      </div>
  );
};

export default ProjectsContainer;

