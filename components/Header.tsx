import Image from "next/image";
import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <div className="text-gray-400 body-font w-full">
        <div className=" w-full flex mobile:flex-wrap laptop:flex-nowrap tablet:flex-row items-center justify-between mobile:flex-col mobile:items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image
              src="/Final Logo Updated.svg"
              alt="logo"
              width={200}
              height={200}
              className="w-52"
            />
          </a>
          <div className="flex flex-wrap laptop:items-center text-lg laptop:justify-around font-medium justify-center mobile:items-start tablet:gap-8 mobile:gap-2 text-[rgba(6, 33, 38, 0.6)] w-full">
            <Link href="/">Home</Link>
            <Link href="/#services">Our Services</Link>
            {/* <Link href="/">Blog</Link> */}
            {/* <Link href="/">About Us</Link> */}
            <Link href="/#footer">Contact Us</Link>
            <Link href="/#appointment">
              <button className=" items-center bg-[#24BEE0] border-0 rounded-full tablet:py-3 tablet:px-5 mobile:p-2 font-semibold focus:outline-none text-white mobile:hidden tablet:block">
                Make Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
