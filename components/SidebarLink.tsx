"use client";
import Link from "next/link";
import { Settings, User, Grid, Calendar, Users } from "react-feather";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { linkType } from "../types";

const icons = {
  Settings,
  User,
  Grid,
  Calendar,
  Users
};

const SidebarLink = ({ link }: { link: linkType }) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link.link) {
    isActive = true;
  }

  // @ts-ignore
  const IconComponent = icons[link.icon];
  return (
    <Link
      href={link.link}
      className="flex items-center hover:stroke-green-700 transition duration-200 ease-in-out"
    >
      <IconComponent
        size={28}
        className={clsx(
          "stroke-gray-300 hover:stroke-green-700 transition duration-200 ease-in-out",
          isActive && "stroke-green-700"
        )}
      />
      <span className={clsx("px-3", isActive && "text-green-700")}>
        {link.label}
      </span>
    </Link>
  );
};

export default SidebarLink;
