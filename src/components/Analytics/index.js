import React, { Suspense } from "react";
import { Card, Spinner, Tab, Tabs } from "react-bootstrap";
import ReadingPlot from "./Reading";
import ActivityPlot from "./Activity";
import ErrorBoundary from "../../components/ErrorBoundary";

export default function Analytics({ state }) {
  const [key, setKey] = React.useState("readings");

  return (
    <Card>
      <Card.Header>Analytics</Card.Header>
      <Card.Body>
        <Tabs id="controlled-tab" activeKey={key} onSelect={(k) => setKey(k)}>
          <Tab eventKey="readings" title="Readings">
            <ErrorBoundary fallback={<h1>Could not fetch data.</h1>}>
              <Suspense fallback={<Spinner />}>
                <ReadingPlot state={state} />
              </Suspense>
            </ErrorBoundary>
          </Tab>
          <Tab eventKey="activities" title="Activities">
            <ErrorBoundary fallback={<h1>Could not fetch data.</h1>}>
              <Suspense fallback={<Spinner />}>
                <ActivityPlot state={state} />
              </Suspense>
            </ErrorBoundary>
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
}
