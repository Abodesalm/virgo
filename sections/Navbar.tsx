import Signout from "@/components/Signout";
import Langlist from "@/components/Langlist";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="text-size-4 font-medium">Virgo System</div>
      <div className="flex gap-10 sm:gap-6 items-center">
        <Langlist />
        <ThemeSwitch />
        <Signout />
      </div>
    </nav>
  );
}
