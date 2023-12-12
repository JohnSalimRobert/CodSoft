import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#393E46]">
      <div className="flex flex-col w-full h-full justify-center items-center">
        <div className="max-w-[1240px] w-full sm:grid grid-cols-2 gap-8 p-4">
          <div className="flex flex-col">
          <div className="sm:text-right pb-4 pl-4">
            <p className="text-4xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent inline md:text-5xl font-bold">About</p>
          </div>
        <div className="max-w-[1240px] w-full">
          <div className="sm:text-right pb-8 pl-4 ">
            <p className="text-2xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent inline md:text-5xl font-bold">Hello, I'm John or you can call me Salim. Welcome to my portfolio website</p>
          </div>
        </div>
          </div>
          <div>kas</div>
        </div>
      </div>
    </div>
  );
};

export default About;