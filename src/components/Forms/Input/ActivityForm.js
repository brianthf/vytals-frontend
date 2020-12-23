import React from "react";
import { Formik } from "formik";
import { Button, Col, Container, Form } from "react-bootstrap";
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
            {/* first row of inputs */}
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="formGroupType">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  type="text"
                  name="type"
                  value={values.type}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.type && !errors.type}
                  isInvalid={!!errors.type}
                />
                {touched.type && errors.type ? (
                  <Form.Control.FeedBack type="invalid">
                    {errors.type}
                  </Form.Control.FeedBack>
                ) : null}
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="formGroupDescription">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  value={values.description}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.description && !errors.description}
                  isInvalid={!!errors.description}
                />
                {touched.description && errors.description ? (
                  <Form.Control.FeedBack type="invalid">
                    {errors.description}
                  </Form.Control.FeedBack>
                ) : null}
              </Form.Group>
            </Form.Row>
            {/* second and final row of inputs */}
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="formGroupStartTime">
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="startTime"
                  value={values.startTime}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.startTime && !errors.startTime}
                  isInvalid={!!errors.startTime}
                />
                {touched.startTime && errors.startTime ? (
                  <Form.Control.FeedBack type="invalid">
                    {errors.startTime}
                  </Form.Control.FeedBack>
                ) : null}
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="formGroupEndTime">
                <Form.Label>End Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="endTime"
                  value={values.endTime}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.endTime && !errors.endTime}
                  isInvalid={!!errors.endTime}
                />
                {touched.endTime && errors.endTime ? (
                  <Form.Control.FeedBack type="invalid">
                    {errors.endTime}
                  </Form.Control.FeedBack>
                ) : null}
              </Form.Group>
            </Form.Row>
            <Button type="submit" variant="dark">
              Submit
            </Button>
          </Form>
        </Container>
      )}
    </Formik>
  );
}
