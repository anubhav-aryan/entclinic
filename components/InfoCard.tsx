import React from "react";
import Image from "next/image";
interface Props {
  img: string;
  heading: string;
  description: string;
}
const InfoCard = ({ img, heading, description }: Props) => {
  return (
    <div className="w-[28%] aspect-[1.2] rounded-2xl flex flex-col gap-4 hover:bg-[#f3fdfe] cursor-pointer p-4 mb-4 hover:shadow-lg">
      <Image
        src={`/${img}`}
        alt="logo"
        width={60}
        height={60}
        className="w-16"
      />
      <h1 className="--heading text-2xl font-semibold">{heading}</h1>
      <h3 className="--description text-subheading text-sm">{description}</h3>
    </div>
  );
};

export default InfoCard;
