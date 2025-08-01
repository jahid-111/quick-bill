import { navRoutes } from "@/index";
import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <div className="flexCenter responsiveDevice p-3">
      {navRoutes.map((route, index) => (
        <Link
          key={index + 11}
          href={`/${route.toLowerCase()}`}
          className="borderCustom py-1 px-2 text-blue-500 hover:underline mx-2 w-full text-right sm:w-auto"
        >
          {route}
        </Link>
      ))}
    </div>
  );
}
