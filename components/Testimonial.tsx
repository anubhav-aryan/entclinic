import React from "react";
import Image from "next/image";
import InfoCard from "@/components/InfoCard";
import TestimonialCard from "./TestimonialCard";
const Testimonial = () => {
  return (
    <div className="w-wrapper mx-auto h-[70vh] flex items-center font-poppins ">
      <div className="w-full">
        <div className="--heading font-bold text-4xl mb-10">Testimonials</div>
        <div className="--items w-full flex flex-wrap justify-between">
          <TestimonialCard
            img="test1.png"
            name="Sofia Potter"
            review="These guys are incredible to work with. Like seriously! They did everything so good, that I did not even imagine it would come up this awesome! Really looking forward to working with them again."
          />
          <TestimonialCard
            img="test2.png"
            name="Jordan Browler"
            review="These guys are incredible to work with. Like seriously! They did everything so good, that I did not even imagine it would come up this awesome! Really looking forward to working with them again."
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
