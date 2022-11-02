import React from "react";
import RightNav from "../../../component/rightNav/RightNav";

const AgentView = () => {
  return (
    <div>
      <div className="top-header">
        <span></span>
        <RightNav button buttonText="Edit" />
      </div>
      <h1 className="title">AgentView</h1>
    </div>
  );
};

export default AgentView;
