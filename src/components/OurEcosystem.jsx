import React from 'react'
import { ClipboardData } from './common/Icons'
import CommonBtn from './common/CommonBtn'

const OurEcosystem = () => {
  return (
    <>
      <div className="max-w-[1368px] mx-auto px-4 xl:p-0 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="flex justify-center items-center gap-2">
          <ClipboardData />
          <p className='font-bold text-sm md:text-base text-white md:leading-[20.8px] font-manrope'>
            Our ecosystem
          </p>
        </div>
        <h2 className='text-white mx-auto max-w-[1037px] text-center pt-4 font_over font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[72px]'>
          Decentralized network diversity
        </h2>
        <div className="p-12 max-w-[1216px] border rounded-[32px] bg-firefly mt-6 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20">
          <div className="flex">
            <div className="w-1/2">
              <p className='text-white inline-block rounded-[100px] text-sm md:text-base font-normal leading-[20.8px] font-manrope py-2 px-4 bg-dark'>Trade without limits</p>
              <h3 className='font_over font-medium max-w-[355px] text-2xl md:text-3xl lg:text-4xl lg:leading-[36px] text-white pt-4'>
                Anonymous cross-chain swap
              </h3>
              <p className='text-white max-w-[400px] pt-4 font-manrope font-normal text-sm md:text-base md:leading-[20.8px]'>
                Trade without limits or custody.
                <span className='text-white text-opacity-60'>
                  Our platform offers unmatched rates and fast swaps across an expansive network of blockchains and tokens
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 md:mt-8">
          <CommonBtn btntext="Learn more about our services" />
        </div>
      </div>

    </>
  )
}

export default OurEcosystem
