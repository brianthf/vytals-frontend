import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { ActivityForm, ReadingForm } from "./Input";

export default function FormTab() {
  const [key, setKey] = React.useState("activity");

  return (
    <Tabs id="controlled-tab" activeKey={key} onSelect={(k) => setKey(k)}>
      <Tab eventKey="activity" title="Home">
        <ActivityForm />
      </Tab>
      <Tab eventKey="reading" title="Reading">
        <ReadingForm />
      </Tab>
    </Tabs>
  );
}
