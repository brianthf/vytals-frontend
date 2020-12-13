import React from "react";
import { Card } from "react-bootstrap";
import Plots from "./Plots";

export default function Analytics({ state }) {
  return (
    <Card>
      <Card.Header>Analytics</Card.Header>
      <Card.Body>
        <Plots state={state}/>
      </Card.Body>
    </Card>
  );
}
