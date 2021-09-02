import React from "react";
import { Link } from "react-router-dom";
import logo from "../pages/assets/img/logo.png";
import iconarrow from "../pages/assets/img/arrow.png";
import { Loginbtn } from "../components/btns";
import { LoginbtnDesktop } from "../components/btns";

export default function Login() {
  return (
    <>
      <div className="hidden md:block">
        <div className="flex h-full">
          {/* left side */}
          <div className="w-1/2">
            <Link to="/">
              <div className="w-full relative py-5 px-5 ml-10 mt-5">
                <img className="w-14" src={logo} alt="" />
                <span className="absolute top-8 left-16 px-2 text-gray-700 font-bold text-2xl">
                  pluggily
                </span>
              </div>
            </Link>
            <div className="ml-20">
              <div className="mt-28">
                <h1 className="text-6xl sm:text-5xl lg:text-6xl font-semibold text-gray-700">
                  <span className="block">People who </span>
                  <span className="block">care about</span>
                  <span className="block">
                    your
                    <span className="text-purple-600"> growth</span>
                  </span>
                </h1>
              </div>
              <p className="mt-10 text-red-800 text-lg">
                The Entrepreneurs Directory
              </p>

              <div className="mt-4">
                <Link to="/register">
                  <LoginbtnDesktop title="Create account" />
                </Link>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className=" w-1/2 h-screen bg-gray-100">
            <div className="mt-60 flex justify-center">
              <form className="m-10 mt-2 max-w-lg ">
                <input
                  className="input mb-2"
                  type="email"
                  placeholder="Email"
                  required
                />
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  required
                />

                <Loginbtn title="Login" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="mt-4">
          <div className="md:hidden">
            <div className="w-full relative py-5 px-5">
              <img className="w-12" src={logo} alt="" />
              <span className="absolute top-8 left-16 font-bold">pluggily</span>
            </div>
            <div className="ml-12 mt-20 text-5xl font-semibold text-gray-700">
              <p className="text-sm text-red-800">
                The Entrepreneurs directory
              </p>
              <span className="block">People who </span>
              <span className="block">Care about</span>
              <span className="block">
                your <span className="text-purple-600">growth</span>
              </span>
            </div>

            <div className="mt-20">
              <form className="m-10">
                <input
                  className="input mb-2"
                  type="text"
                  placeholder="Email"
                  required
                />
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  required
                />
                <p className="mt-2 text-gray-400">Forgot password ?</p>
                <Loginbtn title="Login" />
              </form>

              <div
                className="flex justify-center relative font-bold
          text-purple-700"
              >
                <Link to="/register">Create Account</Link>
                <img className="w-5 h-5 ml-2 mt-1" src={iconarrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
