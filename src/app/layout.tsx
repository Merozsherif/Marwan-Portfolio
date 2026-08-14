import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import NavBar from "./_components/NavBar";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Marwan Sherif| Full-Stack Software Developer",
    template: "%s | Marwan Sherif",
  },
  description:
    "Full-stack software developer specializing in .NET, C#, Angular, React and Next.js. I build complete web, mobile, and backend software solutions for businesses. Explore my portfolio of projects and case studies.",
  keywords: [
    "Marwan Sherif",
    "Full-Stack Developer",
    "Software Developer",
    ".NET Developer",
    "C# Developer",
    "ASP.NET Core",
    "Mobile App Developer",
    "Angular Developer",
    "React Developer",
    "TypeScript",
    "Web Developer",
    "Portfolio",
    "Next.js",
    "JavaScript",
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
    title: "Marwan Sherif| Full-Stack Software Developer",
    description:
      "Full-stack software developer specializing in .NET, C#, Angular, React and Next.js. I build complete web, mobile, and backend software solutions for businesses.",
    siteName: "Marwan SherifPortfolio",
    images: [
      {
        url: "https://marwan-portfolio-ochre.vercel.app/myImg.png",
        width: 1200,
        height: 630,
        alt: "Marwan Sherif - Full-Stack Software Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marwan Sherif| Full-Stack Software Developer",
    description:
      "Full-stack software developer specializing in .NET, C#, Angular, React and Next.js. I build complete web, mobile, and backend software solutions for businesses.",
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
    jobTitle: "Full-Stack Software Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "EG",
    },
    url: "https://marwan-portfolio-ochre.vercel.app/",
    image: "https://marwan-portfolio-ochre.vercel.app/myImg.png",
    sameAs: [
      "https://github.com/Merozsherif",
      "https://www.linkedin.com/in/marwan-sherif-518601252",
    ],
    knowsAbout: [
      "C#",
      ".NET / ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "REST APIs",
      "JWT Authentication",
      "Angular",
      "React",
      "TypeScript",
      "Next.js",
      "Mobile App Development",
      "JavaScript",
      "Software Development",
      "Full-Stack Development",
    ],
    description:
      "Full-stack software developer specializing in .NET, C#, Angular, React, and Next.js, building complete web, mobile, and backend software solutions.",
  };

  // WebSite Schema for search
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Marwan SherifPortfolio",
    url: "https://marwan-portfolio-ochre.vercel.app/",
    description:
      "Full-stack software developer portfolio showcasing .NET, C#, Angular, React, and Next.js projects",
    author: {
      "@type": "Person",
      name: "Marwan Sherif",
    },
    inLanguage: "en-US",
  };

  return (
   <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Theme Script - Prevents flash of unstyled content */}
  <script
  dangerouslySetInnerHTML={{
    __html: `
      try {
        const theme = localStorage.getItem("theme") || "dark";
        document.documentElement.classList.toggle("dark", theme === "dark");
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
