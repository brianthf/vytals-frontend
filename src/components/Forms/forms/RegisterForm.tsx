import React from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { RegisterConfig } from "../../../types";
import { Button, Col, Container, Row } from "react-bootstrap";
import { RegisterSchema } from "../validation";

export default function RegisterForm() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        email: "",
        birthdate: "",
      }}
      validateOnChange={true}
      validationSchema={RegisterSchema}
      onSubmit={(
        values: RegisterConfig,
        actions: FormikHelpers<RegisterConfig>
      ) => {
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
                  name="firstName"
                  placeholder="first name"
                  type="text"
                  id="firstName"
                />
                {touched.firstName && errors.firstName ? (
                  <div className="error">{errors.firstName}</div>
                ) : null}
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Field
                  name="lastName"
                  placeholder="last name"
                  type="text"
                  id="lastName"
                />
                {touched.lastName && errors.lastName ? (
                  <div className="error">{errors.lastName}</div>
                ) : null}
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Field
                  name="username"
                  placeholder="username"
                  type="username"
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
