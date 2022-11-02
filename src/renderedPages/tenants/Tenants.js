import RightNav from "../../component/rightNav/RightNav";
const Tenants = () => {
  return (
    <div className="tenants">
      <div className="top-header">
        <span></span>
        <RightNav
          input
          placeholder="Search Managers"
          button
          icon
          buttonText="Add Tenant"
        />
      </div>
      <h1>Tenants</h1>
    </div>
  );
};

export default Tenants;
