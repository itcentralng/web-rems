import "./listingTable.css";
import ListingTableRow from "./ListingTableData";

const ListingTable = (props) => {
  return (
    <div className="tenants-table">
      <div className="custom-table__wrap">
        <div className="custom-table__thead">
          <div className="row-item">S/N</div>
          <div className="row-item">Property</div>
          <div className="row-item">Tenant</div>
          <div className="row-item">Due date</div>
          <div className="row-item">Amount</div>
          <div className="row-item">Status</div>
          <div className="row-item"></div>
        </div>
        <ListingTableRow searchTerm={props.searchTerm} />
      </div>
    </div>
  );
};

export default ListingTable;

//  <table className="">
//   <thead className="">
//     <tr>
//       <th scope="col">{props.serial}</th>
//       <th scope="col">{props.col1}</th>
//       <th scope="col">{props.col2}</th>
//       <th scope="col">{props.col3}</th>
//       <th scope="col">{props.col4}</th>
//       <th scope="col">{props.col5}</th>
//       <th scope="col">{props.col6}</th>
//     </tr>
//   </thead>
// </table>
