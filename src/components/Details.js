import React from 'react';
import {
  Statistic, Row, Col, PageHeader,
} from 'antd';

function Details() {
  return (
    <div className="Details">
      <PageHeader
        title="Details"
      >
        <Row gutter={[32, 32]}>
          <Col span={6}>
            <Statistic title="RP" value={130} />
          </Col>
          <Col span={6}>
            <Statistic title="LC" value={0} />
          </Col>
          <Col span={6}>
            <Statistic title="LT" value={9600} />
          </Col>
          <Col span={6}>
            <Statistic title="PF" value={277500} />
          </Col>
          <Col span={6}>
            <Statistic title="PDP" value={203500} />
          </Col>
          <Col span={6}>
            <Statistic title="Pfr" value={1152} />
          </Col>
          <Col span={6}>
            <Statistic title="Pvh" value={1423} />
          </Col>
          <Col span={6}>
            <Statistic title="Pvp" value={401} />
          </Col>
          <Col span={6}>
            <Statistic title="Nbh" value={491} />
          </Col>
          <Col span={6}>
            <Statistic title="KHP" value={60} />
          </Col>
          <Col span={6}>
            <Statistic title="%phiX" value={0} />
          </Col>
          <Col span={6}>
            <Statistic title="BCFP" value={4448405} />
          </Col>
          <Col span={6}>
            <Statistic title="Pfp" value={0} />
          </Col>
          <Col span={6}>
            <Statistic title="FHT" value={4661505} />
          </Col>
          <Col span={6}>
            <Statistic title="FTT" value={5558845} />
          </Col>
        </Row>

      </PageHeader>
    </div>
  );
}

export default Details;
