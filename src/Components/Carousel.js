import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "../styles/Slider.module.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <div className={styles.main}>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.slides}
      >
        <SwiperSlide className={styles.first}>
          <div className={styles.controls}>
            <h2 className="text-light">Weaves Of Kashmir</h2>
            <Button variant="light" className="mr-1 ">
              Shop Now
            </Button>
            <Button variant="light">View All </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.last}></SwiperSlide>
      </Swiper>
    </div>
  );
}
