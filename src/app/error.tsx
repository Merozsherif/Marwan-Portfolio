"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Error Icon */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto relative">
            {/* Pulsing circles */}
            <div
              className="absolute inset-0 rounded-full opacity-20"
              style={{
                backgroundColor: "var(--orange-text)",
                animation: "ping 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              }}
            />
            <div
              className="absolute inset-4 rounded-full opacity-30"
              style={{
                backgroundColor: "var(--orange-text)",
                animation: "ping 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              }}
            />

            {/* Main icon */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ animation: "shake 0.5s ease-in-out" }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-20 h-20"
                style={{ color: "var(--orange-text)" }}
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 8v4M12 16h.01"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div
          className="space-y-4"
          style={{ animation: "slide-up 0.6s ease-out" }}
        >
          <h2
            className="text-4xl max-md:text-3xl font-bold"
            style={{ color: "var(--text-color)" }}
          >
            Something Went Wrong
          </h2>
          <p
            className="text-lg max-md:text-base max-w-md mx-auto"
            style={{ color: "var(--text-color-secondary)" }}
          >
            Don&apos;t worry, it&apos;s not you — it&apos;s us. We&apos;re
            working on fixing this issue.
          </p>

          {/* Error details (only in development) */}
          {process.env.NODE_ENV === "development" && (
            <details
              className="mt-6 text-left p-4 rounded-xl overflow-auto max-h-48 border"
              style={{
                backgroundColor: "var(--custom-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              <summary
                className="cursor-pointer font-semibold mb-2"
                style={{ color: "var(--orange-text)" }}
              >
                Error Details (Development Only)
              </summary>
              <pre
                className="text-xs whitespace-pre-wrap"
                style={{ color: "var(--text-color-secondary)" }}
              >
                {error.message}
              </pre>
            </details>
          )}
        </div>

        {/* Action buttons */}
        <div
          className="flex flex-wrap gap-4 justify-center mt-10"
          style={{ animation: "slide-up-delayed 0.8s ease-out 0.2s backwards" }}
        >
          <button
            onClick={reset}
            className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ backgroundColor: "var(--orange-text)" }}
          >
            <span className="relative z-10">Try Again</span>
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          </button>

          <Link
            href="/"
            className="px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 hover:scale-105"
            style={{
              color: "var(--text-color)",
              borderColor: "var(--border-color)",
              backgroundColor: "var(--custom-bg-2)",
            }}
          >
            Go Home
          </Link>
        </div>

        {/* Support message */}
        <div
          className="mt-12 pt-8 border-t"
          style={{
            borderColor: "var(--border-color)",
            animation: "fade-in-slow 1.2s ease-out 0.4s backwards",
          }}
        >
          <p className="text-sm" style={{ color: "var(--gray-text)" }}>
            If this problem persists, please{" "}
            <Link
              href="/contact"
              className="font-semibold underline hover:no-underline transition-all"
              style={{ color: "var(--orange-text)" }}
            >
              contact me
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
