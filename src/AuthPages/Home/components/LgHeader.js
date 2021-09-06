import React, { useContext } from "react";
import { postFormContext } from "../../../store/PostformProvider";
import bluelogo from "../../assets/img/bluelogo.png";
import searchicon from "../../assets/img/search.png";
import profileImg from "../../assets/img/profile.jpg";
import bell from "../../assets/img/bell.png";
import addicon from "../../assets/img/addicon.png";

export default function LgHeader() {
  const { openPostForm, setopenPostForm } = useContext(postFormContext);

  const openForm = () => {
    setopenPostForm(!openPostForm);
  };
  return (
    <>
      <div className="bg-white w-screen fixed z-50 top-0 border-2">
        <div className="flex gap-10 bg-white w-11/12 m-auto">
          <div className="mt-2 w-3/12">
            <img className="p-2 w-12" src={bluelogo} alt="" />
          </div>

          <div className="mt-2 w-6/12">
            <form
              className="flex rounded-lg w-10/12 px-4 
                  outline-none bg-gray-100"
            >
              <span>
                <img className="w-4 mt-3" src={searchicon} alt="" />
              </span>
              <input
                className=" w-10/12 py-2 px-4 
                  outline-none bg-gray-100"
                type="search"
                placeholder="Search"
              />
            </form>
          </div>

          <div className="flex gap-8 lg:gap-8 mt-3 w-3/12 relative">
            <span>#</span>
            <span>
              <img className="w-5 h-5 mt-1" src={bell} alt="" />
            </span>
            <span className="sm:mr-10" onClick={openForm}>
              <img className="w-5 h-5 mt-1" src={addicon} alt="" />
            </span>
            <div className="w-3/12 absolute sm:ml-4 right-1 bottom-3">
              <img className="lgHeadAvatar" src={profileImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
