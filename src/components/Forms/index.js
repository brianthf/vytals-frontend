import React from "react";
import { Row, Tab, Tabs } from "react-bootstrap";
import { ActivityForm, ReadingForm } from "./Input";
import "./style.css";

export default function FormTab() {
  const [key, setKey] = React.useState("activity");

  return (
    <Tabs id="controlled-tab" activeKey={key} onSelect={(k) => setKey(k)} fill>
      <Tab eventKey="activity" title="Activity">
        <ActivityForm />
      </Tab>
      <Tab eventKey="reading" title="Reading">
        <ReadingForm />
      </Tab>
    </Tabs>
  );
}
