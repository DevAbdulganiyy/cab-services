import React, { FC, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

interface SocialIconProps {
  children: ReactNode;
}

const SocialIcon: FC<SocialIconProps> = ({ children }) => {
  return (
    <span className="border-2 rounded-full border-black w-[40px] h-[40px] flex justify-center items-center">
      {children}
    </span>
  );
};

const Footer = () => {
  return (
    <div className="">
      <div className="h-[390px] bg-[#2DB775] flex justify-center items-center flex-col text-white p-4">
        <h3 className="text-[48px] leading-[61px] font-semibold mb-[19px]">
          Ready to ride?
        </h3>
        <div className="flex gap-x-4">
          <Image src="/images/svg0.svg" width={133} height={38} alt="" />
          <Image src="/images/svg1.svg" width={153} height={48} alt="" />
        </div>
        <p className="mt-[29px]">Or sign up to start driving</p>
      </div>
      <div className="py-[50px]">
        <div className="max-w-[1180px] mx-auto">
          <div className="flex flex-col md:flex-row gap-x-10 px-4">
            <div>
              <Link href="/">
                <Image
                  src="/images/logomain.jpg"
                  width={70}
                  height={41}
                  alt="Logo"
                />
              </Link>
              <div className="flex gap-x-4">
                <Image src="/images/svg0.svg" width={133} height={38} alt="" />
                <Image src="/images/svg1.svg" width={153} height={48} alt="" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-[20px] leading-[25px] mb-4">
                Services
              </h3>
              <div className="flex flex-col gap-y-4 text-[#2F313F] text-[16px] leading-[20px] font-medium">
                <span>Car Outsourcing</span>
                <span>Ride Sharing</span>
                <span>Get a Car and Pay Later</span>
                <span>Hire a Driver</span>
                <span>Professional Driving Certification</span>
                <span>Driver Development Training/Workshop</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-5 items-center">
            <p>© 2023 Cab Services Technology</p>
            <div className="flex gap-x-2">
              <SocialIcon>
                <FaFacebookF />
              </SocialIcon>
              <SocialIcon>
                <FaTwitter />
              </SocialIcon>
              <SocialIcon>
                <FaInstagram />
              </SocialIcon>
              <SocialIcon>
                <FaLinkedinIn />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
