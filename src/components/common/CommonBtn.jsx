import React from 'react'

const CommonBtn = (props) => {
  return (
    <>
      <button className='font-bold uppercase font-manrope bg-primary text-sm md:text-base md:leading-[20.8px] rounded-[100px] py-4 md:py-[19.6px] px-[31.45px] shadow-[0px_13px_48px_0px_#63C7967A] hover:bg-transparent hover:text-primary duration-500 transition-all border border-transparent hover:border-primary'>
        {props.btntext}
      </button>
    </>
  )
}

export default CommonBtn