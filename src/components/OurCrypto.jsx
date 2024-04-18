import React from 'react';
import Lottie from "react-lottie-player";
import "swiper/css";
import "swiper/css/pagination";
import { coreValueCardList } from './common/Helper';
import ReactParallaxTilt from 'react-parallax-tilt';

const OurCrypto = () => {
    return (
        <>
            <div className="md:grid grid-cols-3 gap-4">
                {coreValueCardList.map((obj, index) => {
                    return (
                        <ReactParallaxTilt
                            tiltMaxAngleX={2}
                            tiltMaxAngleY={2}
                            perspective={600}
                            data-aos={obj.aosAnimation}
                            key={index} className="card_border group duration-300 max-w-[500px] mx-auto p-[1px] overflow-hidden rounded-[20px] md:rounded-[32px]">
                            <div
                                className={`${obj.gridCenter} bg-firefly p-6 lg:p-10 rounded-[20px] md:rounded-[32px] relative overflow-hidden flex flex-col justify-between lg:justify-start custom-xs:min-h-[303px] min-h-[302px] md:min-h-[295px] lg:min-h-[403px] xl:min-h-[420px] max-w-[500px] mx-auto sm:max-w-none`}
                            >
                                <span className="hidden md:inline-block bg-primary w-[200px] h-[100px] absolute -top-36 start-1/2 -translate-x-1/2 blur-[100px]"></span>
                                <span className="hidden md:inline-block group-hover:bg-primary duration-300 bg-scarlet w-[200px] h-[90px] absolute -bottom-44 start-1/2 -translate-x-1/2 blur-[100px]"></span>
                                <h3 className="text-white text-center custom-xs:text-2xl text-[30px] xl:text-4xl font-bold font-manrope !leading-[100%] uppercase">
                                    {obj.title}
                                </h3>
                                <div className="lg:my-8 xl:my-12 flex justify-center core_icons">
                                    <Lottie
                                        loop
                                        animationData={obj.lottieImage}
                                        play
                                        className="max-w-[122px] w-full"
                                    />
                                </div>
                                <p className="text-white max-w-[400px] mx-auto text-center font-manrope font-normal text-sm md:text-base !leading-[130%]">
                                    {obj.description}
                                    <span className="text-white text-opacity-60">
                                        {obj.spandescription}
                                    </span>
                                </p>
                            </div>
                        </ReactParallaxTilt>

                    );
                })}
            </div>
        </>
    )
}

export default OurCrypto