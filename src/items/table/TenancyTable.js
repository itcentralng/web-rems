import { useState } from "react";
import "./table.css";
import TableRow from "./TenancyTableData";

const TenancyTable = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [doPrint, setDoPrint] = useState(false);
  return (
    <div className="table">
      <div className="input-container" style={{ width: "300px" }}>
        <input type="text" placeholder="Filter result" value={searchTerm} style={{ width: "100%", height:"5rem" }} onChange={(e)=>{setSearchTerm(e.target.value)}} />
        <button style={{cursor:"pointer", borderRadius:10, margin:10, backgroundColor: "#022873", color: "white", padding: "10px 15px"}} onClick={()=>{setDoPrint(!doPrint)}}>Print</button>
      </div>

      <table className="table-container">
        <thead className="table-header">
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
        <TableRow searchTerm={searchTerm} doPrint={doPrint}/>
      </table>
      {/* <span className="more">See More</span> */}
    </div>
  );
};

export default TenancyTable;
