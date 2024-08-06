import React, { useContext } from "react";

import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import { QosOption } from "../data/option";

const Subscriber = ({ sub, unSub, showUnSub }) => {
  const [form] = Form.useForm();
  const qosOption = useContext(QosOption);
  // console.log(qosOption);

  const record = {
    topic: "testTopic/react",
    qos: 0,
  };

  const onFinish = (values) => {
    // console.log(values);
    sub(values);
  };

  const handleUnSub = () => {
    const values = form.getFieldValue();
    // console.log(values);
    unSub(values);
  };

  return (
    <Card title="Subscriber">
      <Form form={form} initialValues={record} onFinish={onFinish}>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item label="Topic" name="topic">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="QoS" name="qos">
              <Select options={qosOption} />
            </Form.Item>
          </Col>
          <Col span={8} offset={16} style={{ textAlign: "right" }}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Subscribe
              </Button>
              {showUnSub ? (
                <Button type="danger" style={{ marginLeft: "10px" }} onClick={handleUnSub}>
                  Unsubscribe
                </Button>
              ) : null}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default Subscriber;
