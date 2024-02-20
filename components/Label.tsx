import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Props {
  img: string;
  heading: string;
  subheading: string;
  link?: string;
  onClickHandler?: React.Dispatch<React.SetStateAction<boolean>>;
}
const Label = ({ img, heading, subheading, link, onClickHandler }: Props) => {
  if (link) {
    return (
      <Link
        href={link}
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
  }
  return (
    <div
      className="label laptop:w-[49%] mobile:w-full flex gap-2 mb-4 cursor-pointer"
      onClick={() => {
        onClickHandler && onClickHandler(true);
      }}
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
    </div>
  );
};

export default Label;
