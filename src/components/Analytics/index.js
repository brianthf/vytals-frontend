import React, { Suspense } from "react";
import { Card, Spinner } from "react-bootstrap";
import ReadingPlot from "./Reading";
import ActivityPlot from "./Activity";
import ErrorBoundary from "../../components/ErrorBoundary";

export default function Analytics({ state }) {
  return (
    <Card>
      <Card.Header>Analytics</Card.Header>
      <Card.Body>
        <ErrorBoundary fallback={<h1>Could not fetch data.</h1>}>
          <Suspense fallback={<Spinner />}></Suspense>
        </ErrorBoundary>
      </Card.Body>
    </Card>
  );
}
