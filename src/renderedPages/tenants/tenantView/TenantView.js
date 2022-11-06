import React, { Fragment, useEffect, useState } from "react";
import RightNav from "../../../component/rightNav/RightNav";
import "./tenantView.css";
import { useGetSingleTenantQuery, useUpdateTenantMutation, useDeleteTenantMutation, useCreateTransactionMutation } from "../tenantApiSlice";
import { useGetSingleUnitQuery } from "../../properties/propertyApiSlice";
import { useNavigate } from "react-router-dom";
import ListingTable from "./ListingTable";
const TenantView = () => {
  const params = new URLSearchParams(window.location.search);
  const tenantId = params.get("id");

  const [editableTenant, setEditableTenant] = useState({id:0, name:'', email:'', phone:'', work_address:'', home_address:'', state:'', lga:'', image: ''});
  const [ unitId, setUnitId ] = useState(0);
  const [ unit, setUnit ] = useState({id:0, name:'', annual_fee:0, next_payment_date:'', tenant_id:0});
  const [ amount, setAmount ] = useState(0);
  const [ isPaid, setIsPaid ] = useState(false);
  const [ paymentDate, setPaymentDate ] = useState('');

  const { data: tenant, isLoading: tenantLoading } = useGetSingleTenantQuery(tenantId)
  const { data: singleunit, isLoading: singleunitLoading } = useGetSingleUnitQuery(unitId)
  const [updateTenant, { isLoading: updateTenantLoading }] = useUpdateTenantMutation();
  const [deleteTenant, { isLoading: deleteTenantLoading }] = useDeleteTenantMutation();
  const [createTransaction, { isLoading: createTransactionLoading }] = useCreateTransactionMutation();
  
  
  const isDue = () => {
    const today = new Date();
    const nextPaymentDate = new Date(paymentDate);
    return nextPaymentDate <= today;
  }
  
  const validPayment = () => {
    const today = new Date();
    const nextPaymentDate = new Date(unit.next_payment_date);
    return nextPaymentDate > today;
  }


  const navigate = useNavigate();

  useEffect(() => {
    if (tenant) {
      setEditableTenant({id:tenant?.id, name:tenant?.name, phone:tenant?.phone});
      setUnitId(tenant?.units[0]?.id);
    }
  }, [tenantLoading]);

  useEffect(() => {
    setUnit({id:singleunit?.id, name:singleunit?.name, annual_fee:singleunit?.annual_fee, next_payment_date:singleunit?.next_payment_date, tenant_id:singleunit?.tenant_id});
    setAmount(singleunit?.recent_payment?.amount? singleunit?.annual_fee-singleunit?.recent_payment?.amount : singleunit?.annual_fee);
    setPaymentDate(singleunit?.next_payment_date);
  }, [singleunitLoading, unitId]);

  const editTenant = (e) => {
    e.preventDefault();
    if (editableTenant?.name && editableTenant?.phone) {
      updateTenant(editableTenant);
    }
  };

  const doDeleteTenant = (e) => {
    e.preventDefault();
    window.confirm("Are you sure you want to delete this tenant?") && deleteTenant(tenantId);
    navigate('/tenants');
  };

  //  image file handle
  const makePayment = (e) => {
    e.preventDefault();
    if (amount && validPayment()) {
      window.confirm("Are you sure you want to make this payment?") &&
      createTransaction({amount:amount, unit_id:unit.id, tenant_id:tenant.id, next_payment_date:unit.next_payment_date}).then((res) => {
        console.log(res)
        if (res?.data?.id) {
            setIsPaid(true)
            navigate('/tenants/transaction?id='+res?.data?.id)
        }else{
            alert('Payment failed')
        }
      });
    }
    else{
      alert('Change the next payment date to make payment or the amount is invalid')
    }
  };

  // update amount
  const updateAmount = (amount) =>{
    if (unit?.recent_payment?.amount){
      if ((unit.annual_fee - unit.recent_payment.amount) < amount){
        alert("Amount cant be greater than "+unit.annual_fee - unit.recent_payment.amount)
      }
    }else{
      setAmount(amount)
    }
  }

  
  return (
    updateTenantLoading? <div className="loader">Upading Tenant please wait...</div> :
    deleteTenantLoading? <div className="loader">Deleting Tenant please wait...</div> :
    tenantLoading? <div className="loader">Loading Tenant please wait...</div> :
    <div className="tenantStyle">
      <div className='top-header'>
        <RightNav button buttonText='Back' onClick={() => navigate("/tenants")} />
        <button style={{backgroundColor:'red'}} className={'submit'} onClick={doDeleteTenant}>Delete</button>
      </div>
      {/* create two forms side by side */}
      <div className="form-container">
      <h1 className="title">Tenant Details</h1>
      <form onSubmit={editTenant} className="form__control">
        <div className="inputs">
          <div className={''}>
            <label htmlFor='name' className="label">
              Full name
            </label>
            <input
              className="input"
              type='text'
              name='fullName'
              value={editableTenant?.name}
              onChange={(e) => setEditableTenant({...editableTenant, name: e.target.value})}
              placeholder='Enter Tenant Name'
            />
          </div>
        </div>
        <div className={''}>
          <label htmlFor='number' className="label">
            Phone No
          </label>
          <input
            className="input"
            type='tel'
            name='phoneNumber'
            value={`${editableTenant?.phone}`}
            onChange={(e) => setEditableTenant({...editableTenant, phone: e.target.value})}
            placeholder='Enter Tenant Phone Number'
          />
        </div>
        <button className="submit">Update Tenant</button>
      </form>
      </div>
      {createTransactionLoading? <div className="loader">Processing payment please wait...</div> :
      <div className="form-container">
      <h1 className="title">Accept Payment</h1>
      <form onSubmit={makePayment} className="form__control">
        <div className={''}>
            <label htmlFor='name' className="label">
              Unit
            </label>
            <select className="select" value={unit.id} onChange={(e) => setUnitId(e.target.value)}>
              {tenantLoading ? (
                <option className="option" value=''>Loading...</option>
              ) : (
                tenant?.units?.map((unit) => (
                  <option className="option" key={unit.id} value={unit.id}>
                    {`${unit.name.toUpperCase()}`}
                  </option>
                ))
              )}
            </select>
        </div>
        <div className={''}>
          <label htmlFor='number' className="label">
            Annual Fee
          </label>
          <input
            className="input"
            type='number'
            name='annual_fee'
            value={`${unit?.annual_fee}`}
            readOnly={true}
          />
        </div>
        <div className={''}>
          <label htmlFor='number' className="label">
            Amount
          </label>
          <input
            className="input"
            type='number'
            name='amount'
            value={`${amount}`}
            onChange={(e) => updateAmount(e.target.value)}
            placeholder='Enter Amount to pay'
          />
        </div>
        <div className={''}>
          <label htmlFor='date' className="label">
            Next Payment
          </label>
          <input
            className="input"
            type='date'
            name='next_payment_date'
            value={`${unit?.next_payment_date}`}
            onChange={(e) => setUnit({...unit, next_payment_date: e.target.value})}
          />
        </div>

        {isDue() && !isPaid  ? <button className="submit">Make Payment</button>: ''}
      </form>
      </div>
      }

      {/* Previous Payments */}
      <div className="title">
        <h1>Previous Payments</h1>
      </div>
      <div className="listing-queries">
      </div>
      <ListingTable
        serial="S/N"
        col1="Date"
        col2="Amount"
        col3="Unit"
        col4="Receipt"
        tenant_id={tenantId}
      />
    </div>
  );
};

export default TenantView;
