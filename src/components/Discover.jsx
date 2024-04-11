import React from "react";
import joinZKlogo from "../assets/images/png/z-logo.png";
import first_img from "../assets/images/png/monero.png";
import second_img from "../assets/images/webp/flow.webp";
import third_img from "../assets/images/png/download.png";
import dollor_img from "../assets/images/webp/dai-dollor.webp";
import CommonBtn from "./common/CommonBtn";

const Discover = () => {
  return (
    <>
      <div className="max-w-[1368px] mx-auto px-4">
        <div className="bg-white-gradient p-[1px] rounded-[32px]">
          <div className=" py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 rounded-[32px] bg-firefly relative  overflow-hidden">
            <img
              className="absolute rotate-[-30deg] top-[66px] start-[22%]"
              height={64}
              width={64}
              src={first_img}
              alt="zklogo"
            />
            <img
              className="absolute rotate-[37deg] bottom-[-36px] start-[2%]"
              height={160}
              width={160}
              src={second_img}
              alt="zklogo"
            />
            <img
              className="absolute rotate-[-29deg] bottom-[66px] end-[22%]"
              height={64}
              width={64}
              src={third_img}
              alt="zklogo"
            />
            <div className="relative">
              <span className="h-[130px] w-[130px] bg-[#FED515] absolute rotate-[-26.9deg] -top-[90px] end-[11%] blur-[140px] block"></span>
              <img
                className="absolute rotate-[-26.9deg] -top-[106px] end-[10%]"
                height={140}
                width={140}
                src={dollor_img}
                alt="zklogo"
              />
           </div>
            <div className="relative z-10 px-4">
              <img
                className="max-w-[39px] sm:max-w-12 md:max-w-[70px] lg:max-w-[84px] w-full sm:mx-auto"
                height={84}
                width={77}
                src={joinZKlogo}
                alt="zklogo"
              />
              <h2 className="max-w-[1200px] custom-xs:text-3xl uppercase mx-auto text-white sm:text-center pt-6 font_actay_wide font-medium text-[40px] sm:text-5xl md:text-6xl lg:text-7xl !leading-[100%]">
                Discover freedom <br className="hidden xl:block" />
                in every transaction
              </h2>
              <p className="text-white sm:mx-auto  sm:text-center text-sm md:text-base !leading-[130%] font-manrope font-normal sm:max-w-[512px] py-4 text-opacity-60">
                Our platform offers a robust and reliable solution for anyone in
                the ecosystem. It's time to join a community where every crypto
                enthusiast can find their place
              </p>
              <div className="flex sm:justify-center mt-2">
                <CommonBtn btntext="Swap now" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
