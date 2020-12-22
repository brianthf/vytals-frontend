import React from "react";
import { Formik } from "formik";
import { Button, Container, Form } from "react-bootstrap";
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
      {({
        errors,
        touched,
        values,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
        <Container fluid style={{ textAlign: "center" }}>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group controlId="formGroupUsername">
                <Form.Control
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="username"
                  isValid={touched.username && !errors.username}
                  isInvalid={!!errors.username}
                />
                {touched.username && errors.username ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                ) : null}
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group controlId="formGroupPassword">
                <Form.Control
                  type="password"
                  name="password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="password"
                  isValid={touched.password && !errors.password}
                  isInvalid={!!errors.password}
                />
                {touched.password && errors.password ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                ) : null}
              </Form.Group>
            </Form.Row>
                <Button type="submit" variant="dark">
                  Login
                </Button>
          </Form>
        </Container>
      )}
    </Formik>
  );
}
