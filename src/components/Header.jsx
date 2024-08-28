import { useState } from "react";
import { MenuIcon } from "./svg/MenuIcon";
import { Tomtext } from "./svg/Tomtext";
import { Menu } from "./svg/Menu";
import { DarkTheme } from "./DarkTheme";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleMenu = (event) => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="md:px-20 p-4 flex items-center justify-between">
      <Tomtext />
      <button className="md:hidden " onClick={handleMenu}>
        <MenuIcon />
        {isOpenMenu ? <Menu handleMenu={handleMenu} /> : <div></div>}
      </button>
      <div className="max-md:hidden flex items-center gap-6">
        <div className="flex gap-6 text-gray-600 dark:text-gray-300">
          <div>About</div>
          <div>Work</div>
          <div>Testimonials</div>
          <div>Contact</div>
        </div>
        <div className="w-[1px] h-[24px] bg-gray-100"></div>
        <div className="flex gap-[16px]">
          <DarkTheme />
          <button className="bg-black dark:bg-white dark:text-black text-white rounded-xl px-4 p-[6px]">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};
