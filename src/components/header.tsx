"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [isPageLoaded, setIsPageLoaded] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 pt-8 pb-0 max-w-4xl">
      <header
        className={`flex items-center justify-between mb-16 transition-all duration-700 ease-out ${
          isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Link href="/">
          <div className="flex items-center gap-3">
            <Image src="/olaf.svg" alt="Logo" width={50} height={50} />
            <h1
              className="text-2xl font-medium text-gray-900 dark:text-gray-100"
              style={{ fontFamily: "Geist" }}
            >
              Ezuradesu
            </h1>
          </div>
        </Link>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="text-accent dark:text-white hover:text-white dark:hover:text-white"
        >
          {isDarkMode ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </Button>
      </header>
    </div>
  );
}

export default Header;
