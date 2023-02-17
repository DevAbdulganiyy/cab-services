import React from "react";
import Image from "next/image";

const Benefits = () => {
  return (
    <div>
      <div className="md:h-[624px] px-4 md:pt-[124px]">
        <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row gap-x-[143px] py-4">
          <div>
            <Image src="/images/car.svg" width={170} height={65} alt="" />
            <p className="mt-[51px] mb-4 text-[35px] leading-[44px]">
              Get a ride
            </p>
            <p>Cab services offers you a ride in minutes.</p>
          </div>
          <div>
            <Image src="/images/wallet.svg" width={145} height={114} alt="" />
            <p className="mt-[48px] mb-4 text-[35px] leading-[44px]">
              The best prices
            </p>
            <p>
              We aim to offer the best ride prices in every city. See for
              yourself!
            </p>
          </div>
          <div>
            <Image src="/images/use.svg" width={108} height={140} alt="" />
            <p className="mt-[33px] mb-4 text-[35px] leading-[44px]">
              Easy to use
            </p>
            <p>Get wherever you need to go as quickly as possible</p>
          </div>
        </div>
      </div>
      <div className="relative md:h-[457px] bg-[#D9FDE5] p-4 md:px-[120px] md:py-[136px]">
        <h2 className="font-semibold text-[48px] leading-[61px]">
          Get a ride in minutes!
        </h2>
        <p className="max-w-[530px] mt-[34px]">
          Pick your destinaton, request a ride, meet your driver, enjoy the
          journey
        </p>
        <div className="absolute md:w-[774px] md:h-[754px] -top-[301px] right-0">
          <Image src="/images/Phone mockup.svg" fill alt="" />
        </div>
      </div>
      <div className="h-[495px] pt-4 md:pt-[150px] px-4">
        <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row gap-y-4 md:gap-x-[143px]">
          <div>
            <Image src="/images/smallcar.svg" width={50} height={50} alt="" />
            <p className="mt-[27px] mb-[14px] text-[24px] leading-[25px]">
              Safe and convenient
            </p>
            <p>Moving with Cab Services is easy, convenient and fast.</p>
          </div>
          <div>
            <Image src="/images/Heart.svg" width={50} height={50} alt="" />
            <p className="mt-[27px] mb-[14px] text-[24px] leading-[25px]">
              Always there for you
            </p>
            <p>Get fast support, whenever you need it.</p>
          </div>
          <div>
            <Image src="/images/Group 5.svg" width={50} height={50} alt="" />
            <p className="mt-[27px] mb-[14px] text-[24px] leading-[25px]">
              Easy to use
            </p>
            <p>Get wherever you need to go as quickly as possible</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
