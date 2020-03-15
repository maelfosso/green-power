import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Statistic, Row, Col, PageHeader,
} from 'antd';

const Details = props => {
  const { details } = props;
  const {
    rp, lc, lt, pf,
    pdp, pfr, pvh, pvp,
    nbh, khp, phiX, bcfp,
    pfp, fht, ftt,
  } = details;

  return (
    <div className="Details">
      <PageHeader
        title="Details"
      >
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Statistic title="Puissance atteinte" value={rp} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Statistic title="Location compteur (FCFA)" value={lc} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Statistic title="Location transformateur (FCFA)" value={lt} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Statistic title="Prime fixe (FCFA)" value={pf} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Statistic title="Penalite de depassement de puissance souscrite" value={pdp} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Statistic title="Perte fer (FCFA)" value={pfr} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Statistic title="Pertes variables HP (FCFA)" value={pvh} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Statistic title="Pertes variables pointe (FCFA)" value={pvp} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Statistic title="Nbh" value={nbh} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Statistic title="KHP" value={khp} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Statistic title="%cos phi extra" value={phiX} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Statistic title="Base de calcul (mauvais FP) (FCFA)" value={bcfp} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Statistic title="Penalite pour mauvais FP (FCFA)" value={pfp} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Statistic title="FHT" value={fht} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Statistic title="FTT" value={ftt} />
          </Col>
        </Row>

      </PageHeader>
    </div>
  );
};

Details.propTypes = {
  details: PropTypes.shape({
    rp: PropTypes.number.isRequired,
    lc: PropTypes.number.isRequired,
    lt: PropTypes.number.isRequired,
    pf: PropTypes.number.isRequired,
    pdp: PropTypes.number.isRequired,
    pfr: PropTypes.number.isRequired,
    pvh: PropTypes.number.isRequired,
    pvp: PropTypes.number.isRequired,
    nbh: PropTypes.number.isRequired,
    khp: PropTypes.number.isRequired,
    phiX: PropTypes.number.isRequired,
    bcfp: PropTypes.number.isRequired,
    pfp: PropTypes.number.isRequired,
    fht: PropTypes.number.isRequired,
    ftt: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  details: state.dataReducer.details,
});

export default connect(mapStateToProps, null)(Details);
