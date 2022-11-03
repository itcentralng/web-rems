import SideBar from "./pages/sideBar/SideBar";
import Main from "./pages/main/Main";
import { MdMenu as Open } from "react-icons/md";
import { MdClose as Close } from "react-icons/md";
import "./App.css";
import { useState } from "react";
import { RemsAgentProvider } from "./context/agentContext/AgentContext";
// import RightNav from "./component/rightNav/RightNav";

const App = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <RemsAgentProvider>
      <div className='app'>
        <div className={`nav-side ${showNav && "showNav"}`}>
          <SideBar />
          <div className='close' onClick={() => setShowNav(false)}>
            <Close className='close-icon' />
          </div>
        </div>
        <div className='left-container'>
          <div className='main-side'>
            <div className='open' onClick={() => setShowNav(true)}>
              <Open className='open-icon' />
            </div>
            <Main />
          </div>
        </div>
      </div>
    </RemsAgentProvider>
  );
};

export default App;
