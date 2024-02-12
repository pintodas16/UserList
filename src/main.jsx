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
import UserDetailsPage from "./pages/UserDetailsPage.jsx";
import { UserContextProvider } from "./contexts/userContext.jsx";
import { SortSearchContextProvider } from "./contexts/SortContext.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<FouOhFour />}>
      <Route path="" element={<HomePage />} />
      <Route path="user/:id" element={<UserDetailsPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <SortSearchContextProvider>
        <RouterProvider router={router} />
      </SortSearchContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
