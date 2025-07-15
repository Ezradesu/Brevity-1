import React from "react";
import { Moon, Sun, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

function header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <header className="flex items-center justify-between mb-12">
      <div className="flex items-center gap-3">
        <FileText className="w-8 h-8 text-accent" />
        <h1 className="text-2xl font-medium text-gray-900 dark:text-gray-100">
          Text Summarizer
        </h1>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent"
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </Button>
    </header>
  );
}

export default header;
