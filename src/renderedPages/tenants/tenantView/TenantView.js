import React, { Fragment, useEffect, useState } from "react";
import RightNav from "../../../component/rightNav/RightNav";
import "./tenantView.css";
import { useGetSingleTenantQuery, useUpdateTenantMutation, useDeleteTenantMutation } from "../tenantApiSlice";
import { useNavigate } from "react-router-dom";
const TenantView = () => {
  const params = new URLSearchParams(window.location.search);
  const tenantId = params.get("id");
  const { data: tenant, isLoading: tenantLoading } = useGetSingleTenantQuery(tenantId)
  const [updateTenant, { isLoading: updateTenantLoading }] = useUpdateTenantMutation();
  const [deleteTenant, { isLoading: deleteTenantLoading }] = useDeleteTenantMutation();
  const [editableTenant, setEditableTenant] = useState({id:0, name:'', email:'', phone:'', work_address:'', home_address:'', state:'', lga:'', image: ''});


  const navigate = useNavigate();

  useEffect(() => {
    if (tenant) {
      setEditableTenant({id:tenant?.id, name:tenant?.name, phone:tenant?.phone});
    }
  }, [tenantLoading]);

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
  const handleImageFile = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setEditableTenant({...editableTenant, image: reader.result});
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  
  return (
    updateTenantLoading? <div className="loader">Upading Tenant please wait...</div> :
    deleteTenantLoading? <div className="loader">Deleting Tenant please wait...</div> :
    tenantLoading? <div className="loader">Loading Tenant please wait...</div> :
    <div className="tenantStyle">
      <div className='top-header'>
        <RightNav button buttonText='Back' onClick={() => navigate("/tenants")} />
        <button style={{backgroundColor:'red'}} className={'submit'} onClick={doDeleteTenant}>Delete Tenant</button>
      </div>
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
  );
};

export default TenantView;
