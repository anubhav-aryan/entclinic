import React from "react";
import Image from "next/image";
interface Props {
  img: string;
  name: string;
  review: string;
}
const TestimonialCard = ({ img, name, review }: Props) => {
  return (
    <div className="tablet:w-[48%] mobile:w-full flex justify-between items-start gap-4 tablet:p-6 mobile:p-2 bg-[#faefec] rounded-2xl hover:bg-[#CF7D4E] mobile:flex-col tab:flex-row">
      <Image
        src={`/${img}`}
        alt="logo"
        width={60}
        height={60}
        className="w-16"
      />
      <div className="--testimonial-content flex flex-col h-full gap-2 ">
        <h1 className="--name text-2xl font-bold">{name}</h1>
       
        <div className="--review text-subheading mobile:break-words ">{review}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
