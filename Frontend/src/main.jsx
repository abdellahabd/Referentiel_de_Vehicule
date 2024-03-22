import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { StyledEngineProvider } from "@mui/material/styles";

import { store } from "./Store/index";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider>
        <App />
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>
);
