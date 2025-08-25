import React, { useState } from "react";
import { MdLogout, MdNotifications } from "react-icons/md";
import { Link } from "react-router";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      {isLogin ? (
        <nav className="p-10 flex justify-between">
          <h1 className="text-2xl font-bold cursor-pointer hover:underline">
            🧬 HealthHelp
          </h1>
          <div className="flex gap-6 text-md items-center">
            <MdNotifications className="text-2xl text-blue-500" />
            <button className="border border-dashed py-1 px-3 flex items-center gap-4 cursor-pointer">
              Dinesh Battu
              <span className="text-lg">
                <MdLogout />
              </span>
            </button>
          </div>
        </nav>
      ) : (
        <nav className="p-10 flex justify-between">
          <h1 className="text-2xl font-bold cursor-pointer hover:underline">
            🧬 HealthHelp
          </h1>
          <div className="flex gap-6 text-lg">
            <button className="btn">
              <Link to={"/login"}>Login</Link>
            </button>
            <button className="btn">
              <Link to={"/register"}>Register</Link>
            </button>
          </div>
        </nav>
      )}
    </>
  );
}
