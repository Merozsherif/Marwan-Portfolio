import DarkModeAndBurgerIcon from "./DarkModeAndBurgerIcon";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function NavBar() {
  return (
    <header className="grid grid-cols-3 max-md:grid-cols-2 items-center border-b border-(--border-color) bg-(--text-color-2) shadow-lg backdrop-blur-lg px-8 max-md:px-6 sticky top-0 z-99 delay">
      <Logo />
      <NavLinks />
      <DarkModeAndBurgerIcon />
    </header>
  );
}

export default NavBar;
