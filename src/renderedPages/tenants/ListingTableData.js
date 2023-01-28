import "./listingTable.css";
import DummyData from "../../DashboardData2";
import { useGetUnitsQuery } from "../properties/propertyApiSlice";
import { property } from "lodash";
import { useNavigate } from "react-router-dom";

const ListingTableRow = (props) => {
  const { data: units, isLoading: unitsLoading } = useGetUnitsQuery();
  const navigate = useNavigate();
  const findStatus = (unit) => {
    let next_payment_date = new Date(unit.next_payment_date);
    let today = new Date();
    if (next_payment_date - today < 0) {
      return "Overdue";
    } else if (next_payment_date - today < 604800000) {
      return "Due";
    }
    return "Paid";
  };
  const showDate = (date) => {
    let newDate = new Date();
    if (date) {
      newDate = new Date(date);
    }
    return newDate.toDateString();
  };

  return unitsLoading ? (
    <h1 className="title">Loading all tenants....</h1>
  ) : (
    <tbody className="tbody">
      {units?.filter((unit)=>{
        console.log(props.searchTerm);
        return (props.searchTerm === "") || unit?.tenant?.name?.toLowerCase().includes(props?.searchTerm?.toLowerCase()) || unit?.name?.toLowerCase().includes(props?.searchTerm?.toLowerCase()) || findStatus(unit)?.toLowerCase()===props?.searchTerm?.toLowerCase()
      }).map(
        (unit, index) =>
          (
            <tr key={unit.id} className="tr--container">
                <td >{index + 1}</td>

                <td >{unit.name}</td>

                <td >{unit.tenant.name}</td>

                <td >
                  {showDate(unit.next_payment_date)}
                </td>

                <td >{unit.annual_fee}</td>

                <td
                  className={`${
                    findStatus(unit) == "Due" ? `` : `status`
                  }`}
                  style={
                    findStatus(unit) == "Due"
                      ? { color: "blue" }
                      : findStatus(unit) == "Overdue"
                      ? { color: "red" }
                      : {}
                  }
                  // className={`row-item ${
                  //   data.status.toLocaleLowerCase() === "paid" ? "paid" : "due"
                  // }`}
                >
                  {findStatus(unit)}
                </td>
                <td
                  className="view"
                  onClick={() => {
                    navigate("/tenants/viewTenant?id=" + unit.tenant.id);
                  }}
                >
                  <button>View</button>
                </td>
              </tr>
          )
      )}
    </tbody>
  );
};

export default ListingTableRow;

{
  /* <tr key={unit.id} className="tr--container">
  <td data-label="S/N">{index + 1}</td>
  <td data-label="Tenant">{unit.tenant.name}</td>
  <td data-label="Unit">{unit.name}</td>
  <td data-label="Due Date">{showDate(unit.next_payment_date)}</td>
  <td data-label="Amount" className="table--amount ">
    {unit.annual_fee}
  </td>
  <td
    data-label="Status"
    className={findStatus(unit) == "Due" ? `` : `status`}
    style={
      findStatus(unit) == "Due"
        ? { color: "blue" }
        : findStatus(unit) == "Overdue"
        ? { color: "red" }
        : {}
    }
  >
    {findStatus(unit)}
  </td>
  <td data-label="View" className={`view`}>
    <button
      className="view--button"
      onClick={() => {
        navigate("/tenants/viewTenant?id=" + unit.tenant.id);
      }}
    >
      View
    </button>
  </td>
</tr>; */
}
