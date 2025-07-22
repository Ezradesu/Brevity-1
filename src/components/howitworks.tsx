"use client";

import { useEffect, useState } from "react";

interface Step {
  step: string;
  title: string;
  description: string;
}

export default function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);

  const steps: Step[] = [
    {
      step: "1",
      title: "Paste Your Text",
      description: "Copy and paste any text with 250+ words",
    },
    {
      step: "2",
      title: "Click Summarize",
      description: "Our AI analyzes and processes your content",
    },
    {
      step: "3",
      title: "Get Your Summary",
      description: "Receive a clear, concise summary instantly",
    },
  ];

  useEffect(() => {
    // Trigger animation setelah component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // delay untuk sequence setelah features section

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`mb-20 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div
        className={`text-center mb-12 transition-all duration-500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
      >
        <h3 className="text-3xl font-light text-gray-900 dark:text-gray-100 mb-4">
          How it works
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Get your summary in three simple steps
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((item, index) => (
          <div
            key={index}
            className={`text-center transition-all duration-500 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 150 + 400}ms` : "0ms",
            }}
          >
            <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 font-medium text-lg">
              {item.step}
            </div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              {item.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
