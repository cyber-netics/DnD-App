import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Layout from "./Layout";
import "assets/styles.css";

const RootComponent = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// **
ReactDOM.render(
  <Layout>
    <RootComponent />
  </Layout>,
  document.getElementById("root")
);
