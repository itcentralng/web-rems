import React, { Fragment, useEffect, useState } from "react";
import RightNav from "../../component/rightNav/RightNav";
import "./settings.css";
// import { useGetSingleTenantQuery, useUpdateTenantMutation, useDeleteTenantMutation, useCreateTransactionMutation } from "../tenantApiSlice";
import { useGetAccountQuery, useCreateAccountMutation } from "../settings/accountApiSlice";
import { useNavigate } from "react-router-dom";
// import ListingTable from "./ListingTable";
const Settings = () => {
  // const params = new URLSearchParams(window.location.search);
  // const tenantId = params.get("id");

  const [editableAccount, setEditableAccount] = useState({company:"", account_number:'', account_name:'', bank:''});
  // const [ unitId, setUnitId ] = useState(0);
  // const [ unit, setUnit ] = useState({id:0, name:'', annual_fee:0, next_payment_date:'', tenant_id:0});
  // const [ amount, setAmount ] = useState(0);
  // const [ isPaid, setIsPaid ] = useState(false);
  // const [ paymentDate, setPaymentDate ] = useState('');

  const { data: account, isLoading: accountLoading } = useGetAccountQuery()
  // const { data: singleunit, isLoading: singleunitLoading } = useGetSingleUnitQuery(unitId)
  // const [updateTenant, { isLoading: updateTenantLoading }] = useUpdateTenantMutation();
  // const [deleteTenant, { isLoading: deleteTenantLoading }] = useDeleteTenantMutation();
  const [createAccount, { isLoading: createAccountLoading }] = useCreateAccountMutation();
  
  
  // const isDue = () => {
  //   const today = new Date();
  //   const nextPaymentDate = new Date(paymentDate);
  //   return nextPaymentDate <= today;
  // }
  
  // const validPayment = () => {
  //   const today = new Date();
  //   const nextPaymentDate = new Date(unit.next_payment_date);
  //   return nextPaymentDate > today;
  // }


  const navigate = useNavigate();

  // useEffect(() => {
  //   if (tenant) {
  //     setEditableTenant({id:tenant?.id, name:tenant?.name, phone:tenant?.phone});
  //     setUnitId(tenant?.units[0]?.id);
  //   }
  // }, [tenantLoading]);

  useEffect(() => {
    setEditableAccount({company:account?.company, account_name:account?.account_name, account_number:account?.account_number, bank:account?.bank});
  }, [accountLoading]);

  // const editTenant = (e) => {
  //   e.preventDefault();
  //   if (editableTenant?.name && editableTenant?.phone) {
  //     updateTenant(editableTenant);
  //   }
  // };

  // const doDeleteTenant = (e) => {
  //   e.preventDefault();
  //   window.confirm("Are you sure you want to delete this tenant?") && deleteTenant(tenantId);
  //   navigate('/tenants');
  // };

  // //  Update Account Details
  const updateAccount = (e) => {
    e.preventDefault();
      createAccount({company:editableAccount?.company, account_name:editableAccount?.account_name, account_number:editableAccount?.account_number, bank:editableAccount?.bank}).then((res) => {
          alert('Account Updated Successfully')
      });
  };

  // // update amount
  // const updateAmount = (amount) =>{
  //   if (unit?.recent_payment?.amount){
  //     if ((unit.annual_fee - unit.recent_payment.amount) < amount){
  //       alert("Amount cant be greater than "+unit.annual_fee - unit.recent_payment.amount)
  //     }
  //   }else{
  //     setAmount(amount)
  //   }
  // }

  
  return (
    // updateTenantLoading? <div className="loader">Upading Tenant please wait...</div> :
    // deleteTenantLoading? <div className="loader">Deleting Tenant please wait...</div> :
    // tenantLoading? <div className="loader">Loading Tenant please wait...</div> :
    <div className="tenantStyle">
      <div className='top-header'>
        <RightNav button buttonText='Back' onClick={() => navigate("/tenants")} />
        {/* <button style={{backgroundColor:'red'}} className={'submit'} onClick={doDeleteTenant}>Delete</button> */}
      </div>
      {/* create two forms side by side */}
      <div className="form-container">
      <h1 className="title">Settings</h1>
      <form onSubmit={updateAccount} className="form__control">
        <div className="inputs">
          <div className={''}>
            <label htmlFor='name' className="label">
              Company Name
            </label>
            <input
              className="input"
              type='text'
              name='company'
              value={editableAccount?.company}
              onChange={(e) => setEditableAccount({...editableAccount, company: e.target.value})}
              placeholder='Enter Company Name'
            />
          </div>
        </div>
        <div className={''}>
          <label htmlFor='text' className="label">
            Account Name
          </label>
          <input
            className="input"
            type='text'
            name='accountName'
            value={editableAccount?.account_name}
            onChange={(e) => setEditableAccount({...editableAccount, account_name: e.target.value})}
            placeholder='Enter Account Name'
          />
        </div>
        <div className={''}>
          <label htmlFor='text' className="label">
            Account Number
          </label>
          <input
            className="input"
            type='text'
            name='accountNumber'
            value={editableAccount?.account_number}
            onChange={(e) => setEditableAccount({...editableAccount, account_number: e.target.value})}
            placeholder='Enter Account Number'
          />
        </div>
        <div className={''}>
          <label htmlFor='text' className="label">
            Bank
          </label>
          <input
            className="input"
            type='text'
            name='bank'
            value={editableAccount?.bank}
            onChange={(e) => setEditableAccount({...editableAccount, bank: e.target.value})}
            placeholder='Enter Bank'
          />
        </div>
        <button className="submit">Update Settings</button>
      </form>
      </div>
    </div>
  );
};

export default Settings;
