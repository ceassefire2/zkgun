import React, { useEffect } from "react";
import { HexagonIcon, PageIcon } from "./Icons";
import { Link, useLocation } from "react-router-dom";
import CommonBtn from "./CommonBtn";
const Footer = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.slice(1); // Remove the '#' symbol
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [location]);
  const year = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="relative">
      <div className="bg-scarlet-gradient blur-[130px] h-[400px] w-[150px] absolute bottom-20 -end-[192px] rounded-full"></div>
      <div className="absolute -end-10 sm:end-0 -bottom-5 sm:bottom-0 -z-[1] footer_hexagon">
        <HexagonIcon />
      </div>
      <div className="max-w-[1400px] mx-auto px-4 md:px-5 pt-[50px] md:pt-16 xl:pt-20">
        <div className="flex flex-col items-center sm:flex-row custom-xs:flex-col  sm:justify-between sm:items-center pb-8 border-b border-b-white border-opacity-20 border-b-solid">
          <Link to="/" rel="noreferrer" className="text-white">
            <PageIcon />
          </Link>
          <div className="mt-8 sm:mt-0">
            <div className="flex flex-col items-center sm:flex-row gap-5 md:gap-8">
              <Link
                onClick={scrollToTop}
                rel="noreferrer"
                to="/"
                className="font-manrope font-normal text-white relative :text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
              >
                Home
              </Link>
              <Link
                rel="noreferrer"
                to="/#services"
                className="font-manrope font-normal text-white relative :text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
              >
                Services
              </Link>
              <Link
                onClick={scrollToTop}
                rel="noreferrer"
                to="/documentation"
                className="font-manrope font-normal text-white relative :text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
              >
                Community
              </Link>
              <Link
                rel="noreferrer"
                to="/#contact"
                className="font-manrope font-normal text-white relative :text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-5 sm:mt-0">
            <a rel="noreferrer" href="mailto:hello@zkgun.org">
              <CommonBtn btntext={"Support"} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center sm:flex-row flex-wrap sm:justify-between sm:items-center pb-8 xl:pb-12 pt-8">
          <p className="text-white text-opacity-60 text-base sm:text-sm md:text-base font-normal font-manrope h-full text-center">
            © {year} ZKGUN All Rights Reserved
          </p>
          <a
            rel="noreferrer"
            href="mailto:hello@zkgun.org"
            className="text-white text-opacity-60 hover:text-opacity-100 duration-300 text-base sm:text-sm md:text-base font-normal font-manrope h-full text-center mt-4 mb-8 sm:my-0"
          >
            hello@zkgun.org
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
