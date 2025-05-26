import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouteProvider } from "./context/route.tsx";
import { LoadingProvider } from "./components/loading/loading.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouteProvider>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </RouteProvider>
  </StrictMode>
);
