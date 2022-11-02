import "./agents.css";
import RightNav from "../../component/rightNav/RightNav";
import agentsData from "./agentsData";
import { useNavigate } from "react-router-dom";

const Agents = () => {
  const navigate = useNavigate();

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
        />
      </div>
      <h1 className='title'>Agents</h1>
    </div>
  );
};

export default Agents;
