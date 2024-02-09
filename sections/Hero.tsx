import React from "react";
import Image from "next/image";
import Label from "@/components/Label";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="mobile:gap-[1rem] w-full flex mobile:justify-between tablet:justify-center font-poppins mobile:flex-col tablet:flex-row items-center">
      <div className=" w-full h-full flex flex-col gap-[1rem]">
        <div className=" tablet:text-5xl font-bold mobile:text-3xl mobile:text-left">
          Feel The Senses 
        </div>
        <div className="--sub-heading text-subheading">
          Dr. Swapna's clinic for ENT, is a medical facility that specializes in
          diagnosing and treating disorders of the ears, nose, and throat (ENT).
        </div>
        <div className="--informatics w-full h-fit p-6 bg-[#f5eae6] rounded-2xl flex gap-[2%] mobile:flex-col tablet:flex-row mobile:items-center tablet:flex-wrap">
          {/* <Label
              img={"Calendar.svg"}
              heading={"Make an Appointment"}
              subheading={"Select best time for you."}
            /> */}
          {/* <Label
              img={"user.svg"}
              heading={"Find the Best Doctor"}
              subheading={"find the best doctor in a minute"}
            /> */}
          <Label
            img={"Location.svg"}
            heading={"Visit the clinic"}
            subheading={"take care of your issues"}
          />
          <Label
            img={"Message.svg"}
            heading={"Ask Questions"}
            subheading={"Ask questions any time"}
          />
        </div>
        <Link href="/#appointment">
          <div className="w-full flex gap-8 items-center mobile:flex-col tablet:flex-row mobile:flex-row">
            <button className="inline-flex items-center bg-[#24BEE0] border-0 rounded-full py-3 px-5 font-semibold focus:outline-none text-white">
              Make Appointment &rarr;
            </button>
            <div className="flex flex-col gap-2 text-[rgba(207, 125, 78, 1)] font-medium text-xs">
              <p>Mon - Tue - Fri - Sat 10AM-1PM, 4PM-8PM</p>
              <p>Wed - Thu 4PM-8PM</p>
              <p>Sun - Closed</p>
            </div>
          </div>
        </Link>
      </div>
      <Image
        src="/hero_banner.png"
        alt=""
        width={350}
        height={600}
        className=""
      />
    </div>
  );
}
