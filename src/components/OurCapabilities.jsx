import React from "react";
import { CapabilitiesIcon } from "./common/Icons";
import capabilitiesLottie from "../assets/images/json/capabilities.json";
import capabilitiesHexagonImg from "../assets/images/png/capabilities-hexagon.png";
import CommonBtn from "./common/CommonBtn";
import Lottie from "react-lottie-player";
import { Link } from "react-router-dom";

const OurCapabilities = () => {
  return (
    <div className="relative">
      <img
        className="absolute top-16 start-0 max-w-[200px] md:max-w-[280px] xl:max-w-[328px] -z-[1] hidden sm:block"
        src={capabilitiesHexagonImg}
        alt="capabilities-hexagon"
      />
      <div className="bg-scarlet blur-[130px] h-[200px] sm:h-[300px] w-[150px] absolute -top-[30%] md:top-0 -end-[192px] rounded-full "></div>
      <div className="max-w-[1400px] mx-auto px-4 md:px-5 py-[30px] md:py-16 xl:py-20 mb-[50px] md:mb-16 xl:mb-20">
        <div
          data-aos="zoom-in"
          className="flex sm:justify-center items-center gap-2"
        >
          <CapabilitiesIcon />
          <p className="font-bold custom-2xs:text-sm text-base text-white !leading-[130%] font-manrope uppercase">
            Our capabilities
          </p>
        </div>
        <h2
          data-aos="zoom-in"
          className="text-white custom-2xs:text-4xl sm:text-center py-4 font_actay_wide font-medium custom-xs:text-3xl text-custom-md sm:text-5xl md:custom-2md lg:text-7xl !leading-[100%] uppercase"
        >
          Over 40 blockchains <br className="hidden md:block" /> and growing
        </h2>
        <p
          data-aos="fade-left"
          className="font-normal text-sm md:text-base text-white text-opacity-60 !leading-[130%] font-manrope sm:text-center custom-xs:px-0 sm:px-10"
        >
          Explore over 40 blockchains for a broad range of trading options.
        </p>
        <div

          data-aos="zoom-in"
          className="flex sm:justify-center w-full mt-6 md:mt-8"
        >
          <Link
            rel="noreferrer"
            target="_blank"
            to="https://docs.zkgun.org"
            className=""
          >
            <CommonBtn btntext="View all capabilities" maxWidth="max-w-[242px]" />
          </Link>
        </div>
        
        <Lottie
          loop
          animationData={capabilitiesLottie}
          play
          className="w-full mt-10 md:mt-16 lg:mt-20 max-w-[600px] md:max-w-[800px] xl:max-w-[1049px] mx-auto"
        />
      </div>
    </div>
  );
};

export default OurCapabilities;
