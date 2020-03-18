import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Statistic, Row, Col, PageHeader, Typography
} from 'antd';

const { Text } = Typography;

const Result = props => {
  const { results } = props;
  const {
    rphp, rpp, rfht, tva, rfttc,
  } = results;

  return (
    <div className="Result">
      <div className="section-0 margin-bottom">
        <Row>
          <Col xs={12} sm={12} md={8}><Text strong>ENERGIE Consommee HP</Text></Col>
          <Col xs={12} sm={12} md={16} className="text-center text-md-right">15000</Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={8}><Text strong>ENERGIE Consommee P</Text></Col>
          <Col xs={12} sm={12} md={16} className="text-center text-md-right">198</Col>
        </Row>
      </div>
      
      <Row className="section-1">
        <Col xs={24} sm={12} md={8}>
          <Text strong>Autres Donnees</Text>

          <Row justify="space-between">
            <Col>Nombre d'heures d'utilisation (Hrs)</Col>
            <Col>152</Col>
          </Row>
          <Row justify="space-between">
            <Col>Cote compteur</Col>
            <Col>MT/MTC</Col>
          </Row>
          <Row justify="space-between">
            <Col>Cos phi</Col>
            <Col>0.76</Col>
          </Row>
          <Row justify="space-between">
            <Col>% Cos phi Extra</Col>
            <Col>4%</Col>
          </Row>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Text strong>Donnees Puissance</Text>
          
          <Row justify="space-between">
            <Col>Puissance souscrite (Kw)</Col>
            <Col>100</Col>
          </Row>
          <Row justify="space-between">
            <Col>Indicateur de puissance (kw)</Col>
            <Col>43</Col>
          </Row>
          <Row justify="space-between">
            <Col>Coefficient de puissance</Col>
            <Col>1</Col>
          </Row>
          <Row justify="space-between">
            <Col>Puissance atteinte (kw)</Col>
            <Col>45</Col>
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
            <Col>450</Col>
          </Row>
          <Row justify="space-between">
            <Col>Puissance Facturee (kva)</Col>
            <Col>150</Col>
          </Row>
          <Row justify="space-between">
            <Col>Pertes Fer (kwh)</Col>
            <Col>0</Col>
          </Row>
          <Row justify="space-between">
            <Col>Pertes variables HTP (kwh)</Col>
            <Col>0</Col>
          </Row>
          <Row justify="space-between">
            <Col>Pertes variables P (kwh)</Col>
            <Col>0</Col>
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
          <Col md={5} offset={14}>Extra 10% zone Franche client</Col>
          <Col md={5}>0</Col>
        </Row>
        <Row span={24} gutter={8}>
          <Col md={5}><Text>Energie Active Hors pointe (kwh)</Text></Col>
          <Col md={2}><Text>15000</Text></Col>
          <Col md={2}><Text>70</Text></Col>
          <Col md={5}><Text>1 050 000</Text></Col>
          <Col md={5}><Text>Extra 10% Franche pouvoir public</Text></Col>
          <Col md={5}><Text>-</Text></Col>
        </Row>
        <Row span={24} gutter={8}>
          <Col md={5}><Text>Energie active pointe (kwh)</Text></Col>
          <Col md={2}><Text>198</Text></Col>
          <Col md={2}><Text>85</Text></Col>
          <Col md={5}><Text>16 830</Text></Col>
          <Col md={5}><Text>Montant total hors taxes</Text></Col>
          <Col md={5}><Text>1 505 353.2</Text></Col>
        </Row>
        <Row span={24} gutter={8}>
          <Col md={5}><Text>Pertes fer (kwh)</Text></Col>
          <Col md={2}><Text>0</Text></Col>
          <Col md={2}><Text>70</Text></Col>
          <Col md={5}><Text>-</Text></Col>
          <Col md={5}><Text>Taxes</Text></Col>
          <Col md={5}><Text>289 780.5</Text></Col>
        </Row>
        <Row span={24} gutter={8}>
          <Col md={5}><Text>Pertes variables hp (kwh)</Text></Col>
          <Col md={2}><Text>0</Text></Col>
          <Col md={2}><Text>70</Text></Col>
          <Col md={5}><Text>-</Text></Col>
          <Col md={5}><Text>Autres/Others</Text></Col>
          <Col md={5}><Text>-</Text></Col>
        </Row>
        <Row span={24} gutter={8}>
          <Col md={5}><Text>Pertes variables p (Kwh)</Text></Col>
          <Col md={2}><Text>0</Text></Col>
          <Col md={2}><Text>85</Text></Col>
          <Col md={5}><Text>-</Text></Col>
          <Col md={5}><Text>Montant hors taxes</Text></Col>
          <Col md={5}><Text>1 505 353.2</Text></Col>
        </Row>
        <Row span={24} gutter={8}>
          <Col md={5}><Text>Location compteur</Text></Col>
          <Col md={2}><Text></Text></Col>
          <Col md={2}><Text>0</Text></Col>
          <Col md={5}><Text>-</Text></Col>
          <Col md={5}><Text>TVA sur Autres</Text></Col>
          <Col md={5}><Text></Text></Col>
        </Row>
        <Row span={24} gutter={8}>
          <Col md={5}><Text>Location transformateurs</Text></Col>
          <Col md={2}><Text></Text></Col>
          <Col md={2}><Text>11 050</Text></Col>
          <Col md={5}><Text>11 050</Text></Col>
          <Col md={5}><Text>TVA client</Text></Col>
          <Col md={5}><Text>289 780.5</Text></Col>
        </Row>
        <Row span={24} gutter={8}>
          <Col md={5}><Text>Prime fixe</Text></Col>
          <Col md={2}><Text></Text></Col>
          <Col md={2}><Text>370 000</Text></Col>
          <Col md={5}><Text>370 000</Text></Col>
          <Col md={5}><Text></Text></Col>
          <Col md={5}><Text></Text></Col>
        </Row>
        <Row span={24} gutter={8}>
          <Col md={5}><Text>Depassement de puissance</Text></Col>
          <Col md={2}><Text></Text></Col>
          <Col md={2}><Text>0</Text></Col> 
          <Col md={5}><Text>-</Text></Col>   
          <Col md={5}><Text>MONTANT TOTAL FACTURE</Text></Col>
          <Col md={5}><Text>1 795 133.7</Text></Col>          
        </Row>
      </div>
      <div className="section-3">
        <Row>
          <Col md={5}><Text>Base de calcul (mauvais FP)</Text></Col>
          <Col md={2}><Text></Text></Col>
          <Col md={2}><Text>1 436 830</Text></Col>
          <Col md={5}><Text>1 436 830</Text></Col>
          <Col md={5}></Col>
          <Col md={5}></Col>
        </Row>
        <Row>
          <Col md={5}><Text>Penalites pour mauvais F.P.</Text></Col>
          <Col md={2}><Text></Text></Col>
          <Col md={2}><Text>57 473.2</Text></Col> 
          <Col md={5}><Text>57 473</Text></Col>   
          <Col md={5}></Col>
          <Col md={5}></Col>
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
};

const mapStateToProps = state => ({
  results: state.dataReducer.results,
});

export default connect(mapStateToProps, null)(Result);


{/* <Col>
<Text>Energie Active Hors pointe (kwh)</Text>
<Text>Energie active pointe (kwh)</Text>
<Text>Pertes fer (kwh)</Text>
<Text>Pertes variables hp (kwh)</Text>
<Text>Pertes variables p (Kwh)</Text>
<Text>Location compteur</Text>
<Text>Location transformateurs</Text>
<Text>Prime fixe</Text>
<Text>Depassement de puissance</Text>
</Col>
<Col>
<Text>15000</Text>
<Text>198</Text>
<Text>Pertes fer (kwh)</Text>
<Text>0</Text>
<Text>0</Text>
<Text>0</Text>
<Text></Text>
<Text></Text>
<Text></Text>
</Col>
<Col>
<Text>70</Text>
<Text>85</Text>
<Text>70</Text>
<Text>70</Text>
<Text>85</Text>
<Text>0</Text>
<Text>11 050</Text>
<Text>370 000</Text>
<Text>0</Text>            
</Col>
<Col>
<Text>1 050 000</Text>
<Text>16 830</Text>
<Text>-</Text>
<Text>-</Text>
<Text>-</Text>
<Text>-</Text>
<Text>11 050</Text>
<Text>370 000</Text>
<Text>-</Text>            
</Col>
<Col>
<Text>Extra 10% Franche pouvoir public</Text>
<Text>Montant total hors taxes</Text>
<Text>Taxes</Text>
<Text>Autres/Others</Text>
<Text>Montant hors taxes</Text>
<Text>TVA sur Autres</Text>
<Text>TVA client</Text>
<Text></Text>
<Text>MONTANT TOTAL FACTURE</Text>            
</Col>
<Col>
<Text>-</Text>
<Text>1 505 353.2</Text>
<Text>289 780.5</Text>
<Text>-</Text>
<Text>1 505 353.2</Text>
<Text></Text>
<Text>289 780.5</Text>
<Text></Text>
<Text>1 795 133.7</Text>            
</Col>
</Row> */}