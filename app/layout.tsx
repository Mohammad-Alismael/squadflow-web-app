import { PropsWithChildren } from "react";
import "@/styles/global.css";
import Navbar from "@/components/Navbar";
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen	w-screen bg-[#F2F0EB]">{children}</body>
    </html>
  );
}
