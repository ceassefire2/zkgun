import React from "react";
import joinZKlogo from "../assets/images/png/z-logo.png";
import CommonBtn from "./common/CommonBtn";
import { Telegram, Twitter } from "./common/Icons";

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
        <h2 className="max-w-[855px] uppercase mx-auto text-white text-center pt-6 font_actay_wide font-medium text-[40px] sm:text-5xl md:text-6xl lg:text-7xl !leading-[100%]">
          Join the zkGUN community
        </h2>
        <p className="text-white mx-auto text-center text-sm md:text-base !leading-[130%px] font-manrope font-normal max-w-[582px] py-4 text-opacity-60">
          Ready for a crypto experience that actually delivers on its promise of
          freedom? zkGUN is your opportunity to join the next big thing in
          decentralized finance. Let’s change the crypto world together.
        </p>
        <div className="mt-2 flex justify-center gap-[22px] sm:gap-3 w-full">
          <a href="/" className="py-[15px] px-8 rounded-[100px] w-full flex justify-center sm:w-auto link_gradient cursor-pointer">
            <Telegram/>
         </a>
          <a href="/" className="py-[15px] px-8 rounded-[100px] w-full flex justify-center sm:w-auto bg-white cursor-pointer">
            <Twitter/>
         </a>
        </div>
      </div>
    </>
  );
};

export default JoinZkgun;
