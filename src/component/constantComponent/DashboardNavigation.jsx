import { premiumRoutes } from "@/index";
import Link from "next/link";
import React from "react";

export default function DashboardNavigation() {
  return (
    <div className=" bg-amber-300">
      {premiumRoutes.map((route, index) => (
        <Link
          key={index + 11}
          href={`/dashboard/${route.toLowerCase()}`}
          className="text-blue-500 hover:underline mx-2"
        >
          {route}
        </Link>
      ))}
    </div>
  );
}
