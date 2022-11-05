import "../tr.css";
import {useGetTenantTransactionsQuery} from "../tenantApiSlice";
import { useNavigate } from "react-router-dom";

const ListingTableRow = (props) => {
  const { data: transactions, isLoading: transactionsLoading } = useGetTenantTransactionsQuery(props.tenant_id);
  const navigate = useNavigate();
  const showDate = (date) => {
    let newDate = new Date();
    if (date) {
      newDate = new Date(date);
    }
    return newDate.toDateString();
  };
  return (
    transactionsLoading ? <h1 className='title'>Loading all transactions....</h1> :
    <tbody className="tbody">
      {transactions?.map((transaction, index) => (
          <tr key={transaction.id} className="tr--container">
          <td data-label="S/N">{index+1}</td>
          <td data-label="Date">{showDate(transaction.created_at)}</td>
          <td data-label="Amount">{transaction.amount}</td>
          <td data-label="Unit">{transaction.unit.name}</td>
          <td data-label="Receipt">
            <button className="view--button" onClick={()=>{navigate('/tenants/transaction?id='+transaction.id)}}>View</button>
          </td>
        </tr>
      ))}
      ;
    </tbody>
  );
};

export default ListingTableRow;
