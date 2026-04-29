"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

function page() {
  const router = useRouter();
  return (
    <div>
      <ul>
        <li>
          <Link href="/" target="_blank">
            home
          </Link>
        </li>
        <li>
          <Link href="/about" target="_blank">
            about
          </Link>
        </li>
        <li>
          <Link href="/contact" target="_blank">
            contact
          </Link>
        </li>
        <button
          type="button"
          onClick={() => router.push("https://www.google.com")}
        >
          go to google.com
        </button>
      </ul>
      <div>
        <Image
          src="/Expert-Corner-Blog.webp"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default page;
