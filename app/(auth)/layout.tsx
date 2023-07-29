import { PropsWithChildren } from "react";

export default function AuthRootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body className="w-screen h-screen flex justify-center items-center bg-[#F2F0EB]">
        {children}
      </body>
    </html>
  );
}
