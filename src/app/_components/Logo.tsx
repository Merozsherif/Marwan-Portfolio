import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/home"
      className="text-2xl text-(--text-color) space-x-2 w-fit md:space-x-1"
    >
      <span className="md:hidden lg:inline max-[400px]:hidden">Marwan</span>
      <span className="md:inline lg:hidden max-md:hidden max-[400px]:inline!">
        M
      </span>
      <span className="text-(--orange-text)">
        <span className="md:hidden lg:inline max-[400px]:hidden">Sherif</span>
        <span className="md:inline lg:hidden max-md:hidden max-[400px]:inline!">
          S
        </span>
      </span>
    </Link>
  );
}

export default Logo;
