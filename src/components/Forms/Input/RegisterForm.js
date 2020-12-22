import React from "react";
import { Formik } from "formik";
import { Button, Container, Form } from "react-bootstrap";
import { RegisterSchema } from "./validation";

export default function RegisterForm({ register, history }) {
  console.log("REERE");
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
      validateOnChange={true}
      validationSchema={RegisterSchema}
      onSubmit={(values, actions) => {
        console.log(values);
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
      {({
        errors,
        touched,
        values,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <Container fluid style={{ textAlign: "center" }}>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group controlId="formGroupFirstName">
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.firstName && !errors.firstName}
                />
              </Form.Group>
              {touched.firstName && errors.firstName ? (
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              ) : null}
            </Form.Row>
            <Form.Row>
              <Form.Group controlId="formGroupLastName">
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.lastName && !errors.lastName}
                />
              </Form.Group>
              {touched.lastName && errors.lastName ? (
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              ) : null}
            </Form.Row>
            <Form.Row>
              <Form.Group controlId="formGroupUsername">
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.username && !errors.username}
                />
              </Form.Group>
              {touched.username && errors.username ? (
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              ) : null}
            </Form.Row>
            <Form.Row>
              <Form.Group controlId="formGroupEmail">
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.email && !errors.email}
                />
              </Form.Group>
              {touched.email && errors.email ? (
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              ) : null}
            </Form.Row>
            <Form.Row>
              <Form.Group controlId="formGroupBirthdate">
                <Form.Control
                  type="date"
                  name="birthDate"
                  value={values.birthDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.birthDate && !errors.birthDate}
                />
              </Form.Group>
              {touched.birthDate && errors.birthDate ? (
                <Form.Control.Feedback type="invalid">
                  {errors.birthDate}
                </Form.Control.Feedback>
              ) : null}
            </Form.Row>
            <Button type="submit" variant="dark">
              Register
            </Button>
          </Form>
        </Container>
      )}
    </Formik>
  );
}
