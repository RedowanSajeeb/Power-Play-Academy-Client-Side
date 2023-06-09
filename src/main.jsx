import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProvider from "./Provider/AuthProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <div className="max-w-screen-2xl mx-auto">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  </AuthProvider>
);
