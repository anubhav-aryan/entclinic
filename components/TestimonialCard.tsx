import React from "react";
import Image from "next/image";
interface Props {
  img: string;
  name: string;
  review: string;
}
const TestimonialCard = ({ img, name, review }: Props) => {
  return (
    <div className="w-[48%] flex justify-between items-start gap-4 p-6 bg-[#faefec] rounded-2xl hover:bg-[#CF7D4E]">
      <Image
        src={`/${img}`}
        alt="logo"
        width={60}
        height={60}
        className="w-16"
      />
      <div className="--testimonial-content flex flex-col h-full gap-2 ">
        <h1 className="--name text-2xl font-bold">{name}</h1>
        <div className="--rating-box flex gap-2">
          <Image
            src="/star.svg"
            alt="logo"
            width={60}
            height={60}
            className="w-3"
          />
          <Image
            src="/star.svg"
            alt="logo"
            width={60}
            height={60}
            className="w-3"
          />
          <Image
            src="/star.svg"
            alt="logo"
            width={60}
            height={60}
            className="w-3"
          />
          <Image
            src="/star.svg"
            alt="logo"
            width={60}
            height={60}
            className="w-3"
          />
          <Image
            src="/star.svg"
            alt="logo"
            width={60}
            height={60}
            className="w-3"
          />
        </div>
        <div className="--review text-subheading">{review}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
