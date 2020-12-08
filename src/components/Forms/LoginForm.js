import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Col, Container, Row } from "react-bootstrap";
import { LoginSchema } from "./validation";
import { useAuth } from "../../context";

export default function LoginForm({ history }) {
  const { login } = useAuth();

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validateOnChange={true}
      validationSchema={LoginSchema}
      onSubmit={(values, actions) => {
        Promise.all([
          login(values),
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
