import React from "react";
import Image from "next/image";
interface Props {
  img: string;
  name: string;
  position: string;
  patients: number;
  hospital: string;
}
const DoctorCard = ({ img, name, position, patients, hospital }: Props) => {
  return (
    <div className="w-[30%] aspect-[1.2] rounded-2xl flex flex-col justify-between gap-4 bg-white cursor-pointer p-6 mb-6 hover:shadow-lg font-poppins transition-all duration-200 ease-linear">
      <Image
        src={`/${img}`}
        alt="logo"
        width={100}
        height={100}
        className="w-48"
      />
      <div className="">
        <h1 className="--name text-2xl font-semibold">{name}</h1>
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
