import React from "react";
import { Formik } from "formik";
import { Button, Col, Container, Form } from "react-bootstrap";
import { ReadingSchema } from "./validation";

export default function ReadingForm() {
  return (
    <Formik
      initialValues={{
        weight: 0,
        bloodPressure: 0,
        temperature: 0,
        oxygenLevel: 0,
        pulse: 0,
        timestamp: "",
      }}
      validateOnChange={true}
      validationSchema={ReadingSchema}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {({
        errors,
        touched,
        values,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Container fluid style={{ textAlign: "center" }}>
          <Form noValidate onSubmit={handleSubmit}>
            {/* first row of inputs */}
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="formGroupWeight">
                <Form.Label>Weight</Form.Label>
                <Form.Control
                  type="number"
                  name="weight"
                  value={values.weight}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.weight && !errors.weight}
                  isInvalid={!!errors.weight}
                />
                {touched.weight && errors.weight ? (
                  <Form.Control.FeedBack type="invalid">
                    {errors.weight}
                  </Form.Control.FeedBack>
                ) : null}
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="formGroupBloodPressure">
                <Form.Label>Blood Pressure</Form.Label>
                <Form.Control
                  type="number"
                  name="bloodPressure"
                  value={values.bloodPressure}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.bloodPressure && !errors.bloodPressure}
                  isInvalid={!!errors.bloodPressure}
                />
                {touched.bloodPressure && errors.bloodPressure ? (
                  <Form.Control.FeedBack type="invalid">
                    {errors.bloodPressure}
                  </Form.Control.FeedBack>
                ) : null}
              </Form.Group>
            </Form.Row>
            {/* second row of inputs */}
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="formGroupTemperature">
                <Form.Label>Temperature</Form.Label>
                <Form.Control
                  type="number"
                  name="temperature"
                  value={values.temperature}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.temperature && !errors.temperature}
                  isInvalid={!!errors.temperature}
                />
                {touched.temperature && errors.temperature ? (
                  <Form.Control.FeedBack type="invalid">
                    {errors.temperature}
                  </Form.Control.FeedBack>
                ) : null}
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="formGroupOxygenLvl">
                <Form.Label>Oxygen Level</Form.Label>
                <Form.Control
                  type="number"
                  name="oxygenLevel"
                  value={values.oxygenLevel}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.oxygenLevel && !errors.oxygenLevel}
                  isInvalid={!!errors.oxygenLevel}
                />
                {touched.oxygenLevel && errors.oxygenLevel ? (
                  <Form.Control.FeedBack type="invalid">
                    {errors.oxygenLevel}
                  </Form.Control.FeedBack>
                ) : null}
              </Form.Group>
            </Form.Row>
            {/* third and final row of inputs */}
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="formGroupPulse">
                <Form.Label>Pulse</Form.Label>
                <Form.Control
                  type="number"
                  name="pulse"
                  value={values.pulse}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.oxygenLevel && !errors.oxygenLevel}
                  isInvalid={!!errors.oxygenLevel}
                />
                {touched.oxygenLevel && errors.oxygenLevel ? (
                  <Form.Control.FeedBack type="invalid">
                    {errors.oxygenLevel}
                  </Form.Control.FeedBack>
                ) : null}
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="formGroupTimestamp">
                <Form.Label>Timestamp</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="timestamp"
                  value={values.timestamp}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.timestamp && !errors.timestamp}
                  isInvalid={!!errors.timestamp}
                />
                {touched.timestamp && errors.timestamp ? (
                  <Form.Control.FeedBack type="invalid">
                    {errors.timestamp}
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
