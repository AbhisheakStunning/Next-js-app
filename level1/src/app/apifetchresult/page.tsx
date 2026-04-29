import React from "react";
import { json } from "stream/consumers";

async function page() {
  //SSR Method
  //let response = await fetch("http://localhost:3000/api/user", {
  // cache: "no-store",
  //});

  // let data = await response.json();
  // console.log(data);

  //SSG Method

  //let response = await fetch("http:localhost:3000/api/user", {
  //cache: "force-cache",
  //});

  //let data = await response.json();

  //console.log(data);

  //ISR Method

  let response = await fetch("http:localhost:3000/api/user", {
    next: { revalidate: 5 },
  });

  let data = await response.json();

  console.log(data);

  return <div></div>;
}

export default page;
