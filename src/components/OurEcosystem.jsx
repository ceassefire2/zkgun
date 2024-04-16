import React from "react";
import { EcoSystem } from "./common/Icons";
import CommonBtn from "./common/CommonBtn";
import img_first from "../assets/images/webp/our-eco-img-first.webp";
import ecosystemHexagon from "../assets/images/png/our-eco-hexagon-colored.png";
import { ourEcoCardList } from "./common/Helper";

const OurEcosystem = () => {
  return (
    <>
      <div id="community" className="relative">
        <img
          className="absolute top-[72%] sm:top-[20%] lg:top-[38%] -start-10 sm:-start-4 max-w-[300px] md:max-w-[400px] xl:max-w-[490px] z-10"
          src={ecosystemHexagon}
          alt="ecosystemHexagon"
        />
        <div className="green_blur blur-[230px] h-[440px] w-[247px] absolute top-1/2 -end-[400px] rounded-full hidden -z-[1] sm:block"></div>
        <div className="red_blur danger_blur blur-[280px] h-[650px] w-[447px]  absolute top-[64%] -start-[500px] rounded-[50%] hidden -z-[1] sm:block"></div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-5 py-[50px] md:py-16 xl:py-20 relative">
          <div data-aos="zoom-out" data-aos-delay="600" className="flex sm:justify-center items-center gap-2">
            <EcoSystem />
            <p className="font-bold uppercase text-base text-white !leading-[130%] font-manrope">
              Our ecosystem
            </p>
          </div>
          <h2 data-aos="zoom-out" data-aos-delay="800" className="text-white uppercase mx-auto max-w-[1037px] sm:text-center pt-4 font_actay_wide font-medium custom-xs:text-3xl custom-2xs:text-4xl text-[40px] sm:text-5xl md:text-[52px] lg:text-7xl !leading-[100%]">
            Decentralized network diversity
          </h2>
          <div className="flex sm:justify-center mt-4 sm:mt-6 md:mt-8" data-aos="zoom-out" data-aos-delay="1000" >
            <CommonBtn btntext="Learn more about our services" />
          </div>
          <div data-aos="zoom-in" data-aos-delay="1000" className="bg-white-gradient-card p-[1px] overflow-hidden max-w-[1216px] mx-auto rounded-[32px] hidden md:block mt-6 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20">
            <div className="lg:px-12 p-9 rounded-[32px] relative z-50 bg-firefly ">
              <span className="w-[1084px] h-[372px] hidden md:flex bg-primary absolute opacity-30 -bottom-[90%] start-[50%] blur-[240px]"></span>
              <span className="w-[700px] h-[372px] hidden md:flex bg-primary absolute opacity-30 -top-[90%] start-[88%] blur-[240px]"></span>
              <div className="flex">
                <div className="w-7/12 lg:w-1/2 lg:py-3 flex flex-col justify-between items-start">
                  <div className="md:py-[6.5px] px-4 bg-mirage rounded-[100px] relative overflow-hidden">
                    <span className="w-[108px] h-[39px] bg-lightBlue absolute -top-12 start-[117px] blur-[33px]"></span>
                    <span className="w-[84px] h-[39px] bg-lightBlue absolute -bottom-12 -start-10 blur-[33px]"></span>
                    <p className="text-white inline-block text-sm md:text-base font-normal !leading-[130%] font-manrope ">
                      Trade without limits
                    </p>
                  </div>
                  <div>
                    <h3 className="font_actay_wide uppercase font-bold max-w-[350px] xl:max-w-[425px] text-2xl md:text-3xl xl:text-4xl !leading-[100%] text-white">
                      Anonymous cross-chain swap
                    </h3>
                    <p className="text-white max-w-[555px] pt-4 font-manrope font-normal text-sm md:text-base !leading-[130%]">
                      Trade without limits or custody.{" "}
                      <span className="text-white text-opacity-60">
                        Our platform offers unmatched rates and fast swaps
                        across an expansive network of blockchains and tokens
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-5/12 lg:w-1/2 flex justify-end xl:pe-4">
                  <img
                    className="max-w-[290px] lg:max-w-[370px] w-full max-h-[370px] rotate-[17deg] hue_img"
                    src={img_first}
                    alt="img"
                    height={370}
                    width={370}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1216px] mx-auto md:pt-4 flex flex-col md:flex-row gap-4 relative z-10">
            {ourEcoCardList.map((value, index) => {
              return (
                <div
                  data-aos={value.aosAnimation} data-aos-delay="1000"
                  key={index}
                  className={`p-[1px] w-full md:w-1/2 bg-white-gradient-card rounded-[20px] overflow-hidden md:rounded-[32px] flex flex-col justify-between  ${value.hidden} `}
                >
                  <div className="relative z-50 bg-firefly rounded-[20px] md:rounded-[32px] p-6 lg:p-9 xl:p-12 flex flex-col justify-between min-h-[481px] h-full sm:min-h-full">
                    <span
                      className={`hidden md:flex bg-primary absolute opacity-30  blur-[240px] ${value.blurOne}`}
                    ></span>
                    <span
                      className={`hidden md:flex bg-primary absolute opacity-30  blur-[240px] ${value.blurTwo}`}
                    ></span>
                    <div className="flex flex-col sm:flex-row justify-between items-start">
                      <div className="py-[5px] md:py-[6.5px] px-4 bg-mirage rounded-[100px] relative overflow-hidden">
                        <span
                          className={`w-[108px] h-[39px] bg-lightBlue absolute -top-14 end-[-70px] blur-[36px] ${value.badgeColor}`}
                        ></span>
                        <span
                          className={`w-[84px] h-[39px] bg-lightBlue absolute -bottom-14 -start-14 blur-[36px] ${value.badgePosition} ${value.badgeColor}`}
                        ></span>
                        <p className="text-white inline-block text-sm md:text-base font-normal !leading-[130%] font-manrope ">
                          {value.badge}
                        </p>
                      </div>
                      <img
                        className={`max-w-[200px] mx-auto sm:mx-0 md:max-w-[110px] w-full lg:max-w-[150px] xl:max-w-[200px] hue_img ${value.rotate}`}
                        height={200}
                        width={200}
                        src={value.image}
                        alt="img"
                      />
                    </div>
                    <div className="sm:pt-3.5">
                      <h3 className="font_actay_wide uppercase font-bold max-w-[273px] md:max-w-[425px] text-2xl md:text-3xl xl:text-4xl !leading-[100%] text-white">
                        {value.title}
                      </h3>
                      <p className="text-white max-w-[555px] pt-2 sm:pt-3 md:pt-4 font-manrope font-normal text-sm md:text-base !leading-[130%]">
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
        </div>
      </div>
    </>
  );
};

export default OurEcosystem;
