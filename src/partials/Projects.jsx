import React from "react";
import gentleman from "../images/gentleman.jpg";
import edullka from "../images/certiprof.jpg";
import certiprof from "../images/edullka.jpg";
import english from "../images/english.jpg";
import winner from "../images/winner.PNG";
import './Projects.css';

const Projects = ({ projects, light, language }) => {
    return (
        <div className="max-w-6xl mx-auto mt-3 text-center">
            <h1 className={light?"mt-8 text-2xl md:text-4xl text-center font-extrabold text-blue-500"
                                :"mt-8 text-2xl md:text-4xl text-center font-extrabold text-blue-200"}> { language==='EN'? 'My personal achievements':'Distinciones personales' }🧑🏻🎉</h1>
           
           <br />
            <div className="px-auto content mt-2">

                <img src={gentleman} alt="" className="photoCertified shaddark"/>
            </div>
            <br />
            <div className="px-auto content mt-2">

                <img src={winner} alt="" className="photoCertified shaddark"/>
            </div>
            <br />
            <div className="px-auto content mt-2">

                <img src={edullka} alt="" className="photoCertified shaddark"/>
            </div>
            <br />
            <div className="px-auto content mt-2">

                <img src={certiprof} alt="" className="photoCertified shaddark"/>
            </div>
            <br />
            <div className="px-auto content mt-2">

                <img src={english} alt="" className="photoCertified shaddark"/>
            </div>
           
        </div>
    );
};

export default Projects;