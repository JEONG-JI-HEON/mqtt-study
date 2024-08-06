import React from "react";

import { Button, Card, Col, Form, Input, Row, Select } from "antd";

const Connection = ({ connect, disconnect, connectStatus }) => {
  // console.log(connect);
  // console.log(disconnect);
  // console.log(connectStatus);

  const [form] = Form.useForm();
  const randomLet = Math.random().toString(16).substring(2, 8);
  // const randomLet = "e71e9a"; // dev

  // console.log(form);

  const option = {
    protocol: "ws", // ws or wss
    host: "broker.emqx.io",
    clientId: "emqx_" + randomLet,
    port: 8083,
    username: "emqx_test",
    password: "emqx_test",
    path: "/mqtt",
  };

  console.log(option);

  const onFinish = (values) => {
    // console.log(values);
    const { protocol, host, clientId, port, username, password, path } = values;
    const url = `${protocol}://${host}:${port}${path}`;
    const options = {
      clientId,
      username,
      password,
      clean: true,
      reconnectPeriod: 1000,
      connectTimeout: 30 * 1000,
    };
    connect(url, options);
  };

  const handleConnect = () => {
    form.submit(); // onFinish 함수 실행
  };

  const handleDisconnect = () => {
    disconnect();
  };

  return (
    <Card
      title="Connection"
      actions={[
        <Button key={""} type="primary" onClick={handleConnect}>
          {connectStatus}
        </Button>,
        <Button key={""} danger onClick={handleDisconnect}>
          Disconnect
        </Button>,
      ]}
    >
      <Form layout="vertical" form={form} initialValues={option} onFinish={onFinish}>
        <Row gutter={20}>
          <Col span={8}>
            <Form.Item label="Protocol" name="protocol">
              <Select /* onChange={handleProtocolChange} */>
                <Select.Option value="ws">ws</Select.Option>
                <Select.Option value="wss">wss</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Host" name="host">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Port" name="port">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Client ID" name="clientId">
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Username" name="username">
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="Path" name="path">
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default Connection;
