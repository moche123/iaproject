import React from "react";
import SkillCard from "./SkillCard";

function Skills({ skills,light }) {
  return (
    <div className="flex flex-col sm:flex-row align-center justify-center max-w-6xl mx-auto mt-8">
      {skills.map((skill) => {
        return (
          <SkillCard light={light} key={skill.skillName} skillName={skill.skillName} skillIcon={skill.skillIcon} />
        );
      })}
    </div>
  );
}

export default Skills;
