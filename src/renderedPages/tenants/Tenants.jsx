import { useEffect, useContext } from "react";
import classes from "./tenants.module.css";
import RightNav from "../../component/rightNav/RightNav";
import { Link } from "react-router-dom";
// import tenantsData from "./tenantsData";
import { useNavigate } from "react-router-dom";
// import RemsTenantContext from "../../context/tenantContext/TenantContext";
import { useGetTenantsQuery } from "./tenantApiSlice";


const Tenants = () => {
  const { data: tenants, isLoading: tenantsLoading } = useGetTenantsQuery();
  // const { getTenant, fetchTenant, httpError } = useContext(RemsTenantContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetchTenant();
  // }, []);
  // console.log(getTenant);
  return (
    tenantsLoading? <h1 className='title'>Loading all tenants....</h1> :
    <div>
      <div className='top-header'>
        <span></span>
        <RightNav
          input
          placeholder='Search Tenants'
          button
          icon
          buttonText='Add Tenant'
          onClick={() => navigate("/tenants/addTenant")}
        />
      </div>
      {/* {getTenant.length === 0 && (
        <p className={classes.emptyList}>No Tenant Added</p>
      )} */}
      {/* {httpError && <p className={classes.emptyList}></p>} */}

      <div className={classes.cardContainer}>
        {tenants?.map((tenant) => (
          <div
            className={classes.cards}
            onClick={() => navigate("/tenants/viewTenant?id=" + tenant?.id)}
            key={tenant?.id}>
            <div className={classes.imgContainer}>
              <img src={tenant?.image} alt={tenant?.name} />
            </div>
            <div>
              <h5 className={classes.bold}>{tenant?.name}</h5>
              <h5 style={{ fontWeight: "400" }}>{tenant?.phone}</h5>
              <h5 className={classes.address}>{tenant?.home_address}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tenants;
