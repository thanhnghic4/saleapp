import React, {
  createContext,
  useState,
  useContext,
  type ReactNode,
  useEffect,
} from "react";
import type { IStaff } from "../../services/interface";
import { Api } from "../../services";

type AuthContextType = {
  user: IStaff | null;
  login: (username: string, password: string, isRemember: boolean) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IStaff | null>(null);

  const login = (username: string, password: string, isRemember: boolean) => {
    Api.login({ username, password }).then((result) => {
      if (result?.data && !result?.detail) {
        setUser(result?.data);
        if (isRemember) {
          localStorage.setItem("cacheLogin", JSON.stringify(result?.data));
        }
      } else {
        setUser(null);
      }
    });
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    console.log(`login with cache`);
    try {
      const cache = localStorage.getItem("cacheLogin");
      if (cache) {
        const cacheJson: IStaff = JSON.parse(cache);
        if (cacheJson?.name && cacheJson?.password) {
          login(cacheJson.name, cacheJson.password, true);
        }
      }
    } catch (e) {
      console.log(`login error ${JSON.stringify(e)}`);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => useContext(AuthContext);
