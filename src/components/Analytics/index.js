import React, { Suspense } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import ErrorBoundary from "../../components/ErrorBoundary";
//import useSWR from "swr";
import { readings, activities } from "./plots/mock";
import "./style.css";
import { ActivityTable, ReadingTable } from "./tables";

const ActivityPlot = React.lazy(() => import("./plots/Activity"));
const ReadingPlot = React.lazy(() => import("./plots/Reading"));

export default function Analytics({ state }) {
  const [key, setKey] = React.useState("readings");

  // const { data: readings } = useSWR(`/readings/user/${state.userId}/all`, {
  //   suspense: true,
  // });

  // const { data: activities } = useSWR(`/activities/user/${state.userId}/all`, {
  //   suspense: true,
  // });

  return (
    <Tabs id="controlled-tab" activeKey={key} onSelect={(k) => setKey(k)}>
      <Tab eventKey="readings" title="Readings">
        <ErrorBoundary fallback={<h1>Could not fetch data.</h1>}>
          <Suspense fallback={<h1>LOADING</h1>}>
            <ReadingPlot data={readings} />
          </Suspense>
        </ErrorBoundary>
      </Tab>
      <Tab eventKey="activities" title="Activities">
        <ErrorBoundary fallback={<h1>Could not fetch data.</h1>}>
          <Suspense fallback={<h1>LOADING</h1>}>
            <ActivityPlot data={activities} />
          </Suspense>
        </ErrorBoundary>
      </Tab>
      <Tab eventKey="activityTable" title="Activities">
        <Container>
          <Row className="mt-4">
            <Col>
              <ActivityTable data={activities} />
            </Col>
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="readingTable" title="Readings Table">
        <Container>
          <Row className="mt-4">
            <Col>
              <ReadingTable data={readings} />
            </Col>
          </Row>
        </Container>
      </Tab>
    </Tabs>
  );
}
