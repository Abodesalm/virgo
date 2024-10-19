"use client";

import EmpRow from "@/sections/EmpRow";
import EmpTable from "@/sections/EmpTable";
import Form from "@/sections/Form";
import Searchbar from "@/sections/Searchbar";
import { useEffect, useState } from "react";

export default function Emploees() {
  const [button, setButton] = useState<boolean>();
  const [element, setElement] = useState(<></>);

  useEffect(() => {
    button
      ? localStorage.setItem("empStyle", "rows")
      : localStorage.removeItem("empStyle");
    const local = localStorage.getItem("empStyle");
    local === "rows" ? setElement(<EmpRow />) : setElement(<EmpTable />);
  }, [button]);
  return (
    <div className="min-h-[80vh]">
      <Searchbar state={button} setState={setButton} />
      {element}
      <div className="mt-8">
        <h2 className="text-size-3 mb-2">Control</h2>
        <Form />
      </div>
    </div>
  );
}
