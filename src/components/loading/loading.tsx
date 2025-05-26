import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import "./loading.css";
import Loader from "./loader";

interface LoadingContextType {
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  loading: false,
  setLoading: () => {},
});

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <div
        className={
          loading
            ? "loading-common loading-enable"
            : "loading-common loading-disable"
        }
      >
        <Loader />
        {children}
      </div>
    </LoadingContext.Provider>
  );
};

// Hook để dùng dễ hơn
export const useLoading = (): LoadingContextType => useContext(LoadingContext);
