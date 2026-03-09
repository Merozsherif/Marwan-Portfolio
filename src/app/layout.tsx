import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import NavBar from "./_components/NavBar";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Marwan Sherif| Front End Developer",
    template: "%s | Marwan Sherif",
  },
  description:
    "Front-end developer specializing in React, TypeScript, and modern web technologies. Explore my portfolio of interactive web applications and projects.",
  keywords: [
    "Marwan Sherif",
    "Front End Developer",
    "React Developer",
    "TypeScript",
    "Web Developer",
    "Portfolio",
    "Framer Motion",
    "Tailwind CSS",
    "Next.js",
    "JavaScript",
    "UI/UX",
    "Web Applications",
  ],
  authors: [{ name: "Marwan Sherif" }],
  creator: "Marwan Sherif",
  publisher: "Marwan Sherif",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
    other: {
      rel: "icon",
      url: "/favicon.svg",
    },
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://marwan-portfolio-ochre.vercel.app/",
    languages: {
      "en-US": "https://marwan-portfolio-ochre.vercel.app/",
    },
  },
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marwan-portfolio-ochre.vercel.app/",
    title: "Marwan Sherif| Front End Developer",
    description:
      "Front-end developer specializing in Next.js, React, TypeScript, and modern web technologies. Explore my portfolio of interactive web applications and projects.",
    siteName: "Marwan SherifPortfolio",
    images: [
      {
        url: "https://marwan-portfolio-ochre.vercel.app/myImg.png",
        width: 1200,
        height: 630,
        alt: "Marwan Sherif- Front End Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marwan Sherif| Front End Developer",
    description:
      "Front-end developer specializing in React, TypeScript, and modern web technologies. Explore my portfolio of interactive web applications and projects.",
    images: ["https://marwan-portfolio-ochre.vercel.app/myImg.png"],
  },
  other: {
    "msapplication-TileColor": "#00b4cc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Marwan Sherif",
    jobTitle: "Front End Developer",
    url: "https://marwan-portfolio-ochre.vercel.app/",
    image: "https://marwan-portfolio-ochre.vercel.app/myImg.png",
    sameAs: [
      "https://github.com/Merozsherif",
      "https://www.linkedin.com/in/marwan-sherif-518601252",
    ],
    knowsAbout: [
      "React",
      "TypeScript",
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "JavaScript",
      "Web Development",
      "Front-end Development",
      "UI/UX Design",
    ],
    description:
      "Front-end developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    alumniOf: {
      "@type": "Organization",
      name: "University of Baghdad, Iraq",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Al Diwaniyah",
      addressRegion: "Al-Qadisiyah",
      addressCountry: "IQ",
    },
  };

  // WebSite Schema for search
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Marwan SherifPortfolio",
    url: "https://marwan-portfolio-ochre.vercel.app/",
    description:
      "Front-end developer portfolio showcasing React and TypeScript projects",
    author: {
      "@type": "Person",
      name: "Marwan Sherif",
    },
    inLanguage: "en-US",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme Script - Prevents flash of unstyled content */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
  
              } catch {}
            `,
          }}
        />

        {/* JSON-LD Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* JSON-LD Structured Data - WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <NavBar />
        <main className="mt-12 px-20 max-xl:px-8 max-md:px-6">{children}</main>
        <Footer />

        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            // Default options for all toasts
            duration: 4000,
            style: {
              background: "#fff",
              color: "#363636",
              padding: "16px 20px",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: "500",
              boxShadow:
                "0 10px 25px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(0, 0, 0, 0.1)",
              maxWidth: "420px",
              border: "1px solid rgba(0, 0, 0, 0.05)",
            },

            // Success toast styles
            success: {
              duration: 4000,
              style: {
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                color: "#ffffff",
                padding: "18px 24px",
                borderRadius: "12px",
                fontSize: "15px",
                fontWeight: "500",
                boxShadow:
                  "0 10px 25px rgba(16, 185, 129, 0.3), 0 4px 10px rgba(16, 185, 129, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              },
              iconTheme: {
                primary: "#ffffff",
                secondary: "#10b981",
              },
            },

            // Error toast styles
            error: {
              duration: 5000,
              style: {
                background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                color: "#ffffff",
                padding: "18px 24px",
                borderRadius: "12px",
                fontSize: "15px",
                fontWeight: "500",
                boxShadow:
                  "0 10px 25px rgba(239, 68, 68, 0.3), 0 4px 10px rgba(239, 68, 68, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              },
              iconTheme: {
                primary: "#ffffff",
                secondary: "#ef4444",
              },
            },
          }}
        />
      </body>
    </html>
  );
}

// const theme = localStorage.getItem('theme') ||
//     (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
//   document.documentElement.classList.toggle('dark', theme === 'dark');
