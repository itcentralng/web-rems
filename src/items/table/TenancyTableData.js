import "./tr.css";
import DummyData from "../../DashboardData";
import { useGetPropertyListingQuery } from "../../renderedPages/properties/propertyApiSlice";
import { property } from "lodash";
const TableRow = () => {
  const { data: properties, isLoading: propertiesLoading } = useGetPropertyListingQuery();
  const calculateRent = (units) => {
    let rent = 0;
    units.forEach((unit) => {
      rent += unit.annual_fee;
    });
    return rent;
  };
  const countTenants = (units) => {
    let tenants = 0;
    units.forEach((unit) => {
      if (unit.tenant) tenants += 1;
    });
    return tenants;
  };

  return (
    propertiesLoading ? <h1 className='title'>Loading all properties....</h1> :
    <tbody className="body">
      {properties?.map((property, index) => (
        <tr key={property.id} className="tr--container">
          <td data-label="S/N">{index+1}</td>
          <td data-label="Property">{property.name}</td>
          <td data-label="Units">{property.units.length}</td>
          <td data-label="Tenants">{countTenants(property.units)}</td>
          <td data-label="Amount" className="table--amount">
            {calculateRent(property.units)}
          </td>
          <td
            data-label="Status"
            className={`status ${property.status === "Due" && "due--status"}`}
          >
            {property.status}
          </td>
          <td>
            <td>View</td>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableRow;
