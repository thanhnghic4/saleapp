import { useRoute } from "./context/route";
import { ThemeProvider } from "./theme/theme";
import CustomerPage from "./pages/customer";
import MainPage from "./pages/main";
import OrderPage from "./pages/order";
import ProductPage from "./pages/product";
import ReportPage from "./pages/report";
import { useAppInit } from "./services";
import LoginPage from "./pages/login";

export default function App() {
  const { route } = useRoute();
  useAppInit();

  const renderPage = () => {
    switch (route) {
      case "main":
        return <MainPage />;
      case "order":
        return <OrderPage />;
      case "product":
        return <ProductPage />;
      case "customer":
        return <CustomerPage />;
      case "report":
        return <ReportPage />;
      case "login":
        return <LoginPage />;
      default:
        return <MainPage />; // fallback
    }
  };

  return <ThemeProvider>{renderPage()}</ThemeProvider>;
}

// history.pushState(null, '', '?r=5');
