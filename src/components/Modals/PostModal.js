import React, { useContext } from "react";
import { postFormContext } from "../../store/PostformProvider";
import { Cross } from "akar-icons";
import { Image } from "akar-icons";

export default function PostModal() {
  const { openPostForm, setopenPostForm } = useContext(postFormContext);

  const closeModal = () => {
    setopenPostForm(!openPostForm);
    console.log(openPostForm);
  };
  return (
    <div className={`${openPostForm ? "flex" : "hidden"} postModal`}>
      <div
        className="mt-20 w-full  sm:w-2/6 md:w-4/6 lg:w-2/6 h-72
       bg-white border-blue-100 rounded-lg "
      >
        <div
          className="w-full bg-gray-100 h-10 
        flex items-center justify-end ounded-lg mt-1"
        >
          <Cross size={20} className=" mr-2" onClick={closeModal} />
        </div>
        <div className="mt-10">
          <div className="m-auto  sm:mt-4 w-10/12">
            <form className="flex flex-col">
              <textarea
                placeholder="Share your thought"
                className="border-2 border-blue-100 rounded-lg
              outline-none p-4 resize-none"
              ></textarea>
              <div className="flex mt-5">
                <button
                  className="bg-purple-600 rounded-lg
               text-pink-200 mt-2 p-2 w-4/12 sm:w-3/12"
                >
                  Post
                </button>
                <Image size={24} className="mt-4 ml-10" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
