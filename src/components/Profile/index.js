import React from "react";
import { Card, Col } from "react-bootstrap";

export const Profile = React.memo(({ state }) => {
  return (
    <Col className="mb-3">
      <Card>
        <Card.Body>
          <Col className="d-flex flex-column align-items-center text-center">
            {JSON.stringify(state, null, 2)}
          </Col>
        </Card.Body>
      </Card>
    </Col>
  );
});
