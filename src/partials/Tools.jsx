import React from "react";

import './Projects.css';

const Tools = ({ light, tools, language }) => {
    return (
        <div className="max-w-6xl mx-auto mt-3 text-center">
            <h1 className={light ? "mt-8 text-2xl md:text-4xl text-center font-extrabold text-blue-500"
                : "mt-8 text-2xl md:text-4xl text-center font-extrabold text-blue-200"}> {language === 'EN' ? 'Tools I love' : 'Herramientas preferidas'}</h1>


            <br />
            {tools.map((item) =>

                <div key={item.key} className="max-w-6xl">

                    <div className={light ? "mb-1 text-base font-large languagesListItem mr-1" : "mb-1 text-base font-large languagesListItem mr-1 text-white"}>
                        
                        {
                                        item.type===1?'Advanced': item.type===2 ? 'Intermediate':'Basic'
                                        
                                        }

                    </div>
                    <div className="w-full rounded-full">
                        <div className={light ? `bg-blue-600   font-medium text-blue-100 text-center p-3 leading-none rounded-full w-100`
                            : "bg-pink-700   font-medium text-white text-bold text-center p-3 leading-none rounded-full w-100"}>
                            <b>{item.name}</b>
                        </div>
                    </div>

                    <br />
                    <br />
                </div>




            )}


        </div>
    );
};

export default Tools;