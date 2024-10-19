import { BiCalendarEvent } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { FaHouseChimney, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbHierarchy2 } from "react-icons/tb";

export default function Icon({ i, className = "" }) {
  if (i === "salaries") return "$";
  else if (i === "emploees") return <BsPeople className={className} />;
  else if (i === "birth") return <BiCalendarEvent className={className} />;
  else if (i === "address") return <FaHouseChimney className={className} />;
  else if (i === "phone") return <FaPhone className={className} />;
  else if (i === "email") return <MdEmail className={className} />;
  else if (i === "departments") return <TbHierarchy2 className={className} />;
}
