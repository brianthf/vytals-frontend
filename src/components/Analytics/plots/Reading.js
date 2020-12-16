import React from "react";
import { Col, Row } from "react-bootstrap";
import Plot from "react-plotly.js";
//import useSWR from "swr";

const ReadingPlot = React.memo(({ data }) => {
  let userVitals = {
    weight: [],
    date: [],
    temperature: [],
    oxygenLevel: [],
    pulse: [],
  };
  for (var i = 0; i < data.length; i++) {
    userVitals.date.push(data[i].timestamp);
    userVitals.weight.push(data[i].weight);
    userVitals.temperature.push(data[i].temperature);
    userVitals.oxygenLevel.push(data[i].oxygenLevel);
    userVitals.pulse.push(data[i].pulse);
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
});

export default ReadingPlot;
