import "./listingTable.css";
import ListingTableRow from "./ListingTableData";

const ListingTable = (props) => {
  return (
    <div className="table">
      <table className="table-container">
        <thead className="table-header">
          <tr>
            <th scope="col">{props.serial}</th>
            <th scope="col">{props.col1}</th>
            <th scope="col">{props.col2}</th>
            <th scope="col">{props.col3}</th>
            <th scope="col">{props.col4}</th>
          </tr>
        </thead>
        <ListingTableRow />
      </table>
    </div>
  );
};

export default ListingTable;
