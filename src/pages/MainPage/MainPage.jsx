import mqtt from "mqtt";
import React, { createContext, useEffect, useState } from "react";
import Connection from "../../components/Connection";
import Publisher from "../../components/Publisher";
import Receiver from "../../components/Receiver";
import Subscriber from "../../components/Subscriber";

export const QosOption = createContext([]);
const qosOption = [
  {
    label: "0",
    value: 0,
  },
  {
    label: "1",
    value: 1,
  },
  {
    label: "2",
    value: 2,
  },
];

const MainPage = () => {
  const [client, setClient] = useState(null);
  const [isSubed, setIsSubed] = useState(false);
  const [payload, setPayload] = useState({});
  const [connectStatus, setConnectStatus] = useState("Connect"); // Connect, Connecting, Connected

  useEffect(() => {
    if (client) {
      client.on("connect", () => {
        setConnectStatus("Connected");
        console.log("연결 성공");
      });
    }
  }, [client]);

  const mqttConnect = (host, mqttOption) => {
    setConnectStatus("Connecting");
    setClient(mqtt.connect(host, mqttOption));
  };

  const mqttDisconnect = () => {
    if (client) {
      try {
        client.end(false, () => {
          setConnectStatus("Connect");
          console.log("연결 끊김");
        });
      } catch (err) {
        console.log("연결 에러", err);
      }
    }
  };

  return (
    <>
      <Connection connect={mqttConnect} disconnect={mqttDisconnect} connectStatus={connectStatus} />
      <QosOption.Provider value={qosOption}>
        <Subscriber />
        <Publisher />
      </QosOption.Provider>
      <Receiver />
    </>
  );
};

export default MainPage;
