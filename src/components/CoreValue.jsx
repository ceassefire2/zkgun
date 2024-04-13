import React from "react";
import { coreValueCardList } from "./common/Helper";
import { CoreValuesIcon } from "./common/Icons";
import CommonBtn from "./common/CommonBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import coreValueHexagonImg from "../assets/images/png/core-value-hexagon.png";
import coreValueHexagonImgColored from "../assets/images/png/core-value-hexagon-colored.png";
import "swiper/css/pagination";
const CoreValue = () => {
  return (
    <>
      <div className="relative">
        <img
          src={coreValueHexagonImg}
          alt="coreValueHexagonImg"
          className="absolute top-[81%] sm:top-1/2 md:top-36 max-w-[180px] sm:max-w-[250px] md:max-w-[320px] lg:max-w-[500px] xl:max-w-[600px] -z-[1]"
        />
        <img
          src={coreValueHexagonImgColored}
          alt="coreValueHexagonImgColored"
          className="absolute -end-9 top-[14%] sm:top-1/4 md:top-[27%] max-w-[180px] sm:max-w-[250px] md:max-w-[320px] lg:max-w-[430px] -z-[1]"
        />
        <div className="max-w-[1400px] mx-auto px-4 md:px-5 py-[50px] md:py-16 xl:py-20 our_cripto">
          <p className="font-bold custom-2xs:text-sm uppercase text-base text-white !leading-[130%] font-manrope flex items-center justify-start sm:justify-center gap-2.5">
            <CoreValuesIcon /> Core values
          </p>
          <h2 className="text-white custom-2xs:text-4xl sm:text-center pt-4 pb-6 sm:pb-8 font_actay_wide font-medium text-custom-md sm:text-5xl md:custom-2md lg:text-7xl !leading-[100%] uppercase">
            Our crypto creed
          </h2>
          <div className="text-center sm:justify-center sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 hidden sm:flex">
            <CommonBtn btntext={"Learn about us"} />
          </div>
          <Swiper
            pagination={true}
            modules={[Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            <div className="md:grid grid-cols-3 gap-4">
              {coreValueCardList.map((obj, index) => {
                return (
                  <SwiperSlide key={index} className="h-full">
                    <div className="card_border p-[1px] overflow-hidden rounded-[20px] md:rounded-[32px]">
                      <div
                        className={`${obj.gridCenter} bg-firefly p-6 lg:p-10 rounded-[20px] md:rounded-[32px] relative overflow-hidden flex flex-col justify-between lg:justify-start custom-xs:min-h-[303px] min-h-[302px] md:min-h-[295px] lg:min-h-[403px] xl:min-h-[420px] max-w-[500px] mx-auto sm:max-w-none`}
                      >
                        <span className="hidden md:inline-block bg-[#63C796] w-[200px] h-[100px] absolute -top-36 start-1/2 -translate-x-1/2 blur-[100px]"></span>
                        <span className="hidden md:inline-block bg-[#63C796] w-[200px] h-[100px] absolute -bottom-40 start-1/2 -translate-x-1/2 blur-[100px]"></span>
                        <h4 className="text-white text-center custom-xs:text-2xl text-[30px] xl:text-4xl font-bold font-manrope !leading-[100%] uppercase">
                          {obj.title}
                        </h4>
                        <div className="lg:my-8 xl:my-12 flex justify-center core_icons">
                          {obj.image}
                        </div>
                        <p className="text-white max-w-[400px] mx-auto text-center font-manrope font-normal text-sm md:text-base !leading-[130%]">
                          {obj.description}
                          <span className="text-white text-opacity-60">
                            {obj.spandescription}
                          </span>
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CoreValue;
