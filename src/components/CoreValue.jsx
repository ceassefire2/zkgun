import React from "react";
import { coreValueCardList } from "./common/Helper";
import { ClipboardData } from "./common/Icons";
import mobileImg from "../assets/images/png/core-mobile-img.png";
import dollorImg from "../assets/images/png/dollor-image.png";
import euroImg from "../assets/images/png/euro-image.png";

const CoreValue = () => {
  return (
    <>
      <div className="max-w-[1368px] mx-auto px-4 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="flex justify-center items-center gap-2">
          <ClipboardData />
          <p className="font-bold uppercase text-sm md:text-base text-white md:leading-[20.8px] font-manrope">
            Core values
          </p>
        </div>
        <h2 className="text-white text-center pt-4 font_actay_wide font-medium text-2xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[72px]">
          Our crypto creed
        </h2>
        {/* <div className="my-6 sm:my-8 md:my-12 lg:my-16 xl:my-20">
          <div className="bg-primary-border-gradient pb-[1px]">
            <div className="max-h-[576px] bg-dark flex justify-center overflow-hidden relative">
              <div className="bg-primary-color-gradient blur-[105px] h-[1303px] w-[928px] absolute top-32 opacity-50 start-1/2 -translate-x-1/2 rounded-full"></div>
              <div className="flex w-full  relative z-50 ">
                <div className="w-[20%] lg:w-[30%] flex justify-around flex-col gap-4 lg:flex-row lg:items-center">
                  <img className="w-full" src={dollorImg} alt="mobile Image" />
                  <img className="w-full" src={dollorImg} alt="mobile Image" />
                </div>
                <div className="w-[60%] lg:w-[40%] flex justify-center">
                  <img className="w-full" src={mobileImg} alt="mobile Image" />
                </div>
                <div className="w-[20%] lg:w-[30%]  flex justify-around flex-col items-end gap-4 lg:flex-row lg:items-center">
                  <img className="w-full" src={euroImg} alt="mobile Image" />
                  <img className="w-full" src={euroImg} alt="mobile Image" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
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
