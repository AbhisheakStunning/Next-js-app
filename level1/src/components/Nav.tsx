"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Nav() {
  const pathname = usePathname();

  return (
    <div className="w-full h-20 bg-black text-white  gap-4 space-x-4 flex items-center    justify-between fixed top-0">
      <div>
        <Link href="/" className="text-2xl font-bold">
          MyLogo
        </Link>
      </div>

      <div className="justify-end pr-4 flex space-x-4">
        <ul className="flex flex-row space-x-4">
          <li>
            <Link
              href="/"
              className={
                pathname === "/" ? "text-blue-500" : "hover:text-amber-600"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className={
                pathname === "/about" ? "text-blue-500" : "hover:text-amber-600"
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              className={
                pathname === "/contact"
                  ? "text-blue-500"
                  : "hover:text-amber-600"
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
