import Image from "next/image";
import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <div className="text-gray-400 body-font">
        <div className=" w-full mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image
              src="/Final Logo Updated.svg"
              alt="logo"
              width={200}
              height={200}
              className="w-52"
            />
          </a>
          <div className="flex flex-wrap laptop:items-center text-lg  font-medium justify-center mobile:items-start gap-8 text-[rgba(6, 33, 38, 0.6)]">
            <Link href="/">Home</Link>
            <Link href="/">Our Services</Link>
            {/* <Link href="/">Blog</Link> */}
            <Link href="/">About Us</Link>
            <Link href="/">Contact Us</Link>
            <button className=" items-center bg-[#24BEE0] border-0 rounded-full py-3 px-5 font-semibold focus:outline-none text-white">
            Make Appointment
          </button>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Header;
