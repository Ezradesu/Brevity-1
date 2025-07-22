"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  isPageLoaded: boolean;
}

export default function HeroSection({ isPageLoaded }: HeroSectionProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation setelah component mount
    if (isPageLoaded) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 100); // delay kecil untuk memastikan DOM sudah ready

      return () => clearTimeout(timer);
    }
  }, [isPageLoaded]);

  return (
    <section
      className={`text-center mb-20 transition-all duration-700 ease-out delay-200 ${
        shouldAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
          Summarize any text with{" "}
          <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
            AI precision
          </span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
          Transform lengthy documents, articles, and content into clear, concise
          summaries in seconds. Perfect for research, studying, and quick
          content review.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/main">
            <Button className="h-14 px-8 bg-accent hover:bg-accent/60 text-white font-medium shadow-lg shadow-accent/25 transition-all duration-200">
              <Sparkles className="w-5 h-5 mr-3" />
              Start Summarizing
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
