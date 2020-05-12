import React from 'react';
import Layout from '../components/layout';
import { ProjectsContainer } from '../page-containers';
import SEO from '../components/seo';

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <main>
      <ProjectsContainer />
    </main>
  </Layout>
);


export default Projects;
