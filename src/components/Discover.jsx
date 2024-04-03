import React from 'react'
import joinZKlogo from '../assets/images/png/download.png'
import first_img from '../assets/images/png/download.png'
import second_img from '../assets/images/png/download.png'
import third_img from '../assets/images/png/download.png'
import dollor_img from '../assets/images/png/download.png'
import CommonBtn from './common/CommonBtn'


const Discover = () => {
    return (
        <>
            <div className='max-w-[1368px] mx-auto px-4 xl:p-0 '>
                <div className="bg-white-gradient p-[1px] rounded-[32px]">
                    <div className=" py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 rounded-[32px] bg-firefly relative  overflow-hidden">

                        <img
                            className='absolute rotate-[30deg] top-[66px] start-[22%]'
                            height={64}
                            width={64}
                            src={first_img}
                            alt="zklogo" />
                        <img
                            className='absolute rotate-[37deg] bottom-[-36px] start-[2%]'
                            height={160}
                            width={160}
                            src={second_img}
                            alt="zklogo" />
                        <img
                            className='absolute rotate-[-29deg] bottom-[66px] end-[22%]'
                            height={64}
                            width={64}
                            src={third_img}
                            alt="zklogo" />
                        <img
                            className='absolute rotate-[26deg] top-[-36px] end-[10%]'
                            height={140}
                            width={140}
                            src={dollor_img}
                            alt="zklogo" />
                        <div className="relative z-10 px-4">
                            <img
                                className='mx-auto'
                                height={84}
                                width={77}
                                src={joinZKlogo}
                                alt="zklogo" />
                            <h2 className='max-w-[1200px] mx-auto text-white text-center pt-6 font_over font-medium text-3xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[72px]'>
                                Discover freedom <br className='hidden xl:block' />in every transaction
                            </h2>
                            <p className='text-white mx-auto text-center text-sm md:text-base md:leading-[20.8px] font-manrope font-normal max-w-[512px] py-4 text-opacity-60'>
                                Our platform offers a robust and reliable solution for anyone in the ecosystem. It's time to join a community where every crypto enthusiast can find their place
                            </p>
                            <div className="mt-2 flex justify-center">
                                <CommonBtn btntext="Swap now" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Discover