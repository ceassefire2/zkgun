import React from "react";
import heroFtx from "../assets/images/png/hero-ftx.png";
import heroGallery from "../assets/images/png/hero-gallery.png";
import heroPolkadot from "../assets/images/png/hero-polkadot.png";
import heroSkull from "../assets/images/png/hero-skull.png";
import heroImg from "../assets/images/webp/hero-img.webp";
import CommonBtn from "./common/CommonBtn";
import { HeroLeftHexagon, HeroRightHexagon, NoKycIcon } from "./common/Icons";

const Hero = () => {
  return (
    <div
      id="home"
      className="sm:mt-10 md:mt-12 xl:mt-14 custom-2xl:mt-16 text-center px-4 md:px-5 relative py-6 sm:py-0 sm:mb-24 md:mb-28 flex flex-col justify-center h-[calc(100vh-52px)] min-h-[520px] sm:min-h-full max-h-[630px] sm:h-full sm:max-h-full"
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
      <div className="glitch-container"></div>
      <span className="hero_left_hexagon absolute custom-2xs:-start-[40%] -start-[34%] sm:-start-[20%] -rotate-12 sm:rotate-0 md:-start-44 top-0 xl:top-16 -z-[1]">
        <HeroLeftHexagon />
      </span>
      <span className="hero_right_hexagon absolute -rotate-[16deg] sm:rotate-0 custom-sm:-end-[40%] -end-[35%] sm:-end-44 -bottom-24 sm:-bottom-10 lg:bottom-16 xl:bottom-24 -z-[1]">
        <HeroRightHexagon />
      </span>
      <div className="danger_blur bg-scarlet-gradient blur-[160px] h-[450px] w-[160px] absolute top-[36%] -end-36 rounded-full hidden sm:block"></div>
      <div className="pt-0">
        <p
          data-aos="zoom-in"
          className="flex items-center gap-3 text-primary font-manrope text-base font-bold justify-center uppercase"
        >
          <NoKycIcon /> Private Efficient Confidential
        </p>
        <h1
          data-aos="fade-right"
          className="font_actay_wide text-custom-md custom-3xl:text-custom-2xl sm:text-custom-2md md:text-5xl lg:text-6xl xl:text-7xl custom-2xl:text-custom-xl text-white font-bold uppercase !leading-[100%] my-4"
        >
          Break the <br /> Chains
        </h1>
        <p
          data-aos="fade-left"
          className="font-manrope font-normal text-base sm:text-xl text-white "
        >
          A self-custody multi-chain wallet with a built-in privacy swap and multi-chain dex.
        </p>
        <div
          data-aos="zoom-in"
          className="flex justify-center w-full mt-4 sm:my-8 custom-2xl:mt-12 custom-2xl:mb-10"
        >
          <CommonBtn btntext={"swap now"} maxWidth="max-w-[152px]" />
        </div>
      </div>
      <img className="max-w-[240px] mt-8 sm:mt-0 sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[500px] custom-2xl:max-w-[700px] w-full mx-auto" src={heroImg} alt="" />
    </div>
  );
};

export default Hero;
