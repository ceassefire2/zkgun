/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AffartsIcon, PageIcon } from "./Icons";

const Footer = () => {
  return (
    <div className="relative">
      <div className="bg-danger blur-[130px] h-[300px] w-[150px] absolute bottom-0 -end-[192px] rounded-full hidden sm:block"></div>
      <div className="max-w-[1368px] mx-auto px-4">
        <div className="flex flex-col sm:flex-row custom-xs:flex-col justify-between items-start sm:items-center pb-8 border-b border-b-white border-opacity-20 border-b-solid">
          <a href="/" className="text-white">
            <PageIcon />
          </a>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mt-8 sm:mt-0">
            <a
              href="#"
              className="font-manrope font-normal text-white relative :text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
            >
              Home
            </a>
            <a
              href="#"
              className="font-manrope font-normal text-white relative :text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
            >
              Services
            </a>
            <a
              href="#"
              className="font-manrope font-normal text-white relative :text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
            >
              Community
            </a>
            <a
              href="#"
              className="font-manrope font-normal text-white relative :text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap justify-between items-start sm:items-center mb-8 lg:mb-12 mt-8">
          <p className="text-white text-opacity-60 text-base font-normal font-manrope h-full text-center">
            © 2023 ZKGUN All Rights Reserved
          </p>
          <p className="text-white text-opacity-60 text-base font-normal font-manrope h-full text-center mt-4 mb-8 sm:my-0">
            support@zkgunproject.org
          </p>
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <p className="font-manrope font-normal text-white text-opacity-60 relative text-base !leading-5">
              Design by
            </p>
            <AffartsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
