import React from "react";

export default function Button({ text, colorBg, colorTxt, type, onClick }) {
  return (
    <>
      <button
        type={type}
        className="px-2 py-1 bg-sky-600 text-white"
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}
