"use client";
import { navBarRoutes } from "@/constants/routesEnums";
import Link from "next/link";
import { FaPaintRoller } from "react-icons/fa";
import { GiLargePaintBrush } from "react-icons/gi";
import UserState from "../client/UserState";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-[#50577A] w-full text-gray-50 relative z-10">
      <div className="flex items-center justify-between h-16">
        <div className="flex flex-auto">
          <div className="hidden mx-auto my-auto md:block">
            <div className="flex justify-end -mr-2 items-baseline">
              {navBarRoutes.map((route) => (
                <Link
                  key={route.id}
                  href={route.link}
                  className="px-3 py-2 justify-end underline-none rounded-md text-base md:text-lg font-medium"
                >
                  {route.name}
                </Link>
              ))}
              <UserState />
            </div>
          </div>
          <div className="md:hidden flex" onClick={() => setOpen(!open)}>
            <div className="flex justify-items-end">
              {open ? (
                <FaPaintRoller className="ml-4 w-8 h-8" />
              ) : (
                <GiLargePaintBrush className="ml-4 w-8 h-8" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          open ? "block" : "hidden"
        } absolute z-20 bg-[#50577A] w-full underline-none md:hidden opacity-90`}
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
    </nav>
  );
}
