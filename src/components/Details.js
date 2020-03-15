import React from 'react';
import { connect } from 'react-redux';

import {
  Statistic, Row, Col, PageHeader,
} from 'antd';

const Details = props => {
  const { details } = props;
  const { 
    rp, lc, lt, pf,
    pdp, pfr, pvh, pvp,
    nbh, khp, phiX, bcfp,
    pfp, fht, ftt
  } = details;

  return (
    <div className="Details">
      <PageHeader
        title="Details"
      >
        <Row gutter={[32, 32]}>
          <Col span={6}>
            <Statistic title="RP" value={rp} />
          </Col>
          <Col span={6}>
            <Statistic title="LC" value={lc} />
          </Col>
          <Col span={6}>
            <Statistic title="LT" value={lt} />
          </Col>
          <Col span={6}>
            <Statistic title="PF" value={pf} />
          </Col>
          <Col span={6}>
            <Statistic title="PDP" value={pdp} />
          </Col>
          <Col span={6}>
            <Statistic title="Pfr" value={pfr} />
          </Col>
          <Col span={6}>
            <Statistic title="Pvh" value={pvh} />
          </Col>
          <Col span={6}>
            <Statistic title="Pvp" value={pvp} />
          </Col>
          <Col span={6}>
            <Statistic title="Nbh" value={nbh} />
          </Col>
          <Col span={6}>
            <Statistic title="KHP" value={khp} />
          </Col>
          <Col span={6}>
            <Statistic title="%phiX" value={phiX} />
          </Col>
          <Col span={6}>
            <Statistic title="BCFP" value={bcfp} />
          </Col>
          <Col span={6}>
            <Statistic title="Pfp" value={pfp} />
          </Col>
          <Col span={6}>
            <Statistic title="FHT" value={fht} />
          </Col>
          <Col span={6}>
            <Statistic title="FTT" value={ftt} />
          </Col>
        </Row>

      </PageHeader>
    </div>
  );
}

const mapStateToProps = state => ({
  details : state.dataReducer.details
});

export default connect(mapStateToProps, null)(Details);

