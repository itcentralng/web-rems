import {
  Dashboard,
  Agents,
  Listing,
  Archives,
  Properties,
  Tenants,
} from "../../renderedPages";
import { Route, Routes } from "react-router-dom";
import AddProperty from "../../renderedPages/properties/addProperty/AddProperty";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/properties/addProperty" element={<AddProperty />} />
      </Routes>
    </div>
  );
};

export default Main;
