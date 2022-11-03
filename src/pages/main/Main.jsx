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
import ViewProperty from "../../renderedPages/properties/viewProperty/ViewProperty";
import AgentView from "../../renderedPages/agents/agentView/AgentView";
import AddAgent from "../../renderedPages/agents/AddAgents";
import ViewUnit from "../../renderedPages/properties/viewUnit/ViewUnit";
import TenantView from "../../renderedPages/tenants/tenantView/TenantView";
import AddTenant from "../../renderedPages/tenants/AddTenant";

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
        <Route path='/properties/viewProperty' element={<ViewProperty />} />
        <Route path='/properties/viewUnit' element={<ViewUnit />} />
        <Route path='/tenants' element={<Tenants />} />
        <Route path='/tenants/viewTenant' element={<TenantView />} />
        <Route path='/tenants/addTenant' element={<AddTenant />} />
      </Routes>
    </div>
  );
};

export default Main;
