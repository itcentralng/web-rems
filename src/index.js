import "./index.css";
import App from "./App";
import { store } from "./api/store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RemsAgentProvider } from "./context/agentContext/AgentContext";

const root = createRoot(document.getElementById("root"));
const app = (
  <RemsAgentProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </RemsAgentProvider>
);

root.render(app);
