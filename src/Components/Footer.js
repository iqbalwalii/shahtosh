import React, { useState, useEffect } from "react";
import footer from "../styles/Footer.module.css";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
// import ReactFlagsSelect from "react-flags-select";
const Footer = () => {
  return (
    <Row className={footer.main}>
      <Col className={footer.section}>
        <h5>INFORMATION</h5>
        <ul>
          <li>Blog</li>
          {/* <li>Careers</li> */}
          <li>Laybuy</li>
          <li>Klarna</li>
          <li>Reviews</li>
        </ul>
      </Col>
      <Col className={footer.section}>
        <h5>TOP COLLECTIONS</h5>
        <ul>
          <li>Nike Dunk</li>
          <li>Air jordan 1</li>
          <li>Fear of god</li>
          <li>Yeezy</li>
          <li>Air force 1</li>
          <li>OFF-White</li>
        </ul>
      </Col>
      <Col className={footer.section}>
        <h5>FOLLOW US</h5>
        <ul>
          <li>instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Youtube</li>
          <li>Dribbble</li>
          <li>Pinterest</li>
        </ul>
      </Col>
    </Row>
  );
};

export default Footer;
