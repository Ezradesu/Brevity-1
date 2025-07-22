"use client";

interface FooterSectionProps {
  isPageLoaded: boolean;
}

export default function FooterSection({ isPageLoaded }: FooterSectionProps) {
  return (
    <footer
      className={`my-20 text-center transition-all duration-700 ease-out delay-1000 ${
        isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Made with ❤️ by EZURADESUU
      </p>
    </footer>
  );
}
