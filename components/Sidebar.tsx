import Card from "./Card";
import Image from "next/image";
import logo from "@/assets/images/squadflow_inner_icon.png";
import SidebarLink from "./SidebarLink";
import { linkType } from "../types";
import Dropdown from "@/components/Dropdown";

const links: linkType[] = [
  { label: "Home", icon: "Grid", link: "/home" },
  {
    label: "Calendar",
    icon: "Calendar",
    link: "/calendar",
  },
  { label: "Teams", icon: "Users", link: "/collaboration" },
  { label: "Profile", icon: "User", link: "/profile" },
  {
    label: "Settings",
    icon: "Settings",
    link: "/settings",
  },
];

const Sidebar = () => {
  return (
    <div className="bg-white float-left h-full w-1/6 flex flex-col gap-10 p-5">
      <div className="flex items-center gap-3">
        <Image src={logo} alt="Able logo" priority className="w-14" />
        <span className="text-2xl font-bold capitalize">squadflow</span>
      </div>
      {/*<Dropdown />*/}
      {links.map((link, i) => (
        <SidebarLink key={i} link={link} />
      ))}
    </div>
  );
};

export default Sidebar;
