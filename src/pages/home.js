import React from 'react';
import { Layout, Row, Col } from 'antd';
import Twitter from '../images/twitter.svg';
import GitHub from '../images/github.svg';

const Home = () => (
  <Layout>
    <Row style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '90vh',
      width: '95vw',
      maxWidth: 1600,
    }}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'flex-end',
      width: '100%',
    }}>
      <Col>
        <h1>Ijemma</h1>
        <h1>Onwuzulike</h1>
      </Col>
      <div>
        <a href="https://twitter.com/_ionwu_" target="_blank"><img id="twitter" className="socialLink" src={Twitter} alt="Twitter icon" /></a>
        <a href="https://github.com/ijemmao" target="_blank"><img id="github" className="socialLink" src={GitHub} alt="GitHub icon" /></a>
      </div>
    </div>
    </Row>
  </Layout>
);

export default Home;
