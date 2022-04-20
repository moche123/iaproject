import React, { useEffect, useState } from "react";
import "./App.css";
import About from "./partials/About";
import Card from "./partials/Card";
// import Footer from "./partials/Footer";
import Projects from "./partials/Projects";
import Skills from "./partials/Skills";
import data from "./assets/data";
import spanishData from "./assets/spanishData";
import AOS from "aos";
import "aos/dist/aos.css";
import Experience from "./partials/Experience";
import Tools from "./partials/Tools";
import Footer from "./partials/Footer";



function App() {
  // let light = true
  const [light, setLight] = useState(true);
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  function handleClick(e) {
    // e.preventDefault();
    setLight(!light);
  }


  function handleLanguage(e) {
    // e.preventDefault();
    language === 'EN' ? setLanguage('ES') : setLanguage('EN');
  }


  return (
    <div className={light ? "pt-10 px-3 sm:px-3 bg-gray-100" : "pt-10 px-3 sm:px-3 bg-blue-900"}>
      <div data-aos="fade-down" data-aos-duration="800">
        <Card light={light} name={language === 'EN' ? data.name : spanishData.name} title={language === 'EN' ? data.title : spanishData.title} social={data.social} />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" className="relative">
        <About
          light={light}
          title={language === 'EN' ? data.about.title : spanishData.about.title}
          description={language === 'EN' ? data.about.description : spanishData.about.description} />
        <Skills
          light={light}
          skills={language === 'EN' ? data.skills : spanishData.skills}
        />
        <Experience
          light={light}
          title={language === 'EN' ? data.experienceTitle : spanishData.experienceTitle}
          experience={language === 'EN' ? data.experience : spanishData.experience}
        />
        <br />
         <Tools
         language={language}
          light={light}
          tools={language === 'EN' ? data.tools : spanishData.tools}
        />
        <Projects
          language={language}
          light={light}
          projects={language === 'EN' ? data.projects : spanishData.projects}
        />
        <Footer github={data.social.github} light={light} className="absolute bottom-0 h-3" language={language} />
      </div>
      <div className={light ? "floatButton m-1 bg-blue-200 p-3 rounded-lg" : "floatButton m-1 bg-blue-200 p-3 rounded-lg"}>


        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input onClick={handleClick} type="checkbox" name="toggle"
            className={light ? "toggle-checkbox absolute block w-6 h-6 rounded-full bg-yellow-400  appearance-none cursor-pointer"
              : "toggle-checkbox absolute block w-6 h-6 rounded-full bg-blue-400  appearance-none cursor-pointer"} />
          <label className="toggle-label block overflow-hidden h-6 rounded-full bg-black cursor-pointer"></label>
        </div>
        <label className="text-xs text-gray-700">{light ? '🟡' : '🌙'}</label>



        <div className="mt-3">
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input onClick={handleLanguage} type="checkbox" name="toggle"
              className={light ? "toggle-checkbox2 absolute block w-6 h-6 rounded-full bg-red-700  appearance-none cursor-pointer"
                : "toggle-checkbox2 absolute block w-6 h-6 rounded-full bg-yellow-400  appearance-none cursor-pointer"} />
            <label className="toggle-label block overflow-hidden h-6 rounded-full bg-black cursor-pointer"></label>
          </div>
          <label className="text-xs text-gray-700"> <b>{language}</b></label>
        </div>
      </div>



    </div>
  );
}
export default App;
