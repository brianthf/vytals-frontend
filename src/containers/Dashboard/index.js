import React, { Suspense } from "react";
import { Card, Container, Col, Row, Spinner } from "react-bootstrap";
import ErrorBoundary from "../../components/ErrorBoundary";
import FormTab from "../../components/Forms";
import { Profile } from "../../components/Profile";
import { useAuth } from "../../context";

const Analytics = React.lazy(() => import("../../components/Analytics"));

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
          <Card className="text-center">
            <Card.Header>Analytics</Card.Header>
            <Card.Body>
              <ErrorBoundary fallback={<h1>Could not fetch Analytics.</h1>}>
                <Suspense fallback={<Spinner />}>
                  <Analytics state={state} />
                </Suspense>
              </ErrorBoundary>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
