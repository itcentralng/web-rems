import properties from "./propertiesData";
import "./properties.css";
import { useNavigate } from "react-router-dom";
import RightNav from "../../component/rightNav/RightNav";

const Properties = () => {
  const navigate = useNavigate();
  return (
    <div className="properties">
      <div className="top-header">
        <span></span>
        <RightNav
          input
          placeholder="Search Property"
          button
          icon
          buttonText="Add Property"
          onClick={() => navigate("/properties/addProperty")}
        />
      </div>
      <div className="card-container">
        {properties.map((p) => (
          <div className="card" key={p._id}>
            <div className="image-container">
              <img src={p.photo} alt={p.property} />
            </div>
            <div>
              <p className="bold">{p.property}</p>
              <p>{p.address}</p>
              <p>{p.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
