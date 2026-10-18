import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router";
import { router } from "./router";
import { CurrencyProvider } from "./components/CurrencyProvider";
import './index.css'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CurrencyProvider>
      <RouterProvider router={router} />
    </CurrencyProvider>
  </StrictMode>
);
