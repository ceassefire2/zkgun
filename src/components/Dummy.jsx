import React from "react";
import { ClipboardData } from "./common/Icons";
import { decentralizedList } from "./common/Helper";
import star from "../assets/images/png/star.png";
import freedom from "../assets/images/png/freedom.png";

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
      <div className="grid sm:grid-cols-2 gap-4 lg:hidden mt-6 sm:mt-8 md:mt-12 ">
        {decentralizedList.map((value, index) => {
          return (
            <div key={index} className=" bg-white-gradient p-[1px] rounded-2xl md:rounded-[32px] ">
              <div className="bg-firefly h-full rounded-2xl md:rounded-[32px] text-white p-4 sm:p-6 md:p-8">
                <h3 className="font_actay_wide font-medium text-xl sm:text-2xl md:text-3xl xl:text-4xl lg:!leading-9">
                  {value.title}
                </h3>
                <p
                  className="font-manrope font-normal !leading-5 text-white text-opacity-60 mt-4"
                >
                  {value.description}
                </p>
                {value.imageUrl ? (
                  <img
                    className="w-full max-w-[180px] max-h-[170px] mx-auto mt-4"
                    src={value.imageUrl}
                    alt={value.title}
                  />
                ) : (
                  ""
                )}
                {value.subImage ? (<img
                  className="w-full max-w-[103px] min-h-[120px] mx-auto -mt-4"
                  src={value.subImage}
                  alt="img"
                />) : ""}

                {value.subtitle ? (<p className="text-white px-3 font-bold text-sm md:text-base md:!leading-5 text-center pt-4">{value.subtitle}</p>) : ""}

              </div>
            </div>
          )
        })}
      </div>

      <div className="lg:flex hidden gap-4 justify-center lg:mt-16 xl:mt-20">
        <div className="lg:max-w-[348px] xl:max-w-[460px] w-full min-h-[520px] bg-white-gradient p-[1px] rounded-[32px]">
          <div className="bg-firefly rounded-[32px] h-full p-10 xl:p-12 overflow-hidden relative">
            <h3 className="font_actay_wide font-medium text-xl sm:text-2xl md:text-3xl xl:text-4xl lg:!leading-9 text-white">
              No red tape—just freedom
            </h3>
            <p
              className="font-manrope font-normal !leading-5 text-white text-opacity-60 mt-4"
            >
              We kick KYC back to the past and embrace a non-custodial approach, giving you the freedom to manage your crypto your way. At zkGUN, you're in control, with the autonomy to move your assets freely while shielded by RAILGUN-enhanced security measures
            </p>
            <img
              className="w-full max-w-[300px] xl:max-w-[360px] absolute"
              src={freedom}
              alt="img"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="max-w-[626px] xl:max-w-[740px] w-full min-h-[220px] p-[1px] bg-white-gradient rounded-[32px]">
            <div className="bg-firefly h-full rounded-[32px] p-10 xl:p-12 flex flex-col justify-center">
              <h3 className="font_actay_wide font-medium text-xl sm:text-2xl md:text-3xl xl:text-4xl lg:!leading-9 text-white ">
                Swap without limits
              </h3>
              <p
                className="font-manrope font-normal !leading-5 text-white text-opacity-60 mt-4"
              >
                Our platform lets you exchange any amount of crypto across multiple chains quickly and without fuss. We’re talking minutes, not hours, making sure you’re always a step ahead in the fast-moving crypto market
              </p>
            </div>
          </div>
          <div className="max-w-[262px] xl:max-w-[264px] min-h-[284px] w-full bg-white-gradient px-[1px] rounded-[32px] ">
            <div className="h-full bg-firefly rounded-[32px] px-6 xl:px-8 flex flex-col justify-center">
              <img
                className="w-full max-w-[103px] min-h-[120px] mx-auto"
                src={freedom}
                alt="img"
              />
              <p className="text-white px-3 font-bold text-base !leading-5 text-center pt-4">Decentralized finance made simple</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex hidden gap-4 mt-4 justify-center items-end h-full mb-[-300px] -translate-y-[300px]">
        <div className="max-w-[626px] xl:max-w-[740px] w-full min-h-[220px] h-full p-[1px] bg-white-gradient rounded-[32px]">
          <div className="h-full rounded-[32px] min-h-[220px] bg-firefly px-10 xl:px-12 flex flex-col justify-center">
            <h3 className="font_actay_wide font-medium text-xl sm:text-2xl md:text-3xl xl:text-4xl lg:!leading-9 text-white ">
              More than just <br /> a swap service
            </h3>
            <p
              className="font-manrope font-normal !leading-5 text-white text-opacity-60 mt-4"
            >
              zkGUN goes beyond basic swapping. Our ERC-4337 compliant wallet introduces gasless transactions to boost your crypto handling experience. Plus, our Telegram Bot brings swapping directly to your chat window for extra convenience
            </p>
          </div>
        </div>
        <div className="lg:max-w-[348px] xl:max-w-[460px] w-full min-h-[520px] bg-white-gradient rounded-[32px] p-[1px]">
          <div className="h-full min-h-[520px] bg-firefly rounded-[32px] p-10 xl:p-12 relative overflow-hidden">
            <h3 className="font_actay_wide font-medium text-xl sm:text-2xl md:text-3xl xl:text-4xl lg:!leading-9 text-white">
              Privacy at our core
            </h3>
            <p
              className="font-manrope font-normal !leading-5 text-white text-opacity-60 mt-4"
            >
              Your privacy is our top priority. We integrate Zero-Knowledge Privacy into our app, ensuring your transactions stay anonymous and secure. With zkGUN, your crypto actions remain yours alone, transparent only to you.
            </p>
            <img
              className="w-full max-w-[300px] xl:max-w-[350px] absolute"
              src={star}
              alt="img"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Decentralized;
