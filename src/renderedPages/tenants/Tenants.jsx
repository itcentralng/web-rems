import { useEffect, useContext } from "react";
import classes from "./tenants.module.css";
import RightNav from "../../component/rightNav/RightNav";
import { Link } from "react-router-dom";
// import tenantsData from "./tenantsData";
import { useNavigate } from "react-router-dom";
// import RemsTenantContext from "../../context/tenantContext/TenantContext";
import ListingTable from "./ListingTable";


const Tenants = () => {
  
  // const { getTenant, fetchTenant, httpError } = useContext(RemsTenantContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetchTenant();
  // }, []);
  // console.log(getTenant);
  return (
    <div className="listing">
      <div className="top-header">
        <span></span>
        <RightNav
          input
          placeholder="Search Tenants"
          button
          icon
          buttonText="Add Tenant"
          onClick={() => navigate("/tenants/AddTenant")}
        />
      </div>
      <ListingTable
        serial="S/N"
        col1="Tenant"
        col2="Unit"
        col3="Due Date"
        col4="Amount"
        col5="Status"
        col6="View"
      />
    </div>
  );
};

export default Tenants;
