import TableRow from "@/components/TableRow";
import { fakeData } from "@/public/data";

export default function EmpTable() {
  return (
    <table className="empTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>jop title</th>
          <th>salary</th>
          <th>Absences</th>
        </tr>
      </thead>
      <tbody>
        {fakeData.map((el) => {
          return (
            <TableRow
              key={+el.id}
              id={el.id}
              fullName={el.fullName}
              age={el.age}
              address={el.address}
              thisAbsences={el.thisAbsences}
              salary={el.salary}
              jopTitle={el.jopTitle}
            />
          );
        })}
      </tbody>
    </table>
  );
}
