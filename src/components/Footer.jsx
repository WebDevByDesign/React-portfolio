import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      label:"LinkedIn",
      url: "https://www.linkedin.com/in/rachaeljaneblasko/",
    },
    {
      id: 2,
      label: "GitHub",
      url: "https://github.com/missblasko",
    },
  
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-pink-200 bg-black fixed bottom-0">
      <ul className="hidden md:flex">
        {links.map(({ id, label, url }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalizefont-medium text-pink-200 hover:scale-105 duration-100"
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-pink-200 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-pink-200">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Footer;
