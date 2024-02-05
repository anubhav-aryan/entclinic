import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="text-gray-400 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            //image logo 
            <span className="ml-3 text-xl text-black font-bold">SCENT.</span>
          </a>
          <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg font-medium justify-center gap-12">
            <a className="mr-5 text-gray-700" href="/">Home</a>
            <a className="mr-5 text-gray-700" href="/">Our Services</a>
            <a className="mr-5 text-gray-700" href="/">Blog</a>
            <a className="mr-5 text-gray-700" href="/">About Us</a>
            <a className="mr-5 text-gray-700" href="/">Contact Us</a>
          </div>
          <button className="inline-flex items-center bg-[#24BEE0] border-0 rounded-full py-3 px-5 font-semibold focus:outline-none text-white">
            Make Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
