# Brevity AI - AI Text Summarizer

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A simple web application built with Next.js to summarize lengthy text content using AI, providing concise insights quickly.

## ✨ Features

* **AI-Powered Summarization**: Utilizes an AI model via an external API to generate accurate and relevant summaries.
* **Time Saving**: Quickly transforms long articles, documents, or any text (between 250-300 words for optimal results based on current setup) into key points.
* **Simple Interface**: Easy-to-use interface with clear input and output sections.
* **Word Count**: Real-time word count feedback for the input text.
* **Dark Mode**: Supports light and dark themes for user preference.
* **Responsive Design**: Built with Tailwind CSS for a seamless experience on different devices.

## 🤔 How It Works

Getting your summary is straightforward:

1.  **Paste Your Text**: Copy and paste the text you want to summarize into the input text area (Minimum 250 words, ideally not exceeding 300 based on current validation).
2.  **Click Summarize**: Hit the "Mulai Ringkas" button.
3.  **Get Your Summary**: The AI processes the content, and the concise summary appears below instantly.

The application sends the text to a Next.js API route (`/api/summarize`) which then forwards the request to the backend summarization service hosted separately.

## 🛠️ Tech Stack

* **Framework**: [Next.js](https://nextjs.org/) (App Router)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (using Radix UI & class-variance-authority)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Backend Proxy**: Next.js API Route
* **AI Service**: External API endpoint (`https://api-textsummarizer-pi.vercel.app/summarize`)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Node.js (Version recommended by Next.js, check their docs)
* npm, yarn, pnpm, or bun

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/your-username/brevity-ai.git](https://github.com/your-username/brevity-ai.git) 
    cd brevity-ai
    ```
2.  Install dependencies using your preferred package manager:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
