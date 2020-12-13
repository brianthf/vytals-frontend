import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Analytics from "../../components/Analytics";
import FormTab from "../../components/Forms";
import { Profile } from "../../components/Profile";
import { useAuth } from "../../context";
import useSwr from "swr";

export default function Dashboard() {
  const { state } = useAuth();

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col lg={4}>
          <Profile state={state} />
          <FormTab />
        </Col>
        <Col lg={8}>
          <Analytics state={state} />
        </Col>
      </Row>
    </Container>
  );
}
