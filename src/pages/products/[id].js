import React from "react";
import styles from "../../styles/SingleView.module.css";
import data from "../../data/products.json";
import { useState } from "react";
import Image from "next/image";
export default function SingleView({ idx }) {
  console.log("0011>> ");
  const product = data.products[idx];

  return (
    <Container>
      <Row>
        <Col xs={11} md={5}>
          <div>
            <Image
              src="/assets/images/sahal.jpg"
              height={320}
              width={320}
              layout="fixed"
            />
            <div>
              <h2> {product.title}</h2>
              <p>{product.description}</p>
            </div>
          </div>
        </Col>
        <Col xs={11} md={6}></Col>
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
