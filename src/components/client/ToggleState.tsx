"use client";
import { navBarRoutes } from "@/constants/routesEnums";
import Link from "next/link";
import { useState } from "react";
import UserState from "./UserState";

export default function ToggleState(setOpen(): void) {
    const [open, setOpen] = useState(false);  
  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } absolute z-20 bg-[#232274f9] w-full underline-none md:hidden opacity-90`}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 translate ease-in-out duration-300">
        {navBarRoutes.map((route) => (
          <Link
            key={route.id}
            href={route.link}
            className="block px-3 underline-none py-2 rounded-md text-base font-medium"
          >
            {route.name}
          </Link>
        ))}
        <UserState />
      </div>
    </div>
  );
}
