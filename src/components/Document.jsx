import React, { useEffect, useState } from 'react'
import { documentDataList, documentationList } from './common/Helper'
import { CloseIcon, LeftArrowMobile, RightArrowMobile, ThreeDotsIcon } from './common/Icons'

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
                {/* <div className="danger_blur bg-doucmentation blur-[844px] h-[776px] w-[436px] absolute top-[20%] -end-[45%] lg:-end-[26%] rounded-full hidden !opacity-[48%] sm:block"></div> */}
                <div className="max-w-[1400px] mx-auto px-4 md:px-5 pb-[50px] md:pb-16 xl:pb-20 flex items-start md:gap-6 lg:gap-[34px]">
                    
                    <div className={`md:sticky fixed top-[0px] bg-blackPearl md:start-0 md:w-[28%] lg:w-[24%] xl:w-[21%] border-e border-white border-opacity-5 shadow-[0px_0px_120.3px_0px_#0000000D]
                    max-w-[230px] w-full -start-[230px]  transition-all duration-300 min-h-screen
                        ${isOpen ? "start-0 z-[200]" : ""}    `}>
                        <div className='relative pb-10 pt-16 md:pt-10 ps-4 md:ps-0 pe-4'>
                            <span className='block w-[1000%] min-h-screen h-full bg-blackPearl absolute end-0 top-0 z-0'></span>
                            <div onClick={() => setIsOpen(false)} className="absolute inline-block top-4 end-4 cursor-pointer md:hidden">
                                <LeftArrowMobile />
                            </div>
                            {documentationList.map((value, index) => {
                                return (
                                    <div key={index} className='z-10 relative'>
                                        <p className='text-white text-lg md:text-xl lg:text-custom-sm xl:text-2xl !leading-[100%] font_actay_wide font-bold'>{value.title}</p>
                                        <div className="gap-2.5 flex flex-col mt-[15px] mb-6 border-s  border-white border-opacity-10 ">
                                            <p className={`font-manrope text-sm md:text-base text-white ps-4 text-opacity-70   ${value.className}`}>{value.firstLink}</p>
                                            {value.secondLink && <p className='font-manrope ps-4 text-sm md:text-base text-white text-opacity-70'>{value.secondLink}</p>}
                                            {value.thirdLink && <p className='font-manrope ps-4 text-sm md:text-base text-white text-opacity-70'>{value.thirdLink}</p>}
                                            {value.fourthLink && <p className='font-manrope ps-4 text-sm md:text-base text-white text-opacity-70'>{value.fourthLink}</p>}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="md:w-[72%] lg:w-[74%] xl:w-[79%] ms-auto flex flex-col md:flex-row pt-6 md:justify-end">
                        <div onClick={() => setIsOpen(true)} className="cursor-pointer md:hidden">
                            <RightArrowMobile />
                        </div>
                        <div className="flex flex-col gap-10 lg:gap-[60px] pt-10">
                            {documentDataList.map((value, index) => {
                                return (
                                    <div key={index} className="">
                                        <p className='text-white text-xl md:text-2xl lg:text-custom-2sm !leading-[100%] font_actay_wide font-bold'>{value.title}</p>
                                        <p className='text-white pt-4 md:pt-5 !leading-[160%] font-manrope text-sm md:text-base lg:text-lg font-normal'>{value.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Document