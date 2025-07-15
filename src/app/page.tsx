"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Moon, Sun, Loader2 } from "lucide-react";
import { Geist } from "next/font/google";
import { AuroraText } from "@/components/magicui/aurora-text";
import Image from "next/image";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export default function TextSummarizer() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  // Calculate word count
  useEffect(() => {
    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    setWordCount(words.length);
  }, [text]);

  // Dark mode toggle
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

  const canSummarize = wordCount >= 250 && wordCount <= 300;
  const tooShort = wordCount > 0 && wordCount < 40;
  const tooLong = wordCount > 300;
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const handleSummarize = async () => {
    if (!canSummarize) return;

    setIsLoading(true);
    setSummary("");

    try {
      const response = await fetch("/api/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to summarize text");
      }

      setSummary(data.summary);
    } catch (error) {
      console.error("Error summarizing text:", error);
      setSummary("Error: Failed to summarize text. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatSummary = (summary: string) => {
    return summary
      .split("\n")
      .filter((line) => line.trim())
      .map((line, index) => (
        <li key={index} className="mb-2">
          {line.trim()}
        </li>
      ));
  };

  return (
    <div
      className={`${geist.className} min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header
          className={`flex items-center justify-between mb-16 transition-all duration-700 ease-out ${
            isPageLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3">
            <Image src="/olaf.svg" alt="Logo" width={50} height={50} />
            <h1 className="text-2xl font-medium text-gray-900 dark:text-gray-100">
              Ezuradesu
            </h1>
          </div>
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

        <div
          className={`mb-32 transition-all duration-700 ease-out delay-100 ${
            isPageLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="font-semibold text-3xl text-gray-900 dark:text-gray-100 text-center">
            Hari ini mau <AuroraText>meringkas</AuroraText> apa?
          </h1>
        </div>
        <div
          className={`space-y-8 bg transition-all duration-700 delay-200 ease-out ${
            isPageLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <Card className="border-gray-200 dark:border-gray-800">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="text-input"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Masukan teks yang ingin diringkas
                  </label>
                  <div className="flex items-center gap-4 text-sm">
                    <span
                      className={`${
                        tooShort || tooLong
                          ? "text-red-500"
                          : canSummarize
                          ? "text-accent"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {wordCount} words
                    </span>
                    {tooShort && (
                      <span className="text-red-500 text-xs">
                        Minimal 250 kata
                      </span>
                    )}
                    {wordCount >= 40 && wordCount < 250 && (
                      <span className="text-orange-500 text-xs">
                        {250 - wordCount} kamu masih butuh beberapa lagi
                      </span>
                    )}
                  </div>
                </div>
                <Textarea
                  id="text-input"
                  placeholder="Masukan teks disini...(jumlah kata minimal sebanyak 250 kata)"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="min-h-[200px] resize-none border-gray-200 dark:border-gray-700 focus:border-accent dark:focus:border-accent focus:ring-accent"
                />
                <Button
                  onClick={handleSummarize}
                  disabled={!canSummarize || isLoading}
                  className="w-full bg-accent hover:bg-accent/70 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      sedang meringkas...
                    </>
                  ) : (
                    "Mulai Ringkas"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Output Section */}
          {summary && (
            <Card className="border-gray-200 dark:border-gray-800">
              <CardContent className="p-6">
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
                  Summary
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    {formatSummary(summary)}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Footer */}
        <footer
          className={`mt-16 text-center text-sm text-gray-500 dark:text-gray-400 transition-all duration-700 delay-500 ease-out ${
            isPageLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p>
            Masukan paling tidak sebanyak 250 kata hingga 300 kata untuk
            diringkas
          </p>
        </footer>
      </div>
    </div>
  );
}
