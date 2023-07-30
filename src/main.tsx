import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import store from "./assets/Redux/Store/Store.tsx";
import React from "react";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
