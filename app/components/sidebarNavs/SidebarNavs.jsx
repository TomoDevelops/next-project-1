"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { UilEstate, UilUsersAlt, UilVideo } from "@iconscout/react-unicons";

function SidebarNavs() {
  const pathname = usePathname();
  return (
    <div>
      <Link
        className={`flex items-center justify-start gap-2 p-2 font-bold ${
          pathname === "/" ? "text-mainRed" : "text-white text-opacity-90"
        }`}
        href="/"
      >
        <UilEstate
          size="32"
          color={`${
            pathname === "/" ? "rgb(var(--main-red-rgb))" : "#ffffffe6"
          }`}
        />
        For You
      </Link>
      <Link
        className={`flex items-center justify-start gap-2 p-2 font-bold ${
          pathname === "/following"
            ? "text-mainRed"
            : "text-white text-opacity-90"
        }`}
        href="/following"
      >
        <UilUsersAlt
          size="32"
          color={`${
            pathname === "/following" ? "rgb(var(--main-red-rgb))" : "#ffffffe6"
          }`}
        />
        Following
      </Link>
      <Link
        className={`flex items-center justify-start gap-2 p-2 font-bold ${
          pathname === "/live" ? "text-mainRed" : "text-white text-opacity-90"
        }`}
        href="/live"
      >
        <UilVideo
          size="32"
          color={`${
            pathname === "/live" ? "rgb(var(--main-red-rgb))" : "#ffffffe6"
          }`}
        />
        LIVE
      </Link>
    </div>
  );
}

export default SidebarNavs;
