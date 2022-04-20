import React from "react";

function About({ title, description, light }) {
  return (
    <div className="max-w-6xl mx-auto mt-16">
      <p className={light?"text-2xl md:text-4xl font-bold text-center text-blue-500":"text-2xl md:text-4xl font-bold text-center text-blue-200"}>{title} </p>
      <p className={light?"text-justify	text-base text-left md:text-center text-gray-600 leading-relaxed mt-4":"text-justify	text-base text-left md:text-center leading-relaxed mt-4 text-gray-100"}>
        {description}
      </p>
    </div>
  );
}

export default About;
