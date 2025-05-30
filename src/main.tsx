import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouteProvider } from "./context/route.tsx";
import { LoadingProvider } from "./components/loading/loading.tsx";
import { ToastProvider } from "./components/toast/toast.tsx";
import { AuthProvider } from "./components/auth/auth.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouteProvider>
        <ToastProvider>
          <LoadingProvider>
            <App />
          </LoadingProvider>
        </ToastProvider>
      </RouteProvider>
    </AuthProvider>
  </StrictMode>
);
