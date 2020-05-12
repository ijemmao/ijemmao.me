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
    <Row className="homeContainer">
      <div className="homeContent">
        <Col className="homeTitleContainer">
          <h1>Ijemma</h1>
          <h1>Onwuzulike</h1>
        </Col>
        <div className="socialLinksContainer">
          <a href="https://www.youtube.com/channel/UC-db2t_fVN3T_kzKYSNUioA" target="_blank" rel="noopener noreferrer"><img id="youtube" className="socialLink" src={YouTube} alt="YouTube icon" /></a>
          <a href="https://twitter.com/ijemmaohno" target="_blank" rel="noopener noreferrer"><img id="twitter" className="socialLink" src={Twitter} alt="Twitter icon" /></a>
          <a href="https://github.com/ijemmao" target="_blank" rel="noopener noreferrer"><img id="github" className="socialLink" src={GitHub} alt="GitHub icon" /></a>
        </div>
      </div>
    </Row>
  );
};
export default HomeContainer;

