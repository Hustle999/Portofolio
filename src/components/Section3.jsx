import {
  Cypress,
  Express,
  Figma,
  Git,
  Javascript,
  MongoDB,
  Nest,
  Next,
  Node,
  Post,
  React,
  Sass,
  Socket,
  Storybook,
  Tailwindcss,
  Typescript,
} from "./svg/Skillicons";
import { SkillProp } from "./svg/SkillsProp";
import { Title } from "./svg/Title";

export const Section3 = () => {
  return (
    <div className=" flex flex-col items-center md:px-20 md:py-24 gap-12 px-4 py-16">
      <div className="flex flex-col items-center gap-4">
        <Title text={"Skills"} />
        <div className="text-gray-600 dark:text-gray-300">
          The skills, tools and technologies I am really good at:
        </div>
      </div>
      <div className="grid justify-items-center w-full grid-cols-3 gap-y-4 md:grid-cols-8 md:gap-y-12 dark:text-gray-400">
        <SkillProp icons={<Javascript />} text={"Javascript"} />
        <SkillProp icons={<Typescript />} text={"Typescript"} />
        <SkillProp icons={<React />} text={"React"} />
        <SkillProp icons={<Next />} text={"Next.js"} />
        <SkillProp icons={<Node />} text={"Node.js"} />
        <SkillProp icons={<Express />} text={"Express.js"} />
        <SkillProp icons={<Nest />} text={"Nest.js"} />
        <SkillProp icons={<Socket />} text={"Socket.js"} />
        <SkillProp icons={<Post />} text={"PostgreSQL"} />
        <SkillProp icons={<MongoDB />} text={"MongoDB"} />
        <SkillProp icons={<Sass />} text={"Sass.Scss"} />
        <SkillProp icons={<Tailwindcss />} text={"Tailwindcss"} />
        <SkillProp icons={<Figma />} text={"Figma"} />
        <SkillProp icons={<Cypress />} text={"Cypress"} />
        <SkillProp icons={<Storybook />} text={"Storybook"} />
        <SkillProp icons={<Git />} text={"Git"} />
      </div>
    </div>
  );
};
