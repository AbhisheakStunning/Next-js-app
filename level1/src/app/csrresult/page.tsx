"use client";

import React, { useEffect, useState } from "react";

const handleapi = async () => {
  let response = await fetch("/api/user");

  let data = await response.json();

  console.log(data);

  useEffect(() => {
    handleapi();
  }, []);
};

function page() {
  return <div>page</div>;
}

export default page;
