import React, { Fragment, useState } from "react";
import RightNav from "../../../component/rightNav/RightNav";
import "./agentView.css";
import { useGetSingleAgentQuery } from "../agentApiSlice";
const AgentView = () => {
  const params = new URLSearchParams(window.location.search);
  const agentId = params.get("id");
  const { data: agent, isLoading: agentLoading } = useGetSingleAgentQuery(agentId)
  const [isEditing, setIsEditing] = useState(false);
  const editButton = (
    <div className='top-header'>
      <span></span>
      <RightNav button buttonText='Edit' onClick={() => setIsEditing(true)} />
    </div>
  );
  const onEditMode = (
    <div className='top-header'>
      <span></span>
      <div className='edit--agent'>
        <button className='button-del'>Delete</button>
        <button className='button-edit'>Edit</button>
      </div>
    </div>
  );
  return (
    <div>
      <div className='top-header'>
        {!isEditing && (
          <Fragment>
            <span></span>
            <RightNav
              button
              buttonText='Edit'
              onClick={() => setIsEditing(true)}
            />
          </Fragment>
        )}
        {isEditing && onEditMode}
      </div>

      <h1 className='title'>Loading....</h1>
    </div>
  );
};

export default AgentView;
