import "./agents.css";
import RightNav from "../../component/rightNav/RightNav";
import agentsData from "./agentsData";
import { useNavigate } from "react-router-dom";

const Agents = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="top-header">
        <span></span>
        <RightNav
          input
          placeholder="Search Agents"
          button
          icon
          buttonText="Add Agent"
          onClick={() => navigate("/agents/viewAgent")}
        />
      </div>
      <div className="card-container">
        {agentsData.map((a) => (
          <div className="card" key={a._id}>
            <div className="card-image_container">
              <img src={a.photo} alt={a.property} />
            </div>
            <div>
              <p className="bold">{a.name}</p>
              <p>{a.number}</p>
              <p>{a.property}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Agents;
