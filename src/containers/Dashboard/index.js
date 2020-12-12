import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import FormTab from "../../components/Forms";

export default function Dashboard() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <FormTab />
        </Col>
      </Row>
    </Container>
  );
}
