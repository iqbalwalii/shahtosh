import React from "react";
import { useEffect, useState } from "react";
import styles from "../../styles/SingleView.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import prods from "../../data/products.json";
import Image from "next/image";
export default function SingleView() {
  const router = useRouter();
  const [product, setProduct] = useState(prods[router.query.id]);
  useEffect(() => {
    setProduct(prods.products[router.query.id]);
  }, [router.query.id]);

  console.log(product);
  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-center">
        <img
          className="mt-5"
          src={product?.image}
          width="500px"
          height="600px"
        />
      </div>
      <h1 className="text-center">{product?.title}</h1>
      <p className="text-center">{product?.description}</p>
      <p className="text-center">
        <strong>Care: </strong>
        {product?.care}
      </p>
      <p className="text-center">
        <strong>Price: </strong>
        {product?.price}
      </p>
      <p></p>
    </Container>
  );
}
