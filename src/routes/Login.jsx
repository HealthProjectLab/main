import React, { useState } from "react";
import { Link } from "react-router";

export default function Login() {
  const [loginState, setLoginState] = useState("user");
  return (
    <div className="flex flex-col justify-center items-center mt-56">
      <h1 className="text-3xl mb-10 font-bold">
        <Link to="/">HealthHelp 🧬</Link>
      </h1>
      <div className="flex gap-6">
        <button className="btn" onClick={() => setLoginState("user")}>
          Login as User
        </button>
        <button className="btn" onClick={() => setLoginState("doctor")}>
          Login as Doctor
        </button>
      </div>
      {loginState === "user" ? (
        <form className="md:w-1/2 lg:w-1/4 flex flex-col gap-5 py-10 border border-gray-200 px-10 mt-6">
          <h1 className="text-center text-2xl underline mb-3">Login as User</h1>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="border border-gray-300 py-2 rounded-md px-2 "
          />
          <input
            type="text"
            placeholder="Password"
            className="border border-gray-300 py-2 rounded-md px-2 "
          />
          <span className="text-md italic">
            Don't have an account?{" "}
            <span className="text-blue-500">
              <Link to={"/register"}>Register</Link>
            </span>
          </span>
          <button className="border border-purple-400 py-2 hover:bg-purple-300 cursor-pointer rounded-md ">
            Login
          </button>
        </form>
      ) : (
        <form className="md:w-1/2 lg:w-1/4 flex flex-col gap-5 py-10 border border-gray-200 px-10 mt-6">
          <h1 className="text-center text-2xl underline mb-3">
            Login as Doctor
          </h1>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="border border-gray-300 py-2 rounded-md px-2 "
          />
          <input
            type="text"
            placeholder="Password"
            className="border border-gray-300 py-2 rounded-md px-2 "
          />
          <span className="text-md italic">
            Don't have an account?{" "}
            <span className="text-blue-500">
              <Link to={"/register"}>Register</Link>
            </span>
          </span>
          <button className="border border-purple-400 py-2 hover:bg-purple-300 cursor-pointer rounded-md ">
            Login
          </button>
        </form>
      )}
    </div>
  );
}
