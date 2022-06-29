import Head from "next/head";
import Image from "next/image";
import prods from "../data/products.json";
import Carousel from "../Components/Carousel";
import { Card, Container, Row } from "react-bootstrap";
export default function Home() {
  return (
    <>
      <Carousel />
      <Container>
        <h2 className="text-center mt-5 p-0">Weaves Of Kashmir</h2>
        <Row className="flex justify-content-around">
          {prods.products.slice(0, 8).map((item, idx) => {
            return (
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
            );
          })}
        </Row>
        ;
      </Container>
    </>
  );
}
