import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WithState from "./components/pages/WithState/WithState";
import WithRedux from "./components/pages/WithRedux/WithRedux";
import Layout from "./components/Templates/Layout/Layout";
import NoMatch from "./components/Templates/NoMatch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <WithState />,
      },
      {
        path: "with-redux",
        element: <WithRedux />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
