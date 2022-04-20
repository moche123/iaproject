import React from "react";
import caricatyra from "../images/caricatura.jpg";
import peruflag from "../images/peruflag.png";
// import { FaWhatsapp } from "react-icons/fa";
// import { FaDribbble } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaRegEnvelope } from "react-icons/fa";

function Card({ name, title, light,social: { github, dribbble, twitter, email} }) {
  return (
    <div className="w-full">
      {/* <div className={light?"flex flex-col justify-center max-w-sm mx-auto bg-gray-200 shadow-xl rounded-xl p-5"
                           :"flex flex-col justify-center max-w-sm mx-auto bg-blue-800 shadow-xl rounded-xl p-5"}>
        <div className="">
          <img
            className="w-40 mx-auto shadow-xl rounded-full"
            src={caricatyra}
            alt="Profile face"
          />
        </div>
        <div className="text-center mt-5">
          <p className={light?"text-xl sm:text-2xl text-blue-800 font-semibold":"text-xl sm:text-2xl text-gray-100 font-semibold"}>
            {name}
          </p>
          <p className={light?"text-xs sm:text-base text-blue-700 pt-2 pb-4 px-5 w-auto inline-block"
                             :"text-xs sm:text-base text-white pt-2 pb-4 px-5 w-auto inline-block"}>
            {title}

          </p>
          <div className="w-100">
            <div className="flex flex-row justify-center mb-2">
              <img src={peruflag} width="40px" alt="" />
            </div>
          </div>

        </div>
      </div> */}
       <div >
          <img
          className={light?"shad w-40 mx-auto shadow-xl rounded-full":"shaddark w-40 mx-auto shadow-xl rounded-full"}
            src={caricatyra}
            alt="Profile face"
          />
        </div>
        <div className="text-center mt-5">
          <p className={light?"text-xl sm:text-2xl text-blue-800 font-semibold":"text-xl sm:text-2xl text-gray-100 font-semibold"}>
            {name}
          </p>
          <p className={light?"text-xs sm:text-base text-blue-700 pt-2 pb-4 px-5 w-auto inline-block"
                             :"text-xs sm:text-base text-pink-300 pt-2 pb-4 px-5 w-auto inline-block"}>
            {title}

          </p>
          <div className="w-100">
            <div className="flex flex-row justify-center mb-2">
              <img src={peruflag} width="40px" alt="" />
            </div>
          </div>

        </div>
    </div>
  );
}

export default Card;
