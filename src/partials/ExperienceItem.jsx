
import React from "react";
import './Card.css'


function ExperienceItem({ item, light }) {

    return (

        <div className={light ? "cards content-center rounded-lg text-base mx-auto content-center text-center text-gray-600 leading-relaxed mt-4" 
                                : "cards content-center rounded-lg text-base mx-auto content-center text-center leading-relaxed mt-4 text-gray-100 shaddark"}>

            <div className={light?"max-w-sm content-center overflow-hidden":"max-w-sm content-center overflow-hidden"}>
         
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{item.title} ({item.company}) - {item.company}</div>
                    <p className="text-base">
                        <b>{item.duration}</b>
                    </p> <br />
                    <p className="text-base">
                        {item.activities}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {item.tools.map((tool) =>
                        <>

                            <span key={tool} 
                            className={light?"inline-block bg-gray-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                            :"inline-block bg-blue-600 rounded-full px-5 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2"}>
                                {/* <span>&#128508;</span> {tool} */}
                                <p > <span>🧊</span> {tool}</p>
                            </span>

                        </>
                    )}

                </div>
            </div>

            {/* <h2><b>{item.title}</b></h2>
            <h3>{item.company}</h3>
            <h4><b>Duration</b> {item.duration}</h4>
            <h4><b>Activities</b> {item.activities}</h4>
            <ul>
                {item.tools.map((tool) =>
                    <li key={tool}> <span>&#128508;</span> {tool}</li>
                )}
            </ul> */}
        </div>
    );


}

export default ExperienceItem;