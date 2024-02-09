import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="w-full" id="services">
      <div className="--heading font-bold text-4xl mb-6">Our Services</div>
      <div className="--items w-full flex justify-between">
        <div className="--service-item w-[30%] ">
          <div className="image-container">
            <Image
              src="/earinfection.jpeg"
              alt="logo"
              width={300}
              height={300}
              className="w-full"
            />
          </div>
          <div className="--description font-medium tablet:text-xl mt-4">
            Ear infections
          </div>
        </div>
        <div className="--service-item w-[30%] ">
          <div className="image-container">
            <Image
              src="/hearingloss.jpeg"
              alt="logo"
              width={300}
              height={300}
              className="w-full"
            />
          </div>
          <div className="--description font-medium tablet:text-xl mt-4">
            Hearing loss
          </div>
        </div>
        <div className="--service-item w-[30%] ">
          <div className="image-container">
            <Image
              src="/childent.jpeg"
              alt="logo"
              width={300}
              height={300}
              className="w-full"
            />
          </div>
          <div className="--description font-medium tablet:text-xl mt-4">
            Paediatric ENT problems
          </div>
        </div>
      </div>
      <div className="--items w-full flex justify-between py-10">
        <div className="--service-item w-[30%] ">
          <div className="image-container">
            <Image
              src="/thyroid.jpeg"
              alt="logo"
              width={300}
              height={300}
              className="w-full"
            />
          </div>
          <div className="--description font-medium tablet:text-xl mt-4">
            Thyroid Problems
          </div>
        </div>
        <div className="--service-item w-[30%] ">
          <div className="image-container">
            <Image
              src="/sleepapnea.jpeg"
              alt="logo"
              width={300}
              height={300}
              className="w-full"
            />
          </div>
          <div className="--description font-medium tablet:text-xl mt-4">
            Sleep apnea
          </div>
        </div>
        <div className="--service-item w-[30%] ">
          <div className="image-container">
            <Image
              src="/snoring.jpeg"
              alt="logo"
              width={300}
              height={300}
              className="w-full"
            />
          </div>
          <div className="--description font-medium tablet:text-xl mt-4">
            Snoring
          </div>
        </div>
      </div>
      <style jsx>{`
        .image-container {
          width: 400px; /* Set your desired width */
          height: 300px; /* Set your desired height */
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Services;
