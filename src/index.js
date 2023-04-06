import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import { store } from "./store/store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>
);
