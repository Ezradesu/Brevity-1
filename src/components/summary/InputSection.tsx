"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

interface InputSectionProps {
  text: string;
  setText: (value: string) => void;
  setSummary: (value: string) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  wordCount: number;
  canSummarize: boolean;
  tooShort: boolean;
  tooLong: boolean;
}

export default function InputSection({
  text,
  setText,
  setSummary,
  isLoading,
  setIsLoading,
  wordCount,
  canSummarize,
  tooShort,
  tooLong,
}: InputSectionProps) {
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
      if (!response.ok) throw new Error(data.error || "Failed to summarize");

      setSummary(data.summary);
    } catch (error) {
      console.error(error);
      setSummary("Error: Failed to summarize text. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="border-gray-200 dark:border-gray-800">
      <CardContent className="p-6 space-y-4">
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
              <span className="text-red-500 text-xs">Minimal 250 kata</span>
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
      </CardContent>
    </Card>
  );
}
