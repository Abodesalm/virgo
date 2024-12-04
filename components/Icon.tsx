import { BiCalendarEvent, BiCrop } from "react-icons/bi";
import { BsPeople, BsPeopleFill } from "react-icons/bs";
import { FaHouseChimney, FaPhone } from "react-icons/fa6";
import { MdArrowDropDown, MdEmail } from "react-icons/md";
import { TbHierarchy2 } from "react-icons/tb";
import { BiStats } from "react-icons/bi";
import { RiSettings5Fill } from "react-icons/ri";
import { PiSignOut } from "react-icons/pi";
import { IoDocuments } from "react-icons/io5";

export default function Icon({ i, className = "" }) {
  if (i === "salaries") return "$";
  else if (i === "emploees") return <BsPeople className={className} />;
  else if (i === "emploees-fill") return <BsPeopleFill className={className} />;
  else if (i === "birth") return <BiCalendarEvent className={className} />;
  else if (i === "address") return <FaHouseChimney className={className} />;
  else if (i === "phone") return <FaPhone className={className} />;
  else if (i === "email") return <MdEmail className={className} />;
  else if (i === "departments") return <TbHierarchy2 className={className} />;
  else if (i === "stats") return <BiStats className={className} />;
  else if (i === "signout") return <PiSignOut className={className} />;
  else if (i === "downArrow") return <MdArrowDropDown className={className} />;
  else if (i === "processor") return <BiCrop className={className} />;
  else if (i === "docs") return <IoDocuments className={className} />;
  else if (i === "settingsFill")
    return <RiSettings5Fill className={className} />;
}
