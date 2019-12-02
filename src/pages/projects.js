import React from 'react';
import Layout from '../components/layout';
import Sidebar from '../components/sidebar';
import ProjectPreview from '../components/projectPreview';
import { map } from 'lodash';
import { projects } from '../utils/constants/projects';

const Projects = () => {
  const renderProjectPreviews = () => (
    map(projects, (project) => (
      <ProjectPreview
        {...project}
      />
    ))
  )
  return (
    <Layout>
      <Sidebar />
      <div style={{ marginTop: '10vh' }}>
        {renderProjectPreviews()}
      </div>
    </Layout>
  );
};

export default Projects;
