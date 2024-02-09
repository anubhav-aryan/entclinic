import React from "react";
import Image from "next/image";
import InfoCard from "@/components/InfoCard";
const WhyUs = () => {
  return (
    <div className="w-full flex items-center font-poppins ">
      <div className="w-full">
        <div className="--heading font-bold text-4xl mb-10">Why us?</div>
        <div className="--items w-full flex flex-wrap justify-between">
          <InfoCard
            img="info1.svg"
            heading="Top Facilities"
            description="State-of-the-art facilities equipped with the latest technology for precise diagnostics and effective treatments."
          />
          <InfoCard
            img="info2.svg"
            heading="Patient-centered care"
            description="We prioritize your comfort and well-being, offering personalized treatment plans tailored to your specific needs and concerns."
          />
          <InfoCard
            img="info3.svg"
            heading="Medical Support"
            description="We have a huge amount of high quality medicine from Germany"
          />
          <InfoCard
            img="info4.svg"
            heading="Advanced technology"
            description="Our clinic is equipped with state-of-the-art diagnostic tools and innovative treatment options to ensure accurate diagnoses."
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
