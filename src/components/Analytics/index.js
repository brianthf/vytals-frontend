import React, { Suspense } from "react";
import { Card, Spinner, Tab, Tabs } from "react-bootstrap";
import ErrorBoundary from "../../components/ErrorBoundary";
import "./style.css";

const ActivityPlot = React.lazy(() => import("./plots/Activity"));
const ReadingPlot = React.lazy(() => import("./plots/Reading"));

export default function Analytics({ state }) {
  const [key, setKey] = React.useState("readings");

  return (
    <Card className="text-center">
      <Card.Header>Analytics</Card.Header>
      <Card.Body>
        <div className="card-content">
          <Tabs id="controlled-tab" activeKey={key} onSelect={(k) => setKey(k)}>
            <Tab eventKey="readings" title="Readings">
              <ErrorBoundary fallback={<h1>Could not fetch data.</h1>}>
                <Suspense fallback={<Spinner size="lg" />}>
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
        </div>
      </Card.Body>
    </Card>
  );
}
