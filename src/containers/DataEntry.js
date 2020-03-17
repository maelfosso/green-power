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

  const layout = {
    labelCol: {
      xs: { span: 12 },
      sm: { span: 16 },
      md: { span: 16 }
    },
    wrapperCol: {
      xs: { span: 12 },
      sm: { span: 8 }
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const onCalculate = async () => {
    const { simulate } = props;

    simulate({
      contrat: await contratForm.validateFields(),
      facture: await factureForm.validateFields(),
    });
  };

  return (
    <div className="Data-Entry">
      <Card title="CONTRAT D'ABONNEMENT">
        <Form
          { ...layout }
          labelAlign="left"
          name="contrat"
          form={contratForm}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          size={componentSize}
        >
          <Form.Item
            label="Puissance souscrite (KW)"
            name="pscrite"
          >
            <InputNumber formatter={value => `${value} KW`} parser={value => value.replace(' KW', '')}/>
          </Form.Item>
          <Form.Item
            label="Puissance transformateur (KVA)"
            name="ptrans"
          >
            <InputNumber formatter={value => `${value} KVA`} parser={value => value.replace(' KVA', '')}/>
          </Form.Item>
          <Form.Item
            label="Puissance facturee (KVA)"
            name="ptfact"
          >
            <InputNumber formatter={value => `${value} KVA`} parser={value => value.replace(' KVA', '')}/>
          </Form.Item>
          <Form.Item label="Type contrat" name="typecontrat">
            <Radio.Group>
              <Radio.Button value="mt_bt">MT/BT</Radio.Button>
              <Radio.Button value="mt_mt">MT/MT</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Location transfo" name="loctrans">
            <Radio.Group>
              <Radio value="oui">Oui</Radio>
              <Radio value="non">Non</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Card>
      <Row gutter={[16, 16]} justify="space-between">
        <Col flex={1} xs={32} sm={32} md={12} lg={12}>
          
        </Col>
        <Col flex={1} xs={32} sm={32} md={12} lg={12}>
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
              <Form.Item label="Energie consommee HP" name="ehp">
                <InputNumber />
              </Form.Item>
              <Form.Item label="Energie consommee Pointe" name="ep">
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
