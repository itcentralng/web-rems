import "./tr.css";
import DummyData from "../../DashboardData2";
import {useGetPropertyListingQuery} from "../properties/propertyApiSlice";
const ListingTableRow = () => {
  const { data: properties, isLoading: propertiesLoading } = useGetPropertyListingQuery()
  return (
    <tbody className="tbody">
      {properties?.map((data, index) => (
        <tr key={data._id} className="tr--container">
          <td data-label="S/N">{index+1}</td>
          <td data-label="Property">{data.name}</td>
          <td data-label="Occupant">{data.state}</td>
          <td data-label="Due date">{data.units}</td>
          <td data-label="Amount" className={`status`}>
            {data.status}
          </td>
          <td data-label="Status" className="table--amount ">
            {data.rent}
          </td>
        </tr>
      ))}
      ;
    </tbody>
  );
};

export default ListingTableRow;
