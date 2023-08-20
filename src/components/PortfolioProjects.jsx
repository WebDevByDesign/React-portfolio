import React from "react";
import cantHaveIt from '../assets/portfolio/cantHaveItProject.png';
import sheCodesProject from '../assets/portfolio/sheCodesProject.png';
import hobbySquad from '../assets/portfolio/hobbySquadMain.png';

const Portfolio = () => {

  const portfolios = [
    {
        id: 1,
        src:sheCodesProject
    },
    {
      id: 2,
      src:cantHaveIt
  },
  {
    id: 3,
    src:hobbySquad
},
  ]
  return(
  <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
    <div className="max-w-sreen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-pink-200">Portfolio</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
      {portfolios.map(({ id, src }) => (

        <div key={id} className="shadow-md shadow-gray-600 rounded-md">
          
          <img src={src} 
          alt="project"
          className="rounded-md duration-200 hover:scale-105" />
          <div className=" flex items-center justify-center">
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">DEPLOYED</button>
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">REPO</button>
          </div>
          </div>
))}
     
        </div>
      </div>
    </div>
 
  );
};

export default Portfolio;
