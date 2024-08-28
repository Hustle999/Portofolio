export const SkillProp = ({ icons, text }) => {
  return (
    <div className="flex flex-col w-[88px] h-[100px] items-center gap-2">
      {icons}
      {text}
    </div>
  );
};
