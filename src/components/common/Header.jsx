/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import CommonBtn from "./CommonBtn";
import { CloseIcon, MenuIcon, PageIcon } from "./Icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <>
      <div className="max-w-[1400px] mx-auto px-4 md:px-5">
        <nav className="">
          <div className="">
            <div className="flex items-center justify-between pt-6">
              <div className="flex-shrink-0">
                <a href="#home" rel="noreferrer" className="text-white">
                  <PageIcon />
                </a>
              </div>
              <div className="hidden md:block">
                <ul className="flex items-baseline gap-8">
                  <li>
                    <a
                      rel="noreferrer"
                      href="#home"
                      className="font-manrope font-normal text-white relative text-sm md:text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      href="#services"
                      className="font-manrope font-normal text-white relative text-sm md:text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      href="#community"
                      className="font-manrope font-normal text-white relative text-sm md:text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
                    >
                      Community
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      href="#contact"
                      className="font-manrope font-normal text-white relative text-sm md:text-base after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="hidden w-[200px] md:flex justify-end" >
                <CommonBtn btntext={"swap now"} />
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
          </div>
          <div
            className={`md:opacity-0 transition-all duration-500 fixed h-screen w-screen z-30 bg-dark top-0 start-0 ${isOpen ? "translate-x-0" : "translate-x-[-100%]"
              }`}
            id="mobile-menu"
          >
            <ul className="px-4 pt-6 pb-3 space-y-1 flex flex-col justify-center items-center h-full gap-8">
              <li className="!m-0">
                <a
                  rel="noreferrer"
                  onClick={() => setIsOpen(!isOpen)}
                  href="#home"
                  className="font-manrope font-normal text-white relative text-2xl after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
                >
                  Home
                </a>
              </li>
              <li className="!m-0">
                <a
                  rel="noreferrer"
                  onClick={() => setIsOpen(!isOpen)}
                  href="#services"
                  className="font-manrope font-normal text-white relative text-2xl after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
                >
                  Services
                </a>
              </li>
              <li className="!m-0">
                <a
                  rel="noreferrer"
                  onClick={() => setIsOpen(!isOpen)}
                  href="#community"
                  className="font-manrope font-normal text-white relative text-2xl after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
                >
                  Community
                </a>
              </li>
              <li className="!m-0">
                <a
                  rel="noreferrer"
                  onClick={() => setIsOpen(!isOpen)}
                  href="#contact"
                  className="font-manrope font-normal text-white relative text-2xl after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all after:ease-in-out ease-in-out after:duration-300 after:bg-white after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%] !leading-5 rounded-md "
                >
                  Contact
                </a>
              </li>
              <li

                className="custom-sm:w-full"
              >

                <CommonBtn btntext={"swap now"} />


              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
