import React from "react";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="flex justify-between items-center py-1 px-5 bg-[#F5BCD9]">
      <div>
        <Image src="/logo.png" alt="logo" width={90} height={50} />
      </div>
      <div className="flex">
        <button className="px-3">
          <AiFillGithub className="text-[#894862] text-3xl" />
        </button>
        <button className="px-3">
          <AiFillLinkedin className="text-[#894862] text-3xl" />
        </button>
        <button className="px-3">
          <SiGmail className="text-[#894862] text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
