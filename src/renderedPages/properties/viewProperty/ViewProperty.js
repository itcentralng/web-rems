import "./viewProperty.css";
import { useEffect, useState } from "react";
import { useGetAgentsQuery } from "../../agents/agentApiSlice";
import { useGetSinglePropertyQuery } from "../propertyApiSlice";
import { useUpdatePropertyMutation } from "../propertyApiSlice";

const ViewProperty = () => {
  const params = new URLSearchParams(window.location.search);
  const propertyId = params.get("id");
  const { data: agents, isLoading: agentsLoading } = useGetAgentsQuery();
  const { data: property, isLoading: propertyLoading } = useGetSinglePropertyQuery(propertyId);
  const [updateProperty, { isLoading: updatepropertyLoading }] = useUpdatePropertyMutation();
  const [editableproperty, setEditableProperty] = useState({id:0, name:'', address:'', state:'', lga:'', agent_id:0, images: []});

  useEffect(() => {
    if (property) {
      setEditableProperty({id:property?.id, name:property?.name, address:property?.address, state:property?.state, lga:property?.lga, agent_id:property?.agent_id, images: [property?.images[0]?.image]});
      console.log(editableproperty);
    }
  }, [propertyLoading]);


  const editProperty = (e) => {
    e.preventDefault();
    if (editableproperty?.name && editableproperty?.address && editableproperty?.state && editableproperty?.lga && editableproperty?.agent_id) {
      updateProperty(editableproperty);
    }

  };

  //  image file handle
  const handleImageFile = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setEditableProperty({...editableproperty, images: [reader.result]});
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    propertyLoading ? <h1 className='title'>Loading Property Please wait....</h1> :
    updatepropertyLoading ? <h1 className='title'>Updating Property Please wait....</h1> :
    <div className='property'>
      {/* <div className='top-header'>
        <span></span>
        <RightNav button buttonText='Add Property' onClick={addProperty} />
      </div> */}

      <div className='details-container'>
      <div className="img_input">
          <div className="image-container">
            <img
              src={editableproperty?.images[0]?.image}
              alt={editableproperty?.name}
              id='img'
              className="propertyImg"
            />
          </div>
          <input
            type='file'
            name='image'
            id='image'
            className="inputFile"
            accept='image/*'
            onChange={handleImageFile}
          />
          <label htmlFor='image' className="img_upload">
            Choose Photo
          </label>
        </div>

        <div className='content'>
          <div className='input-content'>
            <div className='input wide'>
              <label>Property Name</label>
              <input
                type='text'
                placeholder='Enter Name of Property'
                value={editableproperty?.name}
                onChange={(e) => setEditableProperty({...editableproperty, name: e.target.value})}
              />
          </div>

          <div className='input small'>
            <label>State</label>
            <input type='text' placeholder='Enter State'
              value={editableproperty?.state}
              onChange={(e) => setEditableProperty({...editableproperty, state: e.target.value})}
            />
          </div>

          <div className='input small'>
            <label>LGA</label>
            <input type='text' placeholder='Enter LGA' 
              value={editableproperty?.lga}
              onChange={(e) => setEditableProperty({...editableproperty, lga: e.target.value})}
            />
          </div>

          <div className='input wide'>
            <label>Address</label>
            <input
              type='text'
              placeholder='Enter Address'
              value={editableproperty?.address}
              onChange={(e) => setEditableProperty({...editableproperty, address: e.target.value})}
            />
          </div>
          </div>

          
          <div className='input-content'>
          <div className='input small'>
            <label>Agent</label>
            <select value={editableproperty?.agent_id} onChange={(e) => setEditableProperty({...editableproperty, agent_id: e.target.value})}>
              <option value=''>Select Agent</option>
              {agentsLoading ? (
                <option value=''>Loading...</option>
              ) : (
                agents.map((agent) => (
                  <option key={agent.id} value={agent.id}>
                    {`${agent.name.toUpperCase()} ${agent.phone}`}
                  </option>
                ))
              )}
            </select>
          </div>
          </div>
          <div className='input-content'>
          <div className='input small'>
          <button className={'submit'} onClick={editProperty}>Update Property</button>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ViewProperty;
