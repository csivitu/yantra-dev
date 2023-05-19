import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-around items-center w-full h-[7.5vh]">
        <div className="w-[20%] h-full p-1">
          <Image
            src="/assets/vit-logo.png"
            alt="logo"
            height={10000}
            width={10000}
            className="h-full object-contain"
          />
        </div>
        <div className="w-[80%] h-full flex justify-end items-center">
          <div className="w-[10%]">About Us</div>
          <div className="w-[10%]">Workshops</div>
          <div className="w-[10%]">Hackathons</div>
          <div className="w-[10%]">Team</div>
          <div className="w-[10%]">Register</div>
        </div>
      </div>
    </>
  );
};

export default Header;
