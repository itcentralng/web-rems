import "./tr.css";
import DummyData from "../../DashboardData2";
import {useGetPropertyListingQuery} from "../properties/propertyApiSlice";
import { property } from "lodash";
const ListingTableRow = () => {
  const { data: properties, isLoading: propertiesLoading } = useGetPropertyListingQuery()
  const calculateRent = (units) => {
    let rent = 0;
    units.forEach((unit) => {
      rent += unit.annual_fee;
    });
    return rent;
  };
  return (
    propertiesLoading ? <h1 className='title'>Loading all properties....</h1> :
    <tbody className="tbody">
      {properties?.map((property, index) => (
        <tr key={property.id} className="tr--container">
          <td data-label="S/N">{index+1}</td>
          <td data-label="Property">{property.name}</td>
          <td data-label="State">{property.state}</td>
          <td data-label="Units">{property.units.length}</td>
          <td data-label="Status" className={`status`}>
            {property.status}
          </td>
          <td data-label="Rent" className="table--amount ">
            {calculateRent(property.units)}
          </td>
        </tr>
      ))}
      ;
    </tbody>
  );
};

export default ListingTableRow;
