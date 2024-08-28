import { DarkTheme } from "../DarkTheme";
import { Tomtext } from "./Tomtext";
import { Xbutton } from "./Xbutton";

export const Menu = ({ handleMenu }) => {
  return (
    <div className=" relative w-screen h-screen dark:bg-black">
      <div className="flex justify-between p-4">
        <Tomtext />
        <Xbutton onClick={handleMenu} />
      </div>
      <div className="flex flex-col items-start gap-4 p-4 text-gray-600 dark:text-gray-300 font-normal">
        <div>About</div>
        <div>Work</div>
        <div>Testimonials</div>
        <div>Contact</div>
      </div>
      <div className="flex flex-col gap-4 p-4 font-light text-gray-600">
        <div className="flex justify-between items-center">
          <div className="dark:text-gray-300">Switch Theme</div>
          <DarkTheme />
        </div>
        <button className="bg-black text-white dark:bg-white dark:text-black rounded-xl px-4 py-[6px]">
          Download CV
        </button>
      </div>
    </div>
  );
};
