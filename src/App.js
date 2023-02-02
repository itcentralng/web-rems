import SideBar from "./pages/sideBar/SideBar";
import Main from "./pages/main/Main";
import { MdMenu as Open } from "react-icons/md";
import { MdClose as Close } from "react-icons/md";
import "./App.css";
import { useState } from "react";
// import Popup from "./component/popup/Popup";
import { useLocation } from "react-router-dom";

const App = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
  const showMain = location.pathname.includes("/tenants/transaction") || location.pathname.includes("/tenants/invoice");
  // const [popupError, setPopupError] = useState(true);

  return (
    showMain ? <Main /> :
    <div className="app">
      <div className={`nav-side ${showNav && "showNav"}`}>
        <SideBar />
        <div className="close" onClick={() => setShowNav(false)}>
          <Close className="close-icon" />
        </div>
      </div>
      <div className="left-container">
        <div className="main-side">
          <div className="open" onClick={() => setShowNav(true)}>
            <Open className="open-icon" />
          </div>
          <Main />
        </div>
      </div>

      {/* {popupError ? <Popup error /> : <Popup success />} */}
    </div>
  );
};

export default App;
