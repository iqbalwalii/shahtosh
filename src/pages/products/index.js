import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ListingCard from "../../Components/ListingCard";
function products() {
  return (
    <Container>
      <Row className="flex justify-content-center">
        {[1, 2, 3, 4, 5, 6, 7].map((item, idx) => {
          return (
            <Col xs={11} sm={5} md={3} lg={3}>
              <ListingCard id={++idx} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default products;
