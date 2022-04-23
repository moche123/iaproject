import React from "react";
import capturaCIMA from "../images/capturaCIMA.png";
import portadaCIMA from "../images/portadaCIMA.PNG";
import calendarioCIMA from "../images/calendarioCIMA.png";
import jiraUSS from "../images/jiraUSS.PNG";
import confirmUSS from "../images/confirmUSS.JPG";
import ulearning from "../images/ulearning.JPG";
import Bibliox1 from "../images/Bibliox1.JPG";
import Bibliox2 from "../images/Bibliox2.JPG";
import detalleAccesoConec from "../images/detalleAccesoConec.JPG";
import appUNPRGmaps from "../images/appUNPRGmaps.png";
import comidaApp from "../images/comidaApp.png";

import './Projects.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


const Projects = ({ projects, light, language }) => {
    return (
        <div className="max-w-6xl mx-auto mt-3 text-center">
            <h1 className={light ? "mt-8 text-2xl md:text-4xl text-center font-extrabold text-blue-500"
                : "mt-8 text-2xl md:text-4xl text-center font-extrabold text-blue-200"}> {language === 'EN' ? 'My job' : 'Mi trabajo'}</h1>

            <br /><br />

            <Carousel>

                <div>
                 
                    <img src={portadaCIMA} alt="" className="photoCertified" />
                </div>
                <div>
                 
                    <img src={capturaCIMA} alt="" className="photoCertified" />
                </div>


                <div>
                    
                    <img src={calendarioCIMA} alt="" className="photoCertified" />
                </div>
                <div>
                    
                    <img src={jiraUSS} alt="" className="photoCertified" />
                </div>

                <div>
                    
                    <img src={ulearning} alt="" className="photoCertified" />
                </div>

                <div>
                    
                    <img src={confirmUSS} alt="" className="photoCertified" />
                </div>

                <div>
                    
                    <img src={Bibliox1} alt="" className="photoCertified" />
                </div>

                <div>
                    
                    <img src={Bibliox2} alt="" className="photoCertified" />
                </div>
                <div>
                    
                    <img src={detalleAccesoConec} alt="" className="photoCertified" />
                </div>
          
                <div>
                    
                    <img src={appUNPRGmaps} alt="" className="photoCertified" />
                </div>
                <div>
                    
                    <img src={appUNPRGmaps} alt="" className="photoCertified" />
                </div>
                <div>
                    
                    <img src={comidaApp} alt="" className="photoCertified" />
                </div>
          

              


            </Carousel>

        </div>
    );
};

export default Projects;