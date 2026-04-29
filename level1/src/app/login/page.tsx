"use client";

import axios from "axios";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getSession, signIn } from "next-auth/react";
import { error } from "console";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      router.push("/");
    } catch (error) {}
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-700 text-white">
      <div className="w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg bg-gray-900">
        <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
        <form className="space-y-6" onSubmit={handleSignIn}>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-b border-white py-2 px-1 bg-gray-900 text-white placeholder-gray-400"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border-b border-white py-2 px-1 bg-gray-900 text-white placeholder-gray-400"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded mb-5"
          >
            Login
          </button>
        </form>
        <p className="text-center" onClick={() => router.push("/register")}>
          Want to create an account?
          <span className="text-blue-400 hover:underline">Register</span>
        </p>

        <div className="flex gap-5 items-center justify-center my-5">
          <hr className=" grow border-gray-500" />
          <span>OR</span>
          <hr className="grow border-gray-500" />
        </div>

        <button
          className="w-full flex items-center justify-center gap-2 border-2 border-gray-300 rounded-lg py-2 bg-white text-black hover:bg-gray-100 transition-colors"
          onClick={async () => {
            await signIn("google", {
              callbackUrl: "/",
            });
          }}
        >
          <FcGoogle />
          <span>Sign In with Google</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
