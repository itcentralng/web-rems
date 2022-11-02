import "./dashboard.css";
import RightNav from "../../component/rightNav/RightNav";
import TenancyTable from "../../items/table/TenancyTable";
import Card from "../../component/UI/Card";
import tenancyInfo from "./TenancyDetails";

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='top-header'>
        <span></span>
        <RightNav
          input
          placeholder='Search'
          button
          buttonText='Generate Report'
        />
      </div>
      <h1 className='title'>Dashboard</h1>
      <div className='tenancy--info'>
        {tenancyInfo.map((card) => (
          <Card key={card.id}>
            <div className='card-icon'>{card.icon}</div>
            <p className='card-name'>{card.name}</p>
            <div
              className={`card-amount ${
                card.name === "Tenancy Owed" && "owed"
              } ${card.name === "Tenancy Due" && "due"}`}>
              {card.amount}
            </div>
          </Card>
        ))}
      </div>
      <div className='tenancy-data'>
        <div className='tenancy-data__title'>
          <h1>Properties Info.</h1>
        </div>
        <TenancyTable
          serial='S/N'
          col1='Property'
          col2='Units'
          col3='No of Tenants'
          col4='Amount'
          col5='Status'
        />
      </div>
      <div className='listing-data'>
        {/* <div className='listing-data__title'>
          <h1>Listing</h1>
        </div>
        <ListingTable
          serial='S/N'
          col1='Property Name'
          col2='State'
          col3='units'
          col4='Status'
          col5='Rent'
        /> */}
      </div>
    </div>
  );
};

export default Dashboard;
