import React from "react";
import { ClipboardData, DollorClipBoard } from "./common/Icons";
import { decentralizedList } from "./common/Helper";
import star from "../assets/images/webp/star-image.webp";
import freedom from "../assets/images/webp/no-red-tap.webp";
import z_logo from "../assets/images/webp/gradient-z-image.webp";
import top_end from "../assets/images/png/decentralized-top-end.png";

const Decentralized = () => {
  return (
    <div className="relative mt-5 md:mt-16 xl:mt-20 ">
      <span className="sm:block hidden w-[437px] h-[809px] green_blur top-[340px] start-[-327px] rounded-[50%] blur-[320px] bg-opacity-[48%] -z-[1] absolute"></span>
      <img className="absolute top-[20%] lg:top-16 end-0 max-w-[300px] md:max-w-[400px] xl:max-w-[490px] -z-[1] hidden sm:block"
        src={top_end} alt="star_image" />
      <div className="max-w-[1400px] mx-auto px-4 py-[50px] md:py-16 xl:py-20 relative">
        <div>
          <div className="flex sm:justify-center items-center gap-2">
            <DollorClipBoard />
            <p className="font-bold text-base text-white !leading-[130%] font-manrope uppercase">
              Decentralized finance made simple
            </p>
          </div>
          <h2 className="text-white sm:text-center pt-4 pb-4 sm:pb-5 font_actay_wide font-medium text-[40px] sm:text-5xl md:text-6xl lg:text-7xl uppercase !leading-[100%]">
            Help us break the
            chains
          </h2>
          <p className="font-normal max-w-[871px] text-base md:text-base text-white text-opacity-60 !leading-[130%] font-manrope sm:text-center sm:mx-auto">
            zkGUN was founded on a single mission: to simplify and anonymize your crypto experience. Our cryptocurrency wallet and cross-chain swap platform offer a
            financial approach where crypto transactions are secure and straightforward as they are unrestricted. Why? Because we're here to transform the complex world of
            decentralized finance into something you can navigate with ease and confidence.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 lg:hidden mt-6 sm:mt-8 md:mt-12 ">
          {decentralizedList.map((value, index) => {
            return (
              <div key={index} className={`bg-white-gradient overflow-hidden relative p-[1px] rounded-2xl md:rounded-[32px] ${value.order}`}>
                <div className="bg-firefly h-full rounded-2xl md:rounded-[32px] text-white p-6 md:p-8">
                  {index === 4 && <div>
                    <span className="block w-[147px] h-[261px] green_blur -top-1/2 end-[-47px] rounded-[50%] blur-[130px] bg-opacity-[48%] absolute"></span>
                    <span className="block w-[137px] h-[244px] red_blur -bottom-[130px] rounded-[50%] start-[-110px] blur-[130px] bg-opacity-[48%] absolute"></span>
                  </div>}
                  <h3 className={`font_actay_wide font-medium uppercase text-2xl md:text-3xl xl:text-4xl !leading-[130%] w-full ${value.maxWidth}`}>
                    {value.title}
                  </h3>
                  <p
                    className="font-manrope font-normal !leading-[130%] text-sm md:text-base text-white text-opacity-60 mt-4"
                  >
                    {value.description}
                  </p>
                  {value.imageUrl ? (
                    <div className={`${value.className}`}>
                      <img
                        className={`w-full absolute max-w-[180px] ${value.position}`}
                        src={value.imageUrl}
                        alt={value.title}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  {value.subImage ? (<img
                    className="w-full max-w-[63px] mx-auto -mt-4"
                    src={value.subImage}
                    alt="img"
                  />) : ""}
                </div>
              </div>
            )
          })}
        </div>

        <div className="lg:flex hidden gap-4 justify-center lg:mt-16 xl:mt-20">
          <div className="lg:max-w-[348px] xl:max-w-[460px] w-full min-h-[520px] bg-white-gradient p-[1px] rounded-[32px]">
            <div className="bg-firefly rounded-[32px] h-full p-10 xl:p-12 overflow-hidden relative">
              <h3 className="font_actay_wide uppercase font-medium text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[100%] text-white">
                No red tape—just freedom
              </h3>
              <p
                className="font-manrope font-normal !leading-[130%] text-white text-opacity-60 mt-4"
              >
                We kick KYC back to the past and embrace a non-custodial approach, giving you the freedom to manage your crypto your way. At zkGUN, you're in control, with the autonomy to move your assets freely while shielded by RAILGUN-enhanced security measures
              </p>
              <img
                className="w-full max-w-[300px] xl:max-w-[360px] -start-2 -bottom-28 rotate-[136deg] absolute"
                src={freedom}
                alt="img"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="max-w-[626px] xl:max-w-[740px] w-full min-h-[220px] p-[1px] bg-white-gradient rounded-[32px]">
              <div className="bg-firefly h-full rounded-[32px] p-10 xl:p-12 flex flex-col justify-center">
                <h3 className="font_actay_wide uppercase font-medium text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[130%] text-white ">
                  Swap without limits
                </h3>
                <p
                  className="font-manrope font-normal !leading-[130%] text-white text-opacity-60 mt-4"
                >
                  Our platform lets you exchange any amount of crypto across multiple chains quickly and without fuss. We’re talking minutes, not hours, making sure you’re always a step ahead in the fast-moving crypto market
                </p>
              </div>
            </div>
            <div className="max-w-[262px] xl:max-w-[264px] min-h-[284px] w-full bg-white-gradient px-[1px] rounded-[32px] overflow-hidden relative">
              <div className="h-full bg-firefly relative rounded-[32px] px-6 xl:px-8 flex flex-col justify-center">
                <span className="block w-[137px] h-[244px] red_blur -bottom-[58px] start-[-140px] rounded-[50%] blur-[100px] bg-opacity-[48%] absolute"></span>
                <span className="block w-[147px] h-[261px] green_blur bottom-[78px] end-[-157px] rounded-[50%] blur-[120px] bg-opacity-[48%] absolute"></span>
                <img
                  className="w-full max-w-[103px] min-h-[120px] mx-auto"
                  src={z_logo}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex hidden gap-4 mt-4 justify-center items-end h-full mb-[-300px] -translate-y-[300px]">
          <div className="max-w-[626px] xl:max-w-[740px] w-full min-h-[220px] h-full p-[1px] bg-white-gradient rounded-[32px]">
            <div className="h-full rounded-[32px] min-h-[220px] bg-firefly px-10 xl:px-12 flex flex-col justify-center">
              <h3 className="font_actay_wide uppercase font-medium text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[130%] text-white ">
                More than just <br /> a swap service
              </h3>
              <p
                className="font-manrope font-normal !leading-[130%] text-white text-opacity-60 mt-4"
              >
                zkGUN goes beyond basic swapping. Our ERC-4337 compliant wallet introduces gasless transactions to boost your crypto handling experience. Plus, our Telegram Bot brings swapping directly to your chat window for extra convenience
              </p>
            </div>
          </div>
          <div className="lg:max-w-[348px] xl:max-w-[460px] w-full min-h-[520px] bg-white-gradient rounded-[32px] p-[1px]">
            <div className="h-full min-h-[520px] bg-firefly rounded-[32px] p-10 xl:p-12 relative overflow-hidden">
              <h3 className="font_actay_wide uppercase font-medium text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[130%] text-white">
                Privacy at our core
              </h3>
              <p
                className="font-manrope font-normal !leading-[130%] text-white text-opacity-60 mt-4"
              >
                Your privacy is our top priority. We integrate Zero-Knowledge Privacy into our app, ensuring your transactions stay anonymous and secure. With zkGUN, your crypto actions remain yours alone, transparent only to you.
              </p>
              <img
                className="w-full max-w-[300px] xl:max-w-[352px] -end-1 -bottom-[85px] rotate-[38deg] absolute"
                src={star}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decentralized;
