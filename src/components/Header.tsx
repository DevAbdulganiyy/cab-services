import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-white h-[100px] p-4 overflow-hidden">
      <div className="w-full md:max-w-[1180px] mx-auto flex items-center gap-x-4 font-medium">
        <Link href="/">
          <Image src="/images/logomain.jpg" width={70} height={31} alt="Logo" />
        </Link>
        <div className="hidden md:flex items-center gap-x-4">
          <Link href="/">Car Sharing</Link>
          <Link href="/">Become a Driver</Link>
          <Link href="/">Sign Up</Link>
          <Link href="/">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
