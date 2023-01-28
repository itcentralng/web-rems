import "./tr.css";
import DummyData from "../../DashboardData";
import { useGetPropertyListingQuery } from "../../renderedPages/properties/propertyApiSlice";
import { property } from "lodash";
import { useEffect } from "react";
const TableRow = (props) => {
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

  useEffect(
    ()=>{
      if (props.doPrint){
        const table = document.querySelector('.table-container');
        let newWin = window.open("");
        newWin.document.write(table.outerHTML);
        newWin.print();
        newWin.close();
      }
    }, [props.doPrint])

  return (
    propertiesLoading ? <h1 className='title'>Loading all properties....</h1> :
    <tbody className="body">
      {properties?.filter((property)=>{return property?.name?.toLowerCase()?.includes(props.searchTerm) || property?.agent?.name?.toLowerCase()?.includes(props.searchTerm)})?.map((property, index) => (
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
