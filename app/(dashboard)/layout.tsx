import { PropsWithChildren, Suspense } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import NavbarSkeleton from "@/components/NavbarSkeleton";
import {getUserFromCookie} from "@/lib/auth";
import {cookies} from "next/headers";
import {User} from "../../types";

export default function DashboardRootLayout({ children }: PropsWithChildren) {
  // @ts-ignore
  return (
    <html lang="en">
      <head />
      <body className="h-screen	w-screen bg-[#F2F0EB]">
        <Sidebar />
        <div className="h-screen w-5/6 bg-[#F2F0EB] float-right">
          {children}
        </div>
      </body>
    </html>
  );
}
