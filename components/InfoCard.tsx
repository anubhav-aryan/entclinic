import React from "react";
import Image from "next/image";
interface Props {
  img: string;
  heading: string;
  description: string;
}
const InfoCard = ({ img, heading, description }: Props) => {
  return (
    <div className="w-full tablet:w-[28%] mb-6 tablet:aspect-[1.2] rounded-2xl flex flex-col gap-4 hover:bg-[#f3fdfe] cursor-pointer mobile:p-1  tablet:p-4 hover:shadow-lg">
      <Image
        src={`/${img}`}
        alt="logo"
        width={60}
        height={60}
        className="w-16"
      />
      <h1 className="--heading tablet:text-2xl mobile:text-sm laptop:text-3xl font-semibold mobile:break-words ">
        {heading}
      </h1>
      <h3 className="--description text-subheading mobile:text-sm laptop:text-xl">
        {description}
      </h3>
    </div>
  );
};

export default InfoCard;
