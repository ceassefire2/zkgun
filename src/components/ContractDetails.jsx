import React, { useState } from "react";
import { EtherscanIcon, DexToolsIcon, CopyIcon, CheckIcon } from "./common/Icons";

const ContractDetails = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("0x6873C95307e13bEB58Fb8FCdDf9a99667655c9e4")
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  return (
    <div className="flex flex-nowrap flex-col items-center justify-center text-white max-w-[1400px] mx-auto px-4 md:px-5 py-[30px] text-xs sm:text-sm md:text-base">
      <div className="flex flex-nowrap flex-row items-center justify-center gap-1 max-w-[340px] sm:max-w-full">
        <span>CA:</span>
        <span className="block max-w-full whitespace-nowrap overflow-hidden overflow-ellipsis ">0x6873C95307e13bEB58Fb8FCdDf9a99667655c9e4</span>
        {!copied
          ? <CopyIcon
            className="h-[20px] cursor-pointer"
            onClick={handleCopy}
          />
          : <CheckIcon className="h-[20px]" />
        }
      </div>
      <div
        data-aos="fade-zoom-in"
        className="mt-2 flex justify-center gap-[22px] sm:gap-3 w-full"
      >    <a
        rel="noreferrer"
        target="_blank"
        href="https://etherscan.io/token/0x6873C95307e13bEB58Fb8FCdDf9a99667655c9e4"
        className="py-[15px] px-8 hover:scale-105 duration-300 rounded-[100px] w-auto flex justify-center items-center bg-[#20315a] cursor-pointer"
      >
          <EtherscanIcon />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.dextools.io/app/en/ether/pair-explorer/0xd0fcb8bfe5ceff6601c4e09ce1a5b2ba96d0058c?t=1717618025465"
          className="py-[15px] px-8 hover:scale-105 duration-300 rounded-[100px] w-auto flex justify-center bg-[#142028] cursor-pointer"
        >
          <DexToolsIcon />
        </a>
      </div>
    </div>
  );
};
export default ContractDetails;
