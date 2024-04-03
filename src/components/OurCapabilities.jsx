import React from "react";
import { ClipboardData } from "./common/Icons";
import capabilitiesImg from "../assets/images/png/capabilities-img.png";
import CommonBtn from "./common/CommonBtn";

const OurCapabilities = () => {
  return (
    <div className="max-w-[1368px] mx-auto px-4 my-6 sm:my-8 md:my-12 lg:my-16 xl:my-20 relative">
      <div className="bg-danger blur-[130px] h-[300px] w-[150px] absolute top-0 -end-48 rounded-full hidden sm:block"></div>
      <div className="flex justify-center items-center gap-2">
        <ClipboardData />
        <p className="font-bold text-sm md:text-base text-white md:leading-[20.8px] font-manrope uppercase">
          Our capabilities
        </p>
      </div>
      <h2 className="text-white text-center pt-4 font_over font-medium text-3xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[72px]">
        > 40 Our <br className="hidden md:block" /> capabilities
      </h2>
      <p className="font-normal text-sm md:text-base text-white text-opacity-60 md:leading-5 font-manrope text-center mt-5 custom-xs:px-0 px-10">
        With over 40 blockchains at your fingertips, your trading options{" "}
        <br className="hidden sm:block" /> are as limitless as your ambition
      </p>
      <img
        className="w-full custom-xs:mt-5 mt-7 sm:mt-10 md:mt-16 lg:mt-20 max-w-[600px] md:max-w-[800px] lg:max-w-[1049px] mx-auto"
        src={capabilitiesImg}
        alt="capabilities"
      />
      <div className="flex justify-center mt-6 md:mt-8">
        <CommonBtn btntext="View all capabilities" />
      </div>
    </div>
  );
};

export default OurCapabilities;
