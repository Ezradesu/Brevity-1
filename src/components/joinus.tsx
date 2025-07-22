"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function JoinUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation setelah component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700); // delay untuk sequence terakhir setelah how it works

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`text-center transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <Card
        className={`border-0 shadow-lg shadow-gray-200/50 dark:shadow-gray-800/50 bg-white dark:bg-gray-800 rounded-3xl overflow-hidden transition-all duration-500 ease-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
      >
        <CardContent className="p-12">
          <h3
            className={`text-3xl font-light text-gray-900 dark:text-gray-100 mb-4 transition-all duration-500 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
          >
            Ready to get started?
          </h3>
          <p
            className={`text-lg text-gray-600 dark:text-gray-400 mb-8 transition-all duration-500 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isVisible ? "650ms" : "0ms" }}
          >
            Join thousands of users who save time with AI-powered text
            summarization
          </p>
          <div
            className={`transition-all duration-500 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
          >
            <Link href="/main">
              <Button className="h-14 px-8 bg-accent hover:bg-accent/60 text-white font-medium shadow-lg shadow-accent/25 transition-all duration-200">
                <Sparkles className="w-5 h-5 mr-3" />
                Try It Now - Its Free
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
