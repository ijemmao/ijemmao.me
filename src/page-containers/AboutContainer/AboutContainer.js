import React, { useEffect } from 'react';
import $ from 'jquery';
import './AboutContainer.less';

const AboutContainer = () => {
  useEffect(() => {
    $('.aboutContainer').animate({ opacity: 1 }, 300);
  }, []);
  return (
    <span className="aboutContainer">
      <h2 style={{ textAlign: 'center' }}>Hello <span role="img" aria-label="Brown hand waving">👋🏾</span></h2>
      <p>I'm Ijemma a software engineer at <a href="https://squarespace.com/">Squarespace</a> in New York City.</p>
      <p>
        To keep up with my day-to-day, follow me on <a href="https://twitter.com/ijemmaohno">Twitter</a>.
      </p>
      <p>For my professional experience, take a look at my <a href="https://www.linkedin.com/in/ijemmao/">LinkedIn</a>.</p>
    </span>
  );
}

export default AboutContainer;

