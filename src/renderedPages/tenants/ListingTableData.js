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
  const termFound = (unit) => {
    if (props.searchTerm === "") {
      return true;
    }
    if (
      unit.tenant.name.toLowerCase().includes(props.searchTerm.toLowerCase())
    ) {
      return true;
    }
    if (unit.name.toLowerCase().includes(props.searchTerm.toLowerCase())) {
      return true;
    }
    if (
      findStatus(unit).toLowerCase().includes(props.searchTerm.toLowerCase())
    ) {
      return true;
    }
    return false;
  };

  return unitsLoading ? (
    <h1 className="title">Loading all tenants....</h1>
  ) : (
    <div>
      {units?.map(
        (unit, index) =>
          termFound(unit) && (
            <div key={unit.id} className="custom-table__row">
              <div>
                <div className="row-item">{index + 1}</div>

                <div className="row-item">{unit.tenant.name}</div>

                <div className="row-item">{unit.name}</div>

                <div className="row-item">
                  {showDate(unit.next_payment_date)}
                </div>

                <div className="row-item">{unit.annual_fee}</div>

                <div
                  className={`row-item ${
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
                </div>
                <div
                  className="row-item view"
                  onClick={() => {
                    navigate("/tenants/viewTenant?id=" + unit.tenant.id);
                  }}
                >
                  View
                </div>
              </div>
            </div>
          )
      )}
    </div>
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
