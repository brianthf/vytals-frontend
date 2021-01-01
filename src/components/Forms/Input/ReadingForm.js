import React from "react";
import { Field, Formik, Form } from "formik";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ReadingSchema } from "./validation";

export default function ReadingForm() {
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
      validationSchema={ReadingSchema}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <Container fluid style={{ textAlign: "center" }}>
          <Form>
            {/* first row of inputs */}
            <Row className="mt-2">
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="weight">Weight</label>
                  <Field
                    type="number"
                    name="weight"
                    className={
                      touched.weight && errors.weight
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {touched.weight && errors.weight ? (
                    <div className="invalid-feedback">{errors.weight}</div>
                  ) : null}
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="type">Blood Pressure</label>
                  <Field
                    type="number"
                    name="bloodPressure"
                    className={
                      touched.bloodPressure && errors.bloodPressure
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {touched.bloodPressure && errors.bloodPressure ? (
                    <div className="invalid-feedback">
                      {errors.bloodPressure}
                    </div>
                  ) : null}
                </div>
              </Col>
            </Row>
            {/* second row of inputs */}
            <Row className="mt-2">
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="temperature">Temperature</label>
                  <Field
                    type="number"
                    name="temperature"
                    className={
                      touched.temperature && errors.temperature
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {touched.temperature && errors.temperature ? (
                    <div className="invalid-feedback">{errors.temperature}</div>
                  ) : null}
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="oxygenLevel">Oxygen Level</label>
                  <Field
                    type="number"
                    name="oxygenLevel"
                    className={
                      touched.oxygenLevel && errors.oxygenLevel
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {touched.oxygenLevel && errors.oxygenLevel ? (
                    <div className="invalid-feedback">{errors.oxygenLevel}</div>
                  ) : null}
                </div>
              </Col>
            </Row>
            {/* third and final row of inputs */}
            <Row className="mt-2">
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="pulse">Pulse</label>
                  <Field
                    type="number"
                    name="pulse"
                    className={
                      touched.pulse && errors.pulse
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {touched.pulse && errors.pulse ? (
                    <div className="invalid-feedback">{errors.pulse}</div>
                  ) : null}
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="timestamp">Timestamp</label>
                  <Field
                    type="datetime-local"
                    name="timestamp"
                    className={
                      touched.timestamp && errors.timestamp
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {touched.timestamp && errors.timestamp ? (
                    <div className="invalid-feedback">{errors.timestamp}</div>
                  ) : null}
                </div>
              </Col>
            </Row>
            <Button type="submit" variant="dark">
              Submit
            </Button>
          </Form>
        </Container>
      )}
    </Formik>
  );
}
