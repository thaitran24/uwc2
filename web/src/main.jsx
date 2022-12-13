import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./ErrorPage";
import Login from "./routes/login/LoginPage";
import HomePage from "./routes/homepage/HomePage";
import Assign from "./routes/assign/Assign";
import Chat from "./routes/chat/Chat";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // TODO: Remove this when we have a proper login page
    loader: () => {
      // Temporary redirect to login page
      // return redirect("/login");
      // For UI development purposes, return null
      return null;
    },
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/assign/:employeeId",
        element: <Assign />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
