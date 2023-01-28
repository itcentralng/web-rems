import React, { useState } from "react";
import "./popup.css";
import { useNavigate } from "react-router-dom";
import classes from "../../renderedPages/tenants/addTenantPopup.module.css";
import { useCreateTenantMutation } from "../../renderedPages/tenants/tenantApiSlice";

const Popup = ({ success, error, content, close }) => {
  const isEmpty = (value) => value.trim() === "";
const isNumber = (value) => value.trim().length >= 10;
const isEmail = (value) => value.includes("@");
  const [tenant, setTenant] = useState({ name: "", phone: "" });
  const [createTenant, { isLoading: tenantLoading }] =
    useCreateTenantMutation();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    createTenant(tenant);
    close();
  };
  return (
    <div className="popup-background">
      <div className="pop">
        <div className="popup-container">
        <span style={{color: 'red', fontSize:'2.5rem', cursor:'pointer', marginRight:40, marginTop:10, position:'absolute', right:0, top:0}} onClick={close}>x</span>
          {/* <span className="popup-icon">
            {success ? (
              <svg
                viewBox="0 0 406 406"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="203"
                  cy="203"
                  r="200"
                  stroke="#28E093"
                  strokeWidth="5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M93.6074 203L121.232 175.376L176.48 230.624L286.978 120.127L314.602 147.751L176.48 285.873L93.6074 203Z"
                  fill="#28E093"
                  stroke="#28E093"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <span className="popup-icon">
                {" "}
                <svg
                  viewBox="0 0 406 406"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="203"
                    cy="203"
                    r="200"
                    stroke="#730202"
                    strokeWidth="5"
                  />
                  <path
                    d="M247.241 146.51L258.737 158.006L157.205 259.539L145.708 248.043L247.241 146.51ZM154.865 144.271L262.705 252.112L250.496 264.32L142.656 156.48L154.865 144.271Z"
                    fill="#730202"
                  />
                </svg>
              </span>
            )}
          </span>
          <p className="popup-text">
            {success ? "Sent Successfully" : "There was a problem"}
          </p>
          <div className={`popup-button ${success ? "success" : "error"}`}>
            {success ? "Go Back" : "Try Again"}
          </div> */}
          {
          content.tenant? <div>
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
          </div>:''
        }
        </div>
      </div>
    </div>
  );
};

export default Popup;
