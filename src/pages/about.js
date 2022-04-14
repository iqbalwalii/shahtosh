import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const about = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={{ span: 4, offset: 4 }}>
          <h2 className="mt-5 text-center">About us</h2>
          <hr />
          <p className="text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            nisi euismod, porttitor nunc eu, tincidunt nisl. Nullam euismod
            dignissim nisi, eu aliquam eros. Nulla facilisi. Nulla facilisi.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default about;
