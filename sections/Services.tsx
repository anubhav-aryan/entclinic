import React from "react";
import Image from "next/image";
const Services = () => {
  return (
    <div className="w-wrapper mx-auto h-[70vh] flex items-center font-poppins">
      <div className="w-full">
        <div className="--heading font-bold text-4xl mb-6">Our Services</div>
        <div className="--items w-full flex justify-between">
          <div className="--service-item w-[30%] ">
            <Image
              src="/service1.png"
              alt="logo"
              width={300}
              height={300}
              className="w-full"
            />
            <div className="--description font-medium text-xl mt-4">
              Immediate Care
            </div>
          </div>
          <div className="--service-item w-[30%] ">
            <Image
              src="/service2.png"
              alt="logo"
              width={300}
              height={300}
              className="w-full"
            />
            <div className="--description font-medium text-xl mt-4">
              Dental Care
            </div>
          </div>
          <div className="--service-item w-[30%] ">
            <Image
              src="/service3.png"
              alt="logo"
              width={300}
              height={300}
              className="w-full"
            />
            <div className="--description font-medium text-xl mt-4">
              Diagnostic Center
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
