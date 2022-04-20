import React from "react";
import ExperienceItem from "./ExperienceItem";


function Experience({  light, title, experience }) {
  return (
    <div className="max-w-6xl mx-auto mt-16">
      <p className={light?"text-2xl md:text-4xl font-bold text-center text-blue-500":"text-2xl md:text-4xl font-bold text-center text-blue-200"}>{title} </p>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-center">
        {experience.map((item) =>
    
            <ExperienceItem  key={item.id} item={item} light={light}></ExperienceItem>
          
        )}
      </div>

      <p className={light?"text-base text-left md:text-center text-gray-600 leading-relaxed mt-4":"text-base text-left md:text-center leading-relaxed mt-4 text-gray-100"}>
        {/* <h2><b>{experience[0].title}</b></h2> */}
      </p>
    </div>
  );
}

export default Experience;
