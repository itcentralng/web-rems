import "./table.css";
import TableRow from "./TenancyTableData";

const TenancyTable = (props) => {
  return (
    <div className="">
      <table className="">
        <thead className="">
          <tr>
            <th scope="col">{props.serial}</th>
            <th scope="col">{props.col1}</th>
            <th scope="col">{props.col2}</th>
            <th scope="col">{props.col3}</th>
            <th scope="col">{props.col4}</th>
            <th scope="col">{props.col5}</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <TableRow />
      </table>
      <span className="more">See More</span>
    </div>
  );
};

export default TenancyTable;
