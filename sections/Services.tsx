import React from "react";
import Image from "next/image";
const Services = () => {
  return (
      <div className="w-full" id="services">
        <div className="--heading font-bold text-4xl mb-6">Our Services</div>
        <div className="--items w-full flex justify-between">
          <div className="--service-item w-[30%] ">
            <Image
              src="/earinfection.jpeg"
              alt="logo"
              width={300}
              height={300}
              className="w-1/3"
            />
            <div className="--description font-medium tablet:tablet:text-xl mt-4">
              Ear infections
            </div>
          </div>
          <div className="--service-item w-[30%] ">
            <Image
              src="/hearingloss.jpeg"
              alt="logo"
              width={300}
              height={300}
              className="w-1/3"
            />
            <div className="--description font-medium tablet:text-xl mt-4">
              Hearing loss
            </div>
          </div>
          <div className="--service-item w-[30%] ">
            <Image
              src="/service3.png"
              alt="logo"
              width={300}
              height={300}
              className="w-1/3"
            />
            <div className="--description font-medium tablet:text-xl mt-4">
              Paediatric ENT problems
            </div>
          </div>
        </div>
        <div className="--items w-full flex justify-between py-10">
          <div className="--service-item w-[30%] ">
            <Image
              src="/thyroid.jpeg"
              alt="logo"
              width={300}
              height={300}
              className="w-1/3"
            />
            <div className="--description font-medium tablet:text-xl mt-4">
              Thyroid Problems
            </div>
          </div>
          <div className="--service-item w-[30%] ">
            <Image
              src="/sleepapnea.jpeg"
              alt="logo"
              width={300}
              height={300}
              className="w-1/3"
            />
            <div className="--description font-medium tablet:text-xl mt-4">
              Sleep apnea
            </div>
          </div>
          <div className="--service-item w-[30%] ">
            <Image
              src="/snoring.jpeg"
              alt="logo"
              width={300}
              height={300}
              className="w-1/3"
            />
            <div className="--description font-medium tablet:text-xl mt-4">
              Snoring
            </div>
          </div>
        </div>
      </div>
  );
};

export default Services;
