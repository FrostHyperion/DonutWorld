import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AccountProvider } from "./context/account";
import {Amplify, AuthModeStrategyType} from "aws-amplify";
import AwsExports from "./aws-exports";
import { DonutProvider } from "./context/donuts";
import { CartProvider } from "./context/carts";

Amplify.configure({
  ...AwsExports,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AccountProvider>
      <DonutProvider>
        <CartProvider>
          <Router>
            <App />
          </Router>
        </CartProvider>
      </DonutProvider>
    </AccountProvider>
  </React.StrictMode>
);
