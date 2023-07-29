import React, { Suspense } from "react";
import { Bell } from "react-feather";
import { getUserFromCookie } from "@/lib/auth";
import { cookies } from "next/headers";
import { User } from "../types";

function Navbar({children}) {
  return (
    <div className="px-4 h-24 flex gap-2 justify-between items-center">
      <div>
        {children}
        <span className="text-[0.9rem] text-gray-400">
          Check your daily tasks and schedule
        </span>
      </div>
      <div className="flex gap-2 items-center">
        <input
          className="h-10 w-60 px-4 rounded-xl"
          type="text"
          placeholder="search ..."
        />
        <div className="bg-white rounded-xl cursor-pointer w-10 h-10 flex items-center justify-center">
          <Bell size={25} />
        </div>
        <div className="w-10 h-10 rounded-full cursor-pointer overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2952&q=80"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
