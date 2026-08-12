import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    Icon: Github,
    href: "https://github.com/Merozsherif",
    label: "Visit my GitHub",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/marwan-sherif-518601252",
    label: "Visit my LinkedIn",
  },
  {
    Icon: Mail,
    href: "mailto:Marwansher3@gmail.com",
    label: "Email me",
  },
];

const quickLinks = [
  [
    { to: "/home", label: "Home" },
    { to: "/skills", label: "Skills" },
  ],
  [
    { to: "/projects", label: "Projects" },
    { to: "/project-details/x-care-healthcare-platform", label: "X-Care" },
  ],
  [
    { to: "/contact", label: "Contact" },
    { to: "/about", label: "About" },
  ],
];

const linksClasses =
  "rounded-[0.625rem] bg-(--gray-bg) p-2 text-[var(--nav-links-text)] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-orange-500 hover:text-white focus:outline-none focus:scale-110 focus:bg-orange-500 focus:text-white";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer
      className="px-20 py-12 mt-20 bg-(--custom-bg) border-t border-(--border-color) delay"
      role="contentinfo"
    >
      {/* Main content */}
      <div className="grid grid-cols-3 gap-8 max-[860px]:grid-cols-1">
        <div className="max-[860px]:flex max-[860px]:flex-col max-[860px]:items-center">
          {/* Footer text */}
          <h3 className="text-(--text-color) mb-4">
            <span>Marwan </span>
            <span className="text-(--orange-text)">Sherif</span>
          </h3>

          <p className="text-(--gray-text) text-sm max-w-85 max-[860px]:text-center">
            Full-Stack Software Developer building complete web, mobile, and
            backend solutions that help businesses launch and grow.
          </p>
        </div>

        {/* Footer nav links */}
        <nav
          className="flex flex-col items-center"
          aria-label="Footer Navigation"
        >
          <h3 className="text-(--text-color) mb-4">Quick Links</h3>

          <div className="grid grid-cols-3 w-full max-[430px]:grid-cols-1">
            {quickLinks.map((column, colIdx) => (
              <div
                key={colIdx}
                className="flex flex-col items-center gap-2 text-sm text-(--gray-text) max-[430px]:mb-2"
              >
                {column.map((link) => (
                  <Link
                    key={link.to}
                    href={link.to}
                    className="hover:text-(--orange-text) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--orange-text)"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </nav>

        {/* Footer external links */}
        <div className="flex flex-col items-end max-[860px]:items-center">
          <div className="flex flex-col items-center">
            <h3 className="text-(--text-color) mb-4">Connect</h3>

            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className={linksClasses}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t border-(--border-color) my-8" />

      {/* Credits */}
      <p className="text-(--gray-text) text-sm text-center mb-2">
        Built by Marwan Sherif
      </p>

      {/* Rights */}
      <p className="text-[#6A7282] text-sm text-center">
        © {currentYear} All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
