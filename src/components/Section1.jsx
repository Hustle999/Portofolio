import { useState } from "react";
import { GreenIcon } from "./svg/GreenIcon";
import { PointIcon } from "./svg/PointIcon";
import { Section1CatIcon } from "./svg/Section1CatIcon";
import { Section1FigmaIcon } from "./svg/Section1FigmaIcon";
import { Section1TwitterIcon } from "./svg/Section1TwitterIcon";

export const Section1 = () => {
  // const [number, setNumber] = useState(0);

  // const plusNumber = () => {
  //   setNumber(number + 1);
  // };

  // const minesNumber = () => {
  //   setNumber(number - 1);
  // };

  // return (
  //   <div>
  //     <button onClick={plusNumber}>nemdeg</button>
  //     <button onClick={minesNumber}>hasdag</button>
  //     <h1>{number}</h1>
  //   </div>
  return (
    <div className="md:px-20 md:py-24  px-4 py-16">
      <div className="flex flex-col gap-12 md:flex md:flex-row-reverse justify-between items-center">
        <div className="">
          <img src="./Firstpropic.jpg" alt="" />
        </div>
        <div className="flex flex-col gap-2 md:w-[50%]">
          <div className="text-[36px] font-bold">Hi, I’m Tom 👋</div>
          <div className=" flex flex-col gap-12">
            <div className="text-gray-600 dark:text-gray-300">
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </div>
            <div className="flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6">
                  <PointIcon />
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Ulaanbaatar, Mongolia
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6">
                  <GreenIcon />
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Available for new projects
                </div>
              </div>
            </div>
            <div className="flex">
              <Section1CatIcon />
              <Section1TwitterIcon />
              <Section1FigmaIcon />
              <div>hi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
