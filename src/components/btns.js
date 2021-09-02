import React from "react";

export function Defaultbtn({ title }) {
  return (
    <button
      className="btn  bg-gradient-to-r 
    from-purple-600 to-purple-800 text-yellow-200 border-2
    border-purple-600"
    >
      {title}
    </button>
  );
}

export function Loginbtn({ title }) {
  return <button className="btn-full mt-5 bg-purple-600">{title}</button>;
}

export function LoginbtnDesktop({ title }) {
  return (
    <button
      className="mt-5 py-4 w-60 rounded-lg text-yellow-200
     bg-purple-600"
    >
      {title}
    </button>
  );
}
