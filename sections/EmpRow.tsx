import TableRow from "@/components/TableRow";
import { fakeData } from "@/public/data";
import Image from "next/image";
import Link from "next/link";

export default function EmpRow() {
  return (
    <div className="flex flex-col mt-4 gap-2">
      {fakeData.map((el) => {
        return (
          <Row
            key={+el.id}
            id={el.id}
            fullName={el.fullName}
            age={el.age}
            address={el.address}
            department={el.department}
            salary={el.salary}
            jopTitle={el.jopTitle}
            photo={el.photo}
          />
        );
      })}
    </div>
  );
}

const Row = ({
  id,
  fullName,
  age,
  address,
  department,
  salary,
  photo,
  jopTitle,
}) => {
  return (
    <Link
      href={`/emploees/${id}`}
      className={
        "btn-ui h-[86px] bg-bglight/40 dark:bg-middark flex flex-row gap-8 "
      }
    >
      <div className="flex items-center">
        <Image
          src={photo}
          alt="emploee photo"
          width={70}
          height={70}
          className="w-[70px] h-[70px] rounded-full bg-lightdark"
        />
      </div>
      <div>
        <h3 className="text-size-5">{fullName}</h3>
        <p className="text-size-6 font-normal dark:text-light/70">
          <span>{address}</span> <span className="ms-6">{age} Years</span>
        </p>
        <p className="text-size-6 font-normal dark:text-light/70">
          <span>{department}</span> <span className="ms-6">{jopTitle}</span>
        </p>
        <p className="text-size-6 font-normal dark:text-light/70">{salary} $</p>
      </div>
    </Link>
  );
};
