import React from "react";
import styles from "../../styles/SingleView.module.css";
import data from "../../data/products.json";
import { Container, Row, Col, Button } from "react-bootstrap";
import router from "next/router";

import Image from "next/image";
export default function SingleView() {
  const id = router.query.id;
  const product = data.products[id];
  console.log(product);
  return <Container>Hy</Container>;
}
