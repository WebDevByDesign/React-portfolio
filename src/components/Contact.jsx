import React from "react";
// Form endpoint from getform.io & add POST method
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-pink-200 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-200">
            Contact
          </p>
          <p className="py-6">Fill out the form below to say hello:</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/4270e227-7cab-45b0-b350-8e5ba73de4a6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="What is your name?"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="What is your email?"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="What would you like to say?"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-pink-200 to-white-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Talk soon!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
