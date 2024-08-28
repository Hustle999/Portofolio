import { Experience } from "./svg/ExperienceProp";
import { Title } from "./svg/Title";

export const Section4 = () => {
  return (
    <div className=" flex flex-col items-center px-4 py-16 md:px-8 md:py-24 gap-12">
      <div className="flex flex-col items-center gap-4">
        <Title text={"Experience"} />
        <div className="text-gray-600 dark:text-gray-300">
          Here is a quick summary of my most recent experiences:
        </div>
      </div>
      <Experience
        title={"Sr. Frontend Developer"}
        list1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        list2={"Ut pretium arcu et massa semper, id fringilla leo semper."}
        list3={"Sed quis justo ac magna."}
        list4={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        date={"Nov 2021 - Present"}
      />
      <Experience
        title={"Team Lead"}
        list1={"Sed quis justo ac magna."}
        list2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        list3={"Sed quis justo ac magna."}
        list4={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        date={"Jul 2017 - Oct 2021"}
      />
      <Experience
        title={"Full Stack Developer"}
        list1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        list2={"Ut pretium arcu et massa semper, id fringilla leo semper."}
        list3={"Sed quis justo ac magna."}
        list4={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        date={"Nov 2021 - Present"}
      />
    </div>
  );
};
