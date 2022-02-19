import React from "react";
import Image from "next/image";
import listing from "../styles/ListingCard.module.css";
import { useRouter } from "next/router";
export default function ListingCard({ id }) {
  const router = useRouter();
  return (
    <div
      className={listing.card}
      onClick={() => router.push(`/products/${id}`)}
    >
      import Image from "next/image";
      <Image
        src="/assets/images/sahal.jpg"
        height={320}
        width={320}
        layout="fixed"
      />
      <div className={listing.info}>
        <h2> heading</h2>
      </div>
    </div>
  );
}