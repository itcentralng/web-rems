import { useEffect, useContext } from "react";
import classes from "./agents.module.css";
import RightNav from "../../component/rightNav/RightNav";
import { Link } from "react-router-dom";
// import agentsData from "./agentsData";
import { useNavigate } from "react-router-dom";
// import RemsAgentContext from "../../context/agentContext/AgentContext";
import { useGetAgentsQuery } from "./agentApiSlice";


const Agents = () => {
  const { data: agents, isLoading: agentsLoading } = useGetAgentsQuery();
  const navigate = useNavigate();
  const defaultImage = "./user.png";

  // useEffect(() => {
  //   fetchAgent();
  // }, []);
  // console.log(getAgent);

  const str = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  return (
    agentsLoading? <h1 className='title'>Loading all agents....</h1> :
    <div>
      <div className='top-header'>
        <span></span>
        <RightNav
          input
          placeholder='Search Agents'
          button
          icon
          buttonText='Add Agent'
          onClick={() => navigate("/agents/addAgent")}
        />
      </div>
      {/* {getAgent.length === 0 && (
        <p className={classes.emptyList}>No Agent Added</p>
      )} */}
      {/* {httpError && <p className={classes.emptyList}></p>} */}

      <div className={classes.cardContainer}>
        {agents?.map((agent) => (
          <div
            className={classes.cards}
            onClick={() => navigate("/agents/viewAgent?id=" + agent.id)}
            key={agent.id}>
            <div className={classes.imgContainer}>
              <img src={agent.image? agent.image : defaultImage} alt={agent.name} />
            </div>
            <div>
              <h5 className={classes.bold}>{str(agent.name)}</h5>
              <h5 style={{ fontWeight: "400" }}>{agent.phone}</h5>
              <h5 className={classes.address}>{str(agent.home_address)}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
