import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Col, Container, Row } from "react-bootstrap";
import { RegisterSchema } from "./validation";

export default function ActivityForm() {
  return (
    <Formik 
      initialValues={{
        type: "",
        description: "",
        startTime: "",
        endTime: "",
      }}
      validateOnChange={true}
      validationSchema={RegisterSchema}
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
                <Field name="type" placeholder="type" type="text" id="type" />
                {touched.type && errors.type ? (
                  <div className="error">{errors.type}</div>
                ) : null}
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Field
                  id="description"
                  name="description"
                  type="text"
                  placeholder="description"
                />
                {touched.description && errors.description ? (
                  <div className="error">{errors.description}</div>
                ) : null}
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Field
                  id="start time"
                  name="startTime"
                  type="datetime-local"
                  value="2020-01-01T00:00"
                  min="2019-01-01T00:00"
                />
                {touched.startTime && errors.startTime ? (
                  <div className="error">{errors.startTime}</div>
                ) : null}
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Field
                  id="password"
                  name="endTime"
                  type="datetime-local"
                  value="2020-01-01T00:00"
                />
                {touched.endTime && errors.endTime ? (
                  <div className="error">{errors.endTime}</div>
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
