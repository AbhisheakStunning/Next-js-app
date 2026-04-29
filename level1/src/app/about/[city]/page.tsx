"use client";

import { useParams } from "next/navigation";
import React from "react";
import australiaimg from "@/assets/australia.webp";
import ukimg from "@/assets/uk.avif";
import usaimg from "@/assets/usa.jpg";
import canadaimg from "@/assets/canada.jpg";
import Image from "next/image";

function Page() {
  const { city } = useParams();
  return (
    <div className="w-50">
      {city} is the beautiful city
      {city === "Australia" && (
        <Image src={australiaimg} alt="australia" width={200} height={200} />
      )}
      {city === "UK" && <Image src={ukimg} alt="uk" width={200} height={200} />}
      {city === "USA" && (
        <Image src={usaimg} alt="usa" width={200} height={200} />
      )}
      {city === "Canada" && (
        <Image src={canadaimg} alt="canada" width={200} height={200} />
      )}
    </div>
  );
}

export default Page;
