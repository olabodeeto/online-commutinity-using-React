import React from "react";
import { Link } from "react-router-dom";
import logo from "../pages/assets/img/logo.png";
import iconarrow from "../pages/assets/img/arrow.png";
import heroimg from "../pages/assets/img/hero.png";
import { Defaultbtn, Loginbtn } from "../components/btns";

export default function FirstPage() {
  return (
    <div>
      <div className="hidden md:block">
        <div className="flex">
          {/* right side */}
          <div className="w-1/2">
            <div className="w-full relative py-5 px-5 ml-10 mt-5">
              <img className="w-14" src={logo} alt="" />
              <span className="absolute top-8 left-16 px-2 text-gray-700 font-bold text-2xl">
                pluggily
              </span>
            </div>
            <div className="ml-20">
              <div className="mt-28">
                <h1 className="text-6xl sm:text-5xl lg:text-6xl font-semibold text-gray-700">
                  <span className="block">People who</span>
                  <span className="block">care about</span>
                  <span className="block">your growth</span>
                </h1>
                <p className="mt-10 text-red-800 text-lg">
                  The Entrepreneurs Directory
                </p>

                <div className="flex gap-5 mt-20">
                  <Link to="/register">
                    <Defaultbtn title="Get Started" />
                  </Link>
                  <Link to="/login">
                    <button
                      className="btn text-purple-600 border-2
                   border-purple-600"
                    >
                      Log in
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* left side */}
          <div className="w-1/2 max-h-full">
            <img className="w-full h-full" src={heroimg} alt="" />
          </div>
        </div>
      </div>

      {/* Mobile views */}
      <div className="md:hidden">
        <div className="w-full relative py-5 px-5">
          <img className="w-12" src={logo} alt="" />
          <span className="absolute top-8 left-16 font-bold">pluggily</span>
        </div>
        <div className="ml-12 mt-20 text-5xl font-semibold text-gray-700">
          <p className="text-sm text-red-800">The Entrepreneurs directory</p>
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
  );
}
