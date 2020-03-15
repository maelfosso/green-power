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
        <Row gutter={[48, 16]} justify="space-between">
          <Col>
            <Statistic title="Prix du Kwh hors pointe (FCFA)" value={rphp} />
          </Col>
          <Col>
            <Statistic title="Prix du Kwh pointe (FCFA)" value={rpp} />
          </Col>
          <Col>
            <Statistic title="Facture HT (FCFA)" value={rfht} />
          </Col>
          <Col>
            <Statistic title="TVA" value={tva} />
          </Col>
          <Col>
            <Statistic title="Facture TTC (FCFA)" value={rfttc} />
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
