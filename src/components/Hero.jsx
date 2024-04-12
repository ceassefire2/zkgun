import React from "react";
import { HeroLeftHexagon, HeroRightHexagon, NoKycIcon } from "./common/Icons";
import CommonBtn from "./common/CommonBtn";
import heroImg from "../assets/images/png/hero-img.png";
const Hero = () => {
  return (
    <div className="mt-[70px] text-center px-4 relative">
      <span className="hero_left_hexagon absolute -start-[40%] -rotate-12 sm:rotate-0 md:-start-44 top-16 -z-[1]">
        <HeroLeftHexagon />
      </span>
      <span className="hero_right_hexagon absolute -rotate-[16deg] sm:rotate-0 custom-sm:-end-[40%] -end-[35%] sm:-end-44 -bottom-24 sm:-bottom-10 lg:bottom-16 xl:bottom-24 -z-[1]">
        <HeroRightHexagon />
      </span>
      <div className="bg-scarlet-gradient blur-[160px] h-[450px] w-[160px] absolute top-[36%] -end-36 rounded-full hidden sm:block"></div>
      <p className="flex items-center gap-3 text-primary font-manrope text-base font-bold justify-center uppercase">
        <NoKycIcon /> No KYC
      </p>
      <h1 className="font_actay_wide text-custom-lg md:text-7xl lg:text-8xl xl:text-custom-xl text-white font-bold uppercase !leading-[100%] my-4">
        Break the <br /> Chains
      </h1>
      <p className="font-manrope font-normal text-xl text-white ">
        Non-Custodial, Decentralized & Anonymous. Freedom in every transaction
      </p>
      <div className="custom-sm:w-full mt-12 mb-10">
        <CommonBtn btntext={"swap now"} />
      </div>
      <img
        className="max-w-[500px] sm:max-w-[600px] lg:max-w-[700px] xl:max-w-[836px] w-full mx-auto px-5"
        src={heroImg}
        alt="hero img"
      />
    </div>
  );
};

export default Hero;
