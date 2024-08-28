import { Upwork } from "./Upwork";

export const Experience = ({ title, list1, list2, list3, list4, date }) => {
  return (
    <div className="flex flex-col gap-4 md:flex md:flex-row md:gap-12 justify-between bg-white rounded-xl shadow-xl p-8 dark:bg-gray-700">
      <div>
        <Upwork />
      </div>
      <div className="flex flex-col-reverse gap-4 md:gap-12 md:flex md:flex-row">
        <div className="flex flex-col gap-4 ">
          <div className="font-bold text-[20px] dark:text-gray-300">
            {title}
          </div>
          <div className="text-[16px] text-gray-600 dark:text-gray-300">
            <li>{list1}</li>
            <li>{list2}</li>
            <li>{list3}</li>
            <li>{list4}</li>
          </div>
        </div>
        <div>{date}</div>
      </div>
    </div>
  );
};
