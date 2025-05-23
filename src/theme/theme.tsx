import React, {
  createContext,
  useState,
  useContext,
  type ReactNode,
  useEffect,
} from "react";
import { ThemeLinkCSSMap, ThemeStyleMap, type ThemeType } from "./interface";
import styled from "styled-components";

function createIfnotExistsCssRef(id: string, path: string) {
  const linkElement = document.getElementById(id);
  if (!linkElement) {
    const link = document.createElement("link");
    link.id = id; // đặt id
    link.rel = "stylesheet";
    link.href = path;
    document.head.appendChild(link);
  } else {
    const currentLink = linkElement.getAttribute("href");
    if (currentLink !== path) {
      linkElement.setAttribute("href", path);
    } else {
      console.log(`no need switch `);
    }
  }
}

function loadCSS(theme: ThemeType) {
  createIfnotExistsCssRef("dynamic-css-1", ThemeStyleMap[theme]);
  createIfnotExistsCssRef("dynamic-css-2", ThemeLinkCSSMap[theme]);
}
const Wrapper = styled.div``;
interface ThemeContextType {
  theme: ThemeType;
  setTheme: (newTheme: ThemeType) => void;
}

const defaultContext: ThemeContextType = {
  theme: "default",
  setTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setCurrentTheme] = useState<ThemeType>("default");

  useEffect(() => {
    loadCSS(theme);
  }, []);

  const setTheme = (newTheme: ThemeType) => {
    if (theme !== newTheme) {
      setCurrentTheme(newTheme);
      loadCSS(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook tiện lợi
export const useTheme = (): ThemeContextType => useContext(ThemeContext);
