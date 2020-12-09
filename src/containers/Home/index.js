import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context";
import { LoginForm, RegistrationForm } from "../../components/Forms";

export default function Home() {
  const [isRegistered, setRegistered] = React.useState(false);
  const history = useHistory();
  const { login, register } = useAuth();

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col className="col d-flex justify-content-center">
          <Card className="text-center">
            <Card.Header as="h5">
              {isRegistered ? "LOGIN" : "REGISTER"}
            </Card.Header>
            <Card.Body>
              {isRegistered ? (
                <LoginForm login={login} history={history} />
              ) : (
                <RegistrationForm register={register} history={history} />
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
