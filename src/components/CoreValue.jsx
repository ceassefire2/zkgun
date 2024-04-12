import React from "react";
import { coreValueCardList } from "./common/Helper";
import { CoreValuesIcon } from "./common/Icons";
import CommonBtn from "./common/CommonBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import coreValueHexagonImg from "../assets/images/png/core-value-hexagon.png";
import "swiper/css/pagination";
const CoreValue = () => {
  return (
    <>
      <div className="relative">
        <img src={coreValueHexagonImg} alt="coreValueHexagonImg"
          className="absolute top-[81%] sm:top-1/2 md:top-36 max-w-[180px] sm:max-w-[250px] md:max-w-[320px] lg:max-w-[500px] xl:max-w-[600px] -z-[1]"
        />
        <div className="max-w-[1400px] mx-auto px-4 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 our_cripto">
          <p className="font-bold uppercase text-sm md:text-base text-white md:leading-[20.8px] font-manrope flex items-center justify-start sm:justify-center gap-2.5">
            <CoreValuesIcon /> Core values
          </p>
          <h2 className="text-white sm:text-center pt-4 pb-6 sm:pb-8 font_actay_wide font-medium text-2xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[72px] uppercase">
            Our crypto creed
          </h2>
          <div className="text-center mb-20">
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
                  <SwiperSlide key={index}>
                    <div

                      className={`${obj.gridCenter} bg-firefly p-6 lg:p-10 rounded-[32px] relative overflow-hidden custom-xs:min-h-[350px] min-h-[325px] md:min-h-[295px] lg:min-h-[403px] xl:min-h-[420px] max-w-[500px] mx-auto sm:max-w-none`}
                    >
                      <span className="hidden md:inline-block bg-[#63C796] w-[200px] h-[100px] absolute -top-36 start-1/2 -translate-x-1/2 blur-[100px]"></span>
                      <span className="hidden md:inline-block bg-[#63C796] w-[200px] h-[100px] absolute -bottom-40 start-1/2 -translate-x-1/2 blur-[100px]"></span>
                      <h4 className="text-white text-center text-xl md:text-xl lg:text-3xl xl:text-4xl font-bold font-manrope md:leading-[31.2px] uppercase">
                        {obj.title}
                      </h4>
                      <div className="my-3 lg:my-8 xl:my-12 flex justify-center core_icons">
                        {obj.image}
                      </div>
                      <p className="text-white max-w-[400px] mx-auto text-center font-manrope font-normal text-base md:leading-[20.8px]">
                        {obj.description}
                        <span className="text-white text-opacity-60">
                          {obj.spandescription}
                        </span>
                      </p>
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
