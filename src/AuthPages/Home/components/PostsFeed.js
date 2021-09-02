import React, { useState, useContext } from "react";
import { postFormContext } from "../../../store/PostformProvider";
import profileImg from "../../assets/img/profile.jpg";
import userImg from "../../assets/img/user1.jpg";
import heart from "../../assets/img/heart.png";
import commenticon from "../../assets/img/comment.png";
import timeicon from "../../assets/img/time.png";

export default function PostsFeed() {
  const { openPostForm, setopenPostForm } = useContext(postFormContext);
  const openForm = () => {
    setopenPostForm(!openPostForm);
  };
  return (
    <div className="relative top-14 sm:top-0 md:w-full ">
      <div className="postbtn cursor-pointer" onClick={openForm}>
        +
      </div>
      <div
        className="flex gap-5 fixed sm:sticky py-4 ml-2 top-14 sm:top-0
      overflow-x-scroll z-10 bg-gray-100 
      w-full"
      >
        <span>All posts</span>
        <span>News</span>
        <span>Network</span>
        <span>Events</span>
      </div>
      <div className="relative top-14">
        <div className="m-2">
          <div className="postfeed">
            <div className="w-3/12">
              <img className="postAvatar" src={profileImg} alt="" />
            </div>
            <div className="postBlock">
              <p className="postUsername">Mark Dennis</p>
              <p className="text-gray-600 text-sm font-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus rem possimus magni nobis, eveniet voluptas deserunt,
              </p>
              <div className="flex mt-4">
                <span className="flex mr-4">
                  <img
                    className="w-2 h-2 sm:w-4 sm:h-4 mt-1 mr-1"
                    src={heart}
                    alt=""
                  />
                  <span className="sm:ml-1 text-purple-400 sm:text-sm text-xs">
                    12k
                  </span>
                </span>

                <span className="flex mr-10">
                  <img
                    className="w-2 h-2 sm:w-4 sm:h-4 mt-1 mr-1"
                    src={commenticon}
                    alt=""
                  />
                  <span className="sm:ml-1 text-purple-400 sm:text-sm text-xs">
                    200
                  </span>
                </span>

                <span className="flex mr-4">
                  <img
                    className="w-2 h-2 sm:w-4 sm:h-4 mt-1 mr-1"
                    src={timeicon}
                    alt=""
                  />
                  <span className="sm:ml-1 text-purple-400 sm:text-sm text-xs">
                    2min ago
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="m-2">
          <div className="postfeed ">
            <div className="w-3/12">
              <img className="postAvatar" src={userImg} alt="" />
            </div>
            <div className="postBlock">
              <p className="postUsername">John Doe</p>
              <p className="text-gray-600 text-sm font-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus rem possimus magni nobis, eveniet voluptas deserunt,
              </p>
              <div className="flex mt-4">
                <span className="flex mr-4">
                  <img
                    className="w-2 h-2 sm:w-4 sm:h-4 mt-1 mr-1"
                    src={heart}
                    alt=""
                  />
                  <span className="sm:ml-1 text-purple-400 sm:text-sm text-xs">
                    1k
                  </span>
                </span>

                <span className="flex mr-10">
                  <img
                    className="w-2 h-2 sm:w-4 sm:h-4 mt-1 mr-1"
                    src={commenticon}
                    alt=""
                  />
                  <span className="sm:ml-1 text-purple-400 sm:text-sm text-xs">
                    200
                  </span>
                </span>

                <span className="flex mr-4">
                  <img
                    className="w-2 h-2 sm:w-4 sm:h-4 mt-1 mr-1"
                    src={timeicon}
                    alt=""
                  />
                  <span className="sm:ml-1 text-purple-400 sm:text-sm text-xs">
                    1hr ago
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="m-2">
          <div className="postfeed ">
            <div className="w-3/12">
              <img className="postAvatar" src={userImg} alt="" />
            </div>
            <div className="postBlock">
              <p className="postUsername">John Doe</p>
              <p className="text-gray-600 text-sm font-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus rem possimus magni nobis, eveniet voluptas deserunt,
              </p>
              <div className="flex mt-4">
                <span className="flex mr-4">
                  <img
                    className="w-2 h-2 sm:w-4 sm:h-4 mt-1 mr-1"
                    src={heart}
                    alt=""
                  />
                  <span className="sm:ml-1 text-purple-400 sm:text-sm text-xs">
                    1k
                  </span>
                </span>

                <span className="flex mr-10">
                  <img
                    className="w-2 h-2 sm:w-4 sm:h-4 mt-1 mr-1"
                    src={commenticon}
                    alt=""
                  />
                  <span className="sm:ml-1 text-purple-400 sm:text-sm text-xs">
                    200
                  </span>
                </span>

                <span className="flex mr-4">
                  <img
                    className="w-2 h-2 sm:w-4 sm:h-4 mt-1 mr-1"
                    src={timeicon}
                    alt=""
                  />
                  <span className="sm:ml-1 text-purple-400 sm:text-sm text-xs">
                    1hr ago
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="m-2">
          <div className="postfeed ">
            <div className="w-3/12">
              <img className="postAvatar" src={userImg} alt="" />
            </div>
            <div className="postBlock">
              <p className="postUsername">John Doe</p>
              <p className="text-gray-600 text-sm font-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus rem possimus magni nobis, eveniet voluptas deserunt,
              </p>
              <div className="flex mt-4">
                <span className="flex mr-4">
                  <img
                    className="w-2 h-2 sm:w-4 sm:h-4 mt-1 mr-1"
                    src={heart}
                    alt=""
                  />
                  <span className="sm:ml-1 text-purple-400 sm:text-sm text-xs">
                    1k
                  </span>
                </span>

                <span className="flex mr-10">
                  <img
                    className="w-2 h-2 sm:w-4 sm:h-4 mt-1 mr-1"
                    src={commenticon}
                    alt=""
                  />
                  <span className="sm:ml-1 text-purple-400 sm:text-sm text-xs">
                    200
                  </span>
                </span>

                <span className="flex mr-4">
                  <img
                    className="w-2 h-2 sm:w-4 sm:h-4 mt-1 mr-1"
                    src={timeicon}
                    alt=""
                  />
                  <span className="sm:ml-1 text-purple-400 sm:text-sm text-xs">
                    1hr ago
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="m-2">
          <div className="postfeed">
            <div className="w-3/12">
              <img className="postAvatar" src={profileImg} alt="" />
            </div>
            <div className="postBlock">
              <p className="postUsername">Mark Dennis</p>
              <p className="text-gray-600 text-sm font-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus rem possimus magni nobis, eveniet voluptas deserunt,
              </p>
              <div className="flex mt-4">
                <span className="flex mr-4">
                  <img
                    className="w-2 h-2 sm:w-4 sm:h-4 mt-1 mr-1"
                    src={heart}
                    alt=""
                  />
                  <span className="sm:ml-1 text-purple-400 sm:text-sm text-xs">
                    12k
                  </span>
                </span>

                <span className="flex mr-10">
                  <img
                    className="w-2 h-2 sm:w-4 sm:h-4 mt-1 mr-1"
                    src={commenticon}
                    alt=""
                  />
                  <span className="sm:ml-1 text-purple-400 sm:text-sm text-xs">
                    200
                  </span>
                </span>

                <span className="flex mr-4">
                  <img
                    className="w-2 h-2 sm:w-4 sm:h-4 mt-1 mr-1"
                    src={timeicon}
                    alt=""
                  />
                  <span className="sm:ml-1 text-purple-400 sm:text-sm text-xs">
                    2min ago
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
