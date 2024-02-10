import React from "react";
import Image from "next/image";
interface Props {
  img: string;
  name: string;
  position: string;
  patients: string;
  hospital: string;
  education: string;
}
const DoctorCard = ({ img, name, position, patients, hospital, education }: Props) => {
  return (
    <div className="mobile:w-[30%] tablet:w-[45%] laptop:flex-nowrap aspect-[1.2] rounded-2xl flex flex-col justify-between gap-4 bg-white cursor-pointer tablet:p-6 mobile:p-2  hover:shadow-lg font-poppins transition-all duration-200 ease-linear">
      <Image
        src={`/${img}`}
        alt="logo"
        width={700}
        height={700}
        className="w-72"
      />
      <div className="">
        <h1 className="--name tablet:text-2xl font-semibold">{name}</h1>
        <h3 className="--education text-subheading text-sm">{education}</h3>
        <h3 className="--position text-subheading text-sm">{position}</h3>
      </div>
      <div className="">
        <p className="--patients text-[#0F97B5]">+ {patients} Happy Patients</p>
        <p className="--hospital text-subheading text-sm">{hospital}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
