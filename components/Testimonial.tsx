import React from "react";
import Image from "next/image";
import InfoCard from "@/components/InfoCard";
import TestimonialCard from "./TestimonialCard";
const Testimonial = () => {
  return (
    <div className="w-fullflex items-center font-poppins ">
      <div className="w-full">
        <div className=" font-bold text-4xl mb-10">Testimonials</div>
        <div className=" w-full flex mobile:flex-col tablet:flex-row justify-between mobile:gap-[1rem]">
          <TestimonialCard
            img="Screenshot from 2024-02-09 20-48-04.png"
            name="Anubhav Aryan"
            review="I am incredibly grateful for the exceptional care I received from Dr. Swapna, the ENT specialist. Dr. Swapna's expertise, compassionate approach, and thorough examination made me feel confident in the diagnosis and treatment of my ear and throat issues. The entire experience, from the friendly and efficient staff to the state-of-the-art facilities, reflected a commitment to patient well-being. I highly recommend Dr. Swapna to anyone seeking top-notch ENT care. Thank you for restoring my health and providing a positive medical journey!"
          />
          <TestimonialCard
            img="Screenshot from 2024-02-09 20-51-33.png"
            name="Tejjas Singh"
            review="Dr. Swapna is a true lifesaver! Her expertise and personalized care helped me find relief from chronic sinus problems that plagued me for years. From her warm demeanor to his effective treatment plan, I couldn't be more grateful. If you're seeking relief from sinus issues, Dr. Swapna is the one to see. Thank you for improving my quality of life!"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
