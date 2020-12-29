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
            {/* first row of inputs */}
            <Row className="mt-2">
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="type">Weight</label>
                  <Field
                    type="number"
                    name="weight"
                    className={
                      touched.weight && errors.weight
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                </div>
                {touched.weight && errors.weight ? (
                  <div className="error">{errors.weight}</div>
                ) : null}
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
                </div>
                {touched.bloodPressure && errors.bloodPressure ? (
                  <div className="error">{errors.bloodPressure}</div>
                ) : null}
              </Col>
            </Row>
            {/* second row of inputs */}
            <Row className="mt-2">
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="type">Temperature</label>
                  <Field
                    type="number"
                    name="temperature"
                    className={
                      touched.temperature && errors.temperature
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                </div>
                {touched.temperature && errors.temperature ? (
                  <div className="error">{errors.temperature}</div>
                ) : null}
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="type">Oxygen Level</label>
                  <Field
                    type="number"
                    name="oxygenLevel"
                    className={
                      touched.oxygenLevel && errors.oxygenLevel
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                </div>
                {touched.oxygenLevel && errors.oxygenLevel ? (
                  <div className="error">{errors.oxygenLevel}</div>
                ) : null}
              </Col>
            </Row>
            {/* third and final row of inputs */}
            <Row className="mt-2">
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="type">Pulse</label>
                  <Field
                    type="number"
                    name="pulse"
                    className={
                      touched.pulse && errors.pulse
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                </div>
                {touched.pulse && errors.pulse ? (
                  <div className="error">{errors.pulse}</div>
                ) : null}
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="type">Timestamp</label>
                  <Field
                    type="datetime-local"
                    name="timestamp"
                    className={
                      touched.timestamp && errors.timestamp
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                </div>
                {touched.timestamp && errors.timestamp ? (
                  <div className="error">{errors.timestamp}</div>
                ) : null}
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
