import { ShareIcon } from "./svg/ShareIcon";
import { Title } from "./svg/Title";
import { Mentorhub, Toim, Ubcab } from "./svg/Section5pic";

export const Section5 = () => {
  return (
    <div className=" flex flex-col items-center px-4 py-16 gap-12 md:py-24 md:px-20">
      <div className="md:flex md:flex-col md:px-8 md:gap-12 flex flex-col gap-6">
        <div className="flex flex-col items-center gap-4 ">
          <Title text={"Work"} />
          <div className="text-gray-600 dark:text-gray-300">
            Some of the noteworthy projects I have built:
          </div>
        </div>
        <div className="flex flex-col md:w-full md:flex-row shadow-xl rounded-2xl">
          <div className="bg-gray-100 dark:bg-gray-600 p-8 md:w-[50%] md:p-12 md:my-auto md:rounded-l-2xl max-md:rounded-t-2xl">
            <Ubcab />
          </div>
          <div className="flex flex-col p-8 gap-6 md:w-[50%] md:p-12 md:rounded-r-2xl max-md:rounded-b-2xl dark:bg-gray-800">
            <div className="font-bold text-[20px]">UBCab</div>
            <div className="text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </div>
            <div className="flex gap-2 flex-wrap">
              <Title text={"React"} />
              <Title text={"Next.js"} />
              <Title text={"Typescript"} />
              <Title text={"Nest.js"} />
              <Title text={"PostgreSQL"} />
              <Title text={"Tailwindcss"} />
              <Title text={"Figma"} />
              <Title text={"Cypress"} />
              <Title text={"Storybook"} />
              <Title text={"Git"} />
            </div>
            <div>
              <ShareIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:w-full md:flex-row-reverse shadow-xl rounded-2xl">
          <div className="bg-gray-100 dark:bg-gray-600 p-8 md:w-[50%] md:p-12 md:my-auto md:rounded-r-2xl max-md:rounded-t-2xl">
            <Mentorhub />
          </div>
          <div className="flex flex-col p-8 gap-6 md:w-[50%] md:p-12 md:rounded-l-2xl max-md:rounded-b-2xl dark:bg-gray-800">
            <div className="font-bold text-[20px]">Mentorhub</div>
            <div className="text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </div>
            <div className="flex gap-2 flex-wrap">
              <Title text={"React"} />
              <Title text={"Next.js"} />
              <Title text={"Typescript"} />
              <Title text={"Nest.js"} />
              <Title text={"PostgreSQL"} />
              <Title text={"Tailwindcss"} />
              <Title text={"Figma"} />
              <Title text={"Cypress"} />
              <Title text={"Storybook"} />
              <Title text={"Git"} />
            </div>
            <div>
              <ShareIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:w-full md:flex-row shadow-xl rounded-2xl">
          <div className="bg-gray-100 dark:bg-gray-600 p-8 md:w-[50%] md:p-12 md:my-auto md:rounded-l-2xl max-md:rounded-t-2xl">
            <Toim />
          </div>
          <div className="flex flex-col p-8 gap-6 md:w-[50%] md:p-12 md:rounded-r-2xl max-md:rounded-b-2xl dark:bg-gray-800">
            <div className="font-bold text-[20px]">iToim</div>
            <div className="text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </div>
            <div className="flex gap-2 flex-wrap">
              <Title text={"React"} />
              <Title text={"Next.js"} />
              <Title text={"Typescript"} />
              <Title text={"Nest.js"} />
              <Title text={"PostgreSQL"} />
              <Title text={"Tailwindcss"} />
              <Title text={"Figma"} />
              <Title text={"Cypress"} />
              <Title text={"Storybook"} />
              <Title text={"Git"} />
            </div>
            <div>
              <ShareIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
