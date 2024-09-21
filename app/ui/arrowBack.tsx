import Image from "next/image";
import React from "react";
import arrowBack from "@/public/arrow-left.svg";
import Link from "next/link";

const ArrowBack = () => {
  return (
    <Link href="/blogs">
      <Image
        src={arrowBack.src}
        width={50}
        height={50}
        alt="Strzałka w lewo/back"
      />
    </Link>
  );
};

export default ArrowBack;
