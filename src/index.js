import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Wrap the App component with the Provider component
  // Pass the store as a prop to the Provider component
  // This will allow all the component to access the store behind the scenes
  // So the useSelector and useDispatch hooks will work as expected
  <Provider store={store}>
    <App />
  </Provider>
);
