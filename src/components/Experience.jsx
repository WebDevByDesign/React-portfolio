import React from 'react'

import html from "../assets/portfolio/html.webp"
import css from "../assets/portfolio/css.webp"
import javascript from "../assets/portfolio/javascript.webp"
import nodejs from "../assets/portfolio/nodejs.webp"
import reactImg from "../assets/portfolio/react.png"
import tailwind from "../assets/portfolio/tailwind.png"
import github from "../assets/portfolio/github.png"
import mongo from "../assets/portfolio/mongo.jpeg"
import insomnia from "../assets//portfolio/insomia.png"
//  Array of techs
const Experience = () => {
    const techs = [
      {
        id: 1,
        src: html,
        title: "HTML",
        style: "shadow-pink-200",
      },
      {
        id: 2,
        src: css,
        title: "CSS",
        style: "shadow-pink-200",
      },
      {
        id: 3,
        src: javascript,
        title: "JavaScript",
        style: "shadow-pink-200",
      },
      {
        id: 4,
        src: nodejs,
        title: "Node",
        style: "shadow-pink-200",
      },
      {
        id: 5,
        src: reactImg,
        title: "React",
        style: "shadow-pink-200",
      },
      {
        id: 6,
        src: tailwind,
        title: "Tailwind",
        style: "shadow-pink-200",
      },
      {
        id: 7,
        src: github,
        title: "GitHub",
        style: "shadow-pink-200",
      },
      {
        id: 8,
        src: mongo,
        title: "Mongo DB",
        style: "shadow-pink-200",
      },
      {
        id: 9,
        src: insomnia,
        title: "Insomnia",
        style: "shadow-pink-200",
      },
    ];
  
    return (
      <div
        name="experience"
        className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className="text-4xl font-bold border-b-4 border-pink-200 p-2 inline">
              Experience
            </p>
            <p className="py-6">Below are the technologies I've worked with:</p>
          </div>
  
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

        {/* loop over/destructure */}
            {
            techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;
  