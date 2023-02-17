import React from "react";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <div>
      <div className="h-full md:h-[780px] grid md:grid-cols-2">
        <div className="h-full bg-[#34D186] p-4">
          <div className="max-w-[522px] mx-auto md:pt-[148px] text-white">
            <h1 className="text-[36px] md:text-[72px] leading-[80px] font-semibold">
              The fast, affordable way to earn with a ride.
            </h1>
            <div className="mt-[51px] mb-[21px]">
              Download the Cab Services app
            </div>
            <div className="flex gap-x-4">
              <Image src="/images/svg0.svg" width={133} height={38} alt="" />
              <Image src="/images/svg1.svg" width={153} height={48} alt="" />
            </div>
            <p className="mt-[40px] md:mt-[83px]">REQUEST A RIDE ONLINE</p>
          </div>
        </div>
        <div className="h-[500px] relative md:h-full">
          <Image src="/images/driver.jpg" objectFit="cover" fill alt="" />
        </div>
      </div>
      <div className="relative h-auto md:h-[243px] bg-[#4F5CD1] flex items-center justify-center">
        <div className="hidden md:block absolute top-0 left-[161px] h-full w-[756px]">
          <Image src="/images/Large Circle.svg" fill alt="" />
        </div>
        <div className="hidden md:block absolute top-0 right-[139px] h-[83px] w-[258px]">
          <Image src="/images/Small Circle.svg" fill alt="" />
        </div>
        <div className="z-10 relative flex flex-col gap-y-4 py-4 md:flex-row gap-x-[143px] items-center">
          <div className="text-white">
            <p className="text-[35px] leading-[44px]">
              Earn extra money driving
            </p>
            <p className="text-[18px] leading-[22px] mt-[9px]">
              Set your own schedule, be your own boss
            </p>
          </div>
          <Button>SIGN UP TO DRIVE</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
