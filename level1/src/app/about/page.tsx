"use client";
import { useRouter } from "next/navigation";
import React from "react";

const About = () => {
  const about = ["Australia", "UK", "USA", "Canada"];
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-center items-center text-2xl text-black h-full mt-4 font-bold">
        Choose your Destination
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        {about.map((city) => (
          <div
            key={city}
            className="flex justify-center items-center text-white rounded-2xl w-80 h-40 bg-amber-700 hover:opacity-[0.5] transition-all"
            onClick={() => router.push(`/about/${city}`)}
          >
            {city}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
