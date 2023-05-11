import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import { RecoilRoot } from "recoil";
import ProtectedAuthRoute from "./routes/ProtectedAuthRoute.jsx";
import NeedAuthRoute from "./routes/NeedAuthRoute.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/library",
        element: (
          <NeedAuthRoute>
            <div>Library</div>
          </NeedAuthRoute>
        ),
      },
      {
        path: "/playlist/new",
        element: (
          <NeedAuthRoute>
            <div>New Playlist</div>
          </NeedAuthRoute>
        ),
      },
      {
        path: "/liked",
        element: (
          <NeedAuthRoute>
            <div>Liked</div>
          </NeedAuthRoute>
        ),
      },
    ],
  },
  {
    path: "/signup",
    element: (
      <ProtectedAuthRoute>
        <Signup />
      </ProtectedAuthRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <ProtectedAuthRoute>
        <Login />
      </ProtectedAuthRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={routes} />
    </RecoilRoot>
  </React.StrictMode>
);
