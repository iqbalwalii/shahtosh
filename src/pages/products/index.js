import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
function products() {
  return (
    <Container>
      <Row className="flex justify-content-center">
        {[
          { id: 1, name: "shahtosh" },
          { id: 2, name: "Kani Shawl" },
          { id: 3, name: "Afghani" },
          { id: 4, name: "Pakistani" },
          { id: 5, name: "Pashmina" },
          { id: 6, name: "Irani" },
          { id: 7, name: "Kirmani" },
          { id: 8, name: "stale" },
          { id: 9, name: "Manta" },
          { id: 10, name: "Fichu" },
          { id: 11, name: "Raffal" },
          { id: 12, name: "Jamawar" },
          { id: 13, name: "Kani Pashmina" },
          { id: 14, name: "shahtosh Pashmina" },
          { id: 15, name: "shahtosh jamawar" },
          { id: 15, name: "shahtosh Kallekharab" },
        ].map((item, idx) => {
          return (
            <Col key={item} xs={12} sm={5} md={3}>
              <Card
                style={{
                  width: "15rem",
                  borderRadius: "20px",
                  marginTop: "2rem",
                  cursor: "pointer",
                }}
                onClick={() => router.push(`/products/${idx}`)}
              >
                <Card.Img
                  variant="top"
                  src="/assets/images/sahal.jpg"
                  width="320px"
                  height="320px"
                />
                <Card.Body>
                  <Card.Title className="text-center">{item?.name}</Card.Title>
                  <Card.Text className="text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default products;
