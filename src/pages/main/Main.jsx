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
import AgentView from "../../renderedPages/agents/agentView/AgentView";
import AddAgent from "../../renderedPages/agents/AddAgents";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/agents' element={<Agents />} />
        <Route path='/agents/addAgent' element={<AddAgent />} />

        <Route path='/agents/viewAgent' element={<AgentView />} />
        <Route path='/listing' element={<Listing />} />
        <Route path='/archives' element={<Archives />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/properties/addProperty' element={<AddProperty />} />
        <Route path='/tenants' element={<Tenants />} />
      </Routes>
    </div>
  );
};

export default Main;
