import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Row, Col,
  Card,
  Radio,
  Form,
  InputNumber,
  Button,
} from 'antd';

import { simulate } from '../actions';

const DataEntry = props => {
  const [componentSize] = useState('small');
  const [contratForm] = Form.useForm();
  const [factureForm] = Form.useForm();

  const onCalculate = async () => {
    const { simulate } = props;

    simulate({
      contrat: await contratForm.validateFields(),
      facture: await factureForm.validateFields(),
    });
  };

  return (
    <div className="Data-Entry">
      <Row gutter={24}>
        <Col span={12}>
          <Card title="Contrat abonnement">
            <Form
              name="contrat"
              form={contratForm}
              layout="vertical"
              initialValues={{
                size: componentSize,
              }}
              size={componentSize}
            >
              <Form.Item
                label="Puissance souscrite (KW)"
                name="pscrite"
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                label="Puissance transformateur (KVA)"
                name="ptrans"
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                label="Puissance transformateur facturee (KVA)"
                name="ptfact"
              >
                <InputNumber />
              </Form.Item>
              <Form.Item label="Type contrat" name="typecontrat">
                <Radio.Group>
                  <Radio.Button value="mt_bt">MT/BT</Radio.Button>
                  <Radio.Button value="mt_mt">MT/MT</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Location transformation" name="loctrans">
                <Radio.Group>
                  <Radio value="oui">Oui</Radio>
                  <Radio value="non">Non</Radio>
                </Radio.Group>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Facture">
            <Form
              name="facture"
              form={factureForm}
              layout="vertical"
              initialValues={{
                size: componentSize,
              }}
              size={componentSize}
            >
              <Form.Item label="Indicateur de puissance" name="ipower">
                <InputNumber />
              </Form.Item>
              <Form.Item label="Cos phi" name="cosphi">
                <InputNumber />
              </Form.Item>
              <Form.Item label="EHP" name="ehp">
                <InputNumber />
              </Form.Item>
              <Form.Item label="EP" name="ep">
                <InputNumber />
              </Form.Item>
            </Form>
          </Card>
          <div className="submit">
            <Button type="primary" block onClick={onCalculate}>Calculate</Button>
          </div>

        </Col>
      </Row>
    </div>
  );
};

DataEntry.propTypes = {
  simulate: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  simulate: inputs => dispatch(simulate(inputs)),
});

export default connect(null, mapDispatchToProps)(DataEntry);
