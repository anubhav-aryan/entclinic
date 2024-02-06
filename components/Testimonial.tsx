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
            name="Anubhav Aryan"
            review="I am incredibly grateful for the exceptional care I received from Dr. Swapna, the ENT specialist. Dr. Swapna's expertise, compassionate approach, and thorough examination made me feel confident in the diagnosis and treatment of my ear and throat issues. The entire experience, from the friendly and efficient staff to the state-of-the-art facilities, reflected a commitment to patient well-being. I highly recommend Dr. Smith to anyone seeking top-notch ENT care. Thank you for restoring my health and providing a positive medical journey!"
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
