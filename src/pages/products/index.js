import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ListingCard from "../../Components/ListingCard";
function products() {
  return (
    <Container>
      <Row className="flex justify-content-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13].map((item, idx) => {
          return (
            <Col key={item} xs={12} sm={5} md={3}>
              <ListingCard idx={idx} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default products;
