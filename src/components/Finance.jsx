import React from 'react'
import { ClipboardData } from './common/Icons'
import CommonBtn from './common/CommonBtn'

const Finance = () => {
    return (
        <>
            <div className="max-w-[1400px] mx-auto px-4 py-[50px] md:py-16 xl:py-20">
                <div className="flex justify-center items-center gap-2">
                    <ClipboardData />
                    <p className='font-bold !leading-[130%] text-base text-white md:leading-[20.8px] font-manrope uppercase'>Fast and secure decentralized finance</p>
                </div>
                <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 mb-8">
                    <CommonBtn btntext="more about us" />
                </div>
                <h3 className='font_actay_wide font-medium uppercase !leading-[120%] sm:text-center text-2xl md:text-3xl xl:text-4xl text-white'>
                    Swap crypto across chains without a hitch, leveraging our deep liquidity pools from over 20+ sources for instant, vast transactions.
                    {" "} <span className='text-[#9a9aa4]'>
                        Our ERC-4337 wallet is your ticket to a seamless, gas- free crypto experience, integrated with RAILGUN for enhanced privacy when performing transcanctions.
                    </span>
                </h3>

            </div>

        </>
    )
}

export default Finance