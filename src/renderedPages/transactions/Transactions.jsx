import { useEffect, useContext, useState } from "react";
import classes from "./transactions.module.css";
import RightNav from "../../component/rightNav/RightNav";
import { Link } from "react-router-dom";
// import tenantsData from "./tenantsData";
import { useNavigate } from "react-router-dom";
// import RemsTenantContext from "../../context/tenantContext/TenantContext";
import ListingTable from "./ListingTable";


const Transactions = () => {
  
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  return (
    <div className="listing">
      <div className="top-header">
        <span></span>
        <RightNav
          input
          placeholder="Search Transactions"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          button
          buttonText="Print"
          onClick={() => window.print()}
        />
      </div>
      <ListingTable
        serial="S/N"
        col1="Tenant"
        col2="Unit"
        col3="Date"
        col4="Amount"
        col5="Type"
        col6="View"
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default Transactions;
