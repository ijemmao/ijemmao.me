import React, { useEffect } from 'react';
import $ from 'jquery';

const AboutContainer = () => {
  useEffect(() => {
    $('.aboutContainer').fadeIn(300);
  }, []);
  return (
    <span className="aboutContainer">
      <h2>Hello <span role="img" aria-label="Brown hand waving">👋🏾</span></h2>
      <p>I'm Ijemma a software engineer at Squarespace in New York City.</p>
      <p>
        Follow me on <a href="https://twitter.com/_ionwu_">Twitter</a> to see my latest work.
      </p>
      <p>You can also see my professional experience on <a href="https://www.linkedin.com/in/ijemmao/">here</a>.</p>
      <p>Thanks for stopping by!</p>
    </span>
  );
}

export default AboutContainer;

