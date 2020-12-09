import React from "react";
import { Alert } from "react-bootstrap";

export default function AlertDismissable({ variant, ...props }) {
  return (
    <>
      <Alert variant={variant} dismissible>
        <Alert.Heading> {props.header} </Alert.Heading>
        <p>{props.content}</p>
      </Alert>
    </>
  );
}
