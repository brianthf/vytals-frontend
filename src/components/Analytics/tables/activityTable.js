import React from "react";
import { Table } from "react-bootstrap";

const ActivityTable = React.memo(({ data }) => {
  return (
    <Table striped bordered hover variant="dark" responsive>
      <thead>
        <tr>
          <th>Index</th>
          <th>Type</th>
          <th>Description</th>
          <th>Start Time</th>
          <th>End Time</th>
        </tr>
      </thead>
      <tbody>
        {data.map((activity, index) => (
          <tr key={index}>
            <td>{activity.type}</td>
            <td>{activity.description}</td>
            <td>{activity.startTime}</td>
            <td>{activity.endTime}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
});

export default ActivityTable;
