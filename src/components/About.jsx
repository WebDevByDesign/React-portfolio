import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-200">
            About</p>
        </div>
        <p className="text-xl mt-20">Hi there! My name is Rachael Blasko, I am a San Diego native and currently reside in the Lake of the Ozarks, Missouri, with my Mainecoon cat named Layla. </p>

        <br />

        <p className="text-xl">A few hobbies of mine include hiking, Yoga and photography.</p>
         <br />

        <p className="text-xl">Thanks for stopping by ✌️ Namaste 🙏</p>
      </div>
    </div>
  );
};

export default About;
