import React, { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Router from "next/router";

const Navbar = () => {
  const [burger, setBurger] = useState(true);

  // handle burger
  const handleBurger = () => {
    setBurger(!burger);
  };

  const goHome = () => {
    Router.push("/");
  };

  return (
    <div className="bg-[#F4EBF0]">
      <div className="flex justify-between items-center py-1 px-4 bg-[#F5BCD9]">
        <div>
          <Image src="/logo.png" alt="logo" width={90} height={50} />
        </div>
        <div className="smmax:hidden">
          <button
            className="mr-[70px] text-[#894862] font-bold active:text-[#894862] hover:text-[#894862]/60"
            onClick={() => goHome()}
          >
            Home
          </button>
          <button className="text-[#894862] font-bold active:text-[#894862] hover:text-[#894862]/60">
            About
          </button>
          <button className="mx-[70px] text-[#894862] font-bold hover:text-[#894862]/60">
            Works
          </button>
          <button className="text-[#894862] font-bold hover:text-[#894862]/60">
            Contact
          </button>
        </div>
        <button className="smmax:hidden rounded-full border-[#894862] border-[1px] px-3 py-[1px] text-[#894862] font-semibold bg-[#F4EBF0] shadow-white/70 active:shadow-inner active:shadow-black/40 hover:bg-[#894862] hover:text-[#F4EBF0] active:bg-[#F4EBF0] active:text-[#894862]">
          Say hello!
        </button>
        <button className="sm:hidden" onClick={() => handleBurger()}>
          {burger ? <GiHamburgerMenu /> : <AiOutlineClose />}
        </button>
      </div>
      {burger ? null : (
        <div className="text-center sm:hidden bg-[#F4EBF0] pb-2">
          <div className="my-3">
            <button className="text-[#894862] font-bold active:text-[#894862] hover:text-[#894862]/60">
              Home
            </button>
          </div>
          <div className="my-3">
            <button className="text-[#894862] font-bold active:text-[#894862]/60 hover:text-yellow-400">
              About
            </button>
          </div>
          <div className="my-3">
            <button className="text-[#894862] font-bold hover:text-[#894862]/60">
              Works
            </button>
          </div>
          <div className="my-3">
            <button className="text-[#894862] font-bold hover:text-[#894862]/60">
              Contact
            </button>
          </div>
          <div className="my-3">
            <button className="rounded-full border-[#894862] border-[1px] px-3 py-[1px] text-[#894862] font-semibold bg-[#F4EBF0] shadow-white/70 active:shadow-inner active:shadow-black/40 active:bg-[#894862] active:text-[#F4EBF0]">
              Say hello!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
