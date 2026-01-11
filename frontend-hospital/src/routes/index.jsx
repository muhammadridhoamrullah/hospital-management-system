import { createBrowserRouter } from "react-router-dom";
import NonAuthLayout from "../layouts/(Non-Auth)/NonAuthLayout";
import { preventAuth, requireAuth } from "./authLoader";
import MainLayout from "../layouts/(Auth)/MainLayout";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
  {
    errorElement: <NotFound />,
    children: [
      {
        element: <NonAuthLayout />,
        loader: preventAuth,
        children: [
          { path: "/login", element: <div>Login</div> },
          {
            path: "/register",
            element: <div>Register</div>,
          },
        ],
      },
      {
        element: <MainLayout />,
        loader: requireAuth,
        children: [
          {
            path: "/",
            element: <div>Test</div>,
          },
        ],
      },
    ],
  },
]);

export default router;
