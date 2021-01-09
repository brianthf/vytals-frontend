import React from "react";
import { Table } from "react-bootstrap";

const ReadingTable = React.memo(({ data }) => {
  return (
    <Table striped bordered hover variant="dark" responsive>
      <thead>
        <tr>
          <th>Weight</th>
          <th>Blood Pressure</th>
          <th>Temperature</th>
          <th>Oxygen Level</th>
          <th>Pulse</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {data.map((reading, index) => (
          <tr key={index}>
            <td>{reading.weight}</td>
            <td>{reading.bloodPressure}</td>
            <td>{reading.temperature}</td>
            <td>{reading.oxygenLevel}</td>
            <td>{reading.pulse}</td>
            <td>{new Date(reading.timestamp).toString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
});

export default ReadingTable;
