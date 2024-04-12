import React from "react";
import { HeroLeftHexagon, HeroRightHexagon, NoKycIcon } from "./common/Icons";
import CommonBtn from "./common/CommonBtn";
import heroImg from "../assets/images/png/hero-img.png";
import heroGallery from "../assets/images/png/hero-gallery.png";
import heroPolkadot from "../assets/images/png/hero-polkadot.png";
import heroSkull from "../assets/images/png/hero-skull.png";
import heroFtx from "../assets/images/png/hero-ftx.png";
const Hero = () => {
  return (
    <div
      id="home"
      className="mt-[70px] text-center px-4 md:px-5 relative mb-24 md:mb-28"
    >
      <img
        className="hero_gallery absolute top-24 sm:top-0 -start-4 sm:start-16 md:start-24 lg:start-36 max-w-[39px] sm:max-w-[64px] rounded-full bg-lightPink"
        src={heroGallery}
        alt="heroGallery"
      />
      <img
        className="hero_polkadot absolute top-32 sm:top-20 md:top-24 lg:top-32 xl:top-[153px] -end-6 sm:end-10 md:end-[60px] max-w-[50px] sm:max-w-[70px] md:max-w-[90px] rounded-full bg-finn"
        src={heroPolkadot}
        alt="heroPolkadot"
      />
      <img
        className="hero_skull absolute top-[65%] sm:top-[33%] -start-7 sm:start-12 md:start-8 lg:start-28 xl:start-32 max-w-[53px] sm:max-w-[90px] md:max-w-[138px] rounded-full bg-funBlue"
        src={heroSkull}
        alt="heroSkull"
      />
      <img
        className="hero_skull absolute bottom-[15%] sm:bottom-[20%] -end-0 sm:end-7 md:end-8 lg:end-28 xl:end-32 max-w-[32px] sm:max-w-[39px] md:max-w-[64px] rounded-full bg-funBlue"
        src={heroFtx}
        alt="heroFtx"
      />
      <div class="glitch-container"></div>
      <span className="hero_left_hexagon absolute custom-2xs:-start-[40%] -start-[34%] sm:-start-[20%] -rotate-12 sm:rotate-0 md:-start-44 top-0 xl:top-16 -z-[1]">
        <HeroLeftHexagon />
      </span>
      <span className="hero_right_hexagon absolute -rotate-[16deg] sm:rotate-0 custom-sm:-end-[40%] -end-[35%] sm:-end-44 -bottom-24 sm:-bottom-10 lg:bottom-16 xl:bottom-24 -z-[1]">
        <HeroRightHexagon />
      </span>
      <div className="danger_blur bg-scarlet-gradient blur-[160px] h-[450px] w-[160px] absolute top-[36%] -end-36 rounded-full hidden sm:block"></div>
      <p className="flex items-center gap-3 text-primary font-manrope text-base font-bold justify-center uppercase">
        <NoKycIcon /> No KYC
      </p>
      <h1 className="font_actay_wide text-custom-lg md:text-7xl lg:text-8xl xl:text-custom-xl text-white font-bold uppercase !leading-[100%] my-4">
        Break the <br /> Chains
      </h1>
      <p className="font-manrope font-normal text-base sm:text-xl text-white ">
        Non-Custodial, Decentralized & Anonymous.{" "}
        <br className="block lg:hidden" /> Freedom in every transaction
      </p>
      <div className="custom-sm:w-full my-8 md:mt-12 md:mb-10">
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
