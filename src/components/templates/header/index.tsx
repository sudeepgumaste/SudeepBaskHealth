'use client'
import React from "react";
import { MenuIcon } from "lucide-react";

import ThemeToggle from "@/components/molecules/theme-toggle";

import { useGlobalStore } from "@/stores/global-store";

const Header = () => {
  const { toggleSidebar } = useGlobalStore();

  return (
    <header className="flex items-center justify-between p-4 bg-primary-500">
      <button className="text-white lg:hidden" onClick={toggleSidebar}>
        <MenuIcon size={24} className="mr-2" />
      </button>
      <h1 className="text-xl font-bold text-white | mr-auto">BaskHealth</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
