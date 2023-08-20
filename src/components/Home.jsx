import React from "react";
import HeroImage from "../assets/blaskoProfile.jpeg";
import { TbArrowRightRhombus } from "react-icons/tb";
import { Link } from "react-scroll";
// Main page
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-500"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Full Stack Web Developer:
          </h2>
          <p className="text-gray-300 py-4 max-w-md px-2">
          a developer or engineer who can build both the front end and the back end of a website.
          </p>
            <p className="text-pink-200 py-4 max-w-md px-2">
            As a kid I loved tinkering around with computers and building small
            and simple web pages. As an adult, decided to check out the proper web
            development version. And here I am!
            </p>
            < p className="text-gray-300 py-4 max-w-md px-2">
            Welcome to my React portfolio. AKA my work in progress.
            </p>
            
          <div>
          <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from from-pink-200 to-pink-300 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <TbArrowRightRhombus size={25} className="ml-1" />
              </span>
           </Link>
          </div>
      </div>
     <div>
  <img
    src={HeroImage}
    alt="my profile"
    className="rounded-2xl mx-auto w-3/4 py-4 md:py-0"
    max-width="200px"
  max-height="200px"
  />
</div>
</div>
    </div>
  );
};

export default Home;
