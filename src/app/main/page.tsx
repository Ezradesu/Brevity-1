"use client";

import { useState, useEffect } from "react";
import { Geist } from "next/font/google";
import FooterSection from "@/components/footer";
import InputSection from "@/components/summary/InputSection";
import OutputSection from "@/components/summary/OutputSection";
import HeadingSection from "@/components/summary/HeadingSection";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export default function TextSummarizer() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const canSummarize = wordCount >= 250 && wordCount <= 300;
  const tooShort = wordCount > 0 && wordCount < 40;
  const tooLong = wordCount > 300;

  useEffect(() => {
    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    setWordCount(words.length);
  }, [text]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${geist.className} min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <HeadingSection isPageLoaded={isPageLoaded} />

        <div
          className={`space-y-8 transition-all duration-700 delay-200 ease-out ${
            isPageLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <InputSection
            text={text}
            setText={setText}
            setSummary={setSummary}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            wordCount={wordCount}
            canSummarize={canSummarize}
            tooShort={tooShort}
            tooLong={tooLong}
          />

          {summary && <OutputSection summary={summary} />}
        </div>

        <FooterSection isPageLoaded />
      </div>
    </div>
  );
}
