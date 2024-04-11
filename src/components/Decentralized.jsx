import React from "react";
import { ClipboardData } from "./common/Icons";
import { decentralizedList } from "./common/Helper";

const Decentralized = () => {
  return (
    <div className="max-w-[1368px] mx-auto px-4 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 relative">
      <div>
        <div className="flex justify-center items-center gap-2">
          <ClipboardData />
          <p className="font-bold text-sm md:text-base text-white md:leading-[20.8px] font-manrope uppercase">
            Decentralized finance made simple
          </p>
        </div>
        <h2 className="text-white text-center pt-4 pb-4 sm:pb-5 font_actay_wide font-medium text-2xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[72px]">
          Help us break the <br className="hidden md:block" />
          chains
        </h2>
        <p className="font-normal text-sm md:text-base text-white text-opacity-60 md:leading-5 font-manrope text-center custom-xs:px-0 px-10">
          zkGUN was founded on a single mission: to simplify your
          <br className="hidden sm:block" /> crypto experience
        </p>
      </div>

      <div className="mt-20 flex flex-wrap max-w-[1216px] mx-auto gap-4">
        {decentralizedList.map((obj, index) => (
          <div
            key={index}
            className={` ${index === 0 || index === 3 ? "max-w-[460px]" : "w-[60.8%] h-full"
              } ${index === 3 ? "mt-[-278px]" : ""}`}
          >
            <div
              className={`bg-white-gradient rounded-[32px] p-[1px] ${index === 0 || index === 3 ? "max-w-[460px] w-full" : "w-auto"
                }`}
            >
              <div
                className={`text-white p-12 bg-firefly rounded-[32px] overflow-hidden ${index === 0 || index === 3 ? "pb-0" : ""
                  }`}
              >
                <h3 className="font_actay_wide font-medium text-xl sm:text-2xl md:text-3xl xl:text-4xl lg:!leading-9">
                  {obj.title}
                </h3>
                <p
                  className={`font-manrope font-normal !leading-5 text-white text-opacity-60 mt-4 ${index === 2 || index === 4 ? "" : "mb-10"
                    }`}
                >
                  {obj.description}
                </p>
                {obj.imageUrl ? (
                  <div className={`flex ${index === 3 ? "justify-end" : ""}`}>
                    <img
                      className={`w-full max-w-[360px] max-h-[360px] h-full ${index === 3
                          ? "rotate-[37deg] -me-16 -mb-[107px]"
                          : "-mb-32 -ms-3"
                        }`}
                      src={obj.imageUrl}
                      alt={obj.title}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Decentralized;
