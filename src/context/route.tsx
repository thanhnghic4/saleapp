import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { RouterType } from "../metadata/menu";
import { useAuth } from "../components/auth/auth";

interface RouteContextType {
  route: RouterType;
  setRoute: (newRoute: RouterType) => void;
}

const defaultRoute: RouterType = "main";

const RouteContext = createContext<RouteContextType>({
  route: defaultRoute,
  setRoute: () => {},
});

interface RouteProviderProps {
  children: ReactNode;
}

export const RouteProvider: React.FC<RouteProviderProps> = ({ children }) => {
  const [route, setCurrentRoute] = useState<RouterType>(defaultRoute);
  const { user } = useAuth();
  // Lấy route từ URL khi load trang
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get("page");

    if (!user) {
      redirect("login");
      return;
    }

    if (
      pageParam &&
      ["main", "order", "product", "customer", "report"].includes(pageParam)
    ) {
      setCurrentRoute(pageParam as RouterType);
    } else {
      redirect("main");
    }
  }, [user]);

  const redirect = (page: RouterType) => {
    setCurrentRoute(page);
    const newUrl = `?page=${page}`;
    window.history.pushState(null, "", newUrl);
  };

  const setRoute = (r: RouterType) => {
    let newRoute = r;
    if (!user) {
      newRoute = "login";
    }

    if (user && newRoute === "login") {
      redirect("main");
      return;
    }
    console.log("a1");
    console.log(`setroute ${newRoute}, currentRoute = ${route}`);
    if (newRoute !== route) {
      redirect(newRoute);
    }
  };

  return (
    <RouteContext.Provider value={{ route, setRoute }}>
      {children}
    </RouteContext.Provider>
  );
};

// Hook để dùng dễ hơn
export const useRoute = (): RouteContextType => useContext(RouteContext);
