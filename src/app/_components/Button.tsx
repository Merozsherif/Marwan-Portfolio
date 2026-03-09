import Link from "next/link";

interface ButtonProps {
  variation: "orange" | "light" | "dark" | "gray" | "red";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  addedClasses?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  isLink?: boolean;
  isExternal?: boolean;
  to?: string;
  disabled?: boolean;
}

function Button({
  variation,
  onClick,
  addedClasses = "",
  children,
  isLink = false,
  isExternal = false,
  to = "/",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const styles =
    "flex items-center gap-2 rounded-[0.625rem] cursor-pointer transition-all duration-300  focus:outline-none focus-visible:ring-2 focus-visible:ring-(--orange-text)";

  const variations = {
    orange:
      "text-white bg-(--orange-text) hover:bg-orange-600 shadow-lg hover:shadow-orange-500/50 hover:scale-102",
    light:
      "text-(--orange-text) border-2 border-(--orange-text) hover:bg-orange-500 hover:text-white hover:scale-104",
    dark: "text-white bg-(--dark-btn-bg) hover:bg-gray-700 hover:scale-102",
    gray: "text-(--text-color-secondary) border border-(--border-color) bg-(--custom-bg) hover:bg-(--input-border)",
    red: "text-white bg-gradient-to-b from-red-600 to-red-500 hover:shadow-red-500/50 hover:shadow-2xl hover:scale-102 hover:from-red-500 hover:to-red-600 focus:outline-none focus:ring-4 focus:ring-red-400/50 focus:scale-105 active:scale-95",
  };

  if (isLink) {
    return (
      <Link
        href={to}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={`${styles} ${variations[variation]} ${addedClasses} disabled:opacity-65`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles} ${variations[variation]} ${addedClasses} disabled:opacity-65`}
    >
      {children}
    </button>
  );
}

export default Button;
