import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Col, Container, Row } from "react-bootstrap";
import { RegisterSchema } from "./validation";
import { useAuth } from "../../context";

export default function RegisterForm({ history }) {
  const { register } = useAuth();
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
      onSubmit={(values, actions) => {
        Promise.all([
          register(values),
          actions.setSubmitting(false),
          actions.resetForm(),
        ]).then(() => {
          history.push("/dashboard");
        });
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
                <Field
                  name="email"
                  placeholder="email"
                  type="email"
                  id="email"
                />
                {touched.email && errors.email ? (
                  <div className="error">{errors.email}</div>
                ) : null}
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Field
                  name="birthdate"
                  type="date"
                  id="birthdate"
                  min="2019-01-01T00:00"
                />
                {touched.birthdate && errors.birthdate ? (
                  <div className="error">{errors.birthdate}</div>
                ) : null}
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Button type="submit" variant="dark">
                  Register
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      )}
    </Formik>
  );
}
