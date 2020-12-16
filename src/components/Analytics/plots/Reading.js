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

  let trace1 = {
    x: userVitals.date,
    y: userVitals.weight,
    name: "weight",
    type: "bar",
  };

  let trace2 = {
    x: userVitals.date,
    y: userVitals.temperature,
    name: "temperature",
    xaxis: "x2",
    yaxis: "y2",
    type: "bar",
  };

  let trace3 = {
    x: userVitals.date,
    y: userVitals.oxygen,
    name: "oxygen level",
    xaxis: "x3",
    yaxis: "y3",
    type: "bar",
  };

  let trace4 = {
    x: userVitals.date,
    y: userVitals.pulse,
    name: "pulse",
    xaxis: "x4",
    yaxis: "y4",
    type: "bar",
  };

  let traces = [trace1, trace2, trace3, trace4];

  return (
    <>
      <Row>
        <Col>
          <Plot
            data={traces}
            layout={{ grid: { rows: 2, columns: 2, pattern: "independent" } }}
          />
        </Col>
      </Row>
    </>
  );
});

export default ReadingPlot;
