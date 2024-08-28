import { Call, Copy, Figma, Mail, Muur, Shuvuu } from "./svg/Section6icons";
import { Title } from "./svg/Title";

export const Section6 = () => {
  return (
    <div className=" flex flex-col items-center gap-12 px4 py-16 md:px-20 md:py-24 md:gap-6">
      <div className="flex flex-col items-center gap-4">
        <Title text={"Get in touch"} />
        <div className="flex flex-col text-center text-[20px] md:max-w-[576px] text-gray-600">
          <div className="dark:text-gray-300">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <Mail />
          <div className="text-[18px] font-semibold md:text-[36px]">
            tom@pinecone.mn
          </div>
          <Copy />
        </div>
        <div className="flex items-center gap-5">
          <Call />
          <div className="font-semibold text-[18px] md:text-[36px]">
            +976 88112233
          </div>
          <Copy />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-gray-600  dark:text-gray-300">
          You may also find me on these platforms!
        </div>
        <div className="flex justify-center gap-1 md:gap-2">
          <Muur />
          <Shuvuu />
          <Figma />
        </div>
      </div>
    </div>
  );
};
