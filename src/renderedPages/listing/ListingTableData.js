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
  let serial_number = 1;
  return (
    propertiesLoading ? <h1 className='title'>Loading all properties....</h1> :
    <tbody className="tbody">
      {properties?.map((property, index) => (
        property.units.map((unit) => (
          <tr key={unit.id} className="tr--container">
          <td data-label="S/N">{serial_number++}</td>
          <td data-label="Property">{property.name}</td>
          <td data-label="Unit">{unit.name}</td>
          <td data-label="Status" className={`status`}>
            {unit.tenant_id? "Occupied" : "Vacant"}
          </td>
          <td data-label="Rent" className="table--amount ">
            {unit.annual_fee}
          </td>
        </tr>
        ))
      ))}
      ;
    </tbody>
  );
};

export default ListingTableRow;
