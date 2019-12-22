import React from 'react';
import Layout from '../components/layout';
import Home from './home';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home | Ijemma Onwuzulike" />
    <Home />
  </Layout>
)

export default IndexPage
