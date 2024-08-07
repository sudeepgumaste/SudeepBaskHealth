"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { MoonIcon, SunIcon } from "lucide-react";

const ThemeToggle = () => {
  const prefersDarkTheme = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkTheme, setIsDarkTheme] = React.useState(true);

  console.log(prefersDarkTheme)

  useEffect(() => {
    setTimeout(() => {
      setIsDarkTheme(prefersDarkTheme);
    }, 100);
  }, [prefersDarkTheme]);

  useLayoutEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkTheme, prefersDarkTheme]);

  return (
    <button
      className="flex items-center justify-center rounded-full bg-white/10 p-2 text-sm shadow-md shadow-black/5 hover:bg-black/5 hover:text-white"
      onClick={() => setIsDarkTheme((prev) => !prev)}
    >
      {isDarkTheme ? (
        <SunIcon color="white" className="h-5 w-5" />
      ) : (
        <MoonIcon color="white" className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
