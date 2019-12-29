import React, { useEffect } from 'react';
import $ from 'jquery';
import { Row, Col } from 'antd';
import Twitter from '../../images/twitter.svg';
import GitHub from '../../images/github.svg';
import './HomeContainer.less';

const HomeContainer = () => {
  useEffect(() => {
    $('.homeContainer').fadeIn(300);
    $('.homeContainer').css({ display: 'flex' });
  }, []);
  return (
    <Row className="homeContainer">
      <div className="homeContent">
        <Col className="homeTitleContainer">
          <h1>Ijemma</h1>
          <h1>Onwuzulike</h1>
        </Col>
        <div className="socialLinksContainer">
          <a href="https://twitter.com/_ionwu_" target="_blank" rel="noopener noreferrer"><img id="twitter" className="socialLink" src={Twitter} alt="Twitter icon" /></a>
          <a href="https://github.com/ijemmao" target="_blank" rel="noopener noreferrer"><img id="github" className="socialLink" src={GitHub} alt="GitHub icon" /></a>
        </div>
      </div>
    </Row>
  );
};
export default HomeContainer;

