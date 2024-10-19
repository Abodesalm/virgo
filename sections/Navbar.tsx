import ThemeSwitch from "@/components/ThemeSwitch";
import Link from "next/link";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="text-size-4 font-medium">HR System</div>
      <div className="flex gap-10 sm:gap-6 items-center">
        <ThemeSwitch />
      </div>
    </nav>
  );
}
