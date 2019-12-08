import React from 'react';
import { Layout, Row, Col } from 'antd';

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
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      width: '100%',
    }}>
      <Col>
        <h1>Ijemma</h1>
        <h1>Onwuzulike</h1>
      </Col>
      <h3 className="short">👩🏾‍💻</h3>
    </div>
    </Row>
  </Layout>
);

export default Home;
