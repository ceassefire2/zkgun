import React, { useState } from "react";

const CommonBtn = (props) => {
  const [buttonText, setButtonText] = useState(props.btntext);

  const handleClick = () => {
    setButtonText("Coming Soon");
    setTimeout(() => {
      setButtonText(props.btntext);
    }, 3000); // 5000 milliseconds = 5 seconds
  };

  return (
    <>
      <button
        type="button"
        className="font-bold uppercase font-manrope bg-primary text-racingGreen transition-all custom-2xs:duration-300 duration-500 text-base relative custom-sm:w-full sm:w-auto flex items-center justify-center overflow-hidden hover:text-primary group !leading-5 rounded-[100px] py-5 custom-sm:px-0 px-8 shadow-[0px_13px_48px_0px_#63C7967A] border border-transparent hover:border-primary"
        onClick={handleClick}
      >
        <span className="absolute w-0 h-0 transition-all custom-2xs:duration-300 duration-500 ease-out bg-dark rounded-full group-hover:w-[400px] group-hover:h-[400px] custom-sm:group-hover:w-full custom-sm:group-hover:h-full"></span>
        <span className="relative">{buttonText}</span>
      </button>
    </>
  );
};

export default CommonBtn;
