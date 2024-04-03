import React from 'react'
import { ClipboardData } from './common/Icons'
import CommonBtn from './common/CommonBtn'

const Finance = () => {
    return (
        <>
            <div className="max-w-[1368px] mx-auto px-4 xl:p-0 bg-[#03031b]">
                <div className="flex justify-center items-center gap-2">
                    <ClipboardData />
                    <p className='font-bold text-sm md:text-base text-white md:leading-[20.8px] font-manrope'>Fast and secure decentralized finance</p>
                </div>
                <h3 className='font-over font-medium text-center text-white pt-4'>
                    Swap crypto across chains without a hitch, leveraging our deep liquidity pools from over 20+ sources for instant, vast transactions.
                    <span className='text-[#9a9aa4]'>
                        Our ERC-4337 wallet is your ticket to a seamless, gas-free crypto experience, enhanced with RAILGUN for enhanced privacy when swapping your wallets
                    </span>
                </h3>
                <div className="flex justify-center mt-8">
                    <CommonBtn />
                </div>
            </div>

        </>
    )
}

export default Finance