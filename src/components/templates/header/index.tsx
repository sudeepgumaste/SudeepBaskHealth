import ThemeToggle from "@/components/molecules/theme-toggle";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-primary-500">
      <h1 className="text-xl font-bold text-white">BaskHealth</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
