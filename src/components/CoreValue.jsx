import React from "react";
import { coreValueCardList } from "./common/Helper";
import { ClipboardData } from "./common/Icons";
import mobileImg from "../assets/images/png/download.png";

const CoreValue = () => {
  return (
    <>
      <div className="max-w-[1368px] mx-auto px-4 xl:p-0 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="flex justify-center items-center gap-2">
          <ClipboardData />
          <p className="font-bold uppercase text-sm md:text-base text-white md:leading-[20.8px] font-manrope">
            Core values
          </p>
        </div>
        <h2 className="text-white text-center pt-4 font_over font-medium text-2xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[72px]">
          Our crypto creed
        </h2>
        <div className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
          <img src={mobileImg} alt="mobile Image" />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-12 ">
          {coreValueCardList.map((value, index) => {
            return (
              <div key={index} className={`${value.gridCenter}`}>
                <img
                  className="mx-auto"
                  height={80}
                  width={80}
                  src={value.image}
                  alt="core value img"
                />
                <h4 className="text-white text-center pt-6 text-xl md:text-2xl font-bold font-manrope md:leading-[31.2px]">
                  {value.title}
                </h4>
                <p className="text-white max-w-[400px] mx-auto text-center pt-2 font-manrope font-normal text-sm md:text-base md:leading-[20.8px]">
                  {value.description}
                  <span className="text-white text-opacity-60">
                    {value.spandescription}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CoreValue;
