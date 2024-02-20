import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Props {
  img: string;
  heading: string;
  subheading: string;
  link?: string;
}
const Label = ({ img, heading, subheading, link }: Props) => {
  return (
    <Link
      href={`${link ?? "/"}`}
      className="label laptop:w-[49%] mobile:w-full flex gap-2 mb-4"
    >
      <Image
        src={`/${img}`}
        alt="icon"
        width={60}
        height={60}
        className="w-8 h-8"
      />
      <div className="content">
        <p className=" font-medium">{heading}</p>
        <p className="text-sm">{subheading}</p>
      </div>
    </Link>
  );
};

export default Label;
