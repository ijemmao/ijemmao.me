import React from 'react';
import ProjectPreview from '../components/projectPreview';
import { map } from 'lodash';
import { projects } from '../utils/constants/projects';

const ProjectsContainer = () => {
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

