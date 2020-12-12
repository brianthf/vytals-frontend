import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import FormTab from "../../components/Forms";
import { Profile } from "../../components/Profile";

export default function Dashboard() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <Profile />
        </Col>
        <Col>
          <FormTab />
        </Col>
      </Row>
    </Container>
  );
}
