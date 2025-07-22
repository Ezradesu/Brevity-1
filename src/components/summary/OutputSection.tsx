"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function OutputSection({ summary }: { summary: string }) {
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
  );
}
