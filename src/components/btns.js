import React from "react";

export function Defaultbtn({ title }) {
  return <button className="default-btn px-12">{title}</button>;
}

export function Outlinetbtn({ title }) {
  return <button className="btn btn-outline px-16">{title}</button>;
}

export function Loginbtn({ title, type }) {
  return (
    <button type={type} className="btn-full mt-5 bg-purple-600">
      {title}
    </button>
  );
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
