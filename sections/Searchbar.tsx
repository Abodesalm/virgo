import Button from "@/components/Button";
import { BsTable } from "react-icons/bs";
import { LuRows } from "react-icons/lu";

export default function Searchbar({ state, setState }) {
  return (
    <div className="flex flex-row gap-4 items-center">
      <input
        type="search"
        className="input w-[75%] px-[1.5rem_!important]"
        placeholder="Search..."
      />
      <Button
        className={`p-[0.5rem_!important]  ${
          state ? "" : "btn-ui-radio-active"
        }`}
        action={() => setState(false)}
        style="ui-radio"
      >
        <BsTable />
      </Button>
      <Button
        className={`p-[0.5rem_!important]  ${
          state ? "btn-ui-radio-active" : ""
        }`}
        action={() => setState(true)}
        style="ui-radio"
      >
        <LuRows />
      </Button>
    </div>
  );
}
