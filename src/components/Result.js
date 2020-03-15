import React from 'react';
import { Statistic, Row, Col, Button, PageHeader } from 'antd';


function Result() {
  return (
    <div className="Result">
      <PageHeader
        title="Result"
      >
        <Row gutter={[48, 16]} justify="space-between">
          <Col>
            <Statistic title="Prix du Kwh hors pointe (FCFA)" value={60} />
          </Col>
          <Col>
            <Statistic title="Prix du Kwh pointe (FCFA)" value={85} />
          </Col>
          <Col>
            <Statistic title="Facture HT (FCFA)" value={4661505} />
          </Col>
          <Col>
            <Statistic title="TVA" value={897340} />
          </Col>
          <Col>
            <Statistic title="Facture TTC (FCFA)" value={5558845} />
          </Col>
        </Row>
      
      </PageHeader>
    </div>
  );
}

export default Result;