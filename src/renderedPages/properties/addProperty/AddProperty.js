import "./addProperty.css";
import { useState } from "react";
import RightNav from "../../../component/rightNav/RightNav";
import { useGetAgentsQuery } from "../../agents/agentApiSlice";
import { useCreatePropertyMutation } from "../propertyApiSlice";

const AddProperty = () => {
  const { data: agents, isLoading: agentsLoading } = useGetAgentsQuery();
  const [createProperty, { isLoading: propertyLoading }] = useCreatePropertyMutation();
  const [property, setProperty] = useState({name:'', address:'', state:'', lga:'', agent_id:0, images: []});

  const addProperty = (e) => {
    e.preventDefault();
    createProperty(property)
    setProperty({name:'', address:'', state:'', lga:'', agent_id:0, images: []})

  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
    });
  };

  return (
    propertyLoading ? <div className="loader">Adding Property...</div> :
    <div className='property'>
      <div className='top-header'>
        <span></span>
        <RightNav button buttonText='Add Property' onClick={addProperty} />
      </div>
      {/* <div className='image-row'>
        <div className='image-container'>
          <img
            alt='img'
            src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          />
        </div>
        <div className='image-container'>
          <img
            alt='img'
            src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          />
        </div>
        <div className='image-container'>
          <img
            alt='img'
            src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          />
        </div>
        <div className='image-container'>
          <img
            alt='img'
            src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          />
        </div>
        <div className='image-container'>
          <img
            alt='img'
            src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          />
        </div>
        <div className='image-container'>
          <img
            alt='img'
            src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          />
        </div>
        <div className='image-container'>
          <img
            alt='img'
            src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          />
        </div>
      </div> */}

      <div className='details-container'>
        {/* <button className='button'>
          <div className='button-text'>Edit Photos</div>
        </button> */}
        {/* <div className='header'>
          <div className='status'>
            Agent status <span></span>
          </div>
          <div className='status'>
            Rent status <span></span>
          </div>
        </div> */}

        <div className='content'>
          <div className='input-content'>
            <div className='input wide'>
              <label>Property Name</label>
              <input
                type='text'
                placeholder='Enter Name of Property'
                value={property.name}
                onChange={(e) => setProperty({...property, name: e.target.value})}
              />
          </div>

          <div className='input small'>
            <label>Photo</label>
            <input type='file'
              onChange={(e) => setProperty({...property, images: [...property.images, e.target.files[0]]})}
            />
          </div>

          <div className='input small'>
            <label>State</label>
            <input type='text' placeholder='Enter State'
              value={property.state}
              onChange={(e) => setProperty({...property, state: e.target.value})}
            />
          </div>

          <div className='input small'>
            <label>LGA</label>
            <input type='text' placeholder='Enter LGA' 
              value={property.lga}
              onChange={(e) => setProperty({...property, lga: e.target.value})}
            />
          </div>

          <div className='input wide'>
            <label>Address</label>
            <input
              type='text'
              placeholder='Enter Address'
              value={property.address}
              onChange={(e) => setProperty({...property, address: e.target.value})}
            />
          </div>

          <div className='input small'>
            <label>Agent</label>
            <select value={property.agent_id} onChange={(e) => setProperty({...property, agent_id: e.target.value})}>
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
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
