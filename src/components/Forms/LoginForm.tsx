import React from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { LoginConfig } from "../../types";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function LoginForm() {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={(values: LoginConfig, actions: FormikHelpers<LoginConfig>) => {
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
                  name="username"
                  placeholder="username"
                  type="text"
                  id="username"
                />
                {touched.username && errors.username ? (
                  <div className="error">{errors.username}</div>
                ) : null}
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Field
                  name="password"
                  placeholder="password"
                  type="password"
                  id="password"
                />
                {touched.password && errors.password ? (
                  <div className="error">{errors.password}</div>
                ) : null}
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Button type="submit" variant="dark">
                  Login
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      )}
    </Formik>
  );
}
