import React, { useEffect } from 'react';
import $ from 'jquery';
import { Row, Col } from 'antd';
import YouTube from '../../images/youtube.svg';
import Twitter from '../../images/twitter.svg';
import GitHub from '../../images/github.svg';
import './HomeContainer.less';

const HomeContainer = () => {
  useEffect(() => {
    $('.homeContainer').fadeIn(300);
    $('.homeContainer').css({ display: 'flex' });
  }, []);
  return (
    <div className="homeContainer">
    <h1 className="title">Ijemma Onwuzulike</h1>
    <Row className="videos">
      <iframe type="text/html" width="560" height="315" src="https://www.youtube.com/embed/QUssVD41DjU" frameborder="0"></iframe>
      <iframe text="text/html" width="560" height="315" src="https://www.youtube.com/embed/vHfNWsN8rTA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Row>
      <Row className="socialLinksContainer">
        <a href="https://www.youtube.com/c/IjemmaOnwuzulike" target="_blank" rel="noopener noreferrer"><img id="youtube" className="socialLink" src={YouTube} alt="YouTube icon" /></a>
        <a href="https://twitter.com/ijemmaohno" target="_blank" rel="noopener noreferrer"><img id="twitter" className="socialLink" src={Twitter} alt="Twitter icon" /></a>
        <a href="https://github.com/ijemmao" target="_blank" rel="noopener noreferrer"><img id="github" className="socialLink" src={GitHub} alt="GitHub icon" /></a>
      </Row>
    </div>
  );
};
export default HomeContainer;

