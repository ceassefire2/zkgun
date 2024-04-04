import React from "react";
import joinZKlogo from "../assets/images/png/download.png";
import CommonBtn from "./common/CommonBtn";

const JoinZkgun = () => {
  return (
    <>
      <div className="max-w-[1368px] mx-auto px-4 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
        <img
          className="mx-auto"
          height={120}
          width={110}
          src={joinZKlogo}
          alt="zklogo"
        />
        <h2 className="max-w-[855px] mx-auto text-white text-center pt-6 font_over font-medium text-2xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[72px]">
          Join the zkGUN community
        </h2>
        <p className="text-white mx-auto text-center text-sm md:text-base md:leading-[20.8px] font-manrope font-normal max-w-[583px] py-4 text-opacity-60">
          Ready for a crypto experience that actually delivers on its promise of
          freedom? zkGUN is your opportunity to join the next big thing in
          decentralized finance. Let’s change the crypto world together.
        </p>
        <div className="mt-2 flex justify-center">
          <CommonBtn btntext="Swap now" />
        </div>
      </div>
    </>
  );
};

export default JoinZkgun;
