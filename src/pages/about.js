import React from 'react';
import { AboutContainer } from '../page-containers';
import Layout from '../components/layout';
import SEO from '../components/seo';

const About = () => (
  <Layout>
    <SEO title="About" />
    <main>
      <AboutContainer />
    </main>
  </Layout>
);

export default About;
