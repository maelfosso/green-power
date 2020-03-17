import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Statistic, Row, Col, PageHeader,
} from 'antd';


const Result = props => {
  const { results } = props;
  const {
    rphp, rpp, rfht, tva, rfttc,
  } = results;

  return (
    <div className="Result">
      <PageHeader
        title="Result"
      >
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={12}>
            <Statistic title="Tarif hors pointe (FCFA/KWh)" value={rphp} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Statistic title="Tarif pointe (FCFA/KWh)" value={rpp} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Statistic title="Montant HT (FCFA)" value={rfht} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Statistic title="TVA" value={tva} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Statistic title="Montant TTC (FCFA)" value={rfttc} />
          </Col>
        </Row>

      </PageHeader>
    </div>
  );
};

Result.propTypes = {
  results: PropTypes.shape({
    rphp: PropTypes.number.isRequired,
    rpp: PropTypes.number.isRequired,
    rfht: PropTypes.number.isRequired,
    tva: PropTypes.number.isRequired,
    rfttc: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  results: state.dataReducer.results,
});

export default connect(mapStateToProps, null)(Result);
