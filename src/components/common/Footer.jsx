/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AffartsIcon, HexagonIcon, PageIcon } from "./Icons";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="relative">
      <div className="bg-scarlet-gradient blur-[130px] h-[400px] w-[150px] absolute bottom-20 -end-[192px] rounded-full"></div>
      <div className="absolute -end-10 sm:end-0 -bottom-5 sm:bottom-0 -z-[1] footer_hexagon">
        <HexagonIcon />
      </div>
      <div className="max-w-[1400px] mx-auto px-4 md:px-5 pt-[50px] md:pt-16 xl:pt-20">
        <div className="flex flex-col items-center sm:flex-row custom-xs:flex-col  sm:justify-between sm:items-center pb-8 border-b border-b-white border-opacity-20 border-b-solid">
          <a href="#home" rel="noreferrer" className="text-white">
            <PageIcon />
          </a>
          <div className="flex flex-col items-center sm:flex-row gap-6 sm:gap-8 mt-8 sm:mt-0">
            <a
              rel="noreferrer"
              href="#home"
              className="font-manrope font-normal text-white relative :text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
            >
              Home
            </a>
            <a
              rel="noreferrer"
              href="#services"
              className="font-manrope font-normal text-white relative :text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
            >
              Services
            </a>
            <a
              rel="noreferrer"
              href="#community"
              className="font-manrope font-normal text-white relative :text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
            >
              Community
            </a>
            <a
              rel="noreferrer"
              href="#contact"
              className="font-manrope font-normal text-white relative :text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center sm:flex-row flex-wrap sm:justify-between sm:items-center pb-8 lg:pb-12 pt-8">
          <p className="text-white text-opacity-60 text-base sm:text-sm md:text-base font-normal font-manrope h-full text-center">
            © {year} ZKGUN All Rights Reserved
          </p>
          <a
            rel="noreferrer"
            href="mailto:support@zkgunproject.org"
            className="text-white text-opacity-60 hover:text-opacity-100 duration-300 text-base sm:text-sm md:text-base font-normal font-manrope h-full text-center mt-4 mb-8 sm:my-0"
          >
            support@zkgunproject.org
          </a>
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <p className="font-manrope font-normal text-white text-opacity-60 relative text-base sm:text-sm md:text-base !leading-5">
              Design by
            </p>
            <a
              href="https://affarts.com/"
              target="_blank"
              className="cursor-pointer"
              rel="noreferrer"
            >
              <AffartsIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
