import React from "react";
import Image from "next/image";
import InfoCard from "@/components/InfoCard";
const WhyUs = () => {
  return (
    <div className="w-wrapper mx-auto h-[90vh] flex items-center font-poppins ">
      <div className="w-full">
        <div className="--heading font-bold text-4xl mb-10">Why us?</div>
        <div className="--items w-full flex flex-wrap justify-between">
          <InfoCard
            img="info1.svg"
            heading="DNA Diagnostics"
            description="We are proud to announce that we provide high quality diagnostics for DNA"
          />
          <InfoCard
            img="info2.svg"
            heading="Insurance"
            description="You can get our insurance to not care of any financial difficulties in future."
          />
          <InfoCard
            img="info3.svg"
            heading="Medical Support"
            description="We have a huge amount of high quality medicine from Germany"
          />
          <InfoCard
            img="info4.svg"
            heading="Lab Achievements"
            description="iMedical has 12 laboratory achievements that have world level impact in medicine."
          />
          <InfoCard
            img="info5.svg"
            heading="24/7 Clean"
            description="We care about having a clean and safe rooms for our patients"
          />
          <InfoCard
            img="info6.svg"
            heading="Training Routine"
            description="Our doctors will help you get personal training routine to get the best results"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
