import WidgetsToggle from "@/components/organisms/widgets-toggle";
import { cn } from "@/utils/cn";
import {
  Box,
  LayoutDashboardIcon,
  LocateIcon,
  LogOut,
  Receipt,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const LINKS = [
  {
    name: "Dashboard",
    href: "#",
    icon: <LayoutDashboardIcon size={16} />,
    active: true,
  },
  { name: "Locations", href: "#", icon: <LocateIcon size={16} /> },
  { name: "Transactions", href: "#", icon: <Receipt size={16} /> },
  { name: "Products", href: "#", icon: <Box size={16} /> },
];

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col | border-r border-primary | bg-layer-2">
      <nav className="flex flex-col gap-4 px-4 py-10">
        {LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "text-primary text-sm font-light | py-3 p-4 | w-full | rounded-xl",
              "flex gap-2 items-center | hover:bg-layer-1 opacity-80 | transition-colors",
              { ["bg-layer-1 opacity-100 shadow-md"]: link.active }
            )}
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </nav>
      <WidgetsToggle />
      <button
        className={cn(
          "flex gap-2 p-4 mt-auto | items-center | text-primary text-sm | ",
          "hover:bg-layer-1 | border-t border-primary | transition-colors"
        )}
      >
        <LogOut size={14} />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
