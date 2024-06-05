import React, { useEffect, useState } from "react";
import CommonBtn from "./CommonBtn";
import { CloseIcon, MenuIcon, PageIcon, LinkTreeIcon } from "./Icons";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

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
  return (
    <>
      <div className="max-w-[1400px] mx-auto px-4 md:px-5 ">
        <nav>
          <div
            className={`flex items-center justify-between mt-3 sm:mt-6`}
          >
            <div className="flex-shrink-0">
              <Link to="/" rel="noreferrer" className="text-white">
                <PageIcon />
              </Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-baseline gap-8">
                <li>
                  <Link
                    rel="noreferrer"
                    to="/"
                    className="font-manrope font-normal text-white relative text-sm md:text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    rel="noreferrer"
                    to="/#services"
                    className="font-manrope font-normal text-white relative text-sm md:text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    rel="noreferrer"
                    to="#community"
                    className="font-manrope font-normal text-white relative text-sm md:text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    rel="noreferrer"
                    to="/#contact"
                    className="font-manrope font-normal text-white relative text-sm md:text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden w-[200px] md:flex justify-end">
              <Link
                rel="noreferrer"
                target="_blank"
                to="https://linktr.ee/zkgun"
                className=""
              >
                <CommonBtn btntext={"LinkTree"} icon={<LinkTreeIcon className="h-[20px]" />} />
              </Link>
            </div>

            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                aria-label="mobile-menu"
                className="bg-gray-900 inline-flex items-center relative z-50 justify-center p-2 rounded-md text-white hover.text-white transition-opacity duration-500 focus-visible:border-none"
                aria-controls="mobile-menu"
                aria-expanded={isOpen ? "opacity-1" : "opacity-0"}
              >
                {!isOpen ? <MenuIcon /> : <CloseIcon />}
              </button>
            </div>
          </div>
          <div
            className={`md:opacity-0 transition-all duration-500 fixed h-screen w-screen pt-6 z-30 bg-dark top-0 start-0 ${isOpen ? "translate-x-0" : "translate-x-[-100%]"
              }`}
            id="mobile-menu"
          >
            <ul className="px-4 pt-6 pb-3 space-y-1 flex flex-col justify-center items-center h-full gap-8">
              <li className="!m-0">
                <Link
                  rel="noreferrer"
                  onClick={() => setIsOpen(!isOpen)}
                  to="/"
                  className="font-manrope font-normal text-white relative text-xl after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
                >
                  Home
                </Link>
              </li>
              <li className="!m-0">
                <Link
                  rel="noreferrer"
                  onClick={() => setIsOpen(!isOpen)}
                  to="/#services"
                  className="font-manrope font-normal text-white relative text-xl after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
                >
                  Services
                </Link>
              </li>
              <li className="!m-0">
                <Link
                  rel="noreferrer"
                  onClick={() => setIsOpen(!isOpen)}
                  to="#community"
                  className="font-manrope font-normal text-white relative text-xl after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
                >
                  Community
                </Link>
              </li>
              <li className="!m-0">
                <Link
                  rel="noreferrer"
                  onClick={() => setIsOpen(!isOpen)}
                  to="/#contact"
                  className="font-manrope font-normal text-white relative text-xl after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
                >
                  Contact
                </Link>
              </li>
              <li className="custom-sm:w-full flex justify-center">
                <Link
                  rel="noreferrer"
                  target="_blank"
                  to="https://linktr.ee/zkgun"
                  className=""
                >
                  <CommonBtn btntext={"LinkTree"} icon={<LinkTreeIcon className="h-[20px]" />} />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
