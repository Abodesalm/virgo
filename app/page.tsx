import StatDiv from "@/components/StatDiv";
import { fakeStats, comDetails } from "@/public/data";

export default function Home({}) {
  return (
    <div className="min-h-[80vh]">
      <div className="flex flex-row gap-8">
        <StatDiv
          title={"salaries"}
          value={fakeStats.salaries}
          color="text-money"
        />
        <StatDiv
          title={"emploees"}
          value={fakeStats.emploees}
          color="text-prime"
        />
        <StatDiv
          title={"departments"}
          value={fakeStats.departments}
          color="text-prime"
        />
      </div>
      <div className=" absolute bottom-[3.5rem] before-rabon">
        <h2 className="text-size-4">{comDetails.name}</h2>
        <p>Address : {comDetails.mainAddress}</p>
        <p>Owner : {comDetails.owner}</p>
      </div>
    </div>
  );
}
