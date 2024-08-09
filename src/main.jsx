import React from "react";
import ReactDOM from "react-dom/client";
import { CustomProvider } from "rsuite";
import { BrowserRouter } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomProvider theme="dark">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CustomProvider>
  </React.StrictMode>
);
