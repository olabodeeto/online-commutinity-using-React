import React from "react";
import logo from "../assets/img/logo.png";
import bell from "../assets/img/bell.png";
import PostsFeed from "./components/PostsFeed";
import LgHeader from "./components/LgHeader";
import LeftSidebar from "./components/LeftSidebar";
import PostModal from "../../components/Modals/PostModal";
import Bottomtab from "./components/Bottomtab";
export default function Home() {
  return (
    <>
      <div className="hidden md:block bg-blue-50 h-screen bg-fixed pb-20">
        <PostModal />
        <LgHeader />
        <div
          className=" flex gap-5 w-full py-4 relative 
        top-20 h-full m-auto"
        >
          <LeftSidebar />
          <div className="w-6/12  bg-white overflow-auto">
            {/* post component */}
            <PostsFeed />
            {/* post component end */}
          </div>
          <div className="w-3/12 p-2  bg-white md:hidden lg:block"></div>
        </div>
      </div>

      {/* ================================== mobile screen ============== */}
      <div className="md:hidden bg-blue-100 h-screen">
        <PostModal />
        <div className=" fixed top-0 z-50 flex py-4 mb-2 w-screen bg-white">
          <div className="w-1/2 px-4">
            <img className="w-8" src={logo} alt="" />
          </div>
          <div className="w-1/2 relative">
            <img
              className="float-right absolute right-2 top-1 "
              src={bell}
              alt=""
            />
          </div>
        </div>
        {/* post component */}
        <PostsFeed />
        {/* post component end */}
        <Bottomtab />
      </div>
    </>
  );
}
