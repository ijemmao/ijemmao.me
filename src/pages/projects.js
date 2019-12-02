import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Layout from '../components/layout';
import Sidebar from '../components/sidebar';
import ProjectPreview from '../components/projectPreview';
import { map } from 'lodash';
import { projects } from '../utils/constants/projects';

const Projects = () => {
  useEffect(() => {
    ScrollReveal().reveal('.projectPreviewContainer');
  }, [])
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
