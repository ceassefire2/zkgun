import React from "react";

const CommonBtn = (props) => {
  return (
    <>
      <button className="font-bold uppercase font-manrope bg-primary text-base !leading-5 rounded-[100px] py-5 px-8 shadow-[0px_13px_48px_0px_#63C7967A] hover:bg-transparent hover:text-primary duration-500 transition-all border border-transparent hover:border-primary">
        {props.btntext}
      </button>
    </>
  );
};

export default CommonBtn;
