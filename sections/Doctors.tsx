import React from "react";
import DoctorCard from "@/components/DoctorCard";
const Doctors = () => {
  return (
    <div className="w-full  flex items-center font-poppins bg-[#f5f6f4]">
      <div className="w-full">
        <div className="--header flex justify-between items-center mb-10">
          <div className="--heading font-bold text-4xl">
            Our Qualified Doctor
          </div>
        </div>
        <div className=" w-full flex mobile:flex-wrap laptop:flex-nowrap tablet:gap-[1rem] justify-around mobile:gap-[1rem] py-[1rem]">
          <DoctorCard
            img="Dr_Swapna_C_A_f039837fe4.webp"
            name="Dr. Swapna. C.A"
            position="Leading ENT"
            patients={500}
            hospital="with 15+ Years Of Experiance"
          />
          {/* <DoctorCard
            img="doc2.png"
            name="Dr. Allison Pretty"
            position="Consultant Dentist"
            patients={320}
            hospital="iMedical Central Clinic, LA"
          />
          <DoctorCard
            img="doc3.png"
            name="Dr. Rebecca Flows"
            position="Leading Diagnostic Doctor"
            patients={900}
            hospital="iMedical Central Clinic, LA"
          />
          <DoctorCard
            img="doc4.png"
            name="Dr. Maria Anderson"
            position="Leading Diagnostic Doctor"
            patients={500}
            hospital="iMedical Central Clinic, LA"
          />
          <DoctorCard
            img="doc5.png"
            name="Dr. Derek Mendes"
            position="Consultant Dentist"
            patients={320}
            hospital="iMedical Central Clinic, LA"
          />
          <DoctorCard
            img="doc6.png"
            name="Dr. Bob Singer"
            position="Leading Diagnostic Doctor"
            patients={900}
            hospital="iMedical Central Clinic, LA"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
