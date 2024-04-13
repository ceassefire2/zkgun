import React from "react";
import joinZKlogo from "../assets/images/png/z-logo.png";
import joinZkgunHexagone from "../assets/images/png/zkgun-join-hexagon-image.png";
import { Telegram, Twitter } from "./common/Icons";

const JoinZkgun = () => {
  return (
    <>
      <div id="contact" className="relative">
        <img
          src={joinZkgunHexagone}
          alt="joinZkgunHexagone"
          className="absolute -start-[205px] rotate-[-51deg] -top-[16%] max-w-[180px] sm:max-w-[250px] md:max-w-[320px] lg:max-w-[505px] -z-[1] hidden sm:flex"
        />
        <div id="community" className="max-w-[1400px] mx-auto px-4 md:px-5 py-[30px] md:py-16 xl:py-20">
          <img
            className="mx-auto max-w-[52px] sm:max-w-14 md:max-w-16 lg:max-w-20 xl:max-w-[110px]"
            width={110}
            src={joinZKlogo}
            alt="zklogo"
          />
          <h2 className="max-w-[855px] custom-2xs:text-4xl uppercase mx-auto text-white text-center pt-6 font_actay_wide font-medium text-custom-md sm:text-5xl md:custom-2md lg:text-7xl !leading-[100%]">
            Join the zkGUN community
          </h2>
          <p className="text-white mx-auto text-center text-sm md:text-base !leading-[130%px] font-manrope font-normal max-w-[582px] py-4 text-opacity-60">
            Ready for a crypto experience that actually delivers on its promise
            of freedom? zkGUN is your opportunity to join the next big thing in
            decentralized finance. Let’s change the crypto world together.
          </p>
          <div className="mt-2 flex justify-center gap-[22px] sm:gap-3 w-full">
            <a
              target="_blank"
              href="https://web.telegram.org/"
              className="py-[15px] px-8 hover:scale-105 duration-300 rounded-[100px] w-full flex justify-center sm:w-auto link_gradient cursor-pointer"
            >
              <Telegram />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/"
              className="py-[15px] px-8 hover:scale-105 duration-300 rounded-[100px] w-full flex justify-center sm:w-auto bg-white cursor-pointer"
            >
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinZkgun;
