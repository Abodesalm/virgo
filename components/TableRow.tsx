"use client";
import { useRouter } from "next/navigation";
export default function TableRow({
  id,
  fullName,
  age,
  address,
  jopTitle,
  salary,
  thisAbsences,
}) {
  const router = useRouter();
  const navigate = (href) => {
    router.push(href);
  };
  return (
    <tr
      onClick={() => {
        navigate(`/emploees/${id}`);
      }}
      className="tableRow"
    >
      <td>{fullName}</td>
      <td>{age}</td>
      <td>{address}</td>
      <td>{jopTitle}</td>
      <td>{salary} $</td>
      <td>{thisAbsences.length}</td>
    </tr>
  );
}
