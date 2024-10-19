import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-[14%] bg-bglight/50 dark:bg-middark px-8 py-4 flex flex-col items-start gap-4 sticky top-4 ">
      <Link className="btn-ui w-full" href={"/"}>
        Statistics
      </Link>
      <Link className="btn-ui w-full" href={"/emploees"}>
        Emploees
      </Link>
      <Link className="btn-ui w-full" href={"/departments"}>
        Departments
      </Link>
    </div>
  );
}
