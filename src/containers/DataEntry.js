import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Card,
  Radio,
  Form,
  InputNumber,
  Button,
} from 'antd';

import { simulate } from '../actions';

/* eslint-disable react/jsx-props-no-spreading */

const DataEntry = props => {
  const [componentSize] = useState('small');
  const [contratForm] = Form.useForm();
  const [factureForm] = Form.useForm();

  const layout = {
    labelCol: {
      xs: { span: 12 },
      sm: { span: 16 },
      md: { span: 16 },
    },
    wrapperCol: {
      xs: { span: 12 },
      sm: { span: 8 },
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
          {...layout}
          labelAlign="left"
          name="contrat"
          form={contratForm}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          size={componentSize}
        >
          <Form.Item required
            label="Puissance souscrite (KW)"
            name="pscrite"
            initialValues={300}
          >
            <InputNumber formatter={value => `${value} KW`} parser={value => value.replace(' KW', '')} />
          </Form.Item>
          <Form.Item required
            label="Puissance transformateur (KVA)"
            name="ptrans"
            initialValues={500}
          >
            <InputNumber formatter={value => `${value} KVA`} parser={value => value.replace(' KVA', '')} />
          </Form.Item>
          <Form.Item required
            label="Puissance facturee (KVA)"
            name="ptfact"
            initialValues={0}
          >
            <InputNumber initialValues={0} formatter={value => `${value} KVA`} parser={value => value.replace(' KVA', '')} />
          </Form.Item>
          <Form.Item required label="Type contrat" name="typecontrat">
            <Radio.Group>
              <Radio.Button value="mt_bt">MT/BT</Radio.Button>
              <Radio.Button value="mt_mt">MT/MT</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item required label="Location transfo" name="loctrans">
            <Radio.Group>
              <Radio value="oui">Oui</Radio>
              <Radio value="non">Non</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Card>
      <Card title="Facture">
        <Form
          {...layout}
          labelAlign="left"
          name="facture"
          form={factureForm}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          size={componentSize}
        >
          <Form.Item required label="Indicateur de puissance" name="ipower">
            <InputNumber formatter={value => `${value} KW`} parser={value => value.replace(' KW', '')} />
          </Form.Item>
          <Form.Item required label="Energie active HP" name="eahp">
            <InputNumber formatter={value => `${value} KWh`} parser={value => value.replace(' KWh', '')} />
          </Form.Item>
          <Form.Item required label="Energie active P" name="eap">
            <InputNumber formatter={value => `${value} KWh`} parser={value => value.replace(' KWh', '')}/>
          </Form.Item>
          <Form.Item required label="Energie reactive HP" name="erahp">
            <InputNumber formatter={value => `${value} Kvarh`} parser={value => value.replace(' Kvarh', '')}/>
          </Form.Item>
          <Form.Item required label="Energie reactive P" name="erap">
            <InputNumber formatter={value => `${value} Kvarh`} parser={value => value.replace(' Kvarh', '')}/>
          </Form.Item>
        </Form> 
      </Card>
      <div className="submit">
        <Button type="primary" block onClick={onCalculate}>Calculate</Button>
      </div>
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
