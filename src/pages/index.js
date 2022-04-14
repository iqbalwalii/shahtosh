import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Carousel from "../Components/Carousel";
export default function Home() {
  return (
    <>
      <Carousel />
      <h2 className="text-center">Weaves Of Kashmir</h2>
    </>
  );
}
