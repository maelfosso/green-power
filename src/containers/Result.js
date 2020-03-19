import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Row, Col, Typography,
} from 'antd';

const { Text } = Typography;

const Result = props => {
  const {
    results, details, facture, contrat,
  } = props;
  const {
    rphp, rpp, rfht, tva, rfttc,
  } = results;
  const {
    rp, lc, lt, pf,
    pdp, pfr, pvh, pvp,
    nbh, khp, phiX, bcfp,
    pfp, fht, ftt, cosphi,
  } = details;
  const {
    erahp, erap, eahp, eap, ipower,
  } = facture;
  const {
    pscrite, pstrans, typecontrat, loctrans,
  } = contrat;


  return (
    <div className="Result">
      <div className="section-0 margin-bottom">
        <Row>
          <Col xs={12} sm={12} md={8}><Text strong>ENERGIE Consommee HP</Text></Col>
          <Col xs={12} sm={12} md={16} className="text-center text-md-right">{eahp}</Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={8}><Text strong>ENERGIE Consommee P</Text></Col>
          <Col xs={12} sm={12} md={16} className="text-center text-md-right">{eap}</Col>
        </Row>
      </div>

      <Row className="section-1">
        <Col xs={24} sm={12} md={8}>
          <Text strong>Autres Donnees</Text>

          <Row justify="space-between">
            <Col>Nombre d`heures d`utilisation (Hrs)</Col>
            <Col>152</Col>
          </Row>
          <Row justify="space-between">
            <Col>Cote compteur</Col>
            <Col>{typecontrat}</Col>
          </Row>
          <Row justify="space-between">
            <Col>Cos phi</Col>
            <Col>{cosphi}</Col>
          </Row>
          <Row justify="space-between">
            <Col>% Cos phi Extra</Col>
            <Col>{phiX}</Col>
          </Row>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Text strong>Donnees Puissance</Text>

          <Row justify="space-between">
            <Col>Puissance souscrite (Kw)</Col>
            <Col>{pscrite}</Col>
          </Row>
          <Row justify="space-between">
            <Col>Indicateur de puissance (kw)</Col>
            <Col>{ipower}</Col>
          </Row>
          <Row justify="space-between">
            <Col>Coefficient de puissance</Col>
            <Col>1</Col>
          </Row>
          <Row justify="space-between">
            <Col>Puissance atteinte (kw)</Col>
            <Col>{rp}</Col>
          </Row>
          <Row justify="space-between">
            <Col>Depassement de puissance (Kw)</Col>
            <Col>0</Col>
          </Row>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Text strong>Donnees Transformateurs</Text>

          <Row justify="space-between">
            <Col>Puissance Transformateurs (kva)</Col>
            <Col>{lt}</Col>
          </Row>
          <Row justify="space-between">
            <Col>Puissance Facturee (kva)</Col>
            <Col>{lc}</Col>
          </Row>
          <Row justify="space-between">
            <Col>Pertes Fer (kwh)</Col>
            <Col>{pfr}</Col>
          </Row>
          <Row justify="space-between">
            <Col>Pertes variables HTP (kwh)</Col>
            <Col>{pvh}</Col>
          </Row>
          <Row justify="space-between">
            <Col>Pertes variables P (kwh)</Col>
            <Col>{pvp}</Col>
          </Row>
        </Col>
      </Row>

      <div className="section-2">
        <Row span={24} gutter={16} justify="space-around">
          <Col md={5}>Elements de factures</Col>
          <Col md={2}>Qte</Col>
          <Col md={2}>Tarif</Col>
          <Col md={5}>Montant (CFA)</Col>
          <Col md={5}>Montant a Payer</Col>
          <Col md={5}>Montant (CFA)</Col>
        </Row>
        <Row span={24} gutter={8}>
          <Col xs={{ span: 19, offset: 0}} md={{ span: 5, offset:14}}>Extra 10% zone Franche client</Col>
          <Col md={5}>0</Col>
        </Row>
        <Row span={24} gutter={8}>
          <Col xs={24} md={5}>
            <Row span={24}>
              <Col xs={12} md={0}><Text strong>Elements de factures</Text></Col>
              <Col xs={12} md={24}><Text>Energie Active Hors pointe (kwh)</Text></Col>
            </Row>
          </Col>
          <Col xs={24} md={2}>
            <Row span={24}>
              <Col xs={12} md={0}><Text strong>Qte</Text></Col>
              <Col xs={12} md={24}><Text>{eahp}</Text></Col>
            </Row>
          </Col>
          <Col xs={24} md={2}>
            <Row span={24}>
              <Col xs={12} md={0}><Text strong>Tarif</Text></Col>
              <Col xs={12} md={24}><Text>70</Text></Col>
            </Row>
          </Col>
          <Col xs={24} md={5}>
            <Row span={24}>
              <Col xs={12} md={0}><Text strong>Montant (CFA)</Text></Col>
              <Col xs={12} md={24}><Text>{ eahp * 70 }</Text></Col>
            </Row>
          </Col>
          <Col xs={24} md={5}>
            <Row span={24}>
              <Col xs={12} md={0}><Text strong>Montant a Payer</Text></Col>
              <Col xs={12} md={24}><Text>Extra 10% Franche pouvoir public</Text></Col>
            </Row>
          </Col>
          <Col xs={24} md={5}>
            <Row span={24}>
              <Col xs={12} md={0}><Text strong>Montant (CFA)</Text></Col>
              <Col xs={12} md={24}><Text><Text>-</Text></Text></Col>
            </Row>
          </Col>
        </Row>
        <Row span={24} gutter={8}>
          <Col xs={24} md={5}><Text>Energie active pointe (kwh)</Text></Col>
          <Col xs={24} md={2}><Text>{eap}</Text></Col>
          <Col xs={24} md={2}><Text>85</Text></Col>
          <Col xs={24} md={5}><Text>{eap * 85}</Text></Col>
          <Col xs={24} md={5}><Text>Montant total hors taxes</Text></Col>
          <Col xs={24} md={5}><Text>{fht}</Text></Col>
        </Row>
        <Row span={24} gutter={8}>
          <Col xs={24} md={5}><Text>Pertes fer (kwh)</Text></Col>
          <Col xs={24} md={2}><Text>{pfr}</Text></Col>
          <Col xs={24} md={2}><Text>70</Text></Col>
          <Col xs={24} md={5}><Text>{pfr * 70}</Text></Col>
          <Col xs={24} md={5}><Text>Taxes</Text></Col>
          <Col xs={24} md={5}><Text>{tva}</Text></Col>
        </Row>
        <Row span={24} gutter={8}>
          <Col xs={24} md={5}><Text>Pertes variables hp (kwh)</Text></Col>
          <Col xs={24} md={2}><Text>{pvh}</Text></Col>
          <Col xs={24} md={2}><Text>70</Text></Col>
          <Col xs={24} md={5}><Text>{pvh * 70}</Text></Col>
          <Col xs={24} md={5}><Text>Autres/Others</Text></Col>
          <Col xs={24} md={5}><Text>-</Text></Col>
        </Row>
        <Row span={24} gutter={8}>
          <Col xs={24} md={5}><Text>Pertes variables p (Kwh)</Text></Col>
          <Col xs={24} md={2}><Text>{pvp}</Text></Col>
          <Col xs={24} md={2}><Text>85</Text></Col>
          <Col xs={24} md={5}><Text>{pvp * 85}</Text></Col>
          <Col xs={24} md={5}><Text>Montant hors taxes</Text></Col>
          <Col xs={24} md={5}><Text>{fht}</Text></Col>
        </Row>
        <Row span={24} gutter={8}>
          <Col xs={24} md={5}><Text>Location compteur</Text></Col>
          <Col xs={24} md={2}><Text>{lc}</Text></Col>
          <Col xs={24} md={2}><Text>0</Text></Col>
          <Col xs={24} md={5}><Text>-</Text></Col>
          <Col xs={24} md={5}><Text>TVA sur Autres</Text></Col>
          <Col xs={24} md={5}><Text /></Col>
        </Row>
        <Row span={24} gutter={8}>
          <Col xs={24} md={5}><Text>Location transformateurs</Text></Col>
          <Col xs={24} md={2}><Text /></Col>
          <Col xs={24} md={2}><Text>{lt}</Text></Col>
          <Col xs={24} md={5}><Text>{lt}</Text></Col>
          <Col xs={24} md={5}><Text>TVA client</Text></Col>
          <Col xs={24} md={5}><Text>{tva}</Text></Col>
        </Row>
        <Row span={24} gutter={8}>
          <Col xs={24} md={5}><Text>Prime fixe</Text></Col>
          <Col xs={24} md={2}><Text /></Col>
          <Col xs={24} md={2}><Text>{pf}</Text></Col>
          <Col xs={24} md={5}><Text>{pf}</Text></Col>
          <Col xs={24} md={5}><Text /></Col>
          <Col xs={24} md={5}><Text /></Col>
        </Row>
        <Row span={24} gutter={8}>
          <Col xs={24} md={5}><Text>Depassement de puissance</Text></Col>
          <Col xs={24} md={2}><Text /></Col>
          <Col xs={24} md={2}><Text>0</Text></Col>
          <Col xs={24} md={5}><Text>-</Text></Col>
          <Col xs={24} md={5}><Text>MONTANT TOTAL FACTURE</Text></Col>
          <Col xs={24} md={5}><Text>{ftt}</Text></Col>
        </Row>
      </div>
      <div className="section-3">
        <Row>
          <Col xs={24} md={5}><Text>Base de calcul (mauvais FP)</Text></Col>
          <Col xs={24} md={2}><Text /></Col>
          <Col xs={24} md={2}><Text>{bcfp}</Text></Col>
          <Col xs={24} md={5}><Text>{bcfp}</Text></Col>
          <Col xs={24} md={5} />
          <Col xs={24} md={5} />
        </Row>
        <Row>
          <Col xs={24} md={5}><Text>Penalites pour mauvais F.P.</Text></Col>
          <Col xs={24} md={2}><Text /></Col>
          <Col xs={24} md={2}><Text>{pfp}</Text></Col>
          <Col xs={24} md={5}><Text>{pfp}</Text></Col>
          <Col xs={24} md={5} />
          <Col xs={24} md={5} />
        </Row>
      </div>
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
  details: PropTypes.shape({
    cosphi: PropTypes.number.isRequired,
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
  facture: PropTypes.shape({
    erahp: PropTypes.number.isRequired,
    erap: PropTypes.number.isRequired,
    eahp: PropTypes.number.isRequired,
    eap: PropTypes.number.isRequired,
    ipower: PropTypes.number.isRequired,
  }).isRequired,
  contrat: PropTypes.shape({
    pscrite: PropTypes.number.isRequired,
    pstrans: PropTypes.number.isRequired,
    typecontrat: PropTypes.string.isRequired,
    loctrans: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  results: state.dataReducer.results,
  details: state.dataReducer.details,
  facture: state.dataReducer.ffacture,
  contrat: state.dataReducer.fcontrat,
});

export default connect(mapStateToProps, null)(Result);
