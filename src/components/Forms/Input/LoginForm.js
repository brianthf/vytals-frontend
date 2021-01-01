import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Col, Container, Row } from "react-bootstrap";
import { LoginSchema } from "./validation";

export default function LoginForm({ login, history }) {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, actions) => {
        login(values)
          .then(() => {
            actions.setSubmitting(false);
            actions.resetForm();
            history.push("/dashboard");
          })
          .catch((err) => {
            alert(err);
          });
      }}
    >
      {({ errors, touched }) => (
        <Container fluid style={{ textAlign: "center" }}>
          <Form>
            <Row className="mt-2">
              <Col>
                <div className="form-group">
                  <label htmlFor="type">Username</label>
                  <Field
                    type="text"
                    name="username"
                    className={
                      touched.username && errors.username
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                </div>
                {touched.username && errors.username ? (
                  <div className="error">{errors.username}</div>
                ) : null}
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <div className="form-group">
                  <label htmlFor="type">Password</label>
                  <Field
                    type="password"
                    name="password"
                    className={
                      touched.password && errors.password
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                </div>
                {touched.password && errors.password ? (
                  <div className="error">{errors.password}</div>
                ) : null}
              </Col>
            </Row>
            <Button type="submit" variant="dark">
              Login
            </Button>
          </Form>
        </Container>
      )}
    </Formik>
  );
}
