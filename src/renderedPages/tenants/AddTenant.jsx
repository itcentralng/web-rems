import React, { useState, useEffect } from "react";
import classes from "./addTenant.module.css";
import RightNav from "../../component/rightNav/RightNav";
import { useNavigate } from "react-router-dom";
// import RemsTenantContext from "../../context/tenantContext/TenantContext";
// import { useContext } from "react";
import { useCreateTenantMutation } from "./tenantApiSlice";
// Checking form input fields...
const isEmpty = (value) => value.trim() === "";
const isNumber = (value) => value.trim().length >= 10;
const isEmail = (value) => value.includes("@");

const AddTenant = () => {
  const [tenant, setTenant] = useState({ name: "", phone: "" });
  const [createTenant, { isLoading: tenantLoading }] =
    useCreateTenantMutation();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    createTenant(tenant);
    setTenant({ name: "", phone: "" });
    navigate("/tenants");
  };

  return tenantLoading ? (
    <h1 className="title">Adding Tenant....</h1>
  ) : (
    <div className={classes.tenantStyle}>
      <div className="top-header">
        <RightNav
          button
          buttonText="Back"
          onClick={() => navigate("/tenants")}
        />
      </div>
      <form onSubmit={submitHandler} className={classes.form__control}>
        <div className={classes.inputs}>
          <div className={""}>
            <label htmlFor="name" className={classes.label}>
              Full name
            </label>
            <input
              className={classes.input}
              type="text"
              name="fullName"
              value={tenant.name}
              onChange={(e) => setTenant({ ...tenant, name: e.target.value })}
              placeholder="Enter Tenant Name"
            />
            {!isEmpty(tenant.name) && <p>Name field cannot be empty</p>}
          </div>
        </div>
        <div className={""}>
          <label htmlFor="number" className={classes.label}>
            Phone No
          </label>
          <input
            className={classes.input}
            type="tel"
            name="phoneNumber"
            value={`${tenant.phone}`}
            onChange={(e) => setTenant({ ...tenant, phone: e.target.value })}
            placeholder="Enter Tenant Phone Number"
          />
          {!isNumber(tenant.phone) && <p>Enter a valid phone number</p>}
        </div>
        <button className={classes.submit}>Add Tenant</button>
      </form>
    </div>
  );
};

export default AddTenant;
