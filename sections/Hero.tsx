import React from "react";
import Image from "next/image";
import Label from "@/components/Label";
export default function Hero() {
  return (
    <div className="w-wrapper mx-auto my-8 ">
      <div className="--content-wrapper w-full flex justify-between font-poppins">
        <div className="--content w-[50%] h-full">
          <div className="--heading text-6xl font-bold">
            Feel Comfort
            <br />
            Be Healthy
          </div>
          <div className="--sub-heading text-subheading my-6">
            Dr. Swapna's clinic for ENT, is a medical facility that specializes
            in diagnosing and treating disorders of the ears, nose, and throat
            (ENT).
          </div>
          <div className="--informatics w-full h-fit p-6 bg-[#f5eae6] rounded-2xl flex flex-wrap gap-[2%]">
            <Label
              img={"Calendar.svg"}
              heading={"Make an Appointment"}
              subheading={"Select best time for you."}
            />
            <Label
              img={"user.svg"}
              heading={"Find the Best Doctor"}
              subheading={"find the best doctor in a minute"}
            />
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
          <div className="w-full flex gap-8 items-center mt-6">
            <button className="inline-flex items-center bg-[#24BEE0] border-0 rounded-full py-3 px-5 font-semibold focus:outline-none text-white">
              Make Appointment &rarr;
            </button>
            <div className="flex flex-col gap-2 text-[rgba(207, 125, 78, 1)] font-medium">
              <p>Mon-Tues-Fri-Sat 10AM-1PM, 3PM-7PM</p>
              <p>Wed-Thur 4PM-7PM</p>
              <p>Sun Closed</p>
            </div>
          </div>
        </div>
        <Image
          src="/hero_banner.png"
          alt=""
          width={350}
          height={600}
          className=""
        />
      </div>
    </div>
  );
}
