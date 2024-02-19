import React from "react";
import Image from "next/image";
const data = [
  {
    img: "/earinfection.jpeg",
    title: "Ear infections",
  },
  {
    img: "/hearingloss.jpeg",
    title: "Hearing Loss",
  },
  {
    img: "/childent.jpeg",
    title: "Paediatric ENT Problems",
  },
  {
    img: "/thyroid.jpeg",
    title: "Thyroid Problems",
  },
  {
    img: "/sleepapnea.jpeg",
    title: "Sleep Apnea",
  },
  {
    img: "/snoring.jpeg",
    title: "Snoring",
  },
];
const Services = () => {
  return (
    <div className="w-full" id="services">
      <div className="--heading font-bold text-4xl mb-6">Our Services</div>
      <div className="--items w-full flex justify-between flex-wrap">
        {data.map((item, i) => (
          <ImageBox img={item.img} title={item.title} key={i} />
        ))}
      </div>
      {/* <div className="--items w-full flex justify-between py-10">
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
            Sleep Apnea
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
      </div> */}
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

interface BoxProps {
  img: string;
  title: string;
}
function ImageBox({ img, title }: BoxProps) {
  return (
    <>
      <div className="--service-item w-[100%] tablet:w-[30%] rounded-lg overflow-hidden mb-6 tablet:mb-12 relative">
        <div className="image-container">
          <Image
            src={img}
            alt="logo"
            width={300}
            height={300}
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="--description absolute bottom-0 left-0 z-[100] font-medium text-sm tablet:text-base  mt-4 bg-[#24bee0] w-full py-1 text-white text-center">
          {title}
        </div>
      </div>
    </>
  );
}
