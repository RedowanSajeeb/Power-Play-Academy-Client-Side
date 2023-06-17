import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProvider from "./Provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <div className="mx-auto overflow-x-hidden dark:text-white dark:bg-black font">
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </div>
    </AuthProvider>
  </QueryClientProvider>
);
