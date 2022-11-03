import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./api/store";

const root = createRoot(document.getElementById("root"));
const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

root.render(app);