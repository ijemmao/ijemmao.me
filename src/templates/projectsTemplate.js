import React, { useEffect } from 'react';
import $ from 'jquery';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import './projectsTemplate.less';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data;
  const { html } = markdownRemark;

  useEffect(() => {
    $('.blog-post-content').fadeIn(500);
  }, []);

  return (
    <Layout>
      <main>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
