import React from "react";
import { Card, Col } from "react-bootstrap";
import { useAuth } from "../../context";

export const Profile = React.memo(() => {
  const { state } = useAuth();

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
