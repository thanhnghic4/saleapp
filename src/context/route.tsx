import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { RouterType } from "../metadata/menu";

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

  // Lấy route từ URL khi load trang
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get("page");

    if (
      pageParam &&
      ["main", "order", "product", "customer", "report"].includes(pageParam)
    ) {
      setCurrentRoute(pageParam as RouterType);
    }
  }, []);

  const setRoute = (newRoute: RouterType) => {
    console.log("a1");
    console.log(`setroute ${newRoute}, currentRoute = ${route}`);
    if (newRoute !== route) {
      setCurrentRoute(newRoute);
      const newUrl = `?page=${newRoute}`;
      window.history.pushState(null, "", newUrl);
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
