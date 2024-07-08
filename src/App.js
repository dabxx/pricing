import { BrowserRouter, useRoutes, Navigate } from "react-router-dom";

// import { useDarkMode } from "./hooks";

import Layout from "./pages/Layout";
import PricingTable from "./pages/PricingTable";
import PageNotFound from "./pages/PageNotFound";

const appContext = process.env.REACT_APP_CONTEXT_URI;
console.log("appContext:", appContext);

const RoutesComponent = () => {
  return useRoutes([
    { path: "/", element: <Navigate to={"/app"} /> },
    {
      path: "/app",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to={"pricing-table"} />,
        },
        {
          path: "pricing-table",
          element: <PricingTable />,
        },
      ],
    },
    {
      path: "*",
      element: <Layout />,
      children: [
        {
          path: "*",
          element: <PageNotFound code={"404"} />,
        },
      ],
    },
  ]);
};

function App() {
  // useDarkMode();

  return (
    <BrowserRouter basename={appContext}>
      <RoutesComponent />
    </BrowserRouter>
  );
}

export default App;
