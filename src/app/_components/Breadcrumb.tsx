import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BreadcrumbProps {
  text: string;
  to: string;
  ariaLabel: string;
}

function Breadcrumb({ text, to, ariaLabel }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <Link
        href={to}
        aria-label={ariaLabel}
        className="flex items-center gap-2 w-fit text-(--orange-text) hover:text-[#ff8c42] cursor-pointer mb-8"
      >
        <span>
          <ArrowLeft size={20} aria-hidden="true" />
        </span>
        <span>{text}</span>
      </Link>
    </nav>
  );
}

export default Breadcrumb;
