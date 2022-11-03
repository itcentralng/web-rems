import React, { useState, useEffect } from "react";
import classes from "./addAgent.module.css";
import RightNav from "../../component/rightNav/RightNav";
import { useNavigate } from "react-router-dom";
// import RemsAgentContext from "../../context/agentContext/AgentContext";
// import { useContext } from "react";
import { useCreateAgentMutation } from "./agentApiSlice";
// Checking form input fields...
const isEmpty = (value) => value.trim() === "";
const isNumber = (value) => value.trim().length >= 10;
const isEmail = (value) => value.includes("@");

const AddAgent = () => {
  const [agent, setAgent] = useState({name: "", phone: "", email: "", home_address: "", work_address: "", image: ""});
  const [createAgent, { isLoading: agentLoading }] = useCreateAgentMutation();
  const navigate = useNavigate();

  //  image file handle
  const handleImageFile = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAgent({...agent, image: reader.result});
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    createAgent(agent);
    setAgent({name: "", phone: "", email: "", home_address: "", work_address: "", image: ""});
    navigate("/agents");
  };

  return (
    agentLoading? <h1 className='title'>Adding Agent....</h1> :
    <div className={classes.agentStyle}>
      <RightNav button buttonText='Back' onClick={() => navigate("/agents")} />
      <form onSubmit={submitHandler} className={classes.form__control}>
        <div className={classes.img_input}>
          <div className={classes.img_holder}>
            <img
              src={agent.image}
              alt={agent.name}
              id='img'
              className={classes.agentImg}
            />
          </div>
          <input
            type='file'
            name='image'
            id='image'
            className={classes.inputFile}
            accept='image/*'
            onChange={handleImageFile}
          />
          <label htmlFor='image' className={classes.img_upload}>
            Choose Photo
          </label>
        </div>
        {/* <div className={classes.status}>
          <div className={classes.asign}>
            <p>Assignment Status</p>
            <div
              className={
                true ? classes.asign_success : classes.asign_bulb
              }></div>
          </div>
          <div className={classes.rent}>
            <p>Rent Status</p>
            <div className={classes.rent_bulb}></div>
          </div>
        </div> */}
        <div className={classes.inputs}>
          <div className={''}>
            <label htmlFor='name' className={classes.label}>
              Full name
            </label>
            <input
              className={classes.input}
              type='text'
              name='fullName'
              value={agent.name}
              onChange={(e) => setAgent({...agent, name: e.target.value})}
              placeholder='Enter Agent Name'
            />
            {!isEmpty(agent.name) && <p>Name field cannot be empty</p>}
          </div>
          <div className={''}>
            <label htmlFor='email' className={classes.label}>
              Email
            </label>
            <input
              className={classes.input}
              type='email'
              name='email'
              value={agent.email}
              onChange={(e) => setAgent({...agent, email: e.target.value})}
              placeholder='Enter Agent Email'
            />
            {!isEmail(agent.email) && <p>Please enter a valid email</p>}
          </div>
        </div>
        <div className={''}>
          <label htmlFor='number' className={classes.label}>
            Phone No
          </label>
          <input
            className={classes.input}
            type='tel'
            name='phoneNumber'
            value={`${agent.phone}`}
            onChange={(e) => setAgent({...agent, phone: e.target.value})}
            placeholder='Enter Agent Phone Number'
          />
          {!isNumber(agent.phone) && <p>Enter a valid phone number</p>}
        </div>
        <div className={classes.inputs}>
          <div className={''}>
            <label htmlFor='address' className={classes.label}>
              Home Address
            </label>
            <input
              className={classes.input}
              type='text'
              name='homeAddress'
              value={agent.home_address}
              onChange={(e) => setAgent({...agent, home_address: e.target.value})}
              placeholder='Enter Agent Home Address'
            />
            {!isEmpty(agent.home_address) && <p>Address field cannot be empty</p>}
          </div>
          <div className={''}>
            <label htmlFor='work-address' className={classes.label}>
              Work Address
            </label>
            <input
              className={classes.input}
              type='text'
              name='workAddress'
              value={agent.work_address}
              onChange={(e) => setAgent({...agent, work_address: e.target.value})}
              placeholder='Enter Agent Work Address'
            />
            {!isEmpty(agent.work_address) && <p>Address field cannot be empty</p>}
          </div>
        </div>
        <button className={classes.submit}>Add Agent</button>
      </form>
    </div>
  );
};

export default AddAgent;
