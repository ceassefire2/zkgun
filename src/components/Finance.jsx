import React from "react";
import financeHexagonImg from "../assets/images/png/finance-hexagon.png";
import CommonBtn from "./common/CommonBtn";
import { ClipboardData } from "./common/Icons";
const Finance = () => {
  return (
    <>
      <div className="relative">
        <img
          src={financeHexagonImg}
          alt="financeHexagonImg"
          className="absolute end-0 sm:top-1/2 md:top-20 max-w-[250px] md:max-w-[420px] lg:max-w-[500px] xl:max-w-[580px] -z-[1] hidden sm:block"
        />
        <div className="max-w-[1400px] mx-auto px-4 md:px-5 pb-[50px] md:pb-16 xl:pb-20">
          <div data-aos="zoom-in" className="flex sm:justify-center items-center gap-2">
            <ClipboardData />
            <p className="font-bold custom-2xs:text-sm !leading-[130%] text-base text-white md:leading-[20.8px] font-manrope uppercase">
              Fast and secure decentralized finance
            </p>
          </div>
          <div data-aos="zoom-in"
          >
            <div className="flex sm:justify-center mt-4 sm:mt-6 md:mt-8 mb-8">
              <CommonBtn btntext="learn more about us" />
            </div>
          </div>
          <h3 data-aos="zoom-out" className="font_actay_wide custom-2xs:text-custom-sm font-bold uppercase !leading-[120%] sm:text-center text-2xl md:text-3xl xl:text-4xl text-white">
            Swap crypto across chains without a hitch, leveraging our deep
            liquidity pools from over 20+ sources for instant, vast
            transactions.{" "}
            <span className="text-whiteBlue">
              Our ERC-4337 wallet is your ticket to a seamless, gas- free crypto
              experience, integrated with RAILGUN for enhanced privacy when
              performing transcanctions.
            </span>
          </h3>
        </div>
      </div>
    </>
  );
};
export default Finance;
