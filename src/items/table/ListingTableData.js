import "./tr.css";
import DummyData from "../../DashboardData2";
// import { Fragment } from "react";
const ListingTableRow = () => {
  return (
    <tbody className="body">
      {DummyData.map((data) => (
        <tr key={data._id} className="tr--container">
          <td data-label="S/N">{data._id}</td>
          <td data-label="Property">{data.property_name}</td>
          <td data-label="Occupant">{data.state}</td>
          <td data-label="Due date">{data.units}</td>
          <td data-label="Amount" className={`status`}>
            {data.status}
          </td>
          <td data-label="Status" className="table--amount ">
            {data.rent}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ListingTableRow;
