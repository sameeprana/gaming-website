import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-around bg-background/90 text-yellow">
      <div
        className="flex flex-col justify-center items-center w-full  gap-y-5
      ">
        <h1 className="uppercase italic font-[1000] text-[5rem] md:text-[10rem] font-sans z-1 w-[70%] lg:w-full flex items-center justify-center">
          just Game
        </h1>
        <span>V1.</span>
        <div className="flex  w-full h-[10rem] items-center justify-center gap-x-10 text-white ">
          <span
            className="group relative uppercase rounded-[4px] font-bold text-2xl hover:bg-red border-[2px] border-white h-[3.2rem] min-w-[9rem] p-1 bg-background flex items-center justify-center cursor-pointer"
            style={{
              clipPath:
                "polygon(25% 0%, 100% 0, 100% 50%, 83% 100%, 0 100%, 0% 50%)",
            }}>
            play
          </span>
          <span
            className="group relative uppercase rounded-[4px] font-bold text-2xl hover:bg-red border-[2px] border-white h-[3.2rem] min-w-[9rem] p-1 bg-background flex items-center justify-center cursor-pointer"
            style={{
              clipPath:
                "polygon(25% 0%, 100% 0, 100% 50%, 83% 100%, 0 100%, 0% 50%)",
            }}>
            Watch
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
