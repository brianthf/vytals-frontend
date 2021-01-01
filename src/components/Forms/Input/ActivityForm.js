import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ActivitySchema } from "./validation";

export default function ActivityForm() {
  return (
    <Formik
      initialValues={{
        startTime: "",
        endTime: "",
        type: "",
        description: "",
      }}
      validationSchema={ActivitySchema}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <Container fluid style={{ textAlign: "center" }}>
          <Form>
            <Row className="mt-2">
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="type">Start Time</label>
                  <Field
                    type="datetime-local"
                    name="startTime"
                    className={
                      touched.startTime && errors.startTime
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                </div>
                {touched.startTime && errors.startTime ? (
                  <div className="invalid-feedback">{errors.startTime}</div>
                ) : null}
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="endTime">End Time</label>
                  <Field
                    type="datetime-local"
                    name="endTime"
                    className={
                      touched.endTime && errors.endTime
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                </div>
                {touched.endTime && errors.endTime ? (
                  <div className="invalid-feedback">{errors.endTime}</div>
                ) : null}
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <div className="form-group">
                  <label htmlFor="type">Type</label>
                  <Field
                    type="text"
                    name="type"
                    className={
                      touched.type && errors.type
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {touched.type && errors.type ? (
                    <div className="invalid-feedback">{errors.type}</div>
                  ) : null}
                </div>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <div className="form-group">
                  <label htmlFor="type">Description</label>
                  <Field
                    name="description"
                    className="form-control"
                    as="textarea"
                    rows={3}
                    cols={10}
                  />
                  {touched.description && errors.description ? (
                    <div className="invalid-feedback">{errors.description}</div>
                  ) : null}
                </div>
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
