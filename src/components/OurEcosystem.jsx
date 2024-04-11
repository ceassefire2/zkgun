import React from "react";
import { ClipboardData, EcoSystem } from "./common/Icons";
import CommonBtn from "./common/CommonBtn";
import img_first from "../assets/images/webp/our-eco-img-first.webp";
import { ourEcoCardList } from "./common/Helper";

const OurEcosystem = () => {
  return (
    <>
      <div className="max-w-[1400px] mx-auto px-4 py-[50px] md:py-16 xl:py-20 relative">
        <div className="bg-primary blur-[230px] h-[440px] w-[247px] absolute top-1/2 -translate-y-1/2 -end-[30%] rounded-full hidden sm:block"></div>
        <div className="bg-danger blur-[380px] h-[849px] w-[477px] absolute top-[40%] -start-[65%] rounded-full hidden sm:block"></div>
        <div className="flex justify-center items-center gap-2">
          <EcoSystem />
          <p className="font-bold uppercase text-base text-white md:leading-[20.8px] font-manrope">
            Our ecosystem
          </p>
        </div>
        <h2 className="text-white uppercase mx-auto max-w-[1037px] sm:text-center pt-4 font_actay_wide font-medium custom-xs:text-3xl custom-2xs:text-4xl text-[40px] sm:text-5xl md:text-6xl lg:text-7xl !leading-[100%]">
          Decentralized network diversity
        </h2>
        <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 mb-8">
          <CommonBtn btntext="Learn more about our services" />
        </div>
        <div
          className="bg-white-gradient-card p-[1px] max-w-[1216px] mx-auto rounded-[32px] hidden md:block mt-6 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20"
        >
          <div className="p-12  rounded-[32px] relative z-50 bg-firefly">
            <div className="flex">
              <div className="w-1/2 flex flex-col justify-between items-start">
                <div className="py-2 px-4 bg-[#1E2637] rounded-[100px] relative overflow-hidden">
                  <span className="w-[108px] h-[39px] bg-[#8F20EF] absolute -top-12 start-[117px] blur-[36px]"></span>
                  <span className="w-[84px] h-[39px] bg-[#8F20EF] absolute -bottom-12 -start-10 blur-[36px]"></span>
                  <p className="text-white inline-block text-sm md:text-base font-normal !leading-[130%] font-manrope ">
                    Trade without limits
                  </p>
                </div>
                <div>
                  <h3 className="font_actay_wide uppercase font-bold max-w-[425px] text-2xl md:text-3xl xl:text-4xl !leading-[100%] text-white">
                    Anonymous cross-chain swap
                  </h3>
                  <p className="text-white max-w-[555px] pt-4 font-manrope font-normal text-sm md:text-base md:leading-[20.8px]">
                    Trade without limits or custody.
                    {" "}<span className="text-white text-opacity-60">
                      Our platform offers unmatched rates and fast swaps across
                      an expansive network of blockchains and tokens
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-1/2 flex justify-end">
                <img
                  className="max-w-[370px] w-full max-h-[370px]"
                  src={img_first}
                  alt="img"
                  height={370}
                  width={370}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1216px] mx-auto pt-6 md:pt-4 flex flex-col md:flex-row gap-4 relative z-10">
          {ourEcoCardList.map((value, index) => {
            return (
              <div key={index}
                className={`p-[1px] w-full md:w-1/2 bg-white-gradient-card rounded-2xl sm:rounded-[32px] flex flex-col justify-between  ${value.hidden} `}
              >
                <div className="relative z-50 bg-firefly rounded-2xl md:rounded-[32px] p-6 lg:p-9 xl:p-12 flex flex-col justify-between h-full">
                  <div className="flex flex-col sm:flex-row justify-between items-start">
                    
                    <div className="py-2 px-4 bg-[#1E2637] rounded-[100px] relative overflow-hidden">
                      <span className="w-[108px] h-[39px] bg-[#8F20EF] absolute -top-12 start-[117px] blur-[36px]"></span>
                      <span className="w-[84px] h-[39px] bg-[#8F20EF] absolute -bottom-12 -start-10 blur-[36px]"></span>
                      <p className="text-white inline-block text-sm md:text-base font-normal !leading-[130%] font-manrope ">
                        {value.badge}
                      </p>
                    </div>
                    <img
                      className={`max-w-[200px] mx-auto sm:mx-0 md:max-w-[110px] w-full lg:max-w-[150px] xl:max-w-[200px] ${value.rotate}`}
                      height={200}
                      width={200}
                      src={value.image}
                      alt="img"
                    />
                  </div>
                  <div className="pt-3.5">
                    <h3 className="font_actay_wide uppercase font-bold max-w-[425px] text-2xl md:text-3xl xl:text-4xl !leading-[100%] text-white">
                      {value.title}
                    </h3>
                    <p className="text-white max-w-[555px] pt-4 font-manrope font-normal text-sm md:text-base md:leading-[20.8px]">
                      {value.description}
                      <span className="text-white text-opacity-60">
                        {value.spandescription}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-6 md:mt-8">
          <CommonBtn btntext="Learn more about our services" />
        </div>
      </div>
    </>
  );
};

export default OurEcosystem;
