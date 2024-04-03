/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1368px] mx-auto px-4">
      <div className="flex custom-xs:flex-col justify-between items-center pb-8 border-b border-b-white border-opacity-20 border-b-solid">
        <a href="/" className="text-white">
          Footer Logo
        </a>
        <div className="custom-xs:mt-2">
          <a
            href="#"
            className="font-manrope font-normal text-white relative text-sm md:text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
          >
            Services
          </a>
          <a
            href="#"
            className="font-manrope font-normal text-white relative text-sm md:text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md mx-4 sm:mx-8"
          >
            About us
          </a>
          <a
            href="#"
            className="font-manrope font-normal text-white relative text-sm md:text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
          >
            Contact
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-between sm:justify-center lg:justify-between items-center mb-8 lg:mb-12 mt-8">
        <p className="text-white text-opacity-60 text-sm md:text-base font-normal font-manrope order-3 lg:order-1 h-full mt-4 lg:mt-0 text-center w-full lg:w-auto">
          © 2023 ZKGUN All Rights Reserved
        </p>
        <div className="order-2 w-full sm:w-1/2 lg:w-auto text-center sm:text-end mt-4 sm:mt-0">
          <a
            href="#"
            className="font-manrope font-normal text-white relative text-sm md:text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md text-opacity-60 "
          >
            Terms of Use
          </a>
          <a
            href="#"
            className="font-manrope font-normal text-white relative text-sm md:text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md text-opacity-60 mx-5 sm:mx-8"
          >
            Privacy policy
          </a>
          <a
            href="#"
            className="font-manrope font-normal text-white relative text-sm md:text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md text-opacity-60 "
          >
            Cookies
          </a>
        </div>
        <div className="flex items-center justify-center sm:justify-start gap-3 order-1 lg:order-3 w-full sm:w-1/2 lg:w-auto">
          <p className="font-manrope font-normal text-white text-opacity-60 relative text-sm md:text-base !leading-5">
            Design by
          </p>
          <p className="font-manrope font-normal text-white text-opacity-60 relative text-sm md:text-base !leading-5">
            affarts logo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
