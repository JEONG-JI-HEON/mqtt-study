import React, { useContext } from "react";
import { QosOption } from "../data/option";
import { Card, Form } from "antd";

const Publisher = ({ publish }) => {
  const [form] = Form.useForm();
  const qosOptions = useContext(QosOption);
  return (
    <Card title="Publisher">
      <Form></Form>
    </Card>
  );
};

export default Publisher;
