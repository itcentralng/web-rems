// import properties from "./propertiesData";
import "./properties.css";
import { useNavigate } from "react-router-dom";
import RightNav from "../../component/rightNav/RightNav";
import {useGetPropertiesQuery} from "../properties/propertyApiSlice";
import { useState } from "react";


const Properties = () => {
  const { data: properties, isLoading: propertiesLoading } = useGetPropertiesQuery()
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const defaultImage = require("../../assets/home.png");
  const filterProperties = (term)=>{
    setTerm(term);
  }
  return (
    propertiesLoading ? <h1 className='title'>Loading all properties....</h1> :
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
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <div className="card-container">
        {properties?.filter((property)=>{
          return property?.name?.toLowerCase().includes(term.toLowerCase()) || property?.agent?.name?.toLowerCase().includes(term.toLowerCase()) || property?.agent?.phone?.includes(term) || property?.file_number?.includes(term)
        }).map((p) => (
          <div className="card" key={p._id} onClick={() => navigate("/properties/viewProperty?id="+p.id)}>
            <div className="image-container">
              <img src={p?.images[0]?.image? p?.images[0]?.image : defaultImage} alt={p.name} />
            </div>
            <div>
              <p className="bold">{p.name}</p>
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
