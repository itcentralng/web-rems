import { useEffect, useState } from "react";
import "./agents.css";
import RightNav from "../../component/rightNav/RightNav";
// import agentsData from "./agentsData";
import { useNavigate } from "react-router-dom";

const Agents = () => {
  const [agentData, setAgentData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAgent = async () => {
      const result = await fetch("");
      const jsonResult = await result.json();
      // setAgentData(jsonResult.products);
      // console.log(jsonResult.products);
    };
    fetchAgent();
  }, []);

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
      {agentData.length === 0 && <p className='empty_list'>No Agent Added</p>}

      <div className='card-container'>
        {agentData.map((p) => (
          <div className='cards' key={p.id}>
            <div className='img-container'>
              <img src={p.thumbnail} alt={p.category} />
            </div>
            <div>
              <h5 className='bold'>{p.title}</h5>
              <h5 style={{ fontWeight: "400" }}>${p.price}</h5>
              <h5 className='desc'>{p.description}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
