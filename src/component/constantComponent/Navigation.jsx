import { navRoutes } from "@/index";
import React from "react";

export default function Navigation() {
  return (
    <div>
      {navRoutes.map((route, index) => (
        <a
          key={index + 11}
          href={`/${route.toLowerCase()}`}
          className="text-blue-500 hover:underline mx-2"
        >
          {route}
        </a>
      ))}
    </div>
  );
}
