import Icon from "@/components/Icon";
import Link from "next/link";

const options = [
  { path: "/", icon: "stats", text: "something" },
  { path: "/processor", icon: "processor", text: "processor" },
  { path: "/documents", icon: "docs", text: "documents" },
  { path: "/lorem-ipsum", icon: "departments", text: "lorem ipsum" },
  {
    path: "/settings",
    icon: "settingsFill",
    text: "settings",
    className: "mt-12",
  },
];

export default function Sidebar() {
  return (
    <div className="w-[14%] bg-light/50 dark:bg-middark px-6 py-4 flex flex-col items-start gap-4 sticky top-4 ">
      {options.map((el) => {
        return (
          <Option
            path={el.path}
            icon={<Icon i={el.icon} className="text-[18px]" />}
            text={el.text}
            className={el.className}
            key={el.text}
          />
        );
      })}
    </div>
  );
}

const Option = ({ path, icon, text, className = "" }) => {
  return (
    <Link
      href={path}
      className={`btn-ui w-full capitalize flex flex-row items-center gap-2  ${className}`}
    >
      {icon}
      <p>{text}</p>
    </Link>
  );
};
