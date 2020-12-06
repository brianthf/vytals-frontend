import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ReadingSchema } from "../validation";

export default function ActivityForm() {
  return (
    <Formik
      initialValues={{
        weight: 0,
        bloodPressure: 0,
        temperature: 0,
        oxygenLevel: 0,
        pulse: 0,
        timestamp: "",
      }}
      validateOnChange={true}
      validationSchema={ReadingSchema}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <Container fluid style={{ textAlign: "center" }}>
          <Form>
            <Row className="mt-2">
              <Col>
                <Field
                  id="weight"
                  name="weight"
                  type="number"
                  min="10"
                  max="10000"
                />
                {touched.weight && errors.weight ? (
                  <div className="error">{errors.weight}</div>
                ) : null}
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Field
                  id="bloodPressure"
                  name="bloodPressure"
                  type="number"
                  min="10"
                  max="10000"
                />
                {touched.bloodPressure && errors.bloodPressure ? (
                  <div className="error">{errors.bloodPressure}</div>
                ) : null}
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Field
                  id="temperature"
                  name="temperature"
                  type="number"
                  min="10"
                  max="10000"
                />
                {touched.temperature && errors.temperature ? (
                  <div className="error">{errors.temperature}</div>
                ) : null}
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Field
                  id="oxygenLevel"
                  name="oxygenLevel"
                  type="number"
                  min="10"
                  max="10000"
                />
                {touched.oxygenLevel && errors.oxygenLevel ? (
                  <div className="error">{errors.oxygenLevel}</div>
                ) : null}
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Field
                  id="pulse"
                  name="pulse"
                  type="number"
                  min="10"
                  max="10000"
                />
                {touched.pulse && errors.pulse ? (
                  <div className="error">{errors.pulse}</div>
                ) : null}
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Field
                  id="timestamp"
                  name="timestamp"
                  type="datetime-local"
                  value="2020-01-01T00:00"
                />
                {touched.timestamp && errors.timestamp ? (
                  <div className="error">{errors.timestamp}</div>
                ) : null}
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Button type="submit" variant="dark">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      )}
    </Formik>
  );
}
