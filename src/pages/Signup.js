import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import logo from "../pages/assets/img/logo.png";
import iconarrow from "../pages/assets/img/arrow.png";
import { Loginbtn } from "../components/btns";
import { LoginbtnDesktop } from "../components/btns";
import Select from "react-select";
import countryList from "react-select-country-list";
import { customStyles } from "../components/SelectStyle";
import { EyeClosed } from "akar-icons";

export default function Signup() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
    console.log(value.label);
  };

  const countryOption = options.map((op) => (
    <option key={op.label} onClick={() => console.log("heey")}>
      {op.label}
    </option>
  ));

  return (
    <>
      <div className="hidden md:block">
        <div className="flex h-full">
          {/* right side */}
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
                <Link to="/login">
                  <LoginbtnDesktop title="Login" />
                </Link>
              </div>
            </div>
          </div>
          {/* left side */}
          <div className=" w-1/2 h-screen bg-gray-100">
            <div className="mt-40 flex justify-center">
              <form className="m-10 mt-2 max-w-lg ">
                <input
                  className="input mb-2"
                  type="text"
                  placeholder="Full Name"
                  required
                />
                <input
                  className="input mb-2"
                  type="email"
                  placeholder="Email"
                  required
                />

                <input
                  className="input mb-2"
                  type="password"
                  placeholder="Password"
                  required
                />

                <input
                  className="input"
                  type="password"
                  placeholder="Confirm assword"
                  required
                />

                <div className="bg-white mt-2  mb-2">
                  <Select
                    options={options}
                    value={value}
                    onChange={changeHandler}
                    placeholder="Select Country"
                    styles={customStyles}
                    className="w-full"
                  />
                </div>

                <input
                  className="input"
                  type="text"
                  placeholder="Network ID (optional)"
                  required
                />
                <Loginbtn title="Creat account" />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* mobile views */}
      <div className="md:hidden">
        <div className="ml-12 mt-20 text-4xl font-semibold text-gray-700">
          <p className="text-sm text-red-800">The Entrepreneurs directory</p>
          <span className="block">Join the </span>
          <span className="block">Networth building</span>
          <span className="block">
            <span className="text-purple-600">community</span>
          </span>
        </div>

        <div className="mt-20">
          <form className="m-10 text-gray-400">
            <input
              className="input mb-2"
              type="text"
              placeholder="Full Name"
              required
            />
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
            <div className="bg-white mt-2 mb-2">
              <Select
                options={options}
                value={value}
                onChange={changeHandler}
                placeholder="Select Country"
                styles={customStyles}
                className="w-full"
              />
            </div>

            <input
              className="input"
              type="text"
              placeholder="Network ID (optional)"
              required
            />
            <Loginbtn title="Creat account" />
          </form>

          <div
            className="flex justify-center relative font-bold
          text-purple-700"
          >
            <Link to="/login">Login</Link>
            <img className="w-5 h-5 ml-2 mt-1" src={iconarrow} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
