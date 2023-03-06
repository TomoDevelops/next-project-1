"use client";

import React from "react";

const buttonConfig = {
  transparent: [
    "bg-grayTransparent",
    "rounded-sm",
    "border-[1px]",
    "border-gray-900",
    "border-opacity-10",
    "text-white",
  ],
  red: ["bg-mainRed", "rounded-[4px]", "border-none", "text-white"],
  outline: [
    "bg-grayTransparent",
    "rounded-sm",
    "border-[1px]",
    "border-mainRed",
    "text-mainRed",
    "font-semibold",
    "text-mainRed",
  ],
};

function Button({ children, bgColor, height, width, className }) {
  return (
    <button
      className={`flex cursor-pointer items-center justify-center gap-2 font-source font-bold text-opacity-90 ${className} ${buttonConfig[
        bgColor
      ].join(" ")}`}
      style={{ minWidth: width, minHeight: height }}
    >
      {children}
    </button>
  );
}

export default Button;
