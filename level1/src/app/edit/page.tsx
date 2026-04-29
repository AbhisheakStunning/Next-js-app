"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useRef, useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import axios from "axios";
import { userDataContext } from "@/context/UserContext";

function Page() {
  const data = useContext(userDataContext);
  const [name, setName] = useState("");
  const [frontendImage, setfrontendImage] = useState("");
  const [backendImage, setBackendImage] = useState<File>();
  const imageInput = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    setBackendImage(file);
    setfrontendImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      if (backendImage) {
        formData.append("file", backendImage);
      }
      const result = await axios.post("/api/edit", formData);
      setLoading(false);
      data?.setUser(result.data);
      console.log(result);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (data) {
      setName(data?.user?.name as string);
      setfrontendImage(data.user?.image as string);
    }
  }, [data]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 ">
      <div className="w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg text-center relative flex flex-col items-center">
        <h1 className="text-2xl font-semibold my-4">Edit Profile</h1>
        <form
          className="space-y-2 flex flex-col items-center w-full"
          onSubmit={handleSubmit}
        >
          <div
            className=" w-32 h-32 rounded-full border-2 border-white p-2 justify-center flex items-center transition-all hover:border-blue-500 text-white hover:text-blue-500 cursor-pointer overflow-hidden relative"
            onClick={() => imageInput.current?.click()}
          >
            <input
              type="file"
              accept="image/*"
              hidden
              ref={imageInput}
              onChange={handleImage}
            />
            {frontendImage ? (
              <Image
                src={frontendImage}
                alt="Profile"
                width={128}
                height={128}
                className="rounded-full object-cover w-full h-full"
              />
            ) : (
              <CgProfile size={64} />
            )}
          </div>
          <div className="w-full rounded-2xl">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border-b border-white py-2 px-1 bg-black text-white placeholder-gray-400"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            disabled={loading}
          >
            {loading ? "Saving" : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
