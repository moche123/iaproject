import React from "react";
import gentleman from "../images/gentleman.jpg";
import edullka from "../images/certiprof.jpg";
import certiprof from "../images/edullka.jpg";
import english from "../images/english.jpg";
import winner from "../images/winner.PNG";
import './Projects.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Projects = ({ projects, light, language }) => {
    return (
        <div className="max-w-6xl mx-auto mt-3 text-center">
            <h1 className={light ? "mt-8 text-2xl md:text-4xl text-center font-extrabold text-blue-500"
                : "mt-8 text-2xl md:text-4xl text-center font-extrabold text-blue-200"}> {language === 'EN' ? 'My personal achievements' : 'Distinciones personales'}🧑🏻🎉</h1>

            <br /><br />

            <Carousel>

                <div>
                    <h1 className={light ? "titleCarouselDark" : "titleCarouselLight"}>
                        {
                            language === 'EN' ? '2° place Hackaton (Gentleman programming)' : '2° Puesto Hackatón (Gentleman programming)'
                        }
                    </h1>
                    <img src={gentleman} alt="" className="photoCertified " />
                </div>

                <div>
                    <h1 className={light ? "titleCarouselDark" : "titleCarouselLight"}>
                        {
                            language === 'EN' ? '1° place Hackaton "Semana de integración" (Gentleman programming)' : '1° Puesto Hackatón "Semana de integración" (EPICI UNPRG)'
                        }
                    </h1>
                    <img src={winner} alt="" className="photoCertified " />
                </div>

                <div>
                    <h1 className={light ? "titleCarouselDark" : "titleCarouselLight"}>
                        {
                            language === 'EN' ? 'Python speaker certification (EDULLKA)' : 'Certificación de ponente Python (EDULLKA)'
                        }
                    </h1>
                    <img src={edullka} alt="" className="photoCertified " />
                </div>

                <div>
                    <h1 className={light ? "titleCarouselDark" : "titleCarouselLight"}>
                        {
                            language === 'EN' ? 'SFPC Certification (CERTIPROF)' : 'Certificación SFPC (CERTIPROF)'
                        }
                    </h1>
                    <img src={certiprof} alt="" className="photoCertified " />
                </div>

                <div>
                    <h1 className={light ? "titleCarouselDark" : "titleCarouselLight"}>
                        {
                            language === 'EN' ? 'Technical English course certification' : 'Certificación carrera inglés (Global English)'
                        }
                    </h1>
                    <img src={english} alt="" className="photoCertified " />
                </div>


            </Carousel>

        </div>
    );
};

export default Projects;