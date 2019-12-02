import React from 'react';
import { Layout, Row, Col } from 'antd';

const Home = () => (
  <Layout>
    <Row style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      width: '95vw',
    }}>
      <Col>
        <h1>Ijemma</h1>
        <h1>Onwuzulike</h1>
      </Col>
      <h3 className="short"><span className="bold">excited</span> by all things <span className="bold">web</span></h3>
    </Row>
  </Layout>
);

export default Home;
