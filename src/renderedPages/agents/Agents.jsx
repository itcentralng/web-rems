import { useEffect, useContext } from "react";
import classes from "./agents.module.css";
import RightNav from "../../component/rightNav/RightNav";
import { Link } from "react-router-dom";
// import agentsData from "./agentsData";
import { useNavigate } from "react-router-dom";
import RemsAgentContext from "../../context/agentContext/AgentContext";

const Agents = () => {
  const { getAgent, fetchAgent, httpError } = useContext(RemsAgentContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAgent();
  }, []);
  // console.log(getAgent);

  const str = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  return (
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
      {getAgent.length === 0 && (
        <p className={classes.emptyList}>No Agent Added</p>
      )}
      {httpError && <p className={classes.emptyList}></p>}

      <div className={classes.cardContainer}>
        {getAgent.map((p) => (
          <div
            className={classes.cards}
            onClick={() => navigate("/agents/viewAgent")}
            key={p.id}>
            <div className={classes.imgContainer}>
              <img src={p.image} alt={p.name} />
            </div>
            <div>
              <h5 className={classes.bold}>{str(p.name)}</h5>
              <h5 style={{ fontWeight: "400" }}>{p.phone}</h5>
              <h5 className={classes.address}>{str(p.home_address)}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
