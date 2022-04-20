import React from "react";

const SkillCard = ({ skillName, skillIcon,light }) => {
  return (
    <div className={light?" m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-blue-300"
                         :"shaddark m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-blue-300 text-gray-200 "}>
      {skillIcon}
      <p className="text-xl font-semibold mt-4">{skillName}</p>
    </div>
  );
};

export default SkillCard;
