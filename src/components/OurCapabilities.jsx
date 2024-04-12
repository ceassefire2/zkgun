import React from "react";
import { CapabilitiesIcon } from "./common/Icons";
import capabilitiesImg from "../assets/images/png/capabilities-img.png";
import capabilitiesHexagonImg from "../assets/images/png/capabilities-hexagon.png";
import CommonBtn from "./common/CommonBtn";

const OurCapabilities = () => {
  return (
    <div className="relative">
      <img
        className="absolute top-16 start-0 max-w-[200px] md:max-w-[280px] xl:max-w-[328px] -z-[1] hidden sm:block"
        src={capabilitiesHexagonImg}
        alt="capabilities-hexagon"
      />
      <div className="bg-danger blur-[130px] h-[300px] w-[150px] absolute top-0 -end-[192px] rounded-full hidden sm:block"></div>
      <div className="max-w-[1400px] mx-auto px-4 my-6 sm:my-8 md:my-12 lg:my-20 xl:my-40">
        <div className="flex justify-center items-center gap-2">
          <CapabilitiesIcon />
          <p className="font-bold text-sm md:text-base text-white md:leading-[20.8px] font-manrope uppercase">
            Our capabilities
          </p>
        </div>
        <h2 className="text-white text-center py-4 font_actay_wide font-medium text-2xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[72px] uppercase">
          Over 40 blockchains <br className="hidden md:block" /> and growing
        </h2>
        <p className="font-normal text-sm md:text-base text-white text-opacity-60 md:leading-5 font-manrope text-center custom-xs:px-0 px-10">
          Explore over 40 blockchains for a broad range of trading options.
        </p>
        <div className="flex justify-center mt-6 md:mt-8">
          <CommonBtn btntext="View all capabilities" />
        </div>
        <img
          className="w-full mt-10 md:mt-16 lg:mt-20 max-w-[600px] md:max-w-[800px] xl:max-w-[1049px] mx-auto"
          src={capabilitiesImg}
          alt="capabilities"
        />
      </div>
    </div>
  );
};

export default OurCapabilities;
