import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import FouOhFour from "./components/FourooFour.jsx";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import UserDetails from "./pages/UserDetailsPage.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<FouOhFour />}>
      <Route path="" element={<HomePage />} />
      <Route path="user/:id" element={<UserDetails />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
