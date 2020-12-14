import React from "react";
import { Col, Row } from "react-bootstrap";
import Plot from "react-plotly.js";
import { readings } from "./mock";
//import useSWR from "swr";

export default function ReadingPlot({ state }) {
  // const { data } = useSWR(`/readings/user/${state.userId}/all`, {
  //   suspense: true,
  // });
  let userVitals = {
    weight: [],
    date: [],
    temperature: [],
    oxygenLevel: [],
    pulse: [],
  };
  for (var i = 0; i < readings.length; i++) {
    userVitals.date.push(readings[i].timestamp);
    userVitals.weight.push(readings[i].weight);
    userVitals.temperature.push(readings[i].temperature);
    userVitals.oxygenLevel.push(readings[i].oxygenLevel);
    userVitals.pulse.push(readings[i].pulse);
  }

  return (
    <>
      <Row>
        <Col>
          <Plot
            data={[
              {
                x: userVitals.date,
                y: userVitals.weight,
                type: "bar",
                mode: "lines+markers",
                marker: { color: "red" },
              },
            ]}
            layout={{ width: 300, height: 240, title: "Weight" }}
          />
        </Col>
        <Col>
          <Plot
            data={[
              {
                x: userVitals.date,
                y: userVitals.temperature,
                type: "bar",
                mode: "lines+markers",
                marker: { color: "red" },
              },
            ]}
            layout={{ width: 300, height: 240, title: "Temperature" }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Plot
            data={[
              {
                x: userVitals.date,
                y: userVitals.oxygen,
                type: "bar",
                mode: "lines+markers",
                marker: { color: "red" },
              },
            ]}
            layout={{ width: 300, height: 240, title: "Oxygen Level" }}
          />
        </Col>
        <Col>
          <Plot
            data={[
              {
                x: userVitals.date,
                y: userVitals.pulse,
                type: "bar",
                mode: "lines+markers",
                marker: { color: "red" },
              },
            ]}
            layout={{ width: 300, height: 240, title: "Pulse" }}
          />
        </Col>
      </Row>
    </>
  );
}
