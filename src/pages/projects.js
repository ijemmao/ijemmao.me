import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Layout from '../components/layout';
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
        key={project.title}
        {...project}
      />
    ))
  )
  return (
    <Layout>
      <main>
        <div style={{ marginTop: '10vh' }}>
          {renderProjectPreviews()}
        </div>
      </main>
    </Layout>
  );
};

export default Projects;
