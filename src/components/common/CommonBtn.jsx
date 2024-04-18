import React, { useState } from "react";

const CommonBtn = (props) => {
  const [buttonText, setButtonText] = useState(false);


  return (
    <>
      <button
        type="button"
        className="font-bold uppercase font-manrope bg-primary text-racingGreen transition-all duration-300 text-base relative flex items-center justify-center overflow-hidden hover:text-primary group !leading-5 rounded-[100px] py-3 sm:py-4 md:py-5 px-8 shadow-[0px_13px_48px_0px_#63C7967A] border border-transparent hover:border-primary"
        onClick={() => setButtonText(!buttonText)}
      >
        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-dark rounded-full group-hover:w-[400px] group-hover:h-[400px] custom-sm:group-hover:w-full custom-sm:group-hover:h-full"></span>
        <span className={`${buttonText === false ? "-translate-y-[0px] rotate-[0deg] " : "translate-y-[100px] -rotate-[45deg] absolute"} transition-all  ease-linear `}>{props.btntext}</span>

        <span className={` transition-all   ease-linear ${buttonText === true ? "translate-y-0 rotate-0  " : " -translate-y-[80px] rotate-[30deg] absolute"}`}>
          comming soon
        </span>
      </button >
    </>
  );
};

export default CommonBtn;
