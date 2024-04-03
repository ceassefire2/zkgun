import React from "react";
import { ClipboardData } from "./common/Icons";

const OurCapabilities = () => {
  return (
    <div className="max-w-[1368px] mx-auto px-4">
      <div className="w-[809px] mx-auto">
        <div className="flex justify-center items-center gap-2">
          <ClipboardData />
          <p className="font-bold text-sm md:text-base text-white md:leading-[20.8px] font-manrope uppercase">
            Our capabilities
          </p>
        </div>
        <h2 className="text-white text-center pt-4 font_over font-medium text-3xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[72px]">
          > 40 Our capabilities
        </h2>
        <p className="font-normal text-sm md:text-base text-white text-opacity-60 md:leading-5 font-manrope">
          With over 40 blockchains at your fingertips, your trading options are
          as limitless as your ambition
        </p>
      </div>
    </div>
  );
};

export default OurCapabilities;
