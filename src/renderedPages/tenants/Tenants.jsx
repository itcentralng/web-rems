import { useEffect, useContext, useState } from "react";
import classes from "./tenants.module.css";
import RightNav from "../../component/rightNav/RightNav";
import { Link } from "react-router-dom";
// import tenantsData from "./tenantsData";
import { useNavigate } from "react-router-dom";
// import RemsTenantContext from "../../context/tenantContext/TenantContext";
import ListingTable from "./ListingTable";


const Tenants = () => {
  
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  return (
    <div className="listing">
      <div className="top-header">
        <span></span>
        <RightNav
          input
          placeholder="Search Tenants"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          button
          icon
          buttonText="Add Tenant"
          onClick={() => navigate("/tenants/AddTenant")}
        />
      </div>
      <ListingTable searchTerm={searchTerm} />
    </div>
  );
};

export default Tenants;
