import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Container, Col, Row } from "react-bootstrap";
import { RegisterSchema } from "./validation";

export default function RegisterForm({ register, history }) {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        email: "",
        birthDate: "",
      }}
      validationSchema={RegisterSchema}
      onSubmit={(values, actions) => {
        register(values)
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
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <Field
                    type="text"
                    name="firstName"
                    className={
                      touched.firstName && errors.firstName
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                </div>
                {touched.firstName && errors.firstName ? (
                  <div className="invalid-feedback">{errors.firstName}</div>
                ) : null}
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                    type="text"
                    name="lastName"
                    className={
                      touched.lastName && errors.lastName
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                </div>
                {touched.lastName && errors.lastName ? (
                  <div className="invalid-feedback">{errors.lastName}</div>
                ) : null}
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
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
                  <div className="invalid-feedback">{errors.username}</div>
                ) : null}
              </Col>
              <Col>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
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
                  <div className="invalid-feedback">{errors.password}</div>
                ) : null}
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="text"
                    name="email"
                    className={
                      touched.email && errors.email
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                </div>
                {touched.email && errors.email ? (
                  <div className="invalid-feedback">{errors.email}</div>
                ) : null}
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="birthDate">Birthdate</label>
                  <Field
                    type="date"
                    name="birthDate"
                    className={
                      touched.birthDate && errors.birthDate
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                </div>
                {touched.birthDate && errors.birthDate ? (
                  <div className="invalid-feedback">{errors.birthDate}</div>
                ) : null}
              </Col>
            </Row>
            <Button type="submit" variant="dark">
              Register
            </Button>
          </Form>
        </Container>
      )}
    </Formik>
  );
}
