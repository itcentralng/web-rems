import "./tr.css";
import { useGetTransactionsQuery } from "../tenants/tenantApiSlice";
import { useNavigate } from "react-router-dom";

const ListingTableRow = (props) => {
  const { data: transactions, isLoading: transactionsLoading } =
    useGetTransactionsQuery();
  const navigate = useNavigate();
  const showDate = (date) => {
    let newDate = new Date();
    if (date) {
      newDate = new Date(date);
    }
    return newDate.toDateString();
  };
  const termFound = (transaction) => {
    if (props.searchTerm === "") {
      return true;
    }
    if (
      transaction?.tenant?.name
        ?.toLowerCase()
        .includes(props.searchTerm.toLowerCase())
    ) {
      return true;
    }
    if (
      transaction?.unit?.name
        ?.toLowerCase()
        .includes(props.searchTerm.toLowerCase())
    ) {
      return true;
    }
    if (
      transaction?.type?.toLowerCase().includes(props.searchTerm.toLowerCase())
    ) {
      return true;
    }
    if (
      showDate(transaction?.created_at)
        .toLowerCase()
        .includes(props.searchTerm.toLowerCase())
    ) {
      return true;
    }
    return false;
  };

  return transactionsLoading ? (
    <h1 className="title">Loading all transactions....</h1>
  ) : (
    <tbody className="tbody">
      {transactions?.map(
        (transaction, index) =>
          termFound(transaction) && (
            <tr key={transaction.id} className="tr--container">
              <td data-label="S/N">{index + 1}</td>
              <td data-label="Tenant">{transaction.tenant.name}</td>
              <td data-label="Unit">{transaction.unit.name}</td>
              <td data-label="Date">{showDate(transaction.created_at)}</td>
              <td data-label="Amount" className="table--amount ">
                {transaction.amount}
              </td>
              <td data-label="Type">{transaction.type} Payment</td>
              <td data-label="View" className={`view`}>
                <button
                  className="view--button"
                  onClick={() => {
                    navigate("/tenants/transaction?id=" + transaction.id);
                  }}
                >
                  View
                </button>
              </td>
            </tr>
          )
      )}
    </tbody>
  );
};

export default ListingTableRow;
