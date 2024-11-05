import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { fakeData } from "@/public/data";
import Image from "next/image";

export default function Emploee({ params }) {
  const { id } = params;
  const data = fakeData[id - 1];
  const {
    fullName,
    age,
    address,
    birthDate,
    phoneNumber,
    photo,
    email,
    empDuration,
    department,
    jopTitle,
    salary,
    notes,
    absences,
    thisAbsences,
    joinDate,
    cv,
  } = data;
  const clas = "flex flex-row gap-3 items-center text-size-5";
  return (
    <div className="min-h-[80vh] flex flex-row">
      <div className="flex flex-col w-1/2">
        <h1 className="text-size-2">{fullName}</h1>

        <div className="mt-8 flex flex-col gap-2">
          <div className={`${clas}`}>
            <Icon i={"birth"} />
            <p>{String(birthDate).split(",").join(" / ")}</p>
            <p>({age} years)</p>
          </div>
          <div className={`${clas}`}>
            <Icon i={"address"} />
            <p>{address}</p>
          </div>
          <div className={`${clas}`}>
            <Icon i={"phone"} />
            <p>{phoneNumber}</p>
          </div>
          <div className={`${clas}`}>
            <Icon i={"email"} />
            <p>{email}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <div className={`info`}>
            <p className="first-p">department</p>
            <p className="second-p">{department}</p>
          </div>
          <div className={`info`}>
            <p className="first-p">Jop Title</p>
            <p className="second-p">{jopTitle}</p>
          </div>
          <div className={`info`}>
            <p className="first-p">salary</p>
            <p className="second-p text-money font-bold">{salary}$</p>
          </div>
          <div className={`info`}>
            <p className="first-p">join date</p>
            <p className="second-p">
              {String(joinDate).split(",").join(" / ")} (
              {Math.abs(empDuration / 365)} years)
            </p>
          </div>
        </div>

        <div className="bg-bglight dark:bg-middark rounded-[10px] w-fit h-fit px-4 py-2 mt-8 text-size-6">
          {notes}
        </div>
      </div>
      <div className="flex flex-col w-1/2 items-center gap-32">
        <div className="flex items-center">
          <Image
            src={photo}
            alt="emploee photo"
            width={240}
            height={240}
            className="w-[240px] h-[240px] rounded-full bg-lightdark"
          />
        </div>
        <div>
          <Button link={true} style="prime" external={true} url={cv}>
            <>Download CV</>
          </Button>
        </div>
      </div>
    </div>
  );
}
