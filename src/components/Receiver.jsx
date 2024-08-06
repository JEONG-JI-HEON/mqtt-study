import { Card, List } from "antd";
import React, { useEffect, useState } from "react";

const Receiver = ({ payLoad }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log(payLoad);
    if (payLoad?.topic) {
      setMessages((messages) => [...messages, payload]);
    }
  }, [payLoad]);

  const renderListItem = (item) => (
    <List.Item>
      <List.Item.Meta title={item.topic} description={item.message} />
    </List.Item>
  );

  return (
    <Card title="Receiver" className="h-full">
      <List size="small" bordered dataSource={messages} renderItem={renderListItem} />
    </Card>
  );
};

export default Receiver;
