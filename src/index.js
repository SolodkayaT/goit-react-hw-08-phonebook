import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App/App";
import Layout from "../src/components/Layout/Layout";

import { store, persistor } from "./redux/store";
import "./css/main.css";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <App />
        </Layout>
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
