import "./viewUnit.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetSingleUnitQuery, useUpdateUnitMutation, useDeleteUnitMutation } from "../propertyApiSlice";
import { useGetTenantsQuery } from "../../tenants/tenantApiSlice";

const ViewUnit = () => {
  const params = new URLSearchParams(window.location.search);
  const unitId = params.get("id");
  const { data: tenants, isLoading: tenantsLoading } = useGetTenantsQuery();
  const { data: unit, isLoading: unitLoading } = useGetSingleUnitQuery(unitId);
  const [updateUnit, { isLoading: updateunitLoading }] = useUpdateUnitMutation();
  const [deleteUnit, { isLoading: deleteUnitLoading }] = useDeleteUnitMutation();
  const [editableunit, setEditableUnit] = useState({id:0, name:'', annual_fee:0, tenant_id:0, date: new Date().toISOString().slice(0, 10)});

  const navigate = useNavigate();

  useEffect(() => {
    if (unit) {
      setEditableUnit({id:unit?.id, name:unit?.name, property_id:unit?.property_id, tenant_id:unit?.tenant_id, annual_fee:unit?.annual_fee, date:unit?.date});
    }
  }, [unitLoading]);


  const editUnit = (e) => {
    e.preventDefault();
    console.log(editableunit);
    if (editableunit?.name && editableunit?.tenant_id && editableunit?.annual_fee) {
      updateUnit(editableunit);
    }

  };

  const doDeleteUnit = (e) => {
    e.preventDefault();
    window.confirm("Are you sure you want to delete this unit?") && deleteUnit(unitId);
    navigate('/properties/viewProperty?id=' + unit?.property_id);
  };

  return (
    unitLoading ? <h1 className='title'>Loading Unit Please wait....</h1> :
    updateunitLoading ? <h1 className='title'>Updating Unit Please wait....</h1> :
    <div className='unit'>
      <div className='top-header'>
        <span></span>
        <button style={{backgroundColor:'red'}} className={'submit'} onClick={doDeleteUnit}>Delete Unit</button>
      </div>

      <div className='details-container'>

        <div className='content'>
          <div className='input-content'>
          <div className='input small'>
            <label>Name</label>
            <input 
                type='text' 
                placeholder='Enter Unit Name' 
                value={editableunit?.name}
                onChange={(e) => setEditableUnit({...editableunit, name: e.target.value})}
                />
          </div>
          <div className='input small'>
            <label>Annual Fee</label>
            <input 
                type='text' 
                placeholder='Enter Unit Annual Fee' 
                value={editableunit?.annual_fee}
                onChange={(e) => setEditableUnit({...editableunit, annual_fee: e.target.value})}
                />
          </div>
          <div className='input small'>
            <label>Tenant</label>
            <select value={editableunit?.tenant_id} onChange={(e) => setEditableUnit({...editableunit, tenant_id: e.target.value})}>
              <option value=''>Select Tenant</option>
              {tenantsLoading ? (
                <option value=''>Loading...</option>
              ) : (
                tenants.map((tenant) => (
                  <option key={tenant.id} value={tenant.id}>
                    {`${tenant.name.toUpperCase()} ${tenant.phone}`}
                  </option>
                ))
              )}
            </select>
          </div>
          <div className='input small'>
            <label>Next Payment Date</label>
            <input
              type='date'
              value={editableunit?.date}
              onChange={(e) => setEditableUnit({...editableunit, date: e.target.value})}
            />
          </div>
          <div className='input small'>
          <button className={'submit'} onClick={editUnit}>Update</button>
          </div>
          </div>
          <div className="title">
            <h4>Tenant</h4>
          </div>
          <div className="card-container">
            
              <div className="card" key={unit?.id} onClick={() => navigate("/tenants/viewTenant?id="+unit?.tenant_id)}>
                <div className="image-container">
                  <img src={''} alt={unit?.tenant?.name} />
                </div>
                <div>
                  <p className="bold">{unit?.tenant?.name}</p>
                  <p>{unit?.tenant?.phone}</p>
                  <p>{unit?.tenant?.phone}</p>
                </div>
              </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUnit;
