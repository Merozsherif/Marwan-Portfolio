"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 Number */}
        <div className="relative mb-8">
          <h1
            className="text-[180px] max-md:text-[120px] font-bold leading-none opacity-10 select-none"
            style={{
              color: "var(--text-color)",
              animation: "pulse-slow 3s ease-in-out infinite",
            }}
          >
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Floating geometric shapes */}
              <div
                className="absolute -top-20 -left-20 w-32 h-32 border-4 rounded-full opacity-20"
                style={{
                  borderColor: "var(--orange-text)",
                  animation: "float 3s ease-in-out infinite",
                }}
              />
              <div
                className="absolute -bottom-16 -right-16 w-24 h-24 border-4 rounded-lg opacity-20"
                style={{
                  borderColor: "var(--orange-text)",
                  animation: "float-delayed 3s ease-in-out infinite",
                  animationDelay: "1s",
                }}
              />

              {/* Main icon */}
              <div
                className="w-32 h-32 mx-auto mb-6 relative"
                style={{ animation: "bounce-gentle 2s ease-in-out infinite" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-full h-full"
                  style={{ color: "var(--orange-text)" }}
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                    fill="currentColor"
                  />
                </svg>
              </div>
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
            Page Not Found
          </h2>
          <p
            className="text-lg max-md:text-base max-w-md mx-auto"
            style={{ color: "var(--text-color-secondary)" }}
          >
            Oops! The page you&apos;re looking for seems to have wandered off
            into the digital void.
          </p>
        </div>

        {/* Action buttons */}
        <div
          className="flex flex-wrap gap-4 justify-center mt-10"
          style={{ animation: "slide-up-delayed 0.8s ease-out 0.2s backwards" }}
        >
          <Link
            href="/"
            className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ backgroundColor: "var(--orange-text)" }}
          >
            <span className="relative z-10">Go Home</span>
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{
              color: "var(--text-color)",
              borderColor: "var(--border-color)",
              backgroundColor: "var(--custom-bg-2)",
            }}
          >
            Go Back
          </button>
        </div>

        {/* Helpful links */}
        <div
          className="mt-12 pt-8 border-t"
          style={{
            borderColor: "var(--border-color)",
            animation: "fade-in-slow 1.2s ease-out 0.4s backwards",
          }}
        >
          <p className="text-sm mb-4" style={{ color: "var(--gray-text)" }}>
            Maybe you were looking for:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { href: "/", label: "Home" },
              { href: "/projects", label: "Projects" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{
                  color: "var(--orange-text)",
                  backgroundColor: "var(--contact-card-bg)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
