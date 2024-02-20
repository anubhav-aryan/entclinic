import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
const Header = () => {
  const [showSingleSubMenu, setShowSingleSubMenu] = useState(false);
  const [showDoubleSubMenu, setShowDoubleSubMenu] = useState(false);
  const [selectedSubMenu, setSelectedSubMenu] = useState(-1);
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
              className="w-80"
            />
          </a>
          <div className="flex flex-wrap laptop:items-center text-lg laptop:justify-around font-medium justify-center mobile:items-start tablet:gap-8 mobile:gap-4 text-[rgba(6, 33, 38, 0.6)] w-full relative">
            <Link href="/">Home</Link>
            <div className="relative">
              <div
                className="cursor-pointer"
                onClick={() => {
                  setShowSingleSubMenu(!showSingleSubMenu);
                  setSelectedSubMenu(-1);
                }}
              >
                ENT Conditions
              </div>
              {showSingleSubMenu && (
                <div
                  className="overlay w-screen h-screen fixed top-0 left-0 z-[100]  "
                  onClick={() => {
                    setShowSingleSubMenu(false);
                    setSelectedSubMenu(-1);
                  }}
                ></div>
              )}
              {showSingleSubMenu && (
                <div className="w-fit text-nowrap p-1 bg-white flex flex-col absolute top-10  left-1/2 -translate-x-1/2 shadow-2xl z-[150] rounded-xl text-sm">
                  <div
                    className="hover:bg-[#aeaeae30] px-4 py-2 cursor-pointer"
                    onMouseEnter={() => {
                      setSelectedSubMenu(0);
                      setShowDoubleSubMenu(true);
                    }}
                  >
                    Ear Conditions
                  </div>
                  <div
                    className="hover:bg-[#aeaeae30] px-4 py-2 cursor-pointer"
                    onMouseEnter={() => {
                      setSelectedSubMenu(1);
                      setShowDoubleSubMenu(true);
                    }}
                  >
                    Nose Conditions
                  </div>
                  <div
                    className="hover:bg-[#aeaeae30] px-4 py-2 cursor-pointer"
                    onMouseEnter={() => {
                      setSelectedSubMenu(2);
                      setShowDoubleSubMenu(true);
                    }}
                  >
                    Throat Conditions
                  </div>
                  {showDoubleSubMenu && (
                    <div className="hidden tablet:flex w-fit text-nowrap p-1 bg-white  flex-col absolute top-8 text-sm left-[100%] shadow-2xl z-[150] rounded-xl">
                      {selectedSubMenu >= 0 &&
                        subMenuData[selectedSubMenu].map((item, index) => (
                          <div className="hover:bg-[#aeaeae30] px-4 py-2 cursor-pointer">
                            {item}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              )}
            </div>
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

const subMenuData = [
  [
    "Dizziness & Balance Problems",
    "Ear Drum Perforations",
    "Ear Wax & Blocked Ears",
    "Exostoses Or Surfer's Ear",
    "Hearing Loss",
    "Middle Ear Infection & Glue Ear",
    "Tinnitus 'Ringing In The Year'",
    "Tumours Of The Year",
  ],
  [
    "Blocked / Runny Nose",
    "Broken Nose (Nasal Fractures)",
    "Hayfever & Allergic Rhinitis",
    "Nasal Tumours",
    "Nosebleeds & Nasal Cautery",
    "Rhinoplasty",
    "Sinusitis",
    "Snoring & Sleep Apnoea",
  ],
  [
    "Cough",
    "Mouth, Throat, Head & Neck Cancer",
    "Recurrent Tonsillitis",
    "Reflux",
    "Salivary Gland Disorders",
    "Swallowing Disorders",
    "Temporomandibular Joint (TMJ) Disorders",
    "Tonsils And Adenoids",
    "Voice Disorders",
  ],
];
