import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import prods from "../../data/products.json";
import { useRouter } from "next/router";
function Products() {
  const router = useRouter();
  console.log(prods);
  return (
    <Container>
      <Row className="flex justify-content-center mt-5">
        {prods.products.map((item, idx) => {
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
                  src={item?.image}
                  width="320px"
                  height="320px"
                />
                <Card.Body>
                  <Card.Title className="text-center">{item?.title}</Card.Title>
                  <Card.Text className="text-center">
                    {item?.description}
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

export default Products;
