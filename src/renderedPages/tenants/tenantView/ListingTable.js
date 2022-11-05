import "./listingTable.css";
import ListingTableRow from "./ListingTableData";

const ListingTable = (props) => {
  return (
    <div className="">
      <table className="">
        <thead className="">
          <tr>
            <th scope="col">{props.serial}</th>
            <th scope="col">{props.col1}</th>
            <th scope="col">{props.col2}</th>
            <th scope="col">{props.col3}</th>
          </tr>
        </thead>
        <ListingTableRow tenant_id={props.tenant_id} />
      </table>
    </div>
  );
};

export default ListingTable;
