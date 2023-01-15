import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <div className="mt-5 text-center">
            <h1>Ooops !</h1>
            <p>Sorry, an unexpected error has accurred</p>
            <p>
              <i>{error.statusText || error.messsage}</i>
            </p>
            <Button
              variant="link"
              onClick={() => navigate("/", { replace: true })}
            >
              Go Back
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
