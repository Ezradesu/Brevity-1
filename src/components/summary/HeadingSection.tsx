"use client";

import { AuroraText } from "@/components/magicui/aurora-text";

export default function HeadingSection({
  isPageLoaded,
}: {
  isPageLoaded: boolean;
}) {
  return (
    <div
      className={`mb-32 transition-all duration-700 ease-out delay-100 ${
        isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h1 className="font-semibold text-3xl text-gray-900 dark:text-gray-100 text-center">
        Hari ini mau <AuroraText>meringkas</AuroraText> apa?
      </h1>
    </div>
  );
}
