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
            heading="Patient-Centered Care"
            description="We prioritize your comfort and well-being, offering personalized treatment plans tailored to your specific needs and concerns."
          />
          <InfoCard
            img="info3.svg"
            heading="Patient Education"
            description="We empower our patients with knowledge about their conditions and treatment options, allowing them to make informed decisions about their health and participate actively in their care."
          />
          <InfoCard
            img="info4.svg"
            heading="Patient Testimonials"
            description="Don't just take our word for it – read testimonials from satisfied patients who have experienced the quality care and positive outcomes that our clinic provides."
          />
          <InfoCard
            img="info5.svg"
            heading="24/7 Clean"
            description="We care about having a clean and safe environment for our patients"
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
