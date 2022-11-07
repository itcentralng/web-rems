import "./dashboard.css";
import RightNav from "../../component/rightNav/RightNav";
import Card from "../../component/UI/Card";
import cardIcons from "./TenancyDetails";
import { TenancyTable } from "../../items";
import { useGetReportQuery } from "./dashboardApiSlice";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { data: report, isLoading: reportLoading } = useGetReportQuery();
  const navigate = useNavigate()
  return (
    reportLoading ? <h1 className='title'>Loading....</h1> :
    <div className='dashboard'>
      <div className='top-header'>
        <span></span>
        <RightNav
          button
          buttonText='Report'
          onClick={() => navigate("/transactions")}
        />
      </div>
      <h1 className='title'>Dashboard</h1>
      <div className='tenancy--info'>
        {/* owed */}
        <Card key={0}>
          <div className='card-icon'>{cardIcons.owed}</div>
          <p className='card-name'>{'Tenancy Owed'}</p>
          <div
            className={`card-amount owed`}>
            {report?.notpaid? report.notpaid : 0}
          </div>
        </Card>
        {/* Due */}
        <Card key={1}>
          <div className='card-icon'>{cardIcons.due}</div>
          <p className='card-name'>{'Tenancy Due'}</p>
          <div
            className={`card-amount due"`}>
            {report?.due}
          </div>
        </Card>
        {/* Paid */}
        <Card key={2}>
          <div className='card-icon'>{cardIcons.paid}</div>
          <p className='card-name'>{'Revenue Generated'}</p>
          <div
            className={`card-amount`}>
            {report?.paid}
          </div>
        </Card>
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
    </div>
  );
};

export default Dashboard;
