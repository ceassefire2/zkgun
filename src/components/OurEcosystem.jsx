import React from 'react'
import { ClipboardData } from './common/Icons'
import CommonBtn from './common/CommonBtn'
import img_first from '../assets/images/png/our-eco-img-first.png'
import { ourEcoCardList } from './common/Helper'

const OurEcosystem = () => {
  return (
    <>
      <div className="max-w-[1368px] mx-auto px-4 xl:p-0 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="flex justify-center items-center gap-2">
          <ClipboardData />
          <p className='font-bold text-sm uppercase md:text-base text-white md:leading-[20.8px] font-manrope'>
            Our ecosystem
          </p>
        </div>
        <h2 className='text-white mx-auto max-w-[1037px] text-center pt-4 font_over font-medium text-3xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[72px]'>
          Decentralized network diversity
        </h2>
        <div className="gradient_border hidden md:block  max-w-[1216px] mx-auto h-full relative overflow-hidden mt-6 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 
                                        before:absolute before:w-full before:h-full after:absolute after:bg-black after:rounded-[57px] lg:after:lg:rounded-[88.37px] after:w-[calc(100%-2px)] after:h-[calc(100%-2px)]
                                        text-white  rounded-[32px]">
          <div className="p-12 m-[1px]  rounded-[32px] relative z-50 bg-firefly ">
            <div className="flex">
              <div className="w-1/2 flex flex-col justify-between items-start">
                <p className='text-white inline-block rounded-[100px] text-sm md:text-base font-normal leading-[20.8px] font-manrope py-2 px-4 bg-dark'>Trade without limits</p>
                <div>
                  <h3 className='font_over font-medium max-w-[355px] text-xl sm:text-2xl md:text-3xl xl:text-4xl lg:leading-[36px] text-white'>
                    Anonymous cross-chain swap
                  </h3>
                  <p className='text-white max-w-[555px] pt-4 font-manrope font-normal text-sm md:text-base md:leading-[20.8px]'>
                    Trade without limits or custody.
                    <span className='text-white text-opacity-60'>
                      Our platform offers unmatched rates and fast swaps across an expansive network of blockchains and tokens
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-1/2 flex justify-end">
                <img className='max-w-[370px] w-full max-h-[343px] rotate-[59deg]' src={img_first} alt="img" height={343} width={343} />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1216px] mx-auto pt-6 md:pt-4 flex flex-col md:flex-row gap-4">
          {ourEcoCardList.map((value, index) => {
            return (
              <div className={`p-6 lg:p-9 xl:p-12 w-full md:w-1/2 border rounded-2xl sm:rounded-[32px] flex flex-col justify-between bg-firefly ${value.hidden} `}>
                <div className="flex flex-col sm:flex-row justify-between items-start">
                  <p className='text-white inline-block rounded-[100px] text-sm md:text-base font-normal leading-[20.8px] font-manrope py-2 px-4 bg-dark'>
                    {value.badge}
                  </p>
                  <img className={`max-w-[200px] mx-auto sm:mx-0 md:max-w-[110px] w-full lg:max-w-[150px] xl:max-w-[200px] ${value.rotate}`} height={200} width={200} src={value.image} alt="img" />
                </div>
                <div className='pt-3.5'>
                  <h3 className='font_over font-medium text-xl sm:text-2xl md:text-3xl xl:text-4xl lg:leading-[36px] text-white'>
                    {value.title}
                  </h3>
                  <p className='text-white max-w-[555px] pt-4 font-manrope font-normal text-sm md:text-base md:leading-[20.8px]'>
                    {value.description}
                    <span className='text-white text-opacity-60'>
                      {value.spandescription}
                    </span>
                  </p>
                </div>
              </div>
            )
          })}


        </div>
        <div className="flex justify-center mt-6 md:mt-8">
          <CommonBtn btntext="Learn more about our services" />
        </div>
      </div>

    </>
  )
}

export default OurEcosystem
