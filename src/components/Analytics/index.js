import React, { Suspense } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
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
    <Tabs id="controlled-tab" activeKey={key} onSelect={(k) => setKey(k)} fill>
      <Tab eventKey="readings" title="Readings">
        <div className="reading-table">
          <Row className="mt-4">
            <Col className="mt-2">
              <ReadingTable data={readings} />
            </Col>
          </Row>
        </div>
        <div className="reading-plot">
          <Row className="mt-4">
            <Col className="mt-2">
              <ErrorBoundary fallback={<h1>Could not fetch data.</h1>}>
                <Suspense fallback={<h1>LOADING</h1>}>
                  <ReadingPlot data={readings} />
                </Suspense>
              </ErrorBoundary>
            </Col>
          </Row>
        </div>
      </Tab>
      <Tab eventKey="activities" title="Activities">
        <div className="activities-table">
          <Row className="mt-4">
            <Col className="mt-2">
              <ActivityTable data={activities} />
            </Col>
          </Row>
        </div>
        <div className="activity-plot">
          <Row className="mt-4">
            <Col className="mt-2">
              <ErrorBoundary fallback={<h1>Could not fetch data.</h1>}>
                <Suspense fallback={<h1>LOADING</h1>}>
                  <ActivityPlot data={activities} />
                </Suspense>
              </ErrorBoundary>
            </Col>
          </Row>
        </div>
      </Tab>
    </Tabs>
  );
}
