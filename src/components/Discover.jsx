import React from "react";
import mobile_z_logo from "../assets/images/png/mobile-z-logo-transparent.png";
import first_img from "../assets/images/png/monero.png";
import third_img from "../assets/images/png/tezor.png";
import z_logo from "../assets/images/png/z-logo-transparent.png";
import joinZKlogo from "../assets/images/png/z-logo.png";
import dollor_img from "../assets/images/webp/dai-dollor.webp";
import flow from "../assets/images/webp/flow.webp";
import gradient from "../assets/images/webp/gradient.webp";
import CommonBtn from "./common/CommonBtn";
import { GradientImage, MobileGradientImage } from "./common/Icons";
import ReactParallaxTilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const Discover = () => {
  return (
    <>
      <div id="community" className="max-w-[1400px] mx-auto px-4 md:px-5">
        <div className="bg-white-gradient p-[1px] rounded-[32px] relative">
          <div className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 rounded-[32px] bg-firefly relative  overflow-hidden">
            <span className="block w-[234px] h-[643px] red_blur -bottom-[120px] start-[-285px] rounded-[50%] blur-[240px] bg-opacity-[48%] absolute"></span>
            <span className="block w-[227px] h-[386px] z-10 green_blur -top-[100px] end-[-147px] rounded-[50%] blur-[240px] bg-opacity-[48%] absolute"></span>
            <div className="absolute hidden sm:flex bottom-0 end-0">
              <GradientImage />
            </div>
            <div className="absolute sm:hidden bottom-[70px] end-0">
              <MobileGradientImage />
            </div>
            <img
              className="absolute hidden md:flex max-w-[260px] bottom-0 start-0 w-full "
              width={260}
              src={gradient}
              alt="zklogo"
            />
            <img
              className="absolute hidden md:flex md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] w-full top-0 start-0 "
              width={600}
              src={z_logo}
              alt="zklogo"
            />
            <img
              className="absolute max-w-[200px] w-full md:hidden top-0 start-0"
              width={100}
              src={mobile_z_logo}
              alt="zklogo"
            />
            <img
              className="hero_polkadot !shadow-none absolute max-w-8 sm:max-w-10 md:max-w-14 lg:max-w-16 w-full top-[77px] sm:start-4 md:start-[12%] -start-4 sm:top-[66px] lg:start-[22%]"
              height={64}
              width={64}
              src={first_img}
              alt="zklogo"
            />
            <img
              className="hero_polkadot bg-lightPink rounded-full !shadow-none absolute max-w-[70px] sm:max-w-20 md:max-28 lg:max-w-40 -rotate-[37deg] bottom-[42%] -start-[50px] sm:bottom-10 md:bottom-4 md:start-[-2%] lg:bottom-[-36px] lg:start-[3%]"
              height={160}
              width={160}
              src={flow}
              alt="zklogo"
            />
            <img
              className="absolute hero_polkadot !shadow-none max-w-[26px] w-full sm:max-w-9 md:max-14 lg:max-w-16 bottom-28 sm:end-4 md:bottom-16 md:end-10 -end-2 lg:bottom-[66px] lg:end-[22%]"
              height={64}
              width={64}
              src={third_img}
              alt="zklogo"
            />
            <div className="relative">
              <span className="lg:h-[114px] lg:w-[114px] h-[40px] sm:h-16 md:h-24 w-[40px] sm:w-16 md:w-24 bg-gold bg-opacity-75 absolute rotate-[-26.9deg] -top-9 lg:-top-[77px] end-[13%] sm:end-[11%] blur-[33px] sm:blur-[63px] block"></span>
              <img
                className="absolute dollor_icon bg-fireBush rounded-full max-w-[50px] w-full sm:max-w-16 md:max-w-24 lg:max-w-[140px] rotate-[-26.9deg] -top-[37px] md:-top-16 lg:-top-[106px] end-[10%]"
                height={140}
                width={140}
                src={dollor_img}
                alt="zklogo"
              />
            </div>
            <div className="relative z-10 custom-2xs:px-4 px-6">
              <div className="text-center">
                <ReactParallaxTilt
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1000}
                  className="inline-block"
                >
                  <img
                    data-aos="zoom-out"
                    className="max-w-[39px] sm:max-w-12 md:max-w-[70px] lg:max-w-[84px] w-full sm:mx-auto"
                    height={84}
                    width={77}
                    src={joinZKlogo}
                    alt="zklogo"
                  />
                </ReactParallaxTilt>
              </div>
              <h2
                data-aos="fade-right"
                className="max-w-[1200px] custom-2xs:text-4xl custom-xs:text-3xl uppercase mx-auto text-white sm:text-center pt-6 font_actay_wide font-medium text-custom-md sm:text-5xl md:custom-2md lg:text-7xl !leading-[100%]"
              >
                Discover freedom <br className="hidden xl:block" />
                in every transaction
              </h2>
              <p
                data-aos="fade-left"
                className="text-white sm:mx-auto  sm:text-center text-sm md:text-base !leading-[130%] font-manrope font-normal sm:max-w-[512px] py-4 text-opacity-60"
              >
                Our platform offers a robust and reliable solution for anyone in
                the ecosystem. It's time to join a community where every crypto
                enthusiast can find their place.
              </p>
              <div

                data-aos="zoom-in"
                className="flex justify-center w-full mt-2 mb-6 md:mb-0"
              >
                <Link
                  rel="noreferrer"
                  target="_blank"
                  to="https://app.zkgun.org"
                  className=""
                >
                  <CommonBtn btntext={"swap now"} maxWidth="max-w-[152px]" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
