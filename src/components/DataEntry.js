import React, { useState } from 'react';
import {
  Row, Col,
  Card,
  Radio,
  Form,
  InputNumber,
  Button,
} from 'antd';

function DataEntry() {
  const [componentSize, setComponentSize] = useState('small');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div className="Data-Entry">
      <Row gutter={24}>
        <Col span={12}>
          <Card title="Contrat abonnement">
            <Form
              name="contrat"
              layout="vertical"
              initialValues={{
                size: componentSize,
              }}
              onValuesChange={onFormLayoutChange}
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
              layout="vertical"
              initialValues={{
                size: componentSize,
              }}
              onValuesChange={onFormLayoutChange}
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
            <Button type="primary" block>Calculate</Button>
          </div>

        </Col>
      </Row>
    </div>
  );
}

export default DataEntry;
