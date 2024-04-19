import React, { useEffect, useState } from 'react'
import documentHexagon from '../assets/images/png/document-hexagon.png'
import { documentDataList, documentationList } from './common/Helper'
import { DocumentHexagonIcon, LeftArrowMobile, RightArrowMobile } from './common/Icons'

const Document = () => {
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
            <span onClick={() => setIsOpen(false)} className={`${isOpen ? "w-full h-full absolute bg-black bg-opacity-50 top-0 start-0 z-[100]" : ""}`}></span>
            <div className="relative mt-3 border-t border-white border-opacity-5">
                <span className="hero_right_hexagon absolute -rotate-[16deg] sm:rotate-0 md:-end-48 top-[19%] -z-[1] hidden md:block">
                    <DocumentHexagonIcon />
                </span>
                <img className='absolute bottom-0 start-0 max-w-[400px] hidden md:block w-full' src={documentHexagon} alt="document" />
                <div className="danger_blur bg-primary-color-gradient blur-[1244px] h-[574px] w-[461px] absolute top-[48%] start-[60%] -translate-x-1/2 rounded-full hidden opacity-[18%] md:block"></div>
                <div className="danger_blur bg-doucmentation blur-[844px] h-[776px] w-[436px] absolute top-[18%] -end-[53%] lg:-end-[40%] xl:-end-[26%] rounded-full hidden !opacity-[48%] md:block"></div>
                <div className="max-w-[1400px] mx-auto px-4 md:px-5 pb-[50px] md:pb-16 xl:pb-20 ">
                    <div className="flex items-start md:gap-6 lg:gap-[34px] w-full">
                        <div className={`md:sticky fixed top-[0px] bg-blackPearl md:start-0 md:w-[28%] lg:w-[24%] xl:w-[22%] border-e border-white border-opacity-5 shadow-[0px_0px_120.3px_0px_#0000000D]
                    max-w-[230px] md:max-w-full w-full -start-[230px]  transition-all duration-300 min-h-screen
                        ${isOpen ? "start-0 z-[200]" : ""}    `}>
                            <div className='relative pb-10 pt-16 md:pt-10 ps-4 md:ps-0 pe-4'>
                                <span className='block w-[200%] min-h-screen h-full bg-blackPearl absolute end-0 top-0 z-0'></span>
                                <div onClick={() => setIsOpen(false)} className="absolute inline-block top-4 end-4 cursor-pointer md:hidden">
                                    <LeftArrowMobile />
                                </div>
                                <div className="bg-primary-color-gradient blur-[534px] h-[418px] w-[235px] absolute top-[28%] start-1/2 -translate-x-1/2 rounded-full hidden opacity-[18%] md:block"></div>
                                {documentationList.map((value, index) => {
                                    return (
                                        <div key={index} className='z-10 relative'>
                                            <p className='text-white text-lg md:text-xl !leading-[100%] font_actay_wide font-bold'>{value.title}</p>
                                            <div className="gap-[4px] max-w-[208px] w-full flex flex-col mt-[15px] mb-6 border-s border-white border-opacity-10 ">
                                                <p onClick={() => setIsOpen(false)} className={`font-manrope text-sm md:text-base text-white ps-4 text-opacity-70 duration-300 hover:!text-opacity-100 hover:max-w-[208px] hover:w-full py-1.5 hover:bg-white hover:bg-opacity-5 hover:before:duration-300 before:absolute hover:before:w-0.5 before:h-full before:bg-white before:start-[-1px] before:top-0 before:duration-300 relative hover:border-white hover:rounded-e-[4px]`}>{value.firstLink}</p>
                                                {value.secondLink && <p onClick={() => setIsOpen(false)} className='font-manrope ps-4 text-sm md:text-base text-white text-opacity-70 duration-300 hover:!text-opacity-100 hover:max-w-[208px] hover:w-full py-1.5 hover:bg-white hover:bg-opacity-5 hover:before:duration-300 before:absolute hover:before:w-0.5 before:h-full before:bg-white before:start-[-1px] before:top-0 before:duration-300 relative hover:border-white hover:rounded-e-[4px]'>{value.secondLink}</p>}
                                                {value.thirdLink && <p onClick={() => setIsOpen(false)} className='font-manrope ps-4 text-sm md:text-base text-white text-opacity-70 duration-300 hover:!text-opacity-100 hover:max-w-[208px] hover:w-full py-1.5 hover:bg-white hover:bg-opacity-5 hover:before:duration-300 before:absolute hover:before:w-0.5 before:h-full before:bg-white before:start-[-1px] before:top-0 before:duration-300 relative hover:border-white hover:rounded-e-[4px]'>{value.thirdLink}</p>}
                                                {value.fourthLink && <p onClick={() => setIsOpen(false)} className='font-manrope ps-4 text-sm md:text-base text-white text-opacity-70 duration-300 hover:!text-opacity-100 hover:max-w-[208px] hover:w-full py-1.5 hover:bg-white hover:bg-opacity-5 hover:before:duration-300 before:absolute hover:before:w-0.5 before:h-full before:bg-white before:start-[-1px] before:top-0 before:duration-300 relative hover:border-white hover:rounded-e-[4px]'>{value.fourthLink}</p>}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="md:w-[72%] lg:w-[74%] xl:w-[78%] flex flex-col items-start md:flex-row pt-6 md:pt-0">
                            <span onClick={() => setIsOpen(true)} className="cursor-pointer block md:hidden">
                                <RightArrowMobile />
                            </span>
                            <div className="flex flex-col gap-10 lg:gap-[60px] pt-10">
                                {documentDataList.map((value, index) => {
                                    return (
                                        <div key={index} className="">
                                            <h4 className='text-white text-xl md:text-2xl lg:text-custom-2sm !leading-[100%] font_actay_wide font-bold'>{value.title}</h4>
                                            <p className='text-white pt-4 lg:pt-5 !leading-[130%] md:!leading-[160%] font-manrope text-sm md:text-base lg:text-lg font-normal text-opacity-70'>{value.description}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Document