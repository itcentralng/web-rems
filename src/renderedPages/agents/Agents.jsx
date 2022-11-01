import React from "react";
import RightNav from "../../component/rightNav/RightNav";

const Agents = () => {
  return (
    <div>
      <div className="top-header">
        <span></span>
        <RightNav
          input
          placeholder="Search Agents"
          button
          icon
          buttonText="Add Agent"
        />
      </div>
      <h1 className="title">Agents</h1>
    </div>
  );
};

export default Agents;
