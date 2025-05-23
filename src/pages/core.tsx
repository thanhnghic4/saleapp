import React from "react";
import { useRoute } from "../context/route";
import { MENU, type IMenuItem } from "../metadata/menu";
import ThemeSelection from "../theme/ThemeSelection";

type CorePageProps = {
  children: React.ReactNode;
};

const CorePage: React.FC<CorePageProps> = ({ children }) => {
  const { setRoute } = useRoute();

  return (
    <div id="main-page">
      <div id="main-page-left">
        <div className="main-page-left-menu-wrap">
          {MENU.map((menu: IMenuItem, index: number) => (
            <button
              id="main-page-left-menu-item"
              onClick={() => setRoute(menu.path)}
              key={index}
            >
              {menu.name}
            </button>
          ))}
        </div>
      </div>
      <div id="main-page-right">{children}</div>
      <ThemeSelection />
    </div>
  );
};

export default CorePage;
