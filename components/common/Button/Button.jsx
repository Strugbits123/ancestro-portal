"use client";

import React from "react";

function Button({ text, classes = "", textClasses = "", onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group px-[30px] py-[10px] border border-[#F8B03B] cursor-pointer rounded-[500px] transition-all duration-300 hover:bg-[#F8B03B] hover:[box-shadow:0px_4px_8px_0px_#F5DC7B4A,0px_15px_15px_0px_#F5DC7B42,0px_34px_20px_0px_#F5DC7B26,0px_60px_24px_0px_#F5DC7B0A,0px_94px_26px_0px_#F5DC7B03] ${classes}`}
    >
      <span className={`!text-[#F8B03B] group-hover:!text-black ${textClasses}`}>
        {text}
      </span>
    </button>
  );
}

export default Button;