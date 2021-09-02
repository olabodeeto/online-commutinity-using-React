import React from "react";
import { Home, ChatDots, Person } from "akar-icons";

export default function Bottomtab() {
  return (
    <>
      <div
        className="flex justify-center items-center gap-10 h-14 w-full 
        bg-blue-100 fixed bottom-0 bg-opacity-80 blur-lg backdrop-blur-lg"
      >
        <div>
          <Person size={24} />
        </div>
        <div>
          <Home size={24} />
        </div>
        <div>
          <ChatDots size={24} />
        </div>
      </div>
    </>
  );
}
