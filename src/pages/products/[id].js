import React from "react";
import styles from "../../styles/SingleView.module.css";
import data from "../../data/products.json";
import { Container, Row, Col, Button } from "react-bootstrap";

import Image from "next/image";
export default function SingleView({ id }) {
  console.log("0011>> ", id);
  const product = data.products[id];

  return (
    <Container>
      <Row>
        <Col xs={11} md={5}>
          <div>
            <Image
              src={`/assets/images/${product.images[0]}.jpg`}
              height={320}
              width={320}
              layout="fixed"
            />
          </div>
        </Col>
        <Col xs={11} md={6}>
          <div>
            <h2> {product?.title}</h2>
            <p>{product?.description}</p>
            <hr />

            <ul>
              <li>{product.color}</li>
              <li>{product.size}</li>
              <li>
                {product.price} &nbsp; {product.currency}
              </li>
              <li>{product.care}</li>
              <li>{product.content}</li>
            </ul>
            <br />
            <p>{product.note}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export async function getServerSideProps(_ctx) {
  const {
    params: { id },
  } = _ctx;

  return {
    props: {
      id,
    },
  };
}
