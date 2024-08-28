import { useState } from "react";
import { SunIcon } from "./svg/SunIcon";
import { MoonIcon } from "./svg/MoonIcon";

export const DarkTheme = () => {
  const [icon, setIcon] = useState(true);
  const [dark, setDark] = useState(true);

  const iconl = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
    setIcon(!icon);
  };
  return (
    <div className="flex items-center p-[6px] dark:bg-[#030712] bg-white">
      {icon ? (
        <button onClick={iconl}>
          <SunIcon />
        </button>
      ) : (
        <button onClick={iconl}>
          <MoonIcon />
        </button>
      )}
    </div>
  );
};
