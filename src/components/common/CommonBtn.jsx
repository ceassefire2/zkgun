import React, { useState } from "react";
import PropTypes from "prop-types";
const CommonBtn = (props) => {
  const [buttonText, setButtonText] = useState(false);
  return (
    <button
      type="button"
      className={`font-bold uppercase group font-manrope bg-primary text-racingGreen text-base relative flex items-center justify-center gap-1 overflow-hidden hover:text-primary group !leading-5 rounded-[100px] py-3 sm:py-4 md:py-5 px-8 shadow-[0px_13px_48px_0px_#63C7967A] border border-transparent
         hover:border-primary
         ${
           buttonText === true
             ? "max-w-[195px] w-full transition-all"
             : `${props.maxWidth} w-full transition-all `
         }
         `}
    >
      <span className="absolute w-full h-full rounded-md bg-black -translate-x-[110%] duration-200 group-hover:translate-x-0"></span>
      {props.icon && React.cloneElement(props.icon, { className: `h-[20px] transition-colors duration-300 group-hover:fill-primary z-10 ${props.icon.props.className}` })}
      <span
        className={`${
          buttonText === false
            ? "-translate-y-[0px] rotate-[0deg]"
            : "translate-y-[120px] -rotate-[45deg]  w-full absolute"
        } ${
          props.btntext === "Support"
            ? "!-translate-y-[0px] !rotate-[0deg] !relative"
            : ""
        }
         transition-all duration-300 w-full ease-linear text-nowrap`}
      >
        {props.btntext}
      </span>
    </button>
  );
};
CommonBtn.propTypes = {
  btntext: PropTypes.string.isRequired,
  maxWidth: PropTypes.string, // Ensure you define the type based on your usage,
  icon: PropTypes.elementType
};
export default CommonBtn;
