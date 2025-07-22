"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Clock, LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);

  const features: Feature[] = [
    {
      icon: Zap,
      title: "AI-Powered",
      description:
        "Advanced AI technology creates accurate, concise summaries in seconds",
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Transform lengthy documents into key insights instantly",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "Your text is processed securely and never stored permanently",
    },
  ];

  useEffect(() => {
    // Trigger animation setelah component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // delay lebih lama untuk stagger effect dengan hero

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`mb-20 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card
            key={index}
            className={`border-0 shadow-lg shadow-gray-200/50 dark:shadow-gray-800/50 bg-white dark:bg-gray-800 rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-gray-200/60 dark:hover:shadow-gray-800/60 dark:hover:bg-gray-700 transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 100 + 400}ms` : "0ms",
            }}
          >
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 dark:bg-accent-foreground/10">
                <feature.icon className="w-8 h-8 text-accent dark:text-accent-foreground" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
