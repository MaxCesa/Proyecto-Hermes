import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./Assets/main.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store.ts";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>
);
