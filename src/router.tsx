import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import FAQ from "./pages/Faq";
import Catalog from "./pages/Catalog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
      { path: "faq", element: <FAQ /> },
      { path: "catalog", element: <Catalog /> },
    ],
  },
]);