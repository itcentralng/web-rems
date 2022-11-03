import React, { Fragment, useEffect, useState } from "react";
import RightNav from "../../../component/rightNav/RightNav";
import "./agentView.css";
import { useGetSingleAgentQuery, useUpdateAgentMutation, useDeleteAgentMutation } from "../agentApiSlice";
import { useNavigate } from "react-router-dom";
const AgentView = () => {
  const params = new URLSearchParams(window.location.search);
  const agentId = params.get("id");
  const { data: agent, isLoading: agentLoading } = useGetSingleAgentQuery(agentId)
  const [updateAgent, { isLoading: updateAgentLoading }] = useUpdateAgentMutation();
  const [deleteAgent, { isLoading: deleteAgentLoading }] = useDeleteAgentMutation();
  const [editableAgent, setEditableAgent] = useState({id:0, name:'', email:'', phone:'', work_address:'', home_address:'', state:'', lga:'', image: ''});


  const navigate = useNavigate();

  useEffect(() => {
    if (agent) {
      setEditableAgent({id:agent?.id, name:agent?.name, email:agent?.email, phone:agent?.phone, work_address:agent?.work_address, home_address:agent?.home_address, image: agent?.image});
    }
  }, [agentLoading]);

  const editAgent = (e) => {
    e.preventDefault();
    if (editableAgent?.name && editableAgent?.phone && editableAgent?.work_address && editableAgent?.home_address) {
      updateAgent(editableAgent);
    }
  };

  const doDeleteAgent = (e) => {
    e.preventDefault();
    window.confirm("Are you sure you want to delete this agent?") && deleteAgent(agentId);
    navigate('/agents');
  };

  //  image file handle
  const handleImageFile = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setEditableAgent({...editableAgent, image: reader.result});
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  
  return (
    updateAgentLoading? <div className="loader">Upading Agent please wait...</div> :
    deleteAgentLoading? <div className="loader">Deleting Agent please wait...</div> :
    agentLoading? <div className="loader">Loading Agent please wait...</div> :
    <div className="agentStyle">
      <div className='top-header'>
        <RightNav button buttonText='Back' onClick={() => navigate("/agents")} />
        <button style={{backgroundColor:'red'}} className={'submit'} onClick={doDeleteAgent}>Delete Agent</button>
      </div>
      <form onSubmit={editAgent} className="form__control">
        <div className="img_input">
          <div className="img_holder">
            <img
              src={editableAgent?.image}
              alt={editableAgent?.name}
              id='img'
              className="agentImg"
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
        <div className="inputs">
          <div className={''}>
            <label htmlFor='name' className="label">
              Full name
            </label>
            <input
              className="input"
              type='text'
              name='fullName'
              value={editableAgent?.name}
              onChange={(e) => setEditableAgent({...editableAgent, name: e.target.value})}
              placeholder='Enter Agent Name'
            />
          </div>
          <div className={''}>
            <label htmlFor='email' className="label">
              Email
            </label>
            <input
              className="input"
              type='email'
              name='email'
              value={editableAgent?.email}
              onChange={(e) => setEditableAgent({...editableAgent, email: e.target.value})}
              placeholder='Enter Agent Email'
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
            value={`${editableAgent?.phone}`}
            onChange={(e) => setEditableAgent({...editableAgent, phone: e.target.value})}
            placeholder='Enter Agent Phone Number'
          />
        </div>
        <div className="inputs">
          <div className={''}>
            <label htmlFor='address' className="label">
              Home Address
            </label>
            <input
              className="input"
              type='text'
              name='homeAddress'
              value={editableAgent?.home_address}
              onChange={(e) => setEditableAgent({...editableAgent, home_address: e.target.value})}
              placeholder='Enter Agent Home Address'
            />
            {/* {!isEmpty(editableAgent?.home_address) && <p>Address field cannot be empty</p>} */}
          </div>
          <div className={''}>
            <label htmlFor='work-address' className="label">
              Work Address
            </label>
            <input
              className="input"
              type='text'
              name='workAddress'
              value={editableAgent?.work_address}
              onChange={(e) => setEditableAgent({...editableAgent, work_address: e.target.value})}
              placeholder='Enter Agent Work Address'
            />
            {/* {!isEmpty(editableAgent?.work_address) && <p>Address field cannot be empty</p>} */}
          </div>
        </div>
        <button className="submit">Update Agent</button>
      </form>
    </div>
  );
};

export default AgentView;
